#!/usr/bin/env python3
"""Publishes a Sylvics release into this repository's system/ folder.

    python3 publish_system.py --vault "<Example vault>" --repo "<this repository>" --version 0.9.1 --notes "What changed"

It lists the files that belong to Sylvics in the vault, hashes them the way the plugin does
(src/neural-core/community/SystemUpdates.ts), and writes system/manifest.json. Every file whose hash differs from
the previous release is copied to system/files/<vault path>. With --full, every text file is stored too, so the
repository holds a complete copy of Sylvics' pages (the art is added only when it changes). Run it with
--dry-run first: it prints what would change and writes nothing.

What belongs to Sylvics (example notes, flagged `demo: true`, never do):
  replace     the guide, templates, scripts, Sylvics art, and the four onboarding pages at the vault root
  merge-body  every other page with `sylvics-system: true`, every page in 00 - Atlas, every "...Masterpage"
              (only the body updates; the tester's property values stay)
"""
import argparse, datetime, hashlib, json, os, re, shutil, sys

REPLACE_DIRS = ['99 - Meta/1. System/Guide', '99 - Meta/2. Templates', '99 - Meta/3. Scripts', '99 - Meta/4. Attachments/3. Sylvics Art']
ROOT_PAGES = ['🚀 Start Here.md', '👋 Welcome to The Sylvics Vault.md', '💬 About this beta.md', '🌱 Choose what you see.md']
TEXT_EXT = {'.md', '.txt', '.json', '.js', '.css', '.csv', '.canvas', '.base'}
FM = re.compile(r'^﻿?---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)')


def norm(text):
    return text.replace('\r\n', '\n')


def body(text):
    t = norm(text)
    m = FM.match(t)
    return t[m.end():] if m else t


def sha(data):
    return hashlib.sha256(data if isinstance(data, bytes) else data.encode('utf-8')).hexdigest()


def frontmatter(text):
    m = FM.match(norm(text))
    return m.group(0) if m else ''


def is_demo(text):
    return bool(re.search(r'^(demo|Demo|sylvics-example):\s*true\s*$', frontmatter(text), re.M))


def owned(vault):
    """(vault path, policy) for every Sylvics file."""
    out = {}
    for d in REPLACE_DIRS:
        for root, dirs, files in os.walk(os.path.join(vault, d)):
            dirs[:] = [x for x in dirs if not x.startswith('.')]
            for f in files:
                if f.startswith('.'):
                    continue
                out[os.path.relpath(os.path.join(root, f), vault)] = 'replace'
    for p in ROOT_PAGES:
        if os.path.exists(os.path.join(vault, p)):
            out[p] = 'replace'
    for root, dirs, files in os.walk(vault):
        dirs[:] = [x for x in dirs if not x.startswith('.')]
        for f in files:
            if not f.endswith('.md'):
                continue
            rel = os.path.relpath(os.path.join(root, f), vault)
            if rel in out:
                continue
            head = open(os.path.join(root, f), encoding='utf-8', errors='replace').read(4000)
            if re.search(r'^sylvics-system:\s*true\s*$', frontmatter(head), re.M) or rel.startswith('00 - Atlas/') or re.search(r'Masterpage\.md$', f):
                out[rel] = 'merge-body'
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--vault', required=True)
    ap.add_argument('--repo', required=True)
    ap.add_argument('--version', required=True)
    ap.add_argument('--notes', default='')
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--full', action='store_true', help='also store every unchanged text file, so any page can be restored')
    a = ap.parse_args()
    man_path = os.path.join(a.repo, 'system', 'manifest.json')
    prev = {}
    if os.path.exists(man_path):
        prev = {f['path']: f for f in json.load(open(man_path, encoding='utf-8'))['files']}
    entries, copy, skipped_demo = [], [], 0
    for rel, policy in sorted(owned(a.vault).items()):
        full = os.path.join(a.vault, rel)
        binary = os.path.splitext(rel)[1].lower() not in TEXT_EXT
        raw = open(full, 'rb').read()
        if not binary:
            text = raw.decode('utf-8', errors='replace')
            if rel.endswith('.md') and is_demo(text):
                skipped_demo += 1
                continue
            h = sha(body(text) if policy == 'merge-body' else norm(text))
        else:
            h = sha(raw)
        p = prev.get(rel)
        if p is None and not prev:
            known = [h]                       # first release: what ships in the vault counts as published
        elif p is None:
            known = []                        # new in this release
        else:
            known = sorted(set(p.get('known', [])) | {p['sha256']} | {h})
            if p.get('policy') != policy:
                print(f'  ! policy changed for {rel}: {p.get("policy")} -> {policy}')
        if p is not None and p['sha256'] != h or (p is None and prev):
            copy.append(rel)
        elif a.full and not binary and not os.path.exists(os.path.join(a.repo, 'system', 'files', rel)):
            copy.append(rel)
        e = {'path': rel, 'policy': policy, 'sha256': h, 'known': known, 'size': len(raw)}
        if binary:
            e['binary'] = True
        entries.append(e)
    removed = sorted(set(prev) - {e['path'] for e in entries})
    print(f'{len(entries)} Sylvics files ({sum(e["policy"] == "merge-body" for e in entries)} system pages), '
          f'{len(copy)} changed since the last release, {len(removed)} no longer listed, {skipped_demo} example pages left out.')
    for r in copy[:40]:
        print('  ~', r)
    for r in removed[:20]:
        print('  -', r)
    if a.dry_run:
        return
    for rel in copy:
        dest = os.path.join(a.repo, 'system', 'files', rel)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        shutil.copyfile(os.path.join(a.vault, rel), dest)
    manifest = {'format': 1, 'version': a.version, 'released': datetime.date.today().isoformat(), 'notes': a.notes, 'files': entries}
    os.makedirs(os.path.dirname(man_path), exist_ok=True)
    out = json.dumps(manifest, ensure_ascii=False, indent=1)
    json.loads(out)
    open(man_path, 'w', encoding='utf-8').write(out + '\n')
    print('written', man_path)


if __name__ == '__main__':
    sys.exit(main())

#!/usr/bin/env python3
"""Writes library/index.json: every file of the library with its Git blob hash and size, and the library's folders.

    python3 build_library_index.py <repository folder>

Sylvics reads this list from raw.githubusercontent.com (or jsDelivr when GitHub is slow), not from GitHub's API, so a
tester is never stopped by the API's request limit. Each download is checked against the Git blob hash listed here.
A folder's README.md is its description in the Library window; it is not offered as a note.
"""
import hashlib, json, os, sys

FOLDERS = [  # the vault's folders, in order; the Inbox is left out: imports never go there
    ('00 - Atlas', 'Maps and hubs to add to your Atlas'),
    ('02 - Planning', 'Goal, project and habit setups to start from'),
    ('03 - Areas', 'Tools for each part of life'),
    ('04 - Resources', 'Checklists, how-tos and reference sheets'),
    ('05 - Literature', 'What books, articles and courses say'),
    ('06 - Permanent', 'Ideas in one sentence, argued and linked'),
    ('07 - Journal', 'Prompts and review guides for your journal'),
    ('08 - Archive', 'Nothing to import here: the Archive holds your own finished work'),
    ('99 - Meta', 'Extra templates and art'),
]
EXT = {'.md', '.png', '.jpg', '.jpeg', '.gif', '.webp'}


def blob_sha(data):
    return hashlib.sha1(b'blob %d\0' % len(data) + data).hexdigest()


def main(repo):
    lib = os.path.join(repo, 'library')
    for name, line in FOLDERS:
        d = os.path.join(lib, name)
        os.makedirs(d, exist_ok=True)
        readme = os.path.join(d, 'README.md')
        if not os.path.exists(readme):
            open(readme, 'w', encoding='utf-8').write(f'# {name}\n\n{line}.\n')
    files = []
    for root, dirs, names in os.walk(lib):
        dirs[:] = sorted(x for x in dirs if not x.startswith('.'))
        for n in sorted(names):
            if n.startswith('.') or n.lower() == 'readme.md' or n == 'index.json' or os.path.splitext(n)[1].lower() not in EXT:
                continue
            p = os.path.join(root, n)
            data = open(p, 'rb').read()
            files.append({'path': 'library/' + os.path.relpath(p, lib).replace(os.sep, '/'), 'sha': blob_sha(data), 'size': len(data)})
    body = {'format': 1, 'folders': [{'path': f'library/{n}', 'line': l} for n, l in FOLDERS], 'files': files}
    body['id'] = hashlib.sha1(json.dumps(body, sort_keys=True).encode()).hexdigest()
    open(os.path.join(lib, 'index.json'), 'w', encoding='utf-8').write(json.dumps(body, ensure_ascii=False, indent=1) + '\n')
    print(len(files), 'files in library/index.json')


if __name__ == '__main__':
    main(sys.argv[1])

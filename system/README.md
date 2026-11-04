# system

The pages that belong to Sylvics, and how each one updates. Sylvics Core reads this folder from **Settings → Sylvics Core → Updates & library → Check for updates**.

- `manifest.json`: the current release (version, date, notes) and one entry per Sylvics file: its path in the vault, how it updates, its current hash and the hashes of its earlier versions.
- `files/`: the current version of every file that changed since the first release (0.9.0). Files unchanged since then are not stored here: every vault already has them.

How a file updates:
- `replace`: the whole file is Sylvics' (guide, templates, scripts, art).
- `merge-body`: a system page that holds your values in its properties. Only the page itself updates; your values stay.

A page you changed or deleted is left as it is. Your own notes are never listed here.

Releases are made with `tools/publish_system.py`.

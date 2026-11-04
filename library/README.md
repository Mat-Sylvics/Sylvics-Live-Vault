# library

Notes you can bring into your vault one by one, from **Settings → Sylvics Core → Updates & library → Library**.

The folders here mirror the vault's folders (00 - Atlas to 99 - Meta), so each note lands in its own home. `index.json` lists every file with its Git hash; Sylvics reads it instead of GitHub's API, so it is never stopped by GitHub's request limit. Rebuild it with `tools/build_library_index.py` after changing the library.

Every note carries `source: Sylvics library` in its properties, and the vault's **Library Index** lists every note you imported. A note you edited is never overwritten by an update.

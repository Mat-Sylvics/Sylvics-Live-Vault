---
type: guide
tags:
  - guide
sylvics-up: "[[00 Guide index]]"
obsidianUIMode: preview
sage: false
---

# Settings, licence, backup and updates

After this page you will know what each settings tab does, how to enter a licence key, how to keep your vault safe and how to install a new version without losing notes.

## Open the settings

`Cmd/Ctrl + ,` opens Obsidian's settings. In the list on the left, under Community plugins, choose **Sylvics Core Plugin**.

The Sylvics settings have eight sections. Click **☰** at the top left of the page, or move the pointer to the left edge, to see the list. The box **🔍 Search settings...** finds a setting by name across all sections.

## The eight sections

| Section | What is in it |
|---|---|
| **Sylvics HQ** | The licence key (see below) and links to the website and community. |
| **Visuals & UI** | For the graph: **Use classic graph**, **Name on your card** and **Exports folder** (see [[08 The graph]]; its quality is set in the graph itself). **Visual Quality**, **Adaptive Rendering (Auto-Pause)** and **Enable Search-in-Graph** for the classic graph. **Global Still-Mode** for slow computers. The look of the Homepage and Control Center: fading buttons, branding line, coloured folders. **Vault background** and the hours of the **Background Animation Cycle** (see below). |
| **Sage Agent** | The main switch **Enable Sage and AI features**, the provider and its key, **Semantic Context Size**, the privacy box, **Allow Sage to use the web**, **Folder for notes created by Sage**, **Embedding Mode** and **AI Persona**. See [[09 Sage]]. |
| **Agentic Skills** | A list of add-on scripts found in the vault. None ship with it. |
| **Privacy & Paths** | What Sage and the graph may not see: **Exclude System Defaults**, **Ghost Mode**, **Ignore Tags**, **Ignore Paths**. Also the **Large File Sweeper** (see Backup below) and **Vault Path Mappings**, which you should leave empty. |
| **Notifications** | **In-App Notification Overlays** and **Native OS Push Notifications**, with a **Test Pulse** button. **System Greetings**: the message shown when Obsidian opens, with one list each for morning, afternoon and evening. Turn it off here if you do not want it. |
| **Productivity** | How the Chronos timer tells you a session is over: an Obsidian notice, a Sylvics overlay, a system notification. |
| **Calendar** | The time-planning calendar shown inside [[02. Mission Deck]] and [[03. Life Review]]: first and last hour of the day, slot length, week start, and the folder tasks are read from. **Google Calendar Integration** needs your own Google developer credentials and is for advanced users. |

The quality setting has four levels: **Lush (Full Quality)**, **Balanced**, **Swift (Performance)** and **Still Mode (Battery Saver)**. The vault starts on Balanced.

## Light mode, dark mode and the background

Sylvics keeps one look in both of Obsidian's modes: green and violet on glass. Dark mode is the night version. Light mode is its daylight version, with pale frosted panels, dark text and deeper greens and violets. Switch under **Settings → Appearance → Base color scheme** (Obsidian's own setting; **Adapt to system** follows your computer). The graph keeps its dark sky in both modes.

**Vault background**, in **Visuals & UI**, chooses what fills the window behind your pages:

- **Sylvics scenes**: the pixel-art landscape, which changes with the time of day (the hours are under **Background Animation Cycle**). In light mode you see the daylight scene of the moment behind a pale veil.
- **Your own image**: any picture in your vault. **Choose…** lists the images in the vault. You can pick a second picture for light mode. If a chosen picture is moved or deleted, the scenes come back.
- **Plain (no image)**: a quiet green and violet wash, for a calmer screen.

The sliders set the blur and how much the picture is darkened in dark mode, and the blur and the strength of the pale veil in light mode. Changes show at once. **Restore** goes back to the defaults.

## The licence key

%% OPEN: tiers %%
The vault works without a key. A key unlocks the paid features. In the current version those are Sage, the search by meaning, and the graph's Insights **Habits**, **Balance**, **Days** and **People**. What is paid, and at what level, may change. The pricing page has the current terms.

### Enter your key

1. Open **Sylvics Core Plugin** → **Sylvics HQ**.
2. Paste the key from your purchase e-mail into the box **Enter your licence key**.
3. Click **Check My Key**. You need to be online for this first check.

A notice confirms the result, and the coloured line under the buttons shows the state from then on.

### What the status line means

| The line begins | Meaning | What to do |
|---|---|---|
| "No licence on this device." | No key entered. The free features work. | Nothing, or enter a key. |
| "⚠️ This key has not been verified yet." | A key is typed but has never been checked. | Click **Check My Key** while online. |
| "✅ ... is active" | The key is valid. If the licence has an end date, the line shows it. | Nothing. |
| "✅ ... is active (offline)." | The licence server could not be reached. Your licence keeps working, and the line says for how many more days. | Go online within that time and open Obsidian. |
| "⚠️ This licence has not been verified for more than 30 days." | You have been offline too long. Paid features are locked until the next check. | Go online and click **Check My Key**. |
| "❌ This licence expired on ..." | The licence had an end date and it has passed. A beta licence ends this way. | Enter a current key. |
| "❌ Licence not accepted: ..." | The server rejected the key. The reason follows. | See [[12 Troubleshooting and FAQ]]. |

How it works, in plain terms:

- The key is checked each time Obsidian starts, and when you click **Check My Key**.
- After a successful check you can work offline for 30 days.
- A bad connection does not lock you out during those 30 days. A clear "no" from the server, or a passed end date, locks the paid features at once.
- The check sends the key to the payment provider. Nothing about your notes is sent.
- There is no device limit in this version. Enter the same key on each of your own computers.

**Remove licence from this device** clears the key from this computer only. The key itself is unchanged and can be entered again. **Manage My Purchase** opens the payment provider's site.

## Backup

Your vault is one folder on one computer. Until you make a second copy, that folder is the only one. Do this in your first week.

### What to copy

The whole vault folder, including the hidden folder `.obsidian` inside it. That hidden folder holds the plugins, your settings, your licence key and Sage's stored conversations. The vault is large for a folder of notes, about 600 MB, because of the background images and videos.

### The simple way

Close Obsidian. Copy the vault folder to an external drive or to cloud storage. Repeat weekly. It is crude and it works.

### A sync service

A sync service keeps a second copy current without your doing anything.

| Service | Good to know |
|---|---|
| Obsidian Sync | Obsidian's own paid service. It limits the size of a single file depending on the plan. Some of the vault's background videos are large (up to 88 MB), so check the current limits. |
| iCloud Drive, OneDrive, Dropbox, Google Drive | Put the vault folder inside the service's folder. |

Pitfalls that cause most sync trouble:

- **Two computers at once.** Do not keep the vault open on two machines at the same time. Close Obsidian on one, wait for the upload to finish, then open the other.
- **Half-finished sync.** Opening the vault before the download is complete shows missing pages and empty dashboards. Wait.
- **Space-saving modes.** Some services replace local files with placeholders to save disk space. Turn that off for the vault folder, or dashboards will find files missing.
- **Two services on one folder.** Use one.
- **Conflict copies.** If a service creates files named like "note (conflicted copy)", compare and delete the copy. Do not leave them in place: dashboards will count them.
- **Your keys travel too.** Provider keys and the licence key are stored as plain text in `.obsidian/plugins/sylvics-core/data.json`. Any copy of the vault contains them. Share a copy of the vault only after removing that file.

### Git

The vault does not include a Git plugin. If you use Git yourself, two things happen on their own:

- Sylvics adds a short block to the vault's `.gitignore` so that its settings file, its data folder and its log are not committed. A notice tells you once.
- The **Large File Sweeper** moves any file larger than 95 MB into `99 - Meta/4. Attachments/Large Media`, because common Git hosts refuse larger files.

### The Large File Sweeper runs only in Git vaults

The sweeper does nothing unless the vault is a Git repository, that is, unless a `.git` folder sits at the top of the vault. In a Git vault it runs shortly after Obsidian starts and every five minutes. If you add a file over 95 MB anywhere in the vault, it is moved to the folder above, links to it keep working, and a notice says so. Without Git, the command **Sweep Large Files Now** only shows a notice. To change the folder, edit **Privacy & Paths → Large File Sweeper → Target Folder**. To turn the sweeper off, empty that field.

### Safety nets you already have

- **Trash.** Deleted files go where **Settings → Files and links → Deleted files** says.
- **File recovery.** Obsidian keeps snapshots of notes you edit. **Settings → Core plugins → File recovery** lets you restore an earlier version of a note.

Neither replaces a backup.

## Desktop only

Sylvics runs in Obsidian on macOS, Windows and Linux. The Sylvics plugin does not load in Obsidian on a phone or tablet. If you open the vault there through a sync service, your notes are readable as plain text and the dashboards appear as blocks of code.

## Updating

There is no automatic update in this version. The Sylvics plugin is not in Obsidian's community plugin list, so Obsidian will not offer updates for it. Updates are installed by hand. The steps below are the safe way.

An update can contain two kinds of change:

| Kind | What it is | Risk to your notes |
|---|---|---|
| Plugin update | A new version of the Sylvics Core plugin | None. The plugin folder holds no notes. |
| Vault update | New or changed dashboards, masterpages, templates or guide pages | Low if you follow the steps. These are files in your vault, so care is needed where you have changed them. |

### Before any update

1. Make a backup: close Obsidian and copy the whole vault folder somewhere else.
2. Read the release notes that come with the update. They say which kind it is and list the files.

### A plugin update

1. Close Obsidian.
2. In the vault folder, open `.obsidian/plugins/sylvics-core/`. To see hidden folders: `Cmd + Shift + .` in Finder on a Mac; **View → Hidden items** in File Explorer on Windows.
3. **Keep `data.json` and the `data` folder.** They hold your settings, your licence, your keys and Sage's stored data.
4. Replace every other file with the one from the update (`main.js`, `manifest.json`, `styles.css`, and the `scripts` folder if the update has one).
5. Open Obsidian. Under **Settings → Community plugins**, the version number next to **Sylvics Core Plugin** should be the new one.

### A vault update

1. Never copy a whole new vault over your own. That would overwrite your notes and bring the examples back.
2. Copy only the files the release notes list, each to the same place in your vault.
3. If you have changed a page that the update replaces (a template, a masterpage), rename your version first by adding "- mine" to its name. Afterwards, compare the two and redo your changes in the new one.
4. Notes you created are never part of an update.

### After an update

1. `Cmd/Ctrl + P` → **Run Vault Doctor**. It checks that the folders the system needs exist.
2. `Cmd/Ctrl + P` → **Sylvics Core: Force Refresh** to rebuild the graph data.
3. Open the Homepage, [[02. Mission Deck]] and one of your tasks. If something is wrong, close Obsidian and put your backup copy back.

### The other plugins

The vault includes about three dozen community plugins, such as Dataview, Templater and Meta Bind. There are two ways to update them. **RUN SYSTEM UPDATES** on a monthly review, or the command **Check for plugin and theme updates**, lists the plugins and the installed themes that have a newer version and updates all of them when you click **Update all**. Obsidian's own **Settings → Community plugins → Check for updates** lets you update plugins one at a time, and **Settings → Appearance → Themes → Manage** does the same for themes. A new version of the theme in use can change how pages look. Sylvics is tested with the versions it ships with, so make a backup first and do not update on the day a new version appears.

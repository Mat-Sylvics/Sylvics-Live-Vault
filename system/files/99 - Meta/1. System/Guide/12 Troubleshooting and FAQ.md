---
type: guide
tags:
  - guide
sylvics-up: "[[00 Guide index]]"
obsidianUIMode: preview
sage: false
---

# Troubleshooting and FAQ

The problems people meet in the first hour, each with its fix. Then the questions people ask.

## Three fixes to try first

1. **Wait a minute.** On the first start Obsidian reads more than two thousand notes. Dashboards fill in when it has finished.
2. **Reload.** `Cmd/Ctrl + R` restarts Obsidian's window without closing it.
3. **Check the plugins are on.** See the first entry below.

## Pages show boxes of code and no dashboards

**What you see.** The Homepage is a long block of grey code. Other pages show a few lines such as `sylvics-view` in a box.

**Why.** The community plugins are not running. Obsidian asks about them the first time you open a vault from someone else. If you chose to browse in Restricted mode, or closed the question, they stay off.

**Fix.**

1. `Cmd/Ctrl + ,` → **Community plugins**.
2. Click **Turn on community plugins**.
3. In the list of installed plugins, check that **Sylvics Core**, **Dataview**, **Templater**, **Meta Bind** and **Homepage** are switched on. The vault expects all thirteen listed plugins to be on.
4. Quit Obsidian fully and open it again.

If the plugin list is empty, the hidden `.obsidian` folder did not come along when the vault was copied. Copy the whole vault folder again from the download, hidden files included.

## The screen is black for several seconds at start

That is the start-up screen, shown while the pages load. It clears by itself. If the start-up script cannot run, the screen still clears after about twelve seconds. If it never clears, press `Cmd/Ctrl + R`. If that fails, check the plugins as above.

## Dashboards are empty or show zeros

| Where | Why | What to do |
|---|---|---|
| Everywhere, right after the first start | Dataview is still indexing | Wait, then reopen the page or press `Cmd/Ctrl + R`. `Cmd/Ctrl + P` → **Dataview: Force refresh all views and blocks** also works. |
| Panels for "today", "this week", "last 30 days" | Mira's notes are dated 2025 | Expected. They fill as you add notes. See [[10 The example files]]. |
| The **Recent** panel on area pages | It stays empty in this version | Nothing |
| A page stays blank after an update | A folder it reads is missing | `Cmd/Ctrl + P` → **Run Vault Doctor** |

## A button says "Page not found"

The buttons and cards of the dashboards open a page by its name. If you renamed or deleted that page, the button shows the notice **Page not found** with the name it looked for, and creates nothing. Give the page its name back, or restore it from the download. A number or an emoji at the start of the name may change; the words may not.

On the Control Center, **Open Graph View** opens Obsidian's own graph. For the Sylvics graph, use `Cmd/Ctrl + P` → **Open Sylvics Canopy Graph**. See [[08 The graph]].

## `Cmd/Ctrl + D` no longer deletes a paragraph

In this vault `Cmd/Ctrl + D` opens today's daily note. Obsidian's own use of that key, **Delete paragraph**, has no shortcut here. To change either: `Cmd/Ctrl + ,` → **Hotkeys**. See [[02 Your day]].

## I cannot find the calendar

`Cmd/Ctrl + P` → **Open Sylvics Calendar** shows it in the left sidebar, also from a full-screen page. The calendar has an icon too, in Obsidian's ribbon, the strip of icons at the far left, which is hidden in this vault. To see it: `Cmd/Ctrl + ,` → **Appearance** → turn on **Show ribbon**, and on a full-screen page click **⛶** as well.

## The sidebars and tabs have disappeared

Dashboards and journal notes open in full screen, which hides Obsidian's sidebars, tabs and title bar. Click **⛶** at the top of the page to bring them back for that page. **UP** opens the parent page. **←** and **→** go back and forward.

## A command seems to do nothing

**Sylvics Core: Open Braindump**, **Open Sage Chat**, **Open Chronos Timer** and **Open Ambient Player** open in the right sidebar. On a full-screen page the sidebar is hidden, so nothing appears to happen. Click **⛶**, or open [[01. Braindump]] as a page, or use **Sylvics Core: Open Sage Chat (Fullscreen)**.

## Which shortcuts differ from a plain Obsidian vault

Obsidian's standard shortcuts work in this vault: quick switcher (`Cmd/Ctrl + O`), find in note (`Cmd/Ctrl + F`), close tab (`Cmd/Ctrl + W`), new tab (`Cmd/Ctrl + T`), insert link (`Cmd/Ctrl + K`), and the rest. The vault adds three of its own: `Cmd/Ctrl + D` for today's daily note (it replaces **Delete paragraph**), `Cmd/Ctrl + Shift + H` for the Homepage and `Cmd/Ctrl + R` to reload.

To set any shortcut the way you like it: `Cmd/Ctrl + ,` → **Hotkeys**, search for the command, click **+** and press the keys. [[Cheat sheet]] lists the shortcuts that ship.

## A new note appeared at the top of the vault

`Cmd/Ctrl + N` creates an empty note at the top level, outside the ten folders. For a quick capture use [[01. Braindump]], which saves into the Inbox. For a typed note, use the create button on the page for its type. To move a stray note: `Cmd/Ctrl + P` → **Move current file to another folder**.

## A new note shows template code

If a note you just created shows raw template code (lines wrapped in angle brackets and percent signs), Templater did not process it. `Cmd/Ctrl + P` → **Templater: Replace templates in the active file**. If it keeps happening, check that Templater is switched on under **Community plugins**.

## A note is missing from a source page

The masterpages for books, articles and the other source types show one status per tab. A note with another status is on another tab. Open **All** (or **Library** on the pages that have no **All** tab) and type part of its name in the search box. A note also has to be in the folder of its type: a book outside the Books folder is not listed on the Books page.

A tab you remember can be absent. Tabs for a status that only some people use, such as **Wishlist** or **Abandoned** on the Books page, appear once a note has that status.

If **➕ Log New ...** shows a message about Templater, switch Templater on under **Community plugins** and click the button again.

## My licence key is not accepted

Read the message. It says which case you are in.

| Message | Cause | Fix |
|---|---|---|
| "Please enter a licence key first." | The box is empty | Paste the key |
| "Could not check the key: ... Try again when you are online." | No connection to the licence server | Check your internet connection, a firewall or a company network, then click **Check My Key** again |
| "Licence not accepted: ..." with a reason | The server rejected the key | Copy the key again from the purchase e-mail with no spaces before or after. If the reason says the key is not a Sylvics licence, it belongs to another product. If it says expired or disabled, the licence has ended or the purchase was refunded. |
| "❌ This licence expired on ..." | The licence had an end date | Beta keys end with the beta. Enter a current key. |
| "⚠️ This licence has not been verified for more than 30 days." | Too long offline | Go online and click **Check My Key** |

If the key is right and still refused, write to [sylvicsapp@gmail.com](mailto:sylvicsapp@gmail.com) with the exact message. Do not post the key in public.

## Sage does not answer

| What you see | Fix |
|---|---|
| A panel saying "Sage is off" | Click **Open Sage settings** and turn on **Enable Sage and AI features** |
| A notice that Sage requires a licence | Enter a key that includes Sage. See [[11 Settings, licence, backup and updates]]. |
| "Cloud AI Mode requires a Gemini API Key" | The provider is Google Gemini and no key is entered. Enter one or choose another **AI Processing Mode**. |
| An error naming your provider | Use the **Test** button for that provider on the **Sage Agent** tab. Check the key, the model name and your credit with the provider. |
| With Ollama: "Local AI Error" | Ollama is not running, or the model name does not match one you pulled |
| Answers ignore a note you expected | The note may be excluded. **Sage Agent** → **Show excluded notes**. Or the index is still being built: wait and ask again. |

[[09 Sage]] has the full setup.

## The graph is slow, or the computer gets hot

1. In the graph, open the gear in the top bar: **Quality** → **Low**, and turn **Motion** off.
2. Close the graph tab when you are not looking at it. It stops drawing while its tab is hidden.
3. For the classic graph: **Settings → Sylvics Core Plugin → Visuals & UI → Visual Quality** → **Swift (Performance)** or **Still Mode (Battery Saver)**, and keep **Adaptive Rendering (Auto-Pause)** on.
4. For the whole vault, not only the graph: `Cmd/Ctrl + P` → **Sylvics Core: Toggle Still-Mode** turns off animations everywhere.
5. Delete example groups you no longer need. Fewer notes, lighter graph.

## A graph view shows a lock

%% OPEN: tiers %%
The view is a paid feature and no licence that includes it is active. Its card says what it requires. In the classic graph such a view is blurred instead. See [[08 The graph]].

## Obsidian is slow to start

The first start is the slowest: every note is indexed. Later starts are quicker. If it stays slow:

- Turn on **Global Still-Mode** under **Visuals & UI**.
- Turn off **Enable System Greetings** under **Notifications**.
- Leave Sage off until you need it. With Sage off, no AI model is loaded at start.
- Remove example groups you have finished with.
- Obsidian can measure plugins: **Settings → Community plugins → Debug startup time**, then restart.

## Pictures or banners are missing

The vault's images and videos are large files. If banners are blank, the copy or the sync of the vault was incomplete. Wait for your sync service to finish, or copy the vault again from the download.

## A large file moved by itself

If the vault is a Git repository, files over 95 MB are moved to `99 - Meta/4. Attachments/Large Media` by the Large File Sweeper. Links to them keep working. See [[11 Settings, licence, backup and updates]] for how to change or stop this.

## I deleted or changed a system page by accident

1. Look in the trash named under **Settings → Files and links → Deleted files** and put the file back in its folder.
2. For a changed page: **Settings → Core plugins → File recovery** keeps earlier versions of notes you edited.
3. Otherwise copy that one file again from the original download, to the same folder.

## Where the error log is

Sylvics writes its errors to a file inside the vault: `.obsidian/plugins/sylvics-core/plugin-errors.log`. When the file grows past about half a megabyte it is renamed `plugin-errors.log.1` and a new one starts. The folder is hidden. Show hidden files to find it (`Cmd + Shift + .` in Finder; **View → Hidden items** in File Explorer).

For a live view, open Obsidian's developer console: `Cmd + Option + I` on a Mac, `Ctrl + Shift + I` on Windows and Linux, then the **Console** tab. Errors are the red lines.

## Reporting a problem

Write to [sylvicsapp@gmail.com](mailto:sylvicsapp@gmail.com) (see [[💬 About this beta]]). Send these, and it can usually be solved in one reply:

- What you did, step by step, what happened, and what you expected.
- The exact text of any message, and a screenshot.
- Your system (macOS, Windows or Linux), your Obsidian version (**Settings → General**) and the Sylvics version shown next to **Sylvics Core Plugin** under **Settings → Community plugins**.
- The last lines of `plugin-errors.log`. Read them first: an error line can contain the name of a note.

Never send your licence key, a provider key, or the file `data.json`.

## Questions

**Do I have to use all of it?** No. The Inbox, tasks and the daily note are enough to start. Add an area or the knowledge steps when you want them. Unused pages do no harm.

**Can I use it on my phone?** No. Sylvics is desktop only. Through a sync service your notes are readable on a phone as plain text, without the dashboards.

**Which version of Obsidian do I need?** A current one. Several pages use Obsidian's Bases feature, which older versions do not have. Update Obsidian itself before reporting a page that will not draw.

**I already have an Obsidian vault. Can I merge them?** Keep Sylvics as its own vault. Copy notes from your old vault into `01 - Inbox` a few at a time and process them from there. Do not copy your old `.obsidian` folder in.

**Can I rename the ten folders?** No. Dashboards and buttons find notes by those names. See [[07 Make it yours]].

**Can I remove a bundled plugin I do not use?** Leave them on. Pages depend on them in ways that are not obvious, and the Sylvics plugin is required for every dashboard.

**Is anything sent over the internet?** Not by default. The cases where something is sent: the licence check (the key only), Sage when you turn it on (see [[09 Sage]]), Google Calendar if you connect it, a model download for Sage's local index, and any web image or video a note points to.

**Does Sage do anything overnight or in the background?** No. Sage acts only when you send it a message, and nothing of Sylvics runs while Obsidian is closed.

**Can I get the examples back after deleting them?** From the trash if your deleted-files setting uses one, otherwise from the original download. See [[10 The example files]].

**Will an update overwrite my notes?** Not if you follow the steps in [[11 Settings, licence, backup and updates]]. Updates are installed by hand in this version, and notes you created are never part of one.

**Why is the vault so large?** About 600 MB of it is background images and videos. Your notes are small.

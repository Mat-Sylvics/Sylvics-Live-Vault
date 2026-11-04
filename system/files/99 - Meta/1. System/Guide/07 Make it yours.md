---
type: guide
tags:
  - guide
sylvics-up: "[[00 Guide index]]"
obsidianUIMode: preview
sage: false
---

# Make it yours

After this page you can change what a note shows, save your layouts for reuse, change icons and colours, and you will know what is safe to touch.

> [!tip] The rule behind this page
> **The golden rule**: shape each page until it removes more friction than it creates. This page also says what is safe to change. All ten rules: [[The rules of the vault]].

## How a Sylvics note is built

Most notes you create (a task, a book, a contact, a recipe) have two layers:

- **Headers**: the row of coloured fields at the top, such as Status, Priority or Deadline. Each header is one property of the note with a type: text, number, date, a choice from a list, a progress bar and so on.
- **Modules**: the blocks below, such as a notes area, a list of links, a habit streak, a budget tracker. There are about seventy kinds, grouped in the gallery under Layout & Structure, Lists & Links, Metrics & Tracking, Finance, CRM & B2B, Logs & Yields, Evolution Forge, Culinary and Project Management.

Both layers are stored in the note's own properties, so each note carries its layout with it. You change them with the builder. You never need to edit the properties by hand.

## Open the builder

On any such note, click **⚙️ Edit Setup** at the top right of the header. On notes with a compact header only the **⚙️** shows.

%% OPEN: tiers %%
The builder is included for everyone in the current version. If the button shows a padlock, it has become a paid feature. See the pricing page.

The builder has a top section for the look of the page, two tabs for the two layers, and **💾 SAVE SETUP** at the bottom. Nothing changes until you click it.

A plain note has no header and no **Edit Setup** button. To give it one, open the note in editing view, put the cursor on an empty line and run `Cmd/Ctrl + P` → **Sylvics Core: Insert Sylvics Banner**.

## The Headers tab

Each row is one header field: an icon, a label, the property it writes to, a type and a colour.

| You want to | Do this |
|---|---|
| Add a field | **➕ ADD STAT**, then set its label and type |
| Change a field's type | Use the type list on its row. For a choice list, type the options separated by commas. |
| Remove a field | **✖** on its row. The value already stored in the note is not deleted. |
| Keep a field for reuse | **💾** on its row saves it to the library |
| Reuse a saved field | Choose it under **📥 IMPORT FROM LIBRARY** and click **📥** |
| Save the whole header row as a set | **💾 SAVE HEADER BLUEPRINT** |

## The Modules tab

Each row is one module. Drag a row to reorder it.

| You want to | Do this |
|---|---|
| Add a module | **+ ADD MODULE**. A new text module appears. Click its type to open the gallery and pick another kind, then **Select Format**. |
| Group modules under tabs | Add a **Tab Marker** module. Everything after it, up to the next Tab Marker, becomes one tab on the page. |
| Add a free-writing section | Add a **Markdown Canva Break**. It splits the page so that you can write ordinary text between two groups of modules. |
| Remove a module | **✖** on its row |
| Keep a module for reuse | **💾** on its row saves it to the library |
| Reuse a saved module | Choose it under **📥 IMPORT FROM LIBRARY** and click **📥** |
| Save the whole module list as a set | **💾 SAVE MODULE BLUEPRINT** |

## The library and blueprints

- The **library** holds single headers and single modules you saved. It is stored in two notes: [[Stats Library]] and [[Module Library]]. They start empty.
- A **blueprint** is a whole set: a full header row, a full module list, or both. Blueprints are stored in [[Module Library]] as well.

To apply a blueprint to the note you are editing, choose it under **🔗 GLOBAL INHERIT BLUEPRINT** and click the **📥** next to the list. Its headers and modules replace the ones in the builder. Click **💾 SAVE SETUP** to keep the result. Choosing a blueprint in the list without clicking **📥** changes nothing on the page: despite the word "inherit", a note does not follow later changes to a blueprint.

Do not edit the two library notes by hand. Use the builder's save and delete buttons.

## Deploy a layout to a whole folder

When you have changed one note of a type and want every note of that type to match, use **GLOBAL LAYOUT MANAGER** at the bottom of the builder.

1. Set up one note the way you want it.
2. Turn on **🚀 DEPLOY GLOBAL BLUEPRINT TO ALL**. The line under it reads "Overwrites layout for all items in this folder".
3. Click **💾 SAVE SETUP**. A box titled **Deploy to folder** says how many notes will change, names the folder, and says how many masterpages are left out. Click **Deploy to … notes** to go ahead. **Cancel**, `Esc` or a click outside the box changes nothing.

> [!warning] Deploy cannot be undone
> Deploy writes the headers, the modules and the look settings of this note onto **every note that sits directly in the same folder**. Notes in subfolders are not touched, and a masterpage in the folder is left out. Any layout the other notes had is replaced. The text you wrote in them and the values in their fields are kept, but a field that is no longer in the header stops being shown. Back up the vault first, and try it on a small folder.

Deploy does not change the template. New notes of that type still come from the template in `99 - Meta/2. Templates`. To change what new notes look like, open the template itself, click **⚙️ Edit Setup** there, and save.

## The look of a page

The top section of the builder controls appearance.

| Setting | What it does |
|---|---|
| **FILE NAME** | Renames the note |
| **PAGE ICON** | The emoji shown in the header and in lists. Click to pick one, **✖** to remove it. |
| **STRIP EMOJI FROM HERO TITLE** | Hides the emoji at the start of the file name in the big title |
| **BANNER IMAGE** | The picture behind the header. **📷 Select Image** lists the images in the vault. Paste a web address in the search box to use an image from the internet. |
| **BACKGROUND IMAGE** | A picture behind the whole page |
| **GLOBAL THEME** | A ready-made colour set for a type of note: Standard, Book, Article, Paper, Podcast, Video, Movies, Audio, News, Short Form, Course, Lecture, Literature, Permanent, Concept, Definition, Formula, Framework, Quote, Trivia. Choosing one recolours the header and every module. To go back to the plain look, choose **Standard** and save. |
| **COVER IMAGE**, **COVER ALIGNMENT** | For the media themes: the cover picture and whether it sits left or right |
| **BANNER COLOR** | The header colour, when you want one that no theme gives |
| **MINIMAL ICON**, **CENTERED TITLE** | A compact header, a centred title |
| **PREFIX TEXT** | A small line above the title, such as "LITERATURE SYNTHESIS" |
| **BANNER HEADER SIZE** | Standard, Large or Immersive |

Each header and module row also has its own colour swatch.

## The look of the whole vault

Open `Cmd/Ctrl + ,` → **Sylvics Core Plugin** → **Visuals & UI**.

| Setting | Effect |
|---|---|
| **Visual Quality** | Lush, Balanced, Swift or Still Mode. Lower settings are faster and easier on the battery. |
| **Global Still-Mode** | Turns off animations and heavy effects everywhere. Also a command: **Sylvics Core: Toggle Still-Mode**. |
| **Enable Rainbow Explorer** | Colours the ten folders in the file explorer |
| **Classic Control Center Aesthetic** | Switches the Control Center between coloured cards and frosted glass |
| **Fade Fullscreen HUD Buttons** | Whether **UP** and **⛶** fade until you point at them |
| **Display Verdant Cybernetics Branding** | The small line at the bottom of the Homepage |
| **Background Animation Cycle** | The hours at which the Homepage background changes through the day |

The vault uses the AnuPpuccin theme. You can choose another under Obsidian's **Settings → Appearance → Themes**. The dashboards are designed for a dark theme and may look wrong in a light one.

## Folder and note icons in the file explorer

The icons next to the ten folders are the emoji at the start of their names. Rename a folder to change its emoji; notes carry theirs in the `syl-icon` property.

## Safe to change, and not

| Safe | Why |
|---|---|
| Headers, modules, icons, colours and banners through **Edit Setup** | Stored in the note. Reversible by editing again. |
| The text and values in any note you created | They are yours |
| Templates, through **Edit Setup** on the template | Affects only notes created afterwards |
| Categories and accounts in [[7. Finance Settings]] | Meant to be replaced |
| Adding your own folders inside an area or inside Resources | Dashboards ignore what they do not know |

| Leave alone | Why |
|---|---|
| The names of the ten numbered folders | Dashboards and buttons find notes by these paths. The setting **Vault Path Mappings** under **Privacy & Paths** exists for renamed folders, but most dashboards and create buttons do not follow it yet. Treat the ten names as fixed. |
| The numbered subfolders inside `02 - Planning` and `03 - Areas` | Create buttons write into them by name |
| Masterpages, and the short code block inside any dashboard page | Other pages open them by name |
| Property names that a header or module writes to, such as `Task_Status` | Dashboards read them by name |
| `99 - Meta/2. Templates` file names and `99 - Meta/1. System` | Create buttons load templates by file name |
| The hidden folder `.obsidian` | Plugin files and settings. See [[11 Settings, licence, backup and updates]] before touching it. |

If something breaks after a change, `Cmd/Ctrl + P` → **Run Vault Doctor** checks that the core folders exist and can recreate missing ones.

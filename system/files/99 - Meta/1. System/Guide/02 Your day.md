---
type: guide
tags:
  - guide
sylvics-up: "[[00 Guide index]]"
obsidianUIMode: preview
sage: false
---

# Your day

After this page you can open today's note, fill in what matters, tick your habits, log money and close the day.

> [!tip] The rule behind this page
> **The golden rule**: if part of the daily note creates more friction than it removes, switch it off. Lite mode, below, exists for that. All ten rules: [[The rules of the vault]].

## Open today's note

Press `Cmd/Ctrl + D`, or click **Today's Daily Note** on the [[00. Control Center]]. Both run the command **Open today's daily note**, which is also in the command palette (`Cmd/Ctrl + P`). It always opens the note for the real current date, even while the dashboards show the example dates of Mira's year.

The note is created from the daily template at `07 - Journal/01 Daily/<year>/<month>/<date>-<weekday>.md`, for example `2025-10-24-Friday.md`. If the note already exists, the same key opens it.

Other ways in:

- The Sylvics calendar. `Cmd/Ctrl + P` → **Open Sylvics Calendar** shows it in the left sidebar. Click **TODAY**, or any date in the month. The calendar also has an icon in Obsidian's ribbon, which this vault hides by default: `Cmd/Ctrl + ,` → **Appearance** → **Show ribbon** brings it back.
- **← Yesterday** and **Tomorrow →** at the top of any daily note. Each creates the neighbouring day if it does not exist yet.
- **today →** on [[00. The Daily Loop Masterpage]] and **🌿 Reflect On Today** at the bottom of [[03. Life Review]]. Both open today's note and create it first if it does not exist yet.

## What is on the page

A daily note is one long page in four parts. Each part has a large heading. Every box saves when you click outside it. To see a filled one, open [[2025-10-24-Friday]].

| Part | Heading on the page | What you do there |
|---|---|---|
| Top | **← Yesterday**, **This Week**, **Tomorrow →**, **Name your Day!** | Move between days. Give the day a short name if you like. |
| 1 | **MORNING INTENTION** | Sleep and energy numbers, **3 things I am grateful for**, **The ONE outcome that makes today a win**, **The 3 highest-leverage tasks**, **What could derail me today?** |
| 2 | **EXECUTION** | **Today's Habits**, and the **🚀 START TODAY'S WORK** button, which opens [[01. North Star]] |
| 3 | **END OF TODAY** | **Scheduled Follow-Ups**, **Today's Events**, **Today's People**, **Daily Ledger**, **Nutrition Tracker**, **Daily Workout**, **Daily Summary**, **Alignment Check**, **Paradigm Check**, **Pictures of the Day**, **Rating**, **Flashback** |
| 4 | **TOMORROW PRIMING** | **Tomorrow's win**, **Launch Task**, the **Shutdown Ritual**, and the **Completion Score** |

You do not have to fill everything. A day with one outcome, the habits ticked and three lines of summary is a complete day.

### The quote of the day

Every daily note shows one quote. You decide which quotes can appear:

1. Click **💬 Manage Quotes** under the quote. [[💬 0. Quotes Masterpage]] opens on its **Daily Quotes** tab.
2. Switch **DAILY QUOTE** on for the quotes you want. The same switch is in the header of every quote note.

Each new daily note then picks one of those quotes at random and keeps it, so the quote of a day does not change later. Click the quote to open its note. While no quote is switched on, a new daily note shows a built-in proverb about planting a tree. Mira's example days all show that proverb.

## Lite mode

Under the MORNING INTENTION heading there is a switch labelled **🛡️ LITE MODE**. Turn it on for a shorter page. It hides **The 3 highest-leverage tasks**, **What could derail me today?**, **Alignment Check** and **Paradigm Check**, and it stops the page animations. Everything else stays.

Below it, five buttons hide whole sections: **💤 BODY** (sleep, energy, weight), **🧘 MIND** (meditation, alignment, gratitude), **📊 MONEY** (the ledger), **🍎 FOOD** (macros) and **🏋️ WORKOUT**. A crossed-out button means the section is hidden. A hidden section keeps its data and comes back when you click the button again.

The switch and the buttons are saved per day. To change what every **new** day starts with, open the daily template, `99 - Meta/2. Templates/5. 📅 Journal/Template - Daily.md`, and set `lite_mode` to `true`, or any of `show_body`, `show_mindfulness`, `show_ledger`, `show_nutrition`, `show_workout` to `false`. Days you have already written keep their own settings.

## Morning (two minutes)

1. Type your **Sleep (Hrs)**, **Quality** and **Energy** if you track them. Skip them if you do not.
2. Write three lines under **3 things I am grateful for**.
3. Write one sentence under **The ONE outcome that makes today a win**. This is the line that matters most.

## During the day

**Habits.** The **Today's Habits** list is filled the first time you open the day. It takes every habit in [[🔹 0. Habits Masterpage]] whose **Repetition** includes today's weekday, in the order of each habit's **Order** number. Click the square to tick a habit. The number on the right is how fully you did it, from 0 to 100. Click a habit's name to open its note.

The list is copied into the day when the note is first opened. A habit you create at noon appears from tomorrow.

You can also tick today's habits from [[02. Mission Deck]], under **📅 Daily Routine**, once today's note exists.

**People.** Under **Today's People**, type a short line in **Write log...** if you want one, then click **+ ADD PERSON** and pick the contact. The day then shows on that person's note.

**Capture.** Anything that does not belong in the day goes to the Inbox: open [[01. Braindump]], type, and click **Send to the inbox →** (or press `Cmd/Ctrl + Enter`).

## The ledger

**Daily Ledger** records money on the day it moved.

1. Choose a tab: **💸 EXPENSE**, **💰 INCOME** or **🔄 TRANSFER**.
2. Pick a **Category** and an **Account** (for a transfer: **From** and **To**), type the **Amount** and an optional **Description**.
3. Click the **Log** button under the form. The line appears under **Today's Transactions**. Click **✕** on a line to remove it.

Categories, accounts and the currency come from [[7. Finance Settings]]. Those lists hold Mira's accounts until you replace them or clear them when you delete the examples ([[10 The example files]]). The finance pages in [[04 Your life areas]] read what you log here.

## Shutdown (five minutes)

1. Write three or four lines under **Daily Summary**: what happened, in order.
2. Slide the **Rating** from 1 to 10.
3. Write **Tomorrow's win**: the one thing tomorrow is for.
4. Tick the **Shutdown Ritual** items.

The shutdown list works like the habits list. It shows the habits whose **Shutdown Ritual** switch is on. Mira's are [[🔹 Evening shutdown]] and [[🔹 Plan tomorrow's first task]]. To add your own, create a habit and turn on **Shutdown Ritual** in its header.

The **Completion Score** at the bottom counts ticked habits and shutdown items against the total for the day.

## The three daily pages

These dashboards read your notes. You never write notes in them.

| Page | Use it for |
|---|---|
| [[01. North Star]] | A morning look at who you want to be: identity, values, affirmations, the vision board, the bucket list |
| [[02. Mission Deck]] | The working view: today's habits, active goals, projects and open tasks |
| [[03. Life Review]] | An evening look at the eight life areas, open explorations and recent journal notes. It also has a one-line capture box that sends to the Inbox. |

[[00. The Daily Loop Masterpage]] gathers counters, the Inbox, upcoming deadlines, a month calendar and today's habits on one page. Its small link tiles (**vision os**, **mission**, **life os**, **projects**, **process →**) open the matching pages.

## Things on the page you can ignore for now

- **Nutrition Tracker** and **Daily Workout** matter only if you use the Health tools. See [[04 Your life areas]].
- **Flashback** shows what you wrote on this date in earlier years. It fills in over time.

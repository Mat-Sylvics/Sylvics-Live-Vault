---
type: guide
tags:
  - guide
sylvics-up: "[[00 Guide index]]"
obsidianUIMode: preview
sage: false
---

# Sage

After this page you will know what Sage is, how to turn it on, what leaves your computer when you use it, and how to keep notes away from it.

> [!tip] The rule behind this page
> **Finish thoughts in your own words**: Sage can suggest and summarise, and what you keep as knowledge, you restate yourself. All ten rules: [[The rules of the vault]].

## What Sage is

Sage is the assistant built into Sylvics. You ask a question in a chat box. Sage finds the notes that seem relevant, reads short excerpts of them and answers from those.

Three facts first:

- **Sage is off when you install the vault.** While it is off, no AI model is loaded, nothing is indexed and no request is sent anywhere.
- **Sylvics does not sell AI usage.** You connect Sage to a model yourself: a provider you have an account with, or a model running on your own computer.
- **Sage only acts when you send a message.** It does not run in the background, on a schedule, or while Obsidian is closed.

%% OPEN: tiers %%
In the current version Sage and the search by meaning are paid features. Without a licence that includes them, sending a message shows a notice saying what Sage requires. The pricing page has the current terms. See [[11 Settings, licence, backup and updates]] for entering a key.

## Turn it on

1. `Cmd/Ctrl + ,` → **Sylvics Core Plugin** → **Sage Agent**.
2. Read the sentence under **Enable Sage and AI features**. It names where your text will go with the modes currently selected.
3. Choose your provider under **AI Processing Mode** (next section) and enter what it asks for.
4. Turn on **Enable Sage and AI features**.

## Choose a provider

| AI Processing Mode | What you enter | Where your text goes |
|---|---|---|
| **Local Agent (Ollama)** | **Ollama Endpoint URL** (starts as `http://localhost:11434`) and **Ollama Model Name**, then **Test** | Stays on your computer, as long as the address is your own machine |
| **Anthropic (Claude — native)** | **Anthropic API Key** and **Claude Model**, then **Test** | Anthropic |
| **Google Gemini** | **Gemini API Key**, then a model under **Sage Model (Gemini)** | Google |
| **OpenRouter API** | **OpenRouter API Key**, then an **OpenRouter Model** | OpenRouter and the model provider it passes the request to |
| **ChatGPT / Custom API Endpoint (OpenAI-Compatible)** | **Custom Base URL**, **Custom API Key**, **Custom Model ID**, then **Test** | The address you entered. A local server such as LM Studio keeps it on your computer. |

With a provider key you pay that provider for what you use. Sylvics never sees the key or the conversation.

### The local route with Ollama

1. Install Ollama from ollama.com and start it.
2. Download a model. In a terminal: `ollama pull qwen2.5:3b`, or another model you prefer.
3. In **Sage Agent**, choose **Local Agent (Ollama)**, leave the address as it is and type the model name exactly as you pulled it.
4. Click **Test** next to **Test Ollama connection**.

A local model is slower and less capable than the large hosted ones, and needs a reasonably recent computer. In exchange, nothing leaves your machine.

## The search index

To find relevant notes, Sage builds an index of what each note is about. **Embedding Mode** on the same tab decides where that happens.

| Embedding Mode | What it does |
|---|---|
| **Built-in Web Worker (transformers.js - Local)** | The starting choice. The index is built on your computer. A small model is downloaded once from the internet. Your note text is not sent anywhere. |
| **Cloud API** | The first 1,000 characters of every note that is not excluded are sent to the provider you pick (OpenAI, Cohere or a custom address). Needs its own key. |
| **Sage Daemon (IPC - Local)** | For a separate local helper program that is not part of the vault. Leave it alone. |

The first indexing of a full vault takes a while and uses the processor. A notice tells you when it starts.

## Use it

- `Cmd/Ctrl + P` → **Sylvics Core: Open Sage Chat (Fullscreen)** opens the chat as a page.
- **Sylvics Core: Open Sage Chat** opens it in the right sidebar. On a full-screen page the sidebar is hidden, so click **⛶** first or use the full-screen command.
- **[ ASK SAGE ↗ ]** on the Control Center opens the full-screen chat.

Type where it says **Message Sage...**. `Enter` sends and `Shift + Enter` starts a new line. **+** starts a new conversation, **⏹ Stop** interrupts an answer and **🗑️** deletes the conversation.

Questions that work well name what you want and where to look: "Using my weekly reviews from this spring, what did I keep saying I would change?" Sage can be wrong, and it only knows what your notes say. Check anything that matters against the note itself.

## What Sage can and cannot do

| Sage can | Detail |
|---|---|
| Answer from your notes | It retrieves the most relevant notes (10 unless you change **Semantic Context Size**) and reads an excerpt of each. If you refer to the note you have open, it reads that note in full. |
| Search the vault for a word or phrase | When the question calls for an exact match |
| Create a note | The note goes to your Inbox, or to the folder set under **Folder for notes created by Sage**. If the model wants another folder, you are asked first. An existing note is never overwritten. |
| Search the web and read a page | Only if you turn on **Allow Sage to use the web**. It is off by default. |

| Sage cannot | |
|---|---|
| Edit, rename, move or delete a note | There is no such ability in the product |
| Read a note you have excluded | See below |
| Work in the background | No schedule, no overnight run, no report written while you are away |
| Act while Obsidian is closed | Nothing of Sylvics runs then |

Your conversations are stored on your computer, in the plugin's own folder inside the vault.

## What leaves your computer

The **Sage Agent** tab has a box headed **Privacy: what Sage can read and where it goes**. It states, for your current settings, where chat text goes, where index text goes and how many notes are excluded. The table below is the same information for each setup.

| Setup | Sent, and to whom |
|---|---|
| Sage off | Nothing |
| Ollama on your computer, built-in index | Nothing. Models are downloaded once; no note text travels. |
| A provider key, built-in index | To that provider, each time you send a message: the conversation so far, excerpts of the retrieved notes, and the open note if you referred to it |
| **Cloud API** index | In addition, to the index provider: the first 1,000 characters of each note that is not excluded, as the index is built, and your question when you ask one |
| **Allow Sage to use the web** on | In addition: search words written by the model, which can contain words from your message and from the excerpts it was given, to a web search service, and the address of any page the model decides to open, to that site |

Sylvics has no server that receives your notes or your conversations. The licence check sends the licence key and nothing about your notes.

Your provider keys are stored as plain text in the plugin's settings file inside the vault (`.obsidian/plugins/sylvics-core/data.json`). Anyone who can read the vault folder, or a synced or backed-up copy of it, can read them. See [[11 Settings, licence, backup and updates]].

## Keeping notes away from Sage

An excluded note is never sent to a provider, never added to the index and left out of the graph. There are five ways to exclude, from one note to nearly everything.

| Way | How | Good for |
|---|---|---|
| One note | Add the property `sage: false` to the note | A single private note |
| By tag | **Privacy & Paths** tab → **Ignore Tags**. Type a tag such as `private` and press Enter. | Notes scattered across folders |
| By folder or file | **Privacy & Paths** tab → **Ignore Paths**. Type a path such as `07 - Journal` and press Enter. | A whole folder |
| A rules file | A file named `.sageignore` in the top folder of the vault, one rule per line | Many rules, kept in one place |
| Everything except a list | **Privacy & Paths** tab → **Enable Ghost Mode**, then add folders to **Ghost Mode Allowlist** | Sage sees only what you list. With an empty list it sees nothing. |

To check the result, open **Sage Agent** and click **Show excluded notes**. It lists every excluded note with the rule that excluded it.

### The `.sageignore` file

The vault ships one. As shipped it excludes nothing: every line starts with `#`. It contains the syntax and a set of suggested rules for money, medical records, people and the journal, all switched off. If the file is ever missing, the privacy box shows a **Create .sageignore** button that makes the same file again.

Obsidian does not show files whose name starts with a dot. Open the vault folder in Finder or File Explorer, show hidden files (`Cmd + Shift + .` on a Mac; **View → Hidden items** on Windows) and open `.sageignore` in a plain text editor.

| Rule | Excludes |
|---|---|
| `# anything` | Nothing. A line starting with `#` is a comment. |
| `/07 - Journal` | That folder at the top of the vault, and everything in it |
| `Areas/Finances` | The Finances area. Number and emoji prefixes may be left out. |
| `Private` | Any folder or note with "Private" in its path |
| `*.canvas` | Every file ending in `.canvas` |
| `!07 - Journal/01 Daily/keep.md` | Brings back one note that an earlier line excluded. Write the exact path. |

To switch on a suggested rule, delete the `#` and the space at the start of its line and save. Sylvics re-reads the file within a minute and before every message. **Re-read .sageignore now** does it at once.

### After you exclude something

Start a new conversation with **+**. Excerpts that entered an earlier conversation stay in that conversation's history and are sent again with each new message in it.

The rules work per note. A note you allow can still mention or quote a note you excluded.

## Other settings on the tab

- **Semantic Context Size** (5 to 50): how many notes Sage reads before answering. More gives better-informed answers, takes longer and, with a provider key, costs more per question.
- **AI Persona**: the tone Sage answers in. Five choices, from serene to strict.
- **Agentic Skills** is a separate tab that lists add-on scripts found in the vault. None ship with the vault, so it reads "No skills found."

## Things that look like Sage and are not

- The **Sage Intelligence Protocol** card in a weekly review promises a background report. There is none. Its button opens the chat. See [[06 Reviews]].
- In the classic graph, the **AI INSIGHTS** panel and the "by meaning" views use the search index, not the chat. With Sage off they have little or nothing to show. The graph itself does not use Sage.

## This guide and Sage

The pages of this guide carry `sage: false`, so they stay out of Sage's answers and out of your graph. Remove that line from a page if you want Sage to be able to quote it.

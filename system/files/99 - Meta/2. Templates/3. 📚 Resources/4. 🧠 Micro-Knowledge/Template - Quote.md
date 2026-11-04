<%*
// Template - Quote (31 Oct 2026): the quote, then its author and its work picked from the vault.
// Cancelling the first question removes the note instead of leaving a "No quote entered" behind.
const self = tp.file.find_tfile(tp.file.path(true));
const quoteText = ((await tp.system.prompt("What is the quote?", "")) || "").trim();
if (!quoteText) {
    // after Templater has finished with the file
    if (self) setTimeout(() => app.fileManager.trashFile(self), 400);
    return;
}

// Author: a figure already in the vault, or a name typed by hand (linked when it matches a figure)
const plain = (s) => String(s).replace(/^[^\p{L}\p{N}]+/u, "").trim().toLowerCase();
// Templater's pick list in the Sylvics dialog look: the shell, and a title like the other questions
const skin = (title) => setTimeout(() => {
    const el = [...document.querySelectorAll(".modal-container .prompt")].pop();
    if (!el || el.querySelector(".syl-suggest-title")) return;
    el.addClass("syl-modal-suggest");
    const t = createDiv({ cls: "syl-suggest-title", text: title });
    el.prepend(t);
}, 0);
const figures = app.vault.getMarkdownFiles()
    .filter(f => f.path.includes("/🏛️ Figures/") && !/^\d|Database|Masterpage|Template/.test(f.basename))
    .sort((a, b) => plain(a.basename).localeCompare(plain(b.basename)));
const TYPE = "✍️ Someone else: type the name", UNKNOWN = "❔ Unknown";
skin("Who said it?");
const pickA = await tp.system.suggester([TYPE, UNKNOWN, ...figures.map(f => f.basename)], [TYPE, UNKNOWN, ...figures], false, "Type to search your figures");
let quoteAuthor = "Unknown";
if (pickA && pickA !== TYPE && pickA !== UNKNOWN) quoteAuthor = `[[${pickA.basename}]]`;
else if (pickA === TYPE) {
    const typed = ((await tp.system.prompt("Who is the author?", "")) || "").trim();
    if (typed) {
        const match = figures.find(f => plain(f.basename) === plain(typed));
        quoteAuthor = match ? `[[${match.basename}]]` : typed;
    }
}

// Work: a source already in the vault (book, article, talk...), or none
const SRC = "04 - Resources/5. 📚 Sources/";
const works = app.vault.getMarkdownFiles()
    .filter(f => f.path.startsWith(SRC) && !/masterpage|^template|^\d+\./i.test(plain(f.basename)))
    .sort((a, b) => plain(a.basename).localeCompare(plain(b.basename)));
const kind = (f) => (f.path.slice(SRC.length).split("/")[0] || "").replace(/^\d+\.\s*\S+\s*/u, "");
const NONE = "— No work, or not in the vault yet";
skin("From which work?");
const pickW = await tp.system.suggester([NONE, ...works.map(f => `${f.basename}   · ${kind(f)}`)], [NONE, ...works], false, "Type to search your sources");
const source = pickW && pickW !== NONE ? [`[[${pickW.basename}]]`] : [];

// File name: the first six words of the quote
let safeName = quoteText.split(" ").slice(0, 6).join(" ").replace(/[\\/:*?\"<>|#^\[\]\.]/g, "").trim();
if (!safeName) safeName = "Untitled Quote";
await tp.file.rename("💬 " + safeName);

// Build the YAML frontmatter safely
let yaml = `---
Type: Quote
tags:
  - quote
Author: ${JSON.stringify(quoteAuthor)}
favorite: false
Quote: ${JSON.stringify(quoteText)}
Thoughts: ""
Status: 🗂️ Library
sylvics-fullscreen: true
sylvics-up: '[[💬 0. Quotes Masterpage]]'
Dashboard_Theme: Quote
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Micro-Knowledge - Quotes.png
daily_quote: false
Header_Schema:
  - color: "#f59e0b"
    icon: 🏷️
    label: Topics
    key: tags
    type: multi_select
    options:
      - quote
      - character
      - computing
      - consistency
      - disagreement
      - evenings
      - evidence
      - family
      - fear
      - finishing
      - habit
      - identity
      - launch
      - medicine
      - mornings
      - planning
      - psychology
      - reading
      - scepticism
      - scorecards
      - self-reliance
      - stoicism
      - systems
      - time
      - work
      - writing
    formula: ""
    hideValues:
      - quote
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🌅
    label: In Daily Rotation
    key: daily_quote
    type: toggle
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ❤️
    label: Favorite
    key: favorite
    type: favorite
    options: []
    formula: ""
    folder: ""
    hideZero: false
Source: ${JSON.stringify(source)}
Dashboard_Layout:
  - color: "#f59e0b"
    icon: 📝
    label: MY TAKE
    key: Thoughts
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#f59e0b"
    icon: 📚
    label: SOURCE
    key: Source
    type: vault_links
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    notInText: true
cssclasses:
  - sylvics-dashboard
created: ${tp.file.creation_date("YYYY-MM-DD")}
---

\`\`\`sylvics-view
EntityDashboardHero
\`\`\`

`;
tR += yaml;
%>

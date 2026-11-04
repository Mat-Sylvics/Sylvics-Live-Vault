<%*
// Template - Definition (31 Oct 2026): the word or term (it becomes the title), then where you met it, picked
// from the vault, and a page that defines it. The text starts with the "Origin:" line every definition has.
// Cancelling the first question removes the note.
const self = tp.file.find_tfile(tp.file.path(true));
const term = ((await tp.system.prompt("Which word or term?", "")) || "").trim();
if (!term) {
    // after Templater has finished with the file
    if (self) setTimeout(() => app.fileManager.trashFile(self), 400);
    return;
}
const plain = (s) => String(s).replace(/^[^\p{L}\p{N}]+/u, "").trim().toLowerCase();
// Templater's pick list in the Sylvics dialog look
const skin = (title) => setTimeout(() => {
    const el = [...document.querySelectorAll(".modal-container .prompt")].pop();
    if (!el || el.querySelector(".syl-suggest-title")) return;
    el.addClass("syl-modal-suggest");
    el.prepend(createDiv({ cls: "syl-suggest-title", text: title }));
}, 0);

// Where you met it: a source in the vault (a lecture, a book, a paper...) or a figure, or nothing yet
const SRC = "04 - Resources/5. 📚 Sources/";
const works = app.vault.getMarkdownFiles()
    .filter(f => (f.path.startsWith(SRC) || f.path.includes("/🏛️ Figures/")) && !/masterpage|database|^template|^\d+\./i.test(plain(f.basename)))
    .sort((a, b) => plain(a.basename).localeCompare(plain(b.basename)));
const kind = (f) => f.path.includes("/🏛️ Figures/") ? "Figures" : (f.path.slice(SRC.length).split("/")[0] || "").replace(/^\d+\.\s*\S+\s*/u, "");
const NONE = "— Not in the vault, or later";
skin("Where did you meet it?");
const pickW = await tp.system.suggester([NONE, ...works.map(f => `${f.basename}   · ${kind(f)}`)], [NONE, ...works], false, "Type to search your sources and figures");
const source = pickW && pickW !== NONE ? [`[[${pickW.basename}]]`] : [];

const sourceLink = ((await tp.system.prompt("A page that defines it? (optional)", "")) || "").trim();

let safeName = term.replace(/[\\/:*?\"<>|#^\[\]]/g, "").replace(/\.+$/, "").trim().slice(0, 120);
if (!safeName) safeName = "Untitled Definition";
await tp.file.rename("🔤 " + safeName);

// Build the YAML frontmatter safely
let yaml = `---
Status: 📥 Inbox
ContentType: Micro-Knowledge
tags:
  - etymology
  - definition
cssclasses:
  - dashboard
  - cards
  - sylvics-dashboard
sylvics-fullscreen: true
sylvics-up: "[[🔤 0. Etymology Masterpage]]"
Dashboard_Theme: Definition
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Micro-Knowledge - Etymology.png
Type:
Source: ${JSON.stringify(source)}
Header_Schema:
  - color: "#eab308"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - 📥 Inbox
      - ⏳ Consuming
      - 🗂️ Library
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Topics
    key: tags
    type: multi_select
    options:
      - etymology
      - definition
      - decisions
      - engineering
      - logistics
      - statistics
    formula: ""
    folder: ""
    hideZero: false
    hideValues:
      - etymology
      - definition
  - color: "#e5e7eb"
    icon: 🌐
    label: Source Link
    key: Source Link
    type: url
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ❤️
    label: Favorite
    key: Favorite
    type: favorite
    options: []
    formula: ""
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#eab308"
    icon: 🔤
    label: DEFINITION AND ORIGIN
    key: Definition_Details
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#eab308"
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
  - color: "#eab308"
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
Favorite: false
Source Link: ${sourceLink ? JSON.stringify(sourceLink) : "null"}
Definition_Details: "\\n\\n**Origin:** "
Dashboard_Prefix: DEFINITION
created: ${tp.file.creation_date("YYYY-MM-DD")}
---

\`\`\`sylvics-view
EntityDashboardHero
\`\`\``;
tR += yaml;
%>

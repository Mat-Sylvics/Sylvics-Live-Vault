<%*
// Template - Formula (31 Oct 2026): the formula's name (it becomes the title), its kind, then where you met it,
// picked from the vault. The formula itself is written in the note. Cancelling the first question removes the note.
const self = tp.file.find_tfile(tp.file.path(true));
const name = ((await tp.system.prompt("Which formula?", "")) || "").trim();
if (!name) {
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

const KINDS = ["Equation", "Theorem", "Law", "Identity"];
skin("What kind of formula?");
const typeText = (await tp.system.suggester(KINDS, KINDS, false, "Type to search")) || "Equation";

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

let safeName = name.replace(/[\\/:*?\"<>|#^\[\]]/g, "").replace(/\.+$/, "").trim().slice(0, 120);
if (!safeName) safeName = "Untitled Formula";
await tp.file.rename("📐 " + safeName);

let yaml = `---
Status: 📥 Inbox
ContentType: Micro-Knowledge
tags:
  - formula
  - math
cssclasses:
  - dashboard
  - cards
  - sylvics-dashboard
sylvics-fullscreen: true
sylvics-up: "[[📐 0. Formulas Masterpage]]"
Dashboard_Theme: Formula
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Micro-Knowledge - Formulas.png
Source: ${JSON.stringify(source)}
Header_Schema:
  - color: "#0ea5e9"
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
      - formula
      - physics
      - math
      - chemistry
      - decisions
      - memory
      - money
      - probability
      - queues
      - statistics
      - systems
      - training
      - work
    formula: ""
    folder: ""
    hideZero: false
    hideValues:
      - formula
      - math
  - color: "#e5e7eb"
    icon: 🏷️
    label: Category
    key: Type
    type: select
    options:
      - Equation
      - Theorem
      - Identity
      - Law
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
  - color: "#0ea5e9"
    icon: 📐
    label: FORMULA
    key: Formula_Details
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#0ea5e9"
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
  - color: "#0ea5e9"
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
Type: ${typeText}
Favorite: false
Formula_Details: ""
Dashboard_Prefix: FORMULA
created: ${tp.file.creation_date("YYYY-MM-DD")}
---

\`\`\`sylvics-view
EntityDashboardHero
\`\`\``;
tR += yaml;
%>

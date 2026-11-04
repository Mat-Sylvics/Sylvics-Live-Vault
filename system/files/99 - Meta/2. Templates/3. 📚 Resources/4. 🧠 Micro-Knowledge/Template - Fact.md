<%*
// Template - Fact (31 Oct 2026): the fact in one sentence (it becomes the title), then where it comes from,
// picked from the vault, and the web page that shows it. Cancelling the first question removes the note.
const self = tp.file.find_tfile(tp.file.path(true));
const factText = ((await tp.system.prompt("The fact, in one sentence?", "")) || "").trim();
if (!factText) {
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

// Where it comes from: a source in the vault (book, paper, article...) or a figure, or nothing yet
const SRC = "04 - Resources/5. 📚 Sources/";
const works = app.vault.getMarkdownFiles()
    .filter(f => (f.path.startsWith(SRC) || f.path.includes("/🏛️ Figures/")) && !/masterpage|database|^template|^\d+\./i.test(plain(f.basename)))
    .sort((a, b) => plain(a.basename).localeCompare(plain(b.basename)));
const kind = (f) => f.path.includes("/🏛️ Figures/") ? "Figures" : (f.path.slice(SRC.length).split("/")[0] || "").replace(/^\d+\.\s*\S+\s*/u, "");
const NONE = "— Not in the vault, or later";
skin("Where is it from?");
const pickW = await tp.system.suggester([NONE, ...works.map(f => `${f.basename}   · ${kind(f)}`)], [NONE, ...works], false, "Type to search your sources and figures");
const source = pickW && pickW !== NONE ? [`[[${pickW.basename}]]`] : [];

const sourceLink = ((await tp.system.prompt("A web page that shows it? (optional)", "")) || "").trim();

// File name: the whole sentence, as the facts are named
let safeName = factText.replace(/[\\/:*?\"<>|#^\[\]]/g, "").replace(/\.+$/, "").trim().slice(0, 120);
if (!safeName) safeName = "Untitled Fact";
await tp.file.rename("💡 " + safeName);

// Build the YAML frontmatter safely
let yaml = `---
Status: 📥 Inbox
ContentType: Micro-Knowledge
tags:
  - culture
cssclasses:
  - dashboard
  - cards
  - sylvics-dashboard
sylvics-fullscreen: true
sylvics-up: "[[💡 0. Trivia Masterpage]]"
Dashboard_Theme: Trivia
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Micro-Knowledge - Trivia.png
Type:
Source: ${JSON.stringify(source)}
Header_Schema:
  - color: "#a855f7"
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
      - culture
      - history
      - science
      - geography
      - charts
      - computing
      - habit
      - logistics
      - medicine
      - memory
      - stoicism
      - systems
      - writing
    formula: ""
    folder: ""
    hideZero: false
    hideValues:
      - culture
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
  - color: "#a855f7"
    icon: 💡
    label: DETAILS
    key: Fact_Details
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#a855f7"
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
  - color: "#a855f7"
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
Fact_Details: ""
Dashboard_Prefix: FACT
created: ${tp.file.creation_date("YYYY-MM-DD")}
---

\`\`\`sylvics-view
EntityDashboardHero
\`\`\``;
tR += yaml;
%>

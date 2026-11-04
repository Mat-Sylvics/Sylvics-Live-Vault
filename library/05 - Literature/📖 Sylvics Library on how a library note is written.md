---
ContentType: Literature
tags:
- Literature
- Productivity
cssclasses:
- dashboard
- cards
- sylvics-dashboard
- preserve-scroll
- sylvics-fullscreen
- sylvics-up
sylvics-fullscreen: true
sylvics-up: '[[📖 0. Literature Masterpage]]'
Dashboard_Theme: Literature
Dashboard_Prefix: LITERATURE NOTE
Page_Icon: 📖
Header_Schema:
- color: '#c026d3'
  icon: 🚦
  label: Status
  key: Literature_Status
  type: select
  options:
  - 📥 Inbox
  - 🟡 Processing
  - 🟢 Processed
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🏷️
  label: Topics
  key: tags
  type: multi_select
  options:
  - Philosophy
  - Psychology
  - Technology
  - Productivity
  - Business
  - Science
  - History
  - Art
  - Literature
  - Society
  - Logic
  - Design
  formula: ''
  folder: ''
  hideZero: false
- color: '#a78bfa'
  icon: 🧭
  label: Life areas
  key: AreaType
  type: multi_select
  options:
  - Health
  - Relationships & Social
  - Business & Career
  - Finances
  - Home & Environment
  - Personal Growth
  - Recreation
  - Spirituality & Meaning
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 💎
  label: Permanent Notes
  key: Became
  type: formula
  options: []
  formula: "if (!dv || !p || !p.file) return '--';\nlet seen = {};\nlet n = 0;\ntry {\n  let own = Array.isArray(p.Permanent_Links) ? p.Permanent_Links : (p.Permanent_Links ? [p.Permanent_Links] : []);\n  for (let l of own) {\n    let name = String((l && l.path) ? l.path : l).replace(/\\[\\[|\\]\\]/g, \"\").split(\"|\")[0].split(\"/\").pop().replace(/\\.md$/, \"\");\n    if (name && !seen[name]) { seen[name] = true; n++; }\n  }\n  let cited = dv.pages('\"06 - Permanent\"').where(x => String(x.Source || \"\").includes(p.file.name));\n  for (let x of cited) {\n    let name = x.file.name;\n    if (name && !seen[name]) { seen[name] = true; n++; }\n  }\n} catch (e) {}\nif (n === 0) return { html: \"None yet\", color: \"#f59e0b\" };\nreturn n === 1 ? \"1 note\" : n + \" notes\";\n"
  folder: ''
  hideZero: false
Dashboard_Layout:
- color: '#c026d3'
  icon: 📋
  label: Overview
  key: ''
  type: tab_marker
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#c026d3'
  icon: 📚
  label: SOURCE
  key: Source
  type: vault_links
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#c026d3'
  icon: 💎
  label: PERMANENT NOTES
  key: Permanent_Links
  type: link_list
  folder: 06 - Permanent
  options: []
  options2: []
  width: 50%
  hideZero: true
  allowCreate: true
  addLabel: + Link a permanent note
- color: '#c026d3'
  icon: 🧵
  label: SYNTHESIS
  key: Synthesis
  type: textarea
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  autoHeight: true
- color: '#c026d3'
  icon: ✨
  label: KEY IDEAS
  key: Top_Highlights
  type: sylvics_highlights
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#c026d3'
  icon: 🔗
  label: Links
  key: ''
  type: tab_marker
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#c026d3'
  icon: 🕸️
  label: CONNECTIONS
  key: ''
  type: neural_network
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#c026d3'
  icon: 🔗
  label: LINKED FROM
  key: ''
  type: linked_from
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  notInText: true
- color: '#c026d3'
  icon: ⏹️
  label: END OF TABS
  key: ''
  type: end_tabs
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#c026d3'
  icon: 📝
  label: READING NOTES
  key: Literature_Notes
  type: canvas_break
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#c026d3'
  icon: 🗣️
  label: IN SHORT
  key: In_Short
  type: canvas_break
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
Literature_Status: 🟡 Processing
Synthesis: 'A second placeholder, to show a note still being processed. Library notes will follow the same rules as your own: the claim first, from memory; then the evidence; then what you would argue back.'
Permanent_Links: []
Top_Highlights:
- highlight: The claim first, written from memory.
  notes: The In short block below is written before rereading.
Source: []
created: 2026-11-04
AreaType:
- Personal Growth
source: Sylvics library
library-placeholder: true
---

```sylvics-view
EntityDashboardHero | {section: 0}
```

> [!syl-hidden]
> *A placeholder.*
>
> ## The three steps
>
> 1. **In short**: the central claim in one paragraph, from memory.
> 2. **Key ideas**: the passages that carry it, each with a line on why it matters.
> 3. **Synthesis**: what the source changes in what you think, and what you would argue back.

```sylvics-view
EntityDashboardHero | {section: 1}
```

> [!syl-hidden]
> - In : the Sylvics library
> - the library argues that : a literature note is finished when its claim fits in one paragraph
> - by stating that : what cannot be said briefly has not been understood yet


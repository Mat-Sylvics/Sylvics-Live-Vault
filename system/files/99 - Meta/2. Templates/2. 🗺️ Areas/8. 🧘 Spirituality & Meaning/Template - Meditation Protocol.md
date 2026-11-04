---
Type: Protocol
Intent: Nervous System Reset
Difficulty: Beginner
syl-icon: 🪷
Status: Active
cssclasses:
  - entity-theme
  - dashboard
  - sylvics-dashboard
  - transparent-bg
sylvics-fullscreen: true
sylvics-up: "[[3. Meditation Protocols Manager]]"
sylvics-forward: ""
sylvics-backward: ""
Related_Files: []
Resources:
  - text: New Resource
    url: ""
Action_Items: []
Resources_Urls: []
Carried_By: ""
Header_Schema:
  - color: "#F5C842"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Active
      - Paused
      - Archived
    formula: ""
    folder: ""
    hideZero: false
    subFormula: "const nm = String((p.file && (p.file.name || p.file.basename)) || \"\").replace(/\\.md$/, \"\"); if (!nm) return \"\"; const tf = p.file && p.file.path ? app.vault.getAbstractFileByPath(p.file.path) : null; const own = tf ? ((app.metadataCache.getFileCache(tf) || {}).frontmatter || {}) : {}; let cb = own.Carried_By || p.Carried_By; if (Array.isArray(cb)) cb = cb[0]; cb = String((cb && cb.path) || cb || \"\").replace(/^.*?\\[\\[|\\]\\].*$/g, \"\").split(\"|\")[0].split(\"/\").pop().replace(/\\.md$/, \"\").trim(); let c = 0, last = \"\"; for (const f of app.vault.getMarkdownFiles()) { if (!f.path.startsWith(\"07 - Journal/01 Daily\")) continue; const fm = (app.metadataCache.getFileCache(f) || {}).frontmatter; if (!fm) continue; let hit = String(fm.Meditation_Protocol || \"\").includes(nm) && parseFloat(fm.Meditate) > 0; if (!hit && cb) hit = Object.values(fm).some(v => Array.isArray(v) && v.some(it => it && typeof it === \"object\" && String(it.name || \"\").includes(cb) && (it.completed === true || it.completed === \"true\"))); if (!hit) continue; c++; const d = f.basename.slice(0, 10); if (d > last) last = d; } const unit = cb ? (c > 1 ? \" days\" : \" day\") : (c > 1 ? \" sessions\" : \" session\"); return c ? c + unit + \" · last \" + window.moment(last).format(\"D MMM YYYY\") : (cb ? \"Not done yet\" : \"No sessions yet\");"
  - color: "#e5e7eb"
    icon: 🎚️
    label: Difficulty
    key: Difficulty
    type: select
    options:
      - Beginner
      - Intermediate
      - Advanced
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🎯
    label: Intent
    key: Intent
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#7dd3fc"
    icon: 🔹
    label: Carried by
    key: Carried_By
    emptyText: No habit · pick one
    type: folder_select
    options: []
    formula: ""
    folder: 02 - Planning/2. ♟️ Strategy/2. 🔹 Habits
    hideZero: false
Dashboard_Layout:
- color: '#F5C842'
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
- color: '#F5C842'
  icon: 🪷
  label: INSTRUCTIONS
  key: Instructions
  type: textarea
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  autoHeight: true
  noStretch: true
  column: left
- color: '#F5C842'
  icon: 📖
  label: ABOUT THIS PRACTICE
  key: Description
  type: textarea
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  autoHeight: true
  noStretch: true
  column: right
- color: '#F5C842'
  icon: ☑️
  label: COMMITMENTS
  key: Action_Items
  type: action_items
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  hideProgress: true
  countWord: kept
  accentPanel: true
- color: '#F5C842'
  icon: 🗓️
  label: Log
  key: ''
  type: tab_marker
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#F5C842'
  icon: 📊
  label: SESSIONS
  key: ''
  type: protocol_telemetry
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#F5C842'
  icon: 📓
  label: IN THE JOURNAL
  key: ''
  type: journal_mentions
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  byName: true
  notProp: Meditation_Protocol
  hideEmpty: true
- color: '#F5C842'
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
- color: '#F5C842'
  icon: 📚
  label: GOES WITH
  key: Resources
  type: resource_grid
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  fill: true
  notin: Carried_By
  noStretch: true
- color: '#F5C842'
  icon: 🔗
  label: LINKED FROM
  key: ''
  type: linked_from
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  hideEmpty: true
  noStretch: true
- color: '#F5C842'
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
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Header_Color: "#F5C842"
Dashboard_Prefix_Color: "#fde68a"
Strip_Emojis: true
Description: Non-Sleep Deep Rest (Yoga Nidra). A protocol for resetting the nervous system and recovering lost sleep.
Instructions: |+
  1. Find a quiet place to sit or lie down.
  2. Close your eyes.
  3. Focus on your breath.

Dashboard_Theme: Standard
Cover_Alignment: Right
Dashboard_Background: ""
Dashboard_Prefix: MEDITATION
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

---
tags:
  - figure
ContentType: Figure
Type: 
Favorite: false
sylvics-up: '[[🏛️ 0. Figures Database]]'
sylvics-fullscreen: true
Dashboard_Prefix: FIGURE
Dashboard_Prefix_Color: "#f59e0b"
Header_Schema:
  - color: "#f59e0b"
    icon: 💼
    label: Profession
    key: occupation
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Field
    key: fields
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🌍
    label: Nationality
    key: nationality
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🌱
    label: Born
    key: birth
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🍂
    label: Died
    key: death
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#f59e0b"
    icon: 📋
    label: Overview
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 📜
    label: BIOGRAPHY
    fit: true
    key: fig_biography
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 💡
    label: CORE IDEAS
    fit: true
    key: fig_core_ideas
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🎯
    label: TAKEAWAYS
    key: fig_personal_takeaways
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🗓️
    label: Life
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🗒️
    label: TIMELINE
    key: fig_timeline
    type: observation_logs
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    addLabel: + ADD EVENT
    addTitle: Add an event
    editTitle: Edit the event
    noTime: true
    dateFormat: D MMMM YYYY
  - color: "#f59e0b"
    icon: 🔗
    label: Links
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🧩
    label: KEY CONCEPTS
    key: fig_key_concepts
    type: link_list
    folder: 04 - Resources/4. 🧠 Micro-Knowledge/5. 🧩 Concepts
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#f59e0b"
    icon: 📖
    label: LITERATURE NOTES
    key: fig_literature_notes
    type: link_list
    folder: 05 - Literature
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#f59e0b"
    icon: 💎
    label: PERMANENT NOTES
    key: fig_pni
    type: link_list
    folder: 06 - Permanent
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#f59e0b"
    icon: 🏛️
    label: RELATED FIGURES
    key: fig_related_authors
    type: link_list
    folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/🏛️ Figures
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#f59e0b"
    icon: 🗂️
    label: RELATED NOTES
    key: fig_related
    type: vault_links
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 💬
    label: QUOTES AND FACTS
    key: ""
    type: custom_dataview
    folder: "00. 🧠 Micro-Knowledge Masterpage"
    options:
      - TABLE WITHOUT ID file.link AS "Note", regexreplace(regexreplace(file.folder, "^.*/", ""), "^[0-9]+[.] ", "") AS "Kind" FROM "04 - Resources/4. 🧠 Micro-Knowledge" WHERE contains(string(Author), replace(this.file.name, "🏛️ ", "")) OR contains(string(Source), replace(this.file.name, "🏛️ ", "")) OR contains(string(Fact_Details), replace(this.file.name, "🏛️ ", "")) OR contains(string(Thoughts), replace(this.file.name, "🏛️ ", "")) SORT file.folder ASC, file.name ASC LIMIT 30
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 📚
    label: WORKS
    key: ""
    type: custom_dataview
    folder: "00. 📚 Sources Masterpage"
    options:
      - TABLE WITHOUT ID file.link AS "Work", regexreplace(regexreplace(file.folder, "^.*/", ""), "^[0-9]+[.] ", "") AS "Kind" FROM "04 - Resources/5. 📚 Sources" WHERE contains(string(Author), replace(this.file.name, "🏛️ ", "")) OR contains(string(Authors), replace(this.file.name, "🏛️ ", "")) SORT file.name ASC LIMIT 30
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🔗
    label: MENTIONED IN
    key: ""
    type: linked_from
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: ⏹️
    label: END OF TABS
    key: ""
    type: end_tabs
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
birth: ''
death: ''
nationality: ''
occupation: ''
fields: ''
fig_biography: ''
fig_core_ideas: ''
fig_works:
  Books: []
  Articles: []
  Papers: []
  Videos: []
fig_key_concepts: []
fig_timeline: []
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ''
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Figures - Hall of Busts.png
  Golden Statues Library.png
Dashboard_Header_Color: "#f59e0b"
fig_literature_notes: []
fig_pni: []
fig_related_authors: []
fig_personal_takeaways: ''
fig_related: []
Related_Files: []
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---



```sylvics-view
EntityDashboardHero
```

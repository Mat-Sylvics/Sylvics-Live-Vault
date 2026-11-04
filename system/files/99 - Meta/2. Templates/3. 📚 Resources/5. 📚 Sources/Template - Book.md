---
ContentType: Media
Type: Book
Author:
Cover:
Rating: ""
Favorite: false
Date_started:
Date_finished:
Genre: ""
Book_Status: 📥 Inbox
cssclasses:
  - preserve-scroll
  - sylvics-fullscreen
  - sylvics-up
  - sylvics-dashboard
Implementation_Status: 🔴 Pending
Linked_Skill: ""
Tags: []
Quick_Jots: ""
Core_Thesis: ""
Dashboard_Theme: Book
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Cozy Magical Library.png
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Cover_Alignment: Right
Inherit_Blueprint: ""
sylvics-fullscreen: true
sylvics-up: "[[📕 0. Books Masterpage]]"
Web_Links: []
Header_Schema:
  - color: "#f59e0b"
    icon: 🚦
    label: Status
    key: Book_Status
    type: select
    options:
      - 📥 Inbox
      - ⏳ Consuming
      - 🗂️ Library
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ✍️
    label: Author
    key: Author
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📚
    label: Genre
    key: Genre
    type: multi_select
    options:
      - Fiction
      - Non-Fiction
      - Sci-Fi
      - Dystopia
      - Romance
      - Classic
      - Fantasy
      - History
      - Biography
      - Self-Help
      - Philosophy
      - Psychology
      - Business
      - Cooking
    formula: ""
    folder: ""
    hideZero: false
  - color: "#f59e0b"
    icon: ⭐
    label: Rating
    key: Rating
    type: stars
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Topics
    key: Tags
    type: multi_select
    options:
      - cooking
      - decisions
      - english_literature
      - french_literature
      - habits
      - history
      - japanese_literature
      - logistics
      - money
      - note-taking
      - operations
      - philosophy
      - product
      - productivity
      - psychology
      - statistics
      - stoicism
      - systems
      - technology
      - writing
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏁
    label: Finished
    key: Date_finished
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🎓
    label: Skill
    key: Linked_Skill
    type: folder_select
    options: []
    formula: ""
    folder: 02 - Planning/2. ♟️ Strategy/3. ♦️ Skills
    hideZero: true
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
    icon: 📊
    label: READING PROGRESS
    key: ""
    type: reading_progress
    folder: ""
    options: []
    options2: []
    width: 66%
    hideZero: false
    allowCreate: false
  - color: "#f59e0b"
    icon: 🛠️
    label: PUT INTO PRACTICE
    key: Implementation_Status
    type: select
    folder: ""
    options:
      - 🔴 Pending
      - 🟡 Ongoing
      - 🟢 Applied
      - ⚪ Abandoned halfway
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🎯
    label: CORE THESIS
    key: Core_Thesis
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#f59e0b"
    icon: ⚡
    label: QUICK JOTS
    key: Quick_Jots
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
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
    icon: 💬
    label: QUOTES
    key: Quotes_list
    type: link_list
    folder: 04 - Resources/4. 🧠 Micro-Knowledge/1. 💬 Quotes
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
    addLabel: + Link a quote
  - color: "#f59e0b"
    icon: 🧩
    label: KEY CONCEPTS
    key: Concepts_list
    type: link_list
    folder: 04 - Resources/4. 🧠 Micro-Knowledge/5. 🧩 Concepts
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
    addLabel: + Link a concept
  - color: "#f59e0b"
    icon: 📖
    label: LITERATURE NOTES
    key: Lit_Notes_list
    type: link_list
    folder: 05 - Literature
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
    addLabel: + Link a literature note
  - color: "#f59e0b"
    icon: 💎
    label: PERMANENT NOTES
    key: Perm_Notes_list
    type: link_list
    folder: 06 - Permanent
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
    addLabel: + Link a permanent note
  - color: "#f59e0b"
    icon: 🏛️
    label: RELATED FIGURES
    key: Related_Figures_list
    type: link_list
    folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/🏛️ Figures
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    addLabel: + Link a figure
  - color: "#f59e0b"
    icon: 🌐
    label: WEB LINKS
    key: Web_Links
    type: sylvics_web_links
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
    width: 100%
    hideZero: false
    allowCreate: true
    notInText: true
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
  - color: "#f59e0b"
    icon: 💡
    label: TAKEAWAYS
    key: action_takeaway_canvas
    type: canvas_break
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#f59e0b"
    icon: 🔖
    label: CHAPTER NOTES
    key: chapter_breakdown_sec
    type: canvas_break
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Dashboard_Prefix: BOOK
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | {section: 0}
```

> [!syl-hidden]
> Type your actionable takeaways here...

```sylvics-view
EntityDashboardHero | {section: 1}
```

> [!syl-hidden]
> ### [[🔖 Chapter 1 Title]]
> - Key takeaway here
> - Key takeaway here

```sylvics-view
EntityDashboardHero | {section: 2}
```

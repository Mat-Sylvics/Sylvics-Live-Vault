---
ContentType: Media
Type: Article
Article_Status: 📥 Inbox
Author: ""
URL: ""
Rating: ""
Favorite: false
cssclasses:
  - preserve-scroll
  - sylvics-fullscreen
  - sylvics-up
  - sylvics-dashboard
Created: <% tp.file.creation_date("YYYY-MM-DD") %>
Tags: []
Published: ""
Cover: ""
Quick_Jots: ""
Core_Thesis: ""
sylvics-fullscreen: true
sylvics-up: "[[📰 0. Articles Masterpage]]"
Dashboard_Theme: Article
Linked_Skill: ""
Header_Schema:
  - color: "#06b6d4"
    icon: 🚦
    label: Status
    key: Article_Status
    type: select
    options:
      - 📥 Inbox
      - ⏳ In Progress
      - ✅ Finished
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
    icon: 🏷️
    label: Topics
    key: Tags
    type: multi_select
    options:
      - clipping
      - technology
      - science
      - business
      - politics
      - health
      - culture
      - philosophy
      - economics
      - society
      - history
      - self-improvement
      - career
      - estimation
      - note-taking
      - productivity
      - reading
      - statistics
      - stoicism
      - systems
      - writing
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
    icon: 📅
    label: Published
    key: Published
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🌐
    label: Read Online
    key: URL
    type: url
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
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
  - color: "#06b6d4"
    icon: 💡
    label: TAKEAWAYS
    key: action_takeaway_sec
    type: canvas_break
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 📰
    label: ARTICLE NOTES
    key: content_sec
    type: canvas_break
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Futuristic SciFi Library.png
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Cover_Alignment: Right
Inherit_Blueprint: ""
Dashboard_Prefix: ARTICLE
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
> No notes yet. Click EDIT to write freely below.

```sylvics-view
EntityDashboardHero | {section: 2}
```

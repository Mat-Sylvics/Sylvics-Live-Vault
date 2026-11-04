---
tags:
  - project
  - home/improvement
sylvics-up: '[[3. Home Improvements Hub]]'
cssclasses:
  - dashboard
sylvics-fullscreen: true
Status: Wishlist
Budget: 0
Actual_Cost: 0
Room: ''
Contractor_Link: ''
Start_Date: ''
End_Date: ''
Action_Items: []
Notes: ""
Gallery: []
Dashboard_Layout:
  - color: "#FF9F43"
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
  - color: "#FF9F43"
    icon: 💰
    label: EXPENSES
    key: ""
    type: Expenses Log
    folder: ""
    options: []
    options2: []
    width: 66%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
    icon: ☑️
    label: NEXT STEPS
    key: Action_Items
    type: action_items
    folder: ""
    options: []
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
    icon: 🗓️
    label: Log
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
    icon: 📷
    label: PHOTOS
    key: Gallery
    type: gallery
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
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
  - color: "#FF9F43"
    icon: 📌
    label: TASKS
    key: ""
    type: link_table
    hideEmpty: true
    folder: ""
    options:
      - in=02 - Planning/3. 🚀 Execution/2. 📌 Tasks
      - skip=Masterpage
      - direction=both
      - column=Task:file
      - column=Status:Task_Status
      - column=Deadline:due-date
      - sort=due-date
      - limit=20
      - empty=No task note is linked to this project yet.
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#FF9F43"
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
  - color: "#FF9F43"
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
Header_Schema:
  - color: "#FF9F43"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Wishlist
      - Planning
      - Active
      - Paused
      - Completed
      - Cancelled
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📍
    label: Location
    key: Room
    type: location
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Started
    key: Start_Date
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏁
    label: Finished
    key: End_Date
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 👤
    label: Done By
    key: Contractor_Link
    type: folder_select
    options: []
    formula: ""
    folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/👤 Contacts, 04 - Resources/3. 🌐 Entities/2. 🏢 Companies & Organizations, 04 - Resources/3. 🌐 Entities/3. 🌍 Geographies & Places/2. 🏢 Establishments & Locals/10. Services & Utilities
    hideZero: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ''
Dashboard_Header_Color: "#FF9F43"
Dashboard_Prefix_Color: "#fdba74"
Dashboard_Prefix: HOME PROJECT
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | dv.current(
```


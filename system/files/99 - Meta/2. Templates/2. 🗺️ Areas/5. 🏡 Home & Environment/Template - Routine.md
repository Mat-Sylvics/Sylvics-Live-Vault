---
tags:
  - routine
  - home/maintenance
Status: Active
Next_Due: 2026-09-01
Recurrence: 1 month
Checklist:
  - text: "Example step 1"
    completed: false
  - text: "Example step 2"
    completed: false
cssclasses:
  - dashboard
sylvics-fullscreen: true
sylvics-up: "[[0. Maintenance Masterpage]]"
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Dashboard_Header_Color: "#fdba74"
Dashboard_Prefix_Color: "#fed7aa"
Background: ""
Header_Schema:
  - color: "#fdba74"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Active
      - Paused
    formula: ""
    folder: ""
    hideZero: false
Notes: ""
Dashboard_Layout:
  - color: "#fdba74"
    icon: ☑️
    label: STEPS
    key: ""
    type: Routine Engine
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#fdba74"
    icon: 📝
    label: NOTES
    key: Background
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#fdba74"
    icon: 🧰
    label: EQUIPMENT AND SUPPLIES
    key: ""
    type: link_table
    folder: ""
    options:
      - in=03 - Areas/5. 🏡 Home & Environment/2. Inventory/Assets
      - in=03 - Areas/5. 🏡 Home & Environment/2. Inventory/Consumables
      - direction=both
      - column=Item:file
      - column=In:folder
      - column=Status:Status
      - sort=folder
      - limit=12
      - empty=No owned item or supply is linked yet.
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#fdba74"
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
Inherit_Blueprint: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | dv.current(
```

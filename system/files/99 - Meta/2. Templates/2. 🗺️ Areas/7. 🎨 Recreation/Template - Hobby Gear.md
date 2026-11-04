---
syl-icon: 🎒
Icon: 🎒
tags:
  - gear
  - recreation
sylvics-up: "[[2. Hobbies Gear Manager]]"
cssclasses:
  - entity-theme
  - dashboard
  - sylvics-dashboard
  - transparent-bg
sylvics-fullscreen: true
Purchased: ""
Cost: 0
Usage_Log: []
Condition: Mint
Skill_Level: Intermediate
Status: Active
cover: ""
Linked_Hobbies: []
Notes: ""
Maintenance_Log: []
sylvics-forward: ""
sylvics-backward: ""
Header_Schema:
  - color: "#00D4FF"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Active
      - Stored
      - Sold
      - Broken
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Condition
    key: Condition
    type: select
    options:
      - Mint
      - Good
      - Fair
      - Needs Repair
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 💰
    label: Cost
    key: Cost
    type: currency
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Purchased
    key: Purchased
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🪁
    label: Hobby
    key: Linked_Hobbies
    type: folder_select
    options: []
    formula: ""
    folder: 03 - Areas/7. 🎨 Recreation/1. 🪁 Hobbies/Active Hobbies
    hideZero: true
Dashboard_Layout:
  - color: "#00D4FF"
    icon: ⏱️
    label: Usage
    key: Usage_Log
    type: skill_logger
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#00D4FF"
    icon: 🛠️
    label: MAINTENANCE
    key: Maintenance_Log
    type: maintenance_log
    noStretch: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#00D4FF"
    icon: ☑️
    label: NEXT STEPS
    key: Action_Items
    type: action_items
    noStretch: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#00D4FF"
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    autoHeight: true
    noStretch: true
    fill: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#00D4FF"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    hideEmpty: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Strip_Emojis: true
Dashboard_Header_Color: "#00D4FF"
Dashboard_Prefix_Color: "#67e8f9"
Dashboard_Prefix: GEAR
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | dv.current(
```

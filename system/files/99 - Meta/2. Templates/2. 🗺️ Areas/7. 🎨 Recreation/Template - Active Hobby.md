---
Icon: 🎯
NextMilestone: ""
Banner: ""
Status: Active
Current_Focus: ""
Hours_Before: 0
Notes: ""
Action_Items: []
Related_Files: []
Log: []
Resources: []
sylvics-up: "[[1. Hobbies Manager]]"
sylvics-fullscreen: true
cssclasses:
  - entity-theme
  - dashboard
  - sylvics-dashboard
  - transparent-bg
Recovery_Type: Hidden
Resources_Urls: []
Dashboard_Layout:
- color: '#00D4FF'
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
- color: '#00D4FF'
  icon: 🎯
  label: CURRENT FOCUS
  key: Current_Focus
  type: textarea
  autoHeight: true
  noStretch: true
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#00D4FF'
  icon: 🚩
  label: NEXT MILESTONE
  key: NextMilestone
  type: textarea
  autoHeight: true
  noStretch: true
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#00D4FF'
  icon: ☑️
  label: NEXT STEPS
  key: Action_Items
  type: action_items
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#00D4FF'
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
- color: '#00D4FF'
  icon: ⏱️
  label: SESSIONS
  key: Log
  type: skill_logger
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#00D4FF'
  icon: 📓
  label: IN THE JOURNAL
  key: ''
  type: journal_mentions
  byName: true
  logDays: Log
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#00D4FF'
  icon: 📝
  label: Notes
  key: ''
  type: tab_marker
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#00D4FF'
  icon: 📝
  label: NOTES
  key: Notes
  type: textarea
  autoHeight: true
  noStretch: true
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#00D4FF'
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
- color: '#00D4FF'
  icon: 📚
  label: RESOURCES
  key: Resources
  type: resource_grid
  fill: true
  folder: ''
  options: []
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
  noStretch: true
- color: '#00D4FF'
  icon: 🎒
  label: GEAR
  key: ''
  type: custom_dataview
  hideEmpty: true
  folder: 2. Hobbies Gear Manager
  options:
  - TABLE WITHOUT ID file.link AS "Gear", Status, Condition, sum(Usage_Log.hours) AS "Hours" FROM "03 - Areas/7. 🎨 Recreation/1. 🪁 Hobbies/Gear" WHERE contains(string(Linked_Hobbies), this.file.name) SORT file.name ASC LIMIT 25
  options2: []
  width: 50%
  hideZero: false
  allowCreate: true
- color: '#00D4FF'
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
- color: '#00D4FF'
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
Header_Schema:
  - color: "#00D4FF"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Active
      - Paused
      - Retired
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🔋
    label: Energy
    key: Recovery_Type
    type: select
    options:
      - Active Restorative
      - Passive Restorative
      - Active Draining
      - Passive Draining
      - Uncategorized
      - Hidden
    formula: ""
    folder: ""
    hideZero: false
  - color: "#00D4FF"
    icon: 📈
    label: Time put in
    key: Practice_Hours
    type: rpg_level
    showHours: true
    options: []
    formula: ""
    folder: ""
    hideZero: false
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Strip_Emojis: true
syl-icon: 🎯
Dashboard_Header_Color: "#00D4FF"
Dashboard_Prefix_Color: "#67e8f9"
Dashboard_Prefix: HOBBY
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | dv.current(
```

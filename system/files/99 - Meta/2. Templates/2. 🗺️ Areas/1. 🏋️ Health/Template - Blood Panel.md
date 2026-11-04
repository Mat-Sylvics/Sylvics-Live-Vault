---
sylvics-up: "[[🩸 0. Bloodwork Masterpage]]"
sylvics-fullscreen: true
cssclasses:
  - dashboard
Type: Blood Panel
Date: <% tp.date.now("YYYY-MM-DD") %>
Time: ""
Clinic: ""
Physician: ""
Notes: ""
Header_Schema:
  - color: "#ef4444"
    icon: 📅
    label: Date
    key: Date
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🕒
    label: Time
    key: Time
    type: time
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏥
    label: Clinic
    key: Clinic
    type: folder_select
    options: []
    formula: ""
    folder: 04 - Resources/3. 🌐 Entities/3. 🌍 Geographies & Places/2. 🏢 Establishments & Locals/9. Health & Medical
    hideZero: true
  - color: "#e5e7eb"
    icon: 🩺
    label: Physician
    key: Physician
    type: folder_select
    options: []
    formula: ""
    folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/👤 Contacts
    hideZero: true
Dashboard_Layout:
  - color: "#ef4444"
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
  - color: "#ef4444"
    icon: 🔬
    label: RESULTS
    key: lab_results
    type: lab_results
    folder: 🩸 0. Bloodwork Masterpage
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#ef4444"
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#ef4444"
    icon: 🩺
    label: PHYSICIAN ADVICE
    key: Recommendation_Notes
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#ef4444"
    icon: ☑️
    label: NEXT STEPS
    key: Clinical_Actions
    type: action_items
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#ef4444"
    icon: 🦾
    label: RECOMMENDED PROTOCOLS
    key: Recommendation_Protocols
    type: link_list
    folder: 03 - Areas/1. 🏋️ Health/3. Medical & Bio/Recovery Protocols
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: "#ef4444"
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
  - color: "#ef4444"
    icon: 🩸
    label: OTHER PANELS
    key: ""
    type: lab_panels
    folder: 🩸 0. Bloodwork Masterpage
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#ef4444"
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
  - color: "#ef4444"
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
Strip_Emojis: true
Dashboard_Header_Color: "#ef4444"
Dashboard_Prefix_Color: "#fca5a5"
Dashboard_Prefix: BLOOD PANEL
Centered_Title: true
Title_Without_Date: true
Immersive_Header: Standard
Minimal_Setup: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```
---
syl-icon: 🏔️
cssclasses:
  - entity-theme
  - dashboard
  - sylvics-dashboard
  - transparent-bg
sylvics-fullscreen: true
sylvics-up: "[[1. The Existential Framework]]"
tags:
  - philosophy
  - contemplation
Status: Active
Priority: High
Synthesis: ""
Subtitle: ""
Banner: "99 - Meta/4. Attachments/3. Sylvics Art/Banners/Cozy Magical Library.png"
Subtitle_Key: Subtitle
Header_Schema:
  - color: "#F5C842"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Active
      - Paused
      - Resolved
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🔺
    label: Priority
    key: Priority
    type: select
    options:
      - High
      - Medium
      - Low
    formula: ""
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#F5C842"
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
  - color: "#F5C842"
    icon: 🧵
    label: SYNTHESIS
    key: Synthesis
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    noStretch: true
  - color: "#F5C842"
    icon: 🗂️
    label: HOW IT GREW
    key: ""
    type: forged_from
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    members: true
  - color: "#F5C842"
    icon: ➡️
    label: TURN INTO
    key: ""
    type: domain_evolution_forge
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#F5C842"
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
  - color: "#F5C842"
    icon: 🧷
    label: MENTIONED HERE
    key: ""
    type: mentioned_here
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    hideEmpty: true
  - color: "#F5C842"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    byName: true
    hideEmpty: true
  - color: "#F5C842"
    icon: 🌱
    label: USED IN
    key: ""
    type: domain_vault_application
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    hideEmpty: true
    fill: true
  - color: "#F5C842"
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
    fill: true
    hideEmpty: true
  - color: "#F5C842"
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
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Dashboard_Header_Color: "#F5C842"
Dashboard_Prefix_Color: "#fde68a"
Strip_Emojis: true
Inherit_Blueprint: ""
Dashboard_Prefix: CONTEMPLATION DOMAIN
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | dv.current(
```


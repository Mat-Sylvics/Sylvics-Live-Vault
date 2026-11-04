---
sylvics-fullscreen: true
sylvics-up: "[[🔭 0. Explorations Masterpage]]"
tags:
  - exploration
Exploration_Status: 🟢 Active
Action_Items: []
Curiosity_Log: []
Linked_Files: []
Duration_Value: "2"
Duration_Unit: Weeks
Start_Date: <% tp.date.now("YYYY-MM-DD") %>
Conclusion: ""
Dashboard_Prefix: EXPLORATION
Linked_Skill:
Header_Schema:
  - color: "#A855F7"
    icon: 🚦
    label: Status
    key: Exploration_Status
    type: select
    options:
      - 📥 Inbox
      - 🟢 Active
      - ⚫ Concluded
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
Dashboard_Layout:
  - color: "#A855F7"
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
  - color: "#A855F7"
    icon: 🎯
    label: OBJECTIVE
    key: Objective
    autoHeight: true
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 66%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
    icon: ⏳
    label: TIME BOX
    key: ""
    type: duration_stats
    folder: ""
    options: []
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
    icon: ☑️
    label: NEXT STEPS
    key: Action_Items
    noStretch: true
    type: action_items
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
    icon: 🗒️
    label: CURIOSITY LOG
    key: Curiosity_Log
    noStretch: true
    type: curiosity_log
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
    icon: 🏁
    label: CONCLUSION
    key: Conclusion
    autoHeight: true
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
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
  - color: "#A855F7"
    icon: 📚
    label: SOURCES AND NOTES
    key: Linked_Files
    type: complementary_links
    noStretch: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    noStretch: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
    icon: 💎
    label: WHAT IT PRODUCED
    key: ""
    type: knowledge_yield
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
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
cssclasses:
  - dashboard
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Header_Color: "#A855F7"
Dashboard_Prefix_Color: "#d8b4fe"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

<%* 
let title = await tp.system.prompt("Enter Exploration Topic:"); 
if (title) { 
    let finalName = "🪐 " + title;
    let folder = tp.file.folder(true);
    let i = 1;
    while (app.vault.getAbstractFileByPath(folder + "/" + finalName + ".md")) {
        finalName = "🪐 " + title + " " + i;
        i++;
    }
    await tp.file.rename(finalName); 
} 
%>

```sylvics-view
EntityDashboardHero
```

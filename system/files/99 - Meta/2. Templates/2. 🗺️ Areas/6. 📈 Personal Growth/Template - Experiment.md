---
sylvics-fullscreen: true
sylvics-up: "[[🧪 0. Protocol Lab Masterpage]]"
tags:
  - experiment
Experiment_Status:
  - ⚪ Planned
Start_Date: 
Duration_Days: 30
Cover: 
Protocol: []
Hypothesis: ""
Metric_Log: []
Observation_Log: ""
Final_Conclusion: ""
Dashboard_Prefix: EXPERIMENT
Dashboard_Header_Color: "#A855F7"
Dashboard_Prefix_Color: "#d8b4fe"
Metric_Name: ""
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
    icon: 🔬
    label: HYPOTHESIS
    key: Hypothesis
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
    label: PROTOCOL
    key: Protocol
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
    label: OBSERVATIONS
    key: Observation_Log
    noStretch: true
    type: curiosity_log
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
    icon: 📊
    label: MEASUREMENTS
    key: Metric_Log
    type: Quantitative Metric
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#A855F7"
    icon: 🏁
    label: CONCLUSION
    key: Final_Conclusion
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
  - color: "#A855F7"
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
Centered_Title: true
Immersive_Header: Standard
Minimal_Setup: false
Header_Schema:
  - color: "#A855F7"
    icon: 🚦
    label: Status
    key: Experiment_Status
    type: select
    options:
      - ⚪ Planned
      - 🟡 Active
      - 🟢 Concluded
      - ⚫ Abandoned
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📊
    label: Metric
    key: Metric_Name
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

<%* 
let title = await tp.system.prompt("Enter Experiment Name:"); 
if (title) { 
    let finalName = "🧪 " + title;
    let folder = tp.file.folder(true);
    let i = 1;
    while (app.vault.getAbstractFileByPath(folder + "/" + finalName + ".md")) {
        finalName = "🧪 " + title + " " + i;
        i++;
    }
    await tp.file.rename(finalName); 
} 
%>

```sylvics-view
EntityDashboardHero
```

---
Priority: ""
Energy: ""
TimeEstimate: ""
scheduled-date: ""
due-date: <% tp.date.now("YYYY-MM-DD", 7) %>
completed-date: ""
Related_Projects:
Related_Goals:
Related_Course: "[[00. <% tp.file.title.split(' - ')[0] %> Hub]]"
Weight:
Format:
Grade:
notes: ""
tags:
  - assignment
  - task
Dashboard_Prefix: ASSIGNMENT
Dashboard_Header_Color: "#3b82f6"
Task_Status: 📥 Inbox
Subtasks: []
Related_Links_Urls: []
Header_Schema:
  - color: "#3b82f6"
    icon: 🚦
    label: Status
    key: Task_Status
    type: select
    options:
      - 📥 Inbox
      - 🗃️ Latent
      - 📋 Queued
      - 📅 Scheduled
      - ⚡ Active
      - ⏸️ Paused
      - 🤝 Delegated
      - ⏳ Waiting
      - ✅ Completed
      - 🛑 Archived
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🔺
    label: Priority
    key: Priority
    type: select
    options:
      - 🔴 P1
      - 🟠 P2
      - 🟢 P3
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⏳
    label: Deadline
    key: due-date
    type: timeline
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🗓️
    label: Scheduled
    key: scheduled-date
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⏱️
    label: Estimate
    key: TimeEstimate
    type: select
    options:
      - ⏱️ 15m
      - ⏱️ 30m
      - ⏱️ 45m
      - ⏱️ 1h
      - ⏱️ 2h+
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ✅
    label: Completed
    key: completed-date
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#3b82f6"
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
  - color: "#3b82f6"
    icon: 🎓
    label: COURSE
    key: Related_Course
    type: formula_folder_dropdown
    folder: ""
    options:
      - r
      - e
      - t
      - u
      - r
      - "n"
      - " "
      - d
      - v
      - .
      - p
      - a
      - g
      - e
      - s
      - (
      - "'"
      - "\""
      - "0"
      - "4"
      - " "
      - "-"
      - " "
      - R
      - e
      - s
      - o
      - u
      - r
      - c
      - e
      - s
      - /
      - "5"
      - .
      - " "
      - 📚
      - " "
      - S
      - o
      - u
      - r
      - c
      - e
      - s
      - /
      - "9"
      - .
      - " "
      - 🎓
      - " "
      - C
      - o
      - u
      - r
      - s
      - e
      - s
      - " "
      - "&"
      - " "
      - L
      - e
      - c
      - t
      - u
      - r
      - e
      - s
      - "\""
      - "'"
      - )
      - .
      - w
      - h
      - e
      - r
      - e
      - (
      - p
      - " "
      - "="
      - ">"
      - " "
      - p
      - .
      - f
      - i
      - l
      - e
      - .
      - "n"
      - a
      - m
      - e
      - " "
      - "&"
      - "&"
      - " "
      - p
      - .
      - f
      - i
      - l
      - e
      - .
      - "n"
      - a
      - m
      - e
      - .
      - i
      - "n"
      - c
      - l
      - u
      - d
      - e
      - s
      - (
      - "\""
      - H
      - u
      - b
      - "\""
      - )
      - )
      - ;
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: 📄
    label: FORMAT
    key: Format
    type: select
    folder: ""
    options:
      - 📄 Essay
      - 🗣️ Presentation
      - 🧩 Problem Set
      - 👥 Group Project
      - 💻 Code
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: 🔋
    label: ENERGY
    key: Energy
    type: select
    folder: ""
    options:
      - 🔋 Charging
      - ⚖️ Neutral
      - 🪫 Draining
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: ☑️
    label: STEPS
    key: Subtasks
    type: action_items
    folder: ""
    options: []
    options2: []
    width: 66%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: 💯
    label: GRADING
    key: ""
    type: grading_details
    folder: ""
    options: []
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: ⚖️
    label: Review
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: 💬
    label: FEEDBACK
    key: Feedback
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: 📎
    label: SUBMITTED FILES
    key: Submission_Files
    type: vault_links
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: 📝
    label: Notes
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: 📝
    label: NOTES
    key: notes
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
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
  - color: "#3b82f6"
    icon: 📚
    label: STUDY MATERIALS
    key: Related_Links
    type: resource_grid
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: 🎓
    label: LECTURES
    key: ""
    type: custom_dataview
    folder: "00. Courses Masterpage"
    options:
      - TABLE WITHOUT ID file.link AS "Lecture", Lecture_Status AS "Status", Mastery, Last_Review AS "Reviewed" FROM "04 - Resources/5. 📚 Sources/9. 🎓 Courses & Lectures" WHERE Lecture_Status AND contains(string(this.Related_Course), "00. " + regexreplace(file.folder, "^.*/", "") + " Hub") SORT Last_Review ASC LIMIT 30
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
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
  - color: "#3b82f6"
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
  - color: "#3b82f6"
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
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Prefix_Color: "#3b82f6"
cover: ""
Dashboard_Background: ""
cssclasses:
  - dashboard
  - cards
sylvics-fullscreen: true
sylvics-up: "[[📌 0. Tasks Masterpage]]"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

<%*
let title = tp.file.title;
if (!title.startsWith("📌")) {
    await tp.file.rename("📌 " + title);
}
-%>

```sylvics-view
EntityDashboardHero
```

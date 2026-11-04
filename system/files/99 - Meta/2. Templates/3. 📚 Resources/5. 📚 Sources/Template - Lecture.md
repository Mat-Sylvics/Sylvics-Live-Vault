---
sylvics-fullscreen: true
sylvics-up: "[[00. <% tp.file.folder(true).split('/').pop() %> Hub]]"
Dashboard_Theme: Lecture
Course: "[[00. <% tp.file.folder(true).split('/').pop() %> Hub]]"
Lecture_Status:
  - 🔴 To Capture
Mastery:
  - 🥚 Novice
SRS_Ease: 2.5
SRS_Interval: 0
Last_Review: "<% tp.date.now("YYYY-MM-DD") %>"
Slides_PDF: ""
Quick_Jots: ""
Key_Takeaways: ""
tags:
  - lecture
Strip_Emojis: true
Centered_Title: false
Immersive_Header: Standard
Header_Schema:
  - color: "#4f46e5"
    icon: 🚦
    label: Status
    key: Lecture_Status
    type: select
    options:
      - 🔴 To Capture
      - 🟡 Capturing
      - 🟢 Captured
      - 🔵 Formatting
      - 🟣 Formatted
      - 🟠 Studying
      - 🌟 Mastered
      - ⚪ Dropped
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🧠
    label: Mastery
    key: Mastery
    type: select
    options:
      - 🥚 Novice
      - 🐥 Apprentice
      - 🦅 Adept
      - 🐉 Master
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Last Review
    key: Last_Review
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
Dashboard_Layout:
- color: '#4f46e5'
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
- color: '#4f46e5'
  icon: 🎯
  label: KEY TAKEAWAYS
  key: Key_Takeaways
  type: textarea
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  autoHeight: true
- color: '#4f46e5'
  icon: ⚡
  label: QUICK JOTS
  key: Quick_Jots
  type: textarea
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
  autoHeight: true
- color: '#4f46e5'
  icon: ☑️
  label: HOMEWORK
  key: Action_Items
  type: action_items
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#4f46e5'
  icon: 🧾
  label: Details
  key: ''
  type: tab_marker
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#4f46e5'
  icon: 📄
  label: SLIDES
  key: Slides_PDF
  type: pdf_viewer
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#4f46e5'
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
- color: '#4f46e5'
  icon: 📌
  label: COURSEWORK
  key: ''
  type: custom_dataview
  folder: 📌 0. Tasks Masterpage
  options:
  - TABLE WITHOUT ID link(file.path, regexreplace(file.name, "^[^-]+- ", "")) AS "Assignment or exam", Task_Status AS "Status", dateformat(due-date, "yyyy-MM-dd") AS "Date", Grade FROM "02 - Planning/3. 🚀 Execution/2. 📌 Tasks" WHERE Related_Course AND contains(string(Related_Course), "00. " + regexreplace(this.file.folder, "^.*/", "") + " Hub") AND !contains(string(Task_Status), "Archived") SORT due-date ASC LIMIT 20
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
- color: '#4f46e5'
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
  notInText: true
- color: '#4f46e5'
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
- color: '#4f46e5'
  icon: 📝
  label: LECTURE NOTES
  key: ''
  type: canvas_break
  folder: ''
  options: []
  options2: []
  width: 100%
  hideZero: false
  allowCreate: true
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | {section: 0}
```

> [!syl-hidden]
> *Type your structured lecture notes, definitions, and formulas here...*

```sylvics-view
EntityDashboardHero | {section: 1}
```

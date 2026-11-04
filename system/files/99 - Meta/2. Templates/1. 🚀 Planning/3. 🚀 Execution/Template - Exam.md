---
Priority:
TimeEstimate: 
scheduled-date: 
due-date: <% tp.date.now("YYYY-MM-DD", 14) %>
Related_Projects:
Related_Goals: 
Related_Course: "[[00. <% tp.file.title.split(' - ')[0] %> Hub]]"
Weight: 
Format:
Grade: 
notes: ""
tags:
  - exam
  - task
Dashboard_Prefix: EXAM
Dashboard_Header_Color: "#3b82f6"
Task_Status: 📥 Inbox
Related_Files_Urls: []
Header_Schema:
  - color: "#3b82f6"
    icon: 🚦
    label: Status
    key: Task_Status
    type: select
    options:
      - 📥 Inbox
      - 📚 Studying
      - 🗃️ Reviewing
      - ⚡ Ready
      - ✅ Taken
      - 💯 Graded
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
    label: Exam Date
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
    type: link_list
    folder: 04 - Resources/5. 📚 Sources/9. 🎓 Courses & Lectures
    options: []
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
      - 📝 Multiple Choice
      - 🗣️ Oral
      - 📖 Open Book
      - ✍️ Written
      - 💻 Practical
    options2: []
    width: 33%
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
    icon: ☑️
    label: REVISION PLAN
    key: Action_Items
    type: action_items
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: 🎓
    label: LECTURES TO REVISE
    key: ""
    type: custom_dataview
    folder: "00. Courses Masterpage"
    options:
      - TABLE WITHOUT ID file.link AS "Lecture", Lecture_Status AS "Status", Mastery, Last_Review AS "Reviewed" FROM "04 - Resources/5. 📚 Sources/9. 🎓 Courses & Lectures" WHERE Lecture_Status AND contains(string(this.Related_Course), "00. " + regexreplace(file.folder, "^.*/", "") + " Hub") SORT Last_Review ASC LIMIT 30
    options2: []
    width: 100%
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
    key: Related_Files
    type: resource_grid
    folder: ""
    options: []
    options2: []
    width: 100%
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

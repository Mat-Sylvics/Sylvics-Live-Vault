<%*
let courseName = tp.file.title;
if (courseName.startsWith("Untitled") || courseName.includes("Hub") || courseName.includes("Course")) {
    courseName = await tp.system.prompt("Course Name (e.g. Biology 101):");
    if (!courseName) courseName = "New Course";
}
let folderPath = "04 - Resources/5. 📚 Sources/9. 🎓 Courses & Lectures/" + courseName;
await tp.file.move(folderPath + "/00. " + courseName + " Hub");
_%>
---
sylvics-fullscreen: true
sylvics-up: "[[1. Courses]]"
Course_Status: ⏳ Enrolled
Instructor: 
URL: 
Cover: "Futuristic Neon Classroom.png"
Progress: 0
Semester: "Fall 2026"
Course_Type: 🏛️ Core
End_Date:
Total_Time: 0
Tracking_Start:
Time_Logs:
Credits: 3
Final_Grade:
Target_Grade: 
Current_Grade: 
Show_Grade: true
Location: 
Instructor_Email: 
Office_Hours: 
tags:
  - course
course_progress: "0"
course_mastery: "0"
course_grade: ""
Dashboard_Theme: Course
Practice_Hours: 0
Header_Schema:
  - color: "#4f46e5"
    icon: 🚦
    label: Status
    key: Course_Status
    type: select
    options:
      - ⏳ Enrolled
      - ⚡ In Progress
      - ✅ Completed
      - ⏸️ Paused
      - 🛑 Dropped
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Type
    key: Course_Type
    type: select
    options:
      - 🏛️ Core
      - 🎨 Elective
      - 🔬 Lab
      - 💻 Project
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🗓️
    label: Semester
    key: Semester
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 👤
    label: Instructor
    key: Instructor
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#4f46e5"
    icon: 📈
    label: Progress
    key: Progress
    type: progress
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 💯
    label: Grade
    key: ""
    type: formula
    options: []
    formula: "if (!dv || !p || !p.file) return '--'; let hub = p.file.name; let items = Array.from(dv.pages('\"02 - Planning/3. 🚀 Execution/2. 📌 Tasks\" and (#assignment or #exam)').where(pg => String(pg.Related_Course).includes(hub))); let tw = 0; let ws = 0; for (let it of items) { let w = parseFloat(it.Weight); let g = parseFloat(it.Grade); if (!isNaN(w) && !isNaN(g) && w > 0) { tw += w; ws += w * g; } } let fg = parseFloat(p.Final_Grade); let grade = !isNaN(fg) ? String(fg) : (tw > 0 ? (ws / tw).toFixed(1) : null); if (grade === null) { let f = parseFloat(p.Final_Grade); let c = parseFloat(p.Current_Grade); grade = !isNaN(f) ? String(f) : (!isNaN(c) ? String(c) : null); } if (grade === null) return '--'; let t = parseFloat(p.Target_Grade); if (isNaN(t)) return grade + '%'; let ok = parseFloat(grade) >= t; return { html: '<div style=display:flex;flex-direction:column;align-items:flex-start;line-height:1.15><span>' + grade + '%</span><span style=font-size:0.5em;font-weight:600;opacity:0.75;margin-top:4px>target ' + t + (ok ? ' ✓' : '') + '</span></div>', color: ok ? '#34d399' : '' };"
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#4f46e5"
    icon: ⏳
    label: NEXT DEADLINE
    key: ""
    type: Course Urgent Engine
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#4f46e5"
    icon: 🎓
    label: COURSEWORK
    key: ""
    type: Course Hub Tabs
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#4f46e5"
    icon: ⏱️
    label: STUDY SESSIONS
    key: Time_Logs
    type: skill_logger
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#4f46e5"
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
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Futuristic Neon Classroom.png
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Cover_Alignment: Right
Inherit_Blueprint: ""
Dashboard_Prefix: COURSE
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

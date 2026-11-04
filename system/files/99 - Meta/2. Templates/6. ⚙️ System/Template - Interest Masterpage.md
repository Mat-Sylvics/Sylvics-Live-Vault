---
sylvics-role: meta.templates.system-os.system-components
tags: [masterpage]
cssclasses:
  - dashboard
  - cards
banner: "99 - Meta/4. Attachments/3. Sylvics Art/Banners/System - Desk by the Window Banner.png"
banner-height: 300
---
# 🧩 <% tp.file.title.replace("0. ", "").replace(" Masterpage", "") %> Command

> [!multi-column]
>
>> [!note] 📚 Active Resources
>> Log your learning materials, textbooks, or tutorials here.
>
>> [!warning] 📈 Progression Tracker
>> Track your milestones and hours invested.
>
>> [!success] 🔄 Daily Routine
>> What is your daily habit for this skill?

---

## 🎯 Active Projects for this Skill

```dataview
TABLE Priority, Deadline
FROM "02 - Planning/3. 🚀 Execution/1. 📂 Projects"
WHERE contains(tags, "<% tp.file.title.replace('0. ', '').replace(' Masterpage', '').toLowerCase() %>") AND !contains(Status, "Completed")
SORT Priority DESC, Deadline ASC
```

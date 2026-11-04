---
ContentType: Media
Dashboard_Theme: Video
Dashboard_Title_Color: "#ef4444"
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Retro TV Screen Room.png
Header_Schema:
  - color: "#10b981"
    icon: ✅
    label: Status
    key: Video_Status
    type: select
    options:
      - 📥 Inbox
      - ⏳ Consuming
      - 🗂️ Library
    formula: ""
    folder: ""
    hideZero: false
  - color: "#ef4444"
    icon: ❤️
    label: Favorite
    key: Favorite
    type: favorite
  - color: "#3b82f6"
    icon: 📺
    label: Creator
    key: Creator
    type: text
  - color: "#f59e0b"
    icon: ⏱️
    label: Duration
    key: Duration
    type: duration
  - color: "#8b5cf6"
    icon: 🏷️
    label: Topics
    key: Topics
    type: multi_select
Dashboard_Layout:
  - color: "#ef4444"
    icon: ▶️
    label: Media Player
    key: URL
    type: sylvics_media_player
    width: 100%
    hideZero: false
  - color: "#ef4444"
    icon: ⚡
    label: Quick Jots
    key: Quick_Jots
    type: textarea
    width: 100%
    hideZero: false
  - color: "#ef4444"
    icon: 📖
    label: Literature Notes
    key: vid_lit_notes
    type: link_list
    folder: "05 - Literature"
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#ef4444"
    icon: 📝
    label: Transcript
    key: Transcript
    type: canvas_break
    width: 100%
    hideZero: false
Video_Status:
  - 📥 Inbox
Title: "{{title}}"
Creator: "{{author}}"
URL: "{{url}}"
Tags:
Rating: 
Resource Status: 
Cover: "{{image}}"
Topics: 
Last Reviewed: 
Duration: ""
cssclasses:
  - preserve-scroll
Favorite: false
---

```sylvics-view
EntityDashboardHero | {section: 0}
```

> [!syl-hidden]
> No notes yet. Click EDIT to write freely below.

```sylvics-view
EntityDashboardHero | {section: 1}
```

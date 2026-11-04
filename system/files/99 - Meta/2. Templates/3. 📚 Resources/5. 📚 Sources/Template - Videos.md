---
sylvics-fullscreen: true
ContentType: Media
Dashboard_Theme: Video
sylvics-up: "[[🎬 0. Videos Masterpage]]"
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Retro TV Screen Room.png
Linked_Skill: ""
Header_Schema:
  - color: "#ef4444"
    icon: 🚦
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
  - color: "#e5e7eb"
    icon: ✍️
    label: Creator
    key: Creator
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⏱️
    label: Duration
    key: Duration
    type: duration
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#f59e0b"
    icon: ⭐
    label: Rating
    key: Rating
    type: stars
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Topics
    key: Topics
    type: multi_select
    options:
      - crypto
      - finance
      - economics
      - technology
      - ai
      - politics
      - history
      - philosophy
      - psychology
      - health
      - fitness
      - productivity
      - marketing
      - design
      - communication
      - culture
      - mathematics
      - science
      - statistics
      - systems
      - writing
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
  - color: "#e5e7eb"
    icon: ❤️
    label: Favorite
    key: Favorite
    type: favorite
    options: []
    formula: ""
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#ef4444"
    icon: ▶️
    label: PLAYER
    key: URL
    type: sylvics_media_player
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: false
  - color: "#ef4444"
    icon: 📝
    label: MY TAKE
    key: Quick_Jots
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#ef4444"
    icon: 📖
    label: LITERATURE NOTES
    key: vid_lit_notes
    type: link_list
    folder: 05 - Literature
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
    addLabel: + Link a literature note
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
    notInText: true
  - color: "#ef4444"
    icon: 📝
    label: NOTES AND TIMESTAMPS
    key: Transcript
    type: canvas_break
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Video_Status:
  - 📥 Inbox
Title: ""
Creator:
URL:
Tags:
Rating:
Resource Status:
Cover:
Topics: []
Last Reviewed:
Duration:
cssclasses:
  - sylvics-dashboard
  - preserve-scroll
Favorite: false
Dashboard_Prefix: VIDEO
Immersive_Header: Standard
Minimal_Setup: false
Cover_Alignment: Right
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | {section: 0}
```

> [!syl-hidden]
> No notes yet. Click EDIT to write freely below.

```sylvics-view
EntityDashboardHero | {section: 1}
```

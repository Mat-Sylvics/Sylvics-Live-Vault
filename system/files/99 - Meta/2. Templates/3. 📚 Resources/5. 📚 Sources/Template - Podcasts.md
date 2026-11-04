---
ContentType: Media
Type: Podcast
Podcast_Status:
  - 📥 Inbox
tags: []
Title: ""
Creator:
URL:
Reference_URL:
Release_Year:
Topic: []
Platform:
Rating: 0
Favorite: false
Cover:
Synopsis:
cssclasses:
  - preserve-scroll
  - sylvics-fullscreen
  - sylvics-up
  - sylvics-dashboard
Quick_Jots: ""
Linked_Skill: ""
Dashboard_Theme: Podcast
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Neon Podcast Studio.png
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Cover_Alignment: Right
sylvics-fullscreen: true
sylvics-up: "[[🎙️ 0. Podcasts Masterpage]]"
Header_Schema:
  - color: "#3b82f6"
    icon: 🚦
    label: Status
    key: Podcast_Status
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
    icon: 📅
    label: Released
    key: Release_Year
    type: date
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
    key: Topic
    type: multi_select
    options:
      - society
      - politics
      - history
      - science
      - technology
      - philosophy
      - self-improvement
      - business
      - health
      - culture
      - economics
      - design
      - logistics
      - psychology
      - statistics
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
    icon: 🎧
    label: Listen
    key: URL
    type: url
    options: []
    formula: ""
    folder: ""
    hideZero: false
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
  - color: "#3b82f6"
    icon: 📖
    label: SYNOPSIS
    key: Synopsis
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#3b82f6"
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
  - color: "#3b82f6"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    notInText: true
  - color: "#3b82f6"
    icon: 💡
    label: TAKEAWAYS
    key: Takeaways
    type: canvas_break
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#3b82f6"
    icon: ⏱️
    label: TIMESTAMPS
    key: Timestamps
    type: canvas_break
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
Dashboard_Prefix: PODCAST
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | {section: 0}
```

> [!syl-hidden]
> No takeaways yet. Click EDIT to write freely below.

```sylvics-view
EntityDashboardHero | {section: 1}
```

> [!syl-hidden]
> No timestamps yet. Click EDIT to add them.

```sylvics-view
EntityDashboardHero | {section: 2}
```

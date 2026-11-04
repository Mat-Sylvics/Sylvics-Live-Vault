---
cssclasses:
  - sylvics-dashboard
sylvics-up: "[[🍿 0. Movies & Shows Masterpage]]"
sylvics-fullscreen: true
Dashboard_Theme: Movies
Cover_Alignment: Right
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Cyberpunk Neon Cinema.png
Cover: ""
Title: ""
Dashboard_Subtitle: ""
Movies_Status: ""
Rating: ""
Platform: ""
Synopsis: ""
Date_Watched: ""
Favorite: false
Header_Schema:
  - color: "#a855f7"
    icon: 🚦
    label: Status
    key: Movies_Status
    type: select
    options:
      - 📥 Inbox
      - ⏳ Consuming
      - 🗂️ Library
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🎬
    label: Director
    key: Director
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🎭
    label: Genre
    key: Genre
    type: select
    options:
      - Drama
      - Comedy
      - Documentary
      - Thriller
      - Sci-Fi
      - Action
      - Romance
      - Animation
      - Silent
      - Horror
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
    icon: 📅
    label: Released
    key: Release_Year
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📺
    label: Seen On
    key: Platform
    type: select
    options:
      - Cinema
      - Streaming
      - Borrowed
      - Owned
      - Festival
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏁
    label: Watched
    key: Date_Watched
    type: date
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
  - color: "#a855f7"
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
  - color: "#a855f7"
    icon: 🎞️
    label: BEST MOMENTS
    key: Timestamps
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#a855f7"
    icon: 📝
    label: MY TAKE
    key: Review_Notes
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#a855f7"
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
Release_Year: ""
Genre: ""
Director: ""
Review_Notes: ""
Timestamps: ""
Dashboard_Prefix: MOVIE
Immersive_Header: Standard
Minimal_Setup: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

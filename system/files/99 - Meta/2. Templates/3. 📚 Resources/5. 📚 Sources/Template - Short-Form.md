---
cssclasses:
  - sylvics-dashboard
sylvics-up: "[[📱 0. Short Form Masterpage]]"
sylvics-fullscreen: true
Dashboard_Theme: ShortForm
Cover_Alignment: Right
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Cyberpunk Neon Smartphones.png
Cover: ""
Title: ""
Dashboard_Subtitle: ""
ShortForm_Status: ""
tags:
  - short-form
Favorite: false
Video_Links: []
Header_Schema:
  - color: "#ec4899"
    icon: 🚦
    label: Status
    key: ShortForm_Status
    type: select
    options:
      - 📥 Inbox
      - ⏳ Consuming
      - 🗂️ Library
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🎞️
    label: Clips
    key: Clips_Count
    type: formula
    options: []
    folder: ""
    hideZero: false
    formula: "const raw = p.Video_Links; const v = (Array.isArray(raw) ? raw : raw && Array.isArray(raw.values) ? raw.values : []).filter(x => x && typeof x === 'object'); return v.length === 1 ? '1 clip' : v.length + ' clips';"
  - color: "#e5e7eb"
    icon: 🗓️
    label: Last Saved
    key: Clips_Last_Saved
    type: formula
    options: []
    folder: ""
    hideZero: false
    formula: "const raw = p.Video_Links; const v = (Array.isArray(raw) ? raw : raw && Array.isArray(raw.values) ? raw.values : []).filter(x => x && typeof x === 'object'); const d = v.map(x => String(x.saved || '').slice(0, 10)).filter(s => /^\\d{4}-\\d\\d-\\d\\d$/.test(s)).sort().pop(); return d ? window.moment(d).format('D MMM YYYY') : '--';"
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
  - color: "#ec4899"
    icon: 🎞️
    label: CLIPS
    key: Video_Links
    type: video_links
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#ec4899"
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
Dashboard_Prefix: SHORT FORM
Immersive_Header: Standard
Minimal_Setup: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

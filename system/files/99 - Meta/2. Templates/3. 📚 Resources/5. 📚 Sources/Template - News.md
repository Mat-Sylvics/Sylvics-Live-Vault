---
cssclasses:
  - sylvics-dashboard
sylvics-fullscreen: true
sylvics-up: "[[🗞️ 0. News Masterpage]]"
Dashboard_Theme: News
Cover_Alignment: Right
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Cyberpunk Neon Newsstand.png
Cover: ""
Title: ""
Favorite: false
Source: ""
Date_Published: ""
tags: []
Impact_Level: Low
News_Status: 📥 Inbox
URL: ""
Extracted_Notes: []
Header_Schema:
  - color: "#f97316"
    icon: 🚦
    label: Status
    key: News_Status
    type: select
    options:
      - 📥 Inbox
      - ⏳ Consuming
      - 🗂️ Library
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📰
    label: Source
    key: Source
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⚡
    label: Impact
    key: Impact_Level
    type: select
    options:
      - High
      - Medium
      - Low
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Topics
    key: tags
    type: multi_select
    options:
      - Politics
      - Economics
      - Finance
      - Technology
      - Health
      - Science
      - Sports
      - Entertainment
      - World
      - Local
      - Business
      - Education
      - Logistics
      - Transport
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Published
    key: Date_Published
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🌐
    label: Read Online
    key: URL
    type: url
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🧩
    label: Connected
    key: Extracted
    type: formula
    options: []
    formula: |
      let v = p.Extracted_Notes;
      let n = Array.isArray(v) ? v.length : (v ? 1 : 0);
      if (n === 0) return "None yet";
      return n === 1 ? "1 note" : n + " notes";
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
  - color: "#f97316"
    icon: 🎯
    label: TL;DR
    key: TLDR
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#f97316"
    icon: 🤔
    label: WHY IT MATTERS
    key: So_What
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#f97316"
    icon: ⚡
    label: QUICK JOTS
    key: Quick_Jots
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#f97316"
    icon: 🧩
    label: CONNECTED NOTES
    key: Extracted_Notes
    type: link_list
    folder: 04 - Resources/4. 🧠 Micro-Knowledge
    options: []
    options2: []
    width: 100%
    hideZero: true
    allowCreate: false
    addLabel: + Connect a note
  - color: "#f97316"
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
Quick_Jots: ""
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Prefix: NEWS
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

---
Cover: ""
Hook: ""
Draft: ""
Notes: ""
Type: content
Content_Type: 📝 Post
Platform: 🐦 Twitter/X
Linked_Client: []
Content_Pillar: ""
Target_Audience: ""
Repurposed_From: ""
Related_Projects: ""
Related_Goals: ""
Status: 💡 Idea
Publish_Date: ""
Views: 0
Likes: 0
Comments: 0
URL: ""
Action_Items:
  - text: Determine target audience and hook
    completed: false
  - text: Write draft copy
    completed: false
  - text: Find or create visual assets
    completed: false
  - text: Schedule for publication
    completed: false
  - text: Engage with replies for 30m after posting
    completed: false
tags:
  - content
  - creator
Header_Schema:
  - color: '#0aaef5'
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - 💡 Idea
      - ✍️ Drafting
      - 🔍 Editing
      - 📅 Scheduled
      - ✅ Published
    formula: ''
  - color: '#e5e7eb'
    icon: 📍
    label: Where
    key: Platform
    type: select
    options:
      - 📰 Newsletter
      - 🖋️ Guest essay
      - 🎤 Talk
      - 📝 Blog
      - 💼 LinkedIn
      - 🐦 Twitter/X
      - 🧵 Threads
      - 🎥 YouTube
      - 📷 Instagram
      - 🎵 TikTok
      - 📘 Facebook
    formula: ''
  - color: '#e5e7eb'
    icon: 🏛️
    label: Pillar
    key: Content_Pillar
    type: select
    options:
      - 🎓 Education
      - 🚀 Personal Brand
      - 💡 Industry Insight
      - 🎭 Entertainment
      - 📢 Promotion
      - 🗣️ Opinion
    formula: ''
  - color: '#e5e7eb'
    icon: 📅
    label: Date
    key: ''
    type: formula
    options: []
    formula: 'const s = String(p.Publish_Date && p.Publish_Date.toISODate ? p.Publish_Date.toISODate() : (p.Publish_Date || '''')).slice(0, 10); const m = window.moment; return /^\d{4}-\d{2}-\d{2}$/.test(s) && m ? m(s, ''YYYY-MM-DD'').format(''D MMMM YYYY'') : ''--'';'
    subFormula: 'const s = String(p.Publish_Date && p.Publish_Date.toISODate ? p.Publish_Date.toISODate() : (p.Publish_Date || '''')).slice(0, 10); const m = window.moment; if (!/^\d{4}-\d{2}-\d{2}$/.test(s) || !m) return ''''; const st = String(p.Status || ''''); const pl = String(p.Platform || ''''); const w = /publish/i.test(st) ? (/newsletter/i.test(pl) ? ''Sent'' : /talk/i.test(pl) ? ''Given'' : ''Published'') : /schedul/i.test(st) ? ''Scheduled'' : ''Planned''; return w + '' · '' + m(s, ''YYYY-MM-DD'').format(''dddd'');'
  - color: '#e5e7eb'
    icon: 🤝
    label: For
    key: ''
    type: formula
    options: []
    formula: 'const L = [].concat(p.Linked_Client || []).map((x) => String(x && x.path ? x.path : x || '''').replace(/^!?\[\[|\]\]$/g, '''').split(''|'')[0]).filter(Boolean); const F = L.map((n) => app.metadataCache.getFirstLinkpathDest(n, '''')).filter(Boolean); if (!F.length) return ''--''; return { html: F.map((f) => f.basename.replace(/^[^\p{L}\p{N}]+/u, '''').split('' - '')[0]).join('', ''), link: F[0].path };'
    hideEmpty: true
Dashboard_Layout:
  - color: '#0aaef5'
    icon: 🪝
    label: HOOK
    key: Hook
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#0aaef5'
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#0aaef5'
    icon: ☑️
    label: STEPS
    key: Action_Items
    type: action_items
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    foldDone: true
    itemName: STEP
    itemNames: steps
    flush: true
  - color: '#0aaef5'
    icon: 📊
    label: HOW IT LANDED
    key: ''
    type: content_metrics
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: '#0aaef5'
    icon: ✍️
    label: DRAFT
    key: Draft
    type: content_draft
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: '#0aaef5'
    icon: 🎯
    label: GOAL
    key: Related_Goals
    type: link_list
    folder: 02 - Planning/2. ♟️ Strategy/1. 🎯 Goals
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: '#0aaef5'
    icon: 📂
    label: PROJECT
    key: Related_Projects
    type: link_list
    folder: 02 - Planning/3. 🚀 Execution/1. 📂 Projects
    options: []
    options2: []
    width: 50%
    hideZero: true
    allowCreate: true
  - color: '#0aaef5'
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
    slimEmpty: true
cssclasses:
  - cards
  - dashboard
  - sylvics-dashboard
  - transparent-bg
sylvics-up: "[[2. Content Engine]]"
Dashboard_Header_Color: "#0aaef5"
Dashboard_Prefix_Color: "#7dd3fc"
sylvics-fullscreen: true
Dashboard_Prefix: CONTENT
Centered_Title: true
Immersive_Header: Standard
Minimal_Setup: false
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

<div class="syl-aurora"></div>

```sylvics-view
EntityDashboardHero
```

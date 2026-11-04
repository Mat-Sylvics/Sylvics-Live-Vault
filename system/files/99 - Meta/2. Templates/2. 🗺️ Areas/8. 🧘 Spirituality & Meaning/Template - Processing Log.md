---
sylvics-fullscreen: true
sylvics-up: "[[2. Cognitive Processing]]"
tags:
  - processing
Type: Therapy
Date: <% tp.file.creation_date("YYYY-MM-DD") %>
Breakthrough: false
Mood_Before: 5
Mood_After: 5
Trigger: ""
Thoughts: ""
Reframe: ""
Action_Items: []
syl-icon: 🧠
cssclasses:
  - entity-theme
  - dashboard
  - sylvics-dashboard
  - transparent-bg
Title_Tag_Key: Breakthrough
Title_Tag_Label: Breakthrough
Check_On: ""
Header_Schema:
  - color: "#F5C842"
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Open
      - Settled
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Type
    key: Type
    type: select
    options:
      - Therapy
      - CBT
      - Shadow Work
      - Journaling
      - Psychedelic Integration
      - Parts Work (IFS)
      - EMDR
      - Somatic Experiencing
      - Meditation Insight
      - Self-Reflection
      - Coaching
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Date
    key: Date
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🔔
    label: Check on
    key: Check_On
    hideEmptyWhen:
      key: Status
      match: Settled
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
    emptyText: No check date
    subFormula: "const tf = p.file && p.file.path ? app.vault.getAbstractFileByPath(p.file.path) : null; const fm = tf ? ((app.metadataCache.getFileCache(tf) || {}).frontmatter || {}) : {}; const d = fm.Check_On; if (!d) return \"\"; const m = window.moment(String(d)); if (!m.isValid()) return \"\"; if (!/open/i.test(String(fm.Status || \"\"))) return \"log settled\"; const n = m.clone().startOf(\"day\").diff(clock.moment().startOf(\"day\"), \"days\"); return n < 0 ? `<span style=\"color:#fbbf24\">${-n} days past, still open</span>` : n === 0 ? `<span style=\"color:#fbbf24\">today</span>` : `in ${n} days`;"
Dashboard_Layout:
  - color: "#F5C842"
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
  - color: "#F5C842"
    icon: ⚡
    label: WHAT HAPPENED
    key: Trigger
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 66%
    hideZero: false
    allowCreate: true
    autoHeight: true
    noStretch: true
  - color: "#F5C842"
    icon: ⚖️
    label: MOOD SHIFT
    key: ""
    type: processing_moodshift
    folder: ""
    options: []
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
    noStretch: true
  - color: "#F5C842"
    icon: 💭
    label: AUTOMATIC THOUGHTS
    key: Thoughts
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    autoHeight: true
    noStretch: true
  - color: "#F5C842"
    icon: 🔄
    label: REFRAME
    key: Reframe
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    autoHeight: true
    noStretch: true
  - color: "#F5C842"
    icon: ☑️
    label: NEXT STEPS
    key: Action_Items
    type: action_items
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    accentPanel: true
    hideProgress: true
    countWord: done
  - color: "#F5C842"
    icon: 📈
    label: AROUND THIS DAY
    key: Date
    type: around_this_day
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#F5C842"
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
  - color: "#F5C842"
    icon: 🧷
    label: MENTIONED HERE
    key: ""
    type: mentioned_here
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    hideEmpty: true
  - color: "#F5C842"
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
    byName: true
  - color: "#F5C842"
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
  - color: "#F5C842"
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
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Header_Color: "#F5C842"
Dashboard_Prefix_Color: "#fde68a"
Strip_Emojis: true
Status: Open
Dashboard_Prefix: PROCESSING LOG
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero | dv.current(
```

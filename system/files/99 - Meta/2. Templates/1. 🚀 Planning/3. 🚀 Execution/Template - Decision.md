---
Urgency: '""'
Importance: '""'
ProsCons: '""'
tags:
  - decision
Decision_Status: 📥 Inbox
date: 
Inspiration: '""'
dilemma: '""'
outcome: '""'
Consequences: '""'
Lessons_Learned: '""'
Decision_Quality: '""'
Analysis_Stage: ⚪ Unanalyzed
Dashboard_Prefix: DECISION
Related_Notes: []
Header_Schema:
  - color: "#fde047"
    icon: 🚦
    label: Status
    key: Decision_Status
    type: select
    options:
      - 📥 Inbox
      - 🤔 Pending
      - ✅ Decided
      - 🛑 Archived
    formula: ""
    subFormula: "const m = window.moment; const s = String(p.date && p.date.toISODate ? p.date.toISODate() : (p.date || '')).slice(0, 10); const ok = /^\\d{4}-\\d{2}-\\d{2}$/.test(s) && m; const st = String(p.Decision_Status || ''); const d = ok ? m(s, 'YYYY-MM-DD').format('D MMM YYYY') : ''; if (/decided/i.test(st)) return d ? 'Decided ' + d : 'Decided · no date'; return d ? 'Since ' + d : 'No date yet';"
    subEdit: date
    folder: ""
    hideZero: false
  - color: "#eab308"
    icon: 🎯
    label: Verdict
    key: ""
    type: formula
    options: []
    formula: "const q = String(p.Decision_Quality || ''); if (!q) return { html: '<span style=\"color:rgba(255,255,255,0.45)\">Not reviewed yet</span>' }; const t = q.replace(/^\\S+\\s/, '').replace(/^(Yes|Mixed|No)\\s*-\\s*/, ''); const c = /yes/i.test(q) ? '#4ade80' : (/mixed/i.test(q) ? '#facc15' : '#f87171'); const w = /yes/i.test(q) ? 'Good decision' : (/mixed/i.test(q) ? 'Mixed' : 'Poor decision'); return { html: '<span style=\"color:' + c + '\">' + w + '</span><span style=\"color:rgba(255,255,255,0.5);font-weight:600\">&nbsp;·&nbsp;' + t + '</span>' };"
    subFormula: "const a = String(p.Analysis_Stage || '').replace(/^\\S+\\s/, ''); return a && !/unanaly/i.test(a) ? 'Reviewed: ' + a : 'How the decision looks in hindsight';"
    subTitle: The review
    subFields:
      - key: Decision_Quality
        label: Was it a good decision, whatever the outcome?
        type: select
        options:
          - "🟢 Yes - Excellent"
          - "🟡 Mixed - Okay"
          - "🔴 No - Bad"
      - key: Analysis_Stage
        label: How deeply have you reviewed it?
        type: select
        options:
          - "⚪ Unanalyzed"
          - "🔎 Surface Level"
          - "🔬 Deep Dive"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 💎
    label: Importance
    key: Importance
    type: select
    options:
      - 🔴 High
      - 🟢 Low
    formula: ""
    subFormula: "const u = String(p.Urgency || '').replace(/^\\S+\\s/, ''); return u ? 'Urgency: ' + u : 'Urgency';"
    subTitle: Urgency
    subFields:
      - key: Urgency
        label: How soon does it need deciding?
        type: select
        options:
          - "🔴 High"
          - "🟢 Low"
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#eab308"
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
  - color: "#eab308"
    icon: ❓
    label: QUESTION
    key: dilemma
    type: textarea
    autoHeight: true
    placeholder: "The choice in front of you, and why it is a choice: what you want, what is in the way."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: ✅
    label: DECISION
    key: outcome
    type: textarea
    autoHeight: true
    placeholder: "What you decided, when, and what you did about it."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: ⚖️
    label: PROS AND CONS
    key: ProsCons
    type: textarea
    autoHeight: true
    placeholder: "Each option with what speaks for it (➕) and against it (➖)."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: 🧭
    label: RESEARCH AND ADVICE
    key: Inspiration
    type: textarea
    autoHeight: true
    placeholder: "Who you asked, what you read, the question that settled it."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: 🔍
    label: Review
    key: ""
    type: tab_marker
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: 🌊
    label: CONSEQUENCES
    key: Consequences
    type: textarea
    autoHeight: true
    placeholder: "What happened after, with dates: the results, good and bad."
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: 🎓
    label: LESSONS LEARNED
    key: Lessons_Learned
    type: textarea
    autoHeight: true
    placeholder: "Looking back: was it a good decision, whatever the outcome, and what would you do again?"
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
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
  - color: "#eab308"
    icon: 👥
    label: PEOPLE & CLIENTS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=04 - Resources/3. 🌐 Entities/1. 👥 People"
      - "in=03 - Areas/8. 🧘 Spirituality & Meaning/3. 🤲 Service & Altruism/3. Mentorship Hub"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Person:file"
      - "column=Kind:folder"
      - "sort=name"
      - "limit=20"
      - "empty=No one is linked yet: who it concerned, who you asked."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: 📂
    label: PROJECTS & TASKS
    key: ""
    type: link_table
    slimEmpty: true
    folder: ""
    options:
      - "in=02 - Planning/3. 🚀 Execution/1. 📂 Projects"
      - "in=02 - Planning/3. 🚀 Execution/2. 📌 Tasks"
      - "in=08 - Archive/2. Planning/3. 🚀 Execution"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Note:file"
      - "column=Kind:folder"
      - "sort=name"
      - "limit=20"
      - "empty=No project or task is linked yet: what the decision started."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: 📚
    label: NOTES
    key: ""
    type: link_table
    slimEmpty: true
    linkKey: Related_Notes
    linkFolder: 06 - Permanent
    folder: ""
    options:
      - "in=04 - Resources"
      - "in=05 - Literature"
      - "in=06 - Permanent"
      - "skip=3. 🌐 Entities"
      - "skip=Masterpage"
      - "direction=both"
      - "column=Note:file"
      - "column=Kind:folder"
      - "sort=name"
      - "limit=20"
      - "empty=No note is linked yet: what you read, what you wrote after."
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    slimEmpty: true
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    slimEmpty: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#eab308"
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
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Inherit_Blueprint: ""
Dashboard_Prefix_Color: "#fef9c3"
Dashboard_Header_Color: "#fde047"
sylvics-up: "[[📜 0. Decision Log Masterpage]]"
sylvics-fullscreen: true
syl-icon: "📜"
cssclasses:
  - dashboard
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

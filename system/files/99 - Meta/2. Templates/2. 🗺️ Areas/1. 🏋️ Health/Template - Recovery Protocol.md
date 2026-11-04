---
sylvics-up: "[[🦾 0. Recovery Protocols Masterpage]]"
syl-icon: 🦾
cssclasses:
  - dashboard
  - sylvics-fullscreen
  - recovery-protocol
Type: Protocol
Phase_Guidelines: ""
Daily_Routine: []
Weekly_Routine: []
Status: Active
Quote: ""
Practice_Hours: 0
Dashboard_Layout:
  - color: '#ef4444'
    icon: 🧭
    label: PHASE GUIDELINES
    key: Phase_Guidelines
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
  - color: '#ef4444'
    icon: 🌅
    label: DAILY ROUTINE
    key: Daily_Routine
    type: action_items
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    keepText: true
  - color: '#ef4444'
    icon: 🏋️
    label: WEEKLY ROUTINE
    key: Weekly_Routine
    type: action_items
    folder: ''
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    keepText: true
  - color: '#ef4444'
    icon: 🗒️
    label: SESSIONS
    key: Log
    type: practice_log
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    order: asc
    addLabel: + LOG SESSION
    inline: true
  - color: '#ef4444'
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
  - color: '#ef4444'
    icon: 🔁
    label: KEPT
    key: Kept
    type: textarea
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    autoHeight: true
    plainFrame: true
    placeholder: What you still do now that it is over, one line each.
  - color: '#ef4444'
    icon: 📓
    label: IN THE JOURNAL
    key: ''
    type: journal_mentions
    folder: ''
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    byName: true
    hideEmpty: true
  - color: '#ef4444'
    icon: 🔗
    label: LINKED FROM
    key: ''
    type: linked_from
    folder: ''
    options:
      - notvia=Rehab
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
    slimEmpty: true
Dashboard_Prefix: RECOVERY PROTOCOL
Dashboard_Header_Color: "#ef4444"
Dashboard_Prefix_Color: "#fca5a5"
Log: []
Notes: ""
Strip_Emojis: true
Centered_Title: true
Immersive_Header: Standard
Minimal_Setup: false
Header_Schema:
  - color: '#ef4444'
    icon: 🚦
    label: Status
    key: Status
    type: select
    options:
      - Active
      - Maintenance
      - Completed
    formula: ''
    folder: ''
    hideZero: false
    colors:
      Active: '#fbbf24'
      Maintenance: '#60a5fa'
      Completed: '#34d399'
  - color: '#e5e7eb'
    icon: 🩹
    label: For
    key: ''
    type: formula
    options: []
    formula: 'const me = p.file && p.file.name; if (!me) return ''--''; const hits = app.vault.getMarkdownFiles().filter(f => { const fm = (app.metadataCache.getFileCache(f) || {}).frontmatter; if (!fm || !fm.Rehab) return false; const r = String(fm.Rehab); return r.includes(''[['' + me + '']]'') || r.includes(''[['' + me + ''|''); }).sort((a, b) => a.basename.localeCompare(b.basename)); if (!hits.length) return ''--''; const nm = f => { const fm = (app.metadataCache.getFileCache(f) || {}).frontmatter || {}; return String(fm.Name || f.basename.replace(/^[^\p{L}\p{N}]+/u, '''').replace(/^\d{4}-\d{2}-\d{2}\s*-\s*/, '''')); }; return { html: hits.map(nm).join('' · ''), link: hits[0].path };'
    folder: ''
    hideZero: false
    hideEmpty: true
  - color: '#e5e7eb'
    icon: 🗒️
    label: Sessions
    key: ''
    type: formula
    options: []
    formula: 'const L = Array.isArray(p.Log) ? p.Log : []; if (!L.length) return ''--''; return L.length + (L.length === 1 ? '' session'' : '' sessions'');'
    folder: ''
    hideZero: false
    subFormula: 'const L = Array.isArray(p.Log) ? p.Log : []; const h = L.reduce((s, l) => s + (parseFloat(l && l.hours) || 0), 0); if (!h) return ''''; const hh = Math.floor(h), mm = Math.round((h - hh) * 60); return (hh ? hh + '' h'' : '''') + (hh && mm ? '' '' : '''') + (mm ? mm + '' min'' : '''') + '' in all'';'
  - color: '#e5e7eb'
    icon: ⏳
    label: Ran
    key: ''
    type: formula
    options: []
    formula: 'const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '''')).slice(0, 10); return /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : ''''; }; const m = window.moment; const L = (Array.isArray(p.Log) ? p.Log : []).map(l => d(l && l.date)).filter(Boolean).sort(); if (!m || !L.length) return ''--''; const done = /completed/i.test(String(p.Status || '''')); const e = done ? L[L.length - 1] : (window.SylvicsToday ? window.SylvicsToday() : m().format(''YYYY-MM-DD'')); const n = Math.max(0, m(e, ''YYYY-MM-DD'').diff(m(L[0], ''YYYY-MM-DD''), ''days'')); if (n < 14) return n === 1 ? ''1 day'' : n + '' days''; if (n < 63) return Math.round(n / 7) + '' weeks''; const mo = Math.round(n / 30.44); return mo === 1 ? ''1 month'' : mo + '' months'';'
    folder: ''
    hideZero: false
    subFormula: 'const d = v => { const s = String(v && v.toISODate ? v.toISODate() : (v || '''')).slice(0, 10); return /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : ''''; }; const m = window.moment; const L = (Array.isArray(p.Log) ? p.Log : []).map(l => d(l && l.date)).filter(Boolean).sort(); if (!m || !L.length) return ''''; const a = m(L[0], ''YYYY-MM-DD''), b = m(L[L.length - 1], ''YYYY-MM-DD''); const done = /completed/i.test(String(p.Status || '''')); if (!done) return ''since '' + a.format(''D MMM YYYY'') + '' · last '' + b.format(''D MMM YYYY''); if (L.length === 1) return a.format(''D MMM YYYY''); if (a.year() !== b.year()) return a.format(''D MMM YYYY'') + '' – '' + b.format(''D MMM YYYY''); if (a.month() === b.month()) return a.format(''D'') + ''–'' + b.format(''D MMM YYYY''); return a.format(''D MMM'') + '' – '' + b.format(''D MMM YYYY'');'
    whenLabel:
      key: Status
      match: Active|Maintenance
      label: In use for
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Subtitle_Key: Quote
Kept: ""
---

```sylvics-view
EntityDashboardHero
```
---
syl-icon: 🏋️‍♂️
sylvics-fullscreen: true
sylvics-up: "[[1. Training]]"
ContentType: Routine
tags:
  - routine
Target_Muscle: []
Routine_Difficulty: ""
Favorite: false
Rating: 0
Exercises: []
Logs: []
cover: 
Dashboard_Header_Color: "#00C896"
Dashboard_Prefix_Color: "#6ee7b7"
Session_Plan: ""
Header_Schema:
  - color: "#e5e7eb"
    icon: 🗓️
    label: Sessions
    key: ""
    type: formula
    options: []
    formula: "const me = app.metadataCache.getFirstLinkpathDest(String(p.file && p.file.name || ''), ''); if (!me) return '—'; const today = clock ? clock.moment().format('YYYY-MM-DD') : '9999-12-31'; const L = app.metadataCache.resolvedLinks || {}; const days = []; for (const f of app.vault.getMarkdownFiles()) { if (!f.path.startsWith('07 - Journal/01 Daily/')) continue; const dm = String(f.basename).match(/^(\\d{4}-\\d{2}-\\d{2})/); if (!dm || dm[1] > today) continue; const y = app.metadataCache.getFileCache(f)?.frontmatter; const js = y ? JSON.stringify(y) : ''; if ((L[f.path] && L[f.path][me.path]) || ['|', ']', '#'].some((c) => js.includes('[[' + me.basename + c))) days.push({ d: dm[1], f }); } days.sort((a, b) => a.d.localeCompare(b.d)); const bare = (s) => String(s || '').replace(/^!?\\[\\[|\\]\\]$/g, '').split('|')[0].split('#')[0].split('/').pop().replace(/\\.md$/, '').replace(/^[^\\p{L}\\p{N}]+/u, '').trim().toLowerCase(); const mine = new Set([].concat(p.Exercises || []).map((x) => bare(x && x.path ? x.path : x))); const logd = new Set([].concat(p.Logs || []).map((n) => String(n && n.date && n.date.toISODate ? n.date.toISODate() : (n && n.date) || '').slice(0, 10)).filter(Boolean)); const ev = days.filter((x) => logd.has(x.d) || [].concat((app.metadataCache.getFileCache(x.f)?.frontmatter || {}).workout_log || []).some((e) => e && mine.has(bare(e.exercise && e.exercise.path ? e.exercise.path : e.exercise)))); for (const d of logd) if (d <= today && !ev.some((x) => x.d === d)) ev.push({ d }); ev.sort((a, b) => a.d.localeCompare(b.d)); return { html: '<span style=\"display:inline-flex;align-items:baseline;gap:7px\">' + ev.length + '<span style=\"font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600\">' + (ev.length === 1 ? 'day' : 'days') + '</span></span>' };"
    subFormula: "const me = app.metadataCache.getFirstLinkpathDest(String(p.file && p.file.name || ''), ''); if (!me) return ''; const today = clock ? clock.moment().format('YYYY-MM-DD') : '9999-12-31'; const L = app.metadataCache.resolvedLinks || {}; const days = []; for (const f of app.vault.getMarkdownFiles()) { if (!f.path.startsWith('07 - Journal/01 Daily/')) continue; const dm = String(f.basename).match(/^(\\d{4}-\\d{2}-\\d{2})/); if (!dm || dm[1] > today) continue; const y = app.metadataCache.getFileCache(f)?.frontmatter; const js = y ? JSON.stringify(y) : ''; if ((L[f.path] && L[f.path][me.path]) || ['|', ']', '#'].some((c) => js.includes('[[' + me.basename + c))) days.push({ d: dm[1], f }); } days.sort((a, b) => a.d.localeCompare(b.d)); const bare = (s) => String(s || '').replace(/^!?\\[\\[|\\]\\]$/g, '').split('|')[0].split('#')[0].split('/').pop().replace(/\\.md$/, '').replace(/^[^\\p{L}\\p{N}]+/u, '').trim().toLowerCase(); const mine = new Set([].concat(p.Exercises || []).map((x) => bare(x && x.path ? x.path : x))); const logd = new Set([].concat(p.Logs || []).map((n) => String(n && n.date && n.date.toISODate ? n.date.toISODate() : (n && n.date) || '').slice(0, 10)).filter(Boolean)); const ev = days.filter((x) => logd.has(x.d) || [].concat((app.metadataCache.getFileCache(x.f)?.frontmatter || {}).workout_log || []).some((e) => e && mine.has(bare(e.exercise && e.exercise.path ? e.exercise.path : e.exercise)))); for (const d of logd) if (d <= today && !ev.some((x) => x.d === d)) ev.push({ d }); ev.sort((a, b) => a.d.localeCompare(b.d)); if (!ev.length) return days.length ? 'Mentioned, not yet logged' : 'Link it from a daily note'; const last = ev[ev.length - 1].d; const ago = clock ? clock.moment().startOf('day').diff(window.moment(last, 'YYYY-MM-DD'), 'days') : null; return 'Last on ' + window.moment(last, 'YYYY-MM-DD').format('D MMM YYYY') + (ago !== null ? ' · ' + (ago === 0 ? 'today' : ago === 1 ? 'yesterday' : ago + ' days ago') : '');"
    folder: ""
    hideZero: false
  - color: "#00C896"
    icon: 🎚️
    label: Difficulty
    key: Routine_Difficulty
    type: select
    subFormula: "const g = [].concat(p.Target_Muscle || []).filter(Boolean); return g.length ? g.join(' · ') : '';"
    subTitle: Muscles
    subFields:
      - key: Target_Muscle
        label: Muscles it works
        type: multi_select
        options:
          - Chest
          - Back
          - Shoulders
          - Biceps
          - Triceps
          - Forearms
          - Core
          - Quads
          - Hamstrings
          - Glutes
          - Calves
    options:
      - Beginner
      - Intermediate
      - Advanced
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏋️
    label: Exercises
    key: ""
    type: formula
    options: []
    formula: "const bare = (s) => String(s || '').replace(/^!?\\[\\[|\\]\\]$/g, '').split('|')[0].split('#')[0].split('/').pop().replace(/\\.md$/, '').replace(/^[^\\p{L}\\p{N}]+/u, '').trim().toLowerCase(); const ex = [].concat(p.Exercises || []).filter(Boolean); return { html: '<span style=\"display:inline-flex;align-items:baseline;gap:7px\">' + ex.length + '<span style=\"font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600\">' + (ex.length === 1 ? 'exercise' : 'exercises') + '</span></span>' };"
    subFormula: "const me = app.metadataCache.getFirstLinkpathDest(String(p.file && p.file.name || ''), ''); if (!me) return ''; const today = clock ? clock.moment().format('YYYY-MM-DD') : '9999-12-31'; const L = app.metadataCache.resolvedLinks || {}; const days = []; for (const f of app.vault.getMarkdownFiles()) { if (!f.path.startsWith('07 - Journal/01 Daily/')) continue; const dm = String(f.basename).match(/^(\\d{4}-\\d{2}-\\d{2})/); if (!dm || dm[1] > today) continue; const y = app.metadataCache.getFileCache(f)?.frontmatter; const js = y ? JSON.stringify(y) : ''; if ((L[f.path] && L[f.path][me.path]) || ['|', ']', '#'].some((c) => js.includes('[[' + me.basename + c))) days.push({ d: dm[1], f }); } days.sort((a, b) => a.d.localeCompare(b.d)); const bare = (s) => String(s || '').replace(/^!?\\[\\[|\\]\\]$/g, '').split('|')[0].split('#')[0].split('/').pop().replace(/\\.md$/, '').replace(/^[^\\p{L}\\p{N}]+/u, '').trim().toLowerCase(); const mine = new Set([].concat(p.Exercises || []).map((x) => bare(x && x.path ? x.path : x))); let n = 0; for (const x of days) { const y = app.metadataCache.getFileCache(x.f)?.frontmatter; for (const e of [].concat(y && y.workout_log || [])) if (e && mine.has(bare(e.exercise && e.exercise.path ? e.exercise.path : e.exercise))) n++; } return n ? n + (n === 1 ? ' set' : ' sets') + ' logged on its days' : (days.length ? 'No sets logged on its days' : '');"
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⭐
    label: Rating
    key: ""
    type: formula
    options: []
    formula: "const r = Math.max(0, Math.min(5, Math.round(parseFloat(p.Rating) || 0))); if (!r) return 'Not rated'; return { html: '<span style=\"color:#fbbf24;letter-spacing:2px\">' + '★'.repeat(r) + '</span><span style=\"color:rgba(255,255,255,0.18);letter-spacing:2px\">' + '★'.repeat(5 - r) + '</span>' };"
    subFormula: "return (p.Favorite === true || p.Favorite === 'true') ? '<span style=\"color:#f43f5e\">♥</span> A favourite' : '♡ Mark as favourite';"
    subTitle: Rating
    subFields:
      - key: Rating
        label: Rating, 1 to 5
        type: number
      - key: Favorite
        label: A favourite
        type: toggle
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#00C896"
    icon: 🏋️
    label: EXERCISES
    key: "Exercises"
    type: ExerciseStackModule
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#00C896"
    icon: 📋
    label: SESSION PLAN
    key: "Session_Plan"
    type: textarea
    autoHeight: true
    noStretch: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#00C896"
    icon: 🗓️
    label: SESSIONS
    key: "Logs"
    type: routine_sessions
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#00C896"
    icon: 🔗
    label: LINKED FROM
    key: ""
    type: linked_from
    slimEmpty: true
    folder: ""
    options:
      - "skip=07 - Journal"
      - "skip=99 - Meta"
      - "notin=Exercises"
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
cssclasses:
  - dashboard
Dashboard_Prefix: ROUTINE
Centered_Title: true
Immersive_Header: Standard
Minimal_Setup: false
Banner: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

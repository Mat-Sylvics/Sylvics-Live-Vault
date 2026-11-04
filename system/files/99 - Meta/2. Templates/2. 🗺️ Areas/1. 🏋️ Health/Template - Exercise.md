---
syl-icon: 🏋️‍♂️
Target_Muscle: ""
sylvics-fullscreen: true
sylvics-up: "[[1. Training]]"
Execution_Rules: ""
ContentType: Exercise
Dashboard_Header_Color: "#00C896"
Dashboard_Prefix_Color: "#6ee7b7"
tags:
  - exercise
Muscle_Group: []
Mechanic: []
Measure: Strength
PR_Weight: 0
PR_Reps: 0
Favorite: false
cover: 
cssclasses:
  - dashboard
Media_Tabs: []
Header_Schema:
  - color: "#e5e7eb"
    icon: 🎯
    label: Muscles
    key: Target_Muscle
    type: multi_select
    compact: true
    subFormula: "const g = [].concat(p.Muscle_Group || []).filter(Boolean); return g.length ? g.join(' · ') : '';"
    subTitle: Muscle group
    subFields:
      - key: Muscle_Group
        label: Muscle group
        type: multi_select
        options:
          - Chest
          - Back
          - Legs
          - Arms
          - Core
          - Full Body
    options:
      - Chest
      - Back
      - Shoulders
      - Biceps
      - Triceps
      - Quads
      - Hamstrings
      - Glutes
      - Calves
      - Core
      - Forearms
    formula: ""
    folder: ""
    hideZero: false
  - color: "#00C896"
    icon: ⚙️
    label: Mechanic
    key: Mechanic
    type: select
    subFormula: "return (p.Favorite === true || p.Favorite === 'true') ? '<span style=\"color:#f43f5e\">♥</span> A favourite' : '♡ Mark as favourite';"
    subTitle: Favourite
    subFields:
      - key: Favorite
        label: A favourite
        type: toggle
    options:
      - Compound
      - Isolation
      - Cardio
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏆
    label: Best set
    key: ""
    type: formula
    options: []
    formula: "const bare = (s) => String(s || '').replace(/^!?\\[\\[|\\]\\]$/g, '').split('|')[0].split('#')[0].split('/').pop().replace(/\\.md$/, '').replace(/^[^\\p{L}\\p{N}]+/u, '').trim().toLowerCase(); const nm = bare(p.file && p.file.name); const today = clock ? clock.moment().format('YYYY-MM-DD') : '9999-12-31'; const ses = {}; for (const f of app.vault.getMarkdownFiles()) { if (!f.path.startsWith('07 - Journal/01 Daily/')) continue; const dm = String(f.basename).match(/^(\\d{4}-\\d{2}-\\d{2})/); if (!dm || dm[1] > today) continue; const y = app.metadataCache.getFileCache(f)?.frontmatter; if (!y || !y.workout_log) continue; for (const e of [].concat(y.workout_log)) { if (!e || typeof e !== 'object' || bare(e.exercise && e.exercise.path ? e.exercise.path : e.exercise) !== nm) continue; (ses[dm[1]] = ses[dm[1]] || []).push({ w: parseFloat(e.weight) || 0, r: parseFloat(e.reps) || 0 }); } } const dates = Object.keys(ses).sort(); const fd = (d) => window.moment(d, 'YYYY-MM-DD').format('D MMM YYYY'); let all = []; for (const d of dates) for (const s of ses[d]) all.push({ ...s, d }); const ms = String(p.Measure || '').toLowerCase(); const kind = ['strength', 'reps', 'load', 'hold', 'distance'].includes(ms) ? ms : (all.some((s) => s.w > 0) ? 'strength' : 'reps'); const better = (a, c) => kind === 'reps' ? a.r > c.r : (a.w > c.w || (a.w === c.w && a.r > c.r)); let b = null; for (const s of all) if (!b || better(s, b)) b = s; const pw = parseFloat(p.PR_Weight) || 0, pr = parseFloat(p.PR_Reps) || 0; const man = kind === 'reps' ? (pr ? { w: pw, r: pr, d: '' } : null) : (pw ? { w: pw, r: pr || 1, d: '' } : null); if (man && (!b || better(man, b))) b = man; if (!b) return 'None yet'; if (kind === 'reps') return { html: '<span style=\"display:inline-flex;align-items:baseline;gap:7px\">' + b.r + '<span style=\"font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600\">' + 'reps</span></span>' }; if (kind === 'load' || kind === 'hold' || kind === 'distance') return { html: '<span style=\"display:inline-flex;align-items:baseline;gap:7px\">' + b.w + '<span style=\"font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600\">' + 'kg</span></span>' }; return b.w > 0 ? { html: '<span style=\"display:inline-flex;align-items:baseline;gap:7px\">' + b.w + '<span style=\"font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600\">' + 'kg</span>' + ' × ' + b.r + '</span>' } : { html: '<span style=\"display:inline-flex;align-items:baseline;gap:7px\">' + b.r + '<span style=\"font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600\">' + 'reps</span></span>' };"
    subFormula: "const bare = (s) => String(s || '').replace(/^!?\\[\\[|\\]\\]$/g, '').split('|')[0].split('#')[0].split('/').pop().replace(/\\.md$/, '').replace(/^[^\\p{L}\\p{N}]+/u, '').trim().toLowerCase(); const nm = bare(p.file && p.file.name); const today = clock ? clock.moment().format('YYYY-MM-DD') : '9999-12-31'; const ses = {}; for (const f of app.vault.getMarkdownFiles()) { if (!f.path.startsWith('07 - Journal/01 Daily/')) continue; const dm = String(f.basename).match(/^(\\d{4}-\\d{2}-\\d{2})/); if (!dm || dm[1] > today) continue; const y = app.metadataCache.getFileCache(f)?.frontmatter; if (!y || !y.workout_log) continue; for (const e of [].concat(y.workout_log)) { if (!e || typeof e !== 'object' || bare(e.exercise && e.exercise.path ? e.exercise.path : e.exercise) !== nm) continue; (ses[dm[1]] = ses[dm[1]] || []).push({ w: parseFloat(e.weight) || 0, r: parseFloat(e.reps) || 0 }); } } const dates = Object.keys(ses).sort(); const fd = (d) => window.moment(d, 'YYYY-MM-DD').format('D MMM YYYY'); let all = []; for (const d of dates) for (const s of ses[d]) all.push({ ...s, d }); const ms = String(p.Measure || '').toLowerCase(); const kind = ['strength', 'reps', 'load', 'hold', 'distance'].includes(ms) ? ms : (all.some((s) => s.w > 0) ? 'strength' : 'reps'); const better = (a, c) => kind === 'reps' ? a.r > c.r : (a.w > c.w || (a.w === c.w && a.r > c.r)); let b = null; for (const s of all) if (!b || better(s, b)) b = s; const pw = parseFloat(p.PR_Weight) || 0, pr = parseFloat(p.PR_Reps) || 0; const man = kind === 'reps' ? (pr ? { w: pw, r: pr, d: '' } : null) : (pw ? { w: pw, r: pr || 1, d: '' } : null); if (man && (!b || better(man, b))) b = man; if (!b) return 'Log sets in a daily note'; const ep = (x) => x.w > 0 && x.r >= 1 && x.r <= 12 ? (x.r === 1 ? x.w : x.w * (1 + x.r / 30)) : 0; const e1 = kind === 'strength' ? Math.round(Math.max(ep(b), ...all.map(ep))) || null : null; const when = b.d ? fd(b.d) : 'Your PR, written by hand'; if (kind === 'hold') return when + ' · ' + b.r + ' s holds'; if (kind === 'distance') return when + ' · ' + b.r + ' m'; if (kind === 'load') return when + (b.r > 1 ? ' · ' + b.r + ' reps' : ''); if (kind === 'strength' && b.r === 1 && b.w > 0) return when + ' · a tested single'; return when + (e1 ? ' · best est. 1RM ' + e1 + ' kg' : '');"
    subTitle: Best set
    subFields:
      - key: Measure
        label: How it is measured
        type: select
        options:
          - Strength
          - Reps
          - Load
          - Hold
          - Distance
      - key: PR_Weight
        label: PR weight, kg (wins when above the log)
        type: number
      - key: PR_Reps
        label: PR reps
        type: number
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 📅
    label: Last session
    key: ""
    type: formula
    options: []
    formula: "const bare = (s) => String(s || '').replace(/^!?\\[\\[|\\]\\]$/g, '').split('|')[0].split('#')[0].split('/').pop().replace(/\\.md$/, '').replace(/^[^\\p{L}\\p{N}]+/u, '').trim().toLowerCase(); const nm = bare(p.file && p.file.name); const today = clock ? clock.moment().format('YYYY-MM-DD') : '9999-12-31'; const ses = {}; for (const f of app.vault.getMarkdownFiles()) { if (!f.path.startsWith('07 - Journal/01 Daily/')) continue; const dm = String(f.basename).match(/^(\\d{4}-\\d{2}-\\d{2})/); if (!dm || dm[1] > today) continue; const y = app.metadataCache.getFileCache(f)?.frontmatter; if (!y || !y.workout_log) continue; for (const e of [].concat(y.workout_log)) { if (!e || typeof e !== 'object' || bare(e.exercise && e.exercise.path ? e.exercise.path : e.exercise) !== nm) continue; (ses[dm[1]] = ses[dm[1]] || []).push({ w: parseFloat(e.weight) || 0, r: parseFloat(e.reps) || 0 }); } } const dates = Object.keys(ses).sort(); const fd = (d) => window.moment(d, 'YYYY-MM-DD').format('D MMM YYYY'); if (!dates.length) return 'Not yet'; return window.moment(dates[dates.length - 1], 'YYYY-MM-DD').format('D MMM YYYY');"
    subFormula: "const bare = (s) => String(s || '').replace(/^!?\\[\\[|\\]\\]$/g, '').split('|')[0].split('#')[0].split('/').pop().replace(/\\.md$/, '').replace(/^[^\\p{L}\\p{N}]+/u, '').trim().toLowerCase(); const nm = bare(p.file && p.file.name); const today = clock ? clock.moment().format('YYYY-MM-DD') : '9999-12-31'; const ses = {}; for (const f of app.vault.getMarkdownFiles()) { if (!f.path.startsWith('07 - Journal/01 Daily/')) continue; const dm = String(f.basename).match(/^(\\d{4}-\\d{2}-\\d{2})/); if (!dm || dm[1] > today) continue; const y = app.metadataCache.getFileCache(f)?.frontmatter; if (!y || !y.workout_log) continue; for (const e of [].concat(y.workout_log)) { if (!e || typeof e !== 'object' || bare(e.exercise && e.exercise.path ? e.exercise.path : e.exercise) !== nm) continue; (ses[dm[1]] = ses[dm[1]] || []).push({ w: parseFloat(e.weight) || 0, r: parseFloat(e.reps) || 0 }); } } const dates = Object.keys(ses).sort(); const fd = (d) => window.moment(d, 'YYYY-MM-DD').format('D MMM YYYY'); if (!dates.length) return 'No session logged'; const s = ses[dates[dates.length - 1]]; const same = s.every((x) => x.w === s[0].w && x.r === s[0].r); const top = s.reduce((t, x) => (x.w > t.w || (x.w === t.w && x.r > t.r)) ? x : t, s[0]); const days = clock ? clock.moment().startOf('day').diff(window.moment(dates[dates.length - 1], 'YYYY-MM-DD'), 'days') : null; const ms2 = String(p.Measure || '').toLowerCase(); const hd = ms2 === 'hold' || ms2 === 'distance'; const u = ms2 === 'distance' ? ' m' : ' s'; const sets = hd ? (same ? s.length + ' × ' + top.r + u + (top.w > 0 ? ' at ' + top.w + ' kg' : '') : s.length + (ms2 === 'distance' ? ' carries' : ' holds') + ', top ' + (top.w > 0 ? top.w + ' kg for ' : '') + top.r + u) : top.w <= 0 ? (same ? s.length + ' × ' + top.r : s.length + ' sets, best ' + top.r + ' reps') : (same ? s.length + ' × ' + top.r + ' at ' + top.w + ' kg' : s.length + ' sets, top ' + top.w + ' kg × ' + top.r); return sets + (days !== null ? ' · ' + (days === 0 ? 'today' : days === 1 ? 'yesterday' : days + ' days ago') : '');"
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#00C896"
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
  - color: "#00C896"
    icon: 📈
    label: HISTORY
    key: ""
    type: Exercise Telemetry
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#00C896"
    icon: 🧠
    label: FORM CUES
    key: Execution_Rules
    type: textarea
    noStretch: true
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#00C896"
    icon: 📸
    label: FORM PICTURES
    key: ""
    type: Media Tabs
    slimEmpty: true
    emptyText: "Add a picture or video of your form"
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#00C896"
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
  - color: "#00C896"
    icon: 📋
    label: ROUTINES
    key: ""
    type: custom_dataview
    folder: 1. Training
    options:
      - TABLE WITHOUT ID file.link AS "Routine", Routine_Difficulty AS "Difficulty", Rating FROM "04 - Resources/2. 🗄️ Reference Library/4. 🌿 Health & Body/Workout Routines" WHERE contains(string(Exercises), this.file.name) SORT file.name ASC LIMIT 25
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#00C896"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    slimEmpty: true
    folder: ""
    options:
      - "notvia=workout_log"
      - "empty=No other journal entry writes about it."
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
      - "skip=Workout Routines"
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#00C896"
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
Dashboard_Prefix: EXERCISE
Centered_Title: true
Immersive_Header: Standard
Minimal_Setup: false
Banner: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

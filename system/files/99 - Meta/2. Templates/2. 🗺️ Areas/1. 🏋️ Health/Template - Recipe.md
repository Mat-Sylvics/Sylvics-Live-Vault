---
sylvics-up: "[[1. Culinary Database]]"
sylvics-fullscreen: true
ContentType: Recipe
Dashboard_Header_Color: "#34d399"
Dashboard_Prefix_Color: "#86efac"
Dashboard_Theme: Standard
tags:
  - recipe
Meal Type: []
Course: []
Rating: 0
Favorite: false
Recipe_Difficulty: ""
cssclasses:
  - dashboard
Instructions: |
  1. Prep: Gather your ingredients.
  2. Cook: Prepare according to standard methods.
  3. Assemble: Combine beautifully in a bowl or plate.
  4. Serve: Enjoy your macro-friendly meal!
gallery: []
Header_Schema:
- color: '#34d399'
  icon: 🍽️
  label: Meal Type
  key: Meal Type
  type: select
  subFormula: 'const c = Array.isArray(p.Course) ? p.Course[0] : p.Course; return c ? String(c) : ''No course'';'
  subTitle: Course
  subFields:
  - key: Course
    label: Which course is it?
    type: select
    options:
    - Appetizer
    - Starter
    - Soup
    - Salad
    - Bread
    - Main Course
    - Side Dish
    - Sauce
    - Dessert
    - Beverage
  options:
  - Breakfast
  - Brunch
  - Lunch
  - Snack
  - Dinner
  - Late Night
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: ⏱️
  label: Time
  key: Time
  type: duration
  subFormula: 'const d = Array.isArray(p.Recipe_Difficulty) ? p.Recipe_Difficulty[0] : p.Recipe_Difficulty; return d ? String(d) : ''Difficulty not set'';'
  subTitle: Difficulty
  subFields:
  - key: Recipe_Difficulty
    label: How hard is it?
    type: select
    options:
    - Easy
    - Medium
    - Hard
  options: []
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🔢
  label: Servings
  key: Servings
  type: number
  options: []
  formula: ''
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 💰
  label: Cost
  key: ''
  type: formula
  options: []
  formula: 'const n = parseFloat(p.Price) || 0; const s = parseFloat(p.Servings) || 1; let c = ''''; try { const fs = dv && dv.page(''03 - Areas/4. 💰 Finances/3. Wealth Management/7. Finance Settings.md''); if (fs && fs.Currency) c = String(fs.Currency); } catch (e) {} return n ? c + (n / s).toFixed(2) : ''Not priced'';'
  subFormula: 'const n = parseFloat(p.Price) || 0; const s = parseFloat(p.Servings) || 1; let c = ''''; try { const fs = dv && dv.page(''03 - Areas/4. 💰 Finances/3. Wealth Management/7. Finance Settings.md''); if (fs && fs.Currency) c = String(fs.Currency); } catch (e) {} return n ? ''a serving · '' + c + n.toFixed(2) + '' for '' + s + (s === 1 ? '' serving'' : '' servings'') : ''Add what the whole recipe costs'';'
  subTitle: Cost
  subFields:
  - key: Price
    label: What the whole recipe costs
    type: number
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: ⭐
  label: Rating
  key: ''
  type: formula
  options: []
  formula: 'const r = Math.max(0, Math.min(5, Math.round(parseFloat(p.Rating) || 0))); const f = p.Favorite === true || p.Favorite === ''true''; return { html: ''<span style="color:#fbbf24;letter-spacing:2px">'' + ''★''.repeat(r) + ''</span><span style="color:rgba(255,255,255,0.22);letter-spacing:2px">'' + ''★''.repeat(5 - r) + ''</span>'' + (f ? ''<span style="color:#f43f5e;margin-left:10px">♥</span>'' : '''') };'
  subFormula: 'const f = p.Favorite === true || p.Favorite === ''true''; const r = parseFloat(p.Rating) || 0; return (r ? r + '' of 5'' : ''Not rated'') + '' · '' + (f ? ''a favourite'' : ''not a favourite'');'
  subTitle: Rating
  subFields:
  - key: Rating
    label: Out of 5
    type: number
  - key: Favorite
    label: A favourite
    type: toggle
  folder: ''
  hideZero: false
Dashboard_Layout:
  - color: "#34d399"
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
  - color: "#34d399"
    icon: 📊
    label: MACROS PER SERVING
    key: ""
    type: recipe_macros
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#34d399"
    icon: 🧺
    label: INGREDIENTS
    key: ""
    type: recipe_ingredients
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#34d399"
    icon: 🍳
    label: INSTRUCTIONS
    key: Instructions
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#34d399"
    icon: 📷
    label: PHOTOS
    key: gallery
    type: gallery
    slimEmpty: true
    emptyText: "Add a photo of the dish"
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#34d399"
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
  - color: "#34d399"
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
  - color: "#34d399"
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
  - color: "#34d399"
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
Inherit_Blueprint: ""
syl-icon: 🥘
Strip_Emojis: true
Ingredients: []
Dashboard_Prefix: RECIPE
Centered_Title: true
Immersive_Header: Standard
cover: ""
Banner: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```


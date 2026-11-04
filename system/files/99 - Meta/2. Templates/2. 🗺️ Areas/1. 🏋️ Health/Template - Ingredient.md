---
sylvics-fullscreen: true
sylvics-up: "[[1. Culinary Database]]"
tags:
  - ingredient
Calories: 0
Carbs: 0
Fats: 0
Protein: 0
Quantity: 100
Unit: g
Store: ""
Price: 0
Notes: ""
syl-icon: 🍅
Dashboard_Header_Color: "#34d399"
Dashboard_Prefix_Color: "#86efac"
cover: ""
cssclasses:
  - dashboard
  - cards
  - transparent-bg
Header_Schema:
- color: '#34d399'
  icon: 🔥
  label: Calories
  key: ''
  type: formula
  options: []
  formula: 'const v = parseFloat(p.Calories); if (isNaN(v)) return ''—''; return { html: Math.round(v) + ''<span style="font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600"> '' + ''kcal</span>'' };'
  subFormula: const q = parseFloat(p.Quantity) || 100; const u = String(p.Unit || 'g'); return 'per ' + q + ' ' + u;
  subTitle: Values are per
  subFields:
  - key: Quantity
    label: Reference quantity
    type: number
  - key: Unit
    label: Unit
    type: select
    options:
    - g
    - ml
    - unit
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🥩
  label: Protein
  key: ''
  type: formula
  options: []
  formula: 'const v = parseFloat(p.Protein); if (isNaN(v)) return ''—''; return { html: (Math.round(v * 10) / 10) + ''<span style="font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600"> '' + ''g</span>'' };'
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🌾
  label: Carbs
  key: ''
  type: formula
  options: []
  formula: 'const v = parseFloat(p.Carbs); if (isNaN(v)) return ''—''; return { html: (Math.round(v * 10) / 10) + ''<span style="font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600"> '' + ''g</span>'' };'
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🥑
  label: Fats
  key: ''
  type: formula
  options: []
  formula: 'const v = parseFloat(p.Fats); if (isNaN(v)) return ''—''; return { html: (Math.round(v * 10) / 10) + ''<span style="font-size:0.6em;color:rgba(255,255,255,0.55);font-weight:600"> '' + ''g</span>'' };'
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 💰
  label: Price
  key: ''
  type: formula
  options: []
  formula: 'const v = parseFloat(p.Price); let c = ''''; try { const fs = dv && dv.page(''03 - Areas/4. 💰 Finances/3. Wealth Management/7. Finance Settings.md''); if (fs && fs.Currency) c = String(fs.Currency); } catch (e) {} return isNaN(v) ? ''Not priced'' : c + v.toFixed(2);'
  subFormula: const q = parseFloat(p.Quantity) || 100; const u = String(p.Unit || 'g'); return 'per ' + q + ' ' + u;
  subTitle: Price
  subFields:
  - key: Price
    label: Price for the reference quantity
    type: number
  folder: ''
  hideZero: false
- color: '#e5e7eb'
  icon: 🏪
  label: Store
  key: Store
  type: folder_select
  options: []
  formula: ''
  folder: 04 - Resources/3. 🌐 Entities/3. 🌍 Geographies & Places/2. 🏢 Establishments & Locals/7. Stores & Retail
  hideZero: true
- color: '#e5e7eb'
  icon: 🧺
  label: Food group
  key: Food_Group
  type: select
  options:
  - Vegetables
  - Fruit
  - Grains & bread
  - Legumes
  - Dairy & eggs
  - Fish & meat
  - Tins & pantry
  formula: ''
  folder: ''
  hideZero: false
Dashboard_Layout:
  - color: "#34d399"
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    autoHeight: true
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#34d399"
    icon: 🍳
    label: RECIPES
    key: ""
    type: custom_dataview
    folder: 1. Culinary Database
    options:
      - TABLE WITHOUT ID file.link AS "Recipe", row["Meal Type"] AS "Meal", Recipe_Difficulty AS "Difficulty", Time FROM "04 - Resources/2. 🗄️ Reference Library/4. 🌿 Health & Body/Recipes" WHERE contains(string(Ingredients), this.file.name) SORT file.name ASC LIMIT 25
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
    options:
      - "skip=07 - Journal"
      - "skip=99 - Meta"
      - "skip=Health & Body/Recipes"
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
Minimal_Setup: false
Inherit_Blueprint: ""
Status: ""
Dashboard_Prefix: INGREDIENT
Centered_Title: true
Immersive_Header: Standard
Banner: ""
created: <% tp.file.creation_date("YYYY-MM-DD") %>
Food_Group: ""
---

```sylvics-view
EntityDashboardHero
```

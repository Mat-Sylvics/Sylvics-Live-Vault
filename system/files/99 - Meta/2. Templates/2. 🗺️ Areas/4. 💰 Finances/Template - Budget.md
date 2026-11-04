<%*
const settingsFile = app.metadataCache.getFirstLinkpathDest("03 - Areas/4. 💰 Finances/3. Wealth Management/7. Finance Settings.md", "");
const fm = app.metadataCache.getFileCache(settingsFile)?.frontmatter;
const budgets = fm && fm["Category Budgets"] ? fm["Category Budgets"] : {};
let budgetsYaml = "";
for (let [k,v] of Object.entries(budgets)) {
    budgetsYaml += `  ${k}: ${v}\n`;
}
_%>
---
obsidianUIMode: preview
Month: "<% tp.file.title %>"
cssclasses:
  - dashboard
  - sylvics-fullscreen
  - transparent-bg
sylvics-up: "[[3. Budget Tracker]]"
sylvics-fullscreen: true
Category Budgets:
<% budgetsYaml.trimEnd() %>
Notes: ""
Dashboard_Layout:
  - color: "#FFD700"
    icon: 📊
    label: MONTHLY BUDGET
    key: ""
    type: Unified Budget
    folder: ""
    options: []
    options2: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#FFD700"
    icon: 📝
    label: NOTES
    key: Notes
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
    autoHeight: true
  - color: "#FFD700"
    icon: 📓
    label: IN THE JOURNAL
    key: ""
    type: journal_mentions
    folder: ""
    options:
      - scope=all
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#FFD700"
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
Header_Schema: []
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Compact
Inherit_Blueprint: ""
Dashboard_Header_Color: "#FFD700"
Dashboard_Prefix_Color: "#fde68a"
Strip_Emojis: true
Dashboard_Prefix: BUDGET
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```

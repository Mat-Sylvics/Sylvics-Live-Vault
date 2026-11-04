---
cssclasses:
  - dashboard
---

# 🔘 Global Buttons Registry

This file defines the global Meta Bind buttons used across the Masterpages. Do not delete this file, as it powers the `BUTTON[new-project]` and `BUTTON[new-task]` inline commands.

## New Project

```meta-bind-button
label: ➕ New Project
icon: lucide-folder-plus
id: new-project
style: primary
actions:
  - type: command
    command: quickadd:choice:5a747f7f-e04f-4c12-b135-25c3ea198fdb
```

## New Task

```meta-bind-button
label: ➕ New Task
icon: lucide-check-square
id: new-task
style: primary
actions:
  - type: command
    command: tasknotes:create-new-task
```


## Literature Masterpage (Glow)

```meta-bind-button
label: 📚 LITERATURE
id: lit-btn
class: lit-glow-btn
actions:
  - type: open
    link: "[[📖 0. Literature Masterpage]]"
```

## Permanent Masterpage (Glow)

```meta-bind-button
label: 🏛️ PERMANENT
id: perm-btn
class: perm-glow-btn
actions:
  - type: open
    link: "[[💎 0. Permanent Masterpage]]"
```

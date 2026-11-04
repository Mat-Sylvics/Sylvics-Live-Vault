---
tags:
  - identity
Related_Areas: 
I_am_statement: |
  - """"
Identity_Status:
  - 🌱 Aspirational
Limiting_beliefs: |
  - """"
Off_limits: |
  - """"
beliefs: |
  - """"
traits: |
  - """"
---


# Yearly

> [!multi-column]
>
>> [!blank-container|wide-2]
>> ### 🚥 Status
>> ```meta-bind
>> INPUT[multiSelect(option(🌱 Aspirational), option(🏗️ Developing), option(👑 Embodied), option(🛑 Archived)):Identity_Status]
>> ```
>
>> [!blank-container|wide-2]
>> ### 🌍 Life Area
>> ```meta-bind
>> INPUT[listSuggester(optionQuery('#Area and -"99 - Meta/2. Templates"'), useLinks(true)):Related_Areas]
>> ```
---

## 👤 Core Definition

> [!quote] 🗣️ I Am Statement
> ```meta-bind
> INPUT[textArea(class(planning-editor)):I_am_statement]
> ```
> 
> **🧬 Traits:**
> ```meta-bind
> INPUT[textArea(class(planning-editor)):traits]
> ```
> 
> **🛑 Off Limits:**
> ```meta-bind
> INPUT[textArea(class(planning-editor)):Off_limits]
> ```

---

## 🎯 Active Goals (Alignment)

```dataview
TABLE join(Goal_Status, "") as "Status", Quarter, Progress
FROM "02 - Planning/2. ♟️ Strategy/1. 🎯 Goals"
WHERE contains(string(Related_Identities), this.file.name) OR contains(file.outlinks, this.file.link)
SORT Goal_Status ASC
```

---

## 🧠 Notes & Brainstorming

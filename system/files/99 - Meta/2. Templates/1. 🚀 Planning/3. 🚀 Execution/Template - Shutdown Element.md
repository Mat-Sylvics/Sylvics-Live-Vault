---
tags:
  - shutdown
Status:
  - 🔄 Consistent
Related_Identities: 
Habits_Repetition:
Minimum_viable: |
  - ""
Order: 1
Routine:
What_is_it: |
  - ""
behavior: |
  - ""
trigger: |
  - ""
---


# Yearly

> [!multi-column]
>
>> [!blank-container|wide-2]
>> ### 🚥 Status
>> ```meta-bind
>> INPUT[multiSelect(option(🧱 Building), option(🔄 Consistent), option(⚙️ Automatic), option(⏸️ Paused), option(🛑 Archived)):Habit_Status]
>> ```
>
>> [!blank-container|wide-2]
>> ### 📅 Routine
>> ```meta-bind
>> INPUT[multiSelect(class(routine-colored), option(🌤️ Morning Routine), option(☀️ Afternoon Routine), option(🌜 Evening Routine)):Routine]
>> ```
>
>> [!blank-container|wide-2]
>> ### 🔄 Repetition
>> ```meta-bind
>> INPUT[multiSelect(class(colorful-repetition), option(Mon), option(Tue), option(Wed), option(Thu), option(Fri), option(Sat), option(Sun)):Habits_Repetition]
>> ```

> [!multi-column]
>
>> [!blank-container|wide-2]
>> ### 👤 Associated Identity Archetype
>> ```meta-bind
>> INPUT[listSuggester(optionQuery('"02 - Planning/1. ⚖️ Alignment/2. 🎭 Archetypes" and -"99 - Meta/2. Templates"'), useLinks(true)):Related_Identities]
>> ```
>
>> [!blank-container|wide-2]
>> ### 🎯 Related Goals
>> ```meta-bind
>> INPUT[listSuggester(optionQuery('"02 - Planning/2. ♟️ Strategy/1. 🎯 Goals" and -"99 - Meta/2. Templates"'), useLinks(true)):Related_Goals]
>> ```
>
>> [!blank-container|wide-2]
>> ### 🧠 Related Affirmations
>> ```meta-bind
>> INPUT[listSuggester(optionQuery('"02 - Planning/1. ⚖️ Alignment/3. 💭 Affirmations" and -"99 - Meta/2. Templates"'), useLinks(true)):Related_Affirmations]
>> ```
>
>> [!blank-container|wide-2]
>> ### ♦️ Related Skills
>> ```meta-bind
>> INPUT[listSuggester(optionQuery('"02 - Planning/2. ♟️ Strategy/3. ♦️ Skills" and -"99 - Meta/2. Templates"'), useLinks(true)):Related_Skills]
>> ```
---

## 🔹 Core Definition

> [!quote] 📖 What is it?
> ```meta-bind
> INPUT[textArea(class(planning-editor)):What_is_it]
> ```
> 
> **⚡ Trigger:**
> ```meta-bind
> INPUT[textArea(class(planning-editor)):trigger]
> ```
> 
> **🎯 Behavior:**
> ```meta-bind
> INPUT[textArea(class(planning-editor)):behavior]
> ```
> 
> **🛡️ Minimum Viable:**
> ```meta-bind
> INPUT[textArea(class(planning-editor)):Minimum_viable]
> ```

---

## 🧭 Ritual Architecture

---

## 🧠 Notes & Brainstorming

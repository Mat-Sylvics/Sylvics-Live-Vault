---
Article_Status: 📥 Inbox
Author: "{{author}}"
URL: "{{url}}"
Favorite: false
cssclasses:
  - preserve-scroll
  - sylvics-fullscreen
  - sylvics-up
  - sylvics-dashboard
Created: ""
Tags:
  - clipping
Published: ""
Cover: ""
Rating: ""
Quick_Jots: ""
Core_Thesis: ""
sylvics-fullscreen: true
sylvics-up: "[[📰 0. Articles Masterpage]]"
Dashboard_Theme: Article
Dashboard_Title_Color: "#06b6d4"
Dashboard_Header_Color: "#0891b2"
Header_Schema:
  - color: "#ef4444"
    icon: ❤️
    label: Favorite
    key: Favorite
    type: favorite
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#8b5cf6"
    icon: ☁️
    label: Author
    key: Author
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#3b82f6"
    icon: 📅
    label: Published
    key: Published
    type: date
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#f59e0b"
    icon: 🏷️
    label: Tags
    key: Tags
    type: multi_select
    options:
      - clipping
      - technology
      - science
      - business
      - politics
      - health
      - culture
      - philosophy
      - economics
      - society
      - history
      - self-improvement
    formula: ""
    folder: ""
    hideZero: false
  - color: "#10b981"
    icon: 📊
    label: Status
    key: Article_Status
    type: select
    options:
      - 📥 Inbox
      - ✅ Finished
      - ⏳ In Progress
    formula: ""
    folder: ""
    hideZero: false
  - color: "#eab308"
    icon: ⭐
    label: Rating
    key: Rating
    type: select
    options:
      - ⭐
      - ⭐⭐
      - ⭐⭐⭐
      - ⭐⭐⭐⭐
      - ⭐⭐⭐⭐⭐
    formula: ""
    folder: ""
    hideZero: false
  - color: "#06b6d4"
    icon: 🔗
    label: Read Article
    key: URL
    type: url
    options: []
    formula: ""
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#06b6d4"
    icon: ⚡
    label: Quick Jots
    key: Quick_Jots
    type: textarea
    folder: ""
    options: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🎯
    label: Core Thesis
    key: Core_Thesis
    type: textarea
    folder: ""
    options: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 💡
    label: Actionable Takeaways
    key: action_takeaway_sec
    type: canvas_break
    folder: ""
    options: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 📰
    label: Article Content
    key: content_sec
    type: canvas_break
    folder: ""
    options: []
    width: 100%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 💬
    label: Quotes
    key: Quotes_list
    type: link_list
    folder: 04 - Resources/4. 🧠 Micro-Knowledge/1. 💬 Quotes
    options: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🧩
    label: Key Concepts
    key: Concepts_list
    type: link_list
    folder: 04 - Resources/4. 🧠 Micro-Knowledge/5. 🧩 Concepts
    options: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 📓
    label: Literature Notes
    key: Lit_Notes_list
    type: link_list
    folder: 05 - Literature
    options: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 💎
    label: Permanent Notes
    key: Perm_Notes_list
    type: link_list
    folder: 06 - Permanent
    options: []
    width: 50%
    hideZero: false
    allowCreate: true
  - color: "#06b6d4"
    icon: 🏛️
    label: Related Figures
    key: Related_Figures_list
    type: link_list
    folder: 04 - Resources/3. 🌐 Entities/1. 👥 People/🏛️ Figures
    options: []
    width: 50%
    hideZero: false
    allowCreate: true
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Futuristic SciFi Library.png
Strip_Emojis: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Cover_Alignment: Right
Inherit_Blueprint: ""
---

```sylvics-view
EntityDashboardHero | {section: 0}
```

<%*
setTimeout(async () => {
  const file = tp.file.find_tfile(tp.file.title);
  if (file) {
    await app.fileManager.processFrontMatter(file, (fm) => {
      // Force multiselect for status fields
      const keys = ["Article_Status", "Video_Status", "Resource_Status", "Movies_Status", "Podcast_Status"];
      for (const key of keys) {
        if (fm[key] && typeof fm[key] === 'string') {
          fm[key] = [fm[key]];
        }
      }
      
      // Inject missing properties that Web Clipper ignores
      if (typeof fm.Favorite === "string") {
        fm.Favorite = fm.Favorite.trim().toLowerCase() === "true";
      } else if (typeof fm.Favorite === "undefined") {
        fm.Favorite = false;
      }
      if (typeof fm.Rating === "string") {
        fm.Rating = parseInt(fm.Rating) || 0;
      } else if (typeof fm.Rating === "undefined") {
        fm.Rating = 0;
      }
    });

    // Fix the markdown spacing (Web Clipper squishes newlines)
    const contentText = await app.vault.read(file);
    let newContentText = contentText;
    
    newContentText = newContentText.replace(/---\n# 💬 Quotes/g, '---\n\n# 💬 Quotes\n');
    newContentText = newContentText.replace(/---\n# 📖 Literature Notes/g, '---\n\n# 📖 Literature Notes\n');
    newContentText = newContentText.replace(/---\n# 💎 Permanent Notes/g, '---\n\n# 💎 Permanent Notes\n');
    
    if (contentText !== newContentText) {
      await app.vault.modify(file, newContentText);
    }
  }
}, 800);
%>

> [!syl-hidden]
> Type your actionable takeaways here...

```sylvics-view
EntityDashboardHero | {section: 1}
```

> [!syl-hidden]
> {{content}}

```sylvics-view
EntityDashboardHero | {section: 2}
```

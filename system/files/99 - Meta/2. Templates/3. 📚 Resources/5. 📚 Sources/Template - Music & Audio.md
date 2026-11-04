---
ContentType: Media
Type:
Title:
Creator:
URL:
Reference_URL:
Duration:
Rating:
Favorite: false
Playlists:
  - 
Topics: []
Cover:
Banner:
Quick_Jots: ""
Linked_Skill: ""
Header_Schema:
  - color: "#10b981"
    icon: 🎧
    label: Artist
    key: Creator
    type: text
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🎼
    label: Genre
    key: Type
    type: select
    options:
      - Ambient
      - Classical
      - Jazz
      - Rock
      - Soft rock
      - Pop
      - Electronic
      - Hip-hop
      - Reggae
      - Film score
      - Folk
      - R&B
      - Soul
      - Metal
      - Country
      - Latin
      - World
      - Podcast
      - Audiobook
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: 🏷️
    label: Playlists
    key: Playlists
    type: multi_select
    options:
      - Chill
      - Focus
      - Deep Work
      - Study
      - Reading
      - Writing
      - Thinking
      - Workout
      - Morning walk
      - Cleaning
      - Evening
      - Sleep
      - Sunday
      - Holiday
      - Party
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ⏱️
    label: Duration
    key: Duration
    type: duration
    options: []
    formula: ""
    folder: ""
    hideZero: false
  - color: "#e5e7eb"
    icon: ❤️
    label: Favorite
    key: Favorite
    type: favorite
    options: []
    formula: ""
    folder: ""
    hideZero: false
Dashboard_Layout:
  - color: "#10b981"
    icon: ⚡
    label: QUICK JOTS
    key: Quick_Jots
    type: textarea
    folder: ""
    options: []
    options2: []
    width: 66%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
    icon: ⭐
    label: RATING
    key: Rating
    type: select
    folder: ""
    options:
      - ⭐
      - ⭐⭐
      - ⭐⭐⭐
      - ⭐⭐⭐⭐
      - ⭐⭐⭐⭐⭐
    options2: []
    width: 33%
    hideZero: false
    allowCreate: true
  - color: "#10b981"
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
  - color: "#10b981"
    icon: ▶️
    label: AUDIO FILE
    key: URL
    type: audio_file
    folder: ""
    options: []
    options2: []
    width: 50%
    hideZero: false
    allowCreate: true
Minimal_Setup: false
Centered_Title: true
Immersive_Header: Standard
Strip_Emojis: true
Inherit_Blueprint: ""
Dashboard_Theme: Audio
Cover_Alignment: Right
cssclasses:
  - sylvics-dashboard
sylvics-up: "[[🎵 0. Music & Audio Masterpage]]"
sylvics-fullscreen: true
Dashboard_Background: 99 - Meta/4. Attachments/3. Sylvics Art/Banners/Evening Study Window.png
Dashboard_Prefix: MUSIC
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-view
EntityDashboardHero
```



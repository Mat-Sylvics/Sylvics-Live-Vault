---
tags:
  - "#type/weekly-note" 
cssclasses:
  - image-borders
  - weekly
  - sylvics-weekly
  - sylvics-fullscreen
  <%* tR += "- week-" + moment(tp.file.title, 'GGGG-[W]WW').format('W'); %>
<%* // --- BANNER CONFIG ---
{ // --- WEEKLY BANNER ---
// Configuration for weekly banners
const weeklyBannerConfigs = {
    // You can adjust these Y values as needed for each weekly banner
    "WeeklyBanner1": 50,
    "WeeklyBanner2": 50,
    "WeeklyBanner3": 55,
    "WeeklyBanner4": 50
};

// Get the current file path to extract week number
const filePath = tp.file.path(true);
const weekMatch = filePath.match(/(\d{4})-W(\d{2})/);

if (weekMatch) {
    const year = weekMatch[1];
    const weekNum = parseInt(weekMatch[2], 10);
    
    // One banner per ISO week (WeeklyBanner1 ... WeeklyBanner53): the cabin, its window on that week's month
    const bannerBaseName = `WeeklyBanner${weekNum}`;
    
    // Try to find the correct file extension
    let bannerExt = 'gif'; // Default
    const baseFolder = "99 - Meta/4. Attachments/3. Sylvics Art/Journal/Weekly Notes";
    const extensions = ['png', 'gif', 'jpg', 'jpeg', 'webp'];

    for (const ext of extensions) {
        const filePath = `${baseFolder}/${bannerBaseName}.${ext}`;
        const file = app.vault.getAbstractFileByPath(filePath);
        if (file) {
            bannerExt = ext;
            break;
        }
    }
    
    // Get the Y value from config (or use a default of 30)
    const bannerYValue = weeklyBannerConfigs[bannerBaseName] || 30;
    
    // Generate the YAML frontmatter
    tR += `banner: "[[${bannerBaseName}.${bannerExt}]]"
banner-y: 30
banner-x: 30
banner-display: cover
banner-repeat: true
banner-fade: 0
banner-height: 400
content-start: 350
banner-radius: 25`;
} else {
    // If not a weekly note, add a comment instead
    tR += `# Not a weekly note - banner not applied`;
}
} %>
date: <% moment(tp.file.title, 'YYYY-[W]ww').startOf('week').format("YYYY-MM-DD") %>
journal: weekly
journal-date: <% moment(tp.file.title, 'YYYY-[W]ww').startOf('week').format("YYYY-MM-DD") %>
journal-start-date: <% moment(tp.file.title, 'YYYY-[W]ww').startOf('week').format("YYYY-MM-DD") %>
journal-end-date: <% moment(tp.file.title, 'YYYY-[W]WW').isoWeekday(7).format("YYYY-MM-DD") %>
alias:
weekTheme: ""
aiAnswer: ""
WeekSummary: ""
Active_Knowledge_Tab: "Jots"
Active_Action_Tab: "Projects"
wheelOfLife:
  spiritual: 
  spiritualSummary: ""
  career: 
  careerSummary: ""
  relationships: 
  relationshipsSummary: ""
  health: 
  healthSummary: ""
  growth: 
  growthSummary: ""
  recreation: 
  recreationSummary: ""
  social: 
  socialSummary: ""
  finance: 
  financeSummary: ""
  environment: 
  environmentSummary: ""
weeklyStoryworthy: ""
weeklyLearnt: ""
weeklyWins: ""
weeklyMisses: ""
weeklyIdentityCheck: ""
weeklyStrongestArea: ""
weeklyWeakestArea: ""
weeklyAreaDrop: ""
weeklyAreaAction: ""
nextWeekPriorities: ""
nextWeekAreaFocus: ""
nextWeekProjectFocus: ""
nextWeekNextAction: ""
sylvics-fullscreen: true
sylvics-up: "[[07 - Journal/00. Journal Masterpage]]"
created: <% tp.file.creation_date("YYYY-MM-DD") %>
---

```sylvics-weekly
```

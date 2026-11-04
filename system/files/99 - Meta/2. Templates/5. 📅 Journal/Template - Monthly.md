<%"---"%>
tags:
  - "#type/monthly-note"
cssclasses:
  - image-borders
  - image-small
  - sylvics-monthly
  - sylvics-fullscreen
  <%* tR += "- " + moment(tp.file.title, 'YYYY-MM-MMMM').format('MMMM').toLowerCase(); tR += "\n  - monthly" %>
<%* // --- BANNER CONFIG --- 
{ // --- MONTHLY BANNER ---
// Configuration for monthly banners
// One banner per month (MonthlyBanner1 = January ... MonthlyBanner12 = December): the same valley through the year.
const monthlyBannerConfigs = {};
for (let m = 1; m <= 12; m++) monthlyBannerConfigs[`MonthlyBanner${m}`] = 40;

// Get the current file path to extract month number
const filePath = tp.file.path(true);
const monthMatch = filePath.match(/(\d{4})-(\d{2})-([A-Za-z]+)/);

if (monthMatch) {
    const year = monthMatch[1];
    const monthNum = parseInt(monthMatch[2], 10);
    
    // One banner per month: January is MonthlyBanner1, December is MonthlyBanner12
    const bannerIndex = Math.min(12, Math.max(1, monthNum));
    const bannerBaseName = `MonthlyBanner${bannerIndex}`;
    
    // Try to find the correct file extension
    let bannerExt = 'gif'; // Default
    const baseFolder = "99 - Meta/4. Attachments/3. Sylvics Art/Journal/Monthly Notes";
    const extensions = ['gif', 'jpg', 'jpeg', 'png', 'webp'];

    for (const ext of extensions) {
        const filePath = `${baseFolder}/${bannerBaseName}.${ext}`;
        const file = app.vault.getAbstractFileByPath(filePath);
        if (file) {
            bannerExt = ext;
            break;
        }
    }
    
    // Get the Y value from config (or use a default of 30)
    const bannerYValue = monthlyBannerConfigs[bannerBaseName] || 30;
    
    // Generate the YAML frontmatter
    tR += `banner: "[[${bannerBaseName}.${bannerExt}]]"
banner-y: ${bannerYValue}
banner-x: 30
content-start: 350
banner-display: cover
banner-repeat: true
banner-height: 400
banner-fade: 0
banner-radius: 25`;
} else {
    // If not a monthly note, add a comment instead
    tR += `# Not a monthly note - banner not applied`;
}
} %>
date: <% moment(tp.file.title, 'YYYY-MM-MMMM').startOf('month').format("YYYY-MM-DD") %>
journal: monthly
journal-date: <% moment(tp.file.title, 'YYYY-MM-MMMM').startOf('month').format("YYYY-MM-DD") %>
journal-start-date: <% moment(tp.file.title, 'YYYY-MM-MMMM').startOf('month').format("YYYY-MM-DD") %>
journal-end-date: <% moment(tp.file.title, 'YYYY-MM-MMMM').endOf('month').format("YYYY-MM-DD") %>
alias:
aiAnswer: ""
MonthSummary: ""
Active_Knowledge_Tab: Jots
Active_Action_Tab: Projects
wheelOfLife:
  spiritual: 0
  spiritualSummary: ""
  career: 0
  careerSummary: ""
  relationships: 0
  relationshipsSummary: ""
  health: 0
  healthSummary: ""
  growth: 0
  growthSummary: ""
  recreation: 0
  recreationSummary: ""
  social: 0
  socialSummary: ""
  finance: 0
  financeSummary: ""
  environment: 0
  environmentSummary: ""
monthlyStoryworthy: ""
monthlyReview: ""
monthlyAudit: ""
monthlyCourseCorrection: ""
monthlyLatentToProjects: ""
nextMonthFocus: ""
nextMonthGoals: ""
sylvics-fullscreen: true
sylvics-up: "[[07 - Journal/00. Journal Masterpage]]"
shutdownTasks:
  chkData: false
  chkKnow: false
  chkAction: false
  chkCalib: false
  chkHorizon: false
monthlyWheelOfLifeCategoryChartType: line
created: <% tp.file.creation_date("YYYY-MM-DD") %>
<%"---"%>

```sylvics-monthly
```

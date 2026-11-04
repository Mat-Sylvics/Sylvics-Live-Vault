```dataviewjs
const noteDate = moment(dv.current().date || dv.current().file.name.substring(0, 10)).format("YYYY-MM-DD");

const expenses = dv.pages('#expense').where(p => p.Date && moment(String(p.Date)).format("YYYY-MM-DD") === noteDate).array();
const incomes = dv.pages('#income').where(p => p.Date && moment(String(p.Date)).format("YYYY-MM-DD") === noteDate).array();

let totalExpense = 0;
expenses.forEach(p => totalExpense += (Number(p.Amount) || 0));

let totalIncome = 0;
incomes.forEach(p => totalIncome += (Number(p.Amount) || 0));

const calories = dv.current().Calories || 0;
const carbs = dv.current().Carbs || 0;
const fats = dv.current().Fats || 0;
const protein = dv.current().Protein || 0;

const html = `
<div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 15px;">
    <!-- Finances Card -->
    <div style="flex: 1; min-width: 320px; background: var(--background-primary-alt); border-radius: 16px; padding: 24px; border: 1px solid var(--background-modifier-border); box-shadow: 0 8px 16px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px; font-size: 1.3em; color: var(--text-normal); border-bottom: 2px solid rgba(239, 68, 68, 0.2); padding-bottom: 12px;">
            💰 Financial Telemetry
        </h3>
        <div style="display: flex; justify-content: space-between; margin-bottom: 24px; gap: 15px; margin-top: 20px;">
            <div style="flex: 1; background: rgba(239, 68, 68, 0.1); padding: 18px 12px; border-radius: 12px; text-align: center; border: 1px solid rgba(239, 68, 68, 0.2);">
                <div style="font-size: 0.85em; color: #ef4444; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Spent</div>
                <div style="font-size: 1.8em; font-weight: 800; color: var(--text-normal); margin-top: 8px; font-variant-numeric: tabular-nums;">$${totalExpense.toFixed(2)}</div>
            </div>
            <div style="flex: 1; background: rgba(34, 197, 94, 0.1); padding: 18px 12px; border-radius: 12px; text-align: center; border: 1px solid rgba(34, 197, 94, 0.2);">
                <div style="font-size: 0.85em; color: #22c55e; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Earned</div>
                <div style="font-size: 1.8em; font-weight: 800; color: var(--text-normal); margin-top: 8px; font-variant-numeric: tabular-nums;">$${totalIncome.toFixed(2)}</div>
            </div>
        </div>
        <div style="font-size: 0.95em; max-height: 180px; overflow-y: auto; padding-right: 5px;">
            ${expenses.length > 0 ? expenses.map(p => `<div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed var(--background-modifier-border);"><span style="color: var(--text-normal);"><span style="opacity:0.5; margin-right:6px;">🔻</span> ${p.file.name.replace("🔻", "").trim()}</span> <span style="font-weight: 700; color: var(--text-muted); font-variant-numeric: tabular-nums;">$${p.Amount}</span></div>`).join('') : ''}
            ${incomes.length > 0 ? incomes.map(p => `<div style="display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed var(--background-modifier-border);"><span style="color: var(--text-normal);"><span style="opacity:0.5; margin-right:6px;">🟩</span> ${p.file.name.replace("🟩", "").trim()}</span> <span style="font-weight: 700; color: #22c55e; font-variant-numeric: tabular-nums;">+$${p.Amount}</span></div>`).join('') : ''}
            ${expenses.length === 0 && incomes.length === 0 ? `<div style="text-align: center; color: var(--text-faint); font-style: italic; padding: 30px 0;">No financial activity logged today.</div>` : ''}
        </div>
    </div>

    <!-- Macros Card -->
    <div style="flex: 1; min-width: 320px; background: var(--background-primary-alt); border-radius: 16px; padding: 24px; border: 1px solid var(--background-modifier-border); box-shadow: 0 8px 16px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px; font-size: 1.3em; color: var(--text-normal); border-bottom: 2px solid rgba(245, 158, 11, 0.2); padding-bottom: 12px;">
            🍖 Nutritional Telemetry
        </h3>
        <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 22px; background: var(--background-secondary); border-radius: 12px; border-left: 5px solid #f59e0b; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">
                <div style="font-weight: 700; color: var(--text-muted); font-size: 1.1em; text-transform: uppercase; letter-spacing: 1px;">🔥 Calories</div>
                <div style="font-size: 2.2em; font-weight: 800; color: var(--text-normal); font-variant-numeric: tabular-nums;">${calories} <span style="font-size: 0.5em; color: var(--text-faint); font-weight: 600;">kcal</span></div>
            </div>
            <div style="display: flex; gap: 15px;">
                <div style="flex: 1; text-align: center; padding: 18px 10px; background: var(--background-secondary); border-radius: 12px; border-bottom: 4px solid #3b82f6; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="font-size: 1.5em; font-weight: 800; color: var(--text-normal); font-variant-numeric: tabular-nums;">${carbs}g</div>
                    <div style="font-size: 0.75em; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 8px; letter-spacing: 1px;">Carbs</div>
                </div>
                <div style="flex: 1; text-align: center; padding: 18px 10px; background: var(--background-secondary); border-radius: 12px; border-bottom: 4px solid #ef4444; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="font-size: 1.5em; font-weight: 800; color: var(--text-normal); font-variant-numeric: tabular-nums;">${fats}g</div>
                    <div style="font-size: 0.75em; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 8px; letter-spacing: 1px;">Fats</div>
                </div>
                <div style="flex: 1; text-align: center; padding: 18px 10px; background: var(--background-secondary); border-radius: 12px; border-bottom: 4px solid #10b981; box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);">
                    <div style="font-size: 1.5em; font-weight: 800; color: var(--text-normal); font-variant-numeric: tabular-nums;">${protein}g</div>
                    <div style="font-size: 0.75em; color: var(--text-muted); text-transform: uppercase; font-weight: 700; margin-top: 8px; letter-spacing: 1px;">Protein</div>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const container = dv.el("div", "");
container.innerHTML = html;
```

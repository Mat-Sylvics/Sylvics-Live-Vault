
module.exports = async (context) => {
    const { app, file } = context;
    const cache = app.metadataCache.getFileCache(file);
    const fm = cache?.frontmatter || {};
    
    let amt = fm.temp_amount;
    let cat = fm.temp_category || "";
    let type = fm.temp_type || "";
    let desc = fm.temp_description || "";
    let acc = fm.temp_account || "Chase";
    let tar = fm.temp_target || "";
    
    if (!amt || !type) {
        new Notice("❌ Please fill in Amount and Type!");
        return;
    }
    
    // Build the description part
    let notePart = desc ? ` | [note:: ${desc}]` : "";
    
    let appendStr = "";
    if (type.includes("Expense")) {
        appendStr = `- 🔻 [amount:: ${amt}] | [category:: ${cat || "Uncategorized"}] | [account:: ${acc}]${notePart}`;
    } else if (type.includes("Income")) {
        appendStr = `- 🟩 [amount:: ${amt}] | [category:: ${cat || "Income"}] | [account:: ${acc}]${notePart}`;
    } else if (type.includes("Transfer")) {
        let targetAcc = tar || "Revolut";
        appendStr = `- 🔄 [amount:: ${amt}] | [from:: ${acc}] | [to:: ${targetAcc}]${notePart}`;
    }
    
    await app.vault.process(file, (data) => {
        // Reset all temp fields to empty strings
        let newData = data.replace(/(temp_amount:).*/g, "$1 ");
        newData = newData.replace(/(temp_category:).*/g, '$1 ""');
        newData = newData.replace(/(temp_type:).*/g, '$1 ""');
        newData = newData.replace(/(temp_description:).*/g, '$1 ""');
        newData = newData.replace(/(temp_account:).*/g, '$1 ""');
        newData = newData.replace(/(temp_target:).*/g, '$1 ""');
        
        let marker = "### 💳 Daily Ledger";
        if (newData.includes(marker)) {
            let lines = newData.split("\n");
            let idx = lines.findIndex(l => l.startsWith(marker));
            lines.splice(idx + 2, 0, appendStr);
            return lines.join("\n");
        } else {
            return newData + `\n### 💳 Daily Ledger\n*Log your financial transactions here.*\n${appendStr}`;
        }
    });
    
    new Notice("✅ Transaction Logged!");
}

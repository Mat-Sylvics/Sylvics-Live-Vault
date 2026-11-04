<%*
const type = await tp.system.suggester(["🔻 Expense", "🟩 Income", "📈 Trade"], ["expense", "income", "trade"]);
if (!type) return;

let appendStr = "";

if (type === "expense") {
    const amount = await tp.system.prompt("Amount?");
    if (!amount) return;
    const cat = await tp.system.suggester(["Food", "Transport", "Rent", "Utilities", "Entertainment", "Shopping"], ["Food", "Transport", "Rent", "Utilities", "Entertainment", "Shopping"]);
    if (!cat) return;
    const note = await tp.system.prompt("Note?");
    appendStr = `\n- 🔻 [amount:: ${amount}] | [category:: ${cat}] | [note:: ${note || ""}]`;
} 
else if (type === "income") {
    const amount = await tp.system.prompt("Amount?");
    if (!amount) return;
    const cat = await tp.system.suggester(["Salary", "Freelance", "Gift", "Other"], ["Salary", "Freelance", "Gift", "Other"]);
    if (!cat) return;
    const note = await tp.system.prompt("Note?");
    appendStr = `\n- 🟩 [amount:: ${amount}] | [category:: ${cat}] | [note:: ${note || ""}]`;
}
else if (type === "trade") {
    const asset = await tp.system.suggester(["BTC", "ETH", "SOL", "ONDO", "SP500"], ["BTC", "ETH", "SOL", "ONDO", "SP500"]);
    if (!asset) return;
    const invested = await tp.system.prompt("Amount Invested ($)?");
    if (!invested) return;
    const qty = await tp.system.prompt(`Quantity of ${asset}?`);
    if (!qty) return;
    appendStr = `\n- 📈 [asset:: ${asset}] | [invested:: ${invested}] | [quantity:: ${qty}] | [platform:: Kraken]`;
}

// Inject into current file
const file = app.workspace.getActiveFile();
if (file) {
    await app.vault.process(file, (data) => {
        const marker = "### 💳 Daily Ledger\n*Log your financial transactions here. (Format: `- 🔻 [amount:: ] | [category:: ] | [note:: ]`)*\n";
        if (data.includes(marker)) {
            return data.replace(marker, marker + appendStr);
        } else {
            // Fallback: append to end of file
            return data + "\n" + appendStr;
        }
    });
    new Notice("Transaction Logged Successfully!");
}
%>
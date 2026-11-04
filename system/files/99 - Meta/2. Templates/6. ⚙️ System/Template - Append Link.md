<%*
const name = await tp.system.prompt("Enter the title for the new link:");
if (name) {
    const cleanName = name.replace(/[^a-zA-Z0-9]/g, "_");
    const block = `# 🔗 ${name}\n\n**Link:** \`INPUT[text:Link_${cleanName}]\`\n\n**Takeaway:** \`INPUT[textArea:Takeaway_${cleanName}]\`\n\n<span style="display:none">APPEND_HERE</span>`;
    
    const file = tp.config.target_file;
    if (file) {
        const content = await app.vault.read(file);
        const newContent = content.replace('<span style="display:none">APPEND_HERE</span>', block);
        await app.vault.modify(file, newContent);
    }
}
%>

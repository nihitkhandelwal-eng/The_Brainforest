<%*
let template = await tp.system.suggester((item) => item.name, app.vault.root.children.filter(t => 
	t.name === app.plugins.plugins["templater-obsidian"].settings["templates_folder"])[0].children);
while(template.children?.length > 0) {
	template = await tp.system.suggester((item) => item.name, template.children);
}
tp.file.include(template);
%>



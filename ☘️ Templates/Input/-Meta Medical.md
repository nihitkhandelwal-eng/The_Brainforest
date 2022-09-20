<%*
const choice = await tp.system.suggester(["Note", "Module", "System MOC", "Subject MOC"], ["Note", "Module", "System MOC", "Subject MOC"]);
let output = ""
switch(choice) {
    case "Module":
        output = await tp.file.include("[[Module Template]]")
        break;
    case "Note":
		output = await tp.file.include("[[Academic Note Template]]")
		break;
    case "Subject MOC":
	   output = await tp.file.include("[[Subject  MOC Template]]")
	   break;
    case "System MOC":
        output = await tp.file.include("[[System MOC Template]]")
        break;
    default:
        new Notice("No Matching Template")
}
   
tR += output
%>
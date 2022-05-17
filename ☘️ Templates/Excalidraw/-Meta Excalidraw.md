<%*
const choice = await tp.system.suggester(["Blank Slate", "Placeholder 1", "Placeholder 2", "Placeholder 3", "Placeholder 4"]), (["Blank Slate", "Placeholder 1", "Placeholder 2", "Placeholder 3", "Placeholder 4"]);
let output = ""
switch(choice) {
	case "Blank Slate":
		output = await tp.file.include("[[Blank Slate]]")
		break;
	default:
		new Notice("No Matching Template")
}

tR += output
%>
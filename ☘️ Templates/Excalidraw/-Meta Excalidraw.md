<%*
const choice = await tp.system.suggester(["Blank Slate", "Embed a Drawing Here"], ["Blank Slate", "Embed a Drawing Here"]);
let output = ""
switch(choice) {
	case "Blank Slate":
		output = await tp.file.include("[[☘️ Templates/Excalidraw/Blank Slate]]")
		break;
	case "Embed a Drawing Here":
		output = await tp.file.include("[[Insert Drawing Into the Current Note]]")
		break;
	default:
		new Notice("No Matching Template")
}

tR += output
%>
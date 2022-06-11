<%*
const choice = await tp.system.suggester(["Blank Slate", "Idea Sketch", "Embed a Drawing Here"], ["Blank Slate", "Idea Sketch", "Embed a Drawing Here"]);
let output = ""
switch(choice) {
	case "Blank Slate":
		output = await tp.file.include("[[Blank Slate Sketch]]")
		break;
	case "Idea Sketch":
		output = await tp.file.include("[[Idea Sketch]]")
		break;
	case "Embed a Drawing Here":
		output = await tp.file.include("[[Insert Drawing Into the Current Note]]")
		break;
	default:
		new Notice("No Matching Template")
}

tR += output
%>
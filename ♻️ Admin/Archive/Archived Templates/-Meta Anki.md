<%*
const choice = await tp.system.suggester([“Inline”, "Cloze", "Sequential Cloze", "Using Hashtag", "Q & A", “Table Markdown”], ["Inline", "Cloze", "Sequential Cloze", "Using Hashtag", “Q & A”, “Table Markdown”]);
let output = ""
switch(choice) {
    case "Inline":
	        output = await tp.file.include("[[Anki Inline Cards]]")
	        break;
    case "Sequential Cloze":
		output = await tp.file.include("[[Anki Cloze Sequential]]")
		break;
    case "Cloze":
	   output = await tp.file.include("[[Anki Cloze]]")
		 break;
    case "Using Hashtag":
	        output = await tp.file.include("[[Anki Hashtag Card]]")
	        break;
    case "Q & A":
	        output = await tp.file.include("[[Anki Q&A Card (Old Plugin)]]")
	        break;
    case "Table Markdown":
	        output = await tp.file.include("[[Anki Table Markdown (Old Plugin)]]")
	        break;
    default:
        new Notice("No Matching Template")
}
   
tR += output
%>
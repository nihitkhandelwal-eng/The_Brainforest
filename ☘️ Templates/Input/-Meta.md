<%*
const choice = await tp.system.suggester(["Medical Note", "Simple Note", "Empty Note", "Excalidraw Sketch", "Book", "MOC", "Movie / Show", "Music", "People", "Workshop"], ["Medical Note", "Simple Note", "Empty Note", "Excalidraw Sketch", "Book", "MOC", "Movie / Show", "Music", "People", "Workshop"]);
let output = ""
switch(choice) {
    case "Medical Note":
        output = await tp.file.include("[[-Meta Medical]]")
        break;
    case "Simple Note":
		output = await tp.file.include("[[Default Template]]")
		break;
    case "Empty Note":
	   output = await tp.file.include("[[Empty Note]]")
	   break;
   case "Excalidraw Sketch":
	   output = await tp.file.include("[[-Meta Excalidraw]]")
	   break;
    case "Book":
		output = await tp.file.include("[[Book Template]]")
		break;
    case "MOC":
        output = await tp.file.include("[[MOC's Template]]")
        break;
    case "Movie / Show":
	   output = await tp.file.include("[[Movies & Shows Template]]")
	   break;
    case "Music":
        output = await tp.file.include("[[Music Template]]")
        break;
    case "People":
	   output = await tp.file.include("[[People Template]]")
	   break;
    case "Workshop":
	   output = await tp.file.include("[[Workshop 9 Template]]")
	   break;
    default:
        new Notice("No Matching Template")
}
   
tR += output
%>
```js quickadd
//const selection = window.getSelection();
//const selection = this.quickAddApi.utility.getSelectedText();  
// QuickAdd 0.4.6
const aTexts =   [ "✏️ note", "📋 tl;dr", "ℹ️ info", "🔥 tip", "✅ success", "❓ question", "⚠️ warning", "❌ fail", "🪲 bug", "📄 example", "✍️ quote", "⚡ danger" ];

const callouts = [ "NOTE", "TLDR", "INFO", "TIP", "SUCESS", "QUESTION", "WARNING", "FAIL", "ERROR", "EXAMPLE", "QUOTE", "DANGER" ];

let choice = await this.quickAddApi.suggester(aTexts, callouts);
//console.log("choice", choice);

// String.fromCharCode()
const nl = String.fromCharCode(10);

result = "> [!" + choice + "]" + nl + "> " //+ selection + nl;

return result;```
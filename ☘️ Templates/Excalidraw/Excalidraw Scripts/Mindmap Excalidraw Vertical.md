
function crawl(subtasks) {
  let size = subtasks.length > 0 ? 0 : 1; //if no children then a leaf with size 1
  for (let task of subtasks) {
    task["size"] = crawl(task.subtasks);
    size += task.size;
  }
  return size;
}

const tasks = dv.page("FamilyTree.md").file.tasks[0];
tasks["size"] = crawl(tasks.subtasks);

const width = 300;
const height = 150;
const ea = ExcalidrawAutomate;
ea.reset();

function buildMindmap(subtasks, depth, offset, parentObjectID) {
  if (subtasks.length == 0) return;
  let task;
  
  for (let i = 0; i < subtasks.length; i++) {
  task = subtasks[i]
  if (depth == 1) ea.style.strokeColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16).padStart(6,"0");
    task["objectID"] = ea.addText((task.size/2+offset)*width,depth*height,task.text,{box:true})
    ea.connectObjects(parentObjectID,"top",task.objectID,"bottom",{startArrowHead: 'arrow', endArrowHead: 'dot'});
    if (i >= 1) {
            ea.connectObjects(subtasks[i-1]['objectID'],"right",task.objectID,"left", {endArrowHead: 'none'});
    }

    buildMindmap(task.subtasks, depth-1,offset,task.objectID);
    offset += task.size/1.5;
  }
 
}

tasks["objectID"] = ea.addText(width*1.5,height*(tasks.size-1),tasks.text,{box:true, textAlign:"center"});    
buildMindmap(tasks.subtasks, 2, 0, tasks.objectID);

ea.createSVG().then((svg)=>dv.span(svg.outerHTML));

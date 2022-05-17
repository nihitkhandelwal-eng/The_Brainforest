<%*
  const ea = ExcalidrawAutomate;
  ea.reset();
  ea.style.angle = Math.PI/2; 
  ea.style.strokeWidth = 3.5;
  ea.addRect(-150,-50,450,300);
  ea.addText(-100,70,"Left to right");
  ea.addArrow([[-100,100],[100,100]]);

  ea.style.strokeColor = "red";
  await ea.addText(100,-30,"top to bottom",{width:200,textAlign:"center"});
  ea.addArrow([[200,0],[200,200]]);
  await ea.create({
    filename    :"My Drawing",
    foldername  :"myfolder/fordemo/",
    templatePath:"☘️ Templates/Excalidraw/Excalidraw Templates/Sketch 17, May, 16.17.excalidraw.md",
    onNewPane   :true});
%>
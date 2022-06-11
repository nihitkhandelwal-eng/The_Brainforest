<%*
  const defaultTitle = tp.date.now("HH'mm")+' '+tp.file.title;
  const title = await tp.system.prompt("Title of the drawing?", defaultTitle);
  const folder = 🌿 Spaces/Excalidraw;
  const transcludePath = (folder== '/' ? '' : folder + '/') + title;
  tR = '![['+transcludePath+']]';
  const ea = ExcalidrawAutomate;
  ea.reset();
  ea.setTheme(1); //set Theme to dark
  await ea.create({
    filename : title,
    foldername : folder,
    templatePath: '☘️ Templates/Excalidraw/Blank Slate Sketch.md', 
    onNewPane : true
  });
%>
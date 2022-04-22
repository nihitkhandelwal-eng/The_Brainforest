---
aliases:
tags: module
cards-deck: Default
cssclass:
---

###### Inline Metadata 

---

### Guiding Questions
- <%tp.file.cursor(0)%>

### Key Terms


<% await tp.file.move("/🌴 Academia/" + tp.file.title) %>

<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
    await tp.file.rename(`${title}`);
  } 
%>


---
tags:
aliases:
cssclass: 
---

#### List
````markdown
```dataview
list
```
````
This shows me all my notes in list

````markdown
```dataview
list
from #progress
```
````

````markdown
```dataview
list
from "Journal/Daily Notes"
```
````

###### to show all notes with links coming into a note
````markdown
```dataview
list
from [[Dataview Plugin]]
```
````

###### to show all notes with links going out from a note
````markdown
```dataview
list
from outgoing([[Test note for Dataview plugin]])
```
````

*Links created by dataview are not actual obsidian links, so they won't show up on the graph view & won't be picked up by other dataview queries*

###### combining sources; 3 basic logical operators can be used here
```md
list from "University" or "Work"
list from #A and #B
list from -#Personal

minus sign works as negation factor
```

###### String Concatenation

In the results of a `list`, you can include metadata fields joined with strings

```
list "File Path: " + file.path + " :)"
from #SN
```

###### Lists of Lists
A list can also display indented sub-lists of metadata
	for example if my notes have a metadata thing of authors, i can do this
	
````markdown
```dataview
list authors
```
````

#### Task
`Task` searches for all checkboxes `- [ ] ` in your vault
it returns a list of all tasks, grouped by their parent note

````markdown
```dataview
task
```
````


#### Table
format to use `Table {field 1}, {field 2}, ...`
I can sort this in whichever way I want to, even with the properties which I have not used to render this table, look in the example below

````markdown
```dataview
table author
sort file.name asc, intensity desc 
```
````

---


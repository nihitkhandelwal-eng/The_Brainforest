---
aliases: null
tags: on/obsidian,
---
https://blacksmithgu.github.io/obsidian-dataview/
- [ ] break this down into multiple notes
## Metadata
It is data/information about your data, that either is already in your data or manually added 

#### Examples of Metadata 💡

###### Photographs

-   Date & time ⏰
-   Location 🌍
-   People 🧑🤝🧑

My display picture has the following *inherent* metadata:

![SkepticMystic Mandala dp](https://i.imgur.com/UrwAWzI.jpg)

![Image metadata](https://i.imgur.com/dWmowLU.png)

But it could also be given other properties:

![Edit image metadata](https://i.imgur.com/YPT6Gzb.png)

###### Markdown Notes

We can also add metadata to **Markdown notes** using a language called *YAML*.

-   YAML is a **structured** way of adding *arbitrary* metadata to a file.

### YAML
It is a language used to add metadata to markdown notes
Links in YAML are not treated by obsidian as actual link
Obsidian as of now can recognize 3 metadata, `tags`, `aliases` & one more
But I can use absolutely anything, even emojis, so I can have a metadata field called intensity & the reply to that can be 🟥, 🟩
	Now this can be utilized by dataview to sort things or even create a table with these columns
	
### Adding YAML Metadata

1.  At the **top** of your note, add 3 dashes `---`
2.  Underneath that, you can start adding key-value pairs in the form `key: value`
3.  To finish the metadata block, close it off with 3 dashes again `---`.

In the photo example, this would look as follows:

```
---
dimensions: 1200x1200
bit depth: 24
title: "Mandala Display Picture"
rating: 5
---
```

#### YAML Lists

You can add more than one `value` to each `key` using *lists*.

There are two notations you can use:

##### 1\. Inline

```
foods: [apples, pears, oranges]
```

##### 2\. Indented

```
foods:
  - apples
  - pears
  - oranges
```

**Note the spacing!**



### Types of Metadata

```
number: 3.6
string: "Foo all the bars"
list:
  - 1
  - -2
  - 3.5
  - 1.61803

date:
  - 2021-04
  - "2021-04-09"
  - 2021-04-09T12:12:54

link: [[2021-04-09 Daily Note]]
```

### Implicit Metadata in all notes

| Property | Value | Type |
| --- | --- | --- |
| `file.name` | File **title** | `string` |
| `file.path` | Full file **path** | `string` |
| `file.link` | **Link** to the file | `link` |
| `file.size` | **Size** (in bytes) of the file | `number` |
| `file.ctime` | Date that the file was **created** | `date` |
| `file.mtime` | Date that the file was last **modified** | `date` |
| `file.day` | The **date** contained in the note title | `date` |
| `file.tags` | An `array` of all **tags** in the note. | `array` |

Subtags are broken down by each level, so `#Tag/1/A` will be stored in the array as `[#Tag, #Tag/1, #Tag/1/A]`


-   `file.name`: The file title (a string).
-   `file.folder`: The path of the folder this file belongs to.
-   `file.path`: The full file path (a string).
-   `file.link`: A link to the file (a link).
-   `file.size`: The size (in bytes) of the file (a number).
-   `file.ctime`: The date that the file was created (a date + time).
-   `file.cday`: The date that the file was created (just a date).
-   `file.mtime`: The date that the file was last modified (a date + time).
-   `file.mday`: The date that the file was last modified (just a date).
-   `file.tags`: An array of all unique tags in the note.
-   `file.etags`: An array of all explicit tags in the note; unlike `file.tags`, does not include subtags.
-   `file.inlinks`: An array of all incoming links to this file.
-   `file.outlinks`: An array of all outgoing links from this file.
-   `file.aliases`: An array of all aliases for the note.
-   `file.tasks`: An array of all tasks (I.e., `- [ ] blah blah blah`) in this file.

If the file has a date inside its title (of form `yyyy-mm-dd` or `yyyymmdd`), or has a `Date` field/inline field, it also has the following attributes:

-   `file.day`: An explicit date associated with the file.

## Dataview Types 
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


## Dataview Queries 

### `From`
- from = basically the filter for where you want your data from

### `Where`
After choosing *which* notes to use, you can narrow down the list further using a `where` block.  
This lets you use the various *comparison operators* on the metadata fields in your notes.

`>`, `>=`, `<`, `<=`, `=`, `!=`

`where {condition}`

- *where file.size > 1000*
- *where file.name = or where file.name != "november"*
- *where file.mtime >= date(today) - dur(1 day)*
- you can also create a list of notes which do not have a certain metadata field or have the field but it is empty, it is one & the same thing
- *where !author*

### `Sort`
You can use `sort` to define which order to list the results in, and which `field` to sort by:

`sort field asc/desc`

Give multiple fields to decide ties

`sort field1 asc/desc, field2 asc/desc, ...`

### `Flatten`

Use `flatten` to "unroll" lists into their own rows

```
table authors from #SN
flatten authors
```

### `Group by`

`Group by` lets do gather together results based on the value of a field.

You may group:

-   tasks by `completed`
-   games by `rating`
-   assignments by `intensity`

First, gather all the assignments:

`from #Uni/2021/Asg`

Then, group by `intensity`:

`group by intensity`

### `rows Object`

By grouping the notes, we've created a **new object**.

This is a **nested list** of all the assignments grouped by intensity.  
Something like:

```
[
[A1, A2, A6], // Green
[A3, A4], // Yellow
[A5, A7], // Red
];
```

To access this new list, we use the `rows` object.

-   Get the file name of every note in the array: `rows.file.name`
-   Get the due date of every note: `rows.dueDate`

```
table intensity, rows.title
from #Uni/2021/Asg
group by intensity
```

##### Group by tags

```
table rows.file.tags, rows.file.link
from #Fi/Yoga
group by file.tags
```

###### Limitations

It will only consider two notes to be in the same group if they have **exactly the same tags**.

-   So even if two notes have `#Note/Author`, if the one has a tag that the other doesn't, they won't be grouped together.


## Dataview Functions 
### `Contains()`

Used to see if:

-   a `string` *contains* a substring
-   a `list` *contains* a value

`where contains(file.name, "Daily Note")`  
`where contains(authors, "Robert Lamb")`

### `Length()`

Returns the *length* of a `string` or `list`

`where length(file.name) > 10`

### `Sum()`

Returns the *sum* of the numbers in a `list`

`where sum(minutesStudied) < 60`


### Use Cases

###### Untagged Notes 
````markdown
```dataview
list 
where length(file.tags) = 0
```
````

###### Birthdays
If you track `#People` in separate notes and add their Birthday as a dataview property, you could compile a list of everyone whose birthday is today like this:

```
list from #People
where Dates.Birthday = "2022-03-16"
```



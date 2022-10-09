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

---
[[Dataview Plugin → My Notes]]
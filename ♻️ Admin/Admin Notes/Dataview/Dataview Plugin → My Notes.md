---
aliases: 
tags: 
cssclass: 
---


[Official Documentation](https://blacksmithgu.github.io/obsidian-dataview/)
See [[Metadata]] & [[Dataview Types]]
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

##### Group by tags

```
table rows.file.tags, rows.file.link
from #Fi/Yoga
group by file.tags
```

###### Limitations

It will only consider two notes to be in the same group if they have **exactly the same tags**.

-   So even if two notes have `#Note/Author`, if the one has a tag that the other doesn't, they won't be grouped together.
- 
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



---
aliases: 
tags: type/🕸web_clipping
url: https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Guide/Callouts.md
---
---

> ###### Description
> Theme designed with readability and customizability in mind. Change it easily to your liking with the Style Settings plugin installed. - Obsidian--ITS-Theme/Callouts.md at main · SlRvb/Obsidian--IT...

###### Metadata
date:: 25-Apr-22
author:: 

---

## Article

[Open in github.dev](https://github.dev/) [Open in a new github.dev tab](https://github.dev/)

[Permalink](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/2ac85a755f84618739cebed2039545ce20d6beac/Guide/Callouts.md)

## Callouts

[Get Callout Snippet](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/S%20-%20Callouts.css)

| Type | Description |
| --- | --- |
| `[!infobox]` | Wikipedia-like infoboxes |
| `[!captions]` | Displays text around image in the style of a caption |
| `[!kanban]` | Displays a (functionally limited) kanban board: [How to](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Guide/Callouts#Kanban) |
| `[!grid]` | Best type of image grid for internally linked images |
| `[!masonry]` | Best type of image grid for externally linked images |
| `[!recite]` | A D&D styled popout |
| `[!metadata]` | Styled callout that colors \*\*bold\*\* words, table headers, and inline dataview keys blue |
| `[!cards]` | Style images and dataview tables like notion's gallery view: [How to](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Guide/Callouts#Cards) |
| `[!table]` | Prevent table from wrapping |

#### Adjustments

```
> [!callout-type|adjustment adjustment2]

> [!kanban|nt]
> [!kanban|no-title]
> [!caption|left]
```

| Abbr. | Full Title | Description |
| --- | --- | --- |
| `no-t` | `no-title` | Hides callout title |
| `n-th` | `no-table-header` | Hides table header in callouts |
| `2`, `4` |  | Change number of columns for \[\[`#Cards\]\] |

> **Callouts uses the same [parameters](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Guide/Image-Positions#sizing) as the images for resizing (width-wise) and [moving it](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Guide/Image-Positions#leftrightcenter).**

---

> **Yaml css classes** to style different on per page basis

| cssclass | Description |
| --- | --- |
| `alt-co` | Alternate Callout Styling, use callout color as background color |
| `co-ttl-ctr` | Center callout titles |

## Formatting

## Infoboxes

```markdown
> [!infobox]+
> # Name
> ![[Image.png|cover hsmall]]
> ###### Stats
> Type |  Stat |
> ---|---|
> Test | Testing |
> Test | Testing |
> Test | Testing |
> Test | Testing |
```

```lisp
> [!infobox|left]+
> # Name
> ![[Image.png|cover hsmall]]
> ###### Stats
> Type |  Stat |
> ---|---|
> Test | Testing |
> Test | Testing |
> Test | Testing |
> Test | Testing |
```

## Kanban

```lisp
> [!kanban]+
> - [[Link|Lane 1 Title]]
> - ![[Image.png]]
> - [[Link|Card]]
> - [[Link|Lane 2 Title]]
> ![[Image without background card styling.png]]
> - [[Link|Card]]
```

## Cards

> Might want to install the [Image Adjustments](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Guide/Image-Positions) snippet to control the images sizing

-   Blank Line `>` separated
-   `**Bold**` syntax will center text and and a background color (no background color for dataview tables)

**External and Internal Images:**

```lisp
> [!cards]
> **[[Link]]**
> ![Image link|sban htiny ctr](https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200)
> 
> **[[Link]]**
> ![[Image Link.png|sban htiny ctr]]
```

**Add More Columns:**

```lisp
> [!cards|4]
> **[[Link]]**
> ![Image link|sban htiny ctr](https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200)
> 
> **[[Link]]**
> ![[Image Link.png|sban htiny ctr]]
> 
> **[[Link]]**
> ![Image link|sban htiny ctr](https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200)
> 
> **[[Link]]**
> ![[Image Link.png|sban htiny ctr]]
```

**Style Dataview Table:**

```lisp
> [!cards|dataview]
> ```dataview
> TABLE WITHOUT ID
> "![|sban cover hmicro](" + image + ")" as Image,
> "**"+ file.link + "**" AS "Column Name",
> FROM "folder"
> SORT file.name
> LIMIT 10
> ```
```

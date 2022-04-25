---
aliases: 
tags: type/web_clipping
url: https://publish.obsidian.md/
---
---

###### Metadata
date:: 25-Apr-22
author:: 

---

## Article

Minimal Documentation

Text labels for primary navigation

Helper classes

```
cssclass: table-col-1-150, table-full
```

## How to use helper classes

Helper classes are added to the YAML frontmatter, using the special `cssClass` key. For example, at the top of your note:

```
---
cssClass: img-grid
---
```

To use multiple classes, you can separate them with a comma, or use the following syntax:

```
---
cssClass:
- cards
- cards-1-1
---
```

## Image grids

| Class | Description |
| --- | --- |
| `img-grid` | Turns consecutive images into columns. To make a new row, add an extra line break between images. |

## Line width control for tables, images and iframes

| Class | Description |
| --- | --- |
| `table-100`, `img-100`, `iframe-100` | Fill 100% of the pane width |
| `table-max`, `img-max`, `iframe-max` | Fill the max line width |
| `table-wide`, `img-wide`, `iframe-wide` | Fill the wide line width |

## Embeds and transclusions

Controls the styling of [embeds](https://minimal.guide/Block+types/Embeds)

| Class | Description |
| --- | --- |
| `embed-strict` | Transclusions appear seamlessly in the flow of text |

## Tables

Controls the row and column styling of [tables](https://minimal.guide/Block+types/Tables)

| Class | Description |
| --- | --- |
| `table-nowrap` | Disable line wrapping in table cells |
| `table-numbers` | Add row numbers to tables |
| `table-tabular` | Use tabular figures in tables |
| `table-small` | Use small font size in tables |
| `table-tiny` | Use tiny font size in tables |
| `table-lines` | Add borders around all table cells |
| `row-lines` | Add borders between table rows |
| `col-lines` | Add borders between table columns |
| `row-alt` | Add striped background to alternating table rows |
| `col-alt` | Add striped background to alternating table columns |

## Cards

Helper class for [Cards](https://minimal.guide/Block+types/Cards) feature

| Class | Description |
| --- | --- |
| `cards` (required) | Set all Dataview tables to card layout |
| `cards-align-bottom` | Align the last element of a card to the bottom |
| `cards-cover` | Images are resized to fill the defined space |
| `cards-16-9` | Fit images in cards to 16:9 ratio |
| `cards-1-1` | Fit images in cards to 1:1 ratio (square) |
| `cards-2-1` | Fit images in cards to 2:1 ratio |
| `cards-2-3` | Fit images in cards to 2:3 ratio |
| `cards-cols-1` to `8` | Force a specific number of columns (from 1 to 8) |

Table of contents

How to use helper classes

Line width control for tables, images and iframes

---
aliases: 
tags: type/web_clipping
url: https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Guide/Image-Positions.md
---
---

> ###### Description
> Theme designed with readability and customizability in mind. Change it easily to your liking with the Style Settings plugin installed. - Obsidian--ITS-Theme/Image-Positions.md at main · SlRvb/Obsid...

###### Metadata
date:: 25-Apr-22
author:: 

---

## Article

[Open in github.dev](https://github.dev/) [Open in a new github.dev tab](https://github.dev/)

[Permalink](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/2ac85a755f84618739cebed2039545ce20d6beac/Guide/Image-Positions.md)

## Image Positions

> Move/position and re-size the images in notes

[Download Image Adjusment Snippet](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/S%20-%20Images%20Adjustments.css)

**⚠ Note:**

-   Obsidian internal images `![[` will change immediately, but for external images `![]()`, the page needs to be reopened to see the changes.
-   Might not be 100% compatible with [Lithou's Image Flags snippet.](https://github.com/Lithou/Sandbox/blob/main/.obsidian/snippets/pub-Image%20Flags.css)
-   Image grid doesn't quite work with external images `[]()` as nicely as internally linked ones.

## Syntax

```lisp
![[Internal Image.png|attribute attribute2]]
![[Internal Image.png|sban cover hs-med]]

![External Image|attribute attribute2](.png)
![External Image|sban cover hs-med](.png)
```

## Attributes

### Clear

| Attribute | Description |
| --- | --- |
| `clear` | `clear` will allow that image to sit below another image  
If it's on the same side instead of sitting in the middle of the page. |

### Image Grid

| Attribute | Description |
| --- | --- |
| `grid` | Display image side-by-side in a grid |

[![](https://github.com/SlRvb/Obsidian--ITS-Theme/raw/main/Images/Image_Adjustments-Image-Grids.png)](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Images/Image_Adjustments-Image-Grids.png)

### Cover (Mostly for Customizable Version)

| Attribute | Description |
| --- | --- |
| `cover` | A resized image will maintain aspect ratio and avoid stretching. |

### Sizing (Mostly for Customizable Version)

| Attribute | Description |
| --- | --- |
| `loc|sban|200` | Place the `|<numbers>` sizing at the *end* of the text and it will shrink the image to that size. |

## Simplified Version

### Left/Right/Center

| Attribute | Description |
| --- | --- |
| `left` | `left` will move the image to the left. |
| `right` | `right` will move the image to the right. |
| `center` | `center` will move the image to the center. |

[![](https://github.com/SlRvb/Obsidian--ITS-Theme/raw/main/Images/Image_Adjustments-Simple-Positions.png)](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Images/Image_Adjustments-Simple-Positions.png)

### Types

[![](https://github.com/SlRvb/Obsidian--ITS-Theme/raw/main/Images/Image_Adjustments-Simple-Sizing.png)](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Images/Image_Adjustments-Simple-Sizing.png)

#### Banner

| Attribute | Description |
| --- | --- |
| `banner` | `banner` will crop the image height-wise to 150px while setting the width to cover the entire page. |
| `banner+small` | `banner+small` will crop the image height-wise to 100px while setting the width to cover the entire page. |
| `banner+tall` | `banner+tall` will crop the image height-wise to 500px while setting the width to cover the entire page. |

#### Portrait

| Attribute | Description |
| --- | --- |
| `portrait` | `portrait` will crop the image width-wise to 40% while setting the height to a standard of 400px. |
| `portrait+small` | `portrait+small` will crop the image width-wise to 20% while setting the height to a standard of 200px. |
| `portrait+tall` | `portrait+tall` will crop the image width-wise to 50% while setting the height to a standard of 500px. |

#### Profile

| Attribute | Description |
| --- | --- |
| `profile` | `profile` will round the borders of the image to create a round image and size it to 100px. |
| `profile+medium` | `profile+medium` will round the borders of the image to create a round image and resize it to 250px. |

## Customizable Version

### Left/Right

| Attribute | Description |
| --- | --- |
| `locl` | Move the image to the left. |
| `locr` | Move the image to the right. |
| `ctr` | Move image to the center. |

### Inner Image Position

[![](https://github.com/SlRvb/Obsidian--ITS-Theme/raw/main/Images/Image_Adjustments-Custom--Inner-Position-Precise.png)](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Images/Image_Adjustments-Custom--Inner-Position-Precise.png)

| Attribute | Description |
| --- | --- |
| `p+l` | Move inside of the image to the left. |
| `p+r` | Move inside of the image to the right. |
| `p+t` | Move inside of the image to the top. |
| `p+b` | Move inside of the image to the bottom. |
| `p+c` | Move inside of the image to the center. |

> These will inch the images around if the above syntax isn't enough.

| Attribute | Description |
| --- | --- |
| `p+cr` | Move the inside of the image to the center right. |
| `p+cl` | Move the inside of the image to the center left. |
|  |  |
| `p+ct` | Move the inside of the image to the center top of the image. |
| `p+cct` | Move the inside of the image to the center top, slightly higher than `p+ct` |
| `p+tc` | Move the inside of the image to the center top, slightly lower than `pt` |
| `p+tcc` | Move the inside of the image to the center top, slightly lower than `p+tc` |
|  |  |
| `p+cb` | Move the inside of the image to the center bottom of the image. |
| `p+ccb` | Move the inside of the image to the center bottom, slightly lower than `p+cb` |
| `p+bc` | Move the inside of the image to the center bottom, slightly higher than `pb` |
| `p+bcc` | Move the inside of the image to the center bottom, slightly higher than `p+bc` |

### Sizing

[![](https://github.com/SlRvb/Obsidian--ITS-Theme/raw/main/Images/Image_Adjustments-Custom-Sizing.png)](https://github.com/SlRvb/Obsidian--ITS-Theme/blob/main/Images/Image_Adjustments-Custom-Sizing.png)

| Attributes | Resize Image to: |
| --- | --- |
| `htiny` | 100px in height. |
| `hsmall` | 200px in height. |
| `hs-med` | 300px in height. |
| `hm-sm` | 400px in height. |
| `hmed` | 500px in height. |
| `hm-tl` | 600px in height. |
| `htall` | 700px in height. |
| `hfull` | Expand to the full height of the image or line |
|  |  |
| `wtiny` | 100px in width. |
| `wsmall` | 200px in width. |
| `ws-med` | 300px in width. |
| `wm-sm` | 400px in width. |
| `wmed` | 500px in width. |
| `wm-tl` | 600px in width. |
| `wtall` | 700px in width. |
| `wfull` | Expand to the full height of the image or line |

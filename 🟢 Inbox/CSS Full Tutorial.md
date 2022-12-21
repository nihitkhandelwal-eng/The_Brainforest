---
aliases:
tags:
cssclass: 
---

### Introduction to CSS
Like HTML, CSS is not a programming language. It's not a markup language either. **CSS is a style sheet language.** CSS is what you use to selectively style HTML elements. 

For example, this CSS selects paragraph text, setting the color to red:
```css
p {
  color: red;
}
```

**Cascading Style Sheets** (**CSS**) is a [stylesheet](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet) language used to describe the presentation of a document written in [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction) (including XML dialects such as [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) or [XHTML](https://developer.mozilla.org/en-US/docs/Glossary/XHTML)). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is among the core languages of the **open web** and is standardized across Web browsers according to [W3C specifications](https://www.w3.org/Style/CSS/#specs)

- Difference b/w HTML & CSS
	- Consider html as the foundation and structure so if you think about a new building or a house that is being built and you see that structure go up that is the foundation that's everything that holds it together.
	- However the css is the paint and the carpet and the wallpaper or anything any decorations anything that makes it look good.

### Anatomy of a CSS Ruleset
![[Pasted image 20221221153047.png|700]]
### Applying CSS to our Document
- There are three different ways to apply css to our document there is 
	- [[#External Style Sheet|External style sheet]]  
	- [[#Internal Style Sheet|Internal Style Sheet]]
	- We could apply [[#In-Line CSS|css inline]] with an element

###### External Style Sheet
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <p>I'm learning CSS!</p>
</body>
</html>
```

###### Internal Style Sheet
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
        p {
            color: limegreen;
        }
    </style>
</head>
<body>
    <p>I'm learning CSS!</p>
</body>
</html>
```

###### In-Line CSS
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <p style="color: blue">I'm learning CSS!</p>
</body>
</html>
```

##### Which style takes precedence?
- Internal v/s External → No one, it is just interpreted as another style sheet. The only difference is the cascade or the order in which they're read, so it reads the style sheet from top to bottom, bottom is considered as the latest one.
- Inline CSS → It takes precedence because it is specific.
- But because we want separation of our concerns, so the best & the most common way to use CSS is via external style sheet. 
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
The whole structure is called a **ruleset**. (The term _ruleset_ is often referred to as just _rule_.)

**Selector**
This is the HTML element name at the start of the ruleset. It defines the element(s) to be styled (in this example, [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) elements). To style a different element, change the selector.

**Declaration**
This is a single rule like `color: red;`. It specifies which of the element's **properties** you want to style.

**Properties**
These are ways in which you can style an HTML element. (In this example, `color` is a property of the [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) elements.) In CSS, you choose which properties you want to affect in the rule.

**Property value**
To the right of the property—after the colon—there is the **property value**. This chooses one out of many possible appearances for a given property. (For example, there are many `color` values in addition to `red`.)

*Note the other important parts of the syntax:*
-   Apart from the selector, each ruleset must be wrapped in curly braces. (`{}`)
-   Within each declaration, you must use a colon (`:`) to separate the property from its value or values.
-   Within each ruleset, you must use a semicolon (`;`) to separate each declaration from the next one.


To **modify multiple property values in one ruleset**, write them separated by semicolons, like this:
```CSS
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

You can also **select multiple elements and apply a single ruleset to all of them**. Separate multiple selectors by commas. 
```CSS
p,
li,
h1 {
  color: red;
}
```


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
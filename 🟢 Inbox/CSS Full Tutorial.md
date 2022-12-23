---
aliases:
tags:
cssclass: 
---

### Introduction to CSS
- Like HTML, CSS is not a programming language. It's not a markup language either. **CSS is a style sheet language.** CSS is what you use to selectively style HTML elements. 
- CSS describes how HTML elements should be displayed.
- CSS saves a lot of work. It can control the layout of multiple web pages all at once

For example, this CSS selects paragraph text, setting the color to red:
```css
p {
  color: red;
}
```

**Cascading Style Sheets** (**CSS**) is a [stylesheet](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet) language used to describe the presentation of a document written in [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) or [XML](https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction) (including XML dialects such as [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG), [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML) or [XHTML](https://developer.mozilla.org/en-US/docs/Glossary/XHTML)). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.

CSS is among the core languages of the **open web** and is standardized across Web browsers according to [W3C specifications](https://www.w3.org/Style/CSS/#specs)

### CSS Solved A Problem
- HTML was NEVER intended to contain tags for formatting a web page!
- HTML was created to describe the content of a web page.

When tags like `<font>`, and color attributes were added to the HTML 3.2 specification, it started a nightmare for web developers. Development of large websites, where fonts and color information were added to every single page, became a long and expensive process.

To solve this problem, the **World Wide Web Consortium (W3C) created CSS.**
CSS removed the style formatting from the HTML page!

- Difference b/w HTML & CSS
	- Consider html as the foundation and structure so if you think about a new building or a house that is being built and you see that structure go up that is the foundation that's everything that holds it together.
	- However the css is the paint and the carpet and the wallpaper or anything any decorations anything that makes it look good.

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
	
### Anatomy of a CSS Ruleset
![[Pasted image 20221221153047.png|700]]
The whole structure is called a **ruleset**. (The term _ruleset_ is often referred to as just _rule_.)

- The selector points to the HTML element you want to style.
- The declaration block contains one or more declarations separated by semicolons.
- Each declaration includes a CSS property name and a value, separated by a colon.
- Multiple CSS declarations are separated with semicolons, and declaration blocks are surrounded by curly braces.

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


###### Multiple Property Values in one rule
To **modify multiple property values in one ruleset**, write them separated by semicolons, like this:
```CSS
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

###### Selecting Multiple Elements For 1 Ruleset
You can also **select multiple elements and apply a single ruleset to all of them**. Separate multiple selectors by commas. 
```CSS
h1, h2 {
  color: red;
}
```

###### Inheritance 
If we remove the comma, now our selector is only looking for h2 nested in h1 i.e. h2's that exist inside of an h1
```CSS
h1 h2 {
  color: red;
}
```

It may be useful if you find the use case
```CSS
p span{
    text-transform: uppercase;
}
```

### CSS Selector
There are three levels of selectors that are the most common.

1. Element Selector
	- Element selectors select all of the elements of that type so just specifying p for the paragraph element selects all paragraph elements
2. Classes
	- Class starts with a period, before you write the name of the class, the name can be anything, as long as it makes sense to you & others in your team
	- Classes are used to create styles, that you can apply throughout your page & then they can be re-used with more than one element.
	- These are more specific, hence they overrule settings set by element selectors
3. ID Selector
	- Most specific
	- They should be unique
	- It is not good practice to use ID in your CSS 
		- Classes are most commonly used
		- Sometimes element selectors
		- Rarely, if ever use ID in your CSS
	- They do have other uses, like in HTML & Java Script
4. Universal Selector
	- It selects everything on the page
	- It is primarity used in CSS reset or to set constants

Universal Selector
```CSS
* {
    font-family: monospace;
    color: aqua;
}
```
### Cascading & Inheritance
- Since CSS is Cascading Style Sheet, i.e it works like a waterfall, from top to down.
- Whichever ruleset it reads last, is what it will follow.
- Specificity can override this & that's where classes come in.
	- Classes are more specific than elements
	- So, even if classes are mentioned earlier than element ruleset, classes will override.

> [!note]
> If you are not able to figure out the error in your code, just inspect it on the browser & it will tell you which class is over-riding what

Inheritance is where one element inherits the settings/properties from it's parent element.

Like in the case below, body element is parent to all the other elements
```CSS
body {
    font-size: 22px;
}

p {
    color: red;
}
```

Typically anything related to font or typography is inherited & that can include things like, color, line-height, alignment etc.
But properties not related to those things are not inherited, such as border.
Also, form elements do not inherit properties (eg: button, textarea, input, select)

> [!caution]
> In case of the universal selector, it's not inheritance, it's actually selecting all elements

```CSS
* {
    color: green;
    border: 1px dashed red;
}
```
 This will apply border to every element

Inheritance keeps us from writing the same code again & again, it **keeps our code DRY (Don't repeat yourself)**

So, a good practice to keep your code DRY is to use inheritance with either the body element or the HTML element, which then also allows you to specify different properites for body element. Main element is also a good way to inherit.

```CSS
html{
    font-size: 22px;
}
```

```css
main{
    font-family: monospace;
}
```

#### Important Flag
- Sometime something's not working out and you're wanting to figure out why it's not working out or you just can't figure it out and you get frustrated.
- There is something you can do but it is recommended that you do not use it & it's the nuclear option.
- It's to put an exclamation mark and put important flag & it will override everything else.
- When you see it in code it's kind of an indication that it's not well organized or it's sloppy there's only a few reasons you would really want to use this
- **Don't use it** 
- You need to learn how to organize your code and apply it correctly and only after you've learned css well enough to understand when to use that important flag that's the only time you should use it 
- You should really not give up the struggle you will learn more by struggling and learning how to apply these selectors in the proper way without using that important flag.

```css
p{
    color: purple!important;
}

p{
    color: red;
}
```


#### Specificity Calculator
- [Specificity calculator](https://specificity.keegan.st/) will certainly help you understand why one rule is being applied or why one selector is being applied over another.

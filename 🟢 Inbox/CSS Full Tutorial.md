---
aliases:
tags:
cssclass: table-small
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
- External styles are defined within the `<link>` element, inside the `<head>` section of an HTML page

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
- An internal style sheet may be used if one single HTML page has a unique style.
- The internal style is defined inside the `<style>` element, inside the head section.

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
- An inline style may be used to apply a unique style for a single element.
- To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

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
- What style will be used when there is more than one style specified for an HTML element?
- All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

So, an inline style has the highest priority, and will override external and internal styles and browser defaults.

- Internal v/s External → No one, it is just interpreted as another style sheet. The only difference is the cascade or the order in which they're read, so it reads the style sheet from top to bottom, bottom is considered as the latest one.
- Inline CSS → It takes precedence because it is specific.
- But because we want separation of our concerns, so the best & the most common way to use CSS is via external style sheet. 

### Anatomy of a CSS Ruleset
![[Pasted image 20221221153047.png|700]]
The whole structure is called a **ruleset**. (The term _ruleset_ is often referred to as just _rule_.)


![[img_selector.gif]]

**Selector**
This is the HTML element name at the start of the ruleset. It defines the element(s) to be styled (in this example, [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) elements). To style a different element, change the selector.

**Declaration**
This is a single rule like `color: red;`. It specifies which of the element's **properties** you want to style.

**Properties**
These are ways in which you can style an HTML element. (In this example, `color` is a property of the [`<p>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p) elements.) In CSS, you choose which properties you want to affect in the rule.

**Property value**
To the right of the property—after the colon—there is the **property value**. This chooses one out of many possible appearances for a given property. (For example, there are many `color` values in addition to `red`.)

*Note the other important parts of the syntax:*
- The selector points to the HTML element you want to style.
- Apart from the selector, each ruleset must be wrapped in curly braces. (`{}`)
- Within each declaration, you must use a colon (`:`) to separate the property from its value or values.
- Within each ruleset, you must use a semicolon (`;`) to separate each declaration from the next one.

> [!note]
> Do not add a space between the property value and the unit:  
> Incorrect (space): `margin-left: 20 px;`  
> Correct (nospace): `margin-left: 20px;`


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
- You can also **select multiple elements and apply a single ruleset to all of them**. Separate multiple selectors by commas. 
```CSS
h1, h2 {
  color: red;
}
```

- If we remove the comma, now our selector is only looking for h2 nested in h1 i.e. h2's that exist inside of an h1
```CSS
h1 h2 {
  color: red;
}
```

- It may be useful if you find the use case
- In this example only `<p>` elements with class="center" will be red and center-aligned

```CSS
p.center {
    text-align: center;
    color: red;
}
```

- In this example the `<p>` element will be styled according to class="center" and to class="large"
```css
<p class="center large">This paragraph refers to two classes.</p>
```

### CSS Selector
A CSS selector selects the HTML element(s) you want to style.
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

| Selector name                                              | What does it select                                                                                              | Example                                                                              |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Element selector (sometimes called a tag or type selector) | All HTML elements of the specified type.                                                                         | `p`   selects `<p>`                                                                  |
| ID selector                                                | The element on the page with the specified ID. On a given HTML page, each id value should be unique.             | `#my-id`  selects `<p id="my-id">` or `<a id="my-id">`                               |
| Class selector                                             | The element(s) on the page with the specified class. Multiple instances of the same class can appear on a page.  | `.my-class`  selects `<p class="my-class">` and `<a class="my-class">`               |
| Attribute selector                                         | The element(s) on the page with the specified attribute.                                                         | `img[src]`  selects `<img src="myimage.png">` but not `<img>`                        |
| Pseudo-class selector                                      | The specified element(s), but only when in the specified state. (For example, when a cursor hovers over a link.) | `a:hover`  selects `<a>`, but only when the mouse pointer is hovering over the link. |
 
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

### Comments
- Comments are used to explain the code, and may help when you edit the source code at a later date.
- Comments are ignored by browsers.
- You can add comments wherever you want in the code
- Comments can also span multiple lines

```css
p {
    color: red; /* fdf
    fdf
     */
    font: 100;
}
```
### Colors
- Colors are specified using predefined color names, RGB, HEX, HSL, RGBA, HSLA values.
	- CSS/HTML support [140 standard color names](https://www.w3schools.com/colors/colors_names.asp).
	- RGB → Red, Green, Blue
		- RGBA → RGB + Alpha Channel
	- HEX → Hexadecimal Color
	- HSL → Hue, Saturation & Lightness
		- HSLA → HSL + Alpha Channel
	- RGB & HEX Codes are most used 
- You can set colors for
	- Background
	- Text
	- Borders
- Like every typography type property, color will also follow the rules of inheritance & so, you can override certain values by specifying a specific element & at the same time, set color value in the body itself.

```css
p{
    color: rgb(12, 25, 200);
    color: rgba(148, 211, 131, 0.699);
    color: #FF00FF;
    color: hsla(0, 39%, 47%, 0.658);
}
```

![[brave_FOIA72EgF0.png]]

#### RGB & HEX
- An RGB color value represents RED, GREEN, and BLUE light sources.
- RGB has values ranging from 0-255
- Shades of gray are often defined using equal values for all the 3 light sources.
	- rgb(45, 45, 45) 
	- rgb(78, 78, 78)
	- `#3c3c3c`
	- `#f9f9f9`
- HEX goes from 0 to 9 and then also uses letters 'a through f'
	- 0 just like we learned with rgb is the absence of color so six zeros is once again black.
	- The highest value being the letter f that is full red, green and blue i.e. white.
	- So, `#FF0000` is red, likewise `#00FF00` is green & `#0000FF` is blue 
	- Shorthand for R,G & B would be `#F00`, `#0F0` & `#00F`
		-  For shorthands, they need to be a pair (`#808080` cannot be written as shorthand)
		- The 3-digit hex code can only be used when both the values (RR, GG, and BB) are the same for each component.
- RGBA stands for Red, green, blue, alpha channel
	- This alpha channel guides the transparency
	- Alpha channel or 'a' has a value from 0 to 1 
		- 1 would be like as if alpha channel was not there, that would be the full color that you specify.
		- 0 would make it completely transparent
		- We could put it at anywhere b/w 0 to 1 & it will render accordingly

#### HSL
- Lightness if at 0%, means black, if at 100%, means white.
- Saturation basically is the intensity of a color

#### Accessibility & Legibility

```cardlink
url: https://coolors.co/
title: "Coolors - The super fast color palettes generator!"
description: "Generate or browse beautiful color combinations for your designs."
host: coolors.co
favicon: /assets/img/favicon.png
image: https://coolors.co/assets/img/og_image.png
```

- Legibility and accessibility are very important considerations as you pick colors for your web page
- So, to have good color contrast & better color pallette's, here are some resources
	- [Coolors.co](https://coolors.co/contrast-checker) →  [Check Contrast Ratio](https://coolors.co/contrast-checker)
	- [Web Accessibility In Mind](https://webaim.org/)

### Units & Sizes
> [!note]
> You'll also see CSS value types referred to as _data types_. The terms are basically interchangeable — when you see something in CSS referred to as a data type, it is really just a fancy way of saying value type. The term _value_ refers to any particular expression supported by a value type that you choose to use.

> [!note]
> Yes, CSS value types tend to be denoted using angle brackets to differentiate them from CSS properties (e.g., the `color` property, versus the `<color>` data type). You might get confused between CSS data types and HTML elements too, as they both use angle brackets, but this is unlikely — they are used in very different contexts. 

There are two types of lengths used in CSS — relative and absolute.

#### Absolute length units
- The following are all **absolute** length units — they are not relative to anything else, and are generally considered to always be the same size.
- Most of these units are more useful when used for print, rather than screen output. For example, we don't typically use `cm` (centimeters) on screen. The only value that you will commonly use is `px` (pixels).

| Unit | Name                | Equivalent to            |
|------|---------------------|--------------------------|
| cm   | Centimeters         | 1cm = 37.8px = 25.2/64in |
| mm   | Millimeters         | 1mm = 1/10th of 1cm      |
| Q    | Quarter-millimeters | 1Q = 1/40th of 1cm       |
| in   | Inches              | 1in = 2.54cm = 96px      |
| pc   | Picas               | 1pc = 1/6th of 1in       |
| pt   | Points              | 1pt = 1/72nd of 1in      |
| px   | Pixels              | 1px = 1/96th of 1in      |



---
aliases:
tags:
cssclass: 
---

HTML stands for **hypertext markup language** and it is a standard markup language for creating web pages and web applications.
It is used to describe the structure of the web pages using a process called markup. 

url:: https://www.skillshare.com/en/classes/Hand-Code-Your-First-Website-HTML-CSS-Basics/1575146775/transcripts

- It is a simple coding language used to display information
- It structures the content of a webpage in a bunch of boxes, in most web pages, there are boxes inside the boxes, inside the boxes, the box that contains all the boxes is our browser window.
	- Inside each box there can either be more boxes, text, a combination of boxes, and text, or nothing at all.
	- Based on the name of the box, the browser will display it and its contents differently to other types of boxes, there are boxes for lists, paragraphs, headings, footings, images, links, and plenty more
	-  By default, most boxes are as high as their content, and as wide as the box there inside of
	- Most boxes that as far to the left and as far to the top as they can

### HTML Element
- How do we code an HTML box? 
	- Well, *most HTML boxes have an opening tag and a closing tag.*
		![[Opening & Closing Tags.png|right|300]]
	- An opening tag is comprised of a less than symbol, the tag name and a greater than symbol.
	- A closing tag is comprised of a less than symbol, a forward slash, the tag name, and a greater than symbol. 
	- In between these two tags, you can put another HTML box, some texts, a combination of boxes and text, or leave it blank.
	- The whole HTML box then is made up of the opening tag, the contents, and the closing tag, and this is all called **an HTML element.**
	- By default, **a browser will display HTML elements, from the top of the document towards the bottom**, just as they are in your HTML file.

### HTML Attributes
- Attributes are secret bits and pieces that give the browser more information about an HTML element, like how to display it, and what functionality to add. 
- We write attributes in the opening tag of an HTML element, we use attributes to style elements to tell the browser where to go when you click on a link, what file an image element should display, and plenty more. 
- An attribute is made up of a name, an equal symbol, and a value, which is wrapped in single or double quotes.

### What is URL?
- We give the browser a web address of the file we wanted to access. Now, the proper name or the correct name for web address is U-R-L, which stands for Universal Resource Locator.
- I like to think of it as a set of directions we can give to the browser about where to find a file. Now, there are two ways of doing this. One is with an absolute URL and two is with a relative URL
- Now, what are these relative path components? Let's get into that now. The first one is a slash. If we begin with a slash, it tells the browser to start at the top level folder or base URL of the current domain. This can be useful if you are a few folders deep and want to access a file close to the top level folder.
- The second relative path components is dot slash. When we use this, it explicitly tells the browser to use the current folder. The browser does this by default, so I hardly ever use dot slash.
- The next path components is dot, dot slash We use this to tell the browser to go up one folder level. I use this all the time, it's pretty common.
- The final path components is a folder name followed by a slash.
- This directs the browser into a folder with that name. This is super common.
- When do we use absolute URLs and when do we use relative URLs? You don't have to use a relative URL for anything at all, but they're often much quicker to write and a lot shorter, which makes your code a lot easier to read and write.
- I normally use relative URLs when the file is located on the same domain, especially if it's only one or two folders away. If you want the browser to access a file on another server or domain, you will have to use an absolute URL. For example, if you want to load a CSS file from Google fonts or navigate to an HTML file on another site, you'll need to use an absolute URL. If you have a choice between using a relative URL and an absolute URL, ask yourself which one is going to be easier for me and my team to read and write & which one is going to cause fewer bugs and fewer issues. Those are two really important factors to consider

### CSS
#### Styling
- So when you do in-line styling and rule set styling, they combine, they don't over write each other unless there's a conflict. When there's a conflict, remember that the more specific style will take precedence.
- Now, I can clearly see what's going on. It's way, way better. Now, when I mentioned conflicts, I was talking about inline styling verses rule set styling. But what happens if there's a conflict within rule set styling? If I write another H_2 here and I set a color of green, what's going to happen? Let's save this and find out. I'll refresh here, you'll see that the font size is still the same, but it's now green. What's happened is that if there are two styles that have the same specificity, then the one that was written last takes precedence.

#### Class Attributes
- But now, what if we want some of these elements to be different? One way to make one or more elements difference is by giving an elements a class attributes, and then styling elements with that class differently.
- If we go to this H1 in the middle and give it a class of big, and we then copy and paste this style onto this H_2 and the last H_2, we save this, we go back to Chrome, we refresh. Nothing's happened. So the class of big doesn't actually do anything. What we need to do is actually write some styles for this class. Let's go back to Sublime Text and just beneath this H_2, we're going to write our selector for all elements with a class of big.
	- The way we do this is by putting a period and then putting the class name. What this means is that we're saying all elements with a class of big, I declare that you should, and what are we going to do? Well, let's set the font size to something like 60 pixels.

#### Span Element
- Inside of my first H_1, I've got this word heading. How would I make just that heading a different color? What we'll use is a span element. A span is like a blank box by default. It has no default styles and inherits the text styles from the element it's inside of.
- If we were to style all span elements, and say all span elements, I want you to have a color of violet. Let's save, and let's go back to Chrome and refresh. You'll see that this span element and this span elements are now both violet, which makes sense. Back in Sublime Text, if we were to say, all span elements inside of an H_1 be color violet, we can write it like this: H_1 space span.

### Styling a HTML File With CSS
- I found a quite frustrating having to scroll between my styles and my HTML. If I wanted to create multiple pages, I'd have to copy the style elements with all the styles in it and paste it in every single page that I want to look the same. Then if I made a change, all whitespace, any returns, spaces, they're all just seen as one space in HTML.
-  I'm going to create a new file, and I'm going to save it as a CSS file.
- Instead of having the style elements, we'll now have a link element. We'll start typing link like so, and just like that, Sublime Text will fill in the rest for us. This row attributes stands for relation. We're saying, let's link to this file, and the relation is style sheets, and the type is going to be text CSS. This href looks a lot like an anchor tags href. We can either use an absolute URL, all a relative URL.
- I don't have to keep on scrolling up and down, changing CSS and changing HTML, and that means I can create multiple pages that make use of the same CSS file. 


### Debugging
1. Spelling Errors
2. Case Sensitivity
3. Forgetting a period before a class name when writing CSS selectors

Choose a naming convention & stick to it.
Eg: naming-everything-in-lower-case-&-using-dashes-instead-of-spaces.
- This is called kebab-case
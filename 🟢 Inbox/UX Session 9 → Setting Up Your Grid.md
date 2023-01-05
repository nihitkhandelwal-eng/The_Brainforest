---
aliases:
tags: 
cssclass:
---

Next:: [[UX Session 10 → UI Components & High Fidelity Wireframes]]
Previous:: [[UX Session 8 → Interaction Design & Wireframing]]

## Grids
- A grid is a structure comprising of a series of lines (vertical or intersecting) that divides a page into columns or modules.
- It can be thought of as a skeleton on which a designer can organize the graphic elements

1. Creates clarity and consistency in the layout of the pages
2. Quickens the design process
3. Makes the design easier to modify and reuse
4. Facilitates collaboration

### Structure of a Grid
#### Module
- 1 grid i.e. a square/rectangle is called as a module

![[brave_VFw0EvkRcy.png]]
#### Fields
- A set of rows or columns formed together is called fields
- Field elements are your blocks of design, whether that can be text, image or a combination of both.
- Background colors don't really count as field elements unless they are a container for your text/image.
- **Columns** are the thick colored blocks that make up the _content width_ of your design. Field elements are to sit on a certain number of columns. 
	- Traditionally in a design system, the column width doesn’t change but the number of columns change from 12 on desktop, to 8 on tablet, and to 4 on mobile. 
	- You can literally use anything you want, but most grids have 60–80px column widths.

![[brave_XuDvebMnIH.png]]
#### Margins
- You could have a margin around the main area, where the grid exists, containing all the content.
- **Side margins** also known as outside gutters are the amount of white space outside of your content width. 
- For a more accommodating design, the side margins increase as you go up in device width. 
- Side margins on mobile are usually 20–30px, and vary a lot between tablet and desktop. 
- Whatever you choose as the side margin, will be the _minimum_ white space you allow when you shrink your browser. 
	- When you expand your browser from this point, there will be more white space until the next breakpoint.

![[brave_xDghEu29mP.png]] ![[brave_rbhnrQAKDQ.png]]

#### Gutters
- The space between two columns or rose is called a gutter. This space varies as per design requirement.
- 20px is a common gutter size.

### Grid Guidelines
Mostly on mobile of 360dp, layout grid uses a 4-column grid, 16dp gutters, 16dp margins & 70dp column width.

> [!tip] 
> **Don't be afraid to step outside the grid** 
> Designers often intentionally break grid columns in order to increase visual interest or emphasize certain elements.
> 
> The grid system is an aid, not a guarantee. It permits a number of possible uses & a designer would go about choosing based on user goals.

![[brave_MEpx52gfRD.png]]

## Material Design Language System
The design language system is the *set of UI guidelines* followed by designers, which helps users build familiarity with various apps they will be using in Android ecosystem.

It is a *collection of reusable components, guided by clear standards*, that can be assembled together to build any number of applications.

- Material design is inspired by the physical world and its textures, including how they reflect light and cast shadows.
- Material surfaces reimagine the mediums of paper and ink.
- Material Design UI's are displayed in an environment that expresses 3D space using light, surfaces & cast shadows.
- All elements in the material environment *move horizontally, vertically & at varying depths along the z-axis.*
	- ![[brave_Fiqy8mR3Vf.png]]
- Material has varying x & y dimensions (measured in dp) & a uniform thickness
- Material surfaces at different elevations cast shadows.
	- ![[brave_zGD8SWY19g.png]]

### Iconography
- Icon size should be 24 × 24 dp 
- The touch target area can be 48 × 48 dp

 > [!note]
>  
> Use Icon Resize plugin to make sure all your icons have these dimensions.>  

### Typography
![[brave_uYxckYkQal.png]]

## Pixel Density
- The number of pixels that fit into an inch is referred to as pixel density.
- High-density screens have more pixels per inch than low-density ones. As a result, UI elements of the same pixel dimensions appear larger on low-density screens, and smaller on high-density screens.
![[Pasted image 20230105195414.png|400]]![[Pasted image 20230105195516.png|400]]

### Calculating Pixel Density
Screen density = Screen width (or height) in pixels / Screen width (or height) in inches

### Density Independence
- Density independence refers to the uniform display of UI elements on screens with different densities.
- **Density-independent pixels**, written as dp (pronounced "dips"), are flexible units that scale to have uniform dimensions on any screen. They provide a flexible way to accommodate a design across platforms.
- Material UIs use density-independent pixels to display elements consistently on screens with different densities.

#### Dps and screen density
A dp is equal to one physical pixel on a screen with a density of 160.
> [!note] Formula
> To calculate dp:
> 
> dp = (width-in-pixels * 160) / screendensity

![[brave_53rEQzIQ0Y.png]]
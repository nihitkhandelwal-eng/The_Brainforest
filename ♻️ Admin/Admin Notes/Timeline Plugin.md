### Timeline Preview

[![Example](https://github.com/George-debug/obsidian-timeline/raw/master/readme_source/examples_4.jpg)](https://github.com/George-debug/obsidian-timeline/blob/master/readme_source/examples_4.jpg)

## How to use it

Choose the `timeline` or `timeline-labeled` tag

-   `timeline` tag
    Requires `+` at the beginning of each line:
    -   each event has 3 `+`s in total: 1 for time, 1 for title and 1 for content
    -   you can separate them with empty lines if it's easier for you to write
    -   [Example](https://github.com/George-debug/obsidian-timeline/blob/master/readme_source/timeline_tag.md)
    
-   #### `timeline-labeled` tag
    -   each event has a corresponding label (`date`, `title` and `content`) that starts the line, you can separate them with empty lines if it's easier for you to write
    -   [Example](https://github.com/George-debug/obsidian-timeline/blob/master/readme_source/timeline_labeled_tag.md)
   
#### `[ ]` is optional!

You can use `[]` at the beginning of the code-block to add pre-written classes or your own classes to the wrapper.  
Example: `[spaced-paragraph, your-class, even-more]`  
Can be used for `timeline` and `timeline-labeled` tag  

Example:

````
```timeline-labeled
[line-5, body-3, active-color-interactive-accent-hover]

date: 13th April 1969
title: Enim sit amet venenatis urna
content:
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
```
````

## Just a snippet

Use this [file](https://github.com/George-debug/obsidian-timeline/blob/master/just_the_snippet/timeline.css) as a snippet using this [template](https://github.com/George-debug/obsidian-timeline/blob/master/just_the_snippet/template.md)!

## Customize

Using pre-written classes for `line`, `body` and the `active color`:

-   ### line:
    
    -   preview (soon, for now test it in obsidian)
    -   classes:
        -   line-2
        -   line-3
        -   line-4
        -   line-5

  

-   ### body:
    
    -   preview (soon, for now test it in obsidian)
    -   classes:
        -   body-2
        -   body-3
        -   body-4

  

### active color
    -   it uses obsidian's css variables as active colors, so it matches the theme
    -   default active color is *background-modifier-success*
    -   if you want your own color use `--timeline-active-color` css variable attached to `.timeline` class
```
.timeline
		--timeline-active-color: #00c137
```

    - preview (soon, for now test it in obsidian)
      - classes:
          - active-color-background-modifier-success
          - active-color-background-modifier-error
          - active-color-background-modifier-error-hover
          - active-color-text-accent
          - active-color-text-accent-hover
          - active-color-text-error
          - active-color-text-error-hover
          - active-color-text-selection
          - active-color-interactive-accent
          - active-color-interactive-accent-hover
          - active-color-interactive-success

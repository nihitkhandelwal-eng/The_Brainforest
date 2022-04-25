---
tags:
aliases:
cssclass: 
---
## General Options

The following options are supported for all clouds.

| **Name**    | **Description**                                                                                                  | **Possible Values**                                                                                                         | **Default**                            |
| ----------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| shape       | What shape to draw                                                                                               | `circle`, `cardioid`, `diamond`, `square`, `triangle-forward`, `triangle`, `pentagon`, `star`                               | `circle`                               |
| source      | where are the tags/words coming from?                                                                            | `file`, `vault`, `query`(only supported in tagcloud)                                                                        | `vault`                                |
| weight      | factor by wich the size of a word is multiplied                                                                  | any positive integer                                                                                                        | `2`                                    |
| shrinkToFit | Adjust word weight to make it fit                                                                                | `true`/`false`                                                                                                              | `true`                                 |
| minCount    | Minumum number of occurances                                                                                     | any positive integer                                                                                                        | `0`                                    |
| maxDepth    | Only show the X most used elements(if two elements have the same number of occurrences only one will be counted) | any positive integer (increasing this number may result in the cloud not showing, as only so many elements can be rendered) | `25`                                   |
| background  | Background color                                                                                                 | a hexadecimal RGB value                                                                                                     | background color from the chosen theme |
| width       | Width of canvas                                                                                                  | in pixels (the `px` is omitted)                                                                                             | line width                             |
| height      | Height of canvas                                                                                                 | in pixels (the `px` is omitted)                                                                                             | `width / 2`                            |
| fontFamily  | font used to display                                                                                             | any valid [font-family](https://developer.mozilla.org/docs/Web/CSS/font-family)                                             |                                        |
| fontWeight  | font weight                                                                                                      | `normal`, `bold`, or a number                                                                                               | `normal`                               |
| minFontSize | minumum font size                                                                                                | any number                                                                                                                  | `0`                                    |
| minRotation | the minimum rotation the text should rotate                                                                      | number (in rad)                                                                                                             | `- pi / 2`                             |
| maxRotation | the maximum rotation the text should rotate                                                                      | number (in rad)                                                                                                             | `pi / 2`                               |
| ellipticity | degree of 'flatness'                                                                                             | number                                                                                                                      | `0.65`                                 |
| shuffle     | produce a different looking result each time?                                                                    | `true`/`false`                                                                                                              | `true`                                 |
| rotateRatio | Rotation Probability                                                                                             | Number as percentage (so 1.0 is 100%)                                                                                       | `0.1`                                  |



---
aliases:
tags: 
cssclass:
---
## Components
These are interactive building blocks for creating a user interface.
### Action Components
They help people achieve an aim.
#### Common Buttons
- Buttons help people initiate actions.
- There are 5 types of common buttons

1. Elevated
2. Filled
3. Filled Tonal
4. Outlines 
5. Text

- Choose the type of button based on the importance of the action.
- All buttons have rounded corners

![[Pasted image 20230106115237.png]]

##### Anatomy of Buttons
![[Pasted image 20230106121801.png]]
1 → Label text  
2 → Container  
3 → Icon (optional)


Label text is the most important element of a button. It describes the action that will occur if a user taps a button.
![[brave_xkbtlzo9Qb.png]]

Icons visually communicate the button’s action and help draw attention. They should be placed on the leading side of the button, before the label text.
![[brave_iHqhNOaVw7.png]]

Button containers hold the label text and optional icon. Text buttons have a visible container only when hovered, focused, or pressed. Button containers have fully rounded corners.


> [!note]
> Now, we will be going into some details about these buttons.
> 
> For all practical purposes & measurements, elevated, filled, filled tonal & outlined button are similar.
> The only significant difference is in terms of anatomy
> 
> So, I will be explaining them under elevated buttons only.


##### Elevated Button
Elevated buttons are essentially filled tonal buttons with a shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button requires visual separation from a patterned background.

![[Pasted image 20230106115717.png]]

![[Pasted image 20230106115807.png]]

##### Filled Buttons
Filled buttons have the most visual impact after the FAB, and should be used for important, final actions that complete a flow, like **Save**, **Join now**, or **Confirm**. 
![[Pasted image 20230106122210.png|500]]

##### Filled Tonal Buttons
A filled tonal button is an alternative middle ground between filled and outlined buttons. They’re useful in contexts where a lower-priority button requires slightly more emphasis than an outline would give, such as "Next" in an onboarding flow. Tonal buttons use the secondary color mapping.
![[Pasted image 20230106122353.png|500]]

##### Outlined Buttons
Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app.
Outlined buttons pair well with filled buttons to indicate an alternative, secondary action.
![[Pasted image 20230106122526.png|500]]

##### Text Buttons
Text buttons are used for the lowest priority actions, especially when presenting multiple options.
Text buttons can be placed on a variety of backgrounds. Until the button is interacted with, its container isn’t visible.
![[Pasted image 20230106122631.png|500]]

Text buttons are often embedded in components like cards, dialogs, and snackbars. Because text buttons don’t have a visible container in their default state, they don’t distract from nearby content.
![[Pasted image 20230106122721.png|500]]

In cards, text buttons help maintain an emphasis on card content.
![[Pasted image 20230106122750.png|500]]

Dialogs use text buttons because the absence of a container helps unify the action with the dialog text.
Align text buttons to the ending edge of dialogs, on the right for left-to-right languages and on the left for right-to-left languages.
![[Pasted image 20230106122820.png|500]]



![[Pasted image 20230106120229.png]]
1 →  Label Text
2 →  Icon (optional)

![[Pasted image 20230106120323.png]]

##### Guidelines & Accessibility
- Buttons are just one option for representing actions in a product and shouldn’t be overused. Too many buttons on a screen disrupts the visual hierarchy.
- Consider placing *additional actions* in the **navigation drawer**, **set of chips**, **text links** or **icon buttons**.

![[brave_x3QJuDFxRk.png]]

Similarly styled components shouldn’t be used together if they don’t each pass the 3:1 contrast ratio. Higher contrast helps differentiate between a group of similar components.
![[Pasted image 20230106123027.png|400]]
![[brave_klSUnHmzP6.png|500]]

#### FAB
The FAB represents the most important action on a screen. It puts key actions within reach.

There are three sizes of floating action buttons: FAB, small FAB, and large FAB.
![[Pasted image 20230106123951.png]]

- Use a FAB for the most common or important action on a screen
- Icons in a FAB must be clear and understandable since these buttons do not have a text label
- The FAB should persist on the screen when content is scrolling
- Shape of these buttons are boxier style with smaller corner radius.

##### Anatomy
###### Container
The FAB is typically displayed in a rounded square container. The product color scheme determines the FAB container color, which should contrast with the area behind the FAB.
![[brave_H9eTB2SDM0.png]]

###### Icon
An icon in a FAB should be clear and understandable. On hover, FABs should display a tooltip with an accompanying icon text label.
A FAB shouldn't contain notifications or actions found elsewhere on a screen.

![[brave_5hHPygAMiu.png|600]]

###### Layout
FAB Layout
![[Pasted image 20230106124240.png]]

Small FAB Layout
![[Pasted image 20230106124333.png]]

Large Fab Layout 
![[Pasted image 20230106124415.png]]

##### Usage
- Use a FAB for the most important action on a screen. The FAB appears in front of all other content on screen, and is recognizable for its rounded shape and icon in the center.
- Only use a FAB for presenting a screen's primary action.
- The FAB can be aligned left, center, or right. It can be positioned above the navigation bar, or nested within the bar.

Use a **FAB** to represent the screen’s primary action.
A **small FAB** is used for a secondary, supporting action, or in place of a default FAB on smaller screens.
A **large FAB** is useful when the layout calls for a clear and prominent primary action, and where a larger footprint would help the user engage. For example, when appearing on taller and larger device screens.

![[brave_3uNjGmmXjv.png|600]]

> [!important] Accessibility Tip
> These tips are not only for FAB's but in general
> 
> Ensure the icon passes minimum of 3:1 contrast ratio.
> 
> Consider displaying a tooltip when focused to support the icon-only FAB without a visible label.


#### Extended FAB
- Extended FABs help people take primary actions. They're wider than FABs to accommodate a text label and larger target area.
- They are the most visually prominent button.
- Because it has room for both a text label and an icon, the extended FAB can be more effective where an icon alone might be too ambiguous

- Layout: Extended FAB is the same height as the FAB
- Shape: Boxier style with smaller corner radius

- Use an extended FAB on screens with long, scrolling views that require persistent access to an action, such as a check-out screen. 
- *Do not use* an extended FAB *in a view that cannot scroll*.

##### Layout
![[brave_4SbElZY2p6.png]]


#### Icon Buttons
#### Segmented Buttons




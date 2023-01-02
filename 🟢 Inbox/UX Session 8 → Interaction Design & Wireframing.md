---
aliases:
tags: 
cssclass:
---
Next:: [[UX Session 9 → Setting Up Your Grid]]
Previous:: [[UX Session 7 → Content Strategy & Wireframing]]

- Interaction design is the design of the interactions b/w users & products
- How the users interact with the interface is governed by the affordance of the element.

### Elements of Interaction Design
1. **Affordance**
	- Affordance defines what actions are possible b/w an interface & a user.
2. **Signifier**
	- Signifiers are signs & signals of what can be done. 
	- These signs tell us about the possible actions, what to do & where to do.

![[brave_VzWmDkwacb.png]]

**Discoverability**
- If the user cannot find it, it does not exist.
- It must be made clear, what actions are possible in a IJI in less than a microsecond. For example, labeling icons is a best practice.

**Shadows & Elevations**
- Shadows and elevations when applied to different Ul components like buttons, tabs & cards, signifies that it can be clicked and hence communicates the affordance of these components.
- Affordance of these buttons is signified by bringing elevation to them.


### Common Interactions of UI Design
- Swipe
	- Users can slide elements to complete actions upon passing a threshold
	- Swiping has no signifiers but are most common to switch between tabs, notification bar & clearing opened tabs in a mobile.
- Tap
- Long Press
	- They can reveal additional modes & features, but are not easily discoverable.
	- They don't have any signifiers, so they are hard to detect. Most commonly used in chat applications 
- Double Tap
- Pinch
- Spread
- Press

*Not To Be Done*
- Avoid situations where a single gesture might produce 2 different results

### UX Laws
1. **Fitts Law**
	- Place important action button within easy reach of the user
	- Amount of time required for a person to move a pointer to a target area ∝ distance of the target / size of the target
2. **Hick's Law**
	- A simple idea that more the choices you present to your user, the longer it will take them to reach a decision.
	- The designer must keep the cognitive load to a minimum
3. **Serial Position Effect**
	- Users have a propensity to best remember the first & last items in a series.

### Prototyping In Figma
- Prototype is a simulation or sample version of a final product, which is used for testing prior to launch. These are created to test the interactions and flow of screens.
- Make sure that you have selected the right device before prototyping

#### Creating a Scrolling Screen
- To create a scrolling screen, simply expand the length of your frame.
- Select your bottom navigation at the bottom of frame and select → 'Fix position when scrolling' checkbox in design panel.
- Click on preview to check if it works properly.
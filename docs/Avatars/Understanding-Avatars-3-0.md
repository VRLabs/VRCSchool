---
title: Understanding Avatars 3.0
sidebar_position: 3
slug: Understanding-Avatars-3-0
last_edited: 2024-03-31T08:54:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)



# Avatars 3.0 Overview {#68b7d78456ed43e0864a8b397d9c5b9f}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Having a general understanding of how 3.0 works will help with learning how to accomplish any animation on your avatar, and leave less holes/mistakes in the workflow. The visual diagram on the right covers VRChat’s SDK functionality relatively cohesively.


1. The black lines/borders highlight the basic understanding that newer creators should focus on.
2. The solid gray lines indicate additional functionality Avatars 3.0 has to offer.
3. The dotted light gray lines display how some components can affect others.


Each node is organized into four separate rows:


- **Trigger -** Different mechanisms/inputs that can be used to manipulate variables
- **Variables** - Set of named values that hold information
- **Controller** - The “brain” that controls the flow of logic based off the values of variables
- **Action** - The events that occur determined by the controller


Green nodes are components handled by VRChat, while blue nodes are native to the Unity Editor.


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![A visual diagram covering VRChat’s Avatars 3.0 animation system](./1441358587.png)<br/><GreyItalicText>A visual diagram covering VRChat’s Avatars 3.0 animation system</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


## Glossary {#4939e2667ede4f728d4431de864bf926}


### Triggers {#39b2ffccb7d44aa6a52b28bca040b052}

- **Expressions Menu Controls** - The VRChat “Wheel” Menu often used for toggles and radial puppets as described in [Expressions Menu and Parameters](/docs/Avatars/Expressions-Menu-Params)
- **OSC** - A method of using external applications to communicate with your VRChat avatar from outside the game using [**Open Sound Control**](https://docs.vrchat.com/docs/osc-overview)
- **Parameter Driver** - A kind of [VRC State Behaviours](/docs/Avatars/State-Behaviours) that can directly manipulate the value of an Animator Parameter

### Variables {#aaf30605d88741db9a89bf9c93b6e93a}

- **Expression Parameters** - User defined variables to be used in the Expressions Menu or synced across the VRChat network as described in [Expressions Menu and Parameters](/docs/Avatars/Expressions-Menu-Params)
- **Built-In Parameters** - VRChat defined variables that are automatically handled by the network/client as described in [Built-In VRC Parameters](/docs/Avatars/VRC-Parameters)
- **Avatar Dynamics Parameters** - User defined variables set to be handled by [Phys Bones](https://www.notion.so/e5f41ec7427b4d2ebdf1703c947c79cc) or [Contact Receivers/Senders](/docs/Avatars/Contacts)

### Controller {#4c738fe5b2514fbeafdcd055a6f061ef}

- **Animator Parameters** - Low level variables specific to [Animator Controllers](/docs/Unity-Animations/Animator-Controllers) that may be synced or manipulated by any of the above variables or triggers
- **Animator Layers** - Where most of the logic is handled within [Animator Controllers](/docs/Unity-Animations/Animator-Controllers)

### Action {#de613552d76b4d1ebbb0079c6e961a9f}

- **Animation Clips** - [Animation Clips](/docs/Unity-Animations/Animation-Clips) manipulate properties/values on any GameObject/Component
- **State Behaviours** - [VRC State Behaviours](/docs/Avatars/State-Behaviours) perform a variety of tasks that can manipulate Animator Controllers/Avatars

<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


## Example Logic - Toggles



An example using this diagram to highlight the black lines for a fundamental understanding is as follows:


1. **Expressions Menu Controls** - A user in VRChat opens the wheel menu and presses a control for a “Hat Toggle”
2. **Expression Parameters** - The “Hat Toggle” control flips an expression parameter bool named “Hat” between `true` and `false`
3. **Animator Parameters** - VRChat synchronizes all parameters named “Hat” from the Expression Parameters to all Animator Parameters
4. **Animator Layers** - The controller switches between two states “Hat On” and “Hat Off” depending if the “Hat” parameter is `true` or `false`
5. **Animation Clips** - The animation clip inside the “Hat On” or “Hat Off” state then enables/disables the hat

</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


## Example Logic - Gestures



An example using this diagram slightly modified to incorporate Built-In Parameters is as follows:


1. **Built-In Parameters** - A user in VRChat moves their left fingers to conduct a hand gesture that VRChat recognizes as the parameter “GestureLeft”
2. **Animator Parameters** - VRChat synchronizes all parameters named “GestureLeft” from the VRChat client to all Animator Parameters
3. **Animator Layers** - The controller switches between eight states depending on the “GestureLeft” parameter
4. **Animation Clips** - The animation clip inside that gesture’s state then moves the fingers or changes the facial expression

</div><div className='notion-spacer'></div>
</div>



---
<RightAlignedText>Last Updated: 31 March 2024 08:54:00</RightAlignedText>
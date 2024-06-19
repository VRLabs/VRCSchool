---
title: Toggles
sidebar_position: 7
slug: Toggles
last_edited: 2024-03-31T08:54:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)



# Toggles {#e2db7f1406a04dde8b1f2f6dfde35790}


Toggles are a way to use your Hand (Circle) Menu to enable/disable certain objects on your avatar.


This article will assume you know how to record certain values into Animation Clips. If you don’t know this, a step by step guide is given in the [Animation Clips](/docs/Unity-Animations/Animation-Clips) article.


Notes: 


To create a new Layer, press the + at the top of the `Layers` view, give it a name, and change the Weight to 1 by clicking on the cog and dragging the slider to 1.


To create a new Animator State (block), you can press `Right Click` → `Create State` → `Empty`.


To create a new Transition you can `Right Click` the source (first) state, press `New Transition`, and then click the target (second) state.


---


## Simple Toggles {#5f6d6518cfdb427892e35dc82405d609}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 1)'}}>


The simplest toggle that achieves all functionality we want is the one on the right. In the Buffer state, we have a Buffer animation, which is an animation with two keyframes, animating a value that doesn’t exist, like the example on the right. It will require a Bool parameter with the same name in both your Animator Controller and your Expression Parameter List, and having a Toggle Control in one of your Expression Menus that toggles this parameter.



In the Object On state, we have an animation with two keyframes, both enabling the object, and in the Object Off state we have an animation with two keyframes, both disabling the object.


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 1)'}}>


![The most basic toggle](./Toggles.d7a54c34-805f-4003-9be3-f43b34bbe41b.png)<br/><GreyItalicText>The most basic toggle</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


The Buffer state is there so that if your toggle is enabled on upload, it doesn’t disable for one frame to get to the enable state or vice versa. The Buffer animation is there to make the setup Write Defaults agnostic (so both Write Defaults can be used).


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![An example buffer animation](./Toggles.1e645437-9457-4c6b-bfb3-ccf062239a8e.png)<br/><GreyItalicText>An example buffer animation</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


The Transitions going to Object On both look like the Object On transitions, and the Transitions going to Object Off both look like the Object Off transitions. 



Note that this assumes that having the Controller Parameter enabled means the object is on. If this is inverted in your setup, you will have to reverse the True and False values.



Explanations:


- We want exit time disabled since otherwise your transitions will take longer to start (and therefore take longer)
	- Note: This is different with Dissolves, since with them you want to wait until the whole state is done playing. With them you would have exit time enabled and set to 1.
- We want Transition Duration to be set to 0 because otherwise your transitions will needlessly take longer

</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![The Object On transitions](./Toggles.e5cb9c0b-7e49-486a-9289-65b4a18afc3d.png)<br/><GreyItalicText>The Object On transitions</GreyItalicText>


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![The Object Off transitions](./Toggles.ff6765d6-45fc-44da-bd4f-ad4f302f14dd.png)<br/><GreyItalicText>The Object Off transitions</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


</div><div className='notion-spacer'></div>
</div>



---
<RightAlignedText>Last Updated: 31 March 2024 08:54:00</RightAlignedText>
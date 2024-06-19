---
title: Radial Puppets (Hue Shifts and more)
sidebar_position: 10
slug: Radial-Puppets
last_edited: 2024-04-03T07:55:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)

import ReactPlayer from "react-player";

# Radial Puppets {#4d050d9826884a7b802198f54c2f8420}


Radial Puppets are a type of Expression Menu Control (See [Expressions Menu and Parameters](/docs/Avatars/Expressions-Menu-Params)) that allow you to set a float between 0 and 1 based on the rotation of a puppet. This article will go over some common use cases and how to set them up.


This article will assume you know how to record certain values into Animation Clips. If you don’t know this, a step by step guide is given in the [Animation Clips](/docs/Unity-Animations/Animation-Clips) article.


There are two ways to animate a Radial Puppet: **Motion Time** and **1D Blend Tree**.


---


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


## Motion Time



With a Motion Time animation, you have a single animation which you use motion time to “scroll through”. To make this animation, you will want to make an animation with two key frames. One at 0:00 with the Hue Shift at 0, and one at 0:01 with the Hue Shift at 1. 



Note that you will have to set `Both Tangents` to `Linear` in the Dope Sheet view of the Animation Window, otherwise your Animation won’t play smoothly.



To use this animation for a Motion Time Hue Shift, make sure your Radial Puppet Rotation Parameter is added to your FX layer as a Float, and add a new layer. Set the layer weight to 1 by clicking on the Gear icon, and dragging the Weight to 1. 



Then, select your new layer, give it a new name by double clicking it, and create a new state in the layer, which will have as its Motion your animation, its Motion Time enabled, and as its Motion Time your Radial Puppet Rotation Parameter. 



Make sure to Lock your material, so you can test it like it would be in game, and then you can use the [Av3 Emulator](https://github.com/lyuma/Av3Emulator) or [Gesture Manager](https://github.com/BlackStartx/VRC-Gesture-Manager) from the VCC to test the Hue Shift.



The whole process, from start to finish, is shown here:


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


<ReactPlayer width='100%' height='auto'  controls url="https://github.com/VRLabs/VRCSchool/raw/main/src/resources/Radial Puppets-Motion Time.mp4" />


</div><div className='notion-spacer'></div>
</div>


---


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


## Blend Tree



With a Blend Tree animation, you will need two animations, each with two keyframes. One animation has its keyframes set to 0, the other has its keyframes set to 1. These animations will be put as the two children of a 1d Blend Tree, with the keyframe 0 animation set to parameter value 0, and the keyframe 1 animation set to parameter value 1. 



To use this blend tree for a Motion Time Hue Shift, make sure your Radial Puppet Rotation Parameter is added to your FX layer as a Float, and add a new layer. Set the layer weight to 1 by clicking on the Gear icon, and dragging the Weight to 1. 



Then, select your new layer, give it a new name by double clicking it, and create a new state in the layer with a blend tree by `Right Clicking` → `Create State` → `From New Blend Tree`,  which will have as its children your two animations as described above, and as its Blend Parameter your Radial Puppet Rotation Parameter.



Make sure to Lock your material, so you can test it like it would be in game, and then you can use the [Av3 Emulator](https://github.com/lyuma/Av3Emulator) or [Gesture Manager](https://github.com/BlackStartx/VRC-Gesture-Manager) from the VCC to test the Hue Shift. 



The whole process, from start to finish, is shown here:


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


<ReactPlayer width='100%' height='auto'  controls url="https://github.com/VRLabs/VRCSchool/raw/main/src/resources/Radial Puppets-Blend Tree.mp4" />


</div><div className='notion-spacer'></div>
</div>


---


## Pros and Cons {#4976a5e38f3543fd8a2a4f962bc92f33}


### Motion Time {#f6e3207f2f6246368863f16bf179e64b}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Pros:


- Only requires 1 animation
- Allows for finer control by adding more keyframes and editing their tangents

</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Cons:


- Can’t be added to Direct Blend Tree for optimization (see [Combining Layers Using Direct Blend Trees](/docs/Other/DBT-Combining))

</div><div className='notion-spacer'></div>
</div>


### Blend Tree {#77a377a60a1f44e28c4427ff94a857a5}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Pros:


- Can be added to Direct Blend Tree for optimization (see [Combining Layers Using Direct Blend Trees](/docs/Other/DBT-Combining))

</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Cons:


- Requires 2 animations
- Harder to have finer control since you need to make more animations, and even then it’s only linear

</div><div className='notion-spacer'></div>
</div>


---


## Applications of Radial Puppets {#dda0bd67044a4036a42d46ce4f7eda89}


Anything that you can animate in an animation clip can be manipulated by a Radial Puppet. For some examples, see [Types of Animation Clips](/docs/Unity-Animations/Types-Of-Animations).


Below are some common use cases


---


### Hue Shift {#14772ce641124a07928f677f5a92ac12}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


A hue shift is a way to change the color (specifically, the Hue) of a Material. To make a hue shift, you will need to record Animation Clips which change the hue of the avatar. 


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


<ReactPlayer width='100%' height='auto'  controls url="https://i.gyazo.com/20401193a52f174f05def805c2c6665b.mp4" /><GreyItalicText>An Example Hue Shift in the Poiyomi shader.</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Note that if you are using the Poiyomi shader, you will need to set the Hue Shift field to `Animated (when locked)` if there is only one material you’re hue shifting on that mesh, or to `Renamed (when locked)` when there are multiple materials you’re hue shifting on that mesh. 



This is done so that it will keep the right property animatable when the shader is locked, and that multiple hue shifts on the same mesh won’t conflict.


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![Where to find the Hue Shift option in the Poiyomi shader, and how to set it to Animate when locked (or Renamed when locked)](./Radial-Puppets.28f1d77e-923c-4964-aef2-3923a8bd476b.png)<br/><GreyItalicText>Where to find the Hue Shift option in the Poiyomi shader, and how to set it to Animate when locked (or Renamed when locked)</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


### Quest Hue Shift {#0e6256c9c6bf4cd18819fcb537d14437}


Sadly, Quest doesn’t have an easy way to do Hue Shifts like PC does. It is possible by animating the Red, Green and Blue values of the Main Color field in an animation to emulate a hue shift, but that will need more work to set up and also will tint the entire object that color instead of hue shifting.


---


### Scalers {#20545526dd734ac3b101c183d9c52a81}


Radial Puppets are also sometimes used for scale animations. These are made in the same way as the Hue Shift animations, but instead of animating the Hue Shift Material Property, you animate the Transform Scale x, y, and z properties.


---


### Multi-Toggles {#24910eac19324d189b638d73784a01e7}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


A Multi-Toggle is a way for one Radial Puppet to switch between multiple mutually exclusive options. For example having five different tops, or maybe even a bunch of combinations of them. The world is your oyster.



Multi-Toggles can theoretically be made with both the Blend Tree and the Motion Time methods, but the Motion Time method is by far easier and less error prone.



To create a multi-toggle, you will want to create one keyframe per option, and enable/disable the GameObjects you want to disable for that option. Make sure every GameObject is animated at every keyframe. At the end, you want to copy and paste the last keyframe, to make sure all options have one set of keyframes where they are the one that is enabled. Then, select all keyframes and set Both Tangents to Constant.



The whole process, from start to finish, is shown here. As the result, the GameObjects Item0 to Item4 are toggled based on the rotation of the puppet.


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


<ReactPlayer width='100%' height='auto'  controls url="https://github.com/VRLabs/VRCSchool/raw/main/src/resources/Radial%20Puppets-Multi%20Toggle.mp4" />


</div><div className='notion-spacer'></div>
</div>



---
<RightAlignedText>Last Updated: 03 April 2024 07:55:00</RightAlignedText>
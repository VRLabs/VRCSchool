---
title: Head Chop
sidebar_position: 18
slug: HeadChop
last_edited: 2024-03-31T08:06:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/)



# Head Chop {#1ab62abd4a2142fca5958a337fce26fb}


VRChat renders three clones of the local avatar:

- The mirror clone, with its head scaled to full, which is what you see in the mirror
- The shadow clone, with its head scaled to full, which is what casts shadows
- The local clone, with its head scaled down, which is what you see from first person. The head is scaled down so you don’t see your own hair or glasses or anything in front of your eyes.

The Head Chop component allows creators to selectively toggle on and off what is being hidden in the local clone in game.


---


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


The Head Chop component has two fields:


- Target Bones: the list of all bones you want to be visible, and a few settings. Note that if a bone is scaled up, its children will be scaled up as well.
- Global Scale Factor: all the target bones’ scale gets multiplied by this. This is useful for animating to 1 or 0 if you want to fully enable/disable the head chop.


:::tip

 Another way to fully enable/disable the head chop is by disabling or enabling the component

:::





:::caution

If you add a component to this list, the moment it has the right apply condition, its position in space relative to the head gets locked in, and is not affected by its parents’ scale, position and rotation.

:::






Every Target Bone has a few settings as well:


- Transform: the transform which will be affected
- Scale Factor: the factor this object should be scaled by. The final scale is the `original scale * the global scale factor * the bone scale factor`
- Apply Condition: One of `Always Apply`, `VR Only` and `Non VR Only`. Allows you to specify if the component should affect this bone always, only in VR, or only in desktop mode.


You can have a max of 16 HeadChop components with a max of 32 bones each, though this limit is so high you’ll probably never reach it.



</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>



![The Head Chop Component](./HeadChop.f791f29c-1b70-4d74-87b7-f32c7cd2d249.png)<br/><GreyItalicText>The Head Chop Component</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>



---
<RightAlignedText>Last Updated: 31 March 2024 08:06:00</RightAlignedText>
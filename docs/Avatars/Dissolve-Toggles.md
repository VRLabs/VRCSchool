---
title: Dissolve Toggles
sidebar_position: 9
slug: Dissolve-Toggles
last_edited: 2024-03-31T08:54:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)



# Simple Dissolve Toggles {#65daae48b38d4e379ae415716d37b7f8}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


There are multiple ways to make dissolve toggles, but the simplest is to take the state layout of the Simple Toggle outlined in [Toggles](/docs/Avatars/Toggles), but change the following things:


- Set the Transition Duration to however long you want the dissolve to last on the Transitions between Object On and Object Off
- Set the Transition Offset to 1 on the Transitions between Buffer and the Object On and Object Off state (so we start the first animation once it’s done, and we don’t see the full dissolve happening)
- Have the Object On and Object Off toggles have the same Dissolve Animation, but with Object On playing at speed -1, and with Object Off playing at speed 1


A template for this example can be found at [Dissolve Toggle (Independent)](https://notes.sleightly.dev/justsleightly/Dissolve-Toggle-Independent-0827917834f44984b7b5a192f1c7e19f).



To make a very basic Dissolve Animation for Poiyomi, you have to go to the Material you want to dissolve, set the `Rendering Preset` to Transparent, set the `Special FX` → `Dissolve` value enabled, set the `Dissolve Type` to Spherical, and then animate the `Dissolve Alpha` value (with this value set to Animated).



There are many more settings to make the dissolve toggle look better, but this article is about how to make the logic.



For the Dissolve Animation, you want the first keyframe have the following values:


- Dissolve Alpha 0
- GameObject Is Active 1


And the second keyframe be one frame later with the following values:


- Dissolve Alpha 1
- GameObject Is Active 0

</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![The Material settings for a simple Dissolve Toggle](./154765862.png)<br/><GreyItalicText>The Material settings for a simple Dissolve Toggle</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


It is important to also have Both Tangents set to Linear for the Dissolve Alpha property, and Both Tangents set to Constant for the GameObject enabled property. You can do this by, in the Animation window, holding `Ctrl`, clicking both keyframes, hovering over a keyframe, and then clicking `Right Click` → `Both Tangents` → `Linear`/`Constant`.



---
<RightAlignedText>Last Updated: 31 March 2024 08:54:00</RightAlignedText>
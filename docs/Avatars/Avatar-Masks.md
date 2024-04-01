---
title: Avatar Masks
sidebar_position: 17
slug: Avatar-Masks
last_edited: 2024-04-01T14:45:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)



# Avatar Masks {#facddcc66b6448c0974ce352240644ad}


## Unity Behaviour {#2eeeb19c8762426fa2ac708e3fa454d8}


A mask blocks out humanoid muscle values, material swaps and transform values from animations played in an animator controller based on what is enabled and what is disabled in the mask.
If a layer has a mask with a certain value enabled in the mask, the animation is allowed to animate that value.
If a layer has a mask with a certain value disabled in the mask, the animation is not allowed to animate that value.



To be specific:

- If a layer has a mask with a humanoid value (such as left hand) enabled, that humanoid muscle can be modified by an animation in that layer
- If a layer has a mask with a humanoid value (such as left hand) disabled, that humanoid muscle can't be modified by an animation in that layer
- If a layer has a mask with a transform value enabled or not specified, that transform can have its position, rotation and scale modified by an animation in that layer, as well as a material swap on the first material slot
- If a layer has a mask with a transform value disabled, that transform can't have its position, rotation or scale, or a material swap on the first material slot modified by an animation in that layer

If a layer has any mask whatsoever, it can't animate material swaps on any material slot beyond the first, or the root transform of the object with the animator on it.


Anything else (blendshapes & any other components) is unaffected by masks.


The reason we have masks is because if you animate a humanoid muscle on one layer, and then animate any humanoid muscle on a different layer that gets applied later (whether lower down in the animator or on a different playable layer), it gets overwritten (unless the other layer is an Additive layer, if so it adds on top of it).
With transforms, this only happens if the second animation uses WD off and is on a Playable Layer that gets applied later.
So for example if we didn’t have masks, if you animated a humanoid muscle on your Gesture Layer for hand movement, it would overwrite your Base Layer and your avatar would be in default pose (bike pose) all the time.


:::danger

This means that if you have a humanoid animation, without masking just the humanoid muscles you want to be enabled, and the rest disabled, all other humanoid muscles will be overwritten.

:::




:::danger

This also means that if you have Transform animations on your Gesture layer, and you have an unmasked WD Off Transform animation on the FX layer, all the Gesture Layer Transform animations will be overwritten.

:::




:::caution

The default VRChat FX Layer uses an unmasked WD off blend tree. This can cause transform animations to not play in VRChat as long as you are using the default FX Layer. If you want to animate transforms on the Gesture layer, you have to either use your own FX Layer or remove theirs and set it to be empty.

:::




---


## VRChat layer behaviour {#e460f072090f445d87e2675c41c7194b}


All playable layers are applied one after the other. First the Base, then Additive, then Gesture, then Action and lastly FX.


On the first four layers (Base, Additive, Gesture & Action), you should only use animations which affect transforms (so either humanoid muscles or transform animations) and toggle gameobjects on/off.


This isn't because of masking, but because these four layers are played only on your local avatar clone, but not on your mirror and shadow clones. VRChat copies the transforms and on/off state of every GameObject on your local avatar and applies them to your avatars mirror and shadow clone. However, VRChat does not copy anything other than transforms and the on/off state of each GameObject, meaning that if you were to animate anything other than that, such as blendshapes, material swaps or shader settings, VRChat will not copy those attributes to the mirror and shadow clones. The clones do however play their own FX Layer, which is why anything other than the transforms and on/off states of GameObjects should be animated in the FX Layer.


For example: if you do a material swap on the Base Layer, it won't run on the mirror & shadow clones.


This article only goes into detail when it comes to masking and behaviour. If you want more information on what VRChat does with layers or what VRChat recommends you do with them, you can check out the [official documentation](https://creators.vrchat.com/avatars/playable-layers/).


---


## Base Layers {#7171f4c674664f4982de9af91652ee56}


### Base {#c9208c0abd25469798efa441a2475033}


This layer should only animate transforms (either directly or through humanoid muscles) and/or GameObject on/off states for the reasons stated above.


VRChat recommends this layer to be used for locomotion and to only animate humanoid muscles.


---


### Additive {#348211db75dc4cb9944c3ef806024702}


This layer should only animate transforms and/or GameObject on/off states for the reasons stated above.


It is blended additively, meaning that any animations don’t replace the base layer ones, but instead the values get added.


VRChat recommends this layer to be used for tweaks to locomotion, like breathing effects, and to only animate humanoid muscles.


---


### Gesture {#777453b9e7b0401c95a5d1ca87effd4d}


This layer should only animate transforms and/or GameObject on/off states for the reasons stated above. 


VRChat takes the mask on the first layer, and applies it to all the layers in a way where if an animation (humanoid or transform) is disabled in either this mask or the layer mask itself, it is disabled.


So if you want to animate any of the humanoid muscles, you will have to make a mask that specifically allows those muscles and put it in the top layer (This is why the default mask allows animations on both hands).


:::caution

Do note that a mask which allows humanoid muscles will override the Base and Additive animations for those humanoid muscles. It is therefore recommended to use Gesture for hand animations, and Base (or action for short bursts) for other humanoid animations.

:::




:::caution

If you want to animate any transforms on Gesture, you will have to make a mask that specifically allows those transforms and the used Humanoid Muscles (usually the hands), and put it in the top layer. You will also need a custom mask for FX which disables all humanoid muscles and the animated transforms. This Transform animations are generally done on FX since you dont need to think about custom masks. 

:::




VRChat recommends this layer to be used for animations that animate transforms and humanoid animations that only affect certain body parts.


---


### Action {#4596fe1fdeec487d9220e5d111afe0d6}


This layer should only animate transforms and/or GameObject on/off states for the reasons stated above.


This layer is blended to zero by default. Before you do anything in the action layer, you need to use the Playable Layer Control State Behavior to blend this layer up before transitioning to the actual action you're performing. Make sure you blend it back to zero when you're done, otherwise other animations won’t play.


VRChat recommends this layer to be used to overwrite any humanoid animations from the previous layers, like for example for emotes or AFK animations.


---


### FX {#006019057a4148aebf4b57f631cab525}


Since this layer runs on all your clones, this is where you can run any animations.


If the first layer mask is empty, it will create a default mask that disables all humanoid muscles and enables all transforms, and applies it to all the layers in a way where if it is disabled in either this mask or the layer mask itself, it is disabled.


:::caution

If you are using WD off and want to animate a transform on Gesture, you will need to make a top layer FX mask which disallows all humanoid muscles, and disables all transforms which you animate in Gesture. For this reason, it is easier to animate transforms in FX, even though this goes against what VRChat says, since you don’t have to do any masking on FX if there are no transform animations on Gesture.

:::




:::caution

 VRC's default FX layer has a blendtree with write defaults off without proper masks. This can break transform animations on other layers. If you want to use transform animations on any layer, do not use the default VRC FX layer.

:::




VRChat recommends this layer to be used for anything that isn’t transform animations, like enabling/disabling GameObjects, components, material swaps, shader animations, particle system animating, etc.


---


## Special Layers {#3e31e1371f474922aef9e902017fdbf0}


### T-pose {#6ea401545c1f478a9220ce8ca8d55548}


The T-Pose is used to determine various measurements of your avatar, especially for placement of your viewpoint (or view-ball).
It is played on its own, so masking doesn't really matter


### IK Pose {#000be76bb9224b839372ac1cd90ce5a3}


IK Pose is used to determine major joint bends. In the IK pose, your joints should be bent slightly in the direction they're intended to bend.
It is played on its own, so masking doesn't really matter


### Sitting Pose {#b6cc3d822a1a4cd7a01e1fccfbb2ee3f}


The controller used in this slot is used for both animation and posing. When you sit, the viewpoint of your avatar is used for calibration. The animation is played, allowing you to create a "sitting down" animation, as well as a "sitting" idle animation.
It is used like Action, where it should override all humanoid animations to make your character sit.



---
<RightAlignedText>Last Updated: 01 April 2024 14:45:00</RightAlignedText>
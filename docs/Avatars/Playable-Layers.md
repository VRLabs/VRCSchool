---
title: Playable Layers
sidebar_position: 15
slug: Playable-Layers
last_edited: 2024-03-31T08:54:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)



# Playable Layers {#b6aeaeafafbf46dead3ee008d181aa7c}


The Playable Layers are a list of Animator Controllers that VRChat combine for you to generate the final animations on your avatar. This system allows you to only swap out a single controller (for example Locomotion), without having to touch any of the other Animator Controllers.


They are named this way because VRChat uses the Playable System to combine these in a layer by layer basis: First, Base gets applied, then Additive, then Gesture, then Action, then FX. This means that anything you do in FX overwrites an animation in Gesture if you animate the same component.


This article will describe what every layer is commonly used for in VRChat, as well as some common mistakes to make with Layers. It will be biased based on what is most likely to make your layers work with what is commonly out there. 


If you want a more in depth explanation of how the layers are combined and how their masking works, you can find that on the [Avatar Masks](/docs/Avatars/Avatar-Masks) page.


---


## Locomotion {#0c8d7eda31b04a2facca1aec9e5375d1}


This Layer is used to animate the Humanoid Skeleton, except for the hands. You should only animate the humanoid skeleton here, and this layer should be used for general locomotion and the preview pose. 


In general this layer is either kept as the default layer, replaced by [Franada’s GoGo Loco](https://franadavrc.gumroad.com/l/gogoloco), or replaced by [WetCat’s Locomotion Fix](https://wetcat.gumroad.com/l/locomotionVRC).


---


## Additive {#b59a4b1fe2f94957ab83d0c99d162a0c}


This Layer is used to animate the Humanoid Skeleton with Additive blending. This means that the animations are applied on top of the locomotion layer, instead of overwriting it. 


The sample VRChat Additive Controller animates a breathing animation, and the only time it’s ever replaced is by [Franada’s Go Go Loco](https://franadavrc.gumroad.com/l/gogoloco), which just replaces a Write Defaults Off Empty state with an animated state, since that can sometimes break things.


---


## Gesture {#7ce515efea5b46a4b31678260885dab7}


This Layer is used to animate the Humanoid Hands (and should therefore have the _VRC_HandsOnly_ mask on its top layer). 


It is generally custom made by taking the VRChat Sample Hands controller and editing it with the avatar’s own hand gesture animations, replaced by [Franada’s GoGo Loco](https://franadavrc.gumroad.com/l/gogoloco), or kept as the default. 


While it is theoretically possible to animate miscellaneous Transforms here as well, it is not recommended as they could get overwritten by the FX layer unless proper masking is used, and the VRChat community as a whole generally animates Transforms on the FX layer. 


More information on the Gestures and Facial Expressions can be found on the [Hand Gestures/Facial Expressions](/docs/Avatars/Gestures) page.


---


## Action {#2933b4c5b31445c8b56e16bacb71faab}


This Layer is used to take over the Humanoid Skeleton during for example emotes. It is set to a weight of 0 by default (and therefore won’t overwrite anything by default). 


Its weight can be changed by using a VRC Playable Layer Control, which is generally done to start the emote, and then at the end of the emote it is blended down to 0 again. 


It is generally either kept as the default, or replaced by [Franada’s GoGo Loco](https://franadavrc.gumroad.com/l/gogoloco).


---


## FX {#183e37777b154840a6b4bfa11f7ada89}


This layer is used to animate everything that isn’t the Humanoid Skeleton. Anything from matswaps, to toggles, to facial expressions gets done here. 


More information about Facial Expressions can be found on the [Hand Gestures/Facial Expressions](/docs/Avatars/Gestures) page. 


More information on toggles and how they’re made can be found on the [Toggles](/docs/Avatars/Toggles) page.


---


## T-Pose {#bbb369a56d41476fb44544c6e0013964}


The T-Pose Controller is used by VRChat to calculate multiple different measures for your avatar:

- The location of the viewpoint compared to the head bone
- The wingspan of the avatar, used for estimating the IPD
- The way your wrist is pointed, this helps for animations on how the wrist moves when turning the controller
- The proportions of the Avatar in general. There shouldn’t be any bends in the T-Pose Controller’s pose, as that can lead to weird issues
---


## IK-Pose {#ca32150b65074fb99d8403a5d23f5ce6}


The IK-Pose Controller is used by VRChat to estimate how you want the joints to bend in 3 point/4 point/full body tracking. 


They look at how the joints are bent in the IK-Pose Controller, and assume that’s how you want them to bend in VRChat. 


Note: To make the knees bend more inward, rotate the feet more outward and vice versa.


---


## Sitting {#46d814311cc64419b50c105cc2384984}


The Sitting Controller is used by VRChat once you enter a Station with the Seated flag enabled. It might be overwritten by the Station’s Sitting controller. It is also used for the location of the viewpoint compared to the head when sitting. 



---
<RightAlignedText>Last Updated: 31 March 2024 08:54:00</RightAlignedText>
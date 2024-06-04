---
title: Sub-Animator Techniques
sidebar_position: 8
slug: Sub-Animator
last_edited: 2024-03-31T08:54:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)



# Sub-Animator Techniques {#8d92a9a3c0924a74aafbae4f11534a04}


While most effects can be accomplished using traditional StateMachines, this article explores some niche techniques utilizing sub-Animators; Animators other than the main avatar root Animator.


## Animator Enable/Disable {#16f94c9ca38c43eabf8b806f12cb8c54}


Disabling the animator pauses it in the current state, a technique once employed to create a 'Cycler' - a sub-animator cycling between states by toggling its enable/disable status with exit time. Upon re-enabling, the animator seamlessly resumes from where it was paused.


Note: Be aware that this behavior differs in Unity. In Unity, disabling and enabling the animator resets its state.


:::note

Animations that disable/enable Animators use a Behaviour Enabled keyframe property, and have to be made either with a script or by carefully editing an animation file.

:::




---


## GameObject Enable/Disable {#f41860fb37d64007ba8348f92c15aa53}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Disabling and enabling the GameObject with an animator resets the animator to its initial state, unless the “Keep Animator Controller State on Disable” flag is enabled. To access this flag, enable `Debug` in the inspector settings.



Keep in mind that you cannot disable the Animator or the GameObject for your own avatar.


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![Where to enable the debug view](./988404117.png)<br/><GreyItalicText>Where to enable the debug view</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


---


## Culling Mode {#51f184bd61414bd88adb52db0a3f10ed}


There are three culling modes for animators, as detailed in [Animators](/docs/Unity-Animations/Animators):

- **Always Animate:** Animates the entire avatar, even when offscreen.
- **Cull Update Transforms:** Disables changing values of transforms when renderers are not visible, affecting GameObjects, components, and blendshapes. Exceptions include animating Animated Animator Parameters and triggering State Machine Behaviours.
- **Cull Completely:** Freezes the entire animator when renderers are not visible, halting logic, transitions, and animations.

:::caution

On the VRChat local avatar Animator, this setting defaults to 'Always Animate' for local avatars and 'Cull Update Transforms' for remote avatars. Animators on children GameObjects remain unaffected.

:::




This allows one to do some logic to determine of a mesh is being rendered.


If you have a sub-Animator with one Mesh under it, and it’s set to Cull Completely, then it will stop animating when the Mesh is not looked at locally. One way this can be detected is by animating an object both in the FX controller and in this sub-Animator. The sub-Animator will overwrite the FX controller, unless the sub-Animator is culled, at which point the FX controller takes over. This is used, to toggle a VRC Contact Sender, which determines the value of a VRC Contact Receiver, whose parameter can be picked up in the FX layer. This is the inner workings of [VRLabs’ IsRendering Detection](https://github.com/VRLabs/IsRendering-Detection).



---
<RightAlignedText>Last Updated: 31 March 2024 08:54:00</RightAlignedText>
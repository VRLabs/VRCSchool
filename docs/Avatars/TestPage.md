---
title: TestPage
sidebar_position: 2
slug: /Avatars/TestPage
---



🕒 10 Minute Read


<div class='notion-row'>


<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


`Last Updated: July 27th 2023`



</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Contributors: [Jellejurre](https://github.com/jellejurre)


</div><div className='notion-spacer'></div>
</div>


---


# Animator Transitions {#c2ecb67eaffa497598d1b11fd8cb6b24}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.375)'}}>


An Animator Transition is a transition between two Animator States. It is triggered by its Conditions being met (if any), and its Exit time having passed. Its settings can be accessed by opening up the `Settings` dropdown, and a new Animator Transition can be created by right clicking the source Animator State, `Right Click` → Make Transition, and then clicking the target Animator State. Multiple Animator Transitions can be connecting the same two Animator States. This is shown by the transition having three arrows on the line instead of one.



</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.625)'}}>


![A default Animator Transition, going from New State to New State 0.](./1837482512.png)
A default Animator Transition, going from New State to New State 0.


</div><div className='notion-spacer'></div>
</div>


---


## The Transitions List {#f3fa501c6c0348ad90edce0c893836a5}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.4375)'}}>


The transition list is the list of Animator Transitions labeled `Transitions` at the top of the Animator Transition Inspector. If you have multiple Animator Transitions between two states (indicated by three arrows being visible instead of just one), they can be selected and reordered by clicking and dragging the Transitions. More information about Transition execution order can be found on the [Untitled](https://www.notion.so/014c5d257a39431fb6bd7b4265a0ea6b)  page.




The `Mute` field disables a Transition, and the `Solo` field disables all other Transitions, though these are generally not used often.




The text field below the Transitions List can be used to rename an Animator Transition.


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5625)'}}>


![Two Animator States, connected by two Animator Transitions. The top one is selected,, which is shown by the lighter gray color.](./1788340533.png)
Two Animator States, connected by two Animator Transitions. The top one is selected,, which is shown by the lighter gray color.


</div><div className='notion-spacer'></div>
</div>


---


## Exit Time {#458b01d786844169b1ba109a39dcefb9}


The `Exit Time` field only allows its Animator Transition to be triggered once `Exit Time` fraction of the source Animator State’s Animation Clip has passed where an empty Animator State counts as a 1 second clip. To enable/disable it, check/uncheck the `Has Exit Time` checkbox.


Example:


An Animation Transition is going from `Old State` to `New State`. Its `Exit Time` has been set to 1.5. `Old State` has an Animation Clip with a length of 2 seconds. Then only after `Exit Time * Clip Length` = 1.5 * 2 = 3 seconds have passed, will this Animator Transition be able to be triggered.


:::caution

Note: Single Keyframe Animation Clips will be considered to have a length of 1 second for Exit Time. This is why it is usually recommended to make all your clips with 2 key frames, both 1 frame apart, since if people don’t know of this behaviour, they could be confused.

:::




---


## Transition Duration {#dcda65af89cc4904b143e2b0f0d5f2e9}


The `Transition Duration` field sets the duration of an Animator Transition. During a Transition, both Animator States’ Animation Clips are playing at the same time, and they blend over into eachother. The duration of this blending is the `Transition Duration`, where at the beginning of the Animator Transition, the source Animator State’s Animator Clip is fully playing, and at the end, the target Animator State’s Animator Clip is fully playing. 


If the `Fixed Duration` checkbox is checked, the `Transition Duration` is the amount of seconds the transition takes (denoted with `(s)`). If the `Fixed Duration` checkbox is unchecked, the `Transition Duration` is a fraction of the length of the source Animator State’s Animation Clip (denoted by `(%)`, however note that it isn’t the percentage, but the fraction (1 = 100%)).


Example: 


An Animation Transition is going from `Old State` to `New State`. Its `Transition Duration` is set to 4, and `Fixed Duration` is enabled. Then, 3 seconds into the transition, `Old State`’s Animation Clip is playing with 25% weight, and `New State`’s Animation Clip is playing with 75% weight. This is because the full Transition takes 4 seconds, and 3 seconds is 75% of 4 seconds, therefore we are 75% into the transition.


If `Fixed Duration` was disabled, and `Old State` has an Animation Clip with a length of 2 seconds, then the Transition would take `Transition Duration * Clip Length` = 4 * 2 = 8 seconds. 


---


## Transition Offset {#48299e77519a4296a25d06505ae6dbfc}


The `Transition Offset` field sets the offset of the Animation Clip in the target Animator State as a fraction. So if the `Transition Offset` is set to 0.5, then at the beginning of the Animator Transition, the Target Animator State’s Animation Clip will start playing at 50% through its runtime. 


---


## Interruptions {#e95b1d3caae440f79b54887865d6bab6}


Before I get to the Interruption Source field, I’d like to take a quick moment to explain what Interruptions are:


When in the middle of an Animator Transition, if another Animator Transition that is allowed to interrupt the current Animator Transition triggers, it will pause the current Animator Transition where it currently is, take the current state of the two Animations Clips, make a snapshot of the effects of those two Animation Clips, and start the new Animator Transition, with the “Source” here being that snapshot, and its length being the length of the Animation Clip in the source state.


### Interruption Source {#c190b01f71a342e8ad2e395ffac8b0ae}


The `Interruption Source` field sets which Animator Transition can interrupt the current Animator Transition. It has five options:

- None: Allow only the AnyState Transitions to interrupt this Animator Transition.
- Current State: Allow AnyState Transitions and the transitions from the source Animator State to the target Animator State to interrupt this Animator Transition.
- Next State: Allow AnyState Transitions and the transitions from the target Animator State to any other Animator State to interrupt this Animator Transition.
- Current State then Next State: Allow AnyState Transitions, then the transition from the source Animator State to the target Animator State, then transitions from the target Animator State to any other Animator State to interrupt this Animator Transition.
- Next State then Current State:  Allow AnyState Transitions, then transitions from the target Animator State to any other Animator State, then the transition from the source Animator State to the target Animator State to interrupt this Animator Transition.

Note: The order does matter for this, since it takes the first allowed Animator Transition it finds.


The `Ordered Interruption` field makes it so that, when checked, out of the list of transitions from the source Animator State to the target Animator State, only ones higher than the selected Animator Transition can interrupt it.


---


## The Visual Transition Editor {#072da5216fdc40b78444fb33de07dfb2}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


The Visual Transition Editor is a visual editor that allows you to edit the aforementioned Animator Transition properties (to be specific: `Exit Time`, `Transition Duration` and `Transition Offset`). It only shows up if either of the source Animator State and the target Animator State has an Animation Clip in it. 




It works pretty intuitively, the actions you can perform are:


- Changing the start and the end of the transition by dragging the blue start and finished signs at the top of the timeline.

- Changing the begin and end time (and by proxy, duration) of transitions by dragging the transition at the top of the timeline.

- Changing the offset of the target Animation Clip by dragging the bottom Animation Clip left to right.



The white line at the top is the Pivot Weight of both animations over time. This is the most stable point between the left and right foot of the avatar, where the left foot is 0 and the right foot is 1. This is affected by animating the Root Transform Position with Bake Into Pose disabled. This is practically useless, but for if you were ever wondering :)


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![An example of the Visual Transition Editor.](./1323630918.png)
An example of the Visual Transition Editor.



In this example Visual Transition Editor, you can see that:


- Exit Time is 0, since the Transition starts at the beginning of the Old State.

- Transition Offset is 0, since the Transition starts at the beginning of the New State.

- Old State’s Animation Clip has Loop Time on, since it repeats after the first play.

- New State’s Animation Clip has Loop Time off, since it doesn’t repeat after the first play.

- Transition Duration is set to 1, with Fixed Duration off, since the transition lasts a full animation of the Old State’s Animation Clip.

</div><div className='notion-spacer'></div>
</div>


---


## Condition List {#9a83c162b77440d4b00639819f630d28}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5625)'}}>


The `Condition List` is the list of Animator Conditions on an Animator Transition marked `Conditions`. This list contains all the Animator Conditions that should _all_ be passed to trigger the Animator Transition to happen. To create a new Animator Condition, press the `+` button at the bottom of the `Conditions List`, and to remove the currently highlighted Animator Condition, press the  `-` button at the bottom of the `Conditions List`.




All different Animator Conditions are shown in the image to the right, where the target of `Float` can be any floating point (fraction) number, the target of `Int` can be any Integer (whole) number, and the target of `Bool` can only be True or False. Note that `Trigger` does not have a target, as it will trigger when the trigger is enabled, which will “Consume” the trigger and disable it.




This means that if you want to have two conditions have to be met simultaneously to trigger the Animator Transition (AND logic), you would want two conditions on one Animator Transition. If you want to have either condition met to trigger the Animator Transition (OR logic), you would want to have two separate Animator Transitions, each with one Animator Condition.




Example:



there are two Animator Conditions in the `Conditions List`: `IntExample Greater 1` and `FloatExample Less 9.5`.



If `IntExample` is set to 1, and `FloatExample` is set to 5, this wouldn’t trigger the Animator Transition, since `IntExample` isn’t Greater than 1, and all conditions need to be met to trigger the Animator Transition. If `IntExample` was set to 2, it would trigger the Animator Transition since all conditions are met. 


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.4375)'}}>


![An example Condition List with every possible Animator Condition type shown. Note how the TriggerExample Animator Condition is selected and would be deleted if the - button would be pressed.](./50135509.png)
An example Condition List with every possible Animator Condition type shown. Note how the TriggerExample Animator Condition is selected and would be deleted if the - button would be pressed.



</div><div className='notion-spacer'></div>
</div>


---


## Any State {#14b2ba5c6c8a47a1b715407af9235384}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


`Any State Transitions` are special transitions that are made by `Right Click`ing the blue `Any State` and clicking Make Transition, and clicking the target Animator State. They differ from normal Animator Transitions by that an `Any State Transition` acts like the Animator Transition comes from all Animator States (so any Animator State can trigger that Animator Transition). They also have the ability to Interrupt any Transition (see Interruptions).




They have an extra toggle that other Animator Transitions don’t have, namely `Can Transition To Self`, which sets whether or not the target Animator State can transition to itself using this Animator Transition.



</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![An example Any State Transition. Note the extra Can Transition To Self option.](./1149417968.png)
An example Any State Transition. Note the extra Can Transition To Self option.


</div><div className='notion-spacer'></div>
</div>


---


 [Untitled](https://www.notion.so/1157566ec16b440ba06c2c4f7a0ac7b1) 


---
title: Contact Receivers/Senders
sidebar_position: 12
slug: Contacts
last_edited: 2024-03-31T08:54:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)



# Contact Receivers/Senders {#fdf799caee1341c89333bf425ed89408}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Contact Receivers and Contact Senders are VRChat components added in the Avatar Dynamics update that allows Contact Receivers to set parameters based on the presence of a Contact Sender. This is some of the only available technology that allows for interaction across avatars, and the setting of parameters. They are, together with Phys Bones, the main point of user interaction for most complex avatar systems.



In essence: when a Contact Sender is inside of a Contact Receiver, and they have the same tag set (Ex: `Finger`), then the Contact Receiver will set a parameter, which you can use to make a toggle. This is how headpat and nose boop systems work.



To see them in the Scene view, you have to: 


- Have Gizmos enabled (the setting for this is in the top right of the scene view)
- Have either the contact or one of its parents selected
- Have the GameObject the Contact is on enabled


</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![A Contact Sender (left) and a Contact Receiver (right) in the scene view. Note that Gizmos is enabled, and they are selected in the hierarchy, otherwise they don’t show up.](./Contacts.3fefaded-ed2f-4308-a615-9614821c53b9.png)<br/><GreyItalicText>A Contact Sender (left) and a Contact Receiver (right) in the scene view. Note that Gizmos is enabled, and they are selected in the hierarchy, otherwise they don’t show up.</GreyItalicText>


</div><div className='notion-spacer'></div>
</div>


---


## Contact Senders {#bc128130016047ae84ccb47556553de6}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5625)'}}>


Contact Senders are quite a simple component.



When they are enabled and inside of a Contact Receiver, the Receiver sets a parameter on the avatar’s Playable Layers (for example the FX Layer), however, most of the hard to grasp settings are on the Receiver. The Contact sender has the following settings:


- **Root Transform**: The GameObject the component originates from. If this is the hip bone for example, the Contact Sender will follow the hip bone. If left empty, the GameObject the Contact Sender is on is used
- **Shape**: Either a `Sphere` or `Capsule`. The capsule is two half spheres, combined by a cylinder
	- **Radius**: On `Sphere`: the radius of the sphere. On `Capsule`: the radius of the two half spheres and the cylinder
	- **Height**: On `Capsule`: the height of the cylinder
- **Position**: The position offset from the Root Transform in local space
- **Rotation**: The rotation offset from the Root Transform in local space
- **Collision Tags**: The list of collision tags. A Contact Sender will interact with a Contact Receiver if any of the tags on the Contact Receiver match any of the tags on the Contact Sender
	- So say you have a Contact Sender with tag list `Test1`, `Test2` and you have a Contact Receiver with tag list `Test1`, `Test3`, they will interact since they both have `Test1` in their tag list

</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.43750000000000006)'}}>


![](./Contacts.f880419a-36c0-410d-ad31-cdc0faad98a3.png)


</div><div className='notion-spacer'></div>
</div>


VRChat automatically adds Contact Senders at all the colliders in the Colliders section of the Avatar Descriptor, with the tags that you can see in the Collision Tag dropdown.


---


## Contact Receivers {#98f210ee925e4eabaf7a37d7d7535822}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.625)'}}>


Contact Receivers are where the magic happens.



When they are enabled and have a Contact Sender in their bounds, they will set a parameter of the avatar’s Playable Layers (for example the FX Layer). They have the same settings as the sender, with some additional settings:


- **Allow Self**: Allow Contact Senders of the person wearing the avatar to trigger the Contact Receiver
- **Allow Others**: Allow Contact Senders of people not wearing the avatar to trigger the Contact Receiver
- **Local Only**: Remove the Contact Receiver on the machines of everyone who isn’t the person wearing the avatar.
	- This is often used in combination with putting the parameter on the VRC Expression Parameter list to make the interaction happen locally and sync the result, being more consistent but costing parameter memory.
- **Receiver Types**:
	- **Constant**: Whenever a Contact Sender with a matching tag is inside the Contact Receiver’s area, the parameter will be constantly kept to 1.0, and when there is no Contact Sender with a matching tag inside the Contact Receiver, the parameter will be constantly kept to 0.0.
	- **On Enter**: Whenever a Contact Sender with a matching tag enters the Contact Receiver’s area with at least a velocity of `Min Velocity`, the parameter will be set to 1.0 for one frame, before being set to 0.0 again.
	- **Proximity**: Whenever a Contact Sender with a matching tag is inside the Contact Receiver’s area, the parameter will be set based on the minimum distance to the center of the Contact Receiver (or center line if the Shape is `Capsule`). So if the closest point of the Contact Sender is in the exact center of the Contact Receiver, its parameter value will be set to 1.0. If the closest point is halfway between the center and the outside, its parameter value will be set to 0.5, etc.
		- Note: These parameter values are subject to [Expression Parameter Mismatching](/docs/Other/Parameter-Mismatching). This means that you can use other parameter types and get the following results:
			- `Float` On: 1.0. off: 0.0
			- `Int` On: 1. Off: 0
			- `Bool` On: True. Off: False
- **Parameter**: The name of the parameter to set. For example, if you have a parameter on your FX Layer named `Boop`, then this field should contain the name of this parameter: `Boop`

</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.37500000000000006)'}}>


![](./Contacts.41a22af9-6035-4e3a-a708-8e558054da7a.png)


</div><div className='notion-spacer'></div>
</div>


---


## Miscellaneous {#204b815eb3ba49c7af6c32aef243e484}


Some quirks of Contact Senders and Receivers:

- Changing Contact Values with animations at runtime is not possible
- Having two or more Contact Receivers with the same parameter chooses the last one to be enabled as the one that controls the parameter
- [Gesture Manager](https://github.com/BlackStartx/VRC-Gesture-Manager) has a utility where you can click contacts in the game view to enable them


---
<RightAlignedText>Last Updated: 31 March 2024 08:54:00</RightAlignedText>
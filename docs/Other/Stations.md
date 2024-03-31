---
title: Stations
sidebar_position: 6
slug: Stations
last_edited: 2024-03-31T08:54:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)



# Stations {#87fbdae8d9e84d56804bd655c18d079b}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


Stations (also knows as “seats”) allow other users to sit on certain places of the avatar and move with you. They require a Collider on the same object as the Station (which will be the area the user can click on). Generally, Box Colliders are used for this.



Once the other user is sitting in your Station, you can use an Animator Controller to change their avatar. By default VRChat will play a default sitting animation when seated in a station. Players can (by default) leave a station by moving while inside the station.



:::caution

Never toggle a Station’s GameObject on or off. Either toggle the Mesh Renderers or Colliders to show/hide and enable/disable seats.

:::





</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 0.5)'}}>


![](./2049233100.png)


</div><div className='notion-spacer'></div>
</div>


They have multiple settings:

- **Player Mobility**: Whether or not the user can walk around while sitting in the Station
	- Note: This is useless on avatars since any walking will always exit the station anyways
- **Can Use Station From Station**: Whether the user is allowed to enter other Stations while sitting in this Station
- **Animator Controller**: The Animator Controller to replace the avatar’s Sitting controller with
- **Disable Station Exit**: Allows the user to walk without exiting the station. Stations can always be exited by pulling the trigger in VR
	- Note: this will get set to false on Avatar stations, these can always be exit by walking
- **Seated**: Whether or not the Seated boolean will be set to True for the Avatar’s Playable Layers
- **Player Enter Location**: Location that the player will be sent to when seated
- **Player Exit Location**: Location the player will leave at when unseated
	- **API Object**: Useless for us, can be ignored

Note that parameter drivers on Stations work for now, but can drive existing parameters.


Stations are generally used in worlds, and rarely see use on avatars, mainly as a gimmick to move people around.



---
<RightAlignedText>Last Updated: 31 March 2024 08:54:00</RightAlignedText>
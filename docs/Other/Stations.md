---
title: Stations
sidebar_position: 7
slug: Stations
last_edited: 2024-04-05T09:56:00.000Z
contributors: "[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/), [Tohru](https://vrchat.com/home/user/usr_c0fc02b2-ca09-4e34-bb39-09b7eed2838a)"
---
Contributors: [Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/), [Tohru](https://vrchat.com/home/user/usr_c0fc02b2-ca09-4e34-bb39-09b7eed2838a)



# Stations {#87fbdae8d9e84d56804bd655c18d079b}


<div class='notion-row'>
<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 1)'}}>


Stations (also knows as “seats”) allow other users to sit on certain places of the avatar and move with you. They require a Collider on the same object as the Station (which will be the area the user can click on). Generally, Box Colliders are used for this. If no collider is present, VRChat will add a box collider.



Once the other user is sitting in your Station, you can use an Animator Controller to manipulate their avatar, including playing animations and running parameter drivers. By default VRChat will play a default sitting animation when seated in a station. Players can leave a station by moving while inside the station.



:::caution

Stations’ GameObjects have to be enabled in the hierarchy upon upload, or else they will not work.

:::





There are two ways to toggle Stations:


- Enabling/disabling the GameObject itself: this will kick out anyone sitting in the station
- Enabling/disabling the Collider: this will stop anyone new from sitting, but will not kick the current user out.

</div><div className='notion-spacer'></div>

<div class='notion-column' style={{width: 'calc((100% - (min(32px, 4vw) * 1)) * 1)'}}>


![](./2049233100.png)


</div><div className='notion-spacer'></div>
</div>


:::caution

There are a few requirements for Stations to work:
- The Entry and Exit points need to be within 2 meters of each other in game upon load in. They can be moved further afterwards.
- You can only have 6 stations on an avatar. Any more will be disabled.

:::




---


## Settings {#ec2d4e550965406b9a3800c01e132482}


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
- **API Object**: Useless for Avatars, can be ignored

Note that parameter drivers on Stations work for now, but can only drive existing parameters.


Stations are generally used in worlds, and rarely see use on avatars, mainly as a gimmick to move people around.



---
<RightAlignedText>Last Updated: 05 April 2024 09:56:00</RightAlignedText>
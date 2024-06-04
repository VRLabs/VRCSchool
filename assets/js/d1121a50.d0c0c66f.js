"use strict";(self.webpackChunkvrc_school=self.webpackChunkvrc_school||[]).push([[5494],{8362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var i=n(5893),s=n(1151);const r={title:"Stations",sidebar_position:7,slug:"Stations",last_edited:new Date("2024-04-05T09:56:00.000Z"),contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/), [Tohru](https://vrchat.com/home/user/usr_c0fc02b2-ca09-4e34-bb39-09b7eed2838a)"},o="Stations {#87fbdae8d9e84d56804bd655c18d079b}",a={id:"Other/Stations",title:"Stations",description:"Contributors: Jellejurre, JustSleightly, Tohru",source:"@site/docs/Other/Stations.md",sourceDirName:"Other",slug:"/Other/Stations",permalink:"/docs/Other/Stations",draft:!1,unlisted:!1,editUrl:"https://github.com/VRLabs/VRCSchool/tree/main/docs/Other/Stations.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Stations",sidebar_position:7,slug:"Stations",last_edited:"2024-04-05T09:56:00.000Z",contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/), [Tohru](https://vrchat.com/home/user/usr_c0fc02b2-ca09-4e34-bb39-09b7eed2838a)"},sidebar:"sideBar",previous:{title:"Designing Scale-Friendly Systems",permalink:"/docs/Other/Scale-Friendly"},next:{title:"Sub-Animator Techniques",permalink:"/docs/Other/Sub-Animator"}},l={},h=[{value:"Settings",id:"ec2d4e550965406b9a3800c01e132482",level:2}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{RightAlignedText:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("RightAlignedText",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Contributors: ",(0,i.jsx)(t.a,{href:"https://jellejurre.dev/",children:"Jellejurre"}),", ",(0,i.jsx)(t.a,{href:"https://vrc.sleightly.dev/",children:"JustSleightly"}),", ",(0,i.jsx)(t.a,{href:"https://vrchat.com/home/user/usr_c0fc02b2-ca09-4e34-bb39-09b7eed2838a",children:"Tohru"})]}),"\n",(0,i.jsx)(t.h1,{id:"87fbdae8d9e84d56804bd655c18d079b",children:"Stations"}),"\n",(0,i.jsxs)("div",{class:"notion-row",children:[(0,i.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 1)"},children:[(0,i.jsx)(t.p,{children:"Stations (also knows as \u201cseats\u201d) allow other users to sit on certain places of the avatar and move with you. They require a Collider on the same object as the Station (which will be the area the user can click on). Generally, Box Colliders are used for this. If no collider is present, VRChat will add a box collider."}),(0,i.jsx)(t.p,{children:"Once the other user is sitting in your Station, you can use an Animator Controller to manipulate their avatar, including playing animations and running parameter drivers. By default VRChat will play a default sitting animation when seated in a station. Players can leave a station by moving while inside the station."}),(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"Stations\u2019 GameObjects have to be enabled in the hierarchy upon upload, or else they will not work."})}),(0,i.jsx)(t.p,{children:"There are two ways to toggle Stations:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Enabling/disabling the GameObject itself: this will kick out anyone sitting in the station"}),"\n",(0,i.jsx)(t.li,{children:"Enabling/disabling the Collider: this will stop anyone new from sitting, but will not kick the current user out."}),"\n"]})]}),(0,i.jsx)("div",{className:"notion-spacer"}),(0,i.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 1)"},children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(5173).Z+"",width:"637",height:"228"})})}),(0,i.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,i.jsxs)(t.admonition,{type:"caution",children:[(0,i.jsx)(t.p,{children:"There are a few requirements for Stations to work:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The Entry and Exit points need to be within 2 meters of each other in game upon load in. They can be moved further afterwards."}),"\n",(0,i.jsx)(t.li,{children:"You can only have 6 stations on an avatar. Any more will be disabled."}),"\n"]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"ec2d4e550965406b9a3800c01e132482",children:"Settings"}),"\n",(0,i.jsx)(t.p,{children:"They have multiple settings:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Player Mobility"}),": Whether or not the user can walk around while sitting in the Station","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Note: This is useless on avatars since any walking will always exit the station anyways"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Can Use Station From Station"}),": Whether the user is allowed to enter other Stations while sitting in this Station"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Animator Controller"}),": The Animator Controller to replace the avatar\u2019s Sitting controller with"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Disable Station Exit"}),": Allows the user to walk without exiting the station. Stations can always be exited by pulling the trigger in VR","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Note: this will get set to false on Avatar stations, these can always be exit by walking"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Seated"}),": Whether or not the Seated boolean will be set to True for the Avatar\u2019s Playable Layers"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Player Enter Location"}),": Location that the player will be sent to when seated"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Player Exit Location"}),": Location the player will leave at when unseated"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"API Object"}),": Useless for Avatars, can be ignored"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Note that parameter drivers on Stations work for now, but can only drive existing parameters."}),"\n",(0,i.jsx)(t.p,{children:"Stations are generally used in worlds, and rarely see use on avatars, mainly as a gimmick to move people around."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(r,{children:"Last Updated: 05 April 2024 09:56:00"})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},5173:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/2049233100-87280f72676311cf676ba2e170f06ccf.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(7294);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);
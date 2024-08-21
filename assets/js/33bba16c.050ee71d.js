"use strict";(self.webpackChunkvrc_school=self.webpackChunkvrc_school||[]).push([[6850],{9685:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var n=t(5893),i=t(1151);const a={title:"Axis Puppets (2-Axis/4-Axis)",sidebar_position:13,slug:"Axis-Puppets",last_edited:new Date("2024-03-31T08:54:00.000Z"),contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},o="2-Axis Puppets {#0ace46b18d1e4ce29d1e7f5f31493e45}",r={id:"Avatars/Axis-Puppets",title:"Axis Puppets (2-Axis/4-Axis)",description:"Contributors: Jellejurre, JustSleightly",source:"@site/docs/Avatars/Axis-Puppets.md",sourceDirName:"Avatars",slug:"/Avatars/Axis-Puppets",permalink:"/docs/Avatars/Axis-Puppets",draft:!1,unlisted:!1,editUrl:"https://github.com/VRLabs/VRCSchool/tree/main/docs/Avatars/Axis-Puppets.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Axis Puppets (2-Axis/4-Axis)",sidebar_position:13,slug:"Axis-Puppets",last_edited:"2024-03-31T08:54:00.000Z",contributors:"[Jellejurre](https://jellejurre.dev/), [JustSleightly](https://vrc.sleightly.dev/)"},sidebar:"sideBar",previous:{title:"Contact Receivers/Senders",permalink:"/docs/Avatars/Contacts"},next:{title:"Built-In VRC Parameters",permalink:"/docs/Avatars/VRC-Parameters"}},l={},c=[{value:"2D Blend Tree",id:"a4e887b48ee541c9aa81a80ff61a147c",level:2},{value:"Applications of 2-Axis Puppets",id:"b79f895b35fc47e28cb1792b4d359dd2",level:3},{value:"Transforms",id:"transforms",level:4},{value:"Drone Movement",id:"drone-movement",level:4},{value:"4-Axis Puppets",id:"0b9dffcd56a147a8a0ef38118546d2f9",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components},{RightAlignedText:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("RightAlignedText",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Contributors: ",(0,n.jsx)(s.a,{href:"https://jellejurre.dev/",children:"Jellejurre"}),", ",(0,n.jsx)(s.a,{href:"https://vrc.sleightly.dev/",children:"JustSleightly"})]}),"\n",(0,n.jsx)(s.h1,{id:"0ace46b18d1e4ce29d1e7f5f31493e45",children:"2-Axis Puppets"}),"\n",(0,n.jsxs)(s.p,{children:["2-Axis Puppets are a type of Expression Menu Control (See ",(0,n.jsx)(s.a,{href:"/docs/Avatars/Expressions-Menu-Params",children:"Expressions Menu and Parameters"}),") that allow you to set a combination of 2 floats based on the direction of a puppet\u2019s thumbstick. This article will go over some common use cases and how to set them up."]}),"\n",(0,n.jsxs)(s.p,{children:["This article will assume you know how to record certain values into Animation Clips. If you don\u2019t know this, a step by step guide is given in the ",(0,n.jsx)(s.a,{href:"/docs/Unity-Animations/Animation-Clips",children:"Animation Clips"})," article."]}),"\n",(0,n.jsxs)(s.p,{children:["The most common way of utilizing a 2-axis puppet is using a ",(0,n.jsx)(s.strong,{children:"2D Blend Tree"}),"."]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"a4e887b48ee541c9aa81a80ff61a147c",children:"2D Blend Tree"}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsxs)(s.p,{children:["With a 2D Blend Tree animation, in a standard example you will need at least five animations, each representing a different position of the thumbstick: ",(0,n.jsx)(s.strong,{children:"Up, Down, Left, Right, Center."})]}),(0,n.jsx)(s.p,{children:"To use this blend tree for a Tail Control, make sure your 2-Axis Puppet Horizontal and Vertical Parameters are added to your FX layer as Floats, and add a new layer. Set the layer weight to 1 by clicking on the Gear icon, and dragging the Weight to 1."}),(0,n.jsxs)(s.p,{children:["Then, select your new layer, give it a new name by double clicking it, and create a new state in the layer with a blend tree by ",(0,n.jsx)(s.code,{children:"Right Clicking"})," \u2192 ",(0,n.jsx)(s.code,{children:"Create State"})," \u2192 ",(0,n.jsx)(s.code,{children:"From New Blend Tree"}),",  which will have as its Blend Type set to ",(0,n.jsx)(s.code,{children:"2D Freeform Directional"}),", its children as the five animations described above, and its Blend Parameters as 2-Axis Horizontal and Vertical Parameters."]}),(0,n.jsx)(s.p,{children:"The five animations should be given X/Y Position values that put them at their respective directions from the center (see example image)."})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(2044).Z+"",width:"1362",height:"602"})})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsxs)("div",{class:"notion-row",children:[(0,n.jsxs)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:[(0,n.jsxs)(s.p,{children:["Depending on the sensitivity of a user\u2019s thumbstick, it may be a good idea to incorporate ",(0,n.jsx)(s.strong,{children:"deadzones"})," around the center animation."]}),(0,n.jsx)(s.p,{children:"This examples also demonstrates that the 2D Blend Tree is not limited to specifically 5 animation clips, but any number above or below as well. Additional clips can be added at the diagonals, or in between each other depending on how far the thumbstick is pressed."})]}),(0,n.jsx)("div",{className:"notion-spacer"}),(0,n.jsx)("div",{class:"notion-column",style:{width:"calc((100% - (min(32px, 4vw) * 1)) * 0.5)"},children:(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(4935).Z+"",width:"633",height:"610"})})}),(0,n.jsx)("div",{className:"notion-spacer"})]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"b79f895b35fc47e28cb1792b4d359dd2",children:"Applications of 2-Axis Puppets"}),"\n",(0,n.jsxs)(s.p,{children:["Anything that you can animate in an animation clip can be manipulated by a 2-Axis Puppet. For some examples, see ",(0,n.jsx)(s.a,{href:"/docs/Unity-Animations/Types-Of-Animations",children:"Types of Animation Clips"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Below are some common use cases"}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h4,{id:"transforms",children:"Transforms"}),"\n",(0,n.jsx)(s.p,{children:"2-Axis puppets are often used to move objects around, such as manual tail wagging, ear control, eye control, and other body parts."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h4,{id:"drone-movement",children:"Drone Movement"}),"\n",(0,n.jsx)(s.p,{children:"A more advanced application that is also a common use of 2-axis puppets is to control an objects movement in world space. Flying drones, RC cars, remote control followers, flying cameras, and more all use 2-axis puppets to control this movement."}),"\n",(0,n.jsx)(s.p,{children:"Puppet menus can also be opened in each hand and controlled with separate thumbsticks, to simulate a dual thumbstick controller."}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h2,{id:"0b9dffcd56a147a8a0ef38118546d2f9",children:"4-Axis Puppets"}),"\n",(0,n.jsxs)(s.p,{children:["4-Axis Puppets are a type of Expression Menu Control (See ",(0,n.jsx)(s.a,{href:"/docs/Avatars/Expressions-Menu-Params",children:"Expressions Menu and Parameters"}),") that allow you to set a combination of 4 floats based on the direction of a puppet\u2019s thumbstick."]}),"\n",(0,n.jsxs)(s.p,{children:["There are no typical uses for 4-Axis puppets since there aren\u2019t exactly 4D Blend Trees, so 4-Axis puppets are typically used for concepts that do not represent different directions, perhaps using ",(0,n.jsx)(s.a,{href:"/docs/Other/Parameter-Mismatching",children:"Expression Parameter Mismatching"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["The most common use of 4-Axis puppets is ironically not to use the puppet itself, but to ",(0,n.jsx)(s.a,{href:"https://creators.vrchat.com/avatars/animator-parameters/#sync-types",children:"force IK Sync rate"})," for all of the puppets\u2019 floats. This is typically used for VRC Face Tracking users."]}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(a,{children:"Last Updated: 31 March 2024 08:54:00"})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},4935:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/Axis-Puppets.9118ddfb-c077-4c5e-8838-04e6be0e2632-003d8620bb17494a2f360ec626ce31ab.png"},2044:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/Axis-Puppets.f3ba614a-9bae-4ea0-8628-759941f23dfd-7fd912006b8c819dffce1d54c31f3f56.png"},1151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var n=t(7294);const i={},a=n.createContext(i);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);
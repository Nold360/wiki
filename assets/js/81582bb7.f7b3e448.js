"use strict";(self.webpackChunknoldwiki=self.webpackChunknoldwiki||[]).push([[979],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||l;return a?r.createElement(k,o(o({ref:t},d),{},{components:a})):r.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1579:function(e,t,a){a.r(t),a.d(t,{default:function(){return s},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),l=(a(7294),a(3905)),o=["components"],i={title:"My FAILED Cyberdeck Build",id:"failcyberdeck",slug:"/Cyberfail",tags:["cyberdeck","fail","diy","modding","hardware"]},p={unversionedId:"Projects/failcyberdeck",id:"Projects/failcyberdeck",isDocsHomePage:!1,title:"My FAILED Cyberdeck Build",description:"//Comment: I failed using the RockPiN10 because i couldn't get my eDP display working. And bought a DSI display that also didn't work [thx waveshare for blob shit drivers]",source:"@site/docs/Projects/Failed-Cyberdeck.md",sourceDirName:"Projects",slug:"/Cyberfail",permalink:"/Cyberfail",editUrl:"https://github.com/nold360/wiki/edit/master/docs/Projects/Failed-Cyberdeck.md",version:"current",frontMatter:{title:"My FAILED Cyberdeck Build",id:"failcyberdeck",slug:"/Cyberfail",tags:["cyberdeck","fail","diy","modding","hardware"]},sidebar:"sidebar",previous:{title:"My Cyberdeck Build",permalink:"/Cyberdeck"}},c=[{value:"Planned Features",id:"planned-features",children:[{value:"Must have",id:"must-have",children:[]},{value:"Should have",id:"should-have",children:[]},{value:"Could have / other ideas",id:"could-have--other-ideas",children:[]}]},{value:"Components",id:"components",children:[]},{value:"Case",id:"case",children:[]},{value:"Custom PCBs",id:"custom-pcbs",children:[{value:"eDP Adapter",id:"edp-adapter",children:[]}]},{value:"Software",id:"software",children:[{value:"Theming XFCE",id:"theming-xfce",children:[]},{value:"Icons",id:"icons",children:[]},{value:"Conky",id:"conky",children:[]}]}],d={toc:c};function s(e){var t=e.components,i=(0,n.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"//Comment: I failed using the RockPiN10 because i couldn't get my eDP display working. And bought a DSI display that also didn't work ","[thx waveshare for blob shit drivers]"),(0,l.kt)("p",null,"I'm a big long time cyberpunk fan even before reading Neuromancer. After getting addicted to mechanical keyboards and building many portable gaming consoles, i feel like it's time to finally build my own cyberdeck!"),(0,l.kt)("p",null,"The deck is supposed to be a portable computer like a notebook. Small but usable. The GPIO & other external interfaces of the SBC ","[Single Board Computers]"," should all be accessable from the outside. For the keyboard there is only one option, a mechanical one. Preferable a custom build, or something in the 60% to 40% area. A mouse is optinal but a trackpad/-ball would be benefitial."),(0,l.kt)("h2",{id:"planned-features"},"Planned Features"),(0,l.kt)("h3",{id:"must-have"},"Must have"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Batteries with charge & play"),(0,l.kt)("li",{parentName:"ul"},"Powerfull SBC"),(0,l.kt)("li",{parentName:"ul"},"Mechanical keyboard"),(0,l.kt)("li",{parentName:"ul"},"GPIO breakout"),(0,l.kt)("li",{parentName:"ul"},"Internal Speakers")),(0,l.kt)("h3",{id:"should-have"},"Should have"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Trackball / -pad"),(0,l.kt)("li",{parentName:"ul"},"Software defined radio with external antenna"),(0,l.kt)("li",{parentName:"ul"},"Internal USB-Hub for additional internal devices ","[SDR, GPS, Keyboard, ...]"),(0,l.kt)("li",{parentName:"ul"},"EL-Wire for cyberpunk fanciness")),(0,l.kt)("h3",{id:"could-have--other-ideas"},"Could have / other ideas"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GPS with internal antenna"),(0,l.kt)("li",{parentName:"ul"},"Solar panel for charging"),(0,l.kt)("li",{parentName:"ul"},"External wifi antenna"),(0,l.kt)("li",{parentName:"ul"},"LoRa?")),(0,l.kt)("h2",{id:"components"},"Components"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Part"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://wiki.radxa.com/RockpiN10"},"Rock Pi N10")),(0,l.kt)("td",{parentName:"tr",align:null},"Powerfull SBC to drive my deck")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.friendlyarm.com/index.php?route=product/product&product_id=230"},"HD702E LCD")),(0,l.kt)("td",{parentName:"tr",align:null},'7" Display with eDP interface')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://kprepublic.com/products/jj50-50-custom-keyboard-pcb-similar-with-preonic"},"JJ50")),(0,l.kt)("td",{parentName:"tr",align:null},"Small mechanical keyboard")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://shop.pimoroni.com/products/trackball-breakout"},"Trackball")),(0,l.kt)("td",{parentName:"tr",align:null},"The Pimoroni Trackball Breakout seems like a good option")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Batteries"),(0,l.kt)("td",{parentName:"tr",align:null},"Depends on the space i have in the case")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.heldergametech.com/shop/gameboy-zero/retropsu/"},"RetroPSU")),(0,l.kt)("td",{parentName:"tr",align:null},"Helder's RetroPSU seems like a good battery management solution")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ELWire & Transformator"),(0,l.kt)("td",{parentName:"tr",align:null},"Ordered some green ELWire with a cheap 5V transformator, let's hope it's not too noisy")))),(0,l.kt)("h2",{id:"case"},"Case"),(0,l.kt)("p",null,"I will design the case from scratch in fusion 360 and will be made open source if it turns out good."),(0,l.kt)("h2",{id:"custom-pcbs"},"Custom PCBs"),(0,l.kt)("h3",{id:"edp-adapter"},"eDP Adapter"),(0,l.kt)("p",null,"To match the eDP interface of the Rock Pi N10 to the display, i had to design a custom PCB. The design is already finished & the PCBs have been produced by OSHPark."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"PCB-Front",src:a(7262).Z}),"\n",(0,l.kt)("img",{alt:"PCB-Back",src:a(4648).Z})),(0,l.kt)("h2",{id:"software"},"Software"),(0,l.kt)("h3",{id:"theming-xfce"},"Theming XFCE"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/p/1320508/"},"https://www.xfce-look.org/p/1320508/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/p/1400299/"},"https://www.xfce-look.org/p/1400299/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/p/1559880/"},"https://www.xfce-look.org/p/1559880/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/p/1315893/"},"https://www.xfce-look.org/p/1315893/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/p/1408367/"},"https://www.xfce-look.org/p/1408367/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/p/1306506/"},"https://www.xfce-look.org/p/1306506/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/p/1508333/"},"https://www.xfce-look.org/p/1508333/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/p/1613474/"},"https://www.xfce-look.org/p/1613474/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.pling.com/p/1235909/"},"https://www.pling.com/p/1235909/"))),(0,l.kt)("h3",{id:"icons"},"Icons"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/s/XFCE/p/1460991"},"https://www.xfce-look.org/s/XFCE/p/1460991")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/s/XFCE/p/1316887"},"https://www.xfce-look.org/s/XFCE/p/1316887")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.xfce-look.org/s/XFCE/p/1436570"},"https://www.xfce-look.org/s/XFCE/p/1436570"))),(0,l.kt)("h3",{id:"conky"},"Conky"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.pling.com/p/1115068"},"https://www.pling.com/p/1115068")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.pling.com/p/1112273"},"https://www.pling.com/p/1112273")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.pling.com/p/1114967"},"https://www.pling.com/p/1114967")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.pling.com/p/1197920"},"https://www.pling.com/p/1197920"))))}s.isMDXComponent=!0},4648:function(e,t,a){t.Z=a.p+"assets/images/edp-adapter-pcb-back-f7679d3836b4e986f57c0d41c2a115b1.png"},7262:function(e,t,a){t.Z=a.p+"assets/images/edp-adapter-pcb-front-0188a287954ed77cc7b51b0caa81b4fa.png"}}]);
"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[3614],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(n),m=o,f=l["".concat(p,".").concat(m)]||l[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9597:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Introduction",id:"introduction"},p=void 0,d={unversionedId:"develop/dapps-on-swarm/introduction",id:"develop/dapps-on-swarm/introduction",title:"Introduction",description:"Swarm is designed with dapps in mind, and much time has been devoted to designing patterns and prototying ways to build 2nd layer dapps on top of the DISC that Bee provides! Read much more about how to structure your data and build unstoppable dapps in The Book of Swarm .",source:"@site/docs/develop/dapps-on-swarm/introduction.md",sourceDirName:"develop/dapps-on-swarm",slug:"/develop/dapps-on-swarm/introduction",permalink:"/docs/develop/dapps-on-swarm/introduction",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/dapps-on-swarm/introduction.md",tags:[],version:"current",frontMatter:{title:"Introduction",id:"introduction"},sidebar:"develop",previous:{title:"Pinning",permalink:"/docs/develop/access-the-swarm/pinning"},next:{title:"Develop on Bee",permalink:"/docs/develop/dapps-on-swarm/develop-on-bee"}},u={},l=[{value:"Developing on Bee",id:"developing-on-bee",level:2},{value:"Bee JS",id:"bee-js",level:2},{value:"Chunk Types",id:"chunk-types",level:2},{value:"Feeds",id:"feeds",level:2},{value:"PSS",id:"pss",level:2}],c={toc:l},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Swarm is designed with dapps in mind, and much time has been devoted to designing patterns and prototying ways to build 2nd layer dapps on top of the DISC that Bee provides! Read much more about how to structure your data and build unstoppable dapps in ",(0,a.kt)("a",{href:"/the-book-of-swarm.pdf",target:"_blank",rel:"noopener noreferrer"},"The Book of Swarm")," ."),(0,a.kt)("h2",{id:"developing-on-bee"},"Developing on Bee"),(0,a.kt)("p",null,"Bee isn't just for mining xBZZ - learn how to ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/dapps-on-swarm/develop-on-bee"},"use Bee for all your dapp development, production infrastructure and deployment needs"),"!"),(0,a.kt)("h2",{id:"bee-js"},"Bee JS"),(0,a.kt)("p",null,"Our maverick JavaScript team, the Bee-Gees (\ud83d\udd7a), have been working hard in the last few months to build some impressive tools for all you budding dapp developer Bees to get stuck into! Find out how to use the ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/dapps-on-swarm/bee-js"},"bee-js")," JavaScript library to start creating your own that live and work on Swarm!"),(0,a.kt)("h2",{id:"chunk-types"},"Chunk Types"),(0,a.kt)("p",null,"Swarm contains 3 types of chunks which enable us to build novel\nstructures of how data can be stored in the swarm - in a completely\ndecentralised way. Learn more about\n",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/dapps-on-swarm/chunk-types"},"chunk types"),"\nto change the way you deal with data in your dapps forever!"),(0,a.kt)("h2",{id:"feeds"},"Feeds"),(0,a.kt)("p",null,"Swarm's single owner chunks have been cleverly combined to create user\ngenerated ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/dapps-on-swarm/feeds"},"feeds")," in the swarm, see this\nexample of how chunks are combined into a useful data structure you\ncan use to build amazing applications."),(0,a.kt)("h2",{id:"pss"},"PSS"),(0,a.kt)("p",null,"Hey there! Pss! \ud83e\udd2b Swarm's trojan chunks are implemented in Bee to\ndeliver ",(0,a.kt)("a",{parentName:"p",href:"/docs/develop/dapps-on-swarm/pss"},"Postal Service on Swarm")," - a\npub-sub system that provides a totally leak-proof messaging system\nover the swarm."))}f.isMDXComponent=!0}}]);
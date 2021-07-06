(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[2922],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=o,h=c["".concat(p,".").concat(m)]||c[m]||l[m]||a;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4199:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d},default:function(){return l}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),s=["components"],i={title:"Develop on Bee",id:"develop-on-bee"},p={unversionedId:"dapps-on-swarm/develop-on-bee",id:"dapps-on-swarm/develop-on-bee",isDocsHomePage:!1,title:"Develop on Bee",description:"Bee is the first client to work with the Swarm network.",source:"@site/docs/dapps-on-swarm/develop-on-bee.md",sourceDirName:"dapps-on-swarm",slug:"/dapps-on-swarm/develop-on-bee",permalink:"/docs/dapps-on-swarm/develop-on-bee",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/dapps-on-swarm/develop-on-bee.md",version:"current",frontMatter:{title:"Develop on Bee",id:"develop-on-bee"},sidebar:"Balls",previous:{title:"Dapps On Swarm",permalink:"/docs/dapps-on-swarm/introduction"},next:{title:"Bee JS",permalink:"/docs/dapps-on-swarm/bee-js"}},d=[{value:"Setting Up Bee for Developing Dapps",id:"setting-up-bee-for-developing-dapps",children:[]},{value:"Hosting Your Dapps &amp; Storing Their Data",id:"hosting-your-dapps--storing-their-data",children:[]},{value:"Your Data Structures on Swarm",id:"your-data-structures-on-swarm",children:[]},{value:"Bee Proxy Mode",id:"bee-proxy-mode",children:[]},{value:"Dapps With Swarm Gateways",id:"dapps-with-swarm-gateways",children:[]}],u={toc:d};function l(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Bee is the first client to work with the Swarm network. "),(0,a.kt)("h2",{id:"setting-up-bee-for-developing-dapps"},"Setting Up Bee for Developing Dapps"),(0,a.kt)("p",null,"To develop apps on Bee, you might need to adjust the following settings. Check out the brand new ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-factory"},"bee-factory")," for information on how to run a self contained development environment so you can go wild in swarm without spending all your BZZ on swap and stamps!"),(0,a.kt)("h2",{id:"hosting-your-dapps--storing-their-data"},"Hosting Your Dapps & Storing Their Data"),(0,a.kt)("p",null,"Swarm is hugely versatile, but at a very basic level you can think of\nit as storage for your dapps data that is too big for blockchain, but\nstill needs to live in our totally decentralised universe. Swarm is\nperfect for storing your NFT meta-data and images in a web3 way that\nwon't break the bank and can live forever!"),(0,a.kt)("h2",{id:"your-data-structures-on-swarm"},"Your Data Structures on Swarm"),(0,a.kt)("p",null,"As well as your simple data needs, Swarm also provides key-value store\n/ pubsub type primitives, and allows users to store authenticated data\nsigned using a regular Ethereum Wallet. See\n",(0,a.kt)("a",{parentName:"p",href:"/docs/dapps-on-swarm/chunk-types"},"chunk types")," and\n",(0,a.kt)("a",{parentName:"p",href:"/docs/dapps-on-swarm/feeds"},"feeds")," for more info! Let us know what\nyou come up with in the\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/C6dgqpxZkU"},"#develop-on-swarm")," room in our\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/wdghaQsGq5"},"Discord Server"),"."),(0,a.kt)("h2",{id:"bee-proxy-mode"},"Bee Proxy Mode"),(0,a.kt)("p",null,"With Bee running as a proxy in\n",(0,a.kt)("a",{parentName:"p",href:"/docs/access-the-swarm/light-nodes"},"Light Node")," mode on your end-user's\ncomputers, your applications can have privileged access to all sorts\nof useful tools and ways to interact with the swarm. Check out the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/api-reference"},"API")," and\n",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/api-reference"},"Debug API")," as well as\n",(0,a.kt)("a",{parentName:"p",href:"/docs/dapps-on-swarm/bee-js"},"bee-js")," for details on what you can do\nwith your Bee!"),(0,a.kt)("h2",{id:"dapps-with-swarm-gateways"},"Dapps With Swarm Gateways"),(0,a.kt)("p",null,"If you want your users to be able to access Swarm without running\ntheir own Bee node, for the time being you will need to access Bee in\ngateway mode. Join us in the\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/C6dgqpxZkU"},"#develop-on-swarm")," room in our\n",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/wdghaQsGq5"},"Discord Server")," for more information\non how to allow your web app users to read and write to the swarm."))}l.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,h=p["".concat(a,".").concat(b)]||p[b]||u[b]||i;return n?o.a.createElement(h,s(s({ref:t},l),{},{components:n})):o.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},69:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),i=(n(0),n(124)),a={title:"Light Nodes",id:"light-nodes"},s={unversionedId:"access-the-swarm/light-nodes",id:"access-the-swarm/light-nodes",isDocsHomePage:!1,title:"Light Nodes",description:"When a light node is requesting data from the network - it will not benefit from plausible deniability. This is because a light node does not forward on behalf of other nodes, and so it is always the originator of the request.",source:"@site/docs/access-the-swarm/light-nodes.md",slug:"/access-the-swarm/light-nodes",permalink:"/docs/access-the-swarm/light-nodes",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/access-the-swarm/light-nodes.md",version:"current",sidebar:"Balls",previous:{title:"Pinning",permalink:"/docs/access-the-swarm/pinning"},next:{title:"Dapps On Swarm",permalink:"/docs/dapps-on-swarm/introduction"}},c=[],l={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"When a light node is requesting data from the network - it will not benefit from plausible deniability. This is because a light node does not forward on behalf of other nodes, and so it is always the originator of the request."))),Object(i.b)("h4",{id:"configuration"},"Configuration"),Object(i.b)("p",null,"In order to configure light node mode, do not disable light mode in your Bee configuration."),Object(i.b)("h4",{id:"mode-of-operation"},"Mode of Operation"),Object(i.b)("p",null,"At present, light mode represents a pragmatic and elegant approach to improving network stability, reliability and resiliance."),Object(i.b)("p",null,"In general, ",Object(i.b)("em",{parentName:"p"},"light mode")," may be thought of as simply not participating in the activity of forwarding or storing chunks for other members of the swarm, these nodes are strictly consumers, who will pay gBZZ in return for services rendered by ",Object(i.b)("em",{parentName:"p"},"full nodes")," contributing towards moving data around the network."),Object(i.b)("p",null,"This means that, although the node will participate in the pull syncing protocol by filling up it's local storage with the chunks closets to it's overlay address, the node will not serve these chunks to other peers."),Object(i.b)("p",null,"Additionally, a light node will not participate in the forwarding protocol, as it will not forward chunks to peers closer to the destination address."),Object(i.b)("h4",{id:"switching-on-and-off"},"Switching On and Off"),Object(i.b)("p",null,"You may turn light mode on or off without corrupting your node's state."))}d.isMDXComponent=!0}}]);
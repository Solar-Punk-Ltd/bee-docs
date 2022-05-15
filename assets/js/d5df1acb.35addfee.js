(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[8511],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3714:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],s={title:"Track Upload Status",id:"syncing"},l={unversionedId:"access-the-swarm/syncing",id:"access-the-swarm/syncing",isDocsHomePage:!1,title:"Track Upload Status",description:"When you are uploading data to Swarm, it can take some time until this is completed. In order to help you validate whether the upload is completed or to estimate how long it will take, you can use the tags feature.",source:"@site/docs/access-the-swarm/syncing.md",sourceDirName:"access-the-swarm",slug:"/access-the-swarm/syncing",permalink:"/docs/access-the-swarm/syncing",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/access-the-swarm/syncing.md",version:"current",frontMatter:{title:"Track Upload Status",id:"syncing"},sidebar:"Balls",previous:{title:"Host Your Website on Swarm",permalink:"/docs/access-the-swarm/host-your-website"},next:{title:"Keep Your Data Alive",permalink:"/docs/access-the-swarm/keep-your-data-alive"}},c=[{value:"Generate the tag automatically",id:"generate-the-tag-automatically",children:[]},{value:"Generate the tag manually",id:"generate-the-tag-manually",children:[]},{value:"Ask for the Current Status",id:"ask-for-the-current-status",children:[]}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you are uploading data to Swarm, it can take some time until this is completed. In order to help you validate whether the upload is completed or to estimate how long it will take, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"tags")," feature."),(0,o.kt)("h3",{id:"generate-the-tag-automatically"},"Generate the tag automatically"),(0,o.kt)("p",null,"A tag identifier is automatically created for you on each upload. You can find the tag in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Swarm-Tag")," header response. You can view this header response with curl when passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose")," flag to an upload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'curl --data-binary @bee.jpg --verbose  "http://localhost:1633/files?name=bee.jpg"\n')),(0,o.kt)("h3",{id:"generate-the-tag-manually"},"Generate the tag manually"),(0,o.kt)("p",null,"While the automatically-generated tag is convenient, with big uploads it might take a while until the Bee API returns the headers. What you want to do in this case is to pre-generate the tag and pass this tag along with the upload command."),(0,o.kt)("p",null,"Generate a tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'curl -X POST http://localhost:1633/tags\n> {"uid":1278066217,"startedAt":"2021-02-04T15:10:47.260477637+01:00","total":0,"processed":0,"synced":0}\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In order to upload your data to swarm, you must agree to burn some of your BZZ to signify to storer and fowarder nodes that the content is important. Before you progress to the next step, you must buy stamps! See this guide on how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-swarm/keep-your-data-alive"},"purchase an appropriate batch of stamps"),"."))),(0,o.kt)("p",null,"Pass the tag along with the upload:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'curl --data-binary @bee.jpg \\\n  -H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" \\\n  -H "Swarm-Tag: 1278066217" \\\n  "http://localhost:1633/files?name=bee.jpg"\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When you manually create the tag, you will be able to view the status of chunks being prepared for upload (",(0,o.kt)("inlineCode",{parentName:"p"},"processed"),") as well as the status of uploading to the network (",(0,o.kt)("inlineCode",{parentName:"p"},"synced"),")."))),(0,o.kt)("h3",{id:"ask-for-the-current-status"},"Ask for the Current Status"),(0,o.kt)("p",null,"To get the current status of an upload, send a GET request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"tag/<Swarm-Tag>")," API endpoint."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"curl http://localhost:1633/tags/1278066217 | jq\n")),(0,o.kt)("p",null,"The response contains all the information that you need to follow the status of your file as it is synced with the network."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The number that the ",(0,o.kt)("inlineCode",{parentName:"p"},"tags")," endpoint returns under ",(0,o.kt)("inlineCode",{parentName:"p"},"total"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"processed")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"synced")," are the number of ",(0,o.kt)("em",{parentName:"p"},"chunks"),", i.e. Swarm's 4kb data units."))))}u.isMDXComponent=!0}}]);
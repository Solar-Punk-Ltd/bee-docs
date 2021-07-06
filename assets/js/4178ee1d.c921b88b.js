(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[3859],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||c[f]||o;return t?r.createElement(m,i(i({ref:n},d),{},{components:t})):r.createElement(m,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in n)hasOwnProperty.call(n,s)&&(p[s]=n[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},394:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],p={title:"API and Debug API",id:"api-reference"},s={unversionedId:"api-reference/api-reference",id:"api-reference/api-reference",isDocsHomePage:!1,title:"API and Debug API",description:"The Bee node exposes two HTTP API endpoints, the API and the Debug API. These endpoints are the primary interfaces to a running Bee node. API-endpoints can be queried using familiar HTTP requests, and will respond with a semantically accurate HTTP status and error codes as well as data payloads in JSON format where appropriate.",source:"@site/docs/api-reference/api-reference.md",sourceDirName:"api-reference",slug:"/api-reference/api-reference",permalink:"/docs/api-reference/api-reference",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/api-reference/api-reference.md",version:"current",frontMatter:{title:"API and Debug API",id:"api-reference"},sidebar:"Balls",previous:{title:"PSS Messaging",permalink:"/docs/dapps-on-swarm/pss"},next:{title:"Useful Developer Info",permalink:"/docs/bee-developers/useful-dev-info"}},l=[{value:"API",id:"api",children:[{value:'<a href="/api" target="_blank" rel="noopener noreferrer">Bee API reference.</a>',id:"bee-api-reference",children:[]}]},{value:"Debug API",id:"debug-api",children:[{value:'<a href="/debug-api" target="_blank" rel="noopener noreferrer">Debug API reference.</a>',id:"debug-api-reference",children:[]}]}],d={toc:l};function c(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Bee node exposes two HTTP API endpoints, the ",(0,o.kt)("inlineCode",{parentName:"p"},"API")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Debug API"),". These endpoints are the primary interfaces to a ",(0,o.kt)("em",{parentName:"p"},"running")," Bee node. API-endpoints can be queried using familiar HTTP requests, and will respond with a semantically accurate ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"HTTP status and error codes")," as well as data payloads in ",(0,o.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," format where appropriate."),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"The API-endpoint exposes all functionality to upload and download content to and from the Swarm network. By default, it runs on port ",(0,o.kt)("inlineCode",{parentName:"p"},":1633"),"."),(0,o.kt)("p",null,"Detailed information about Bee API endpoint can be found here:"),(0,o.kt)("h3",{id:"bee-api-reference"},(0,o.kt)("a",{href:"/api",target:"_blank",rel:"noopener noreferrer"},"Bee API reference.")),(0,o.kt)("h2",{id:"debug-api"},"Debug API"),(0,o.kt)("p",null,"The Debug API is disabled by default but can be enabled by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"debug-api-enable")," configuration option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),". The Debug API exposes functionality to inspect the state of your Bee node while it is running, as well as some other features that should not be exposed to the public Internet. The Debug API runs on port ",(0,o.kt)("inlineCode",{parentName:"p"},":1635")," by default."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"For a new installation of Bee, the Debug API endpoint is not yet\nexposed for security reasons. To enable the Debug API endpoints, set\n",(0,o.kt)("inlineCode",{parentName:"p"},"--debug-api-enable")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," in your ",(0,o.kt)("a",{parentName:"p",href:"/docs/working-with-bee/configuration"},"configuration\nfile")," and restart your Bee."))),(0,o.kt)("h3",{id:"debug-api-reference"},(0,o.kt)("a",{href:"/debug-api",target:"_blank",rel:"noopener noreferrer"},"Debug API reference.")),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your Debug API should not be exposed to the public Internet, make sure that your network has a firewall which blocks port ",(0,o.kt)("inlineCode",{parentName:"p"},"1635"),", or bind the Debug API to ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost")))))}c.isMDXComponent=!0}}]);
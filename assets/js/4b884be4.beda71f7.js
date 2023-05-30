"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[107],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5749:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Security",id:"security"},s=void 0,p={unversionedId:"bee/working-with-bee/security",id:"bee/working-with-bee/security",title:"Security",description:"The restricted APIs feature is experimental, further breaking changes might be introduced in the upcoming releases",source:"@site/docs/bee/working-with-bee/security.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/security",permalink:"/docs/bee/working-with-bee/security",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/security.md",tags:[],version:"current",frontMatter:{title:"Security",id:"security"},sidebar:"bee",previous:{title:"Bee Tools",permalink:"/docs/bee/working-with-bee/bee-tools"},next:{title:"Staking",permalink:"/docs/bee/working-with-bee/staking"}},u={},c=[{value:"Calling the restricted APIs",id:"calling-the-restricted-apis",level:2},{value:"Getting the security token",id:"getting-the-security-token",level:3},{value:"Example",id:"example",level:4},{value:"Refreshing the security token",id:"refreshing-the-security-token",level:3},{value:"A note on the HTTP endpoints",id:"a-note-on-the-http-endpoints",level:3},{value:"The order in which HTTP endpoints become available",id:"the-order-in-which-http-endpoints-become-available",level:3}],d={toc:c},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"The restricted APIs feature is experimental, further breaking changes might be introduced in the upcoming releases")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Only a subset of endpoints running on ",(0,i.kt)("inlineCode",{parentName:"p"},":1633")," can be restricted. This is subject to change in the future releases.")),(0,i.kt)("p",null,"Now that you decided to restrict the access to the APIs you should follow the next steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pick a password that is strong enough."),(0,i.kt)("li",{parentName:"ul"},"Use a bcrypt utility to hash it (you can use ",(0,i.kt)("inlineCode",{parentName:"li"},"bee bcrypt")," command for this purpose ",(0,i.kt)("a",{parentName:"li",href:"/docs/bee/working-with-bee/bcrypt"},"bcrypt utility")),(0,i.kt)("li",{parentName:"ul"},"Pass the hash to the bee instance using the ",(0,i.kt)("inlineCode",{parentName:"li"},"--admin-password")," command line option (or as a configuration parameter)"),(0,i.kt)("li",{parentName:"ul"},"Pick a random string to be used for the ",(0,i.kt)("inlineCode",{parentName:"li"},"--token-encryption-key")," (the same security token can be used against many instances sharing the same encryption key)")),(0,i.kt)("h2",{id:"calling-the-restricted-apis"},"Calling the restricted APIs"),(0,i.kt)("h3",{id:"getting-the-security-token"},"Getting the security token"),(0,i.kt)("p",null,'In order to call any of the restricted APIs the requests have to have a "Bearer" ',(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header with a valid security token. The security token can be acquired by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"/auth")," HTTP endpoint that is protected using ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/Protocols/HTTP/1.0/spec.html#BasicAA"},"basic authentication")),(0,i.kt)("p",null,"To call this endpoint you need to generate an authorization header based on our password. That is achieved by ",(0,i.kt)("inlineCode",{parentName:"p"},"base64")," encoding our password ",(0,i.kt)("em",{parentName:"p"},"prepended"),' with a colon ":" character (since username is empty in our case). So if our password is ',(0,i.kt)("inlineCode",{parentName:"p"},"s3cret")," then you need to ",(0,i.kt)("inlineCode",{parentName:"p"},"base64(:s3cret)")),(0,i.kt)("p",null,"The payload is in a json format containing two fields:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"role"),(0,i.kt)("li",{parentName:"ul"},"expiry")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"role")," field can have one of the four values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"maintainer"),(0,i.kt)("li",{parentName:"ul"},"creator"),(0,i.kt)("li",{parentName:"ul"},"auditor"),(0,i.kt)("li",{parentName:"ul"},"consumer")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"expiry")," field is a numeric value representing the lifetime of the token (in seconds)"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There is an inheritance relationship between roles: consumer \u2286 creator \u2286 accountant \u2286 maintainer\nMaintainer role is universal - it's the superset of all permissions belonging to other roles.")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's say our password is ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")),(0,i.kt)("p",null,"By base64 encoding ",(0,i.kt)("inlineCode",{parentName:"p"},":hello")," we get the value ",(0,i.kt)("inlineCode",{parentName:"p"},"OmhlbGxv")),(0,i.kt)("p",null,"this is our basic authorization header value that we can use in our payload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST {{api}}/auth\nContent-Type: application/json\nAuthorization: Basic OmhlbGxv\n\n{\n    "role": "maintainer",\n    "expiry": 3600\n}\n')),(0,i.kt)("p",null,"Sample response:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key":"A1UQrbNUK22otp50EsESoJNYkJfrK9H1D4ex4gSWUddx3H/A9VCu8ltS8lVmvSTzoNA=="\n}\n')),(0,i.kt)("h3",{id:"refreshing-the-security-token"},"Refreshing the security token"),(0,i.kt)("p",null,"In order to refresh the token we need to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"/refresh")," endpoint in the same manner as when we are calling any other restricted API endpoint - by putting valid existing token in the http request:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-http"},'POST {{api}}/refresh\nContent-Type: application/json\nAuthorization: Bearer A1UQrbNUK22otp50EsESoJNYkJfrK9H1D4ex4gSWUddx3H/A9VCu8ltS8lVmvSTzoNA==\n\n{\n    "role": "maintainer",\n    "expiry": 86400\n}\n')),(0,i.kt)("p",null,"In the payload you can specify a different role and token lifetime."),(0,i.kt)("h3",{id:"a-note-on-the-http-endpoints"},"A note on the HTTP endpoints"),(0,i.kt)("p",null,"There are three major groups:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"technical debug endpoints",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/readiness"),(0,i.kt)("li",{parentName:"ul"},"/node"),(0,i.kt)("li",{parentName:"ul"},"/addresses"),(0,i.kt)("li",{parentName:"ul"},"/chainstate"),(0,i.kt)("li",{parentName:"ul"},"/debug/pprof"),(0,i.kt)("li",{parentName:"ul"},"/debug/vars"),(0,i.kt)("li",{parentName:"ul"},"/health"))),(0,i.kt)("li",{parentName:"ul"},"business related endpoints residing on the debug port",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/peers"),(0,i.kt)("li",{parentName:"ul"},"/pingpong/{peer-id}"),(0,i.kt)("li",{parentName:"ul"},"/reservestate"),(0,i.kt)("li",{parentName:"ul"},"/connect/{address}"),(0,i.kt)("li",{parentName:"ul"},"/blocklist"),(0,i.kt)("li",{parentName:"ul"},"/peers/{address}"),(0,i.kt)("li",{parentName:"ul"},"/chunks/{address}"),(0,i.kt)("li",{parentName:"ul"},"/topology"),(0,i.kt)("li",{parentName:"ul"},"/welcome-message"),(0,i.kt)("li",{parentName:"ul"},"/balances"),(0,i.kt)("li",{parentName:"ul"},"/balances/{peer}"),(0,i.kt)("li",{parentName:"ul"},"/consumed"),(0,i.kt)("li",{parentName:"ul"},"/consumed/{peer}"),(0,i.kt)("li",{parentName:"ul"},"/timesettlements"),(0,i.kt)("li",{parentName:"ul"},"/settlements"),(0,i.kt)("li",{parentName:"ul"},"/settlements/{peer}"),(0,i.kt)("li",{parentName:"ul"},"/chequebook/cheque/{peer}"),(0,i.kt)("li",{parentName:"ul"},"/chequebook/cheque"),(0,i.kt)("li",{parentName:"ul"},"/chequebook/cashout/{peer}"),(0,i.kt)("li",{parentName:"ul"},"/chequebook/balance"),(0,i.kt)("li",{parentName:"ul"},"/chequebook/address"),(0,i.kt)("li",{parentName:"ul"},"/chequebook/deposit"),(0,i.kt)("li",{parentName:"ul"},"/chequebook/withdraw"),(0,i.kt)("li",{parentName:"ul"},"/wallet"),(0,i.kt)("li",{parentName:"ul"},"/stamps"),(0,i.kt)("li",{parentName:"ul"},"/stamps/{id}"),(0,i.kt)("li",{parentName:"ul"},"/stamps/{id}/buckets"),(0,i.kt)("li",{parentName:"ul"},"/stamps/{amount}/{depth}"),(0,i.kt)("li",{parentName:"ul"},"/stamps/topup/{id}/{amount}"),(0,i.kt)("li",{parentName:"ul"},"/stamps/dilute/{id}/{depth}"),(0,i.kt)("li",{parentName:"ul"},"/batches"),(0,i.kt)("li",{parentName:"ul"},"/tags/{id}"))),(0,i.kt)("li",{parentName:"ul"},"API endpoints",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/bytes"),(0,i.kt)("li",{parentName:"ul"},"/bytes/{address}"),(0,i.kt)("li",{parentName:"ul"},"/chunks"),(0,i.kt)("li",{parentName:"ul"},"/chunks/stream"),(0,i.kt)("li",{parentName:"ul"},"/chunks/{address}"),(0,i.kt)("li",{parentName:"ul"},"/soc/{owner}/{id}"),(0,i.kt)("li",{parentName:"ul"},"/feeds/{owner}/{topic}"),(0,i.kt)("li",{parentName:"ul"},"/bzz"),(0,i.kt)("li",{parentName:"ul"},"/bzz/{address}"),(0,i.kt)("li",{parentName:"ul"},"/bzz/{address}/{path}"),(0,i.kt)("li",{parentName:"ul"},"/pss/send/{topic}/{targets}"),(0,i.kt)("li",{parentName:"ul"},"/pss/subscribe/{topic}"),(0,i.kt)("li",{parentName:"ul"},"/tags"),(0,i.kt)("li",{parentName:"ul"},"/tags/{id}"),(0,i.kt)("li",{parentName:"ul"},"/pins"),(0,i.kt)("li",{parentName:"ul"},"/pins/{reference}"),(0,i.kt)("li",{parentName:"ul"},"/stewardship/{address}"),(0,i.kt)("li",{parentName:"ul"},"/auth"),(0,i.kt)("li",{parentName:"ul"},"/refresh")))),(0,i.kt)("p",null,"The user can toggle the debug port by setting the appropriate boolean value on ",(0,i.kt)("inlineCode",{parentName:"p"},"debug-api-enable")," configuration parameter.\nIf the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false")," (default) then the first two groups of endpoints will not be available."),(0,i.kt)("p",null,"Once we toggle the ",(0,i.kt)("inlineCode",{parentName:"p"},"restricted")," flag to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," - two things are going to happen:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"it will expose the debug business related endpoints on the API port"),(0,i.kt)("li",{parentName:"ul"},"it will restrict the access to them based on the security configuration provided.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Toggling the restricted flag ON will not remove the business related endpoints from the debug port, nor will it restrict them there.")),(0,i.kt)("h3",{id:"the-order-in-which-http-endpoints-become-available"},"The order in which HTTP endpoints become available"),(0,i.kt)("p",null,"The technical debug endpoints group will be the first to become available - as soon as its dependencies come online (within seconds).\nThe other two groups will become available at a later stage, specifically after the postage syncing is done.\nRequests to a non technical debug endpoint before it becomes available will be rejected with a ",(0,i.kt)("inlineCode",{parentName:"p"},"404")," http response code."))}h.isMDXComponent=!0}}]);
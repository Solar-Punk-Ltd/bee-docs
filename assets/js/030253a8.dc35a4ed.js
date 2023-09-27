"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[1767],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),h=p(a),m=s,u=h["".concat(c,".").concat(m)]||h[m]||d[m]||r;return a?n.createElement(u,i(i({ref:t},l),{},{components:a})):n.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[h]="string"==typeof e?e:s,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36022:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return h}});var n=a(87462),s=a(63366),r=(a(67294),a(3905)),i=["components"],o={title:"Incentives",id:"incentives"},c=void 0,p={unversionedId:"learn/technology/incentives",id:"learn/technology/incentives",title:"Incentives",description:"One of the key challenges in a decentralised data network is incentivising users to store data and provide bandwidth. Swarm addresses this challenge with two incentives systems, one which rewards nodes for sharing their storage space and another which rewards them for sharing bandwidth.",source:"@site/docs/learn/technology/incentives.md",sourceDirName:"learn/technology",slug:"/learn/technology/incentives",permalink:"/docs/learn/technology/incentives",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/learn/technology/incentives.md",tags:[],version:"current",frontMatter:{title:"Incentives",id:"incentives"},sidebar:"learn",previous:{title:"DISC",permalink:"/docs/learn/technology/disc"},next:{title:"PSS",permalink:"/docs/learn/technology/pss"}},l={},h=[{value:"Storage Incentives",id:"storage-incentives",level:2},{value:"Storage Incentives Details",id:"storage-incentives-details",level:3},{value:"Penalties",id:"penalties",level:3},{value:"Bandwidth Incentives (SWAP)",id:"bandwidth-incentives-swap",level:2}],d={toc:h},m="wrapper";function u(e){var t=e.components,a=(0,s.Z)(e,i);return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the key challenges in a decentralised data network is incentivising users to store data and provide bandwidth. Swarm addresses this challenge with two incentives systems, one which rewards nodes for sharing their storage space and another which rewards them for sharing bandwidth."),(0,r.kt)("h2",{id:"storage-incentives"},"Storage Incentives"),(0,r.kt)("p",null,"Swarm's storage incentives protocol is defined in depth in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.ethswarm.org/swarm-storage-incentives.pdf"},"Future Proof Storage")," paper published by the Swarm team."),(0,r.kt)("p",null,"Swarm's storage incentives are based on ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/technology/contracts/postage-stamp"},"postage stamps"),", which serve as verifiable proof of payment associated with chunks witnessed by their owner's signature. Postage stamps signal chunks' relative importance by ascribing them with xBZZ quantity which storer nodes can use when selecting which chunks to retain and which to evict from their reserve when their reserve capacity is exceeded."),(0,r.kt)("p",null,"The amount of xBZZ required for a postage stamp depends on the amount of data being stored and the duration for which it will be stored. The longer a chunk is stored, the more xBZZ is required for the postage stamp. This ensures that users are incentivised to store data for longer periods, which helps ensure that data remains available in the network."),(0,r.kt)("p",null,"Storer nodes can use the xBZZ associated with postage stamps when selecting which chunks to retain and serve or garbage collect during capacity shortage. This means that popular content will be widely distributed across the network, reducing retrieval latency."),(0,r.kt)("h3",{id:"storage-incentives-details"},"Storage Incentives Details"),(0,r.kt)("p",null," When someone wants to upload data to Swarm, they do so by buying ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/technology/contracts/postage-stamp"},"postage stamp batches"),' with xBZZ. The xBZZ is collected and later redistributed to storage provider nodes to pay for their services. Which node earns the reward is determined by playing a "game". Every 152 Gnosis Chain blocks the game is played, and one node will win the accumulated xBZZ. '),(0,r.kt)("p",null,"The game has 3 phases, ",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"reveal"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"claim"),". In the ",(0,r.kt)("inlineCode",{parentName:"p"},"reveal"),' phase of a previous game, an "anchor" overlay address is randomly generated and used to determine the neighborhood for the current round. Only nodes within that neighborhood (meaning they have a certain number of ',(0,r.kt)("a",{parentName:"p",href:"/docs/learn/glossary#proximity-order-po"},"shared leading bits")," with the neighborhood address) may participate and have a chance to win. "),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"commit"),' phase, nodes issue an on-chain transaction including an encrypted hash of the data they are storing (the unencrypted hash is known as the "reserve commitment") along with the ',(0,r.kt)("a",{parentName:"p",href:"/docs/learn/glossary#2-area-of-responsibility-related-depths"},"depth")," for which they are reporting. This serves as an attestation of the data they are storing without revealing any other information."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"reveal")," phase, each node reveals the decryption key for their encrypted hashes thereby publishing the hash. One of the nodes is chosen as the honest node, and from among the honest nodes, one node is chosen as the winner. The winner is chosen at random among the honest nodes, but it is weighted in proportion to each node's stake density. Stake density is calculated as so:"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mtext",{parentName:"mrow"},"stake\xa0density"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mtext",{parentName:"mrow"},"stake(xBZZ)"),(0,r.kt)("mo",{parentName:"mrow"},"\xd7"),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mn",{parentName:"msup"},"2"),(0,r.kt)("mtext",{parentName:"msup"},"storage\xa0depth"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{stake density} = \\text{stake(xBZZ)} \\times {2}^\\text{storage depth}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"stake\xa0density")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord text"},(0,r.kt)("span",{parentName:"span",className:"mord"},"stake(xBZZ)")),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8991em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord"},"2")),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8991em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord text mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"storage\xa0depth")))))))))))))),(0,r.kt)("h3",{id:"penalties"},"Penalties"),(0,r.kt)("p",null,"During the ",(0,r.kt)("inlineCode",{parentName:"p"},"reveal")," phase if a nodes' revealed hash does not match the honest nodes' hash, that node will be temporarily frozen and will not be able to participate in a number of upcoming rounds."),(0,r.kt)("h2",{id:"bandwidth-incentives-swap"},"Bandwidth Incentives (SWAP)"),(0,r.kt)("p",null,"The Swarm Accounting Protocol (SWAP) is a protocol used in the Swarm network to manage the exchange of resources between nodes. SWAP ensures that node operators collaborate in routing messages and data while protecting the network against frivolous use of bandwidth."),(0,r.kt)("p",null,"SWAP works by tracking the relative consumption of bandwidth between nodes. As nodes relay requests and responses, they keep track of their bandwidth usage with each of their peers. Within bounds, peers engage in a service-for-service exchange, where they provide resources to each other based on their relative usage."),(0,r.kt)("p",null,"However, once a limit is reached, the party in debt can either wait until their liabilities are amortized over time or can pay by sending cheques that cash out in xBZZ on the blockchain. ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn/technology/contracts/chequebook/"},"Chequebook")," contracts are used to manage these cheques and ensure that they are valid and can be cashed out correctly."),(0,r.kt)("p",null,"SWAP uses built-in incentives to optimize the allocation of bandwidth and storage resources and render Swarm economically self-sustaining. Swarm nodes track their relative bandwidth contribution on each peer connection, and excess debt due to unequal consumption can be settled in xBZZ. Publishers in Swarm must spend xBZZ to purchase the right to write data to Swarm and prepay some rent for long-term storage."),(0,r.kt)("p",null,"The SWAP protocol also includes some additional features to prevent abuse or fraud. For example, it can impose limits on how much debt a node can accumulate before requiring payment or require nodes to provide collateral before sending cheques."))}u.isMDXComponent=!0}}]);
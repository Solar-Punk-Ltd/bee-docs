"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[8224],{3905:function(a,e,t){t.d(e,{Zo:function(){return l},kt:function(){return k}});var n=t(67294);function s(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function m(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function p(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?m(Object(t),!0).forEach((function(e){s(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,s=function(a,e){if(null==a)return{};var t,n,s={},m=Object.keys(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||(s[t]=a[t]);return s}(a,e);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);for(n=0;n<m.length;n++)t=m[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(s[t]=a[t])}return s}var o=n.createContext({}),i=function(a){var e=n.useContext(o),t=e;return a&&(t="function"==typeof a?a(e):p(p({},e),a)),t},l=function(a){var e=i(a.components);return n.createElement(o.Provider,{value:e},a.children)},c="mdxType",h={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(a,e){var t=a.components,s=a.mdxType,m=a.originalType,o=a.parentName,l=r(a,["components","mdxType","originalType","parentName"]),c=i(t),N=s,k=c["".concat(o,".").concat(N)]||c[N]||h[N]||m;return t?n.createElement(k,p(p({ref:e},l),{},{components:t})):n.createElement(k,p({ref:e},l))}));function k(a,e){var t=arguments,s=e&&e.mdxType;if("string"==typeof a||s){var m=t.length,p=new Array(m);p[0]=N;var r={};for(var o in e)hasOwnProperty.call(e,o)&&(r[o]=e[o]);r.originalType=a,r[c]="string"==typeof a?a:s,p[1]=r;for(var i=2;i<m;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}N.displayName="MDXCreateElement"},84623:function(a,e,t){t.r(e),t.d(e,{assets:function(){return l},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return r},metadata:function(){return i},toc:function(){return c}});var n=t(87462),s=t(63366),m=(t(67294),t(3905)),p=["components"],r={title:"Keep Your Data Alive",id:"keep-your-data-alive"},o=void 0,i={unversionedId:"develop/access-the-swarm/keep-your-data-alive",id:"develop/access-the-swarm/keep-your-data-alive",title:"Keep Your Data Alive",description:"Swarm comprises the sum total of all storage space provided by all of our nodes, called the DISC (Distributed Immutable Store of Chunks). The right to write data into this distributed store is determined by the postage stamps that have been attached.",source:"@site/docs/develop/access-the-swarm/keep-your-data-alive.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/keep-your-data-alive",permalink:"/docs/develop/access-the-swarm/keep-your-data-alive",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/keep-your-data-alive.md",tags:[],version:"current",frontMatter:{title:"Keep Your Data Alive",id:"keep-your-data-alive"},sidebar:"develop",previous:{title:"Track Upload Status",permalink:"/docs/develop/access-the-swarm/syncing"},next:{title:"Pinning",permalink:"/docs/develop/access-the-swarm/pinning"}},l={},c=[{value:"Fund your node&#39;s wallet.",id:"fund-your-nodes-wallet",level:3},{value:"Purchase a batch of stamps",id:"purchase-a-batch-of-stamps",level:2},{value:"Amount",id:"amount",level:3},{value:"Batch Depth",id:"batch-depth",level:3},{value:"Calculating the <code>depth</code> and <code>amount</code> of your batch of stamps",id:"calculating-the-depth-and-amount-of-your-batch-of-stamps",level:3},{value:"Calculating the remaining TTL (time to live) of your batch",id:"calculating-the-remaining-ttl-time-to-live-of-your-batch",level:3},{value:"Top up your batch",id:"top-up-your-batch",level:3},{value:"Dilute your batch",id:"dilute-your-batch",level:3},{value:"Stewardship",id:"stewardship",level:2}],h={toc:c},N="wrapper";function k(a){var e=a.components,t=(0,s.Z)(a,p);return(0,m.kt)(N,(0,n.Z)({},h,t,{components:e,mdxType:"MDXLayout"}),(0,m.kt)("p",null,"Swarm comprises the sum total of all storage space provided by all of our nodes, called the DISC (Distributed Immutable Store of Chunks). The ",(0,m.kt)("em",{parentName:"p"},"right to write")," data into this distributed store is determined by the postage stamps that have been attached."),(0,m.kt)("h3",{id:"fund-your-nodes-wallet"},"Fund your node's wallet."),(0,m.kt)("p",null,"To start up your node, you will already have provided your node with\nxDAI for gas and xBZZ which was transferred into your chequebook when\nyour node was initialised. This will be used to interact with other\nnodes using the ",(0,m.kt)("em",{parentName:"p"},"SWAP")," protocol. In order to access more funds to buy\nbatches of stamps, your wallet must be funded with xBZZ. The easiest\nway to achieve this is to withdraw funds from your chequebook:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST "http://localhost:1635/chequebook/withdraw?amount=1000"\n')),(0,m.kt)("h2",{id:"purchase-a-batch-of-stamps"},"Purchase a batch of stamps"),(0,m.kt)("p",null,"Stamps are created in batches so that storer nodes may calculate the\nvalidity of a chunk's stamp with only local knowledge. This enables\nthe privacy you enjoy with Swarm."),(0,m.kt)("p",null,"Stamp batches are created in buckets with a ",(0,m.kt)("inlineCode",{parentName:"p"},"bucket depth")," of 16. The entire\nSwarm address space is divided into ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mn",{parentName:"msup"},"16")),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"65"),(0,m.kt)("mo",{parentName:"mrow",separator:"true"},","),(0,m.kt)("mn",{parentName:"mrow"},"536")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{16} = 65,536")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"16"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8389em",verticalAlign:"-0.1944em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"65"),(0,m.kt)("span",{parentName:"span",className:"mpunct"},","),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.1667em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"536")))))," different\nbuckets. When uploaded, each of your files are split into 4kb chunks\nand assigned to a specific bucket based on its address."),(0,m.kt)("p",null,"When creating a batch you must specify two values, ",(0,m.kt)("inlineCode",{parentName:"p"},"batch depth")," and ",(0,m.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,m.kt)("h3",{id:"amount"},"Amount"),(0,m.kt)("p",null,"The ",(0,m.kt)("inlineCode",{parentName:"p"},"amount")," is the quantity of xBZZ in PLUR ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"0"),(0,m.kt)("mn",{parentName:"msup"},"16")),(0,m.kt)("mi",{parentName:"mrow"},"P"),(0,m.kt)("mi",{parentName:"mrow"},"L"),(0,m.kt)("mi",{parentName:"mrow"},"U"),(0,m.kt)("mi",{parentName:"mrow"},"R"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"1"),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0xBZZ"),(0,m.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"(1 \\times 10^{16}PLUR = 1 \\text{ xBZZ})")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mopen"},"("),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"0"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"16"))))))))),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.13889em"}},"P"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10903em"}},"LU"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1"),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"\xa0xBZZ")),(0,m.kt)("span",{parentName:"span",className:"mclose"},")")))))," that is assigned per chunk in the batch. The total number of xBZZ that will be paid for the batch is calculated from this figure and the ",(0,m.kt)("inlineCode",{parentName:"p"},"batch depth")," like so:"),(0,m.kt)("p",null,(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"))),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mrow",{parentName:"mrow"},(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"m"),(0,m.kt)("mi",{parentName:"mrow"},"o"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"n"),(0,m.kt)("mi",{parentName:"mrow"},"t"))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{batch \\_ depth} \\times {amount}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9324em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ba"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mtight",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"pt"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"am"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"))))))),(0,m.kt)("p",null,"The paid xBZZ forms the ",(0,m.kt)("inlineCode",{parentName:"p"},"balance")," of the batch. This ",(0,m.kt)("inlineCode",{parentName:"p"},"balance")," is then slowly depleted as time ticks on and blocks are mined on Gnosis Chain."),(0,m.kt)("p",null,"For example, with a ",(0,m.kt)("inlineCode",{parentName:"p"},"batch depth")," of 20 and an ",(0,m.kt)("inlineCode",{parentName:"p"},"amount")," of 1000000000 PLUR:"),(0,m.kt)("div",{className:"math math-display"},(0,m.kt)("span",{parentName:"div",className:"katex-display"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mn",{parentName:"msup"},"20")),(0,m.kt)("mo",{parentName:"mrow"},"\xd7"),(0,m.kt)("mn",{parentName:"mrow"},"1000000000"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"1048576000000000"),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0PLUR"),(0,m.kt)("mo",{parentName:"mrow"},"="),(0,m.kt)("mn",{parentName:"mrow"},"0.1048576"),(0,m.kt)("mtext",{parentName:"mrow"},"\xa0xBZZ")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{20} \\times 1000000000 = 1048576000000000 \\text{ PLUR} = 0.1048576 \\text{ xBZZ}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9474em",verticalAlign:"-0.0833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8641em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"20"))))))))),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,m.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1000000000"),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"1048576000000000"),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"\xa0PLUR")),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"="),(0,m.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},"0.1048576"),(0,m.kt)("span",{parentName:"span",className:"mord text"},(0,m.kt)("span",{parentName:"span",className:"mord"},"\xa0xBZZ"))))))),(0,m.kt)("h3",{id:"batch-depth"},"Batch Depth"),(0,m.kt)("p",null,"The ",(0,m.kt)("inlineCode",{parentName:"p"},"batch depth")," determines ",(0,m.kt)("em",{parentName:"p"},"how many chunks")," are allowed to be in each bucket. The number of chunks allowed in each bucket is calculated like so:\n",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mi",{parentName:"mrow"},"u"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"k"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{batch \\_ depth - bucket \\_ depth}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ba"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mtight",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"pt"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h"),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"b"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"u"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.03148em"}},"k"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mtight",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"pt"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h"))))))))))))),"  ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("mo",{parentName:"mrow"},"=")),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"=")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.3669em"}}),(0,m.kt)("span",{parentName:"span",className:"mrel"},"=")))))," ",(0,m.kt)("span",{parentName:"p",className:"math math-inline"},(0,m.kt)("span",{parentName:"span",className:"katex"},(0,m.kt)("span",{parentName:"span",className:"katex-mathml"},(0,m.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,m.kt)("semantics",{parentName:"math"},(0,m.kt)("mrow",{parentName:"semantics"},(0,m.kt)("msup",{parentName:"mrow"},(0,m.kt)("mn",{parentName:"msup"},"2"),(0,m.kt)("mrow",{parentName:"msup"},(0,m.kt)("mi",{parentName:"mrow"},"b"),(0,m.kt)("mi",{parentName:"mrow"},"a"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"c"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,m.kt)("mi",{parentName:"mrow"},"d"),(0,m.kt)("mi",{parentName:"mrow"},"e"),(0,m.kt)("mi",{parentName:"mrow"},"p"),(0,m.kt)("mi",{parentName:"mrow"},"t"),(0,m.kt)("mi",{parentName:"mrow"},"h"),(0,m.kt)("mo",{parentName:"mrow"},"\u2212"),(0,m.kt)("mn",{parentName:"mrow"},"16")))),(0,m.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"2^{batch \\_ depth - 16}")))),(0,m.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,m.kt)("span",{parentName:"span",className:"base"},(0,m.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8491em"}}),(0,m.kt)("span",{parentName:"span",className:"mord"},(0,m.kt)("span",{parentName:"span",className:"mord"},"2"),(0,m.kt)("span",{parentName:"span",className:"msupsub"},(0,m.kt)("span",{parentName:"span",className:"vlist-t"},(0,m.kt)("span",{parentName:"span",className:"vlist-r"},(0,m.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8491em"}},(0,m.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,m.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,m.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mtight"},(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"ba"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"c"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h"),(0,m.kt)("span",{parentName:"span",className:"mord mtight",style:{marginRight:"0.02778em"}},"_"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"pt"),(0,m.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"h"),(0,m.kt)("span",{parentName:"span",className:"mbin mtight"},"\u2212"),(0,m.kt)("span",{parentName:"span",className:"mord mtight"},"16"))))))))))))),". With a minimum ",(0,m.kt)("inlineCode",{parentName:"p"},"batch depth")," of 17."),(0,m.kt)("h3",{id:"calculating-the-depth-and-amount-of-your-batch-of-stamps"},"Calculating the ",(0,m.kt)("inlineCode",{parentName:"h3"},"depth")," and ",(0,m.kt)("inlineCode",{parentName:"h3"},"amount")," of your batch of stamps"),(0,m.kt)("p",null,"One notable aspect of batch utilization is that the entire batch is considered fully utilized as soon as any one of its buckets are filled. This means that the actual amount of chunks storable by a batch is less than the nominal maximum amount. "),(0,m.kt)("p",null,"Right now, the easiest way to start uploading content is to buy a large enough batch so that it is incredibly unlikely you will end up with too many chunks falling into the same bucket."),(0,m.kt)("p",null,"The ",(0,m.kt)("inlineCode",{parentName:"p"},"amount")," you specify will govern the amount of time your chunks live in Swarm. Because pricing is variable, it is not possible to predict with accuracy exactly when your chunks will run out of balance, however, it can be estimated based on the current price and the remaining batch balance."),(0,m.kt)("p",null,"For now, we suggest you specify ",(0,m.kt)("inlineCode",{parentName:"p"},"batch depth")," 20 and ",(0,m.kt)("inlineCode",{parentName:"p"},"amount")," 10000000000 for your\nbatches just to get started. This should be enough to upload several GB of data for a few weeks."),(0,m.kt)("admonition",{type:"warning"},(0,m.kt)("p",{parentName:"admonition"},"When you purchase a batch of stamps, you agree to burn xBZZ. Although your 'balance' slowly decrements as time goes on, there is no way to withdraw xBZZ from a batch. This is an outcome of Swarm's decentralised design, to read more about the different components of Swarm fit together, read ",(0,m.kt)("a",{href:"https://www.ethswarm.org/The-Book-of-Swarm.pdf",target:"_blank",rel:"noopener noreferrer"},"The Book of Swarm")," .")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -XPOST http://localhost:1635/stamps/10000000000/20\n")),(0,m.kt)("admonition",{type:"info"},(0,m.kt)("p",{parentName:"admonition"},"Once your batch has been purchased, it will take a few minutes for other Bee nodes in the Swarm to catch up and register your batch. Allow some time for your batch to propagate in the network before proceeding to the next step.")),(0,m.kt)("p",null,"Look out for more ways to more accurately estimate the correct size of your batch coming soon!"),(0,m.kt)("p",null,"To check on your stamps, send a GET request to the stamp endpoint."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:1635/stamps\n")),(0,m.kt)("admonition",{type:"info"},(0,m.kt)("p",{parentName:"admonition"},"When uploading content which has been stamped using an already expired postage stamp, the node will not attempt to sync the content. You are advised to use longer-lived postage stamps and encrypt your content to work around this. It is not possible to reupload unencrypted content which was stamped using an expired postage stamp. We're working on improving on this.")),(0,m.kt)("h3",{id:"calculating-the-remaining-ttl-time-to-live-of-your-batch"},"Calculating the remaining TTL (time to live) of your batch"),(0,m.kt)("admonition",{type:"info"},(0,m.kt)("p",{parentName:"admonition"},"At present, TTL is a primitive calculation based on the current storage price and the assumption that storage price will remain static in the future. As more data is uploaded into Swarm, the price of storage will begin to increase. For data that it is important to keep alive, make sure your batches have plenty of time to live!")),(0,m.kt)("p",null,"In order to make sure your ",(0,m.kt)("em",{parentName:"p"},"batch")," has sufficient ",(0,m.kt)("em",{parentName:"p"},"remaining balance")," to be stored and served by nodes in its ",(0,m.kt)("a",{parentName:"p",href:"/docs/learn/glossary#2-area-of-responsibility-related-depths"},(0,m.kt)("em",{parentName:"a"},"area of responsibility")),", you must regularly check on its ",(0,m.kt)("em",{parentName:"p"},"time to live")," and act accordingly. The ",(0,m.kt)("em",{parentName:"p"},"time to live")," is the number of seconds before the chunks will be considered for garbage collection by nodes in the network."),(0,m.kt)("p",null,"The remaining ",(0,m.kt)("em",{parentName:"p"},"time to live")," in seconds is shown in the returned json object as the value for ",(0,m.kt)("inlineCode",{parentName:"p"},"batchTTL"),"."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},"    curl http://localhost:1635/stamps\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "stamps": [\n    {\n      "batchID": "6d32e6f1b724f8658830e51f8f57aa6029f82ee7a30e4fc0c1bfe23ab5632b27",\n      "utilization": 0,\n      "usable": true,\n      "label": "",\n      "depth": 20,\n      "amount": "113314620",\n      "bucketDepth": 16,\n      "blockNumber": 19727733,\n      "immutableFlag": false,\n      "exists": true,\n      "batchTTL": 68795140\n    }\n  ]\n}\n')),(0,m.kt)("h3",{id:"top-up-your-batch"},"Top up your batch"),(0,m.kt)("admonition",{type:"danger"},(0,m.kt)("p",{parentName:"admonition"},"Don't let your batch run out! If it does, you will need to restamp and resync your content.")),(0,m.kt)("p",null,"If your batch is starting to run out, or you would like to extend the life of your batch to protect against storage price rises, you can increase the batch TTL by topping up your batch using the stamps endpoint, passing in the relevant batchID into the HTTP PATCH request."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "http://localhost:1635/stamps/topup/6d32e6f1b724f8658830e51f8f57aa6029f82ee7a30e4fc0c1bfe23ab5632b27/10000000"\n')),(0,m.kt)("h3",{id:"dilute-your-batch"},"Dilute your batch"),(0,m.kt)("p",null,'In order to store more data with a batch of stamps, you must "dilute" the batch. Dilution simply refers to increasing the depth of the batch, thereby allowing it to store a greater number of chunks. As dilution only increases the the depth of a batch and does not automatically top up the batch with more xBZZ, dilution will decrease the TTL of the batch. Therefore if you wish to store more with your batch but don\'t want to decrease its TTL, you will need to both dilute and top up your batch with more xBZZ.'),(0,m.kt)("p",null,"Here we call the ",(0,m.kt)("inlineCode",{parentName:"p"},"/stamps")," endpoint and find a batch with ",(0,m.kt)("inlineCode",{parentName:"p"},"depth")," 17 and a ",(0,m.kt)("inlineCode",{parentName:"p"},"batchTTL")," of 2083223 which we wish to dilute:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},"curl  http://localhost:1635/stamps\n")),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "stamps": [\n        {\n            "batchID": "0e4dd16cc435730a25ba662eb3da46e28d260c61c31713b6f4abf8f8c2548ae5",\n            "utilization": 0,\n            "usable": true,\n            "label": "",\n            "depth": 17,\n            "amount": "10000000000",\n            "bucketDepth": 16,\n            "blockNumber": 29717348,\n            "immutableFlag": false,\n            "exists": true,\n            "batchTTL": 2083223,\n            "expired": false\n        }\n    ]\n}\n')),(0,m.kt)("p",null,"Next we call the ",(0,m.kt)("a",{parentName:"p",href:"/api/#tag/Postage-Stamps/paths/~1stamps~1dilute~1%7Bbatch_id%7D~1%7Bdepth%7D/patch"},(0,m.kt)("inlineCode",{parentName:"a"},"dilute"))," endpoint to increase the ",(0,m.kt)("inlineCode",{parentName:"p"},"depth")," of the batch using the ",(0,m.kt)("inlineCode",{parentName:"p"},"batchID")," and our new ",(0,m.kt)("inlineCode",{parentName:"p"},"depth")," of 19:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -XPATCH http://localhost:1635/stamps/dilute/0e4dd16cc435730a25ba662eb3da46e28d260c61c31713b6f4abf8f8c2548ae5/19\n")),(0,m.kt)("p",null,"And a ",(0,m.kt)("inlineCode",{parentName:"p"},"txHash")," of our successful transaction:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},'{\n    "batchID": "0e4dd16cc435730a25ba662eb3da46e28d260c61c31713b6f4abf8f8c2548ae5",\n    "txHash": "0x298e80358b3257292752edb2535a1cd84440c074451b61f78fab349aea4962b7"\n}\n')),(0,m.kt)("p",null,"And finally we use the ",(0,m.kt)("inlineCode",{parentName:"p"},"/stamps")," endpoint again to confirm the new ",(0,m.kt)("inlineCode",{parentName:"p"},"depth")," and decreased ",(0,m.kt)("inlineCode",{parentName:"p"},"batchTTL"),":"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},"curl  http://localhost:1635/stamps\n")),(0,m.kt)("p",null,"We can see the new ",(0,m.kt)("inlineCode",{parentName:"p"},"depth")," of 19 decreased ",(0,m.kt)("inlineCode",{parentName:"p"},"batchTTL")," of 519265."),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "stamps": [\n        {\n            "batchID": "0e4dd16cc435730a25ba662eb3da46e28d260c61c31713b6f4abf8f8c2548ae5",\n            "utilization": 0,\n            "usable": true,\n            "label": "",\n            "depth": 19,\n            "amount": "10000000000",\n            "bucketDepth": 16,\n            "blockNumber": 29717348,\n            "immutableFlag": false,\n            "exists": true,\n            "batchTTL": 519265,\n            "expired": false\n        }\n    ]\n}\n')),(0,m.kt)("h2",{id:"stewardship"},"Stewardship"),(0,m.kt)("p",null,"The ",(0,m.kt)("a",{href:"/api/#tag/Stewardship",target:"_blank"},"stewardship endpoint")," in combination with ",(0,m.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/pinning"},"pinning")," can be used to guarantee that important content is always available. It is used for checking whether the content for a Swarm reference is retrievable and for re-uploading the content if it is not."),(0,m.kt)("p",null,"An HTTP GET request to the ",(0,m.kt)("inlineCode",{parentName:"p"},"stewardship")," endpoint checks to see whether the content for the specified Swarm reference is retrievable:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://localhost:1633/stewardship/c0c2b70b01db8cdfaf114cde176a1e30972b556c7e72d5403bea32e\nc0207136f"\n')),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "isRetrievable": true\n}\n')),(0,m.kt)("p",null,"If the content is not retrievable, an HTTP PUT request can be used to re-upload the content:"),(0,m.kt)("pre",null,(0,m.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://localhost:1633/stewardship/c0c2b70b01db8cdfaf114cde176a1e30972b556c7e72d5403bea32ec0207136f"\n')),(0,m.kt)("p",null,"Note that for the re-upload to succeed, the associated content must be available locally, either pinned or cached. Since it isn't easy to predict if the content will be cached, for important content pinning is recommended."))}k.isMDXComponent=!0}}]);
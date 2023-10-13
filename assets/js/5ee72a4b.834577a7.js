"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[8609],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"Staking",id:"staking"},l=void 0,p={unversionedId:"bee/working-with-bee/staking",id:"bee/working-with-bee/staking",title:"Staking",description:"In order to participate in the redistribution of xBZZ from uploaders to storers, storers must first deposit a non-refundable xBZZ stake with a smart contract. Then, they are going to be chosen for payout with a probability proportional to their stake in their neighbourhood, as long as they can log storing the part of the content that they are supposed to be storing according to protocol rules.",source:"@site/docs/bee/working-with-bee/staking.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/staking",permalink:"/docs/bee/working-with-bee/staking",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/staking.md",tags:[],version:"current",frontMatter:{title:"Staking",id:"staking"},sidebar:"bee",previous:{title:"Security",permalink:"/docs/bee/working-with-bee/security"},next:{title:"Cashing Out",permalink:"/docs/bee/working-with-bee/cashing-out"}},d={},c=[{value:"Adding stake",id:"adding-stake",level:2},{value:"Check redistribution status",id:"check-redistribution-status",level:2},{value:"Check node performance",id:"check-node-performance",level:2},{value:"Maximizing Staking Rewards",id:"maximizing-staking-rewards",level:2},{value:"Neighborhood Selection",id:"neighborhood-selection",level:3},{value:"Stake Density",id:"stake-density",level:3}],m={toc:c},h="wrapper";function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In order to participate in the redistribution of xBZZ from uploaders to storers, storers must first deposit a non-refundable xBZZ stake with a smart contract. Then, they are going to be chosen for payout with a probability proportional to their stake in their neighbourhood, as long as they can log storing the part of the content that they are supposed to be storing according to protocol rules."),(0,o.kt)("p",null,"In order to participate in redistribution, storers need to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Join the network and download all the data that the protocol assigns to them. They can only participate if they are fully synchronised with the network."),(0,o.kt)("li",{parentName:"ul"},"Deposit a stake with the staking contract. There is a minimum staking requirement, presently 10 xBZZ. It can change in the future."),(0,o.kt)("li",{parentName:"ul"},"Stay online and fully synced, so that when a redistribution round comes, their node can check whether their neighbourhood (nodes that are assigned the same content to store) has been selected and if so, they can perform a certain calculation (a random sampling) on their content and submit the result to the redistribution contract. This happens in two phases (commit and reveal), so that the nodes cannot know the results of others\u2019 calculations when committing to their own."),(0,o.kt)("li",{parentName:"ul"},"Round length is estimated around 15 minutes (152 blocks to be precise), though it can be extended.")),(0,o.kt)("p",null,"Amongst the nodes that agree with the correct result, one is chosen \u2014 with a probability in proportion to their stake \u2014 as the winner. The winner must execute an on-chain transaction claiming their reward, which is the entire pot of storage rent paid since the previous round, or even more, if the previous pot has not been claimed at that time."),(0,o.kt)("h2",{id:"adding-stake"},"Adding stake"),(0,o.kt)("p",null,"Bee has builtin endpoints for depositing the stake. Currently the minimum staking requirement is 10 xBZZ, so make sure that there is enough tokens in the node's wallet and you must have some native token as well for paying the gas."),(0,o.kt)("p",null,"Then you can run the following command to stake 10 xBZZ. The amount is given in PLUR which is the smallest denomination of xBZZ and ",(0,o.kt)("inlineCode",{parentName:"p"},"1 xBZZ == 1e16 PLUR"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XPOST localhost:1635/stake/100000000000000000\n")),(0,o.kt)("p",null,"If the command executed successfully it returns a transaction hash that you can use to verify on a block explorer."),(0,o.kt)("p",null,"It is possible to deposit more by repeatedly using the command above."),(0,o.kt)("p",null,"You can also check the amount staked with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1635/stake\n")),(0,o.kt)("h2",{id:"check-redistribution-status"},"Check redistribution status"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{href:"/debug-api/#tag/RedistributionState",target:"_blank",rel:"noopener noreferrer"},"RedistributionState")," endpoint of the API to get more information about the redistribution status of the node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://localhost:1635/redistributionstate | jq\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"minimumFunds": <integer>')," - The minimum xDAI needed to play a single round of the redistribution game (the unit is 1e-18 xDAI)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"hasSufficientFunds": <bool>')," - Shows whether the node has enough xDAI balance to submit at least five storage incentives redistribution related transactions.  If ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," the node will not be permitted to participate in next round."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"isFrozen": <bool>')," - Shows node frozen status."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"isFullySynced": <bool>')," - Shows whether node's localstore has completed full historical syncing with all connected peers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"phase": <string>')," - Current phase of ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/technology/incentives#storage-incentives-details"},"redistribution game")," (",(0,o.kt)("inlineCode",{parentName:"li"},"commit"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"reveal"),", or ",(0,o.kt)("inlineCode",{parentName:"li"},"claim"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"round": <integer>'),' - Current round of redistribution game. The round number is determined by dividing the current Gnosis Chain block height by the number of blocks in one round. One round takes 152 blocks, so using the "block" output from the example above we can confirm that the round number is 176319 (block 26800488 / 152 blocks = round 176319).   '),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"lastWonRound": <integer>')," - Number of round last won by this node."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"lastPlayedRound": <integer>')," - Number of the last round where node's neighborhood was selected to participate in redistribution game."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"lastFrozenRound": <integer>')," The number the round when node was last frozen. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"block": <integer>')," - Gnosis block of the current redistribution game."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"reward": <string (BigInt)>')," - Record of total reward received in ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/glossary#plur"},"PLUR"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"fees": <string (BigInt)>')," - Record of total spent in 1E-18 xDAI on all redistribution related transactions.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Nodes should not be shut down or updated in the middle of a round they are playing in as it may cause them to lose out on winnings or become frozen. To see if your node is playing the current round, check if ",(0,o.kt)("inlineCode",{parentName:"p"},"lastPlayedRound")," equals ",(0,o.kt)("inlineCode",{parentName:"p"},"round")," in the output from the ",(0,o.kt)("a",{parentName:"p",href:"/debug-api/#tag/RedistributionState/paths/~1redistributionstate/get"},(0,o.kt)("inlineCode",{parentName:"a"},"/redistributionstate")," endpoint"),".")),(0,o.kt)("h2",{id:"check-node-performance"},"Check node performance"),(0,o.kt)("p",null,"One of the most common issues affecting staking is the ",(0,o.kt)("inlineCode",{parentName:"p"},"sampler")," process failing. The sampler is a resource intensive process which is run by nodes which are selected to take part in redistribution. The process may fail or time out if the node's hardware specifications aren't high enough. To check a node's performance the ",(0,o.kt)("inlineCode",{parentName:"p"},"/rchash/{depth}/{anchor}")," endpoint of the API may be used. "),(0,o.kt)("p",null,"Before proceeding, first check that the node is fully synced, is not frozen, and has sufficient funds to participate in staking. To check node sync status, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"redistributionstate")," endpoint:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"curl -X GET http://localhost:1635/redistributionstate | jq\n")),(0,o.kt)("p",null,"Response:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n')),(0,o.kt)("p",null,"Confirm that ",(0,o.kt)("inlineCode",{parentName:"p"},"hasSufficientFunds")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"isFullySynced")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," before moving to the next step. If ",(0,o.kt)("inlineCode",{parentName:"p"},"hasSufficientFunds")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", make sure to add at least the amount of xDAI shown in ",(0,o.kt)("inlineCode",{parentName:"p"},"minimumFunds")," (unit of 1e-18 xDAI). If the node was recently installed and ",(0,o.kt)("inlineCode",{parentName:"p"},"isFullySynced")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", wait for the node to fully sync before continuing. After confirming the node's status, continue to the next step."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"{anchor}")," value can be set to any random string. To get the ",(0,o.kt)("inlineCode",{parentName:"p"},"{depth}")," value, first call the ",(0,o.kt)("inlineCode",{parentName:"p"},"topology")," debug API endpoint using ",(0,o.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/manual/#Basicfilters"},"jq")," to filter for the ",(0,o.kt)("inlineCode",{parentName:"p"},"depth")," `value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo curl -sX GET http://localhost:1635/topology | jq '.depth'\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"8\n")),(0,o.kt)("p",null,"Call the endpoint using the value returned (8 in our example) like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo curl -X GET http://localhost:1633/rchash/8/randomstring | jq\n")),(0,o.kt)("p",null,"If the sampler runs successfully, you should see output like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100   659  100   659    0     0      3      0  0:03:39  0:02:54  0:00:45   161\n{\n  "Sample": {\n    "Items": [\n      "000003dac2b2f75842e410474dfa4c1e6e0b9970d81b57b33564c5620667ba96",\n      "00000baace30916f7445dbcc44d9b55cb699925acfbe157e4498c63bde834f40",\n      "0000126f48fb1e99e471efc683565e4b245703c922b9956f89cbe09e1238e983",\n      "000012db04a281b7cc0e6436a49bdc5b06ff85396fcb327330ca307e409d2a04",\n      "000014f365b1a381dda85bbeabdd3040fb1395ca9e222e72a597f4cc76ecf6c2",\n      "00001869a9216b3da6814a877fdbc31f156fc2e983b52bc68ffc6d3f3cc79af0",\n      "0000198c0456230b555d5261091cf9206e75b4ad738495a60640b425ecdf408f",\n      "00001a523bd1b688472c6ea5a3c87c697db64d54744829372ac808de8ec1d427"\n    ],\n    "Hash": "7f7d93c6235855fedc34e32c6b67253e27910ca4e3b8f2d942efcd758a6d8829"\n  },\n  "Time": "2m54.087909745s"\n}\n')),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"Time")," value is higher than 6 minutes, then the hardware specifications for the node may need to be upgraded. "),(0,o.kt)("p",null,"If there is an evictions related error such as the one below, try running the call to the ",(0,o.kt)("inlineCode",{parentName:"p"},"/rchash/{depth}/{anchor}")," endpoint again:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'error: "level"="error" "logger"="node/storageincentives" "msg"="make sample" "error"="sampler: failed creating sample: sampler stopped due to ongoing evictions"\n')),(0,o.kt)("p",null,"While evictions are a normal part of Bee's standard operation, the event of an eviction will interrupt the sampler process."),(0,o.kt)("p",null,"If you are still experiencing problems, you can find more help in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/kHRyMNpw7t"},"node-operators")," Discord channel (for your safety, do not accept advice from anyone sending a private message on Discord). "),(0,o.kt)("h2",{id:"maximizing-staking-rewards"},"Maximizing Staking Rewards"),(0,o.kt)("p",null,"There are two main factors which determine the chances for a staking node to win a reward \u2014 neighborhood selection and stake density. Both of these should be considered together before starting up a Bee node for the first time. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/technology/incentives/"},"incentives page")," for more context."),(0,o.kt)("h3",{id:"neighborhood-selection"},"Neighborhood Selection"),(0,o.kt)("p",null,"By default when running a Bee node for the first time an overlay address will be generated and used to assign the node to a random ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/technology/disc#neighborhoods"},"neighborhood"),". However, by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"target-neighborhood")," config option, a specific neighborhood can be selected in which to generate the node's overlay address. This is an excellent tool for maximizing reward chances as generally speaking running in a less populated neighborhood will increase the chances of winning a reward. See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/bee/installation/install#set-target-neighborhood-optional"},"config section")," on the installation page for more information on how to set a target neighborhood."),(0,o.kt)("h3",{id:"stake-density"},"Stake Density"),(0,o.kt)("p",null,"Stake density is defined as:"),(0,o.kt)("div",{className:"math math-display"},(0,o.kt)("span",{parentName:"div",className:"katex-display"},(0,o.kt)("span",{parentName:"span",className:"katex"},(0,o.kt)("span",{parentName:"span",className:"katex-mathml"},(0,o.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,o.kt)("semantics",{parentName:"math"},(0,o.kt)("mrow",{parentName:"semantics"},(0,o.kt)("mtext",{parentName:"mrow"},"stake\xa0density"),(0,o.kt)("mo",{parentName:"mrow"},"="),(0,o.kt)("mtext",{parentName:"mrow"},"staked\xa0xBZZ"),(0,o.kt)("mo",{parentName:"mrow"},"\xd7"),(0,o.kt)("msup",{parentName:"mrow"},(0,o.kt)("mn",{parentName:"msup"},"2"),(0,o.kt)("mtext",{parentName:"msup"},"storageDepth"))),(0,o.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\text{stake density} = \\text{staked xBZZ} \\times {2}^\\text{storageDepth}")))),(0,o.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,o.kt)("span",{parentName:"span",className:"mord text"},(0,o.kt)("span",{parentName:"span",className:"mord"},"stake\xa0density")),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,o.kt)("span",{parentName:"span",className:"mrel"},"="),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7778em",verticalAlign:"-0.0833em"}}),(0,o.kt)("span",{parentName:"span",className:"mord text"},(0,o.kt)("span",{parentName:"span",className:"mord"},"staked\xa0xBZZ")),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,o.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,o.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,o.kt)("span",{parentName:"span",className:"base"},(0,o.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8991em"}}),(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mord"},(0,o.kt)("span",{parentName:"span",className:"mord"},"2")),(0,o.kt)("span",{parentName:"span",className:"msupsub"},(0,o.kt)("span",{parentName:"span",className:"vlist-t"},(0,o.kt)("span",{parentName:"span",className:"vlist-r"},(0,o.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8991em"}},(0,o.kt)("span",{parentName:"span",style:{top:"-3.113em",marginRight:"0.05em"}},(0,o.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,o.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,o.kt)("span",{parentName:"span",className:"mord text mtight"},(0,o.kt)("span",{parentName:"span",className:"mord mtight"},"storageDepth")))))))))))))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"To learn more about stake density and the mechanics of the incentives system, see the ",(0,o.kt)("a",{parentName:"em",href:"/docs/learn/technology/incentives/"},"incentives page"),".")),(0,o.kt)("p",null,"Stake density determines the weighted chances of nodes within a neighborhood of winning rewards. The chance of winning within a neighborhood corresponds to stake density. Stake density can be increased by depositing more xBZZ as stake (note that stake withdrawals are not currently possible, so any staked xBZZ is not currently recoverable). "),(0,o.kt)("p",null,"Generally speaking, the minimum required stake of 10 xBZZ is sufficient, and rewards can be better maximized by operating more nodes over a greater range of neighborhoods rather than increasing stake. However this may not be true for all node operators depending on how many different neighborhoods they operate nodes in, and it also may change as network dynamics continue to evolve (join the ",(0,o.kt)("inlineCode",{parentName:"p"},"#node-operators")," ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/799027393297514537/811553590170353685"},"Discord channel")," to stay up to date with the latest discussions about staking and network dynamics)."))}u.isMDXComponent=!0}}]);
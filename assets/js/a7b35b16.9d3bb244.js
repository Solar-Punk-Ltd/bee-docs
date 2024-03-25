"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[3392],{79332:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=o(17624),i=o(4552);const t={title:"Troubleshooting",id:"troubleshooting"},r=void 0,d={id:"bee/working-with-bee/troubleshooting",title:"Troubleshooting",description:"Common Issues (Under construction)",source:"@site/docs/bee/working-with-bee/troubleshooting.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/troubleshooting",permalink:"/docs/bee/working-with-bee/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/troubleshooting.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting",id:"troubleshooting"},sidebar:"bee",previous:{title:"Light Nodes",permalink:"/docs/bee/working-with-bee/light-nodes"},next:{title:"Ultra Light Nodes",permalink:"/docs/bee/working-with-bee/ultra-light-nodes"}},a={},c=[{value:"Common Issues (<em>Under construction</em>)",id:"common-issues-under-construction",level:2},{value:"Node occupies unusually large space on disk",id:"node-occupies-unusually-large-space-on-disk",level:3},{value:"Node not participating in redistribution",id:"node-not-participating-in-redistribution",level:3},{value:"Run sampler process to benchmark performance",id:"run-sampler-process-to-benchmark-performance",level:4},{value:"Guide to Status Related Endpoints",id:"guide-to-status-related-endpoints",level:2},{value:"<code>/status</code>",id:"status",level:3},{value:"<code>/status/peers</code>",id:"statuspeers",level:3},{value:"<code>/redistributionstate</code>",id:"redistributionstate",level:3},{value:"<code>/reservestate</code>",id:"reservestate",level:3},{value:"<code>/chainstate</code>",id:"chainstate",level:3},{value:"<code>/topology</code>",id:"topology",level:3},{value:"<code>/node</code>",id:"node",level:3},{value:"<code>/health</code>",id:"health",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h2,{id:"common-issues-under-construction",children:["Common Issues (",(0,s.jsx)(n.em,{children:"Under construction"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"In this section we cover commonly seen problems encountered during the operation of a Bee node, and give an overview of suggested solutions."}),"\n",(0,s.jsx)(n.h3,{id:"node-occupies-unusually-large-space-on-disk",children:"Node occupies unusually large space on disk"}),"\n",(0,s.jsxs)(n.p,{children:["During normal operation of a Bee node, it should not take up more than ~30 GB of disk space. In the rare cases when the node's occupied disk space grows larger, you may need to use the compaction ",(0,s.jsx)(n.code,{children:"db compact"})," command."]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsx)(n.p,{children:"To prevent any data loss, operators should run the compaction on a copy of the localstore directory and, if successful, replace the original localstore with the compacted copy."})}),"\n",(0,s.jsxs)(n.p,{children:["The command is available as a sub-command under db as such (make sure to replace the value for ",(0,s.jsx)(n.code,{children:"--data-dir"})," with the correct path to your bee node's data folder if it differs from the path shown in the example):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"bee db compact --data-dir=/home/bee/.bee\n"})}),"\n",(0,s.jsx)(n.h3,{id:"node-not-participating-in-redistribution",children:"Node not participating in redistribution"}),"\n",(0,s.jsxs)(n.p,{children:["First check that the node is fully synced, is not frozen, and has sufficient funds to participate in staking. To check node sync status, call the ",(0,s.jsx)(n.code,{children:"redistributionstate"})," endpoint:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -X GET http://localhost:1635/redistributionstate | jq\n"})}),"\n",(0,s.jsx)(n.p,{children:"Response:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Confirm that ",(0,s.jsx)(n.code,{children:"hasSufficientFunds"})," is ",(0,s.jsx)(n.code,{children:"true"}),", and ",(0,s.jsx)(n.code,{children:"isFullySynced"})," is ",(0,s.jsx)(n.code,{children:"true"})," before moving to the next step. If ",(0,s.jsx)(n.code,{children:"hasSufficientFunds"})," if ",(0,s.jsx)(n.code,{children:"false"}),", make sure to add at least the amount of xDAI shown in ",(0,s.jsx)(n.code,{children:"minimumFunds"})," (unit of 1e-18 xDAI). If the node was recently installed and ",(0,s.jsx)(n.code,{children:"isFullySynced"})," is ",(0,s.jsx)(n.code,{children:"false"}),", wait for the node to fully sync before continuing. After confirming the node's status, continue to the next step."]}),"\n",(0,s.jsx)(n.h4,{id:"run-sampler-process-to-benchmark-performance",children:"Run sampler process to benchmark performance"}),"\n",(0,s.jsxs)(n.p,{children:["One of the most common issues affecting staking is the ",(0,s.jsx)(n.code,{children:"sampler"})," process failing. The sampler is a resource intensive process which is run by nodes which are selected to take part in redistribution. The process may fail or time out if the node's hardware specifications aren't high enough. To check a node's performance the ",(0,s.jsx)(n.code,{children:"/rchash/{depth}/{anchor_01}/{anchor_02}"})," endpoint of the API may be used. The ",(0,s.jsx)(n.code,{children:"anchor_01"})," and ",(0,s.jsx)(n.code,{children:"anchor_02"})," must be a hex string with an even number of digits. For simplicity, you can just use ",(0,s.jsx)(n.code,{children:"aaaa"})," for both anchors as we do in the example further down."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"{anchor}"})," value can be set to any random hexadecimal string, while ",(0,s.jsx)(n.code,{children:"{depth}"})," should be set to the current depth."]}),"\n",(0,s.jsxs)(n.p,{children:["To get the current depth, call the ",(0,s.jsx)(n.code,{children:"/reservestate"})," endpoint"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo curl -sX GET http://localhost:1635/reservestate | jq\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Copy the ",(0,s.jsx)(n.code,{children:"storageRadius"})," value from the output (this represents the ACTUAL depth for your node, in other words, the depth to which your node is responsible for storing files. The ",(0,s.jsx)(n.code,{children:"radius"})," value is the hypothetical depth your node would be at if every postage batch was fully utilised.)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\n  "radius": 15,\n  "storageRadius": 10,\n  "commitment": 128332464128\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Call the endpoint like so:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo curl -sX GET http://localhost:1635/rchash/10/aaaa/aaaa | jq\n"})}),"\n",(0,s.jsx)(n.p,{children:"If the sampler runs successfully, you should see output like this:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\n  "Sample": {\n    "Items": [\n      "000003dac2b2f75842e410474dfa4c1e6e0b9970d81b57b33564c5620667ba96",\n      "00000baace30916f7445dbcc44d9b55cb699925acfbe157e4498c63bde834f40",\n      "0000126f48fb1e99e471efc683565e4b245703c922b9956f89cbe09e1238e983",\n      "000012db04a281b7cc0e6436a49bdc5b06ff85396fcb327330ca307e409d2a04",\n      "000014f365b1a381dda85bbeabdd3040fb1395ca9e222e72a597f4cc76ecf6c2",\n      "00001869a9216b3da6814a877fdbc31f156fc2e983b52bc68ffc6d3f3cc79af0",\n      "0000198c0456230b555d5261091cf9206e75b4ad738495a60640b425ecdf408f",\n      "00001a523bd1b688472c6ea5a3c87c697db64d54744829372ac808de8ec1d427"\n    ],\n    "Hash": "7f7d93c6235855fedc34e32c6b67253e27910ca4e3b8f2d942efcd758a6d8829"\n  },\n  "Time": "2m54.087909745s"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"Time"})," value is higher than 6 minutes, then the hardware specifications for the node may need to be upgraded."]}),"\n",(0,s.jsxs)(n.p,{children:["If there is an evictions related error such as the one below, try running the call to the ",(0,s.jsx)(n.code,{children:"/rchash/"})," endpoint again."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'error: "level"="error" "logger"="node/storageincentives" "msg"="make sample" "error"="sampler: failed creating sample: sampler stopped due to ongoing evictions"\n'})}),"\n",(0,s.jsx)(n.p,{children:"While evictions are a normal part of Bee's standard operation, the event of an eviction will interrupt the sampler process."}),"\n",(0,s.jsxs)(n.p,{children:["If you are still experiencing problems, you can find more help in the ",(0,s.jsx)(n.a,{href:"https://discord.gg/kHRyMNpw7t",children:"node-operators"})," Discord channel (for your safety, do not accept advice from anyone sending a private message on Discord)."]}),"\n",(0,s.jsx)(n.h2,{id:"guide-to-status-related-endpoints",children:"Guide to Status Related Endpoints"}),"\n",(0,s.jsx)(n.p,{children:"Your main tool for better understanding your node is the Bee API. The API has a handful of endpoints which will provide you with information relevant to detecting and diagnosing problems with your nodes."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Some endpoints are disabled by default on the Bee API (port ",(0,s.jsx)(n.code,{children:"1633"})," by default) unless ",(0,s.jsx)(n.a,{href:"/docs/bee/working-with-bee/security",children:"authentication is enabled"}),". They are available in the debug API however (port ",(0,s.jsx)(n.code,{children:"1635"})," by default), so be mindful of which api you are using."]})}),"\n",(0,s.jsx)(n.h3,{id:"status",children:(0,s.jsx)(n.code,{children:"/status"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"/status"})," endpoint will give you a bit more of a detailed view of the health of your node. It's a quick summary of some vital values for your node."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" curl -s  http://localhost:1635/status | jq\n\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"peer"'})," - Your node's overlay address."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'"proximity"'})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"beeMode"'})," - The mode of your node, can be ",(0,s.jsx)(n.code,{children:'"full"'}),", ",(0,s.jsx)(n.code,{children:'"light"'}),", or ",(0,s.jsx)(n.code,{children:'"ultraLight"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"reserveSize"'})," - The number of chunks your node is currently storing in its reserve. This value should be roughly similar across nodes in the network. It should be identical for nodes within the same neighborhood."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"pullsyncRate"'})," - The rate at which your node is currently syncing chunks from other nodes in the network as measured in...."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"storageRadius"'})," - The radius of responsibility - the proximity order of chunks for which your node is responsible for storing. It should generally match the radius shown on [Swarmscan](",(0,s.jsx)(n.a,{href:"https://swarmscan.io/neighborhoods",children:"https://swarmscan.io/neighborhoods"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"connectedPeers"'})," - The number of peers your node is connected to. A typical value is in the range of...."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"neighborhoodSize"'})," - The number of total neighbors in your neighborhood, not including your own node. The more nodes in your neighborhood, the lower your chance of winning rewards as a staking node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"batchCommitment"'})," - The total number of chunks which would be stored on the Swarm network if 100% of all postage batches were fully utilized."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"isReachable"'})," - Whether or not your node is reachable on the p2p API by other nodes on the Swarm network (port 1634 by default)."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"statuspeers",children:(0,s.jsx)(n.code,{children:"/status/peers"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"/status/peers"})," endpoint returns information about all the peers of the node making the request. The type of the object returned is the same as that returned from the ",(0,s.jsx)(n.code,{children:"/status"})," endpoint. This endpoint is useful for diagnosing syncing / availability issues with your node."]}),"\n",(0,s.jsx)(n.p,{children:"The nodes are ordered by distance (Kademlia distance, not spatial / geographic distance) to your node, with the most distant nodes with PO (proximity order) of zero at the top of the list and the closest nodes with higher POs at the bottom of the list. The nodes at the bottom of the list with a PO equal or greater than the storage depth make up the nodes in your own node's neighborhood. It's possible that not all nodes in your neighborhood will appear in this list each time you call the endpoint if the connection between your nodes and the rest of the nodes in the neighborhood is not stable."}),"\n",(0,s.jsx)(n.p,{children:"Here are the last 12 entries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" curl -s http://localhost:1635/status/peers | jq\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:' ...\n {\n      "peer": "da33f7a504a74094242d3e542475b49847d1d0f375e0c86bac1c9d7f0937acc0",\n      "proximity": 9,\n      "beeMode": "full",\n      "reserveSize": 3782924,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 188,\n      "neighborhoodSize": 11,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    },\n    {\n      "peer": "da4b529cc1aedc62e31849cf7f8ab8c1866d9d86038b857d6cf2f590604387fe",\n      "proximity": 10,\n      "beeMode": "full",\n      "reserveSize": 3719593,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 176,\n      "neighborhoodSize": 11,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    },\n    {\n      "peer": "da5d39a5508fadf66c8665d5e51617f0e9e5fd501e429c38471b861f104c1504",\n      "proximity": 10,\n      "beeMode": "full",\n      "reserveSize": 3777241,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 198,\n      "neighborhoodSize": 12,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    },\n    {\n      "peer": "da4cb0d125bba638def55c0061b00d7c01ed4033fa193d6e53a67183c5488d73",\n      "proximity": 10,\n      "beeMode": "full",\n      "reserveSize": 3849125,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 181,\n      "neighborhoodSize": 13,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    },\n    {\n      "peer": "da4b1cd5d15e061fdd474003b5602ab1cff939b4b9e30d60f8ff693141ede810",\n      "proximity": 10,\n      "beeMode": "full",\n      "reserveSize": 3778452,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 183,\n      "neighborhoodSize": 12,\n      "batchCommitment": 133827002368,\n      "isReachable": true\n    },\n    {\n      "peer": "da49e6c6174e3410edad2e0f05d704bbc33e9996bc0ead310d55372677316593",\n      "proximity": 10,\n      "beeMode": "full",\n      "reserveSize": 3779560,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 185,\n      "neighborhoodSize": 12,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    },\n    {\n      "peer": "da4cdab480f323d5791d3ab8d22d99147f110841e44a8991a169f0ab1f47d8e5",\n      "proximity": 10,\n      "beeMode": "full",\n      "reserveSize": 3778518,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 189,\n      "neighborhoodSize": 11,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    },\n    {\n      "peer": "da4ccec79bc34b502c802415b0008c4cee161faf3cee0f572bb019b117c89b2f",\n      "proximity": 10,\n      "beeMode": "full",\n      "reserveSize": 3779003,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 179,\n      "neighborhoodSize": 10,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    },\n    {\n      "peer": "da69d412b79358f84b7928d2f6b7ccdaf165a21313608e16edd317a5355ba250",\n      "proximity": 11,\n      "beeMode": "full",\n      "reserveSize": 3712586,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 189,\n      "neighborhoodSize": 12,\n      "batchCommitment": 133827002368,\n      "isReachable": true\n    },\n    {\n      "peer": "da61967b1bd614a69e5e83f73cc98a63a70ebe20454ca9aafea6b57493e00a34",\n      "proximity": 11,\n      "beeMode": "full",\n      "reserveSize": 3780190,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 182,\n      "neighborhoodSize": 13,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    },\n    {\n      "peer": "da7b6a268637cfd6799a9923129347fc3d564496ea79aea119e89c09c5d9efed",\n      "proximity": 13,\n      "beeMode": "full",\n      "reserveSize": 3721494,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 188,\n      "neighborhoodSize": 14,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    },\n    {\n      "peer": "da7a974149543df1b459831286b42b302f22393a20e9b3dd9a7bb5a7aa5af263",\n      "proximity": 13,\n      "beeMode": "full",\n      "reserveSize": 3852986,\n      "pullsyncRate": 0,\n      "storageRadius": 10,\n      "connectedPeers": 186,\n      "neighborhoodSize": 12,\n      "batchCommitment": 133828050944,\n      "isReachable": true\n    }\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The first entry has a proximity of 9, meaning that it is below the ",(0,s.jsx)(n.code,{children:"storageRadius"})," (depth) of 10 and so does not fall into our node's neighborhood. All the other nodes further down the list have a proximity of 10 or greater with our node, meaning they fall into our node's neighborhood."]}),"\n",(0,s.jsxs)(n.p,{children:["You may notice that there is some variation in ",(0,s.jsx)(n.code,{children:"neighborhoodSize"}),", however they are all close to the same value. This could be due to temporary connection problems between nodes in the neighborhood, but is not considered a problem unless the neighborhood size is much lower than its peers or at zero. As long as each node is connected to most of the other nodes in its neighborhood, each node in the neighborhood will be able to sync the required chunks to its reserve."]}),"\n",(0,s.jsxs)(n.p,{children:["And we can compare these entries to our own node's ",(0,s.jsx)(n.code,{children:"/status"})," results for diagnostic purposes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" curl -s http://localhost:1635/status | jq\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\n  "peer": "da7e5cc3ed9a46b6e7491d3bf738535d98112641380cbed2e9ddfe4cf4fc01c4",\n  "proximity": 0,\n  "beeMode": "full",\n  "reserveSize": 3747532,\n  "pullsyncRate": 0,\n  "storageRadius": 10,\n  "connectedPeers": 183,\n  "neighborhoodSize": 12,\n  "batchCommitment": 133828050944,\n  "isReachable": true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["From the results we can see that we have a healthy neighborhood size when compared with the other nodes in our neighborhood and also has the same ",(0,s.jsx)(n.code,{children:"batchCommitment"})," value as it should."]}),"\n",(0,s.jsx)(n.h3,{id:"redistributionstate",children:(0,s.jsx)(n.code,{children:"/redistributionstate"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint provides an overview of values related to storage fee redistribution game (in other words, staking rewards). You can use this endpoint to check whether or not your node is participating properly in the redistribution game."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -s http://localhost:1635/redistributionstate | jq\n{\n  "minimumGasFunds": "11080889201250000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "claim",\n  "round": 212859,\n  "lastWonRound": 207391,\n  "lastPlayedRound": 210941,\n  "lastFrozenRound": 210942,\n  "lastSelectedRound": 212553,\n  "lastSampleDuration": 491687776653,\n  "block": 32354719,\n  "reward": "1804537795127017472",\n  "fees": "592679945236926714",\n  "isHealthy": true\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"minimumGasFunds"'})," - The minimum required xDAI denominated in wei (1 xDAI = 10^18 wei) required for a node to participate in the redistribution game."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"hasSufficientFunds"'})," - Whether your node has at least the ",(0,s.jsx)(n.code,{children:'"minimumGasFunds"'})," amount of xDAI."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"isFrozen"'})," - Whether your node is currently frozen. See ",(0,s.jsx)(n.a,{href:"#",children:"docs"})," for more information on freezing."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"isFullySynced"'})," - Whether your node has fully synced all the chunks in its ",(0,s.jsx)(n.code,{children:'"storageRadius"'})," (the value returned from the ",(0,s.jsx)(n.code,{children:"/reservestate"})," endpoint.)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"phase"'})," - The current phase of the redistribution game (this does not indicate whether or not your node is participating in the current phase)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"round"'})," - The current number of the round of the redistribution game."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"lastWonRound"'})," - The last round number in which your node won the redistribtuion game."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"lastPlayedRound"'})," - The last round number in which your node participating in the redistribution game. If this number matches the number of the current round shown in ",(0,s.jsx)(n.code,{children:'"round"'}),", then your node is participating in the current round."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"lastFrozenRound"'})," - The last round in which your node was frozen."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"lastSelectedRound"'})," - The last round in which your node's neighborhood was selected. Note that it is possible for your node's neighborhood to be selected without your node playing in the redistribution game. This may potentially indicate your node's hardware is not sufficient to calculate the commitment hash fast enough. See ",(0,s.jsxs)(n.a,{href:"#",children:["section on the ",(0,s.jsx)(n.code,{children:"/rchash"})," endpoint"]})," for more information."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"lastSampleDuration"'})," - The time it took for your node to calculate the sample commitment hash in nanoseconds."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"block"'})," - current Gnosis block number"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"reward"'})," - The total all-time reward in PLUR earned by your node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"fees"'})," - The total amount in fees paid by your node denominated in xDAI wei."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"isHealthy"'})," - a check of whether your node\u2019s storage radius is the same as the most common radius from among its peer nodes"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reservestate",children:(0,s.jsx)(n.code,{children:"/reservestate"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint shows key information about the reserve state of your node. You can use it to identify problems with your node related to its reserve (whether it is syncing chunks properly into its reserve for example)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'    curl -s  http://localhost:1635/reservestate | jq\n\n    {\n      "radius": 15,\n      "": 10,\n      "commitment": 134121783296\n    }\n'})}),"\n",(0,s.jsx)(n.p,{children:"Let's take a look at each of these values:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"radius"'})," - is what the storage radius would be if every available batch was 100% utilized, it is essentially the radius needed for the network to handle all of the batches at 100% utilization. Radius is measured as a proximity order (PO)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"storageRadius"'})," - The radius of responsibility - the proximity order of chunks for which your node is responsible for storing. It should generally match the radius shown on [Swarmscan](",(0,s.jsx)(n.a,{href:"https://swarmscan.io/neighborhoods",children:"https://swarmscan.io/neighborhoods"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"commitment"'})," - The total number of chunks which would be stored on the Swarm network if 100% of all postage batches were fully utilized."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"chainstate",children:(0,s.jsx)(n.code,{children:"/chainstate"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint relates to your node's interactions with the Swarm Smart contracts on the Gnosis Chain."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:' curl -s http://localhost:1633/chainstate | jq\n\n{\n  "chainTip": 32354482,\n  "block": 32354475,\n  "totalAmount": "25422512270",\n  "currentPrice": "24000"\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"chainTip"'})," - The latest Gnosis Chain block number. Should be as high as or almost as high as the block number shown at ",(0,s.jsx)(n.a,{href:"https://gnosisscan.io/",children:"GnosisScan"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"block"'})," - The block to which your node has synced data from Gnosis Chain. This may be far behind the ",(0,s.jsx)(n.code,{children:'"chainTip"'})," when you first start up your node as it takes some time to sync all the data from the blockchain (especially if you are not using the ",(0,s.jsx)(n.code,{children:"snapshot"})," option). Should be very close to ",(0,s.jsx)(n.code,{children:'"chainTip"'})," if your node has already been operating for a while."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"totalAmount"'})," - Cumulative value of all prices per chunk in PLUR for each block."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"currentPrice"'})," - The price in PLUR to store a single chunk for each Gnosis Chain block."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"topology",children:(0,s.jsx)(n.code,{children:"/topology"})}),"\n",(0,s.jsx)(n.p,{children:"This endpoint allows you to explore the topology of your node within the Kademlia network. The results are split into 32 bins from bin_0 to bin_32. Each bin represents the nodes in the same neighborhood as your node at each proximity order from PO 0 to PO 32."}),"\n",(0,s.jsxs)(n.p,{children:["As the output of this file can be very large, we save it to the ",(0,s.jsx)(n.code,{children:"topology.json"})," file for easier inspection:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" curl -s http://localhost:1635/topology | jq '.' > topology.json\n"})}),"\n",(0,s.jsx)(n.p,{children:"We open the file in vim for inspection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"vim topology.json\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"/topology"})," results begin with several values describing the entire topology and are followed by the details for each of the 32 bins. Lets first look at the values describing the total topology:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "baseAddr": "da7e5cc3ed9a46b6e7491d3bf738535d98112641380cbed2e9ddfe4cf4fc01c4",\n  "population": 20514,\n  "connected": 176,\n  "timestamp": "2024-02-08T20:57:03.815537925Z",\n  "nnLowWatermark": 3,\n  "depth": 10,\n  "reachability": "Public",\n  "networkAvailability": "Available",\n    ...\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"baseAddr"'})," - Your node's overlay address."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"population"'})," - The total number of nodes your node has collected information about. This number should be around ####. If it is far higher or lower it likely indicates a problem."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"connected"'})," - The total number of nodes your node is currently connected to."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"timestamp"'})," - The time at which this topology snapshot was taken."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"nnLowWatermark"'})," - ???"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:'"depth"'})," -"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'"reachability"'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'"networkAvailability"'})}),"\n",(0,s.jsx)(n.p,{children:"After the first section are 32 sections, one for each bin. At the front of each of these sections is a summary of information about the respective bin followed two list, one of disconnected peers and the other of connected peers. Let's take a look at bin_10 as an example:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'...\n  "bin_10": {\n      "population": 3, // The total number of peers in this bin including both connected and disconnected peers.\n      "connected": 2, // Number of connected peers\n      "disconnectedPeers": [ //List of all disconnected peers\n        {\n          "address": "3e06e4667260c761f1b6a8539a99621c1af1f945e97667376c13b5f84984bcbc",\n          "metrics": {\n            "lastSeenTimestamp": 1707426772,\n            "sessionConnectionRetry": 2,\n            "connectionTotalDuration": 104619,\n            "sessionConnectionDuration": 72,\n            "sessionConnectionDirection": "outbound",\n            "latencyEWMA": 849,\n            "reachability": "Public",\n            "healthy": true\n          }\n        }\n      ],\n      "connectedPeers": [ // List of all connected peers\n        {\n          "address": "3e09deca28d24a4c6dab9350dd0fb27a2333f03120b9f92f0ac0fd245707c9e3",\n          "metrics": {\n            "lastSeenTimestamp": 1707426766,\n            "sessionConnectionRetry": 2,\n            "connectionTotalDuration": 105059,\n            "sessionConnectionDuration": 33,\n            "sessionConnectionDirection": "outbound",\n            "latencyEWMA": 899,\n            "reachability": "Public",\n            "healthy": true\n          }\n        },\n        {\n          "address": "3e1cdf7b1072fcde264c75f70635b9c1e9c1623eab2de55a0380f17b07751955",\n          "metrics": {\n            "lastSeenTimestamp": 1707426741,\n            "sessionConnectionRetry": 1,\n            "connectionTotalDuration": 109216,\n            "sessionConnectionDuration": 59,\n            "sessionConnectionDirection": "outbound",\n            "latencyEWMA": 948,\n            "reachability": "Public",\n            "healthy": true\n          }\n        }\n      ]\n    },\n'})}),"\n",(0,s.jsx)(n.h3,{id:"node",children:(0,s.jsx)(n.code,{children:"/node"})}),"\n",(0,s.jsx)(n.p,{children:"This API performs a simple check of node options related to your node type and also displays your current node type."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl -s http://localhost:1633/node | jq\n\n{\n  "beeMode": "full",\n  "chequebookEnabled": true,\n  "swapEnabled": true\n}\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"beeMode"'})," - The mode of your node, can be ",(0,s.jsx)(n.code,{children:'"full"'}),", ",(0,s.jsx)(n.code,{children:'"light"'}),", or ",(0,s.jsx)(n.code,{children:'"ultraLight"'}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"chequebookEnabled"'})," - Whether or not your node's ",(0,s.jsx)(n.code,{children:"chequebook-enable"})," option is set to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"swapEnabled"'})," - Whether or not your node's ",(0,s.jsx)(n.code,{children:"swap-enable"})," option is set to ",(0,s.jsx)(n.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If your node is not operating in the correct mode, this can help you to diagnose whether you have set your options correctly."}),"\n",(0,s.jsx)(n.h3,{id:"health",children:(0,s.jsx)(n.code,{children:"/health"})}),"\n",(0,s.jsx)(n.p,{children:"The /health endpoint is primarily used by infra tools such as Docker / Kubernetes to check whether the server is live, it's not an important diagnostic tool for node operators."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'    curl -s http://localhost:1633/health | jq\n    \n    {\n      "status": "ok",\n      "version": "1.18.2-759f56f7",\n      "apiVersion": "5.1.1",\n      "debugApiVersion": "0.0.0"\n    }           \n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"status"'}),' - "ok" if the server is responsive.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"version"'})," - The version of your Bee node. You can find latest version by checking the ",(0,s.jsx)(n.a,{href:"https://github.com/ethersphere/bee",children:"Bee github repo"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'"apiVersion"'})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'"debugApiVersion"'})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4552:(e,n,o)=>{o.d(n,{I:()=>d,M:()=>r});var s=o(11504);const i={},t=s.createContext(i);function r(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
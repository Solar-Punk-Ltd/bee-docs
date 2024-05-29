"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[7896],{97685:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var n=t(17624),s=t(4552);t(11504);var i=t(38888),r=t(87768);const c={title:"Buy a Batch of Stamps",id:"buy-a-stamp-batch"},l=void 0,o={id:"develop/access-the-swarm/buy-a-stamp-batch",title:"Buy a Batch of Stamps",description:"A postage batch is required to upload data to Swarm. Postage stamp batches represent right to write data on Swarm's DISC (Distributed Immutable Store of Chunks). The parameters which control the duration and quantity of data that can be stored by a postage batch are depth and amount, with depth determining data volume that can be uploaded by the batch and amount determining storage duration of data uploaded with the batch.",source:"@site/docs/develop/access-the-swarm/buy-a-stamp-batch.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/buy-a-stamp-batch",permalink:"/docs/develop/access-the-swarm/buy-a-stamp-batch",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/buy-a-stamp-batch.md",tags:[],version:"current",frontMatter:{title:"Buy a Batch of Stamps",id:"buy-a-stamp-batch"},sidebar:"develop",previous:{title:"Introduction",permalink:"/docs/develop/access-the-swarm/introduction"},next:{title:"Upload and Download",permalink:"/docs/develop/access-the-swarm/upload-and-download"}},d={},h=[{value:"Fund your node&#39;s wallet.",id:"fund-your-nodes-wallet",level:2},{value:"Buying a stamp batch",id:"buying-a-stamp-batch",level:2},{value:"API",id:"api",level:4},{value:"Swarm CLI",id:"swarm-cli",level:4},{value:"Setting stamp batch parameters and options",id:"setting-stamp-batch-parameters-and-options",level:2},{value:"Choosing <code>depth</code>",id:"choosing-depth",level:3},{value:"Choosing <code>amount</code>",id:"choosing-amount",level:3},{value:"Mutable or Immutable?",id:"mutable-or-immutable",level:3},{value:"Viewing Stamps",id:"viewing-stamps",level:2},{value:"API",id:"api-1",level:4},{value:"Swarm CLI",id:"swarm-cli-1",level:4},{value:"Checking the remaining TTL (time to live) of your batch",id:"checking-the-remaining-ttl-time-to-live-of-your-batch",level:2},{value:"API",id:"api-2",level:4},{value:"Swarm CLI",id:"swarm-cli-2",level:4},{value:"Top up your batch",id:"top-up-your-batch",level:2},{value:"API",id:"api-3",level:4},{value:"Swarm CLI",id:"swarm-cli-3",level:4},{value:"Dilute your batch",id:"dilute-your-batch",level:2},{value:"API",id:"api-4",level:4},{value:"Swarm CLI",id:"swarm-cli-4",level:4},{value:"Stewardship",id:"stewardship",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["A postage batch is required to upload data to Swarm. Postage stamp batches represent ",(0,n.jsx)(a.em,{children:"right to write"})," data on Swarm's ",(0,n.jsx)(a.a,{href:"/docs/learn/technology/disc",children:"DISC (Distributed Immutable Store of Chunks)"}),". The parameters which control the duration and quantity of data that can be stored by a postage batch are ",(0,n.jsx)(a.code,{children:"depth"})," and ",(0,n.jsx)(a.code,{children:"amount"}),", with ",(0,n.jsx)(a.code,{children:"depth"})," determining data volume that can be uploaded by the batch and ",(0,n.jsx)(a.code,{children:"amount"})," determining storage duration of data uploaded with the batch."]}),"\n",(0,n.jsxs)(a.p,{children:["For a deeper understanding of how ",(0,n.jsx)(a.code,{children:"depth"})," and ",(0,n.jsx)(a.code,{children:"amount"})," parameters determine the data volume and storage duration of a postage batch, see the ",(0,n.jsx)(a.a,{href:"/docs/learn/technology/contracts/postage-stamp",children:"postage stamp contract page"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"fund-your-nodes-wallet",children:"Fund your node's wallet."}),"\n",(0,n.jsx)(a.p,{children:"In order to purchase a postage stamp batch, your node's Gnosis Chain address needs to be funded with sufficient xDAI to pay gas for transaction fees on Gnosis Chain as well as sufficient xBZZ to pay for the cost of the postage stamp batch itself."}),"\n",(0,n.jsxs)(a.p,{children:["xBZZ can be obtained from a variety of different centralized and decentralized exchanges. You can find more information on ",(0,n.jsx)(a.a,{href:"https://www.ethswarm.org/get-bzz#how-to-get-bzz",children:"where to obtain xBZZ"})," on the Ethswarm homepage."]}),"\n",(0,n.jsxs)(a.p,{children:["xDAI can be obtained from a wide range of centralized and decentralized exchanges. See ",(0,n.jsx)(a.a,{href:"https://docs.gnosischain.com/about/tokens/xdai",children:"this list of exchanges"})," from the Gnosis Chain documentation to get started."]}),"\n",(0,n.jsx)(a.h2,{id:"buying-a-stamp-batch",children:"Buying a stamp batch"}),"\n",(0,n.jsxs)(a.p,{children:["When interacting with the Bee API directly, ",(0,n.jsx)(a.code,{children:"amount"})," and ",(0,n.jsx)(a.code,{children:"depth"})," are passed as path parameters:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"curl -s -XPOST http://localhost:1633/stamps/<amount>/<depth>\n"})}),"\n",(0,n.jsx)(a.p,{children:"And with Swarm CLI, they are set using option flags:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"swarm-cli stamp buy --depth <depth value> --amount <amount value>\n"})}),"\n",(0,n.jsxs)(i.c,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Swarm CLI",value:"swarm-cli"}],children:[(0,n.jsxs)(r.c,{value:"api",children:[(0,n.jsx)(a.h4,{id:"api",children:"API"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"curl -s -XPOST http://localhost:1633/stamps/100000000/20\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'{\n  "batchID": "8fcec40c65841e0c3c56679315a29a6495d32b9ed506f2757e03cdd778552c6b",\n  "txHash": "0x51c77ac171efd930eca8f3a77e3fcd5aca0a7353b84d5562f8e9c13f5907b675"\n}\n'})})]}),(0,n.jsxs)(r.c,{value:"swarm-cli",children:[(0,n.jsx)(a.h4,{id:"swarm-cli",children:"Swarm CLI"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"swarm-cli stamp buy --depth 20 --amount 100000000\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"Estimated cost: 0.010 BZZ\nEstimated capacity: 4.00 GB\nEstimated TTL: 5 hours 47 minutes 13 seconds\nType: Mutable\nWhen a mutable stamp reaches full capacity, it still permits new content uploads. However, this comes with the caveat of overwriting previously uploaded content associated with the same stamp.\n? Confirm the purchase Yes\nStamp ID: f4b9830676f4eeed4982c051934e64113dc348d7f5d2ab4398d371be0fbcdbf5\n"})})]})]}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"Once your batch has been purchased, it will take a few minutes for other Bee nodes in the Swarm to catch up and register your batch. Allow some time for your batch to propagate in the network before proceeding to the next step."})}),"\n",(0,n.jsx)(a.h2,{id:"setting-stamp-batch-parameters-and-options",children:"Setting stamp batch parameters and options"}),"\n",(0,n.jsxs)(a.p,{children:["When purchasing a batch of stamps there are several parameters and options which must be considered. The ",(0,n.jsx)(a.code,{children:"depth"})," parameter will control how many chunks can be uploaded with a batch of stamps. The ",(0,n.jsx)(a.code,{children:"amount"})," parameter determines how much xBZZ will be allocated per chunk, and therefore also controls how long the chunks will be stored. While the ",(0,n.jsx)(a.code,{children:"immutable"})," header option sets the batch as either mutable or immutable, which can significantly alter the behavior of the batch utilisation (more details below)."]}),"\n",(0,n.jsxs)(a.h3,{id:"choosing-depth",children:["Choosing ",(0,n.jsx)(a.code,{children:"depth"})]}),"\n",(0,n.jsx)(a.admonition,{type:"caution",children:(0,n.jsxs)(a.p,{children:["The minimum value for ",(0,n.jsx)(a.code,{children:"depth"})," is 17, however a higher depth value is recommended for most use cases due to the ",(0,n.jsx)(a.a,{href:"/docs/learn/technology/contracts/postage-stamp#batch-utilisation",children:"mechanics of stamp batch utilisation"}),". See ",(0,n.jsx)(a.a,{href:"/docs/learn/technology/contracts/postage-stamp#effective-utilisation-table",children:"the depths utilisation table"})," to help decide which depth is best for your use case."]})}),"\n",(0,n.jsx)(a.p,{children:"One notable aspect of batch utilisation is that the entire batch is considered fully utilised as soon as any one of its buckets are filled. This means that the actual amount of chunks storable by a batch is less than the nominal maximum amount."}),"\n",(0,n.jsxs)(a.p,{children:["See the ",(0,n.jsx)(a.a,{href:"/docs/learn/technology/contracts/postage-stamp#batch-utilisation",children:"postage stamp contract page"})," for a more complete explanation of how batch utilisation works and a ",(0,n.jsx)(a.a,{href:"/docs/learn/technology/contracts/postage-stamp#effective-utilisation-table",children:"table"})," with the specific amounts of data which can be safely uploaded for each ",(0,n.jsx)(a.code,{children:"depth"})," value."]}),"\n",(0,n.jsxs)(a.h3,{id:"choosing-amount",children:["Choosing ",(0,n.jsx)(a.code,{children:"amount"})]}),"\n",(0,n.jsx)(a.admonition,{type:"caution",children:(0,n.jsxs)(a.p,{children:["The minimum ",(0,n.jsx)(a.code,{children:"amount"})," value for purchasing stamps is required to be at least enough to pay for 24 hours of storage. To find this value multiply the lastPrice value from the postage stamp contract times 17280 (the number of blocks in 24 hours). This requirement is in place in order to prevent spamming the network."]})}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)(a.code,{children:"amount"})," parameter determines how much xBZZ is assigned per chunk for a postage stamp batch. For more information see the ",(0,n.jsx)(a.a,{href:"/docs/learn/technology/contracts/postage-stamp#batch-amount--batch-cost",children:"postage stamp batch contract page"})," where a more complete description is included."]}),"\n",(0,n.jsx)(a.h3,{id:"mutable-or-immutable",children:"Mutable or Immutable?"}),"\n",(0,n.jsxs)(a.p,{children:["Depending on the use case, uploaders may desire to use mutable or immutable batches. The fundamental difference between immutable and mutable batches is that immutable batches become unusable once their capacity is filled, while for mutable batches, once their capacity is filled, they may continue to be used, however older chunks of data will be overwritten with the newer once over capacity. The default batch type is immutable. In order to set the batch type to mutable, the ",(0,n.jsx)(a.code,{children:"immutable"})," header should be set to ",(0,n.jsx)(a.code,{children:"false"}),". See ",(0,n.jsx)(a.a,{href:"/docs/learn/technology/contracts/postage-stamp#which-type-of-batch-to-use",children:"this section on postage stamp batch utilisation"})," to learn more about mutable vs immutable batches, and about which type may be right for your use case."]}),"\n",(0,n.jsx)(a.h2,{id:"viewing-stamps",children:"Viewing Stamps"}),"\n",(0,n.jsx)(a.p,{children:"To check on your stamps, send a GET request to the stamp endpoint."}),"\n",(0,n.jsxs)(i.c,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Swarm CLI",value:"swarm-cli"}],children:[(0,n.jsxs)(r.c,{value:"api",children:[(0,n.jsx)(a.h4,{id:"api-1",children:"API"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"curl http://localhost:1633/stamps\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'{\n  "stamps": [\n    {\n      "batchID": "f4b9830676f4eeed4982c051934e64113dc348d7f5d2ab4398d371be0fbcdbf5",\n      "utilization": 0,\n      "usable": true,\n      "label": "",\n      "depth": 20,\n      "amount": "100000000",\n      "bucketDepth": 16,\n      "blockNumber": 30643611,\n      "immutableFlag": true,\n      "exists": true,\n      "batchTTL": 20588,\n      "expired": false\n    }\n  ]\n}\n'})})]}),(0,n.jsxs)(r.c,{value:"swarm-cli",children:[(0,n.jsx)(a.h4,{id:"swarm-cli-1",children:"Swarm CLI"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"swarm-cli stamp list\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"Stamp ID: f4b9830676f4eeed4982c051934e64113dc348d7f5d2ab4398d371be0fbcdbf5\nUsage: 0%\nRemaining Capacity: 4.00 GB\nTTL: 5 hours 42 minutes 18 seconds\nExpires: 2023-10-26\n\n"})})]})]}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"It is not possible to reupload unencrypted content which was stamped using an expired postage stamp."})}),"\n",(0,n.jsx)(a.h2,{id:"checking-the-remaining-ttl-time-to-live-of-your-batch",children:"Checking the remaining TTL (time to live) of your batch"}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsx)(a.p,{children:"At present, TTL is a primitive calculation based on the current storage price and the assumption that storage price will remain static in the future. As more data is uploaded into Swarm, the price of storage will begin to increase. For data that it is important to keep alive, make sure your batches have plenty of time to live!"})}),"\n",(0,n.jsxs)(a.p,{children:["In order to make sure your ",(0,n.jsx)(a.em,{children:"batch"})," has sufficient ",(0,n.jsx)(a.em,{children:"remaining balance"})," to be stored and served by nodes in its ",(0,n.jsx)(a.a,{href:"/docs/learn/glossary#2-area-of-responsibility-related-depths",children:(0,n.jsx)(a.em,{children:"area of responsibility"})}),", you must regularly check on its ",(0,n.jsx)(a.em,{children:"time to live"})," and act accordingly. The ",(0,n.jsx)(a.em,{children:"time to live"})," is the number of seconds before the chunks will be considered for garbage collection by nodes in the network."]}),"\n",(0,n.jsxs)(a.p,{children:["The remaining ",(0,n.jsx)(a.em,{children:"time to live"})," in seconds is shown in the API in the returned json object as the value for ",(0,n.jsx)(a.code,{children:"batchTTL"}),", and with Swarm CLI you will see the formatted TTL as the ",(0,n.jsx)(a.code,{children:"TTL"})," value."]}),"\n",(0,n.jsxs)(i.c,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Swarm CLI",value:"swarm-cli"}],children:[(0,n.jsxs)(r.c,{value:"api",children:[(0,n.jsx)(a.h4,{id:"api-2",children:"API"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"curl http://localhost:1633/stamps\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'{\n  "stamps": [\n    {\n      "batchID": "f4b9830676f4eeed4982c051934e64113dc348d7f5d2ab4398d371be0fbcdbf5",\n      "utilization": 0,\n      "usable": true,\n      "label": "",\n      "depth": 20,\n      "amount": "100000000",\n      "bucketDepth": 16,\n      "blockNumber": 30643611,\n      "immutableFlag": true,\n      "exists": true,\n      "batchTTL": 20588,\n      "expired": false\n    }\n  ]\n}\n'})})]}),(0,n.jsxs)(r.c,{value:"swarm-cli",children:[(0,n.jsx)(a.h4,{id:"swarm-cli-2",children:"Swarm CLI"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"swarm-cli stamp list\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"Stamp ID: f4b9830676f4eeed4982c051934e64113dc348d7f5d2ab4398d371be0fbcdbf5\nUsage: 0%\nRemaining Capacity: 4.00 GB\nTTL: 5 hours 42 minutes 18 seconds\nExpires: 2023-10-26\n\n"})})]})]}),"\n",(0,n.jsx)(a.h2,{id:"top-up-your-batch",children:"Top up your batch"}),"\n",(0,n.jsx)(a.admonition,{type:"danger",children:(0,n.jsx)(a.p,{children:"Don't let your batch run out! If it does, you will need to restamp and resync your content."})}),"\n",(0,n.jsx)(a.p,{children:"If your batch is starting to run out, or you would like to extend the life of your batch to protect against storage price rises, you can increase the batch TTL by topping up your batch using the stamps endpoint, passing in the relevant batchID into the HTTP PATCH request."}),"\n",(0,n.jsxs)(i.c,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Swarm CLI",value:"swarm-cli"}],children:[(0,n.jsxs)(r.c,{value:"api",children:[(0,n.jsx)(a.h4,{id:"api-3",children:"API"}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'curl -X PATCH "http://localhost:1633/stamps/topup/6d32e6f1b724f8658830e51f8f57aa6029f82ee7a30e4fc0c1bfe23ab5632b27/10000000"\n'})})]}),(0,n.jsxs)(r.c,{value:"swarm-cli",children:[(0,n.jsx)(a.h4,{id:"swarm-cli-3",children:"Swarm CLI"}),(0,n.jsx)(a.p,{children:"List available stamps."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"swarm-cli stamp list\n"})}),(0,n.jsx)(a.p,{children:"Copy stamp ID."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"Stamp ID: daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa4ea660de66aa62db\nUsage: 13%\nRemaining Capacity: 3.50 GB\nTTL: 183 days 1 hour 37 minutes 8 seconds\nExpires: 2024-05-02\n"})}),(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"swarm-cli stamp topup"})," with the ",(0,n.jsx)(a.code,{children:"--amount"})," and ",(0,n.jsx)(a.code,{children:"--stamp"})," parameters set with the amount to topup in PLUR and the stamp ID."]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"swarm-cli stamp topup --amount 10000000  --stamp daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa\n4ea660de66aa62db\n"})}),(0,n.jsx)(a.p,{children:"Wait for topup transaction to complete."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"\u2b21 \u2b21 \u2b22 Topup in progress. This may take a while.\nStamp ID: daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa4ea660de66aa62db\nDepth: 20\nAmount: 100000001000\n"})})]})]}),"\n",(0,n.jsx)(a.h2,{id:"dilute-your-batch",children:"Dilute your batch"}),"\n",(0,n.jsx)(a.p,{children:'In order to store more data with a batch of stamps, you must "dilute" the batch. Dilution simply refers to increasing the depth of the batch, thereby allowing it to store a greater number of chunks. As dilution only increases the the depth of a batch and does not automatically top up the batch with more xBZZ, dilution will decrease the TTL of the batch. Therefore if you wish to store more with your batch but don\'t want to decrease its TTL, you will need to both dilute and top up your batch with more xBZZ.'}),"\n",(0,n.jsxs)(i.c,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Swarm CLI",value:"swarm-cli"}],children:[(0,n.jsxs)(r.c,{value:"api",children:[(0,n.jsx)(a.h4,{id:"api-4",children:"API"}),(0,n.jsxs)(a.p,{children:["Here we call the ",(0,n.jsx)(a.code,{children:"/stamps"})," endpoint and find a batch with ",(0,n.jsx)(a.code,{children:"depth"})," 24 and a ",(0,n.jsx)(a.code,{children:"batchTTL"})," of 2083223 which we wish to dilute:"]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"curl  http://localhost:1633/stamps\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n    "stamps": [\n        {\n            "batchID": "0e4dd16cc435730a25ba662eb3da46e28d260c61c31713b6f4abf8f8c2548ae5",\n            "utilization": 0,\n            "usable": true,\n            "label": "",\n            "depth": 24,\n            "amount": "10000000000",\n            "bucketDepth": 16,\n            "blockNumber": 29717348,\n            "immutableFlag": false,\n            "exists": true,\n            "batchTTL": 2083223,\n            "expired": false\n        }\n    ]\n}\n'})}),(0,n.jsxs)(a.p,{children:["Next we call the ",(0,n.jsx)(a.a,{href:"/api/#tag/Postage-Stamps/paths/~1stamps~1dilute~1%7Bbatch_id%7D~1%7Bdepth%7D/patch",children:(0,n.jsx)(a.code,{children:"dilute"})})," endpoint to increase the ",(0,n.jsx)(a.code,{children:"depth"})," of the batch using the ",(0,n.jsx)(a.code,{children:"batchID"})," and our new ",(0,n.jsx)(a.code,{children:"depth"})," of 26:"]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"curl -s -XPATCH http://localhost:1633/stamps/dilute/0e4dd16cc435730a25ba662eb3da46e28d260c61c31713b6f4abf8f8c2548ae5/26\n"})}),(0,n.jsxs)(a.p,{children:["And a ",(0,n.jsx)(a.code,{children:"txHash"})," of our successful transaction:"]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'{\n    "batchID": "0e4dd16cc435730a25ba662eb3da46e28d260c61c31713b6f4abf8f8c2548ae5",\n    "txHash": "0x298e80358b3257292752edb2535a1cd84440c074451b61f78fab349aea4962b7"\n}\n'})}),(0,n.jsxs)(a.p,{children:["And finally we use the ",(0,n.jsx)(a.code,{children:"/stamps"})," endpoint again to confirm the new ",(0,n.jsx)(a.code,{children:"depth"})," and decreased ",(0,n.jsx)(a.code,{children:"batchTTL"}),":"]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"curl  http://localhost:1633/stamps\n"})}),(0,n.jsxs)(a.p,{children:["We can see the new ",(0,n.jsx)(a.code,{children:"depth"})," of 26 and a decreased ",(0,n.jsx)(a.code,{children:"batchTTL"})," of 519265."]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n    "stamps": [\n        {\n            "batchID": "0e4dd16cc435730a25ba662eb3da46e28d260c61c31713b6f4abf8f8c2548ae5",\n            "utilization": 0,\n            "usable": true,\n            "label": "",\n            "depth": 26,\n            "amount": "10000000000",\n            "bucketDepth": 16,\n            "blockNumber": 29717348,\n            "immutableFlag": false,\n            "exists": true,\n            "batchTTL": 519265,\n            "expired": false\n        }\n    ]\n}\n'})})]}),(0,n.jsxs)(r.c,{value:"swarm-cli",children:[(0,n.jsx)(a.h4,{id:"swarm-cli-4",children:"Swarm CLI"}),(0,n.jsxs)(a.p,{children:["List available stamps, make sure to use the ",(0,n.jsx)(a.code,{children:"--verbose"})," flag so that we can see the batch depth."]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"swarm-cli stamp list --verbose\n"})}),(0,n.jsx)(a.p,{children:"We have a stamp batch with depth 20 we want to dilute. Copy stamp ID of that batch."}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"Listing postage stamps...\nStamp ID: daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa4ea660de66aa62db\nUsage: 13%\nRemaining Capacity: 3.50 GB\nTotal Capacity (mutable): 4.00 GB\nTTL: 182 days 4 hours 39 minutes 47 seconds\nExpires: 2024-05-02\nDepth: 20\nBucket Depth: 16\nAmount: 100010002000\nUsable: true\nUtilization: 2\nBlock Number: 29734329\n"})}),(0,n.jsxs)(a.p,{children:["Use ",(0,n.jsx)(a.code,{children:"swarm-cli stamp dilute"})," with the ",(0,n.jsx)(a.code,{children:"--depth"})," and ",(0,n.jsx)(a.code,{children:"--stamp"})," parameters set with the desired new depth and the stamp ID."]}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"swarm-cli stamp dilute --depth 21 --stamp daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa4ea660de66aa62db\n"})}),(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"\u2b21 \u2b21 \u2b22 Dilute in progress. This may take a while.\nStamp ID: daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa4ea660de66aa62db\nDepth: 20\nAmount: 100010002000\n"})})]})]}),"\n",(0,n.jsx)(a.h2,{id:"stewardship",children:"Stewardship"}),"\n",(0,n.jsxs)(a.p,{children:["The ",(0,n.jsx)("a",{href:"/api/#tag/Stewardship",target:"_blank",children:"stewardship endpoint"})," in combination with ",(0,n.jsx)(a.a,{href:"/docs/develop/access-the-swarm/pinning",children:"pinning"})," can be used to guarantee that important content is always available. It is used for checking whether the content for a Swarm reference is retrievable and for re-uploading the content if it is not."]}),"\n",(0,n.jsxs)(a.p,{children:["An HTTP GET request to the ",(0,n.jsx)(a.code,{children:"stewardship"})," endpoint checks to see whether the content for the specified Swarm reference is retrievable:"]}),"\n",(0,n.jsx)(a.admonition,{type:"info",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.code,{children:"stewardship"})," is not currently supported by Swarm CLI"]})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'curl "http://localhost:1633/stewardship/c0c2b70b01db8cdfaf114cde176a1e30972b556c7e72d5403bea32e\nc0207136f"\n'})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n  "isRetrievable": true\n}\n'})}),"\n",(0,n.jsx)(a.p,{children:"If the content is not retrievable, an HTTP PUT request can be used to re-upload the content:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:'curl -X PUT "http://localhost:1633/stewardship/c0c2b70b01db8cdfaf114cde176a1e30972b556c7e72d5403bea32ec0207136f"\n'})}),"\n",(0,n.jsx)(a.p,{children:"Note that for the re-upload to succeed, the associated content must be available locally, either pinned or cached. Since it isn't easy to predict if the content will be cached, for important content pinning is recommended."})]})}function p(e={}){const{wrapper:a}={...(0,s.M)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},87768:(e,a,t)=>{t.d(a,{c:()=>r});t(11504);var n=t(65456);const s={tabItem:"tabItem_Ymn6"};var i=t(17624);function r(e){let{children:a,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.c)(s.tabItem,r),hidden:t,children:a})}},38888:(e,a,t)=>{t.d(a,{c:()=>y});var n=t(11504),s=t(65456),i=t(53943),r=t(55592),c=t(95288),l=t(10632),o=t(27128),d=t(21148);function h(e){var a,t;return null!=(a=null==(t=n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}function u(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=null!=a?a:function(e){return h(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:s}}=e;return{value:a,label:t,attributes:n,default:s}}))}(t);return function(e){const a=(0,o.w)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const s=(0,r.Uz)(),i=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:a,groupId:t});return[(0,l._M)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(s.location.search);a.set(i,e),s.replace({...s.location,search:a.toString()})}),[i,s])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:s}=e,i=u(e),[r,l]=(0,n.useState)((()=>function(e){var a;let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}const s=null!=(a=n.find((e=>e.default)))?a:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:i}))),[o,h]=m({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:a}=e;const t=function(e){return e?"docusaurus.tab."+e:null}(a),[s,i]=(0,d.IN)(t);return[s,(0,n.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=null!=o?o:b;return p({value:e,tabValues:i})?e:null})();(0,c.c)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error("Can't select invalid tab value="+e);l(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=t(93664);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(17624);function j(e){let{className:a,block:t,selectedValue:n,selectValue:r,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.MV)(),d=e=>{const a=e.currentTarget,t=l.indexOf(a),s=c[t].value;s!==n&&(o(a),r(s))},h=e=>{var a;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var n;const a=l.indexOf(e.currentTarget)+1;t=null!=(n=l[a])?n:l[0];break}case"ArrowLeft":{var s;const a=l.indexOf(e.currentTarget)-1;t=null!=(s=l[a])?s:l[l.length-1];break}}null==(a=t)||a.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":t},a),children:c.map((e=>{let{value:a,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.c)("tabs__item",x.tabItem,null==i?void 0:i.className,{"tabs__item--active":n===a}),children:null!=t?t:a},a)}))})}function w(e){let{lazy:a,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function v(e){const a=b(e);return(0,g.jsxs)("div",{className:(0,s.c)("tabs-container",x.tabList),children:[(0,g.jsx)(j,{...e,...a}),(0,g.jsx)(w,{...e,...a})]})}function y(e){const a=(0,f.c)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(a))}},4552:(e,a,t)=>{t.d(a,{I:()=>c,M:()=>r});var n=t(11504);const s={},i=n.createContext(s);function r(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);
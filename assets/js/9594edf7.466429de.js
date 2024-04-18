"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[2728],{7144:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=s(17624),t=s(4552);const o={title:"Cashing Out",id:"cashing-out"},r=void 0,c={id:"bee/working-with-bee/cashing-out",title:"Cashing Out",description:"There are two different types of cashing out. The first type is cashing out xBZZ rewards earned from staking and providing storage services (this method also allows for withdrawal of the native xDAI token). The second type is for the withdrawal of xBZZ earned through bandwidth incentives (SWAP). Both types are explained below:",source:"@site/docs/bee/working-with-bee/cashing-out.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/cashing-out",permalink:"/docs/bee/working-with-bee/cashing-out",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/cashing-out.md",tags:[],version:"current",frontMatter:{title:"Cashing Out",id:"cashing-out"},sidebar:"bee",previous:{title:"Staking",permalink:"/docs/bee/working-with-bee/staking"},next:{title:"Monitoring Your Node",permalink:"/docs/bee/working-with-bee/monitoring"}},i={},h=[{value:"Withdrawing xBZZ Rewards and Native xDAI",id:"withdrawing-xbzz-rewards-and-native-xdai",level:2},{value:"Cashing out Cheques (SWAP)",id:"cashing-out-cheques-swap",level:2},{value:"Managing uncashed cheques",id:"managing-uncashed-cheques",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"There are two different types of cashing out. The first type is cashing out xBZZ rewards earned from staking and providing storage services (this method also allows for withdrawal of the native xDAI token). The second type is for the withdrawal of xBZZ earned through bandwidth incentives (SWAP). Both types are explained below:"}),"\n",(0,a.jsx)(n.h2,{id:"withdrawing-xbzz-rewards-and-native-xdai",children:"Withdrawing xBZZ Rewards and Native xDAI"}),"\n",(0,a.jsxs)(n.p,{children:["You can withdraw xBZZ rewards or native xDAI tokens using the ",(0,a.jsx)(n.code,{children:"/wallet/withdraw/"})," endpoint. The endpoint allows you to withdraw tokens to any address which you have whitelisted using the ",(0,a.jsx)(n.code,{children:"withdrawal-addresses-whitelist"})," option."]}),"\n",(0,a.jsx)(n.p,{children:"You can specify either a single address:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# withdrawal target addresses\nwithdrawal-addresses-whitelist: 0x62d04588e282849d391ebff1b9884cb921b9b94a\n"})}),"\n",(0,a.jsx)(n.p,{children:"Or an array of addresses:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-yaml",children:"# withdrawal target addresses\nwithdrawal-addresses-whitelist: [ 0x62d04588e282849d391ebff1b9884cb921b9b94a, 0x71a5aae026e2ab87612a5824d492a095e7d790bf ]\n"})}),"\n",(0,a.jsx)(n.p,{children:"The token you desire to withdraw is specified in the path directly:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"http://localhost:1635/wallet/withdraw/{coin}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For ",(0,a.jsx)(n.code,{children:"coin"}),", you can use the value ",(0,a.jsx)(n.code,{children:"NativeToken"})," for xDAI or ",(0,a.jsx)(n.code,{children:"BZZ"})," for xBZZ."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"amount"})," query parameter is used to specify how much of the token you wish to withdraw. The value should be specified in the lowest denomination for each token (wei for xDAI and PLUR for xBZZ)."]}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"address"})," query parameter is used to specify the target address to withdraw to. This address must be specified using the ",(0,a.jsx)(n.code,{children:"withdrawal-addresses-whitelist"})," option in your configuration."]}),"\n",(0,a.jsx)(n.p,{children:"The following command will withdraw a single PLUR of xBZZ to address 0x62d04588e282849d391ebff1b9884cb921b9b94a:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST "http://localhost:1635/wallet/withdraw/bzz?amount=1&address=0x62d04588e282849d391ebff1b9884cb921b9b94a"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"cashing-out-cheques-swap",children:"Cashing out Cheques (SWAP)"}),"\n",(0,a.jsxs)(n.p,{children:["As your Bee forwards and serves chunks to its peers, it is rewarded in\nxBZZ in the form of cheques. Once these cheques accumulate sufficient\nvalue, you may ",(0,a.jsx)(n.em,{children:"cash them out"})," using Bee's API. This process transfers\nmoney from your peer's chequebooks into your own, which you can then\nwithdraw to your wallet to do with as you please!"]}),"\n",(0,a.jsx)(n.admonition,{type:"important",children:(0,a.jsxs)(n.p,{children:["Do ",(0,a.jsx)(n.strong,{children:"not"})," cash out your cheques too regularly! Once a week is more\nthan sufficient! Besides the transaction costs, this prevents and\nrelieves unnecessary congestion on the blockchain. \ud83d\udca9"]})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Learn more about how SWAP and other accounting protocols work by reading\n",(0,a.jsx)("a",{href:"/the-book-of-swarm.pdf",target:"_blank",rel:"noopener noreferrer",children:"The Book of Swarm"})," ."]})}),"\n",(0,a.jsx)(n.p,{children:"Bee contains a rich set of features to enable you to query the current accounting state of your node. First, let's query our node's current balance by sending a POST request to the balances endpoint."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl localhost:1635/chequebook/balance | jq\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "totalBalance": "10000000",\n  "availableBalance": "9640360"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"It is also possible to examine your per-peer balances."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl localhost:1635/balances | jq\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "balances": [\n    //...\n    {\n      "peer": "d0bf001e05014fa036af97f3d226bee253d2b147f540b6c2210947e5b7b409af",\n      "balance": "-85420"\n    },\n    {\n      "peer": "f1e2872581de18bdc68060dc8edd3aa96368eb341e915aba86b450486b105a47",\n      "balance": "-75990"\n    }\n    //...\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"In Swarm, these per-peer balances represent trustful agreements between nodes. Tokens only actually change hands when a node settles a cheque. This can either be triggered manually or when a certain threshold is reached with a peer. In this case, a settlement takes place. You may view these using the settlements endpoint."}),"\n",(0,a.jsx)(n.p,{children:"More info can be found by using the chequebook API."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl localhost:1635/settlements| jq\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "totalreceived": "718030",\n  "totalsent": "0",\n  "settlements": [\n    //...\n    {\n      "peer": "dce1833609db868e7611145b48224c061ea57fd14e784a278f2469f355292ca6",\n      "received": "8987000000000",\n      "sent": "0"\n    }\n    //...\n  ]\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"More information about the current received or sent cheques can also be found using the chequebook api."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl localhost:1635/chequebook/cheque | jq\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "lastcheques": [\n    {\n      "peer": "dce1833609db868e7611145b48224c061ea57fd14e784a278f2469f355292ca6",\n      "lastreceived": {\n        "beneficiary": "0x21b26864067deb88e2d5cdca512167815f2910d3",\n        "chequebook": "0x4A373Db93ba54cab999e2C757bF5ca0356B42a3f",\n        "payout": "8987000000000"\n      },\n      "lastsent": null\n    }\n    //...\n  ]\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["As our node's participation in the network increases, we will begin to see more and more of these balances arriving. In the case that we have ",(0,a.jsx)(n.em,{children:"received"})," a settlement from another peer, we can ask our node to perform the relevant transactions on the blockchain, and cash our earnings out."]}),"\n",(0,a.jsxs)(n.p,{children:["To do this, we simply POST the relevant peer's address to the ",(0,a.jsx)(n.code,{children:"cashout"})," endpoint."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -XPOST http://localhost:1635/chequebook/cashout/d7881307e793e389642ea733451db368c4c9b9e23f188cca659c8674d183a56b\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "transactionHash": "0xba7b500e21fc0dc0d7163c13bb5fea235d4eb769d342e9c007f51ab8512a9a82"\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You may check the status of your transaction using the ",(0,a.jsx)(n.a,{href:"https://blockscout.com/xdai/mainnet",children:"xDAI\nBlockscout"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Finally, we can now see the status of the cashout transaction by sending a GET request to the same URL."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl http://localhost:1635/chequebook/cashout/d7881307e793e389642ea733451db368c4c9b9e23f188cca659c8674d183a56b | jq\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "peer": "d7881307e793e389642ea733451db368c4c9b9e23f188cca659c8674d183a56b",\n  "chequebook": "0xae315a9adf0920ba4f3353e2f011031ca701d247",\n  "cumulativePayout": "179160",\n  "beneficiary": "0x21b26864067deb88e2d5cdca512167815f2910d3",\n  "transactionHash": "0xba7b500e21fc0dc0d7163c13bb5fea235d4eb769d342e9c007f51ab8512a9a82",\n  "result": {\n    "recipient": "0x312fe7fde9e0768337c9b3e3462189ea6f9f9066",\n    "lastPayout": "179160",\n    "bounced": false\n  }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Success, we earned our first xBZZ! \ud83d\udc1d"}),"\n",(0,a.jsx)(n.p,{children:"Now we have earned tokens, to withdraw our xBZZ from the chequebook contract back into our node's own wallet, we simply POST a request to the chequebook withdraw endpoint."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -XPOST http://localhost:1635/chequebook/withdraw\\?amount\\=1000 | jq\n"})}),"\n",(0,a.jsx)(n.p,{children:"And conversely, if we have used more services than we have provided, we may deposit extra xBZZ into the chequebook contract by sending a POST request to the deposit endpoint."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -XPOST http://localhost:1635/chequebook/deposit\\?amount\\=1000 | jq\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "transactionHash": "0xedc80ebc89e6d719e617a50c6900c3dd5dc2f283e1b8c447b9065d7c8280484a"\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You may then use ",(0,a.jsx)(n.a,{href:"https://blockscout.com/xdai/mainnet",children:"Blockscout"})," to\ntrack your transaction and make sure it completed successfully."]}),"\n",(0,a.jsx)(n.h2,{id:"managing-uncashed-cheques",children:"Managing uncashed cheques"}),"\n",(0,a.jsx)(n.p,{children:"For the Bee process, the final step of earning xBZZ is cashing a\ncheque. It is worth noting that a cheque is not yet actual xBZZ. In\nBee, a cheque, just like a real cheque, is a promise to hand over\nmoney upon request. In real life, you would present the cheque to a\nbank. In swarm life, we present the cheque to a smart-contract."}),"\n",(0,a.jsx)(n.p,{children:"Holding on to a swap-cheque is risky; it is possible that the owner of\nthe chequebook has issued cheques worth more xBZZ than is contained in\ntheir chequebook contract. For this reason, it is important to cash\nout your cheques every so often."}),"\n",(0,a.jsxs)(n.p,{children:["With the set of API endpoints, as offered by Bee, it is possible to\ndevelop a script that fully manages the uncashed cheques for you. As\nan example, we offer you a ",(0,a.jsx)(n.a,{href:"https://gist.github.com/ralph-pichler/3b5ccd7a5c5cd0500e6428752b37e975#file-cashout-sh",children:"very basic\nscript"}),",\nwhere you can manually cash out all cheques with a worth above a\ncertain value. To use the script:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Download and save the script:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget -O cashout.sh https://gist.githubusercontent.com/ralph-pichler/3b5ccd7a5c5cd0500e6428752b37e975/raw/cashout.sh\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Make the file executable:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"chmod +x cashout.sh\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"List all uncashed cheques and cash out your cheques above a certain value:"}),"\n"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"List:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./cashout.sh\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"If running ./cashout.sh returns nothing, you currently have no uncashed cheques."})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Cashout all cheques:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./cashout.sh cashout-all\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Are you a Windows-user who is willing to help us? We are currently\nmissing a simple cashout script for Windows. Please see the\n",(0,a.jsx)(n.a,{href:"https://github.com/ethersphere/bee/issues/1092",children:"issue"}),"."]})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["You can find the officially deployed smart-contract by the Swarm team\nin the ",(0,a.jsx)(n.a,{href:"https://github.com/ethersphere/swap-swear-and-swindle",children:"swap-swear-and-swindle\nrepository"}),"."]})})]})}function l(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4552:(e,n,s)=>{s.d(n,{I:()=>c,M:()=>r});var a=s(11504);const t={},o=a.createContext(t);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);
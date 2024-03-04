"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[3152],{78512:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=r(17624),n=r(4552);const i={title:"Erasure Coding",id:"erasure-coding"},s=void 0,d={id:"develop/access-the-swarm/erasure-coding",title:"Erasure Coding",description:"Erasure coding is an advanced method for safeguarding data, offering robust protection against partial data loss. This technique involves dividing the original data into multiple fragments and generating extra parity fragments to introduce redundancy. A key advantage of erasure coding is its ability to recover the complete original data even if some fragments are lost. Additionally, it offers the flexibility to customize the level of data loss protection, making it a versatile and reliable choice for preserving data integrity on Swarm. For a more in depth dive into erasure coding on Swarm, see the erasure coding paper from the Swarm research team.",source:"@site/docs/develop/access-the-swarm/erasure-coding.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/erasure-coding",permalink:"/docs/develop/access-the-swarm/erasure-coding",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/erasure-coding.md",tags:[],version:"current",frontMatter:{title:"Erasure Coding",id:"erasure-coding"},sidebar:"develop",previous:{title:"Upload and Download",permalink:"/docs/develop/access-the-swarm/upload-and-download"},next:{title:"Direct upload",permalink:"/docs/develop/access-the-swarm/direct-upload"}},o={},c=[{value:"Uploading With Erasure Coding",id:"uploading-with-erasure-coding",level:3},{value:"Downloading Erasure Encoded Data",id:"downloading-erasure-encoded-data",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Erasure coding is an advanced method for safeguarding data, offering robust protection against partial data loss. This technique involves dividing the original data into multiple fragments and generating extra parity fragments to introduce redundancy. A key advantage of erasure coding is its ability to recover the complete original data even if some fragments are lost. Additionally, it offers the flexibility to customize the level of data loss protection, making it a versatile and reliable choice for preserving data integrity on Swarm. For a more in depth dive into erasure coding on Swarm, see the ",(0,a.jsx)(t.a,{href:"https://papers.ethswarm.org/p/erasure/",children:"erasure coding paper"})," from the Swarm research team."]}),"\n",(0,a.jsx)(t.h3,{id:"uploading-with-erasure-coding",children:"Uploading With Erasure Coding"}),"\n",(0,a.jsxs)(t.p,{children:["Erasure coding is available for the ",(0,a.jsx)(t.a,{href:"/api/#tag/Bytes",children:(0,a.jsx)(t.code,{children:"/bytes"})})," and ",(0,a.jsx)(t.a,{href:"/api/#tag/BZZ",children:(0,a.jsx)(t.code,{children:"/bzz"})})," endpoints, however it is not available for the ",(0,a.jsx)(t.a,{href:"/api/#tag/Chunk",children:(0,a.jsx)(t.code,{children:"/chunks"})})," endpoint which deals with single chunks. Since erasure coding relies on splitting data into chunks and the chunk is the smallest unit of data within Swarm which cannot be further subdivided, erasure coding is not applicable for the ",(0,a.jsx)(t.code,{children:"/chunks"})," endpoint which deals with single chunks."]}),"\n",(0,a.jsxs)(t.p,{children:["To upload data to Swarm using erasure coding, the ",(0,a.jsx)(t.code,{children:"swarm-redundancy-level: <integer>"})," header is used:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'    curl \\\n        -X POST http://localhost:1633/bzz?name=test.txt \\\n        -H "swarm-redundancy-level: 4" \\\n        -H "swarm-postage-batch-id: 27d1bbef6c01e266d3130c01c9be60fd76b4a69d6f8ea6291548e1644bcf9001" \\\n        -H "Content-Type: text/plain" \n\n    {"reference":"c02e7d943fbc0e753540f377853b7181227a83e773870847765143681511c97d"}\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The accepted values for the ",(0,a.jsx)(t.code,{children:"swarm-redundancy-level"})," header range from the default of 0 up to 4. Each level corresponds to a different level of data protection, with erasure coding turned off at 0, and at its maximum at 4. Each increasing level provides increasing amount of data redundancy offering greater protection against data loss. Each level has been formulated to guarantee against a certain percentage of chunk retrieval errors, shown in the table below. As long as the error rate is below the expected chunk retrieval rate for the given level, there is a less than 1 in a million chance of failure to retrieve the source data."]}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Redundancy Level"}),(0,a.jsx)(t.th,{children:"Pseudonym"}),(0,a.jsx)(t.th,{children:"Expected Chunk Retrieval Error Rate"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"0"}),(0,a.jsx)(t.td,{children:"None"}),(0,a.jsx)(t.td,{children:"0%"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"1"}),(0,a.jsx)(t.td,{children:"Medium"}),(0,a.jsx)(t.td,{children:"1%"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"2"}),(0,a.jsx)(t.td,{children:"Strong"}),(0,a.jsx)(t.td,{children:"5%"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"3"}),(0,a.jsx)(t.td,{children:"Insane"}),(0,a.jsx)(t.td,{children:"10%"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"4"}),(0,a.jsx)(t.td,{children:"Paranoid"}),(0,a.jsx)(t.td,{children:"50%"})]})]})]}),"\n",(0,a.jsx)(t.p,{children:"Do take note that any level of erasure encoding will increase the cost of uploads, as with additional parity chunks, there is a greater total number of chunks which must be stamped, and as the number of additional parity chunks increase with the redundancy level, so too does the additional cost."}),"\n",(0,a.jsx)(t.h3,{id:"downloading-erasure-encoded-data",children:"Downloading Erasure Encoded Data"}),"\n",(0,a.jsxs)(t.p,{children:["When downloading erasure encoded data, there are three related headers which may be used\u2014",(0,a.jsx)(t.code,{children:"swarm-redundancy-strategy"}),", ",(0,a.jsx)(t.code,{children:"swarm-redundancy-fallback-mode: <integer>"}),", and ",(0,a.jsx)(t.code,{children:"swarm-chunk-retrieval-timeout"}),"."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"swarm-redundancy-strategy"}),":  This header allows you to set the retrieval strategy for fetching chunks. The accepted values range from 0 to 3. Each number corresponds to a different chunk retrieval strategy. The numbers stand for the NONE, DATA, PROX and RACE strategies respectively which are described in greater detail in ",(0,a.jsx)(t.a,{href:"/api/#tag/BZZ",children:"the API reference"})," (also see ",(0,a.jsx)(t.a,{href:"https://papers.ethswarm.org/p/erasure/",children:"the erasure code paper"})," for even more in-depth descriptions).  With each increasing level, there will be a potentially greater bandwidth cost."]}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"Strategies explained:"}),(0,a.jsxs)(t.ol,{start:"0",children:["\n",(0,a.jsx)(t.li,{children:"NONE (cheapest): This strategy is based on direct retrieval of data chunks without pre-fetching, with parity chunks ignored."}),"\n",(0,a.jsx)(t.li,{children:"DATA (cheap): The same as NONE, except that data chunks are pre-fetched."}),"\n",(0,a.jsxs)(t.li,{children:["PROX (cheap): For this strategy, the chunks closest (in Kademlia distance) to the node are retrieved first. ",(0,a.jsx)(t.em,{children:"(Not yet implemented.)"})]}),"\n",(0,a.jsx)(t.li,{children:"RACE (expensive): Initiates requests for all data and parity chunks and continues to retrieve chunks until enough chunks are retrieved that the original data can be reconstructed."}),"\n"]})]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"swarm-redundancy-fallback-mode: <boolean>"}),": Enables the fallback feature for the redundancy strategies so that if one of the retrieval strategies fails, it will fallback to the more intensive strategy until retrieval is successful or retrieval fails. Default is ",(0,a.jsx)(t.code,{children:"true"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"swarm-chunk-retrieval-timeout: <boolean>"}),": Allows you to specify the timeout time for chunk retrieval with a default value of 30 seconds. ",(0,a.jsx)(t.em,{children:"(This is primarily used by the Bee development team for testing and it's recommended that Bee users do not need to use this option.)"})]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"An example download request may look something like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'    curl -OJL \\\n    -H "swarm-redundancy-strategy: 3" \\\n    -H "swarm-redundancy-fallback-mode: true" \\\n     http://localhost:1633/bzz/c02e7d943fbc0e753540f377853b7181227a83e773870847765143681511c97d/\n\n       % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n  0     0    0     0    0     0      0      0 --:--:-- --:--:-- --:--:--     0\n'})}),"\n",(0,a.jsx)(t.p,{children:"For this request, the redundancy strategy is set to 3 (RACE), which means that it will initiate a request for all data and parity chunks and continue to retrieve chunks until enough have been retrieved to reconstruct the source data. This is in contrast with the default strategy of NONE where only the data chunks will be retrieved without any parity chunks which can be used to reconstruct the source data if some original data chunks are lost."})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},4552:(e,t,r)=>{r.d(t,{I:()=>d,M:()=>s});var a=r(11504);const n={},i=a.createContext(n);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);
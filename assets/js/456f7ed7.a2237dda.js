"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[556],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=o.createContext({}),d=function(e){var t=o.useContext(h),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(h.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,h=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=d(n),p=r,f=c["".concat(h,".").concat(p)]||c[p]||u[p]||a;return n?o.createElement(f,s(s({ref:t},l),{},{components:n})):o.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var h in t)hasOwnProperty.call(t,h)&&(i[h]=t[h]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return h},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],i={title:"DISC",id:"disc"},h=void 0,d={unversionedId:"learn/technology/disc",id:"learn/technology/disc",title:"DISC",description:"DISC (Distributed Immutable Storage of Chunks) is a storage solution developed by Swarm based on a modified implementation of a Kademlia DHT which has been specialized for data storage. Swarm's implementation of a DHT differs significantly in that it stores the content in the DHT directly, rather than just storing a list of seeders who are able to serve the content. This approach allows for much faster and more efficient retrieval of data.",source:"@site/docs/learn/technology/DISC.md",sourceDirName:"learn/technology",slug:"/learn/technology/disc",permalink:"/docs/learn/technology/disc",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/learn/technology/DISC.md",tags:[],version:"current",frontMatter:{title:"DISC",id:"disc"},sidebar:"learn",previous:{title:"What is Swarm?",permalink:"/docs/learn/technology/what-is-swarm"},next:{title:"Incentives",permalink:"/docs/learn/technology/incentives"}},l={},c=[{value:"Kademlia Topology and Routing",id:"kademlia-topology-and-routing",level:3},{value:"Neighborhoods",id:"neighborhoods",level:3},{value:"Chunks",id:"chunks",level:3},{value:"Content-Addressed Chunks and Single-Owner Chunks",id:"content-addressed-chunks-and-single-owner-chunks",level:3},{value:"Push-Sync, Pull-Sync, and Retrieval Protocols",id:"push-sync-pull-sync-and-retrieval-protocols",level:3}],u={toc:c},p="wrapper";function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"DISC (Distributed Immutable Storage of Chunks) is a storage solution developed by Swarm based on a modified implementation of a ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/glossary#kademlia"},"Kademlia DHT")," which has been specialized for data storage. Swarm's implementation of a DHT differs significantly in that it stores the content in the DHT directly, rather than just storing a list of seeders who are able to serve the content. This approach allows for much faster and more efficient retrieval of data."),(0,a.kt)("h3",{id:"kademlia-topology-and-routing"},"Kademlia Topology and Routing"),(0,a.kt)("p",null,"Each node within Swarm connects to a certain number of its peers. When a chunk is first inserted into the network, the uploading node will send it to the peer which is closest (as measured by ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/glossary#proximity-order-po"},"proximity order"),", which is based on a measure of ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/glossary#kademlia-distance"},"Kademlia distance"),") to the destination of the chunk, and then the recipient node will then forward the chunk on to its peer which is closest to the destination of the chunk, and so on until the chunk arrives at its destination. "),(0,a.kt)("p",null,'One of the advantages of using Kademlia as a model for network topology is that both the number of forwarding "hops" required to to route a chunk to its destination and the number of peer connections required to maintain Kademlia topology are logarithmic to the size of the network (a minimum of two connections is required in order to maintain Kademlia topology in case of network churn - nodes dropping in and out of the network). This makes Swarm a highly scalable system which is efficient even at very large scales. '),(0,a.kt)("h3",{id:"neighborhoods"},"Neighborhoods"),(0,a.kt)("p",null,"Neighborhoods are groups of nodes which are responsible for sharing the same chunks. The chunks which each neighborhood is responsible for storing is defined by the proximity order of the nodes and the chunks. In other words, each node is responsible for storing chunks with which their overlay addresses share a number of prefix bits up to a certain proximity order depth, and together with other nodes which share the same prefix bits, make up neighborhoods which share the responsibility for storing the same chunks. "),(0,a.kt)("h3",{id:"chunks"},"Chunks"),(0,a.kt)("p",null,"In the DISC model, chunks are the canonical unit of data. When a file is uploaded to Swarm, it gets broken down into 4kb pieces with attached metadata. The pieces then get distributed amongst nodes in the Swarm network based on their ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/glossary#overlay"},"overlay addresses"),". There are two fundamental chunk types: content-addressed chunks and single-owner chunks. "),(0,a.kt)("h3",{id:"content-addressed-chunks-and-single-owner-chunks"},"Content-Addressed Chunks and Single-Owner Chunks"),(0,a.kt)("p",null,"Content-addressed chunks are chunks whose address is based on the hash digest of their data. Using a hash as the chunk address makes it possible to verify the integrity of chunk data. Swarm uses the BMT hash function based on a binary Merkle tree over small segments of the chunk data. A content-addressed chunk has an at most 4KB payload, and its address is calculated as the hash of the span (chunk metadata) and the Binary Merkle Tree hash of the payload."),(0,a.kt)("p",null,"For single-owner chunks on the other hand, the address is calculated as the hash of a unique id and the owner's overlay address. The content consists of an arbitrary data payload along with required headers. Unlike a content-addressed chunk, the contents of a single-owner chunk may be updated while the address remains unchanged. Single owner chunks form the basis for feeds, which are data structures that allow for mutable content with a static address."),(0,a.kt)("h3",{id:"push-sync-pull-sync-and-retrieval-protocols"},"Push-Sync, Pull-Sync, and Retrieval Protocols"),(0,a.kt)("p",null,"When a file is first uploaded to Swarm, it gets broken down by the uploading Bee node chunks which are then distributed amongst other Bee nodes in the Swarm network. Chunks get distributed to the target neighborhood by the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"push-sync"))," protocol. Once a chunk reaches its destination, it will then be duplicated and synced to other nodes in order to achieve data redundancy through the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"pull-sync"))," protocol. The pull-sync protocol operates continuously as nodes enter or exit the network \u2013 ensuring that data redundancy is always maintained. When a client node requests a file for download, its request gets forwarded by the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"retrieval-protocol"))," to all the nodes storing the relevant chunks, and then those chunks get returned to the requesting node and the file gets reconstructed from its constituent chunks."))}f.isMDXComponent=!0}}]);
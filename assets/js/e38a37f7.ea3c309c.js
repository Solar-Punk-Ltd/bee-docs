"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[2988],{19040:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var t=n(17624),s=n(4552),r=n(38888),o=n(87768);const l={title:"Upload and Download",id:"upload-and-download"},i=void 0,d={id:"develop/access-the-swarm/upload-and-download",title:"Upload and Download",description:"When you upload your files to the Swarm, they are split into 4kb",source:"@site/docs/develop/access-the-swarm/upload-and-download.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/upload-and-download",permalink:"/docs/develop/access-the-swarm/upload-and-download",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/upload-and-download.md",tags:[],version:"current",frontMatter:{title:"Upload and Download",id:"upload-and-download"},sidebar:"develop",previous:{title:"Buy a Batch of Stamps",permalink:"/docs/develop/access-the-swarm/buy-a-stamp-batch"},next:{title:"Erasure Coding",permalink:"/docs/develop/access-the-swarm/erasure-coding"}},c={},h=[{value:"Uploads and Download Endpoints Overview",id:"uploads-and-download-endpoints-overview",level:2},{value:"Upload a File",id:"upload-a-file",level:2},{value:"Purchasing Your Batch of Stamps",id:"purchasing-your-batch-of-stamps",level:2},{value:"Using Stamps to Upload a File",id:"using-stamps-to-upload-a-file",level:2},{value:"API",id:"api",level:4},{value:"Swarm CLI",id:"swarm-cli",level:4},{value:"Download a File",id:"download-a-file",level:2},{value:"API",id:"api-1",level:4},{value:"Swarm CLI",id:"swarm-cli-1",level:4},{value:"Upload a Directory",id:"upload-a-directory",level:2},{value:"Upload the Directory Containing Your Website",id:"upload-the-directory-containing-your-website",level:3},{value:"Public Gateways",id:"public-gateways",level:2},{value:"Deferred and Direct Uploads",id:"deferred-and-direct-uploads",level:2}];function u(e){const a={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.p,{children:["When you upload your files to the Swarm, they are split into 4kb\n",(0,t.jsx)(a.em,{children:"chunks"})," and then distributed to nodes in the network that are\nresponsible for storing and serving these parts of your content.\nTo learn more about how Swarm's decentralized storage solution works,\ncheck out the ",(0,t.jsx)(a.a,{href:"/docs/learn/technology/what-is-swarm",children:'"Learn" section'}),"."]}),"\n",(0,t.jsxs)(a.p,{children:["In order for you to be able to upload any data to the network,\nyou must first purchase ",(0,t.jsx)(a.a,{href:"/docs/learn/technology/contracts/postage-stamp",children:"postage stamps"}),"\nand then use those stamps to upload your data. Keep on reading\nbelow to learn how."]}),"\n",(0,t.jsx)(a.h2,{id:"uploads-and-download-endpoints-overview",children:"Uploads and Download Endpoints Overview"}),"\n",(0,t.jsx)(a.p,{children:"There are three endpoints which can be used for uploading and downloading data from Swarm, and each endpoint has different usage."}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"/api/#tag/Bytes",children:(0,t.jsx)(a.code,{children:"/bytes"})})," - Used for uploading raw data, lacks convenience features present in the ",(0,t.jsx)(a.code,{children:"/bzz"})," endpoint but allows for greater customization for advanced use cases."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"/api/#tag/BZZ",children:(0,t.jsx)(a.code,{children:"/bzz"})})," - Used for general download and uploads of files or collections of files."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.a,{href:"/api/#tag/Chunk",children:(0,t.jsx)(a.code,{children:"/chunks"})})," - Used for downloading and uploading individual chunks, and also for uploading streams of chunks."]}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["Generally speaking, the ",(0,t.jsx)(a.code,{children:"/bzz"})," endpoint is appropriate for general common use cases such as uploading websites, sharing files, etc., while the ",(0,t.jsx)(a.code,{children:"/chunks"})," and ",(0,t.jsx)(a.code,{children:"bytes"})," endpoints allow for more complex uses cases. In this guide, we focus on the usage of the ",(0,t.jsx)(a.code,{children:"/bzz"})," endpoint."]}),"\n",(0,t.jsx)(a.h2,{id:"upload-a-file",children:"Upload a File"}),"\n",(0,t.jsx)(a.p,{children:"To upload data to the swarm, you must perform the following steps:"}),"\n",(0,t.jsxs)(a.ol,{children:["\n",(0,t.jsx)(a.li,{children:"Fund your node's wallet with xBZZ."}),"\n",(0,t.jsxs)(a.li,{children:["Purchase a ",(0,t.jsx)(a.em,{children:"batch"})," of stamps with your xBZZ."]}),"\n",(0,t.jsx)(a.li,{children:"Wait for the batch to propagate across the network."}),"\n",(0,t.jsxs)(a.li,{children:["Upload your content, specifying the ",(0,t.jsx)(a.em,{children:"batch id"})," so that Bee can attach stamps to your chunks."]}),"\n",(0,t.jsx)(a.li,{children:"Download your content using your content's hash."}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"purchasing-your-batch-of-stamps",children:"Purchasing Your Batch of Stamps"}),"\n",(0,t.jsxs)(a.p,{children:["In order to upload your data to swarm, you must agree to burn (spend)\nsome of your xBZZ to signify to storer and fowarder nodes that this\ncontent is valued. Before you proceed to the next step, you must buy\nstamps! See this guide on how to ",(0,t.jsx)(a.a,{href:"/docs/develop/access-the-swarm/buy-a-stamp-batch",children:"purchase an appropriate batch of stamps"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"using-stamps-to-upload-a-file",children:"Using Stamps to Upload a File"}),"\n",(0,t.jsxs)(a.p,{children:["Once your Bee node is running, a HTTP API is enabled for you to interact with. The command line utility ",(0,t.jsx)(a.a,{href:"https://ec.haxx.se/http/http-multipart",children:"curl"})," is a great way to interact with a Bee node's API. Swarm CLI alternative commands are also included as a more user-friendly way of interacting with your Bee node's API."]}),"\n",(0,t.jsxs)(r.c,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Swarm CLI",value:"swarm-cli"}],children:[(0,t.jsxs)(o.c,{value:"api",children:[(0,t.jsx)(a.h4,{id:"api",children:"API"}),(0,t.jsx)(a.p,{children:"First, let's check to see if the API is running as expected..."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl http://localhost:1633\n"})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{children:"Ethereum Swarm Bee\n"})}),(0,t.jsxs)(a.p,{children:["Once running, a file can be uploaded by making an HTTP POST request to the ",(0,t.jsx)(a.code,{children:"bzz"})," endpoint of the Bee API."]}),(0,t.jsxs)(a.p,{children:["Here, you must specify your ",(0,t.jsx)(a.em,{children:"Batch ID"})," in the ",(0,t.jsx)(a.code,{children:"Swarm-Postage-Batch-Id"})," header, the file name in the ",(0,t.jsx)(a.code,{children:"name"})," query parameter, and also pass the appropriate mime type in the ",(0,t.jsx)(a.code,{children:"Content-Type"})," header."]}),(0,t.jsxs)(a.p,{children:["You may also wish to employ the erasure coding feature to add greater protection for your data, see ",(0,t.jsx)(a.a,{href:"/docs/develop/access-the-swarm/erasure-coding",children:"erasure coding page"})," for more details on its usage."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:' curl -X POST http://localhost:1633/bzz?name=test.txt -H "swarm-postage-batch-id: 6544bebff0fcb7633e510e43efe2944aebbc2c5a556f8d27e00fba8a849a29a1" -H "Content-Type: text/plain"\n'})}),(0,t.jsx)(a.admonition,{type:"danger",children:(0,t.jsxs)(a.p,{children:["Data uploaded to Swarm is always public. In Swarm, sensitive files\nmust be ",(0,t.jsx)(a.a,{href:"/docs/develop/access-the-swarm/store-with-encryption",children:"encrypted"}),"\nbefore uploading to ensure their contents always remains private."]})}),(0,t.jsxs)(a.p,{children:["When succesful, a JSON formatted response will be returned, containing\na ",(0,t.jsx)(a.strong,{children:"swarm reference"})," or ",(0,t.jsx)(a.strong,{children:"hash"})," which is the ",(0,t.jsx)(a.em,{children:"address"})," of the\nuploaded file, for example:"]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "reference": "22cbb9cedca08ca8d50b0319a32016174ceb8fbaa452ca5f0a77b804109baa00"\n}\n'})}),(0,t.jsxs)(a.p,{children:["Keep this ",(0,t.jsx)(a.em,{children:"address"})," safe, as we'll use it to retrieve our content later on."]})]}),(0,t.jsxs)(o.c,{value:"swarm-cli",children:[(0,t.jsx)(a.h4,{id:"swarm-cli",children:"Swarm CLI"}),(0,t.jsxs)(a.p,{children:["We have a ",(0,t.jsx)(a.code,{children:"test.txt"})," file we wish to upload, let's check its contents."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cat test.txt\nThis is a test file\nIt will be used to test uploading and downloading from Swarm\n"})}),(0,t.jsx)(a.p,{children:"Check that our node is operating normally."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"swarm-cli status\n"})}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"Bee\nAPI: http://localhost:1633 [OK]\nDebug API: http://localhost:1635 [OK]\nVersion: 2.0.0-50fcec7b\nMode: full\n\nTopology\nConnected Peers: 175\nPopulation: 13614\nDepth: 9\n\nWallet\nxBZZ: 85.5638752768932272\nxDAI: 4.753393401487287091\n\nChequebook\nAvailable xBZZ: 0.0000000000018\nTotal xBZZ: 0.0000000000018\n\nStaking\nStaked xBZZ: 10\n\nRedistribution\nReward: 831386836533248000\nHas sufficient funds: true\nFully synced: true\nFrozen: false\nLast selected round: 202266\nLast played round: 202266\nLast won round: 186776\nMinimum gas funds: 101250000000000000\n"})}),(0,t.jsx)(a.p,{children:"List our stamps."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"swarm-cli stamp list\n"})}),(0,t.jsx)(a.p,{children:"Copy the ID of the stamp we wish to use."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"Stamp ID: daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa4ea660de66aa62db\nUsage: 7%\nRemaining Capacity: 7.50 GB\nTTL: 91 days 1 hour 45 minutes 28 seconds\nExpires: 2024-02-01\n"})}),(0,t.jsx)(a.p,{children:"Use the stamp ID to upload our file."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"swarm-cli upload test.txt --stamp daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa4ea660de66aa62db\n"})}),(0,t.jsx)(a.p,{children:"If successful, we will receive the hash of the uploaded file and the URL where it is reachable."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"Swarm hash: 1ffd2b67c8f34596a0b8375be29423c2d47e7995fcac8dd83fbd34e3d839b5a2\nURL: http://localhost:1633/bzz/1ffd2b67c8f34596a0b8375be29423c2d47e7995fcac8dd83fbd34e3d839b5a2/\nStamp ID: daa8c5b3\nUsage: 7%\nRemaining Capacity: 7.50 GB \n"})}),(0,t.jsx)(a.p,{children:"Let's check that the file is downloadable."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"swarm-cli download 1ffd2b67c8f34596a0b8375be29423c2d47e7995fcac8dd83fbd34e3d839b5a2\ntest.txt OK\n"})}),(0,t.jsx)(a.p,{children:"And let's confirm that the contents of the file are correct."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cat test.txt\nThis is a test file\nIt will be used to test uploading and downloading from Swarm\n"})})]})]}),"\n",(0,t.jsxs)(a.p,{children:["In Swarm, every piece of data has a unique ",(0,t.jsx)(a.em,{children:"address"})," which is a unique and reproducible cryptographic hash digest. If you upload the same file twice, you will always receive the same hash. This makes working with data in Swarm super secure!"]}),"\n",(0,t.jsxs)(a.admonition,{type:"info",children:[(0,t.jsxs)(a.p,{children:["If you are uploading a large file it is useful to track the status of your upload as it is processed into the network. To improve the user experience, learn how to ",(0,t.jsx)(a.a,{href:"/docs/develop/access-the-swarm/syncing",children:"follow the status of your upload"}),"."]}),(0,t.jsxs)(a.p,{children:["Once your file has been ",(0,t.jsx)(a.strong,{children:"completely synced with the network"}),", you will be able to turn off your computer and other nodes will take over to serve the data for you!"]})]}),"\n",(0,t.jsx)(a.h2,{id:"download-a-file",children:"Download a File"}),"\n",(0,t.jsx)(a.p,{children:"Once your file is uploaded to Swarm it can be easily downloaded."}),"\n",(0,t.jsxs)(r.c,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Swarm CLI",value:"swarm-cli"}],children:[(0,t.jsxs)(o.c,{value:"api",children:[(0,t.jsx)(a.h4,{id:"api-1",children:"API"}),(0,t.jsx)(a.p,{children:"Uploaded files can be retrieved with a simple HTTP GET request."}),(0,t.jsxs)(a.p,{children:["Substitute the ",(0,t.jsx)(a.em,{children:"hash"})," in the last part of the URL with the reference\nto your own data."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"curl -OJL http://localhost:1633/bzz/c02e7d943fbc0e753540f377853b7181227a83e773870847765143681511c97d/\n"})}),(0,t.jsx)(a.p,{children:"You may even simply navigate to the URL in your browser:"}),(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"http://localhost:1633/bzz/22cbb9cedca08ca8d50b0319a32016174ceb8fbaa452ca5f0a77b804109baa00",children:"http://localhost:1633/bzz/22cb...aa00"})})]}),(0,t.jsxs)(o.c,{value:"swarm-cli",children:[(0,t.jsx)(a.h4,{id:"swarm-cli-1",children:"Swarm CLI"}),(0,t.jsxs)(a.p,{children:["Simply use the ",(0,t.jsx)(a.code,{children:"swarm-cli download"})," command followed by the hash of the file you wish to download."]}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"swarm-cli download 1ffd2b67c8f34596a0b8375be29423c2d47e7995fcac8dd83fbd34e3d839b5a2\ntest.txt OK\n"})}),(0,t.jsx)(a.p,{children:"And let's print out the file contents to confirm it was downloaded properly."}),(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cat test.txt\nThis is a test file\nIt will be used to test uploading and downloading from Swarm\n"})})]})]}),"\n",(0,t.jsx)(a.h2,{id:"upload-a-directory",children:"Upload a Directory"}),"\n",(0,t.jsx)(a.p,{children:"It is possible to use Bee to upload directories of files all at once."}),"\n",(0,t.jsx)(a.admonition,{type:"tip",children:(0,t.jsxs)(a.p,{children:["Comfortable with nodeJS and JavaScript? Check out ",(0,t.jsx)(a.a,{href:"https://github.com/ethersphere/swarm-cli",children:"swarm-cli"}),", a command line tool you can use to easily interact with your Bee node!"]})}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["If an uploaded directory contains an ",(0,t.jsx)(a.code,{children:"index.html"})," file, when you navigate to the directory in a web browser it will automatically be served to users from our ",(0,t.jsx)(a.a,{href:"https://gateway.ethswarm.org",children:"Swarm gateways"})," as if it were a website hosted by a normal web server. Use this feature to host your unstoppable website on Swarm!"]})}),"\n",(0,t.jsxs)(a.p,{children:["This feature makes use of the ",(0,t.jsx)(a.a,{href:"https://www.gnu.org/software/tar/",children:"tar"})," command line utility to package the directory into a single file that can then be uploaded to the Bee API for processing and distributed into the swarm for later retrieval."]}),"\n",(0,t.jsx)(a.admonition,{type:"caution",children:(0,t.jsxs)(a.p,{children:["GZIP compression is not supported in the current version of Bee, so make sure not to use the ",(0,t.jsx)(a.code,{children:"-z"})," flag when using the ",(0,t.jsx)(a.code,{children:"tar"})," command!"]})}),"\n",(0,t.jsx)(a.h3,{id:"upload-the-directory-containing-your-website",children:"Upload the Directory Containing Your Website"}),"\n",(0,t.jsxs)(a.p,{children:["First, use the ",(0,t.jsx)(a.code,{children:"tar"})," command line utility to create an archive containing all the files of your directory. If uploading a website, we must take care to ensure that the ",(0,t.jsx)(a.code,{children:"index.html"})," file is at the root of the directory tree."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"tree my_website\n>\nmy_website\n\u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2514\u2500\u2500 style.css\n\u251c\u2500\u2500 index.html\n\u2514\u2500\u2500 error.html\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Use the following command to ensure that the ",(0,t.jsx)(a.code,{children:"tar"})," package maintains the correct directory structure:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:"cd my_website\ntar -cf ../my_website.tar .\ncd ..\n"})}),"\n",(0,t.jsxs)(a.p,{children:["Next, simply POST the ",(0,t.jsx)(a.code,{children:"tar"})," file as binary data to Bee's ",(0,t.jsx)(a.code,{children:"dir"})," endpoint, taking care to include the header ",(0,t.jsx)(a.code,{children:"Content Type: application/x-tar"}),"."]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["In order to upload your data to swarm, you must agree to burn some of your xBZZ to signify to storer and fowarder nodes that the content is important. Before you progress to the next step, you must buy stamps! See this guide on how to ",(0,t.jsx)(a.a,{href:"/docs/develop/access-the-swarm/buy-a-stamp-batch",children:"purchase an appropriate batch of stamps"}),"."]})}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'curl \\\n\t-X POST \\\n\t-H "Content-Type: application/x-tar" \\\n\t-H "Swarm-Index-Document: index.html" \\\n\t-H "Swarm-Error-Document: error.html" \\\n\t-H "Swarm-Collection: true" \\\n\t-H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" \\\n\t--data-binary @my_website.tar http://localhost:1633/bzz\n'})}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["For instances where a single page app has a JavaScript router that handles url queries itself, simply pass ",(0,t.jsx)(a.code,{children:"index.html"})," as the error document. Bee will pass over control to the JavaScript served by the ",(0,t.jsx)(a.code,{children:"index.html"})," file in the circumstance that a path does not yield a file from the manifest."]})}),"\n",(0,t.jsx)(a.p,{children:"When the upload is successful, Bee will return a JSON document containing the Swarm Reference."}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-json",children:'{\n  "reference": "b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b"\n}\n'})}),"\n",(0,t.jsxs)(a.p,{children:["Now, simply navigate your browser to view the reference using the ",(0,t.jsx)(a.code,{children:"bzz"})," endpoint and your website will be served!"]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"http://localhost:1633/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/",children:"http://localhost:1633/bzz/b25c89a...214917b/"})}),"\n",(0,t.jsx)(a.p,{children:"Other files are served at their relative paths, e.g:"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"http://localhost:1633/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/assets/style.css",children:"http://localhost:1633/bzz/b25c89a...214917b/assets/style.css"})}),"\n",(0,t.jsxs)(a.p,{children:["Once your data has been ",(0,t.jsx)(a.a,{href:"/docs/develop/access-the-swarm/syncing",children:"fully processed into the network"}),", you will then be able to retrieve it from any Bee node."]}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://gateway.ethswarm.org/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/",children:"https://gateway.ethswarm.org/bzz/b25c89a...214917b/index.html"})}),"\n",(0,t.jsxs)(a.p,{children:["If you are not able to download your file from a different Bee node, you may be experiencing connection issues, see ",(0,t.jsx)(a.a,{href:"/docs/bee/installation/connectivity",children:"troubleshooting connectivity"})," for assistance."]}),"\n",(0,t.jsx)(a.h2,{id:"public-gateways",children:"Public Gateways"}),"\n",(0,t.jsx)(a.p,{children:"To share files with someone who isn't running a Bee node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!"}),"\n",(0,t.jsx)(a.p,{children:(0,t.jsx)(a.a,{href:"https://download.gateway.ethswarm.org/bzz/22cbb9cedca08ca8d50b0319a32016174ceb8fbaa452ca5f0a77b804109baa00/",children:"https://download.gateway.ethswarm.org/bzz/22cb...aa00/"})}),"\n",(0,t.jsx)(a.h2,{id:"deferred-and-direct-uploads",children:"Deferred and Direct Uploads"}),"\n",(0,t.jsxs)(a.p,{children:["By default your bee instance will handle uploads in a ",(0,t.jsx)(a.em,{children:"deferred"})," manner, meaning that the data will be completely uploaded to your node locally before being then being uploaded to the Swarm network."]}),"\n",(0,t.jsx)(a.p,{children:"In contrast, for a direct upload, the data will be completely uploaded to the Swarm network directly."}),"\n",(0,t.jsxs)(a.p,{children:["If you want to upload directly to the network you have to set the ",(0,t.jsx)(a.code,{children:"swarm-deferred-upload"}),' header value to "false" in your request.']}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-bash",children:'curl \\\n\t-X POST \\\n\t-H "swarm-deferred-upload: false" \\\n\t-H "Content-Type: application/x-tar" \\\n\t-H "swarm-postage-batch-id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" \\\n\t--data-binary @my_data.tar http://localhost:1633/bzz\n'})})]})}function p(e={}){const{wrapper:a}={...(0,s.M)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},87768:(e,a,n)=>{n.d(a,{c:()=>o});n(11504);var t=n(65456);const s={tabItem:"tabItem_Ymn6"};var r=n(17624);function o(e){let{children:a,hidden:n,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.c)(s.tabItem,o),hidden:n,children:a})}},38888:(e,a,n)=>{n.d(a,{c:()=>v});var t=n(11504),s=n(65456),r=n(53943),o=n(55592),l=n(95288),i=n(10632),d=n(27128),c=n(21148);function h(e){var a,n;return null!=(a=null==(n=t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?a:[]}function u(e){const{values:a,children:n}=e;return(0,t.useMemo)((()=>{const e=null!=a?a:function(e){return h(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:s}}=e;return{value:a,label:n,attributes:t,default:s}}))}(n);return function(e){const a=(0,d.w)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,n])}function p(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:n}=e;const s=(0,o.Uz)(),r=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,i._M)(r),(0,t.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(s.location.search);a.set(r,e),s.replace({...s.location,search:a.toString()})}),[r,s])]}function b(e){const{defaultValue:a,queryString:n=!1,groupId:s}=e,r=u(e),[o,i]=(0,t.useState)((()=>function(e){var a;let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const s=null!=(a=t.find((e=>e.default)))?a:t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:r}))),[d,h]=f({queryString:n,groupId:s}),[b,m]=function(e){let{groupId:a}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(a),[s,r]=(0,c.IN)(n);return[s,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:s}),w=(()=>{const e=null!=d?d:b;return p({value:e,tabValues:r})?e:null})();(0,l.c)((()=>{w&&i(w)}),[w]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error("Can't select invalid tab value="+e);i(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=n(93664);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(17624);function y(e){let{className:a,block:n,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.MV)(),c=e=>{const a=e.currentTarget,n=i.indexOf(a),s=l[n].value;s!==t&&(d(a),o(s))},h=e=>{var a;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{var t;const a=i.indexOf(e.currentTarget)+1;n=null!=(t=i[a])?t:i[0];break}case"ArrowLeft":{var s;const a=i.indexOf(e.currentTarget)-1;n=null!=(s=i[a])?s:i[i.length-1];break}}null==(a=n)||a.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.c)("tabs",{"tabs--block":n},a),children:l.map((e=>{let{value:a,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===a?0:-1,"aria-selected":t===a,ref:e=>i.push(e),onKeyDown:h,onClick:c,...r,className:(0,s.c)("tabs__item",w.tabItem,null==r?void 0:r.className,{"tabs__item--active":t===a}),children:null!=n?n:a},a)}))})}function g(e){let{lazy:a,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==s})))})}function j(e){const a=b(e);return(0,x.jsxs)("div",{className:(0,s.c)("tabs-container",w.tabList),children:[(0,x.jsx)(y,{...e,...a}),(0,x.jsx)(g,{...e,...a})]})}function v(e){const a=(0,m.c)();return(0,x.jsx)(j,{...e,children:h(e.children)},String(a))}},4552:(e,a,n)=>{n.d(a,{I:()=>l,M:()=>o});var t=n(11504);const s={},r=t.createContext(s);function o(e){const a=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);
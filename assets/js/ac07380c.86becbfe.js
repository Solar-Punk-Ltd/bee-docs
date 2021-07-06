(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4434],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6375:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Bee Using Docker",id:"docker"},l={unversionedId:"installation/docker",id:"installation/docker",isDocsHomePage:!1,title:"Bee Using Docker",description:"Docker containers for Bee are hosted at Docker Hub for your convenience.",source:"@site/docs/installation/docker.md",sourceDirName:"installation",slug:"/installation/docker",permalink:"/docs/installation/docker",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/installation/docker.md",version:"current",frontMatter:{title:"Bee Using Docker",id:"docker"},sidebar:"Balls",previous:{title:"Hive",permalink:"/docs/installation/hive"},next:{title:"Bee Clef",permalink:"/docs/installation/bee-clef"}},c=[{value:"Quick Start",id:"quick-start",children:[]},{value:"Versions",id:"versions",children:[]},{value:"Docker Compose",id:"docker-compose",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Docker containers for Bee are hosted at ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/ethersphere/bee"},"Docker Hub")," for your convenience. "),(0,o.kt)("p",null,"If running a Bee ",(0,o.kt)("em",{parentName:"p"},"full node"),", it is recommended that you make use of\nEthereum's external signer, ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/bee-clef"},"Clef"),". Skip\nahead if you are comfortable with ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," basics for instructions on\nhow to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/docker#docker-compose"},"docker-compose"),"\nto easily set up Bee with persistent storage and integration with the\nBee Clef container."),(0,o.kt)("h3",{id:"quick-start"},"Quick Start"),(0,o.kt)("p",null,"Try Bee out by simply running the following command in your Terminal. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run\\\n  -p 1635:1635 \\\n  -p 1634:1634 \\\n  -p 1633:1633\\\n  --rm -it ethersphere/bee:stable\\\n  start \\\n    --welcome-message="Bzzzz bzzz bzz bzz. \ud83d\udc1d" \\\n    --swap-endpoint https://stake.getblock.io/mainnet/?api_key=copy-your-api-key-here \\\n    --debug-api-enable\n')),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If starting your node for the first time, you will need to deploy a chequebook contract. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/manual"},"Manual Installation")," for more info."))),(0,o.kt)("p",null,"To persist files, mount a local directory as follows and enter the\npassword used to encrypt your keyfiles. Note, ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," insists on\nabsolute paths when mounting volumes, so you must replace\n",(0,o.kt)("inlineCode",{parentName:"p"},"/path/to/.bee-docker")," with a valid path from your local filesystem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run\\\n  -v /path/to/.bee-docker:/home/bee/.bee\\\n  -p 1635:1635 \\\n  -p 1634:1634 \\\n  -p 1633:1633\\\n  --rm -it ethersphere/bee:stable\\\n  start \\\n    --welcome-message="Bzzzz bzzz bzz bzz. \ud83d\udc1d" \\\n    --swap-endpoint https://stake.getblock.io/mainnet/?api_key=your-api-key \\\n      --debug-api-enable\n')),(0,o.kt)("p",null,"Once you have generated your keys, leave Bee to run in the background..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'docker run\\\n  -d \n  -v /path/to/.bee-docker:/home/bee/.bee\\\n  -p 1635:1635 \\\n  -p 1634:1634 \\\n  -p 1633:1633\\\n  --rm -it ethersphere/bee:stable\\\n  start \\\n    --welcome-message="Bzzzz bzzz bzz bzz. \ud83d\udc1d" \\\n    --swap-endpoint https://stake.getblock.io/mainnet/?api_key=your-api-key \\\n      --debug-api-enable\n')),(0,o.kt)("h3",{id:"versions"},"Versions"),(0,o.kt)("p",null,"In order to avoid accidentally upgrading your Bee containers, or\ndeadlocks resulting from Docker caching solutions, it is recommended\nto use best practices and pin the specific version of Bee that you\nwant to run."),(0,o.kt)("h4",{id:"specific-versions"},"Specific Versions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ethersphere/bee:1.0.0\n")),(0,o.kt)("h4",{id:"using-tags"},"Using Tags"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull ethersphere/bee:beta\n")),(0,o.kt)("p",null,"You may use the tags ",(0,o.kt)("inlineCode",{parentName:"p"},"beta"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"latest"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"stable"),", or find out more\nat the ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/ethersphere/bee"},"Docker Hub repository"),"."),(0,o.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,o.kt)("p",null,"Configuration files for Bee and Bee Clef are provided to enable quick\nand easy installation of both programs with persistent storage and\nsecure secret management. To install Bee without Clef, simply omit the\nrelevant steps."),(0,o.kt)("h4",{id:"setup"},"Setup"),(0,o.kt)("p",null,"First, retrieve the current ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://raw.githubusercontent.com/ethersphere/bee/v1.0.0/packaging/docker/docker-compose.yml\n")),(0,o.kt)("p",null,"Next, create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file using the example file provided. This file will be responsible for storing configuration and secrets for our Bee and Bee Clef applications."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wget -q https://raw.githubusercontent.com/ethersphere/bee/v1.0.0/packaging/docker/env -O .env\n")),(0,o.kt)("p",null,"There are some important configuration parameters which must be set in order for our projects to work. To affect configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, we first remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"#")," at the beginning of the line and then change the value after ",(0,o.kt)("inlineCode",{parentName:"p"},"=")," to our desired config."),(0,o.kt)("p",null,"For Bee, amend the following parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BEE_SWAP_ENDPOINT=https://stake.getblock.io/mainnet/?api_key=your-api-key\nBEE_PASSWORD=my-password\n")),(0,o.kt)("p",null,"To enable Clef support on mainnet, we must also change the following params: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CLEF_CHAINID=100\n")),(0,o.kt)("p",null,"For testnet, use chain id ",(0,o.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"BEE_CLEF_SIGNER_ENABLE=true\nBEE_CLEF_SIGNER_ENDPOINT=http://clef-1:8550\n")),(0,o.kt)("p",null,"With the configuration settings complete, you can start your Bee and\nClef nodes by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"By specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"-d")," flag to ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose")," we run Bee and Bee Clef as a daemon."))),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Docker Compose will create a Docker Volume called ",(0,o.kt)("inlineCode",{parentName:"p"},"bee")," containing important key material. Make sure to ",(0,o.kt)("a",{parentName:"p",href:"/docs/working-with-bee/backups"},"backup")," the contents of your Docker volume!"))),(0,o.kt)("p",null,"To determine the Bee node's address to fund, we can check the logs for our Bee ",(0,o.kt)("em",{parentName:"p"},"container"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose logs -f bee-1\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'bee_1 | time="2020-12-15T18:43:14Z" level=warning msg="cannot continue until there is sufficient ETH (for Gas) and at least 1 BZZ available on 7a977fa660e2e93e1eba40030c6b8da68d01971e"\ntime="2020-12-15T18:43:14Z" level=warning msg="learn how to fund your node by visiting our docs at https://docs.ethswarm.org/docs/installation/fund-your-node"\n')),(0,o.kt)("p",null,"Once you have determined your Bee's Ethereum addresses,\n",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/fund-your-node"},"fund your node"),"."),(0,o.kt)("p",null,"After your transaction has been completed, your node should recognise that your wallet has been funded, and begin to deploy and fund your Bee chequebook!"),(0,o.kt)("p",null,"Once Bee has completed this procedure, you may query the Bee ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/api-reference"},"HTTP API")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:1633"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1633\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Ethereum Swarm Bee\n")),(0,o.kt)("p",null,"Once you start seeing messages in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose logs -f bee-1"),"\nlike:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"successfully connected to peer 7fa40ce124d69ecf14d6f7806faaf9df5d639d339a9d343aa7004373f5c46b8f (outbound)\n")),(0,o.kt)("p",null,"You're connected to the Swarm. Let's do a quick check to find out how\nmany peers we have using the ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," command line utility:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1635/peers\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"peers":[{"address":"339cf2ca75f154ffb8dd13de024c4a5c5b53827b8fd21f24bec05835e0cdc2e8"},{"address":"b4e5df012cfc281e74bb517fcf87fc2c07cd787929c332fc805f8124401fabae"} ]}\n\n')),(0,o.kt)("p",null,"If you see peers listed here - congratulations! You have joined the\nswarm! Welcome! \ud83d\udc1d"))}d.isMDXComponent=!0}}]);
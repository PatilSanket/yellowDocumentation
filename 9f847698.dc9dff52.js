(window.webpackJsonp=window.webpackJsonp||[]).push([[215],{292:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(411)),s={title:"Getting Started",description:"Getting started with Benthos"},c={unversionedId:"guides/getting_started",id:"guides/getting_started",isDocsHomePage:!1,title:"Getting Started",description:"Getting started with Benthos",source:"@site/docs/guides/getting_started.md",slug:"/guides/getting_started",permalink:"/docs/guides/getting_started",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/guides/getting_started.md",version:"current",sidebar:"docs",previous:{title:"Logger",permalink:"/docs/components/logger/about"},next:{title:"Bloblang",permalink:"/docs/guides/bloblang/about"}},i=[{value:"Install",id:"install",children:[{value:"Docker",id:"docker",children:[]},{value:"Homebrew",id:"homebrew",children:[]},{value:"Serverless",id:"serverless",children:[]}]},{value:"Run",id:"run",children:[]}],l={toc:i};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Woops! You fell for the marketing hype. Let's try and get through this together."),Object(r.b)("div",{style:{textAlign:"center"}},Object(r.b)("img",{style:{maxWidth:"300px"},src:"/img/teacher-blob.svg"})),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("p",null,"The easiest way to install Benthos is with this handy script:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"curl -Lsf https://sh.benthos.dev | bash\n")),Object(r.b)("p",null,"Or you can grab an archive containing Benthos from the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Jeffail/benthos/releases"}),"releases page"),"."),Object(r.b)("h3",{id:"docker"},"Docker"),Object(r.b)("p",null,"If you have docker installed you can pull the latest official Benthos image with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"docker pull jeffail/benthos\ndocker run --rm -v /path/to/your/config.yaml:/benthos.yaml jeffail/benthos\n")),Object(r.b)("h3",{id:"homebrew"},"Homebrew"),Object(r.b)("p",null,"On macOS, Benthos can be installed via Homebrew:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"brew install benthos\n")),Object(r.b)("h3",{id:"serverless"},"Serverless"),Object(r.b)("p",null,"For information about serverless deployments of Benthos check out the serverless section ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/serverless/about"}),"here"),"."),Object(r.b)("h2",{id:"run"},"Run"),Object(r.b)("p",null,"A Benthos stream pipeline is configured with a single ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/about"}),"config file"),", you can generate a fresh one with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"benthos create > config.yaml\n")),Object(r.b)("p",null,"The main sections that make up a config are ",Object(r.b)("inlineCode",{parentName:"p"},"input"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pipeline")," and ",Object(r.b)("inlineCode",{parentName:"p"},"output"),". When you generate a fresh config it'll simply pipe ",Object(r.b)("inlineCode",{parentName:"p"},"stdin")," to ",Object(r.b)("inlineCode",{parentName:"p"},"stdout")," like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"input:\n  type: stdin\n\npipeline:\n  processors: []\n\noutput:\n  type: stdout\n")),Object(r.b)("p",null,"Eventually we'll want to configure a more useful ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/inputs/about"}),"input")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/outputs/about"}),"output"),", but for now this is useful for quickly testing processors. You can execute this config with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"benthos -c ./config.yaml\n")),Object(r.b)("p",null,"Anything you write to stdin will get written unchanged to stdout, cool! Resist the temptation to play with this for hours, there's more stuff to try out."),Object(r.b)("p",null,"Next, let's add some processing steps in order to mutate messages. The most powerful one is the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/bloblang"}),Object(r.b)("inlineCode",{parentName:"a"},"bloblang")," processor")," which allows us to perform mappings, let's add a mapping to uppercase our messages:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"input:\n  type: stdin\n\npipeline:\n  processors:\n    - bloblang: root = content().uppercase()\n\noutput:\n  type: stdout\n")),Object(r.b)("p",null,"Now your messages should come out in all caps, how whacky! IT'S LIKE BENTHOS IS SHOUTING BACK AT YOU!"),Object(r.b)("p",null,"You can add as many ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/about"}),"processing steps")," as you like, and since processors are what make Benthos powerful they are worth experimenting with. Let's create a more advanced pipeline that works with JSON documents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'input:\n  type: stdin\n\npipeline:\n  processors:\n    - sleep:\n        duration: 500ms\n    - bloblang: |\n        root.doc = this\n        root.first_name = this.names.index(0).uppercase()\n        root.last_name = this.names.index(-1).hash("sha256").encode("base64")\n\noutput:\n  type: stdout\n')),Object(r.b)("p",null,"First, we sleep for 500 milliseconds just to keep the suspense going. Next, we restructure our input JSON document by nesting it within a field ",Object(r.b)("inlineCode",{parentName:"p"},"doc"),", we map the upper-cased first element of ",Object(r.b)("inlineCode",{parentName:"p"},"names")," to a new field ",Object(r.b)("inlineCode",{parentName:"p"},"first_name"),". Finally, we map the hashed and base64 encoded value of the last element of ",Object(r.b)("inlineCode",{parentName:"p"},"names")," to a new field ",Object(r.b)("inlineCode",{parentName:"p"},"last_name"),"."),Object(r.b)("p",null,"Try running that config with some sample documents:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'echo \'\n{"id":"1","names":["celine","dion"]}\n{"id":"2","names":["chad","robert","kroeger"]}\' | benthos -c ./config.yaml\n')),Object(r.b)("p",null,"You should see (amongst some logs):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'{"doc":{"id":"1","names":["celine","dion"]},"first_name":"CELINE","last_name":"1VvPgCW9sityz5XAMGdI2BTA7/44Wb3cANKxqhiCo50="}\n{"doc":{"id":"2","names":["chad","robert","kroeger"]},"first_name":"CHAD","last_name":"uXXg5wCKPjpyj/qbivPbD9H9CZ5DH/F0Q1Twytnt2hQ="}\n')),Object(r.b)("p",null,"How exciting! I don't know about you but I'm going to need to lie down for a while. Now that you are a Benthos expert might I suggest you peruse these sections to see if anything tickles your fancy?"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/components/inputs/about"}),"Inputs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/components/processors/about"}),"Processors")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/components/outputs/about"}),"Outputs")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/guides/monitoring"}),"Monitoring")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/cookbooks"}),"Cookbooks")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/configuration/about"}),"More about configuration"))))}b.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
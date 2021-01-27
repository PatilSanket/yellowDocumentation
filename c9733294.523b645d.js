(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{339:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(411)),o=n(415),u=n(416),i={title:"nats",type:"input",status:"stable",categories:["Services"]},s={unversionedId:"components/inputs/nats",id:"components/inputs/nats",isDocsHomePage:!1,title:"nats",description:"\x3c!--",source:"@site/docs/components/inputs/nats.md",slug:"/components/inputs/nats",permalink:"/docs/components/inputs/nats",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/inputs/nats.md",version:"current",sidebar:"docs",previous:{title:"nanomsg",permalink:"/docs/components/inputs/nanomsg"},next:{title:"nats_stream",permalink:"/docs/components/inputs/nats_stream"}},l=[{value:"Metadata",id:"metadata",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>urls</code>",id:"urls",children:[]},{value:"<code>queue</code>",id:"queue",children:[]},{value:"<code>subject</code>",id:"subject",children:[]},{value:"<code>prefetch_count</code>",id:"prefetch_count",children:[]}]}],b={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Subscribe to a NATS subject."),Object(c.b)(o.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(c.b)(u.a,{value:"common",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Common config fields, showing default values\ninput:\n  nats:\n    urls:\n      - nats://127.0.0.1:4222\n    queue: benthos_queue\n    subject: benthos_messages\n"))),Object(c.b)(u.a,{value:"advanced",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# All config fields, showing default values\ninput:\n  nats:\n    urls:\n      - nats://127.0.0.1:4222\n    queue: benthos_queue\n    subject: benthos_messages\n    prefetch_count: 32\n")))),Object(c.b)("h3",{id:"metadata"},"Metadata"),Object(c.b)("p",null,"This input adds the following metadata fields to each message:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"- nats_subject\n")),Object(c.b)("p",null,"You can access these metadata fields using\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/interpolation#metadata"}),"function interpolation"),"."),Object(c.b)("h2",{id:"fields"},"Fields"),Object(c.b)("h3",{id:"urls"},Object(c.b)("inlineCode",{parentName:"h3"},"urls")),Object(c.b)("p",null,"A list of URLs to connect to. If an item of the list contains commas it will be expanded into multiple URLs."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"array"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'["nats://127.0.0.1:4222"]'),"  "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nurls:\n  - nats://127.0.0.1:4222\n\nurls:\n  - nats://username:password@127.0.0.1:4222\n")),Object(c.b)("h3",{id:"queue"},Object(c.b)("inlineCode",{parentName:"h3"},"queue")),Object(c.b)("p",null,"The queue to consume from."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'"benthos_queue"'),"  "),Object(c.b)("h3",{id:"subject"},Object(c.b)("inlineCode",{parentName:"h3"},"subject")),Object(c.b)("p",null,"A subject to consume from."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'"benthos_messages"'),"  "),Object(c.b)("h3",{id:"prefetch_count"},Object(c.b)("inlineCode",{parentName:"h3"},"prefetch_count")),Object(c.b)("p",null,"The maximum number of messages to pull at a time."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"number"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},"32"),"  "))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||c;return n?r.a.createElement(d,u(u({ref:t},s),{},{components:n})):r.a.createElement(d,u({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(413),o=n(412),u=n(56),i=n.n(u),s=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,b=e.values,p=e.groupId,m=e.className,d=Object(c.a)(),f=d.tabGroupChoices,O=d.setTabGroupChoices,j=Object(a.useState)(u),v=j[0],h=j[1],y=a.Children.toArray(e.children);if(null!=p){var g=f[p];null!=g&&g!==v&&b.some((function(e){return e.value===g}))&&h(g)}var N=function(e){h(e),null!=p&&O(p,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);
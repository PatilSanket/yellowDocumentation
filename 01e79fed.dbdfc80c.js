(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(413),c=n(412),i=n(56),s=n.n(i),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(o.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(i),h=j[0],v=j[1],y=a.Children.toArray(e.children);if(null!=b){var g=f[b];null!=g&&g!==h&&p.some((function(e){return e.value===g}))&&v(g)}var N=function(e){v(e),null!=b&&O(b,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(411)),c=n(415),i=n(416),s={title:"socket",type:"input",status:"stable",categories:["Network"]},l={unversionedId:"components/inputs/socket",id:"components/inputs/socket",isDocsHomePage:!1,title:"socket",description:"\x3c!--",source:"@site/docs/components/inputs/socket.md",slug:"/components/inputs/socket",permalink:"/docs/components/inputs/socket",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/inputs/socket.md",version:"current",sidebar:"docs",previous:{title:"sequence",permalink:"/docs/components/inputs/sequence"},next:{title:"socket_server",permalink:"/docs/components/inputs/socket_server"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>network</code>",id:"network",children:[]},{value:"<code>address</code>",id:"address",children:[]},{value:"<code>multipart</code>",id:"multipart",children:[]},{value:"<code>max_buffer</code>",id:"max_buffer",children:[]},{value:"<code>delimiter</code>",id:"delimiter",children:[]}]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Connects to a (tcp/unix) socket and consumes a continuous stream of messages."),Object(o.b)(c.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"common",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Common config fields, showing default values\ninput:\n  socket:\n    network: unix\n    address: /tmp/benthos.sock\n"))),Object(o.b)(i.a,{value:"advanced",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\ninput:\n  socket:\n    network: unix\n    address: /tmp/benthos.sock\n    multipart: false\n    max_buffer: 1000000\n    delimiter: ""\n')))),Object(o.b)("p",null,"If multipart is set to false each line of data is read as a separate message. If\nmultipart is set to true each line is read as a message part, and an empty line\nindicates the end of a message."),Object(o.b)("p",null,"Messages consumed by this input can be processed in parallel, meaning a single\ninstance of this input can utilise any number of threads within a\n",Object(o.b)("inlineCode",{parentName:"p"},"pipeline")," section of a config."),Object(o.b)("p",null,"If the delimiter field is left empty then line feed (\\n) is used."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"network"},Object(o.b)("inlineCode",{parentName:"h3"},"network")),Object(o.b)("p",null,"A network type to assume (unix|tcp)."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'"unix"'),Object(o.b)("br",{parentName:"p"}),"\n","Options: ",Object(o.b)("inlineCode",{parentName:"p"},"unix"),", ",Object(o.b)("inlineCode",{parentName:"p"},"tcp"),"."),Object(o.b)("h3",{id:"address"},Object(o.b)("inlineCode",{parentName:"h3"},"address")),Object(o.b)("p",null,"The address to connect to."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'"/tmp/benthos.sock"'),"  "),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\naddress: /tmp/benthos.sock\n\naddress: 127.0.0.1:6000\n")),Object(o.b)("h3",{id:"multipart"},Object(o.b)("inlineCode",{parentName:"h3"},"multipart")),Object(o.b)("p",null,"Whether messages should be consumed as multiple parts. If so, each line is consumed as a message parts and the full message ends with an empty line."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"bool"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(o.b)("h3",{id:"max_buffer"},Object(o.b)("inlineCode",{parentName:"h3"},"max_buffer")),Object(o.b)("p",null,"The maximum message buffer size. Must exceed the largest message to be consumed."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"1000000"),"  "),Object(o.b)("h3",{id:"delimiter"},Object(o.b)("inlineCode",{parentName:"h3"},"delimiter")),Object(o.b)("p",null,"The delimiter to use to detect the end of each message. If left empty line breaks are used."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),"  "))}b.isMDXComponent=!0}}]);
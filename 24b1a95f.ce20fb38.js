(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{128:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(411)),c=(n(415),n(416),{title:"hdfs",type:"input",status:"stable",categories:["Services"]}),i={unversionedId:"components/inputs/hdfs",id:"components/inputs/hdfs",isDocsHomePage:!1,title:"hdfs",description:"\x3c!--",source:"@site/docs/components/inputs/hdfs.md",slug:"/components/inputs/hdfs",permalink:"/docs/components/inputs/hdfs",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/inputs/hdfs.md",version:"current",sidebar:"docs",previous:{title:"gcp_pubsub",permalink:"/docs/components/inputs/gcp_pubsub"},next:{title:"http_client",permalink:"/docs/components/inputs/http_client"}},s=[{value:"Metadata",id:"metadata",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>hosts</code>",id:"hosts",children:[]},{value:"<code>user</code>",id:"user",children:[]},{value:"<code>directory</code>",id:"directory",children:[]}]}],l={toc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Reads files from a HDFS directory, where each discrete file will be consumed as\na single message payload."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# Config fields, showing default values\ninput:\n  hdfs:\n    hosts:\n      - localhost:9000\n    user: benthos_hdfs\n    directory: ""\n')),Object(o.b)("h3",{id:"metadata"},"Metadata"),Object(o.b)("p",null,"This input adds the following metadata fields to each message:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"- hdfs_name\n- hdfs_path\n")),Object(o.b)("p",null,"You can access these metadata fields using\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/interpolation#metadata"}),"function interpolation"),"."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"hosts"},Object(o.b)("inlineCode",{parentName:"h3"},"hosts")),Object(o.b)("p",null,"A list of target host addresses to connect to."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"array"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'["localhost:9000"]'),"  "),Object(o.b)("h3",{id:"user"},Object(o.b)("inlineCode",{parentName:"h3"},"user")),Object(o.b)("p",null,"A user ID to connect as."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'"benthos_hdfs"'),"  "),Object(o.b)("h3",{id:"directory"},Object(o.b)("inlineCode",{parentName:"h3"},"directory")),Object(o.b)("p",null,"The directory to consume from."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),"  "))}u.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,i(i({ref:t},l),{},{components:n})):a.a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},413:function(e,t,n){"use strict";var r=n(0),a=n(414);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(413),c=n(412),i=n(56),s=n.n(i),l=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,d=e.groupId,b=e.className,f=Object(o.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,O=Object(r.useState)(i),j=O[0],y=O[1],v=r.Children.toArray(e.children);if(null!=d){var g=m[d];null!=g&&g!==j&&p.some((function(e){return e.value===g}))&&y(g)}var w=function(e){y(e),null!=d&&h(d,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},416:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);
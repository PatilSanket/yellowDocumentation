(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{377:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),c=(n(0),n(411)),o=n(415),i=n(416),l={title:"memory",type:"cache",status:"stable"},s={unversionedId:"components/caches/memory",id:"components/caches/memory",isDocsHomePage:!1,title:"memory",description:"\x3c!--",source:"@site/docs/components/caches/memory.md",slug:"/components/caches/memory",permalink:"/docs/components/caches/memory",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/caches/memory.md",version:"current",sidebar:"docs",previous:{title:"memcached",permalink:"/docs/components/caches/memcached"},next:{title:"multilevel",permalink:"/docs/components/caches/multilevel"}},u=[{value:"Fields",id:"fields",children:[{value:"<code>ttl</code>",id:"ttl",children:[]},{value:"<code>compaction_interval</code>",id:"compaction_interval",children:[]},{value:"<code>shards</code>",id:"shards",children:[]},{value:"<code>init_values</code>",id:"init_values",children:[]}]}],b={toc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Stores key/value pairs in a map held in memory. This cache is therefore reset\nevery time the service restarts. Each item in the cache has a TTL set from the\nmoment it was last edited, after which it will be removed during the next\ncompaction."),Object(c.b)(o.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"common",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Common config fields, showing default values\nmemory:\n  ttl: 300\n  compaction_interval: 60s\n  init_values: {}\n"))),Object(c.b)(i.a,{value:"advanced",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# All config fields, showing default values\nmemory:\n  ttl: 300\n  compaction_interval: 60s\n  shards: 1\n  init_values: {}\n")))),Object(c.b)("p",null,"A compaction only occurs during a write where the time since the last compaction\nis above the compaction interval. It is therefore possible to obtain values of\nkeys that have expired between compactions."),Object(c.b)("p",null,"The field ",Object(c.b)("inlineCode",{parentName:"p"},"init_values")," can be used to prepopulate the memory cache\nwith any number of key/value pairs which are exempt from TTLs:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"memory:\n  ttl: 60\n  init_values:\n    foo: bar\n")),Object(c.b)("p",null,"These values can be overridden during execution, at which point the configured\nTTL is respected as usual."),Object(c.b)("h2",{id:"fields"},"Fields"),Object(c.b)("h3",{id:"ttl"},Object(c.b)("inlineCode",{parentName:"h3"},"ttl")),Object(c.b)("p",null,"The TTL of each item in seconds. After this period an item will be eligible for removal during the next compaction."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"number"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},"300"),"  "),Object(c.b)("h3",{id:"compaction_interval"},Object(c.b)("inlineCode",{parentName:"h3"},"compaction_interval")),Object(c.b)("p",null,"The period of time to wait before each compaction, at which point expired items are removed."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'"60s"'),"  "),Object(c.b)("h3",{id:"shards"},Object(c.b)("inlineCode",{parentName:"h3"},"shards")),Object(c.b)("p",null,"A number of logical shards to spread keys across, increasing the shards can have a performance benefit when processing a large number of keys."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"number"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},"1"),"  "),Object(c.b)("h3",{id:"init_values"},Object(c.b)("inlineCode",{parentName:"h3"},"init_values")),Object(c.b)("p",null,"A table of key/value pairs that should be present in the cache on initialization. This can be used to create static lookup tables."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"object"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},"{}"),"  "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\ninit_values:\n  Nickelback: "1995"\n  Spice Girls: "1994"\n  The Human League: "1977"\n')))}m.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),p=a,d=b["".concat(o,".").concat(p)]||b[p]||m[p]||c;return n?r.a.createElement(d,i(i({ref:t},s),{},{components:n})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(413),o=n(412),i=n(56),l=n.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,b=e.values,m=e.groupId,p=e.className,d=Object(c.a)(),f=d.tabGroupChoices,h=d.setTabGroupChoices,v=Object(a.useState)(i),O=v[0],y=v[1],j=a.Children.toArray(e.children);if(null!=m){var g=f[m];null!=g&&g!==O&&b.some((function(e){return e.value===g}))&&y(g)}var w=function(e){y(e),null!=m&&h(m,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},p)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);
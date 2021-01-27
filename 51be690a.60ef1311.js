(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(411)),c=(n(415),n(416),{title:"resource",type:"output",status:"stable",categories:["Utility"]}),u={unversionedId:"components/outputs/resource",id:"components/outputs/resource",isDocsHomePage:!1,title:"resource",description:"\x3c!--",source:"@site/docs/components/outputs/resource.md",slug:"/components/outputs/resource",permalink:"/docs/components/outputs/resource",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/resource.md",version:"current",sidebar:"docs",previous:{title:"reject",permalink:"/docs/components/outputs/reject"},next:{title:"retry",permalink:"/docs/components/outputs/retry"}},s=[],i={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Resource is an output type that runs a resource output by its name. This output\nallows you to run the same configured output resource in multiple places."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# Config fields, showing default values\noutput:\n  resource: ""\n')),Object(a.b)("p",null,"Resource outputs also have the advantage of name based metrics and logging. For\nexample, the config:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"output:\n  broker:\n    pattern: fan_out\n    outputs:\n    - kafka:\n        addresses: [ TODO ]\n        topic: foo\n    - gcp_pubsub:\n        project: bar\n        topic: baz\n")),Object(a.b)("p",null,"Is equivalent to:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"output:\n  broker:\n    pattern: fan_out\n    outputs:\n    - resource: foo\n    - resource: bar\n\nresources:\n  outputs:\n    foo:\n      kafka:\n        addresses: [ TODO ]\n        topic: foo\n\n    bar:\n      gcp_pubsub:\n        project: bar\n        topic: baz\n")),Object(a.b)("p",null,"But now the metrics path of Kafka output will be\n",Object(a.b)("inlineCode",{parentName:"p"},"resources.outputs.foo"),", this way of flattening observability\nlabels becomes more useful as configs get larger and more nested."),Object(a.b)("p",null,"You can find out more about resources ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/resources"}),"in this document.")))}l.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,m=p["".concat(c,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(m,u(u({ref:t},i),{},{components:n})):o.a.createElement(m,u({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},413:function(e,t,n){"use strict";var r=n(0),o=n(414);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},415:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(413),c=n(412),u=n(56),s=n.n(u),i=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,f=e.groupId,b=e.className,m=Object(a.a)(),d=m.tabGroupChoices,O=m.setTabGroupChoices,y=Object(r.useState)(u),v=y[0],g=y[1],j=r.Children.toArray(e.children);if(null!=f){var h=d[f];null!=h&&h!==v&&p.some((function(e){return e.value===h}))&&g(h)}var w=function(e){g(e),null!=f&&O(f,e)},k=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},b)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(j.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},416:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:o}),t)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{203:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(411)),c=(n(415),n(416),{title:"whitelist",type:"metrics",status:"deprecated"}),o={unversionedId:"components/metrics/whitelist",id:"components/metrics/whitelist",isDocsHomePage:!1,title:"whitelist",description:"\x3c!--",source:"@site/docs/components/metrics/whitelist.md",slug:"/components/metrics/whitelist",permalink:"/docs/components/metrics/whitelist",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/metrics/whitelist.md",version:"current",sidebar:"docs",previous:{title:"rename",permalink:"/docs/components/metrics/rename"},next:{title:"Tracers",permalink:"/docs/components/tracers/about"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>paths</code>",id:"paths",children:[]},{value:"<code>patterns</code>",id:"patterns",children:[]},{value:"<code>child</code>",id:"child",children:[]}]},{value:"Debugging",id:"debugging",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"DEPRECATED")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This component is deprecated and will be removed in the next major version release. Please consider moving onto ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#alternatives"}),"alternative components"),"."))),Object(i.b)("p",null,"Whitelist metric paths within Benthos so that only matching metric paths are\naggregated by a child metric target."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Config fields, showing default values\nmetrics:\n  whitelist:\n    paths: []\n    patterns: []\n    child: {}\n")),Object(i.b)("p",null,"Whitelists can either be path prefixes or regular expression patterns, if either\na path prefix or regular expression matches a metric path it will be included."),Object(i.b)("p",null,"Metrics must be matched using dot notation even if the chosen output uses a\ndifferent form. For example, the path would be 'foo.bar' rather than 'foo_bar'\neven when sending metrics to Prometheus. A full list of metrics paths that\nBenthos registers can be found in\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/metrics/about#paths"}),"this list"),"."),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("h3",{id:"paths"},Object(i.b)("inlineCode",{parentName:"h3"},"paths")),Object(i.b)("p",null,"A list of path prefixes to include. This can be used, for example, to allow all of the child specific metrics paths from an output broker with the path ",Object(i.b)("inlineCode",{parentName:"p"},"output.broker"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"array"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(i.b)("h3",{id:"patterns"},Object(i.b)("inlineCode",{parentName:"h3"},"patterns")),Object(i.b)("p",null,"A list of RE2 regular expressions to include. This can be used, for example, to allow all of the latency based metrics with the pattern ",Object(i.b)("inlineCode",{parentName:"p"},".*\\.latency"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"array"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(i.b)("h3",{id:"child"},Object(i.b)("inlineCode",{parentName:"h3"},"child")),Object(i.b)("p",null,"A child metric type, this is where whitelisted metrics will be routed."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"{}"),"  "),Object(i.b)("h2",{id:"debugging"},"Debugging"),Object(i.b)("p",null,"In order to see logs breaking down which metrics are registered and whether they\npass your whitelists enable logging at the TRACE level."))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(c,".").concat(d)]||u[d]||b[d]||i;return n?a.a.createElement(m,o(o({ref:t},l),{},{components:n})):a.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},413:function(e,t,n){"use strict";var r=n(0),a=n(414);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(413),c=n(412),o=n(56),s=n.n(o),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(r.useState)(o),j=O[0],v=O[1],g=r.Children.toArray(e.children);if(null!=b){var y=f[b];null!=y&&y!==j&&u.some((function(e){return e.value===y}))&&v(y)}var w=function(e){v(e),null!=b&&h(b,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},416:function(e,t,n){"use strict";var r=n(3),a=n(0),i=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return i.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);
/*! For license information please see 4ac72d28.24a41997.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return m}));var r=n(3),o=n(7),a=(n(0),n(411)),i=n(426),s=n(422),c={title:"Inputs",sidebar_label:"About"},u={unversionedId:"components/inputs/about",id:"components/inputs/about",isDocsHomePage:!1,title:"Inputs",description:"An input is a source of data piped through an array of optional processors:",source:"@site/docs/components/inputs/about.md",slug:"/components/inputs/about",permalink:"/docs/components/inputs/about",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/inputs/about.md",version:"current",sidebar_label:"About",sidebar:"docs",previous:{title:"HTTP",permalink:"/docs/components/http/about"},next:{title:"amqp_0_9",permalink:"/docs/components/inputs/amqp_0_9"}},l=[{value:"Brokering",id:"brokering",children:[{value:"Sequential Reads",id:"sequential-reads",children:[]}]},{value:"Generating Messages",id:"generating-messages",children:[]},{value:"Categories",id:"categories",children:[]}],p={toc:l};function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"An input is a source of data piped through an array of optional ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/about"}),"processors"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'input:\n  redis_streams:\n    url: tcp://localhost:6379\n    streams:\n      - benthos_stream\n    body_key: body\n    consumer_group: benthos_group\n\n  # Optional list of processing steps\n  processors:\n   - bloblang: |\n       root.document = this.without("links")\n       root.link_count = this.links.length()\n')),Object(a.b)("p",null,"Some inputs have a logical end, for example a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/inputs/csv"}),Object(a.b)("inlineCode",{parentName:"a"},"csv")," input")," ends once the last row is consumed, when this happens the input gracefully terminates and Benthos will shut itself down once all messages have been processed fully."),Object(a.b)("p",null,"It's also possible to specify a logical end for an input that otherwise doesn't have one with the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/inputs/read_until"}),Object(a.b)("inlineCode",{parentName:"a"},"read_until")," input"),", which checks a condition against each consumed message in order to determine whether it should be the last."),Object(a.b)("h2",{id:"brokering"},"Brokering"),Object(a.b)("p",null,"Only one input is configured at the root of a Benthos config. However, the root input can be a ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/inputs/broker"}),"broker")," which combines multiple inputs and merges the streams:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"input:\n  broker:\n    inputs:\n      - kafka:\n          addresses: [ TODO ]\n          topics: [ foo, bar ]\n          consumer_group: foogroup\n\n      - redis_streams:\n          url: tcp://localhost:6379\n          streams:\n            - benthos_stream\n          body_key: body\n          consumer_group: benthos_group\n")),Object(a.b)("h3",{id:"sequential-reads"},"Sequential Reads"),Object(a.b)("p",null,"Sometimes it's useful to consume a sequence of inputs, where an input is only consumed once its predecessor is drained fully, you can achieve this with the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/inputs/sequence"}),Object(a.b)("inlineCode",{parentName:"a"},"sequence")," input"),"."),Object(a.b)("h2",{id:"generating-messages"},"Generating Messages"),Object(a.b)("p",null,"Sometimes it's useful to generate data, in which case the most convenient option is the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/inputs/bloblang"}),Object(a.b)("inlineCode",{parentName:"a"},"bloblang")," input"),"."),Object(a.b)("h2",{id:"categories"},"Categories"),Object(a.b)(i.a,{type:"inputs",mdxType:"ComponentsByCategory"}),Object(a.b)(s.a,{type:"inputs",mdxType:"ComponentSelect"}))}m.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||a;return n?o.a.createElement(f,s(s({ref:t},u),{},{components:n})):o.a.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},413:function(e,t,n){"use strict";var r=n(0),o=n(414);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},415:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(413),i=n(412),s=n(56),c=n.n(s),u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,m=e.groupId,d=e.className,f=Object(a.a)(),b=f.tabGroupChoices,h=f.setTabGroupChoices,v=Object(r.useState)(s),g=v[0],y=v[1],O=r.Children.toArray(e.children);if(null!=m){var j=b[m];null!=j&&j!==g&&p.some((function(e){return e.value===j}))&&y(j)}var w=function(e){y(e),null!=m&&h(m,e)},k=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(i.a)("tabs__item",c.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},416:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:o}),t)}},417:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===a)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},418:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(11),i=n(420),s=n(8),c=Object(r.createContext)({collectLink:function(){}}),u=n(421),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n,p,m=e.isNavLink,d=e.to,f=e.href,b=e.activeClassName,h=e.isActive,v=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(u.b)().withBaseUrl,w=Object(r.useContext)(c),k=d||f,C=Object(i.a)(k),N=null==k?void 0:k.replace("pathname://",""),E=void 0!==N?(n=N,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,P=Object(r.useRef)(!1),_=m?a.e:a.c,x=s.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!x&&C&&window.docusaurus.prefetch(E),function(){x&&p&&p.disconnect()}}),[E,x,C]);var A=null!==(t=null==E?void 0:E.startsWith("#"))&&void 0!==t&&t,I=!E||!C||A;return E&&C&&!A&&!v&&w.collectLink(E),I?o.a.createElement("a",Object.assign({href:E},k&&!C&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(_,Object.assign({},O,{onMouseEnter:function(){P.current||(window.docusaurus.preload(E),P.current=!0)},innerRef:function(e){var t,n;x&&e&&C&&(t=e,n=function(){window.docusaurus.prefetch(E)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),n())}))}))).observe(t))},to:E||""},m&&{isActive:h,activeClassName:b}))}},420:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},421:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(22),o=n(420);function a(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,c=a.absolute,u=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(s)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+l:l}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},422:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(22),i=n(417),s=n.n(i),c=n(57),u=n.n(c);t.a=function(e){var t=e.type,n=e.singular,r=Object(a.default)().siteConfig.customFields.components[t];return"string"!=typeof n&&/s$/.test(n=t)&&(n=t.slice(0,-1)),o.a.createElement("div",{className:"dropdown dropdown--hoverable"},o.a.createElement("button",{className:"button button--outline button--primary"},"Jump to ",n),o.a.createElement("ul",{className:s()(u.a.componentList,"dropdown__menu")},r.map((function(e){return o.a.createElement("li",{key:e.name},o.a.createElement("a",{className:"dropdown__link",href:"/docs/components/"+t+"/"+e.name},e.name))}))))}},426:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(22),i=n(415),s=n(416),c=n(418),u=(n(417),n(58)),l=n.n(u);var p=function(e){var t=e.type,n=e.component;return o.a.createElement(c.a,{to:"/docs/components/"+t+"/"+n.name,className:l.a.componentCard},o.a.createElement("strong",null,n.name))},m={inputs:[{name:"Services",description:"Inputs that consume from storage or message streaming services."},{name:"Network",description:"Inputs that consume directly from low level network protocols."},{name:"AWS",description:"Inputs that consume from Amazon Web Services products."},{name:"GCP",description:"Inputs that consume from Google Cloud Platform services."},{name:"Local",description:"Inputs that consume from the local machine/filesystem."},{name:"Utility",description:"Inputs that provide utility by generating data or combining/wrapping other inputs."}],processors:[{name:"Mapping",description:"Processors that specialize in restructuring messages."},{name:"Integration",description:"Processors that interact with external services."},{name:"Parsing",description:"Processors that specialize in translating messages from one format to another."},{name:"Composition",description:"Higher level processors that compose other processors and modify their behavior."},{name:"Utility",description:"Processors that provide general utility or do not fit in another category."}],outputs:[{name:"Services",description:"Outputs that write to storage or message streaming services."},{name:"Network",description:"Outputs that write directly to low level network protocols."},{name:"AWS",description:"Outputs that write to Amazon Web Services products."},{name:"GCP",description:"Outputs that write to Google Cloud Platform services."},{name:"Azure",description:"Outputs that write to Microsoft Azure services."},{name:"Local",description:"Outputs that write to the local machine/filesystem."},{name:"Utility",description:"Outputs that provide utility by combining/wrapping other outputs."}]};t.a=function(e){for(var t=e.type,n=Object(a.default)().siteConfig.customFields.components[t],r=m[t]||[],c={},u=[],l=0;l<r.length;l++)u.push(r[l].name),c[r[l].name]={summary:r[l].description,items:[]};for(var d=0;d<n.length;d++){var f=n[d].categories;if(Array.isArray(f))for(var b=0;b<f.length;b++)void 0===c[f[b]]?(u.push(f[b]),c[f[b]]={summary:"",items:[n[d]]}):c[f[b]].items.push(n[d])}return o.a.createElement(i.a,{defaultValue:u[0].toLowerCase(),values:u.map((function(e){return{label:e,value:e.toLowerCase()}}))},u.map((function(e){return o.a.createElement(s.a,{value:e.toLowerCase()},o.a.createElement("p",null,c[e].summary),c[e].items.map((function(e){return o.a.createElement(p,{type:t,component:e})})))})))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[311],{388:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(411)),s=(n(415),n(416),{title:"process_dag",type:"processor",status:"deprecated"}),c={unversionedId:"components/processors/process_dag",id:"components/processors/process_dag",isDocsHomePage:!1,title:"process_dag",description:"\x3c!--",source:"@site/docs/components/processors/process_dag.md",slug:"/components/processors/process_dag",permalink:"/docs/components/processors/process_dag",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/process_dag.md",version:"current",sidebar:"docs",previous:{title:"process_batch",permalink:"/docs/components/processors/process_batch"},next:{title:"process_field",permalink:"/docs/components/processors/process_field"}},i=[{value:"Alternatives",id:"alternatives",children:[]},{value:"Examples",id:"examples",children:[]}],l={toc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"DEPRECATED")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This component is deprecated and will be removed in the next major version release. Please consider moving onto ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#alternatives"}),"alternative components"),"."))),Object(o.b)("p",null,"A processor that manages a map of ",Object(o.b)("inlineCode",{parentName:"p"},"process_map")," processors and\ncalculates a Directed Acyclic Graph (DAG) of their dependencies by referring to\ntheir postmap targets for provided fields and their premap targets for required\nfields."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Config fields, showing default values\nprocess_dag: {}\n")),Object(o.b)("h2",{id:"alternatives"},"Alternatives"),Object(o.b)("p",null,"All functionality of this processor has been superseded by the\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/workflow"}),"workflow")," processor."),Object(o.b)("p",null,"The names of workflow stages may only contain alphanumeric, underscore and dash\ncharacters (they must match the regular expression ",Object(o.b)("inlineCode",{parentName:"p"},"[a-zA-Z0-9_-]+"),")."),Object(o.b)("p",null,"The DAG is then used to execute the children in the necessary order with the\nmaximum parallelism possible. You can read more about workflows in Benthos\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/workflows"}),"in this document"),"."),Object(o.b)("p",null,"The field ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," is an optional array of fields that a child\ndepends on. This is useful for when fields are required but don't appear within\na premap such as those used in conditions."),Object(o.b)("p",null,"This processor is extremely useful for performing a complex mesh of enrichments\nwhere network requests mean we desire maximum parallelism across those\nenrichments."),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"If we had three target HTTP services that we wished to enrich each\ndocument with - foo, bar and baz - where baz relies on the result of both foo\nand bar, we might express that relationship here like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"process_dag:\n  foo:\n    premap:\n      .: .\n    processors:\n    - http:\n        url: http://foo/enrich\n    postmap:\n      foo_result: .\n\n  bar:\n    premap:\n      .: msg.sub.path\n    processors:\n    - http:\n        url: http://bar/enrich\n    postmap:\n      bar_result: .\n\n  baz:\n    premap:\n      foo_obj: foo_result\n      bar_obj: bar_result\n    processors:\n    - http:\n        url: http://baz/enrich\n    postmap:\n      baz_obj: .\n")),Object(o.b)("p",null,"With this config the DAG would determine that the children foo and bar can be\nexecuted in parallel, and once they are both finished we may proceed onto baz."))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},413:function(e,t,n){"use strict";var r=n(0),a=n(414);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(413),s=n(412),c=n(56),i=n.n(c),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,u=e.values,d=e.groupId,b=e.className,m=Object(o.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,O=Object(r.useState)(c),v=O[0],j=O[1],g=r.Children.toArray(e.children);if(null!=d){var y=f[d];null!=y&&y!==v&&u.some((function(e){return e.value===y}))&&j(y)}var w=function(e){j(e),null!=d&&h(d,e)},x=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},b)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(s.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},416:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);
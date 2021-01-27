(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{172:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),c=(n(0),n(411)),o=n(415),i=n(416),l={title:"check_field",type:"condition",status:"stable"},s={unversionedId:"components/conditions/check_field",id:"components/conditions/check_field",isDocsHomePage:!1,title:"check_field",description:"\x3c!--",source:"@site/docs/components/conditions/check_field.md",slug:"/components/conditions/check_field",permalink:"/docs/components/conditions/check_field",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/conditions/check_field.md",version:"current"},u=[{value:"Fields",id:"fields",children:[{value:"<code>path</code>",id:"path",children:[]},{value:"<code>condition</code>",id:"condition",children:[]},{value:"<code>parts</code>",id:"parts",children:[]}]}],d={toc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Extracts the value of a field identified via ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/field_paths"}),"dot path"),"\nwithin messages (currently only JSON format is supported) and then tests the\nextracted value against a child condition."),Object(c.b)(o.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"common",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\ncheck_field:\n  path: ""\n  condition: {}\n'))),Object(c.b)(i.a,{value:"advanced",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\ncheck_field:\n  path: ""\n  condition: {}\n  parts: []\n')))),Object(c.b)("h2",{id:"fields"},"Fields"),Object(c.b)("h3",{id:"path"},Object(c.b)("inlineCode",{parentName:"h3"},"path")),Object(c.b)("p",null,"A ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/field_paths"}),"field path")," to check against the child condition."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"string"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(c.b)("h3",{id:"condition"},Object(c.b)("inlineCode",{parentName:"h3"},"condition")),Object(c.b)("p",null,"A child condition to test the field contents against."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"object"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},"{}"),"  "),Object(c.b)("h3",{id:"parts"},Object(c.b)("inlineCode",{parentName:"h3"},"parts")),Object(c.b)("p",null,"An optional array of message indexes of a batch that the condition should apply to.\nIf left empty all messages are processed. This field is only applicable when\nbatching messages ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"at the input level"),"."),Object(c.b)("p",null,"Indexes can be negative, and if so the part will be selected from the end\ncounting backwards starting from -1."),Object(c.b)("p",null,"Type: ",Object(c.b)("inlineCode",{parentName:"p"},"array"),Object(c.b)("br",{parentName:"p"}),"\n","Default: ",Object(c.b)("inlineCode",{parentName:"p"},"[]"),"  "))}p.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,f=d["".concat(o,".").concat(b)]||d[b]||p[b]||c;return n?r.a.createElement(f,i(i({ref:t},s),{},{components:n})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(413),o=n(412),i=n(56),l=n.n(i),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,d=e.values,p=e.groupId,b=e.className,f=Object(c.a)(),m=f.tabGroupChoices,h=f.setTabGroupChoices,O=Object(a.useState)(i),v=O[0],j=O[1],y=a.Children.toArray(e.children);if(null!=p){var g=m[p];null!=g&&g!==v&&d.some((function(e){return e.value===g}))&&j(g)}var w=function(e){j(e),null!=p&&h(p,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},b)},d.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);
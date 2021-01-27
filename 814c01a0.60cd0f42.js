(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{261:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(411)),c=n(415),i=n(416),s={title:"json_schema",type:"condition",status:"stable"},l={unversionedId:"components/conditions/json_schema",id:"components/conditions/json_schema",isDocsHomePage:!1,title:"json_schema",description:"\x3c!--",source:"@site/docs/components/conditions/json_schema.md",slug:"/components/conditions/json_schema",permalink:"/docs/components/conditions/json_schema",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/conditions/json_schema.md",version:"current"},p=[{value:"Fields",id:"fields",children:[{value:"<code>schema</code>",id:"schema",children:[]},{value:"<code>schema_path</code>",id:"schema_path",children:[]},{value:"<code>part</code>",id:"part",children:[]}]},{value:"Examples",id:"examples",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Validates a message against the provided JSONSchema definition to retrieve a\nboolean response indicating whether the message matches the schema or not."),Object(o.b)(c.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"common",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\njson_schema:\n  schema: ""\n  schema_path: ""\n'))),Object(o.b)(i.a,{value:"advanced",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\njson_schema:\n  schema: ""\n  schema_path: ""\n  part: 0\n')))),Object(o.b)("p",null,"If the response is true the condition passes, otherwise it does not. Please\nrefer to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://json-schema.org/"}),"JSON Schema website")," for information and\ntutorials regarding the syntax of the schema."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"schema"},Object(o.b)("inlineCode",{parentName:"h3"},"schema")),Object(o.b)("p",null,"A schema to apply. Use either this or the ",Object(o.b)("inlineCode",{parentName:"p"},"schema_path")," field."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(o.b)("h3",{id:"schema_path"},Object(o.b)("inlineCode",{parentName:"h3"},"schema_path")),Object(o.b)("p",null,"The path of a schema document to apply. Use either this or the ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," field."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(o.b)("h3",{id:"part"},Object(o.b)("inlineCode",{parentName:"h3"},"part")),Object(o.b)("p",null,"The index of a message within a batch to test the condition against. This\nfield is only applicable when batching messages\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"at the input level"),"."),Object(o.b)("p",null,"Indexes can be negative, and if so the part will be selected from the end\ncounting backwards starting from -1."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"With the following JSONSchema document:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$id": "https://example.com/person.schema.json",\n    "$schema": "http://json-schema.org/draft-07/schema#",\n    "title": "Person",\n    "type": "object",\n    "properties": {\n      "firstName": {\n        "type": "string",\n        "description": "The person\'s first name."\n      },\n      "lastName": {\n        "type": "string",\n        "description": "The person\'s last name."\n      },\n      "age": {\n        "description": "Age in years which must be equal to or greater than zero.",\n        "type": "integer",\n        "minimum": 0\n      }\n    }\n}\n')),Object(o.b)("p",null,"And the following Benthos configuration:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'json_schema:\n  schema_path: "file://path_to_schema.json"\n')),Object(o.b)("p",null,"If the message being processed looked like:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{"firstName":"John","lastName":"Doe","age":21}\n')),Object(o.b)("p",null,"Then the condition would pass."))}b.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,i(i({ref:t},l),{},{components:n})):r.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},413:function(e,t,n){"use strict";var a=n(0),r=n(414);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},415:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(413),c=n(412),i=n(56),s=n.n(i),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,u=e.values,b=e.groupId,m=e.className,d=Object(o.a)(),h=d.tabGroupChoices,f=d.setTabGroupChoices,j=Object(a.useState)(i),O=j[0],g=j[1],v=a.Children.toArray(e.children);if(null!=b){var y=h[b];null!=y&&y!==O&&u.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=b&&f(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},416:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);
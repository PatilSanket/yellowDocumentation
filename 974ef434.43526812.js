(window.webpackJsonp=window.webpackJsonp||[]).push([[208],{285:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(411)),c=(n(415),n(416),{title:"subprocess",type:"output",status:"beta",categories:["Utility"]}),s={unversionedId:"components/outputs/subprocess",id:"components/outputs/subprocess",isDocsHomePage:!1,title:"subprocess",description:"\x3c!--",source:"@site/docs/components/outputs/subprocess.md",slug:"/components/outputs/subprocess",permalink:"/docs/components/outputs/subprocess",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/subprocess.md",version:"current",sidebar:"docs",previous:{title:"stdout",permalink:"/docs/components/outputs/stdout"},next:{title:"switch",permalink:"/docs/components/outputs/switch"}},i=[{value:"Fields",id:"fields",children:[{value:"<code>name</code>",id:"name",children:[]},{value:"<code>args</code>",id:"args",children:[]},{value:"<code>codec</code>",id:"codec",children:[]}]}],u={toc:i};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"BETA: This component is mostly stable but breaking changes could still be made outside of major version releases if a fundamental problem with the component is found."),Object(a.b)("p",null,"Executes a command, runs it as a subprocess, and writes messages to it over stdin."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'# Config fields, showing default values\noutput:\n  subprocess:\n    name: ""\n    args: []\n    codec: lines\n')),Object(a.b)("p",null,"Messages are written according to a specified codec. The process is expected to terminate gracefully when stdin is closed."),Object(a.b)("p",null,"If the subprocess exits unexpectedly then Benthos will log anything printed to stderr and will log the exit code, and will attempt to execute the command again until success."),Object(a.b)("p",null,"The execution environment of the subprocess is the same as the Benthos instance, including environment variables and the current working directory."),Object(a.b)("h2",{id:"fields"},"Fields"),Object(a.b)("h3",{id:"name"},Object(a.b)("inlineCode",{parentName:"h3"},"name")),Object(a.b)("p",null,"The command to execute as a subprocess."),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"string"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(a.b)("h3",{id:"args"},Object(a.b)("inlineCode",{parentName:"h3"},"args")),Object(a.b)("p",null,"A list of arguments to provide the command."),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"array"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(a.b)("h3",{id:"codec"},Object(a.b)("inlineCode",{parentName:"h3"},"codec")),Object(a.b)("p",null,"The way in which messages should be written to the subprocess."),Object(a.b)("p",null,"Type: ",Object(a.b)("inlineCode",{parentName:"p"},"string"),Object(a.b)("br",{parentName:"p"}),"\n","Default: ",Object(a.b)("inlineCode",{parentName:"p"},'"lines"'),Object(a.b)("br",{parentName:"p"}),"\n","Options: ",Object(a.b)("inlineCode",{parentName:"p"},"lines"),"."))}l.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return n?o.a.createElement(m,s(s({ref:t},u),{},{components:n})):o.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},413:function(e,t,n){"use strict";var r=n(0),o=n(414);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)(void 0);t.a=o},415:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(413),c=n(412),s=n(56),i=n.n(s),u=37,l=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,p=e.values,b=e.groupId,d=e.className,m=Object(a.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,h=Object(r.useState)(s),v=h[0],j=h[1],y=r.Children.toArray(e.children);if(null!=b){var g=f[b];null!=g&&g!==v&&p.some((function(e){return e.value===g}))&&j(g)}var w=function(e){j(e),null!=b&&O(b,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},d)},p.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(c.a)("tabs__item",i.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},n)}))),t?Object(r.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},416:function(e,t,n){"use strict";var r=n(3),o=n(0),a=n.n(o);t.a=function(e){var t=e.children,n=e.hidden,o=e.className;return a.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:o}),t)}}}]);
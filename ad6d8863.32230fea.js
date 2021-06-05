(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{197:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return p})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(260)),p={title:"app.wordToNumber",sidebar_label:"app.wordToNumber"},c={unversionedId:"developer/app/components/word-to-number",id:"developer/app/components/word-to-number",isDocsHomePage:!1,title:"app.wordToNumber",description:"Extracts the number from a given string",source:"@site/docs/developer/app/components/word-to-number.md",slug:"/developer/app/components/word-to-number",permalink:"/docs/developer/app/components/word-to-number",version:"current",sidebar_label:"app.wordToNumber"},u=[{value:"Input Parameters",id:"input-parameters",children:[]},{value:"Examples",id:"examples",children:[]}],i={toc:u};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null," Extracts the number from a given string"),Object(a.b)("h2",{id:"input-parameters"},"Input Parameters"),Object(a.b)("p",null," ",Object(a.b)("strong",{parentName:"p"},"message")," : ",Object(a.b)("em",{parentName:"p"},"string message from which you want to extract numbers")),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'app.log(app.wordToNumber("Adam has ten mangoes"));\n')),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"It will log 10 on the console")))}l.isMDXComponent=!0},260:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),l=function(e){var r=o.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return o.a.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=l(t),b=n,d=s["".concat(p,".").concat(b)]||s[b]||m[b]||a;return t?o.a.createElement(d,c(c({ref:r},i),{},{components:t})):o.a.createElement(d,c({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=b;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,p[1]=c;for(var i=2;i<a;i++)p[i]=t[i];return o.a.createElement.apply(null,p)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
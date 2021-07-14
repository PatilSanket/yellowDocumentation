(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{183:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return s}));var o=n(3),r=n(7),c=(n(0),n(262)),a={title:"Compare Code across Enviroments",sidebar_label:"Compare Code"},i={unversionedId:"platform_concepts/configurations/compare-code",id:"platform_concepts/configurations/compare-code",isDocsHomePage:!1,title:"Compare Code across Enviroments",description:"How to compare code?",source:"@site/docs/platform_concepts/configurations/compare-code.md",slug:"/platform_concepts/configurations/compare-code",permalink:"/docs/platform_concepts/configurations/compare-code",version:"current",sidebar_label:"Compare Code"},p=[{value:"How to compare code?",id:"how-to-compare-code",children:[]}],l={toc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"how-to-compare-code"},"How to compare code?"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Keywords")," : compare"),Object(c.b)("p",null,"Note : "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"This activity can be done only when the bot has been pushed and staging/ production bots exist. "),Object(c.b)("li",{parentName:"ol"},"Compare changes will appear only if there are changes. "),Object(c.b)("li",{parentName:"ol"},"The following combinations can be compare. Sandbox > Staging and Staging >  Production. ")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Step 1")," : Go to the developer section."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Step 2")," : Under cloud functions, on the top left you will see the COMPARE button. "),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Step 3")," : Click on the compare button to see new files created (C with green)/ deleted files (D with red) and modified files (M with blue) as compared to the next environment"),Object(c.b)("p",null,Object(c.b)("img",Object(o.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/BI0cyiysTzuv1615523589576.png",alt:"how to compare code snippets"}))))}s.isMDXComponent=!0},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,m=u["".concat(a,".").concat(d)]||u[d]||b[d]||c;return n?r.a.createElement(m,i(i({ref:t},l),{},{components:n})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
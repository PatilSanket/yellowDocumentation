(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{235:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return p})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return s}));var a=t(3),r=t(7),l=(t(0),t(260)),o={title:"app.agentsAvailable",sidebar_label:"app.agentsAvailable"},p={unversionedId:"developer/app/components/agents-available",id:"developer/app/components/agents-available",isDocsHomePage:!1,title:"app.agentsAvailable",description:"app.agentsAvailable() is used to a list of online agents.",source:"@site/docs/developer/app/components/agents-available.md",slug:"/developer/app/components/agents-available",permalink:"/docs/developer/app/components/agents-available",version:"current",sidebar_label:"app.agentsAvailable"},i=[{value:"Output Parameters",id:"output-parameters",children:[]},{value:"Example Usage",id:"example-usage",children:[]},{value:"Example Output:",id:"example-output",children:[]}],c={toc:i};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("p",null,"app.agentsAvailable() is used to a list of online agents.\n\u200b"),Object(l.b)("h2",{id:"output-parameters"},"Output Parameters"),Object(l.b)("p",null,"Array of objects, with all the details of the online agents.\n\u200b"),Object(l.b)("h2",{id:"example-usage"},"Example Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'app.agentsAvailable().then((agents) => {\n                app.log(agents, "agentsAvailable")\n            });\n')),Object(l.b)("h2",{id:"example-output"},"Example Output:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),' agentsAvailable {\n             "email": "xyz@gmail.com",\n             "username": "xyz",\n             "name": "xyz",\n             "call_enabled": false,\n             "voip_call_enabled": false,\n             "voip_password": null,\n             "webrtc_username": null,\n             "xmppUsername": "user_1602478055017",\n             "user_id": 84799,\n             "status": "available",\n             "agentProfile": {\n                 "email": "xyz@gmail.com",\n                 "id": 1234,\n                 "owner": "x1************7",\n                 "username": "xyz",\n                 "user_id": 2345,\n                 "name": "xyz",\n                 "profile_picture": "https://cdn.yellowmessenger.com/pic3.png",\n                 "description": "xyz",\n                 "max_conn_tickets": 50,\n                 "call_enabled": 0,\n                 "voip_call_enabled": 0,\n                 "voip_password": null,\n                 "webrtc_username": null,\n                 "xmpp_username": "xyz"\n             },\n             "xmpp": "xyz",\n             "currentHandlingTicketsCount": 13\n         }\n')),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Note : if maximumAssignedCount is set in bot mapping, it will be used as maximum concurrent tickets for agents.")))}s.isMDXComponent=!0},260:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||l;return t?r.a.createElement(d,p(p({ref:n},c),{},{components:t})):r.a.createElement(d,p({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=m;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
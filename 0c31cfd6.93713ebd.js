(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{337:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=o,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return n?a.a.createElement(h,l(l({ref:t},c),{},{components:n})):a.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return b}));var o=n(3),a=n(7),r=(n(0),n(337)),i=["components"],l={title:"Publish your Bot",sidebar_label:"Publish your Bot"},s={unversionedId:"platform_concepts/studio/modes",id:"platform_concepts/studio/modes",isDocsHomePage:!1,title:"Publish your Bot",description:"For simple & hassle-free management of bots across development environments, publish flow is needed. There are two modes in yellow.ai Conversational Studio - one for making all the changes (Development Mode) and one where all end users are interacting with the bot(Live Mode).",source:"@site/docs/platform_concepts/studio/modes.md",slug:"/platform_concepts/studio/modes",permalink:"/docs/platform_concepts/studio/modes",version:"current",sidebar_label:"Publish your Bot",sidebar:"platform_concepts",previous:{title:"Code",permalink:"/docs/platform_concepts/studio/cloud-function"},next:{title:"Creating Tables and Inserting Data",permalink:"/docs/platform_concepts/data/create-tables"}},c=[{value:"Development Mode",id:"development-mode",children:[]},{value:"Live Mode",id:"live-mode",children:[]},{value:"Publish Condition Checklist",id:"publish-condition-checklist",children:[{value:"Who can publish the bot?",id:"who-can-publish-the-bot",children:[]},{value:"How to approve the publish request?",id:"how-to-approve-the-publish-request",children:[]},{value:"Few checkpoints before publishing the bot:",id:"few-checkpoints-before-publishing-the-bot",children:[]}]}],p={toc:c};function b(e){var t=e.components,n=Object(a.a)(e,i);return Object(r.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For simple & hassle-free management of bots across development environments, publish flow is needed. There are two modes in yellow.ai Conversational Studio - one for making all the changes (",Object(r.b)("em",{parentName:"p"},"Development Mode"),") and one where all end users are interacting with the bot(",Object(r.b)("em",{parentName:"p"},"Live Mode"),"). "),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://cdn.yellowmessenger.com/dk2qgZwPfPA71626253412459.png",alt:null})),Object(r.b)("h3",{id:"development-mode"},"Development Mode"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This is meant for all the on going developments(new journeys/functions, etc) and testing them. Once all changes are working as expected, a request to Publish can be created. Publish request is approved by bot admins. Following video highlights how to create a publish request. ")),Object(r.b)("p",null,Object(r.b)("img",{parentName:"p",src:"https://i.imgur.com/NcNBztP.gif",alt:null})),Object(r.b)("h3",{id:"live-mode"},"Live Mode"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"This is the equivalent of production environment where all the end users are interacting with the bot. This is a READ ONLY mode for Studio Module, so, no changes can be made. However, analytics of live users can be seen in Insights Module; campaigns can be run via Engagement Module and Agent can utilise Inbox to attend to customer queries. ")),Object(r.b)("h2",{id:"publish-condition-checklist"},"Publish Condition Checklist"),Object(r.b)("h3",{id:"who-can-publish-the-bot"},"Who can publish the bot?"),Object(r.b)("p",null,"Bot can be only published by the admins and people having approver access. But the first publish ever on the bot has to be done by the Super Admin only."),Object(r.b)("p",null,"Click ",Object(r.b)("a",{parentName:"p",href:"https://docs.yellow.ai/docs/platform_concepts/configurations/access-management"},"here"),' to see how you can add someone as an approver. Make sure you give them access as "Approvers"'),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Note: Only super admins can add other as approvers")),Object(r.b)("p",null,"To check who is the super admin (the one who has created the bot) :"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Go to the setting "),Object(r.b)("li",{parentName:"ol"},'Then Go to access controls and see who has access control as "Super Admin"')),Object(r.b)("h3",{id:"how-to-approve-the-publish-request"},"How to approve the publish request?"),Object(r.b)("p",null,"To publish the bot follow these steps mentioned:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},'As soon as someone raises a publish request, the super admin and the approvers will receive an email with subject line "Approval needed to publish Assistant : <YOUR_BOT_NAME>"'),Object(r.b)("li",{parentName:"ol"},'On the email click on "Check Publish Request"'),Object(r.b)("li",{parentName:"ol"},"It will redirect you to Bot approvals page"),Object(r.b)("li",{parentName:"ol"},"Click on Take Actions"),Object(r.b)("li",{parentName:"ol"},"After testing all the prerequisites mentioned, select the check boxes."),Object(r.b)("li",{parentName:"ol"},'On successful publishing you will receive an email with subject line "Assistant : <YOUR_BOT_NAME> has been approved" and also who has published the request.')),Object(r.b)("h3",{id:"few-checkpoints-before-publishing-the-bot"},"Few checkpoints before publishing the bot:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Make sure the bot is working as expected in the development environment. You can test all the functionality before publishing and approving as well."),Object(r.b)("li",{parentName:"ol"},"The bot is trained with correct intents."),Object(r.b)("li",{parentName:"ol"},"Few things that will not be transferred to live environment on publish bot are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Records stored in database"),Object(r.b)("li",{parentName:"ul"},"Settings done in inbox module"),Object(r.b)("li",{parentName:"ul"},"Analytics of the bot in Insights tab"),Object(r.b)("li",{parentName:"ul"},"Campaigns scheduled in engage module"),Object(r.b)("li",{parentName:"ul"},"Templates applied in the engage module"))),Object(r.b)("li",{parentName:"ol"},"Bot id is different in development and live environment"),Object(r.b)("li",{parentName:"ol"},"If you see the publish button as disabled and it says that bot is in read-only mode, make sure all the previous publish requests are approved and published.")))}b.isMDXComponent=!0}}]);
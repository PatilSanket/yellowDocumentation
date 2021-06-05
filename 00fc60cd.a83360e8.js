(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{260:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(r,".").concat(m)]||p[m]||u[m]||i;return n?o.a.createElement(d,l(l({ref:t},c),{},{components:n})):o.a.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),i=(n(0),n(260)),r={title:"Understand different settings and options in Tools",sidebar_label:"Tools"},l={unversionedId:"platform_concepts/studio/tools",id:"platform_concepts/studio/tools",isDocsHomePage:!1,title:"Understand different settings and options in Tools",description:"This section is dedicated to",source:"@site/docs/platform_concepts/studio/tools.md",slug:"/platform_concepts/studio/tools",permalink:"/docs/platform_concepts/studio/tools",version:"current",sidebar_label:"Tools",sidebar:"platform_concepts",previous:{title:"Languages Supported",permalink:"/docs/platform_concepts/studio/languages-supported"},next:{title:"Create and access bot variables in UI",permalink:"/docs/platform_concepts/studio/bot-variables"}},s=[{value:"Tools",id:"tools",children:[]}],c={toc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section is dedicated to"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Tools")," section in Studio",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Test your bot"),Object(i.b)("li",{parentName:"ul"},"Conversation Settings"),Object(i.b)("li",{parentName:"ul"},"NLU settings")))),Object(i.b)("p",null,"This will help you understand purpose and usability of each setting."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"tools"},"Tools"),Object(i.b)("p",null,"You can find tools button on top in Design and NLU sections inside Studio. "),Object(i.b)("p",null,"Tools section is divided into 3 parts -"),Object(i.b)("h4",{id:"1-test-your-bot"},"1. Test your bot"),Object(i.b)("p",null,"Test your bot section helps your test for any 'User utterance' which intent will be triggered with what confidence. (according to your bot training).\nYou can also enable verbose to see more details like sentiment confidence, synonyms detected or not etc."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/1Sb3ay3.gif",alt:null}))),Object(i.b)("h4",{id:"2-conversation-settings"},"2. Conversation Settings"),Object(i.b)("p",null,"These settings more or less control conversation flow, messages display etc. Let's go through them one by one. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Target language")," - Target language is default language before auto suggestion or change language journey occurs. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Translate quick reply responses")," - You can enable this if you also want Quick reply buttons to auto-translate. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Enable Hinglish")," - This will allow bot to understand ",Object(i.b)("inlineCode",{parentName:"p"},"Hinglish")," user utterances. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Auto Detect Language")," - Enabling this, bot can auto-detect the language user typed in and change own language to that in response (if configured). This remains in place till 2 days or until bot language is changed by user selection through ",Object(i.b)("inlineCode",{parentName:"p"},"set language")," action node. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Enable Go back/Go Home")," - This enables hot keywords for ",Object(i.b)("inlineCode",{parentName:"p"},"Go home")," -> Triggering welcome prompt ",Object(i.b)("em",{parentName:"p"},"and")," ",Object(i.b)("inlineCode",{parentName:"p"},"Go back")," -> Going to previous step in a journey"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",Object(i.b)("strong",{parentName:"p"},"Note")," : Go back keywords inside a journey take user to previous step. If used outside journey (As first step of a journey or after a journey is completed) - Go back goes to Welcome prompt. "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Go back aliases")," and ",Object(i.b)("strong",{parentName:"p"},"Go home aliases")," - These help you configure hot keywords of your choice for triggering Go back or Go home respectively. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Step validation settings")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"- **Whatsapp indexing settings**\n")),Object(i.b)("p",{parentName:"li"},"When you configure quick replies , they appear on whatsapp as a list\nDefault is like following:-"))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"What do you want to do next?"),Object(i.b)("pre",{parentName:"blockquote"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"    1. Check order status\n    2. Receive notification\n    3. Go back to Main Menu\n"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"To give more customisation over how it can look, we have two settings:")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'- **Whatsapp Quick reply index** - You can select from three options numbers(default), alphabets or emojis (numerical emojis) to as your index in cases like above.\n- **Structure Prefix** You can also your overall prefix with bold & italic support. \nDefault  preset entry in this box is `{{index}}` which looks like example above (when type is numbers).\nLet\'s see one more example -\n`_Type_ *{{index}}** for` will give you prefix  - \n> "*Type* **1** for ", "*Type* **2** for " and so on. \n')),Object(i.b)("p",null,"Your quick reply can look like : "),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'> "*Type* **1** for Check order status"\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Show prompt again")," - Enabling this will show original prompt again after validation failure message (which we learnt in earlier sections)"),Object(i.b)("p",{parentName:"li"},"  For example, for phone prompt"),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Phone number entered is not correct ","[validation failure message]","\nCan you please share your phone number? ","[original prompt]"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Enable Limit on Retries")," - Enabling this will set limit of 3 over total times validation failure can be allowed. If validation fails it shows ",Object(i.b)("strong",{parentName:"p"},"Error message")," which can be cofigured (next setting)\n")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Intelligent Switching")),Object(i.b)("div",Object(a.a)({parentName:"li"},{className:"admonition admonition-info alert alert--info"}),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"It is highly recommended this feature is turned on! "))),Object(i.b)("p",{parentName:"li"},"Before going into exact settings, let us understand this more conceptually.\nSuppose your user is in middle of a journey , say , ",Object(i.b)("inlineCode",{parentName:"p"},"Bank account opening journey"),' and halfway through giving details, question comes about asking type of account.\nConfused, user asks a question "What is the difference between two types of accounts" '))),Object(i.b)("p",null,"Assume you already have a FAQ configured for this ->\nWhat does in back is, since a new intent is detected -> it switches to that intent and answer user query (Fair enough!)"),Object(i.b)("p",null,"But after this , previous journey is lost and user will have to trigger and start that journey again. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"After enabling Intelligent switching")," , this scenario will look like below-\n",Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/6JStpcm.gif",alt:null}))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Other settings")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Follow-up message"),' : Follow-up message is the message in above example "Do you want to continue where you left off?" -> This message is editable. '),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Sticky Journeys"),"\nIf you have some journeys more complicated, where user interruption is not ideal , you can mark them as sticky journeys.\nFor these journeys, if an interruption is received, ",Object(i.b)("strong",{parentName:"li"},"Sticky journey prompt"),"(editable) will nudge users to stick to this journey. If selected ",Object(i.b)("inlineCode",{parentName:"li"},"Yes")," current journey will continue and other will be suggested later in followup message. ")),Object(i.b)("p",null,"Working example below - "),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://i.imgur.com/Nouk1jD.gif",alt:null}))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Voice Settings"))),Object(i.b)("p",null,"To be updated"),Object(i.b)("hr",null),Object(i.b)("h4",{id:"nlu-settings"},"NLU settings"),Object(i.b)("p",null,"NLU settings include settings related to Natural language Understanding as name suggests, and include the following"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Primary Model confidence"),"\nYou can modify primary model confidence . Confidence basically is a minimum below which intent will not be triggered. ",Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"> ML model matches user utterances to an intent with certain confidence which lies between 0 to 1. \n"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Secondary Model confidence"),"\nSimilary you can also select secondary model confidence. Secondary model is basically your Global contextual model. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Document Search Threshold"),"\nDocument Search thershold is minimum confidence needed to show documents in document search node. "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Multi-Intent settings"),'\nEnabling Multi-Intent will help model detecting two - intents in one user utterances.\nBasically, if this is enabled and user says\n" Book a flight and reserve a hotel" (assuming appropriate training)\nModel will detect two intents "Book a flight" and "Reserve a hotel"')),Object(i.b)("p",null,"Responding to this, model will acknowledge this (",Object(i.b)("strong",{parentName:"p"},"Acknowledgement message"),") ask user what they would like to do first, with these two options as quick replies.\nRemaining option and ",Object(i.b)("inlineCode",{parentName:"p"},"Go home")," will be suggested as quick replies with ",Object(i.b)("strong",{parentName:"p"},"followup message")," like in Intelligent switching. "),Object(i.b)("hr",null))}b.isMDXComponent=!0}}]);
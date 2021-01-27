(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{390:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),i=(t(0),t(411)),o=t(415),c=t(416),l={title:"aws_lambda",type:"processor",status:"stable",categories:["Integration"]},b={unversionedId:"components/processors/aws_lambda",id:"components/processors/aws_lambda",isDocsHomePage:!1,title:"aws_lambda",description:"\x3c!--",source:"@site/docs/components/processors/aws_lambda.md",slug:"/components/processors/aws_lambda",permalink:"/docs/components/processors/aws_lambda",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/aws_lambda.md",version:"current",sidebar:"docs",previous:{title:"awk",permalink:"/docs/components/processors/awk"},next:{title:"bloblang",permalink:"/docs/components/processors/bloblang"}},s=[{value:"Error Handling",id:"error-handling",children:[]},{value:"Credentials",id:"credentials",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>parallel</code>",id:"parallel",children:[]},{value:"<code>function</code>",id:"function",children:[]},{value:"<code>rate_limit</code>",id:"rate_limit",children:[]},{value:"<code>region</code>",id:"region",children:[]},{value:"<code>endpoint</code>",id:"endpoint",children:[]},{value:"<code>credentials</code>",id:"credentials-1",children:[]},{value:"<code>credentials.profile</code>",id:"credentialsprofile",children:[]},{value:"<code>credentials.id</code>",id:"credentialsid",children:[]},{value:"<code>credentials.secret</code>",id:"credentialssecret",children:[]},{value:"<code>credentials.token</code>",id:"credentialstoken",children:[]},{value:"<code>credentials.role</code>",id:"credentialsrole",children:[]},{value:"<code>credentials.role_external_id</code>",id:"credentialsrole_external_id",children:[]},{value:"<code>timeout</code>",id:"timeout",children:[]},{value:"<code>retries</code>",id:"retries",children:[]}]}],d={toc:s};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Invokes an AWS lambda for each message. The contents of the message is the\npayload of the request, and the result of the invocation will become the new\ncontents of the message."),Object(i.b)("p",null,"Introduced in version 3.36.0."),Object(i.b)(o.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"common",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\naws_lambda:\n  parallel: false\n  function: ""\n  region: eu-west-1\n'))),Object(i.b)(c.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\naws_lambda:\n  parallel: false\n  function: ""\n  rate_limit: ""\n  region: eu-west-1\n  endpoint: ""\n  credentials:\n    profile: ""\n    id: ""\n    secret: ""\n    token: ""\n    role: ""\n    role_external_id: ""\n  timeout: 5s\n  retries: 3\n')))),Object(i.b)("p",null,"It is possible to perform requests per message of a batch in parallel by setting\nthe ",Object(i.b)("inlineCode",{parentName:"p"},"parallel")," flag to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"rate_limit"),"\nfield can be used to specify a rate limit ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/rate_limits/about"}),"resource"),"\nto cap the rate of requests across parallel components service wide."),Object(i.b)("p",null,"In order to map or encode the payload to a specific request body, and map the\nresponse back into the original payload instead of replacing it entirely, you\ncan use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/branch"}),Object(i.b)("inlineCode",{parentName:"a"},"branch")," processor"),"."),Object(i.b)("h3",{id:"error-handling"},"Error Handling"),Object(i.b)("p",null,"When all retry attempts for a message are exhausted the processor cancels the\nattempt. These failed messages will continue through the pipeline unchanged, but\ncan be dropped or placed in a dead letter queue according to your config, you\ncan read about these patterns ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/error_handling"}),"here"),"."),Object(i.b)("h3",{id:"credentials"},"Credentials"),Object(i.b)("p",null,"By default Benthos will use a shared credentials file when connecting to AWS\nservices. It's also possible to set them explicitly at the component level,\nallowing you to transfer data across accounts. You can find out more\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/aws"}),"in this document"),"."),Object(i.b)("h2",{id:"examples"},"Examples"),Object(i.b)(o.a,{defaultValue:"Branched Invoke",values:[{label:"Branched Invoke",value:"Branched Invoke"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"Branched Invoke",mdxType:"TabItem"},Object(i.b)("p",null,"This example uses a ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/branch/"}),Object(i.b)("inlineCode",{parentName:"a"},"branch")," processor")," to map a new payload for triggering a lambda function with an ID and username from the original message, and the result of the lambda is discarded, meaning the original message is unchanged."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'pipeline:\n  processors:\n    - branch:\n        request_map: \'{"id":this.doc.id,"username":this.user.name}\'\n        processors:\n          - aws_lambda:\n              function: trigger_user_update\n')))),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("h3",{id:"parallel"},Object(i.b)("inlineCode",{parentName:"h3"},"parallel")),Object(i.b)("p",null,"Whether messages of a batch should be dispatched in parallel."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"bool"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(i.b)("h3",{id:"function"},Object(i.b)("inlineCode",{parentName:"h3"},"function")),Object(i.b)("p",null,"The function to invoke."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"rate_limit"},Object(i.b)("inlineCode",{parentName:"h3"},"rate_limit")),Object(i.b)("p",null,"An optional ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/rate_limits/about"}),Object(i.b)("inlineCode",{parentName:"a"},"rate_limit"))," to throttle invocations by."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"region"},Object(i.b)("inlineCode",{parentName:"h3"},"region")),Object(i.b)("p",null,"The AWS region to target."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"eu-west-1"'),"  "),Object(i.b)("h3",{id:"endpoint"},Object(i.b)("inlineCode",{parentName:"h3"},"endpoint")),Object(i.b)("p",null,"Allows you to specify a custom endpoint for the AWS API."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentials-1"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials")),Object(i.b)("p",null,"Optional manual configuration of AWS credentials to use. More information can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/aws"}),"in this document"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("h3",{id:"credentialsprofile"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.profile")),Object(i.b)("p",null,"A profile from ",Object(i.b)("inlineCode",{parentName:"p"},"~/.aws/credentials")," to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialsid"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.id")),Object(i.b)("p",null,"The ID of credentials to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialssecret"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.secret")),Object(i.b)("p",null,"The secret for the credentials being used."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialstoken"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.token")),Object(i.b)("p",null,"The token for the credentials being used, required when using short term credentials."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialsrole"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.role")),Object(i.b)("p",null,"A role ARN to assume."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialsrole_external_id"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.role_external_id")),Object(i.b)("p",null,"An external ID to provide when assuming a role."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"timeout"},Object(i.b)("inlineCode",{parentName:"h3"},"timeout")),Object(i.b)("p",null,"The maximum period of time to wait before abandoning an invocation."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"5s"'),"  "),Object(i.b)("h3",{id:"retries"},Object(i.b)("inlineCode",{parentName:"h3"},"retries")),Object(i.b)("p",null,"The maximum number of retry attempts for each message."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"number"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"3"),"  "))}p.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),s=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,m=d["".concat(o,".").concat(u)]||d[u]||p[u]||i;return t?r.a.createElement(m,c(c({ref:n},b),{},{components:t})):r.a.createElement(m,c({ref:n},b))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},412:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},413:function(e,n,t){"use strict";var a=t(0),r=t(414);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},415:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(413),o=t(412),c=t(56),l=t.n(c),b=37,s=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,p=e.groupId,u=e.className,m=Object(i.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(c),h=j[0],g=j[1],v=a.Children.toArray(e.children);if(null!=p){var y=f[p];null!=y&&y!==h&&d.some((function(e){return e.value===y}))&&g(y)}var N=function(e){g(e),null!=p&&O(p,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},u)},d.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===n}),key:n,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case s:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case b:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(C,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(a.cloneElement)(v.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},416:function(e,n,t){"use strict";var a=t(3),r=t(0),i=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}}}]);
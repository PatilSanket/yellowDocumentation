(window.webpackJsonp=window.webpackJsonp||[]).push([[293],{370:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return b})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),i=(t(0),t(411)),o=t(415),c=t(416),l={title:"aws_sns",type:"output",status:"stable",categories:["Services","AWS"]},s={unversionedId:"components/outputs/aws_sns",id:"components/outputs/aws_sns",isDocsHomePage:!1,title:"aws_sns",description:"\x3c!--",source:"@site/docs/components/outputs/aws_sns.md",slug:"/components/outputs/aws_sns",permalink:"/docs/components/outputs/aws_sns",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/aws_sns.md",version:"current",sidebar:"docs",previous:{title:"aws_s3",permalink:"/docs/components/outputs/aws_s3"},next:{title:"aws_sqs",permalink:"/docs/components/outputs/aws_sqs"}},b=[{value:"Credentials",id:"credentials",children:[]},{value:"Performance",id:"performance",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>topic_arn</code>",id:"topic_arn",children:[]},{value:"<code>max_in_flight</code>",id:"max_in_flight",children:[]},{value:"<code>timeout</code>",id:"timeout",children:[]},{value:"<code>region</code>",id:"region",children:[]},{value:"<code>endpoint</code>",id:"endpoint",children:[]},{value:"<code>credentials</code>",id:"credentials-1",children:[]},{value:"<code>credentials.profile</code>",id:"credentialsprofile",children:[]},{value:"<code>credentials.id</code>",id:"credentialsid",children:[]},{value:"<code>credentials.secret</code>",id:"credentialssecret",children:[]},{value:"<code>credentials.token</code>",id:"credentialstoken",children:[]},{value:"<code>credentials.role</code>",id:"credentialsrole",children:[]},{value:"<code>credentials.role_external_id</code>",id:"credentialsrole_external_id",children:[]}]}],p={toc:b};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sends messages to an AWS SNS topic."),Object(i.b)("p",null,"Introduced in version 3.36.0."),Object(i.b)(o.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"common",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\noutput:\n  aws_sns:\n    topic_arn: ""\n    max_in_flight: 1\n    region: eu-west-1\n'))),Object(i.b)(c.a,{value:"advanced",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\noutput:\n  aws_sns:\n    topic_arn: ""\n    max_in_flight: 1\n    timeout: 5s\n    region: eu-west-1\n    endpoint: ""\n    credentials:\n      profile: ""\n      id: ""\n      secret: ""\n      token: ""\n      role: ""\n      role_external_id: ""\n')))),Object(i.b)("h3",{id:"credentials"},"Credentials"),Object(i.b)("p",null,"By default Benthos will use a shared credentials file when connecting to AWS\nservices. It's also possible to set them explicitly at the component level,\nallowing you to transfer data across accounts. You can find out more\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/aws"}),"in this document"),"."),Object(i.b)("h2",{id:"performance"},"Performance"),Object(i.b)("p",null,"This output benefits from sending multiple messages in flight in parallel for\nimproved performance. You can tune the max number of in flight messages with the\nfield ",Object(i.b)("inlineCode",{parentName:"p"},"max_in_flight"),"."),Object(i.b)("h2",{id:"fields"},"Fields"),Object(i.b)("h3",{id:"topic_arn"},Object(i.b)("inlineCode",{parentName:"h3"},"topic_arn")),Object(i.b)("p",null,"The topic to publish to."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"max_in_flight"},Object(i.b)("inlineCode",{parentName:"h3"},"max_in_flight")),Object(i.b)("p",null,"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"number"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},"1"),"  "),Object(i.b)("h3",{id:"timeout"},Object(i.b)("inlineCode",{parentName:"h3"},"timeout")),Object(i.b)("p",null,"The maximum period to wait on an upload before abandoning it and reattempting."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"5s"'),"  "),Object(i.b)("h3",{id:"region"},Object(i.b)("inlineCode",{parentName:"h3"},"region")),Object(i.b)("p",null,"The AWS region to target."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'"eu-west-1"'),"  "),Object(i.b)("h3",{id:"endpoint"},Object(i.b)("inlineCode",{parentName:"h3"},"endpoint")),Object(i.b)("p",null,"Allows you to specify a custom endpoint for the AWS API."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentials-1"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials")),Object(i.b)("p",null,"Optional manual configuration of AWS credentials to use. More information can be found ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/aws"}),"in this document"),"."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(i.b)("h3",{id:"credentialsprofile"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.profile")),Object(i.b)("p",null,"A profile from ",Object(i.b)("inlineCode",{parentName:"p"},"~/.aws/credentials")," to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialsid"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.id")),Object(i.b)("p",null,"The ID of credentials to use."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialssecret"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.secret")),Object(i.b)("p",null,"The secret for the credentials being used."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialstoken"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.token")),Object(i.b)("p",null,"The token for the credentials being used, required when using short term credentials."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialsrole"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.role")),Object(i.b)("p",null,"A role ARN to assume."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(i.b)("h3",{id:"credentialsrole_external_id"},Object(i.b)("inlineCode",{parentName:"h3"},"credentials.role_external_id")),Object(i.b)("p",null,"An external ID to provide when assuming a role."),Object(i.b)("p",null,"Type: ",Object(i.b)("inlineCode",{parentName:"p"},"string"),Object(i.b)("br",{parentName:"p"}),"\n","Default: ",Object(i.b)("inlineCode",{parentName:"p"},'""'),"  "))}u.isMDXComponent=!0},411:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return t?r.a.createElement(m,c(c({ref:n},s),{},{components:t})):r.a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},412:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},413:function(e,n,t){"use strict";var a=t(0),r=t(414);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},415:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(413),o=t(412),c=t(56),l=t.n(c),s=37,b=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,p=e.values,u=e.groupId,d=e.className,m=Object(i.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(c),h=j[0],v=j[1],g=a.Children.toArray(e.children);if(null!=u){var y=f[u];null!=y&&y!==h&&p.some((function(e){return e.value===y}))&&v(y)}var N=function(e){v(e),null!=u&&O(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},p.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===n,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":h===n}),key:n,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case b:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case s:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(w,e.target,e)},onFocus:function(){return N(n)},onClick:function(){N(n)}},t)}))),n?Object(a.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==h})}))))}},416:function(e,n,t){"use strict";var a=t(3),r=t(0),i=t.n(r);n.a=function(e){var n=e.children,t=e.hidden,r=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:t,className:r}),n)}}}]);
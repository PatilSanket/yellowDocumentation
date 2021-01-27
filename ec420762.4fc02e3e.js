(window.webpackJsonp=window.webpackJsonp||[]).push([[304],{381:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(7),r=(n(0),n(411)),c=n(415),o=n(416),b={title:"kinesis_firehose",type:"output",status:"deprecated",categories:["Services","AWS"]},l={unversionedId:"components/outputs/kinesis_firehose",id:"components/outputs/kinesis_firehose",isDocsHomePage:!1,title:"kinesis_firehose",description:"\x3c!--",source:"@site/docs/components/outputs/kinesis_firehose.md",slug:"/components/outputs/kinesis_firehose",permalink:"/docs/components/outputs/kinesis_firehose",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/outputs/kinesis_firehose.md",version:"current",sidebar:"docs",previous:{title:"kinesis",permalink:"/docs/components/outputs/kinesis"},next:{title:"s3",permalink:"/docs/components/outputs/s3"}},s=[{value:"Alternatives",id:"alternatives",children:[{value:"Credentials",id:"credentials",children:[]}]},{value:"Performance",id:"performance",children:[]},{value:"Fields",id:"fields",children:[{value:"<code>stream</code>",id:"stream",children:[]},{value:"<code>max_in_flight</code>",id:"max_in_flight",children:[]},{value:"<code>batching</code>",id:"batching",children:[]},{value:"<code>batching.count</code>",id:"batchingcount",children:[]},{value:"<code>batching.byte_size</code>",id:"batchingbyte_size",children:[]},{value:"<code>batching.period</code>",id:"batchingperiod",children:[]},{value:"<code>batching.check</code>",id:"batchingcheck",children:[]},{value:"<code>batching.processors</code>",id:"batchingprocessors",children:[]},{value:"<code>region</code>",id:"region",children:[]},{value:"<code>endpoint</code>",id:"endpoint",children:[]},{value:"<code>credentials</code>",id:"credentials-1",children:[]},{value:"<code>credentials.profile</code>",id:"credentialsprofile",children:[]},{value:"<code>credentials.id</code>",id:"credentialsid",children:[]},{value:"<code>credentials.secret</code>",id:"credentialssecret",children:[]},{value:"<code>credentials.token</code>",id:"credentialstoken",children:[]},{value:"<code>credentials.role</code>",id:"credentialsrole",children:[]},{value:"<code>credentials.role_external_id</code>",id:"credentialsrole_external_id",children:[]},{value:"<code>max_retries</code>",id:"max_retries",children:[]},{value:"<code>backoff</code>",id:"backoff",children:[]},{value:"<code>backoff.initial_interval</code>",id:"backoffinitial_interval",children:[]},{value:"<code>backoff.max_interval</code>",id:"backoffmax_interval",children:[]},{value:"<code>backoff.max_elapsed_time</code>",id:"backoffmax_elapsed_time",children:[]}]}],p={toc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"DEPRECATED")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This component is deprecated and will be removed in the next major version release. Please consider moving onto ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#alternatives"}),"alternative components"),"."))),Object(r.b)("p",null,"Sends messages to a Kinesis Firehose delivery stream."),Object(r.b)(c.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(o.a,{value:"common",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Common config fields, showing default values\noutput:\n  kinesis_firehose:\n    stream: ""\n    max_in_flight: 1\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n    region: eu-west-1\n'))),Object(r.b)(o.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\noutput:\n  kinesis_firehose:\n    stream: ""\n    max_in_flight: 1\n    batching:\n      count: 0\n      byte_size: 0\n      period: ""\n      check: ""\n      processors: []\n    region: eu-west-1\n    endpoint: ""\n    credentials:\n      profile: ""\n      id: ""\n      secret: ""\n      token: ""\n      role: ""\n      role_external_id: ""\n    max_retries: 0\n    backoff:\n      initial_interval: 1s\n      max_interval: 5s\n      max_elapsed_time: 30s\n')))),Object(r.b)("h2",{id:"alternatives"},"Alternatives"),Object(r.b)("p",null,"This output has been renamed to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/outputs/aws_kinesis_firehose"}),Object(r.b)("inlineCode",{parentName:"a"},"aws_kinesis_firehose")),"."),Object(r.b)("h3",{id:"credentials"},"Credentials"),Object(r.b)("p",null,"By default Benthos will use a shared credentials file when connecting to AWS\nservices. It's also possible to set them explicitly at the component level,\nallowing you to transfer data across accounts. You can find out more\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/aws"}),"in this document"),"."),Object(r.b)("h2",{id:"performance"},"Performance"),Object(r.b)("p",null,"This output benefits from sending multiple messages in flight in parallel for\nimproved performance. You can tune the max number of in flight messages with the\nfield ",Object(r.b)("inlineCode",{parentName:"p"},"max_in_flight"),"."),Object(r.b)("p",null,"This output benefits from sending messages as a batch for improved performance.\nBatches can be formed at both the input and output level. You can find out more\n",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"in this doc"),"."),Object(r.b)("h2",{id:"fields"},"Fields"),Object(r.b)("h3",{id:"stream"},Object(r.b)("inlineCode",{parentName:"h3"},"stream")),Object(r.b)("p",null,"The stream to publish messages to."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"max_in_flight"},Object(r.b)("inlineCode",{parentName:"h3"},"max_in_flight")),Object(r.b)("p",null,"The maximum number of messages to have in flight at a given time. Increase this to improve throughput."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"1"),"  "),Object(r.b)("h3",{id:"batching"},Object(r.b)("inlineCode",{parentName:"h3"},"batching")),Object(r.b)("p",null,"Allows you to configure a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration/batching"}),"batching policy"),"."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\nbatching:\n  byte_size: 5000\n  count: 0\n  period: 1s\n\nbatching:\n  count: 10\n  period: 1s\n\nbatching:\n  check: this.contains("END BATCH")\n  count: 0\n  period: 1m\n')),Object(r.b)("h3",{id:"batchingcount"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.count")),Object(r.b)("p",null,"A number of messages at which the batch should be flushed. If ",Object(r.b)("inlineCode",{parentName:"p"},"0")," disables count based batching."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(r.b)("h3",{id:"batchingbyte_size"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.byte_size")),Object(r.b)("p",null,"An amount of bytes at which the batch should be flushed. If ",Object(r.b)("inlineCode",{parentName:"p"},"0")," disables size based batching."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(r.b)("h3",{id:"batchingperiod"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.period")),Object(r.b)("p",null,"A period in which an incomplete batch should be flushed regardless of its size."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nperiod: 1s\n\nperiod: 1m\n\nperiod: 500ms\n")),Object(r.b)("h3",{id:"batchingcheck"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.check")),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/bloblang/about/"}),"Bloblang query")," that should return a boolean value indicating whether a message should end a batch."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# Examples\n\ncheck: this.type == "end_of_transaction"\n')),Object(r.b)("h3",{id:"batchingprocessors"},Object(r.b)("inlineCode",{parentName:"h3"},"batching.processors")),Object(r.b)("p",null,"A list of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/about"}),"processors")," to apply to a batch as it is flushed. This allows you to aggregate and archive the batch however you see fit. Please note that all resulting messages are flushed as a single batch, therefore splitting the batch into smaller batches using these processors is a no-op."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"array"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nprocessors:\n  - archive:\n      format: lines\n\nprocessors:\n  - archive:\n      format: json_array\n\nprocessors:\n  - merge_json: {}\n")),Object(r.b)("h3",{id:"region"},Object(r.b)("inlineCode",{parentName:"h3"},"region")),Object(r.b)("p",null,"The AWS region to target."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"eu-west-1"'),"  "),Object(r.b)("h3",{id:"endpoint"},Object(r.b)("inlineCode",{parentName:"h3"},"endpoint")),Object(r.b)("p",null,"Allows you to specify a custom endpoint for the AWS API."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentials-1"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials")),Object(r.b)("p",null,"Optional manual configuration of AWS credentials to use. More information can be found ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/guides/aws"}),"in this document"),"."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(r.b)("h3",{id:"credentialsprofile"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.profile")),Object(r.b)("p",null,"A profile from ",Object(r.b)("inlineCode",{parentName:"p"},"~/.aws/credentials")," to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialsid"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.id")),Object(r.b)("p",null,"The ID of credentials to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialssecret"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.secret")),Object(r.b)("p",null,"The secret for the credentials being used."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialstoken"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.token")),Object(r.b)("p",null,"The token for the credentials being used, required when using short term credentials."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialsrole"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.role")),Object(r.b)("p",null,"A role ARN to assume."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"credentialsrole_external_id"},Object(r.b)("inlineCode",{parentName:"h3"},"credentials.role_external_id")),Object(r.b)("p",null,"An external ID to provide when assuming a role."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"max_retries"},Object(r.b)("inlineCode",{parentName:"h3"},"max_retries")),Object(r.b)("p",null,"The maximum number of retries before giving up on the request. If set to zero there is no discrete limit."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"0"),"  "),Object(r.b)("h3",{id:"backoff"},Object(r.b)("inlineCode",{parentName:"h3"},"backoff")),Object(r.b)("p",null,"Control time intervals between retry attempts."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(r.b)("h3",{id:"backoffinitial_interval"},Object(r.b)("inlineCode",{parentName:"h3"},"backoff.initial_interval")),Object(r.b)("p",null,"The initial period to wait between retry attempts."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"1s"'),"  "),Object(r.b)("h3",{id:"backoffmax_interval"},Object(r.b)("inlineCode",{parentName:"h3"},"backoff.max_interval")),Object(r.b)("p",null,"The maximum period to wait between retry attempts."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"5s"'),"  "),Object(r.b)("h3",{id:"backoffmax_elapsed_time"},Object(r.b)("inlineCode",{parentName:"h3"},"backoff.max_elapsed_time")),Object(r.b)("p",null,"The maximum period to wait before retry attempts are abandoned. If zero then no limit is used."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"30s"'),"  "))}d.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?i.a.createElement(m,o(o({ref:t},l),{},{components:n})):i.a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(i&&(i+=" "),i+=n);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,n=0,i="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(i&&(i+=" "),i+=t);return i}},413:function(e,t,n){"use strict";var a=n(0),i=n(414);t.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)(void 0);t.a=i},415:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(413),c=n(412),o=n(56),b=n.n(o),l=37,s=39;t.a=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,u=e.className,m=Object(r.a)(),h=m.tabGroupChoices,O=m.setTabGroupChoices,f=Object(a.useState)(o),j=f[0],g=f[1],v=a.Children.toArray(e.children);if(null!=d){var N=h[d];null!=N&&N!==j&&p.some((function(e){return e.value===N}))&&g(N)}var y=function(e){g(e),null!=d&&O(d,e)},C=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":n},u)},p.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(c.a)("tabs__item",b.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case s:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},n)}))),t?Object(a.cloneElement)(v.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},416:function(e,t,n){"use strict";var a=n(3),i=n(0),r=n.n(i);t.a=function(e){var t=e.children,n=e.hidden,i=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:i}),t)}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},u=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||r;return n?c.a.createElement(m,l(l({ref:t},s),{},{components:n})):c.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function a(e){var t,n,c="";if("string"==typeof e||"number"==typeof e)c+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(c&&(c+=" "),c+=n);else for(t in e)e[t]&&(c&&(c+=" "),c+=t);return c}t.a=function(){for(var e,t,n=0,c="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(c&&(c+=" "),c+=t);return c}},413:function(e,t,n){"use strict";var a=n(0),c=n(414);t.a=function(){var e=Object(a.useContext)(c.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var a=n(0),c=Object(a.createContext)(void 0);t.a=c},415:function(e,t,n){"use strict";var a=n(0),c=n.n(a),r=n(413),i=n(412),l=n(56),o=n.n(l),s=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,p=e.values,d=e.groupId,u=e.className,m=Object(r.a)(),f=m.tabGroupChoices,O=m.setTabGroupChoices,j=Object(a.useState)(l),h=j[0],_=j[1],y=a.Children.toArray(e.children);if(null!=d){var v=f[d];null!=v&&v!==h&&p.some((function(e){return e.value===v}))&&_(v)}var N=function(e){_(e),null!=d&&O(d,e)},g=[];return c.a.createElement("div",null,c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},u)},p.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):c.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},416:function(e,t,n){"use strict";var a=n(3),c=n(0),r=n.n(c);t.a=function(e){var t=e.children,n=e.hidden,c=e.className;return r.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:c}),t)}},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var a=n(3),c=n(7),r=(n(0),n(411)),i=n(415),l=n(416),o={title:"nsq",type:"input",status:"stable",categories:["Services"]},s={unversionedId:"components/inputs/nsq",id:"components/inputs/nsq",isDocsHomePage:!1,title:"nsq",description:"\x3c!--",source:"@site/docs/components/inputs/nsq.md",slug:"/components/inputs/nsq",permalink:"/docs/components/inputs/nsq",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/inputs/nsq.md",version:"current",sidebar:"docs",previous:{title:"nats_stream",permalink:"/docs/components/inputs/nats_stream"},next:{title:"read_until",permalink:"/docs/components/inputs/read_until"}},b=[{value:"Fields",id:"fields",children:[{value:"<code>nsqd_tcp_addresses</code>",id:"nsqd_tcp_addresses",children:[]},{value:"<code>lookupd_http_addresses</code>",id:"lookupd_http_addresses",children:[]},{value:"<code>tls</code>",id:"tls",children:[]},{value:"<code>tls.enabled</code>",id:"tlsenabled",children:[]},{value:"<code>tls.skip_cert_verify</code>",id:"tlsskip_cert_verify",children:[]},{value:"<code>tls.root_cas_file</code>",id:"tlsroot_cas_file",children:[]},{value:"<code>tls.client_certs</code>",id:"tlsclient_certs",children:[]},{value:"<code>tls.client_certs[].cert</code>",id:"tlsclient_certscert",children:[]},{value:"<code>tls.client_certs[].key</code>",id:"tlsclient_certskey",children:[]},{value:"<code>tls.client_certs[].cert_file</code>",id:"tlsclient_certscert_file",children:[]},{value:"<code>tls.client_certs[].key_file</code>",id:"tlsclient_certskey_file",children:[]},{value:"<code>topic</code>",id:"topic",children:[]},{value:"<code>channel</code>",id:"channel",children:[]},{value:"<code>user_agent</code>",id:"user_agent",children:[]},{value:"<code>max_in_flight</code>",id:"max_in_flight",children:[]}]}],p={toc:b};function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Subscribe to an NSQ instance topic and channel."),Object(r.b)(i.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(r.b)(l.a,{value:"common",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Common config fields, showing default values\ninput:\n  nsq:\n    nsqd_tcp_addresses:\n      - localhost:4150\n    lookupd_http_addresses:\n      - localhost:4161\n    topic: benthos_messages\n    channel: benthos_stream\n    user_agent: benthos_consumer\n    max_in_flight: 100\n"))),Object(r.b)(l.a,{value:"advanced",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'# All config fields, showing default values\ninput:\n  nsq:\n    nsqd_tcp_addresses:\n      - localhost:4150\n    lookupd_http_addresses:\n      - localhost:4161\n    tls:\n      enabled: false\n      skip_cert_verify: false\n      root_cas_file: ""\n      client_certs: []\n    topic: benthos_messages\n    channel: benthos_stream\n    user_agent: benthos_consumer\n    max_in_flight: 100\n')))),Object(r.b)("h2",{id:"fields"},"Fields"),Object(r.b)("h3",{id:"nsqd_tcp_addresses"},Object(r.b)("inlineCode",{parentName:"h3"},"nsqd_tcp_addresses")),Object(r.b)("p",null,"A list of nsqd addresses to connect to."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"array"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'["localhost:4150"]'),"  "),Object(r.b)("h3",{id:"lookupd_http_addresses"},Object(r.b)("inlineCode",{parentName:"h3"},"lookupd_http_addresses")),Object(r.b)("p",null,"A list of nsqlookupd addresses to connect to."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"array"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'["localhost:4161"]'),"  "),Object(r.b)("h3",{id:"tls"},Object(r.b)("inlineCode",{parentName:"h3"},"tls")),Object(r.b)("p",null,"Custom TLS settings can be used to override system defaults."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"object"),"  "),Object(r.b)("h3",{id:"tlsenabled"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.enabled")),Object(r.b)("p",null,"Whether custom TLS settings are enabled."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"bool"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(r.b)("h3",{id:"tlsskip_cert_verify"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.skip_cert_verify")),Object(r.b)("p",null,"Whether to skip server side certificate verification."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"bool"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"false"),"  "),Object(r.b)("h3",{id:"tlsroot_cas_file"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.root_cas_file")),Object(r.b)("p",null,"An optional path of a root certificate authority file to use. This is a file, often with a .pem extension, containing a certificate chain from the parent trusted root certificate, to possible intermediate signing certificates, to the host certificate."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nroot_cas_file: ./root_cas.pem\n")),Object(r.b)("h3",{id:"tlsclient_certs"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs")),Object(r.b)("p",null,"A list of client certificates to use. For each certificate either the fields ",Object(r.b)("inlineCode",{parentName:"p"},"cert")," and ",Object(r.b)("inlineCode",{parentName:"p"},"key"),", or ",Object(r.b)("inlineCode",{parentName:"p"},"cert_file")," and ",Object(r.b)("inlineCode",{parentName:"p"},"key_file")," should be specified, but not both."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"array"),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\nclient_certs:\n  - cert: foo\n    key: bar\n\nclient_certs:\n  - cert_file: ./example.pem\n    key_file: ./example.key\n")),Object(r.b)("h3",{id:"tlsclient_certscert"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert")),Object(r.b)("p",null,"A plain text certificate to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"tlsclient_certskey"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key")),Object(r.b)("p",null,"A plain text certificate key to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"tlsclient_certscert_file"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].cert_file")),Object(r.b)("p",null,"The path to a certificate to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"tlsclient_certskey_file"},Object(r.b)("inlineCode",{parentName:"h3"},"tls.client_certs[].key_file")),Object(r.b)("p",null,"The path of a certificate key to use."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'""'),"  "),Object(r.b)("h3",{id:"topic"},Object(r.b)("inlineCode",{parentName:"h3"},"topic")),Object(r.b)("p",null,"The topic to consume from."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"benthos_messages"'),"  "),Object(r.b)("h3",{id:"channel"},Object(r.b)("inlineCode",{parentName:"h3"},"channel")),Object(r.b)("p",null,"The channel to consume from."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"benthos_stream"'),"  "),Object(r.b)("h3",{id:"user_agent"},Object(r.b)("inlineCode",{parentName:"h3"},"user_agent")),Object(r.b)("p",null,"A user agent to assume when connecting."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"string"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},'"benthos_consumer"'),"  "),Object(r.b)("h3",{id:"max_in_flight"},Object(r.b)("inlineCode",{parentName:"h3"},"max_in_flight")),Object(r.b)("p",null,"The maximum number of pending messages to consume at any given time."),Object(r.b)("p",null,"Type: ",Object(r.b)("inlineCode",{parentName:"p"},"number"),Object(r.b)("br",{parentName:"p"}),"\n","Default: ",Object(r.b)("inlineCode",{parentName:"p"},"100"),"  "))}d.isMDXComponent=!0}}]);
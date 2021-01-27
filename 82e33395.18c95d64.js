(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{263:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(411)),i={title:"Bloblang Beta",author:"Ashley Jeffs",author_url:"https://github.com/Jeffail",author_image_url:"/img/ash.jpg",description:"Available in v3.13",keywords:["benthos","bloblang","go","golang","stream processor","mapping"],tags:["Bloblang"]},l={permalink:"/blog/2020/05/10/bloblang-beta",source:"@site/blog/2020-05-10-bloblang-beta.md",description:"Available in v3.13",date:"2020-05-10T00:00:00.000Z",tags:[{label:"Bloblang",permalink:"/blog/tags/bloblang"}],title:"Bloblang Beta",readingTime:1.295,truncated:!0,prevItem:{title:"Powered Up Workflows",permalink:"/blog/2020/08/30/improved-workflows"},nextItem:{title:"Sneak Peek at Bloblang",permalink:"/blog/2020/04/18/sneak-peek-at-bloblang"}},c=[{value:"The Motivation",id:"the-motivation",children:[]}],p={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"As of this weekend (and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Jeffail/benthos/releases/tag/v3.13.0"}),"Benthos v3.13"),") you can now use a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/processors/bloblang"}),Object(r.b)("inlineCode",{parentName:"a"},"bloblang")," processor")," and complementary ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/components/conditions/bloblang"}),"condition"),". These components are in a beta phase, which means that based on feedback the mapping language might change in minor ways in upcoming minor releases."),Object(r.b)("h2",{id:"the-motivation"},"The Motivation"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/blog/2020/04/18/sneak-peek-at-bloblang"}),"In the last post")," I outlined my motivations for experimenting with a mapping language. Words are stupid and boring and so to illustrate why a mapping language kicks ass here's a config example using the old processors compared to the new one. Keep in mind that the new version is simpler ",Object(r.b)("em",{parentName:"p"},"and")," performs better."),Object(r.b)("p",null,"Using old processors:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  processors:\n  - metadata:\n      operator: set\n      key: bar\n      value: ${!json_field:foo.bar} \n\n  - json:\n      operator: delete\n      path: foo.bar\n\n  - json:\n      operator: set\n      path: foo.topic\n      value: ${!metadata:topic} \n\n  - metadata:\n      operator: delete\n      key: topic\n\n  - conditional:\n      condition:\n        jmespath:\n          query: \"foo.baz == 'thing'\"\n      processors:\n      - json:\n          operator: set\n          path: foo.thing_id\n          value: ${!uuid_v4}\n")),Object(r.b)("p",null,"Using Bloblang:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'pipeline:\n  processors:\n  - bloblang: |\n      root = this\n\n      foo.topic = meta("topic")\n      meta topic = deleted()\n\n      meta bar = foo.bar\n      foo.bar = deleted()\n\n      foo.thing_id = match {\n        foo.baz == "thing" => uuid_v4()\n      }\n')),Object(r.b)("p",null,"My ultimate intention is to completely eradicate the need for a ",Object(r.b)("inlineCode",{parentName:"p"},"json"),", ",Object(r.b)("inlineCode",{parentName:"p"},"metadata")," and ",Object(r.b)("inlineCode",{parentName:"p"},"text")," processor, as well as a range of others. However, I'll need as much help as possible to get the language right, so please consider testing and feeding back on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Jeffail/benthos/issues/439/"}),"Github"),", the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://gitter.im/jeffail-benthos/community"}),"Gitter channel"),", or event @ me ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/Jeffail"}),"on Twitter")," for the good of blobkind."))}s.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(n),u=a,f=b["".concat(i,".").concat(u)]||b[u]||m[u]||r;return n?o.a.createElement(f,l(l({ref:t},p),{},{components:n})):o.a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);
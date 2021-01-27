(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(411)),s=n(415),i=n(416),c={title:"workflow",type:"processor",status:"beta",categories:["Composition"]},l={unversionedId:"components/processors/workflow",id:"components/processors/workflow",isDocsHomePage:!1,title:"workflow",description:"\x3c!--",source:"@site/docs/components/processors/workflow.md",slug:"/components/processors/workflow",permalink:"/docs/components/processors/workflow",editUrl:"https://github.com/Jeffail/benthos/edit/master/website/docs/components/processors/workflow.md",version:"current",sidebar:"docs",previous:{title:"while",permalink:"/docs/components/processors/while"},next:{title:"xml",permalink:"/docs/components/processors/xml"}},b=[{value:"Why Use a Workflow",id:"why-use-a-workflow",children:[{value:"Performance",id:"performance",children:[]},{value:"Simplifying Processor Topology",id:"simplifying-processor-topology",children:[]}]},{value:"Fields",id:"fields",children:[{value:"<code>meta_path</code>",id:"meta_path",children:[]},{value:"<code>order</code>",id:"order",children:[]},{value:"<code>branch_resources</code>",id:"branch_resources",children:[]},{value:"<code>branches</code>",id:"branches",children:[]}]},{value:"Examples",id:"examples",children:[]},{value:"Structured Metadata",id:"structured-metadata",children:[]},{value:"Resources",id:"resources",children:[{value:"Resource Error Conditions",id:"resource-error-conditions",children:[]}]},{value:"Error Handling",id:"error-handling",children:[]}],p={toc:b};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"BETA: This component is mostly stable but breaking changes could still be made outside of major version releases if a fundamental problem with the component is found."),Object(o.b)("p",null,"Executes a topology of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/branch"}),Object(o.b)("inlineCode",{parentName:"a"},"branch")," processors"),",\nperforming them in parallel where possible."),Object(o.b)(s.a,{defaultValue:"common",values:[{label:"Common",value:"common"},{label:"Advanced",value:"advanced"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"common",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Common config fields, showing default values\nworkflow:\n  meta_path: meta.workflow\n  order: []\n  branches: {}\n"))),Object(o.b)(i.a,{value:"advanced",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# All config fields, showing default values\nworkflow:\n  meta_path: meta.workflow\n  order: []\n  branch_resources: []\n  branches: {}\n")))),Object(o.b)("h2",{id:"why-use-a-workflow"},"Why Use a Workflow"),Object(o.b)("h3",{id:"performance"},"Performance"),Object(o.b)("p",null,"Most of the time the best way to compose processors is also the simplest, just configure them in series. This is because processors are often CPU bound, low-latency, and you can gain vertical scaling by increasing the number of processor pipeline threads, allowing Benthos to process ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/processing_pipelines"}),"multiple messages in parallel"),"."),Object(o.b)("p",null,"However, some processors such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/http"}),Object(o.b)("inlineCode",{parentName:"a"},"http")),", ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/lambda"}),Object(o.b)("inlineCode",{parentName:"a"},"lambda"))," or ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/cache"}),Object(o.b)("inlineCode",{parentName:"a"},"cache"))," interact with external services and therefore spend most of their time waiting for a response. These processors tend to be high-latency and low CPU activity, which causes messages to process slowly."),Object(o.b)("p",null,"When a processing pipeline contains multiple network processors that aren't dependent on each other we can benefit from performing these processors in parallel for each individual message, reducing the overall message processing latency."),Object(o.b)("h3",{id:"simplifying-processor-topology"},"Simplifying Processor Topology"),Object(o.b)("p",null,"A workflow is often expressed as a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"}),"DAG")," of processing stages, where each stage can result in N possible next stages, until finally the flow ends at an exit node."),Object(o.b)("p",null,"For example, if we had processing stages A, B, C and D, where stage A could result in either stage B or C being next, always followed by D, it might look something like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"     /--\x3e B --\\\nA --|          |--\x3e D\n     \\--\x3e C --/\n")),Object(o.b)("p",null,"This flow would be easy to express in a standard Benthos config, we could simply use a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/switch"}),Object(o.b)("inlineCode",{parentName:"a"},"switch")," processor")," to route to either B or C depending on a condition on the result of A. However, this method of flow control quickly becomes unfeasible as the DAG gets more complicated, imagine expressing this flow using switch processors:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"      /--\x3e B -------------|--\x3e D\n     /                   /\nA --|          /--\x3e E --|\n     \\--\x3e C --|          \\\n               \\----------|--\x3e F\n")),Object(o.b)("p",null,"And imagine doing so knowing that the diagram is subject to change over time. Yikes! Instead, with a workflow we can either trust it to automatically resolve the DAG or express it manually as simply as ",Object(o.b)("inlineCode",{parentName:"p"},"order: [ [ A ], [ B, C ], [ E ], [ D, F ] ]"),", and the conditional logic for determining if a stage is executed is defined as part of the branch itself."),Object(o.b)("h2",{id:"fields"},"Fields"),Object(o.b)("h3",{id:"meta_path"},Object(o.b)("inlineCode",{parentName:"h3"},"meta_path")),Object(o.b)("p",null,"A ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/field_paths"}),"dot path")," indicating where to store and reference ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#structured-metadata"}),"structured metadata")," about the workflow execution."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},'"meta.workflow"'),"  "),Object(o.b)("h3",{id:"order"},Object(o.b)("inlineCode",{parentName:"h3"},"order")),Object(o.b)("p",null,"An explicit declaration of branch ordered tiers, which describes the order in which parallel tiers of branches should be executed. Branches should be identified by the name as they are configured in the field ",Object(o.b)("inlineCode",{parentName:"p"},"branches"),". It's also possible to specify branch processors configured ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#resources"}),"as a resource"),". "),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"array"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"[]"),"  "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"# Examples\n\norder:\n  - - foo\n    - bar\n  - - baz\n\norder:\n  - - foo\n  - - bar\n  - - baz\n")),Object(o.b)("h3",{id:"branch_resources"},Object(o.b)("inlineCode",{parentName:"h3"},"branch_resources")),Object(o.b)("p",null,"An optional list of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/branch"}),Object(o.b)("inlineCode",{parentName:"a"},"branch")," processor")," names that are configured as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#resources"}),"resources"),". These resources will be included in the workflow with any branches configured inline within the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#branches"}),Object(o.b)("inlineCode",{parentName:"a"},"branches"))," field. The order and parallelism in which branches are executed is automatically resolved based on the mappings of each branch. When using resources with an explicit order it is not necessary to list resources in this field."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"array"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"[]"),Object(o.b)("br",{parentName:"p"}),"\n","Requires version 3.38.0 or newer  "),Object(o.b)("h3",{id:"branches"},Object(o.b)("inlineCode",{parentName:"h3"},"branches")),Object(o.b)("p",null,"An object of named ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/components/processors/branch"}),Object(o.b)("inlineCode",{parentName:"a"},"branch")," processors")," that make up the workflow. The order and parallelism in which branches are executed can either be made explicit with the field ",Object(o.b)("inlineCode",{parentName:"p"},"order"),", or if omitted an attempt is made to automatically resolve an ordering based on the mappings of each branch."),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"object"),Object(o.b)("br",{parentName:"p"}),"\n","Default: ",Object(o.b)("inlineCode",{parentName:"p"},"{}"),"  "),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)(s.a,{defaultValue:"Automatic Ordering",values:[{label:"Automatic Ordering",value:"Automatic Ordering"},{label:"Conditional Branches",value:"Conditional Branches"},{label:"Resources",value:"Resources"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"Automatic Ordering",mdxType:"TabItem"},Object(o.b)("p",null,"When the field ",Object(o.b)("inlineCode",{parentName:"p"},"order")," is omitted a best attempt is made to determine a dependency tree between branches based on their request and result mappings. In the following example the branches foo and bar will be executed first in parallel, and afterwards the branch baz will be executed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  processors:\n    - workflow:\n        meta_path: meta.workflow\n        branches:\n          foo:\n            request_map: 'root = \"\"'\n            processors:\n              - http:\n                  url: TODO\n            result_map: 'root.foo = this'\n\n          bar:\n            request_map: 'root = this.body'\n            processors:\n              - lambda:\n                  function: TODO\n            result_map: 'root.bar = this'\n\n          baz:\n            request_map: |\n              root.fooid = this.foo.id\n              root.barstuff = this.bar.content\n            processors:\n              - cache:\n                  resource: TODO\n                  operator: set\n                  key: ${! json(\"fooid\") }\n                  value: ${! json(\"barstuff\") }\n"))),Object(o.b)(i.a,{value:"Conditional Branches",mdxType:"TabItem"},Object(o.b)("p",null,"Branches of a workflow are skipped when the ",Object(o.b)("inlineCode",{parentName:"p"},"request_map")," assigns ",Object(o.b)("inlineCode",{parentName:"p"},"deleted()"),' to the root. In this example the branch A is executed when the document type is "foo", and branch B otherwise. Branch C is executed afterwards and is skipped unless either A or B successfully provided a result at ',Object(o.b)("inlineCode",{parentName:"p"},"tmp.result"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  processors:\n    - workflow:\n        branches:\n          A:\n            request_map: |\n              root = if this.document.type != \"foo\" {\n                  deleted()\n              }\n            processors:\n              - http:\n                  url: TODO\n            result_map: 'root.tmp.result = this'\n\n          B:\n            request_map: |\n              root = if this.document.type == \"foo\" {\n                  deleted()\n              }\n            processors:\n              - lambda:\n                  function: TODO\n            result_map: 'root.tmp.result = this'\n\n          C:\n            request_map: |\n              root = if this.tmp.result != null {\n                  deleted()\n              }\n            processors:\n              - http:\n                  url: TODO_SOMEWHERE_ELSE\n            result_map: 'root.tmp.result = this'\n"))),Object(o.b)(i.a,{value:"Resources",mdxType:"TabItem"},Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"order")," field can be used in order to refer to ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#resources"}),"branch processor resources"),", this can sometimes make your pipeline configuration cleaner, as well as allowing you to reuse branch configurations in order places. It's also possible to mix and match branches configured within the workflow and configured as resources."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"pipeline:\n  processors:\n    - workflow:\n        order: [ [ foo, bar ], [ baz ] ]\n        branches:\n          bar:\n            request_map: 'root = this.body'\n            processors:\n              - lambda:\n                  function: TODO\n            result_map: 'root.bar = this'\n\nresources:\n  processors:\n    foo:\n      branch:\n        request_map: 'root = \"\"'\n        processors:\n          - http:\n              url: TODO\n        result_map: 'root.foo = this'\n\n    baz:\n      branch:\n        request_map: |\n          root.fooid = this.foo.id\n          root.barstuff = this.bar.content\n        processors:\n          - cache:\n              resource: TODO\n              operator: set\n              key: ${! json(\"fooid\") }\n              value: ${! json(\"barstuff\") }\n")))),Object(o.b)("h2",{id:"structured-metadata"},"Structured Metadata"),Object(o.b)("p",null,"When the field ",Object(o.b)("inlineCode",{parentName:"p"},"meta_path")," is non-empty the workflow processor creates an object describing which workflows were successful, skipped or failed for each message and stores the object within the message at the end."),Object(o.b)("p",null,"The object is of the following form:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "succeeded": [ "foo" ],\n    "skipped": [ "bar" ],\n    "failed": {\n        "baz": "the error message from the branch"\n    }\n}\n')),Object(o.b)("p",null,"If a message already has a meta object at the given path when it is processed then the object is used in order to determine which branches have already been performed on the message (or skipped) and can therefore be skipped on this run."),Object(o.b)("p",null,"This is a useful pattern when replaying messages that have failed some branches previously. For example, given the above example object the branches foo and bar would automatically be skipped, and baz would be reattempted."),Object(o.b)("p",null,"The previous meta object will also be preserved in the field ",Object(o.b)("inlineCode",{parentName:"p"},"<meta_path>.previous")," when the new meta object is written, preserving a full record of all workflow executions."),Object(o.b)("p",null,"If a field ",Object(o.b)("inlineCode",{parentName:"p"},"<meta_path>.apply")," exists in the meta object for a message and is an array then it will be used as an explicit list of stages to apply, all other stages will be skipped."),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("p",null,"It's common to configure processors (and other components) ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/resources"}),"as resources")," in order to keep the pipeline configuration cleaner. With the workflow processor you can include branch processors configured as resources within your workflow either by specifying them by name in the field ",Object(o.b)("inlineCode",{parentName:"p"},"order"),", if Benthos doesn't find a branch within the workflow configuration of that name it'll refer to the resources."),Object(o.b)("p",null,"Alternatively, if you do not wish to have an explicit ordering, you can add resource names to the field ",Object(o.b)("inlineCode",{parentName:"p"},"branch_resources")," and they will be included in the workflow with automatic DAG resolution along with any branches configured in the ",Object(o.b)("inlineCode",{parentName:"p"},"branches")," field."),Object(o.b)("h3",{id:"resource-error-conditions"},"Resource Error Conditions"),Object(o.b)("p",null,"There are two error conditions that could potentially occur when resources included in your workflow are mutated, and if you are planning to mutate resources in your workflow it is important that you understand them."),Object(o.b)("p",null,"The first error case is that a resource in the workflow is removed and not replaced, when this happens the workflow will still be executed but the individual branch will fail. This should only happen if you explicitly delete a branch resource, as any mutation operation will create the new resource before removing the old one."),Object(o.b)("p",null,"The second error case is when automatic DAG resolution is being used and a resource in the workflow is changed in a way that breaks the DAG (circular dependencies, etc). When this happens it is impossible to execute the workflow and therefore the processor will fail, which is possible to capture and handle using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/error_handling"}),"standard error handling patterns"),"."),Object(o.b)("h2",{id:"error-handling"},"Error Handling"),Object(o.b)("p",null,"The recommended approach to handle failures within a workflow is to query against the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"#structured-metadata"}),"structured metadata")," it provides, as it provides granular information about exactly which branches failed and which ones succeeded and therefore aren't necessary to perform again."),Object(o.b)("p",null,"For example, if our meta object is stored at the path ",Object(o.b)("inlineCode",{parentName:"p"},"meta.workflow")," and we wanted to check whether a message has failed for any branch we can do that using a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/guides/bloblang/about"}),"Bloblang query")," like ",Object(o.b)("inlineCode",{parentName:"p"},"this.meta.workflow.failed.length() | 0 > 0"),", or to check whether a specific branch failed we can use ",Object(o.b)("inlineCode",{parentName:"p"},'this.exists("meta.workflow.failed.foo")'),"."),Object(o.b)("p",null,"However, if structured metadata is disabled by setting the field ",Object(o.b)("inlineCode",{parentName:"p"},"meta_path")," to empty then the workflow processor instead adds a general error flag to messages when any executed branch fails. In this case it's possible to handle failures using ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/configuration/error_handling"}),"standard error handling patterns"),"."))}d.isMDXComponent=!0},411:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=b(n),u=r,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(h,i(i({ref:t},l),{},{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},412:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},413:function(e,t,n){"use strict";var r=n(0),a=n(414);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},414:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},415:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(413),s=n(412),i=n(56),c=n.n(i),l=37,b=39;t.a=function(e){var t=e.lazy,n=e.block,i=e.defaultValue,p=e.values,d=e.groupId,u=e.className,h=Object(o.a)(),m=h.tabGroupChoices,f=h.setTabGroupChoices,O=Object(r.useState)(i),w=O[0],j=O[1],g=r.Children.toArray(e.children);if(null!=d){var y=m[d];null!=y&&y!==w&&p.some((function(e){return e.value===y}))&&j(y)}var v=function(e){j(e),null!=d&&f(d,e)},N=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":n},u)},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":w===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},416:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=function(e){var t=e.children,n=e.hidden,a=e.className;return o.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:n,className:a}),t)}}}]);
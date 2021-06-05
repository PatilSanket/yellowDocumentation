(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{185:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return s}));var n=a(3),l=a(7),o=(a(0),a(260)),r={id:"create-tables",title:"Creating Tables and Inserting Data"},c={unversionedId:"platform_concepts/data/create-tables",id:"platform_concepts/data/create-tables",isDocsHomePage:!1,title:"Creating Tables and Inserting Data",description:"How to access the Database on the Yellow Messenger platform?",source:"@site/docs/platform_concepts/data/create-tables.md",slug:"/platform_concepts/data/create-tables",permalink:"/docs/platform_concepts/data/create-tables",version:"current",sidebar:"platform_concepts",previous:{title:"Cloud Function",permalink:"/docs/platform_concepts/studio/cloud-function"},next:{title:"Database Search",permalink:"/docs/platform_concepts/data/database-search"}},b=[{value:"How to access the Database on the Yellow Messenger platform?",id:"how-to-access-the-database-on-the-yellow-messenger-platform",children:[]},{value:"Create a Data Base Table",id:"create-a-data-base-table",children:[]},{value:"Downloading Table Offline",id:"downloading-table-offline",children:[]},{value:"Truncating Tables",id:"truncating-tables",children:[]}],i={toc:b};function s(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"how-to-access-the-database-on-the-yellow-messenger-platform"},"How to access the Database on the Yellow Messenger platform?"),Object(o.b)("p",null,"Headover to the ",Object(o.b)("inlineCode",{parentName:"p"},"Data")," tab from the left sidebar to access the database."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/OoM6M6mK2bAI1615891898315.png",alt:"how to access the database"}))),Object(o.b)("h3",{id:"create-a-data-base-table"},"Create a Data Base Table"),Object(o.b)("p",null,"To create a data base you need to design the scehma of the table that will be required for your requirement. Make sure you select the right data type for each field of the records that will be added to your table. "),Object(o.b)("p",null,"Some points that should be keept on mind while creating the table are as below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"You can add a column in the DB later but deleting a column is not allowed once you have added it successfully."),Object(o.b)("li",{parentName:"ul"},"Table name should be lower case without special characters and spaces"),Object(o.b)("li",{parentName:"ul"},"Column name should be lower case without special characters and spaces"),Object(o.b)("li",{parentName:"ul"},"You can add underscore( _ ) in Table or Columne names incase needed for readablilty "),Object(o.b)("li",{parentName:"ul"},"UPDATEDDATE and INSERTEDDATE columns are created by default"),Object(o.b)("li",{parentName:"ul"},"There will be few actions allowed on the table once its created: ",Object(o.b)("inlineCode",{parentName:"li"},"Add Columns"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Truncate"),", ",Object(o.b)("inlineCode",{parentName:"li"},"Drop")," & ",Object(o.b)("inlineCode",{parentName:"li"},"Download"))),Object(o.b)("h4",{id:"step-1-create-new-table"},Object(o.b)("inlineCode",{parentName:"h4"},"Step 1:")," Create New Table"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/mobQ2e2OApqo1613547611511.png",alt:null}))),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/it9Olwbd6Wcj1613547697034.png",alt:null}))),Object(o.b)("p",null,"Once a DB is created you can start saving the user information in your DB as shown in the next steps."),Object(o.b)("h4",{id:"step-2-insert-in-db"},Object(o.b)("inlineCode",{parentName:"h4"},"Step 2:")," Insert in DB"),Object(o.b)("p",null,"To save your user entered inputs in the DB you need to add an Action Node - ",Object(o.b)("inlineCode",{parentName:"p"},"Database")," on the point at which you want to add the details as shown below"),Object(o.b)("p",null,"Click on \u2295 , select Action > Database and select the table on which you want to insert the data."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/fDLcPdIB7kG41613559097722.png",alt:null}))),Object(o.b)("p",null,"Make sure you map the right Step Name with the Column names on your DB so that the unser entered values are inserted into the table."),Object(o.b)("p",null,"Here ",Object(o.b)("inlineCode",{parentName:"p"},"Field")," means the Column Names that you have given in the DB Table and the ",Object(o.b)("inlineCode",{parentName:"p"},"With Value")," parameter is for mapping the appropriate step value to fill in."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/8LR0MiBywueB1613559300319.png",alt:null}))),Object(o.b)("p",null,"Once this is done you can test your flow to confirm if the records are getting inserted to your table. Make sure you have selected the right Data Types for each value else you can keep it as ",Object(o.b)("inlineCode",{parentName:"p"},"String")," for all columns."),Object(o.b)("h4",{id:"step-3-export-db-records-in-csv-file"},Object(o.b)("inlineCode",{parentName:"h4"},"Step 3:")," Export DB Records in CSV File"),Object(o.b)("p",null,"To download the records in bulk you can go to Data on the Platform Dashboard and click ",Object(o.b)("inlineCode",{parentName:"p"},"Table actions")," drop down and click the Download button to download the DB in CSV format. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/A2mhUuox6zAC1613561519647.png",alt:null}))),Object(o.b)("p",null,"Other available actions are as follows:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Add Column"),": To add a new column to the Table."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Truncate"),": To clear all the records in the DB."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Drop"),": To Delete the entire table."),Object(o.b)("h3",{id:"downloading-table-offline"},"Downloading Table Offline"),Object(o.b)("p",null,"Download the table and add/edit/remove any data from this table. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/geXLTc7saBDC1615892768708.png",alt:"Download the table"}))),Object(o.b)("p",null,"Edit the table as you want and save it in CSV format. Please make sure that the headers of the table are not changed. "),Object(o.b)("h3",{id:"truncating-tables"},"Truncating Tables"),Object(o.b)("p",null,"Truncate the table in the database and upload the new updated table. Please make sure you don\u2019t Drop the table. Dropping the table will delete the table entirely. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/8sGWAKv3FORp1615892832779.png",alt:"Truncate table"}))),Object(o.b)("p",null,"Once changes are made, can upload the table in CSV format back on the same page using 'Upload' button. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/NGuXuTaP3lOE1615893169294.png",alt:"Upload CSV"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note")," : When willing to add single record without downloading and uploading, basically without making a fuss.",Object(o.b)("br",{parentName:"p"}),"\n","Click on \u2018Add Record\u2019 and you can add one record at a time."),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"https://cdn.yellowmessenger.com/ISbs9PfBEf121615893406287.png",alt:"Add record"}))))}s.isMDXComponent=!0},260:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=l.a.createContext({}),s=function(e){var t=l.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},u=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(r,".").concat(u)]||p[u]||d[u]||o;return a?l.a.createElement(m,c(c({ref:t},i),{},{components:a})):l.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=u;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var i=2;i<o;i++)r[i]=a[i];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);
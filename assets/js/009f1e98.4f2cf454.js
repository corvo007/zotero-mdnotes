"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3436],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=i,g=p["".concat(s,".").concat(u)]||p[u]||f[u]||r;return n?o.createElement(g,a(a({ref:t},d),{},{components:n})):o.createElement(g,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2783:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return f}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),a=["components"],l={title:"Configuration",sidebar_position:2},s=void 0,c={unversionedId:"getting-started/configuration",id:"getting-started/configuration",title:"Configuration",description:"To access mdnotes preferences, go to Tools > Mdnotes preferences",source:"@site/docs/getting-started/configuration.md",sourceDirName:"getting-started",slug:"/getting-started/configuration",permalink:"/zotero-mdnotes/docs/next/getting-started/configuration",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/docs/getting-started/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Configuration",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/zotero-mdnotes/docs/next/getting-started/installation"},next:{title:"Multi-file Exports (Default)",permalink:"/zotero-mdnotes/docs/next/getting-started/file-organization/multi-file"}},d={},f=[{value:"Export preferences",id:"export-preferences",level:2},{value:"Setting the starting path",id:"setting-the-starting-path",level:3},{value:"File Organization",id:"file-organization",level:3},{value:"Template directory",id:"template-directory",level:3},{value:"Add the created files as linked files to Zotero",id:"add-the-created-files-as-linked-files-to-zotero",level:3},{value:"File naming convention",id:"file-naming-convention",level:2}],p={toc:f};function u(e){var t=e.components,l=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To access ",(0,r.kt)("inlineCode",{parentName:"p"},"mdnotes")," preferences, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools > Mdnotes preferences")),(0,r.kt)("h2",{id:"export-preferences"},"Export preferences"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Mdnotes export preferences",src:n(4988).Z,width:"683",height:"528"})),(0,r.kt)("h3",{id:"setting-the-starting-path"},"Setting the starting path"),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools > Mdnotes preferences")," you can choose the path ",(0,r.kt)("inlineCode",{parentName:"p"},"mdnotes")," will open with any of its menus. The path you select is just the starting point, before saving your files you can navigate to any other directory."),(0,r.kt)("h3",{id:"file-organization"},"File Organization"),(0,r.kt)("p",null,"You can choose to export your content as a ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/getting-started/file-organization/single-file"},"single file")," or ",(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/getting-started/file-organization/multi-file"},"multiple files"),", and will be reflected on the right-click menu.\nWhich configuration to choose depends on your preferences, and on your Zotfile configuration, the figure below illustrates a few of the possibilities based on the default templates:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zotero-mdnotes/docs/next/getting-started/file-organization/multi-file"},"Multi-file")," exports create separate files: one for your notes (blue), one with the item metadata (green) and one for each note (yellow)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zotero-mdnotes/docs/next/getting-started/file-organization/single-file"},"Single-file")," exports add all your content on a single file.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example of files according to the configuration",src:n(1593).Z,width:"794",height:"432"})),(0,r.kt)("h3",{id:"template-directory"},"Template directory"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zotero-mdnotes/docs/next/advanced/templates/defaults"},"Templates")," define how the final Markdown document will look like. Starting on ",(0,r.kt)("a",{parentName:"p",href:"/changelog#v010---2020-11-15"},"v0.1.0")," you can specify a templates directory in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools > Mdnotes preferences"),"."),(0,r.kt)("p",null,"Depending on your choice of ",(0,r.kt)("a",{parentName:"p",href:"#file-organization"},"file organization"),", you'll need to edit different templates."),(0,r.kt)("h3",{id:"add-the-created-files-as-linked-files-to-zotero"},"Add the created files as linked files to Zotero"),(0,r.kt)("p",null,'If you select the "Attach file links to Zotero", the markdown files will be added as ',(0,r.kt)("a",{parentName:"p",href:"https://www.zotero.org/support/attaching_files#stored_files_and_linked_files"},"linked files"),", meaning you can access them by double-clicking on them from inside Zotero:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Include markdown files as linked attachments",src:n(7609).Z,width:"516",height:"218"})),(0,r.kt)("h2",{id:"file-naming-convention"},"File naming convention"),(0,r.kt)("p",null,"In general, I recommend using the ",(0,r.kt)("inlineCode",{parentName:"p"},"citekey")," as title. The exported files will use the prefix and suffix for the type of file being exported, following the pattern ",(0,r.kt)("inlineCode",{parentName:"p"},"<prefix><title><suffix>.md"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Settings for the file naming convention",src:n(1417).Z,width:"683",height:"528"})))}u.isMDXComponent=!0},1593:function(e,t,n){t.Z=n.p+"assets/images/mdnotes-file-config-e521420bb86f4892d2721a869a5afbeb.png"},7609:function(e,t,n){t.Z=n.p+"assets/images/attach-link-to-zotero-29d75051d5c8b2bd9619e7fc0595e2b4.png"},1417:function(e,t,n){t.Z=n.p+"assets/images/mdnotes-export-preferences-2-6d83756325ae775d87ac0f860367afd8.png"},4988:function(e,t,n){t.Z=n.p+"assets/images/mdnotes-export-preferences-8cf6a11d0dad7ed68082b44ae5b394c9.png"}}]);
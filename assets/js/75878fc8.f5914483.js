"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7990],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=o,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7867:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=["components"],i={},s="Changelog",u={type:"mdx",permalink:"/zotero-mdnotes/changelog",source:"@site/src/pages/changelog.md",title:"Changelog",description:"All notable changes to this project will be documented in this file.",frontMatter:{}},p=[{value:"Unreleased",id:"unreleased",level:2},{value:"v0.1.3 - 2021-02-17",id:"v013---2021-02-17",level:2},{value:"v0.1.2 - 2020-11-16",id:"v012---2020-11-16",level:2},{value:"v0.1.1 - 2020-11-16",id:"v011---2020-11-16",level:2},{value:"v0.1.0 - 2020-11-15",id:"v010---2020-11-15",level:2},{value:"v0.0.7 - 2020-09-06",id:"v007---2020-09-06",level:2},{value:"v0.0.6 - 2020-08-25",id:"v006---2020-08-25",level:2},{value:"v0.0.5 - 2020-08-24",id:"v005---2020-08-24",level:2},{value:"v0.0.4 - 2020-08-20",id:"v004---2020-08-20",level:2},{value:"v0.0.3 - 2020-08-01",id:"v003---2020-08-01",level:2},{value:"v0.0.2 - 2020-07-29",id:"v002---2020-07-29",level:2},{value:"v0.0.1 - 202-07-28",id:"v001---202-07-28",level:2}],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"changelog"},"Changelog"),(0,r.kt)("p",null,"All notable changes to this project will be documented in this file."),(0,r.kt)("p",null,"The format is based on ",(0,r.kt)("a",{parentName:"p",href:"https://keepachangelog.com/en/1.0.0/"},"Keep a Changelog"),", and this project adheres to ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org/spec/v2.0.0.html"},"Semantic Versioning"),"."),(0,r.kt)("h2",{id:"unreleased"},"Unreleased"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Block references for the exported Zotero notes.\n",(0,r.kt)("strong",{parentName:"li"},"Important note"),": The block ID is using a hash of the block contents, i.e. if you change your format the block won't match any more."),(0,r.kt)("li",{parentName:"ul"},"The Zotero note export now uses ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/laurent22/joplin-turndown"},"Joplin turndown")," instead of regexp for the html -> md translation.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add custom rules to avoid escaping characters to the turndown converter.\nThe custom rules prevent the escaping of Markdown exports within italics, bold, and ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," tags. It also leaves any ",(0,r.kt)("inlineCode",{parentName:"li"},"<font>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<span>")," tags untranslated."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Note"),": This means you probably have to set up again some of the custom formatting you've added. Some custom rules for the translations can be configured in the hidden preferences with the ",(0,r.kt)("inlineCode",{parentName:"li"},"html2md")," properties, but they now require you to restart Zotero. Please ping me if you need additional rules not included there."))),(0,r.kt)("li",{parentName:"ul"},"Custom placeholders (not yet in the documentation). "),(0,r.kt)("li",{parentName:"ul"},"Added a ",(0,r.kt)("inlineCode",{parentName:"li"},"noteTitle")," placeholder to have different formatting from an item's title."),(0,r.kt)("li",{parentName:"ul"},"Added the ability to customise the text for Zotero links in hidden preferences"),(0,r.kt)("li",{parentName:"ul"},"A few bug fixes")),(0,r.kt)("h2",{id:"v013---2021-02-17"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.1.3"},"v0.1.3")," - 2021-02-17"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Create Standalone Note")," menu is now optional and can be deactivated in the preferences."),(0,r.kt)("li",{parentName:"ul"},"Add separate menu for single-file exports",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Make the Mdnotes menu slightly context-aware. If you select the single-file option under ",(0,r.kt)("inlineCode",{parentName:"li"},"File organization"),", the menu should now be somewhat less confusing. This release also includes better documentation on how to use the single-file config option."))),(0,r.kt)("li",{parentName:"ul"},"Add wiki link format for PDF attachments (#49)"),(0,r.kt)("li",{parentName:"ul"},"Updated documentation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add instructions to update mdnotes to the documentation (#45)"),(0,r.kt)("li",{parentName:"ul"},"Standalone menu is now optional"),(0,r.kt)("li",{parentName:"ul"},"Add details to configuration page for single- and multi-file exports")))),(0,r.kt)("h2",{id:"v012---2020-11-16"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.1.2"},"v0.1.2")," - 2020-11-16"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fixed a bug where Zotero notes would not be exported (due to unsanitized file names)")),(0,r.kt)("h2",{id:"v011---2020-11-16"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.1.1"},"v0.1.1")," - 2020-11-16"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix the export of missing URL fields"),(0,r.kt)("li",{parentName:"ul"},"Fix the attachment as linked files when exporting Zotero notes to markdown."),(0,r.kt)("li",{parentName:"ul"},"Fix broken links"),(0,r.kt)("li",{parentName:"ul"},"Fix formatting for placeholders")),(0,r.kt)("h2",{id:"v010---2020-11-15"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.1.0"},"v0.1.0")," - 2020-11-15"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add support for templates.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Removes unused preferences that are replaced by placeholders."))),(0,r.kt)("li",{parentName:"ul"},"Add custom formatting for fields",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add hidden preference to customize the format of Zotero Notes"))),(0,r.kt)("li",{parentName:"ul"},"The content of the batch export with the single-file setting is now consistent with the split-files settings."),(0,r.kt)("li",{parentName:"ul"},"Remove automatic capitalization of links"),(0,r.kt)("li",{parentName:"ul"},"Add support for standalone markdown notes"),(0,r.kt)("li",{parentName:"ul"},"Zotero notes can now also include tags and related items"),(0,r.kt)("li",{parentName:"ul"},'Renames the "Export Zotero item" menu to "Export to markdown"',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'The menu to export a Zotero note was merged into "Export to markdown"'))),(0,r.kt)("li",{parentName:"ul"},"Add option to use ",(0,r.kt)("inlineCode",{parentName:"li"},"file://")," links for PDF attachments instead of using the URL scheme from Zotero (",(0,r.kt)("inlineCode",{parentName:"li"},"zotero://"),")"),(0,r.kt)("li",{parentName:"ul"},"Hidden option to attach Obsidian URI links after notes are exported."),(0,r.kt)("li",{parentName:"ul"},"Other improvements and bug fixes to make things better under the hood.")),(0,r.kt)("h2",{id:"v007---2020-09-06"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.0.7"},"v0.0.7")," - 2020-09-06"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Move Zotero links to metadata for single files (#9)")),(0,r.kt)("h2",{id:"v006---2020-08-25"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.0.6"},"v0.0.6")," - 2020-08-25"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix create note preference")),(0,r.kt)("h2",{id:"v005---2020-08-24"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.0.5"},"v0.0.5")," - 2020-08-24"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Add hidden preference for links to dates and type"),(0,r.kt)("li",{parentName:"ul"},"Use tabs for preferences")),(0,r.kt)("h2",{id:"v004---2020-08-20"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.0.4"},"v0.0.4")," - 2020-08-20"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fix note names in Item export"),(0,r.kt)("li",{parentName:"ul"},"Add links to PDFs in metadata"),(0,r.kt)("li",{parentName:"ul"},"Changes label for adding notes as linked attachments")),(0,r.kt)("h2",{id:"v003---2020-08-01"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.0.3"},"v0.0.3")," - 2020-08-01"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change date format in Zotfile-extracted note titles to ",(0,r.kt)("inlineCode",{parentName:"li"},"yyyy-mm-dd")," (compatibility with Windows)")),(0,r.kt)("h2",{id:"v002---2020-07-29"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.0.2"},"v0.0.2")," - 2020-07-29"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make user's home the default path"),(0,r.kt)("li",{parentName:"ul"},"Add publication title only if available"),(0,r.kt)("li",{parentName:"ul"},"Fix missing line before annotations header"),(0,r.kt)("li",{parentName:"ul"},"Remove code block formatting from citekey"),(0,r.kt)("li",{parentName:"ul"},"Fix missing publication titles")),(0,r.kt)("h2",{id:"v001---202-07-28"},(0,r.kt)("a",{parentName:"h2",href:"https://github.com/argenos/zotero-mdnotes/releases/tag/0.0.1"},"v0.0.1")," - 202-07-28"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Export Zotero metadata to markdown and creating a file for your own notes.")))}d.isMDXComponent=!0}}]);
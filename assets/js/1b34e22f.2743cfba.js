"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3785],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5309:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Installation",sidebar_position:1},s=void 0,c={unversionedId:"getting-started/installation",id:"version-0.2.0/getting-started/installation",title:"Installation",description:"Requirements",source:"@site/versioned_docs/version-0.2.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/zotero-mdnotes/docs/getting-started/installation",editUrl:"https://github.com/argenos/zotero-mdnotes/edit/develop/docs/versioned_docs/version-0.2.0/getting-started/installation.md",tags:[],version:"0.2.0",sidebarPosition:1,frontMatter:{title:"Installation",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Quick-Start Guide",permalink:"/zotero-mdnotes/docs/quick-start-guide"},next:{title:"Configuration",permalink:"/zotero-mdnotes/docs/getting-started/configuration"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Installing <code>zotero-mdnotes</code>",id:"installing-zotero-mdnotes",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"For zotero-mdnotes to work you'll need to install the following plugins."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://zotfile.com/"},"Zotfile")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://retorque.re/zotero-better-bibtex/"},"BetterBibtex"))),(0,i.kt)("h2",{id:"installing-zotero-mdnotes"},"Installing ",(0,i.kt)("inlineCode",{parentName:"h2"},"zotero-mdnotes")),(0,i.kt)("p",null,"You can install the plugin in Zotero as described ",(0,i.kt)("a",{parentName:"p",href:"https://www.zotero.org/support/plugins"},"here"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To install a plugin in Zotero, download its ",(0,i.kt)("inlineCode",{parentName:"p"},".xpi")," file to your computer. Then, in Zotero, click \u201cTools \u2192 Add-Ons\u201d, then drag the ",(0,i.kt)("inlineCode",{parentName:"p"},".xpi")," for the plugin onto the Add-Ons window that opens")),(0,i.kt)("p",null,"You can grab the latest version of ",(0,i.kt)("inlineCode",{parentName:"p"},"mdnotes")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/argenos/zotero-mdnotes/releases/latest"},"here"),"."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you're using Firefox, make sure to right-click on the ",(0,i.kt)("inlineCode",{parentName:"p"},"xpi")," file and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"Save as")," menu, otherwise Firefox will try to install the xpi as a plugin and will throw an error."))))}m.isMDXComponent=!0}}]);
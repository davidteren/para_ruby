"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="Interface Segregation Principle (ISP)",s={unversionedId:"solid-principles/interface_segregation_principle",id:"solid-principles/interface_segregation_principle",title:"Interface Segregation Principle (ISP)",description:"The Interface Segregation Principle (ISP) is a principle of object-oriented design that states that no client should be forced to depend on methods it does not use. This means that classes should have small, specific interfaces that only include the methods that are actually needed by the client classes. This allows for better code organization and maintainability, as well as flexibility to accommodate future changes in requirements. To implement the ISP, developers can use techniques such as abstraction and composition.",source:"@site/docs/solid-principles/interface_segregation_principle.md",sourceDirName:"solid-principles",slug:"/solid-principles/interface_segregation_principle",permalink:"/para_ruby/docs/solid-principles/interface_segregation_principle",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Liskov Substitution Principle (LSP)",permalink:"/para_ruby/docs/solid-principles/liskov_substitution_principle"},next:{title:"Dependency Inversion Principle (DIP)",permalink:"/para_ruby/docs/solid-principles/dependency_inversion_principle"}},c={},l=[],p={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interface-segregation-principle-isp"},"Interface Segregation Principle (ISP)"),(0,o.kt)("p",null,"The Interface Segregation Principle (ISP) is a principle of object-oriented design that states that no client should be forced to depend on methods it does not use. This means that classes should have small, specific interfaces that only include the methods that are actually needed by the client classes. This allows for better code organization and maintainability, as well as flexibility to accommodate future changes in requirements. To implement the ISP, developers can use techniques such as ",(0,o.kt)("a",{parentName:"p",href:"/para_ruby/docs/glossary/abstraction"},"abstraction")," and ",(0,o.kt)("a",{parentName:"p",href:"/para_ruby/docs/glossary/composition"},"composition"),"."),(0,o.kt)("admonition",{title:"Explain Interface Segregation Principle (ISP) like I'm five",type:"info"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"The Interface Segregation Principle is like a toolbox. In a toolbox, there are different tools for different jobs. For example, there might be a hammer for pounding nails, and a screwdriver for turning screws. And even though the hammer and the screwdriver are both tools, they are not used for the same thing. So if you want to use the hammer, you don't have to look through the whole toolbox to find it. You can just go to the part of the toolbox where the hammers are, and take out the one you need. In object-oriented programming, the tools are like methods, and the toolbox is like an interface. The Interface Segregation Principle says that interfaces should be organized into small, specific parts, so that you can easily find the methods you need without having to look through lots of other methods that you don't need."))))}d.isMDXComponent=!0}}]);
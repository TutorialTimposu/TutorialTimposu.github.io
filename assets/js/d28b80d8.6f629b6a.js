"use strict";(self.webpackChunktimposu=self.webpackChunktimposu||[]).push([[4424],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),s=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(p.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return t?n.createElement(k,o(o({ref:a},u),{},{components:t})):n.createElement(k,o({ref:a},u))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6566:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var n=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={slug:"cara-install-openjdk-17-mac",title:"Cara Install OpenJDK 17 di MacOS",authors:"topekox",tags:["java","openjdk","jdk","macos"]},p=void 0,s={permalink:"/blog/cara-install-openjdk-17-mac",source:"@site/blog/2022-03-21.md",title:"Cara Install OpenJDK 17 di MacOS",description:"Di tutorial ini kita akan melakukan instalasi JDK versi opensource yaitu OpenJDK 17 di MacOS. Versi MacOs yang digunakan adalah MacOS Catalina, cara ini juga bisa juga diterapkan di MacOS versi Sierra, High Sierra, Mojave, dan Big Sur.",date:"2022-03-21T00:00:00.000Z",formattedDate:"March 21, 2022",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"openjdk",permalink:"/blog/tags/openjdk"},{label:"jdk",permalink:"/blog/tags/jdk"},{label:"macos",permalink:"/blog/tags/macos"}],readingTime:.61,truncated:!0,authors:[{name:"Ucup TopekoX",title:"Tutorial Timposu creator",url:"https://topekox.github.io",imageURL:"https://topekox.github.io/assets/images/avatar.jpeg",key:"topekox"}],frontMatter:{slug:"cara-install-openjdk-17-mac",title:"Cara Install OpenJDK 17 di MacOS",authors:"topekox",tags:["java","openjdk","jdk","macos"]},prevItem:{title:"5 Alasan menggunakan Golang untuk Aplikasi Enterpise",permalink:"/blog/alasan-menggunakan-golang-enterprise"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},u={authorsImageUrls:[void 0]},c=[{value:"Download OpenJDK",id:"download-openjdk",level:2},{value:"Install JDK",id:"install-jdk",level:2}],d={toc:c};function m(e){var a=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Di tutorial ini kita akan melakukan instalasi JDK versi opensource yaitu OpenJDK 17 di MacOS. Versi MacOs yang digunakan adalah MacOS Catalina, cara ini juga bisa juga diterapkan di MacOS versi Sierra, High Sierra, Mojave, dan Big Sur."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"OpenJDK adalah JDK alternatif  dari versi Oracle JDK. OpenJDK adalah distribusi JDK yang bersifat Free dan Opensource, sehingga bebas untuk digunakan, baik itu untuk penggunaan pribadi, development maupun untuk tujuan komersil. OpenJDK didistribusikan oleh Oracle dibawah lisensi ",(0,i.kt)("a",{parentName:"p",href:"http://openjdk.java.net/legal/gplv2+ce.html"},"http://openjdk.java.net/legal/gplv2+ce.html")," dan bisa didownload di ",(0,i.kt)("a",{parentName:"p",href:"http://jdk.java.net/"},"http://jdk.java.net/"),"."))),(0,i.kt)("h2",{id:"download-openjdk"},"Download OpenJDK"),(0,i.kt)("p",null,"Download OpenJDK 17 di ",(0,i.kt)("a",{parentName:"p",href:"http://jdk.java.net/17/"},"http://jdk.java.net/17/"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Download OpenJDK",src:t(5074).Z,title:"Download OpenJDK",width:"576",height:"394"})),(0,i.kt)("p",null,"Kemudian download versi MacOS. File JDK yang didownload adalah file archive, kemudian file tersebut diekstrak."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# ekstrak OpenJDK\ntar -xf openjdk-17.0.2_macos-x64_bin.tar.gz\n")),(0,i.kt)("h2",{id:"install-jdk"},"Install JDK"))}m.isMDXComponent=!0},5074:function(e,a,t){a.Z=t.p+"assets/images/install-jdk-2-10d68f1953f7e784ffb976cfb3fb9a0b.png"}}]);
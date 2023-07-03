"use strict";(self.webpackChunktimposu=self.webpackChunktimposu||[]).push([[9259],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>m});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),u=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||i;return a?t.createElement(m,o(o({ref:n},s),{},{components:a})):t.createElement(m,o({ref:n},s))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6634:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=a(7462),r=(a(7294),a(3905));const i={slug:"menggunakan-scheduled-spring-boot",title:"Menggunakan Scheduled/Penjadwalan di Spring Boot",authors:"topekox",tags:["spring","springboot"]},o=void 0,l={permalink:"/blog/menggunakan-scheduled-spring-boot",source:"@site/blog/2022-06-10-spring-boot-scheduled.md",title:"Menggunakan Scheduled/Penjadwalan di Spring Boot",description:"Dalam satu kasus biasanya kita ingin menjalankan scheduled atau penjadwalan dalam aplikasi kita. Misalnya kita ingin dalam interval waktu tertentu. Contohnya seperti aplikasi SMS Gateway yang akan mengecek dalam interval waktu tertentu akan memeriksa SMS masuk atau SMS keluar.",date:"2022-06-10T00:00:00.000Z",formattedDate:"June 10, 2022",tags:[{label:"spring",permalink:"/blog/tags/spring"},{label:"springboot",permalink:"/blog/tags/springboot"}],readingTime:.575,hasTruncateMarker:!0,authors:[{name:"Ucup TopekoX",title:"Tutorial Timposu creator",url:"https://topekox.github.io",imageURL:"https://topekox.github.io/assets/images/avatar.jpeg",key:"topekox"}],frontMatter:{slug:"menggunakan-scheduled-spring-boot",title:"Menggunakan Scheduled/Penjadwalan di Spring Boot",authors:"topekox",tags:["spring","springboot"]},prevItem:{title:"Membuat Service Android - Background & Foreground",permalink:"/blog/service-android"},nextItem:{title:"Cara Membuat Project Spring MVC di Eclipse - XML Configuration",permalink:"/blog/spring-mvc-eclipse"}},p={authorsImageUrls:[void 0]},u=[],s={toc:u},c="wrapper";function g(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,t.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Dalam satu kasus biasanya kita ingin menjalankan scheduled atau penjadwalan dalam aplikasi kita. Misalnya kita ingin dalam interval waktu tertentu. Contohnya seperti aplikasi SMS Gateway yang akan mengecek dalam interval waktu tertentu akan memeriksa SMS masuk atau SMS keluar."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://images.unsplash.com/photo-1435527173128-983b87201f4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",alt:"Topekox"})),(0,r.kt)("p",null,"Di Spring Boot, terdapat Annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@Scheduled")," yang bisa digunakan untuk Scheduled. "),(0,r.kt)("p",null,"Contoh penggunaan annotation pada method yang ingin diberikan scheduled setiap 5 detik akan dieksekusi menggunakan ",(0,r.kt)("inlineCode",{parentName:"p"},"@Scheduled")," di Spring Boot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Scheduled(fixedDelay = 5000)\nprivate void sendingProcess() {\n\n    // TODO...\n\n}\n")),(0,r.kt)("p",null,"Tapi jangan lupa untuk mengaktifkannya dengan annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableScheduling")," di class main."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\n@EnableScheduling // Enabled it\npublic class PaymentAppBackendApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(PaymentAppBackendApplication.class, args);\n    }\n}\n")))}g.isMDXComponent=!0}}]);
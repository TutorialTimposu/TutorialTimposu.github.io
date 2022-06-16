"use strict";(self.webpackChunktimposu=self.webpackChunktimposu||[]).push([[1044],{3905:function(a,e,n){n.d(e,{Zo:function(){return m},kt:function(){return g}});var t=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function o(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,i=function(a,e){if(null==a)return{};var n,t,i={},r=Object.keys(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(t=0;t<r.length;t++)n=r[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var p=t.createContext({}),s=function(a){var e=t.useContext(p),n=e;return a&&(n="function"==typeof a?a(e):o(o({},e),a)),n},m=function(a){var e=s(a.components);return t.createElement(p.Provider,{value:e},a.children)},d={inlineCode:"code",wrapper:function(a){var e=a.children;return t.createElement(t.Fragment,{},e)}},u=t.forwardRef((function(a,e){var n=a.components,i=a.mdxType,r=a.originalType,p=a.parentName,m=l(a,["components","mdxType","originalType","parentName"]),u=s(n),g=i,k=u["".concat(p,".").concat(g)]||u[g]||d[g]||r;return n?t.createElement(k,o(o({ref:e},m),{},{components:n})):t.createElement(k,o({ref:e},m))}));function g(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=a,l.mdxType="string"==typeof a?a:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1730:function(a,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var t=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={slug:"spring-boot-angular",title:"Tutorial Membuat Aplikasi Web Spring Boot dan Angular (READ Only)",authors:"topekox",tags:["spring","spring boot","angular"]},p=void 0,s={permalink:"/blog/spring-boot-angular",source:"@site/blog/2022-05-07-spring-boot-angular/index.md",title:"Tutorial Membuat Aplikasi Web Spring Boot dan Angular (READ Only)",description:"Pada seri tutorial ini kita akan membangun aplikasi Fullstack Spring Boot sebagai backend dan Angular sebagai frontend. Fullstack developer secara garis besar adalah seseorang yang bekerja atau merangkap tugas sebagai back end dan front end developer. Lebih spesifiknya, developer bisa bekerja dengan aplikasi backend seperti Javascript, PHP, Go, Java, Database (backend) dan juga bisa mengkonversi desain ke dalam kode pemrograman seperti HTML, CSS, XML, JSON (frontend).",date:"2022-05-07T00:00:00.000Z",formattedDate:"May 7, 2022",tags:[{label:"spring",permalink:"/blog/tags/spring"},{label:"spring boot",permalink:"/blog/tags/spring-boot"},{label:"angular",permalink:"/blog/tags/angular"}],readingTime:6.99,truncated:!0,authors:[{name:"Ucup TopekoX",title:"Tutorial Timposu creator",url:"https://topekox.github.io",imageURL:"https://topekox.github.io/assets/images/avatar.jpeg",key:"topekox"}],frontMatter:{slug:"spring-boot-angular",title:"Tutorial Membuat Aplikasi Web Spring Boot dan Angular (READ Only)",authors:"topekox",tags:["spring","spring boot","angular"]},prevItem:{title:"Cara Membuat Project Spring MVC di Eclipse (XML Configuration)",permalink:"/blog/spring-mvc-eclipse"},nextItem:{title:"Daftar Repository Lokal Ubuntu 22.04",permalink:"/blog/repo-lokal-ubuntu-22-04"}},m={authorsImageUrls:[void 0]},d=[{value:"Teknologi Yang Digunakan",id:"teknologi-yang-digunakan",level:2},{value:"Pengetahuan yang dibutuhkan",id:"pengetahuan-yang-dibutuhkan",level:2},{value:"Tools yang digunakan",id:"tools-yang-digunakan",level:2},{value:"Proses Development",id:"proses-development",level:2},{value:"Arsitektur Aplikasi",id:"arsitektur-aplikasi",level:2},{value:"Konfigurasi MySQL",id:"konfigurasi-mysql",level:2},{value:"Spring Boot Back End",id:"spring-boot-back-end",level:2},{value:"Setup Project",id:"setup-project",level:3},{value:"Dependency",id:"dependency",level:3},{value:"Konfigurasi File Properties Spring Datasource, JPA dan Hibernate",id:"konfigurasi-file-properties-spring-datasource-jpa-dan-hibernate",level:3},{value:"Membuat Entity / Model",id:"membuat-entity--model",level:3},{value:"Membuat Repository",id:"membuat-repository",level:3},{value:"Membatasi Akses REST",id:"membatasi-akses-rest",level:3},{value:"Angular Front End",id:"angular-front-end",level:2},{value:"Membuat project",id:"membuat-project",level:3},{value:"Membuat Class",id:"membuat-class",level:3},{value:"Membuat Service",id:"membuat-service",level:3},{value:"Membuat Component",id:"membuat-component",level:3},{value:"Menambahkan Bootstrap",id:"menambahkan-bootstrap",level:3}],u={toc:d};function g(a){var e=a.components,l=(0,i.Z)(a,o);return(0,r.kt)("wrapper",(0,t.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pada seri tutorial ini kita akan membangun aplikasi ",(0,r.kt)("em",{parentName:"p"},"Fullstack")," Spring Boot sebagai ",(0,r.kt)("em",{parentName:"p"},"backend")," dan Angular sebagai ",(0,r.kt)("em",{parentName:"p"},"frontend"),". Fullstack developer secara garis besar adalah seseorang yang bekerja atau merangkap tugas sebagai back end dan front end developer. Lebih spesifiknya, developer bisa bekerja dengan aplikasi backend seperti Javascript, PHP, Go, Java, Database (backend) dan juga bisa mengkonversi desain ke dalam kode pemrograman seperti HTML, CSS, XML, JSON (frontend)."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Aplikasi yang akan dibuat hanya untuk menampilkan data READ ONLY, aplikasi ini tidak mendukung Create, Update dan Delete."))),(0,r.kt)("h2",{id:"teknologi-yang-digunakan"},"Teknologi Yang Digunakan"),(0,r.kt)("p",null,"Adapun teknologi yang digunakan adalah:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Spring Boot (backend)"),(0,r.kt)("li",{parentName:"ol"},"Angular (frontend)"),(0,r.kt)("li",{parentName:"ol"},"MySQL (database)")),(0,r.kt)("h2",{id:"pengetahuan-yang-dibutuhkan"},"Pengetahuan yang dibutuhkan"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java Basic"),(0,r.kt)("li",{parentName:"ul"},"Spring Framework Basic"),(0,r.kt)("li",{parentName:"ul"},"Angular dasar"),(0,r.kt)("li",{parentName:"ul"},"Typescript & Javascript dasar"),(0,r.kt)("li",{parentName:"ul"},"HTML & CSS / Bootstrap")),(0,r.kt)("h2",{id:"tools-yang-digunakan"},"Tools yang digunakan"),(0,r.kt)("p",null,"Adapun tools yang digunakan pada tutorial ini:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://jdk.java.net/archive/"},"OpenJDK 17")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node Js & npm")),(0,r.kt)("li",{parentName:"ul"},"Angular 13"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven 3.8")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.mysql.com/downloads/"},"MySQL Database"))),(0,r.kt)("p",null,"Untuk IDE nya saya menggunakan (bisa menggunakan IDE lain sesuai selera):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Intellij IDEA Community - untuk coding Spring Boot"),(0,r.kt)("li",{parentName:"ul"},"VS Code - untuk coding Angular")),(0,r.kt)("h2",{id:"proses-development"},"Proses Development"),(0,r.kt)("p",null,"Adapun step-by-step proses development:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Menyiapkan Database"),(0,r.kt)("li",{parentName:"ol"},"Membuat Aplikasi Spring Boot untuk Backend",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Membuat Entity"),(0,r.kt)("li",{parentName:"ul"},"Membuat Repository Data Access Object."),(0,r.kt)("li",{parentName:"ul"},"Menampilkan data REST."))),(0,r.kt)("li",{parentName:"ol"},"Membuat Aplikasi Angular untuk Frontend",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Membuat model."),(0,r.kt)("li",{parentName:"ul"},"Membuat component."),(0,r.kt)("li",{parentName:"ul"},"Membuat service.")))),(0,r.kt)("h2",{id:"arsitektur-aplikasi"},"Arsitektur Aplikasi"),(0,r.kt)("p",null,"Gambaran umum desain arsitektur aplikasi yang akan kita buat:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"spring boot angular architecture diagram",src:n(6078).Z,width:"960",height:"307"})),(0,r.kt)("h2",{id:"konfigurasi-mysql"},"Konfigurasi MySQL"),(0,r.kt)("p",null,"Disini saya akan membuat database dengan nama ",(0,r.kt)("inlineCode",{parentName:"p"},"belajar"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE DATABASE belajar;\n\nUSE belajar;\n")),(0,r.kt)("p",null,"Kemudian dalam praktek ini kita akan menyiapkan database dengan tabel ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," yang akan berelasi one-to-many antara 2 tabel, dengan rancangan relasi seperti gambar di bawah ini."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"database relation",src:n(7623).Z,width:"298",height:"151"})),(0,r.kt)("p",null,"Untuk datanya tidak usah khawatir, saya sudah menyiapkan file dump ",(0,r.kt)("inlineCode",{parentName:"p"},"sql")," nya"),(0,r.kt)("p",null,"Untuk tabel ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Tabel City"',title:'"Tabel','City"':!0},"DROP TABLE IF EXISTS `city`;\nCREATE TABLE `city` (\n  `id` int NOT NULL AUTO_INCREMENT,\n  `city_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,\n  PRIMARY KEY (`id`),\n  KEY `course_id_IDX` (`id`) USING BTREE\n) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n\nLOCK TABLES `city` WRITE;\n\nINSERT INTO `city` VALUES (1,'Jakarta'),(2,'Makassar'),(3,'Medan'),(4,'Surabaya'),(5,'Ambon');\n\nUNLOCK TABLES;\n")),(0,r.kt)("p",null,"Untuk tabel ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," dengan 50 record data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Tabel Person"',title:'"Tabel','Person"':!0},"DROP TABLE IF EXISTS `person`;\n\nCREATE TABLE `person` (\n  `id` int NOT NULL AUTO_INCREMENT,\n  `first_name` varchar(100) DEFAULT NULL,\n  `last_name` varchar(100) DEFAULT NULL,\n  `email` varchar(100) DEFAULT NULL,\n  `id_city` int DEFAULT NULL,\n  PRIMARY KEY (`id`),\n  KEY `person_FK` (`id_city`),\n  CONSTRAINT `person_FK` FOREIGN KEY (`id_city`) REFERENCES `city` (`id`)\n) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;\n\nLOCK TABLES `person` WRITE;\n\nINSERT INTO `person` VALUES (1,'david','john','david@gmail.com',1),(2,'rogers','paul','rogerds@gmail.com',1),(3,'maria','sanders','maria@gmail.com',1),(4,'morris','miller','morris@gmail.com',1),(5,'azwar','anas','azwar@gmail.com',1),(6,'daniel','michael','daniel01@gmail.com',1),(7,'sanders','paul','sanders45@gmail.com',1),(8,'mark','mike','mark55@gmail.com',1),(9,'morgan','maria','morgan22@gmail.com',2),(10,'paul','miller','paul45@gmail.com',2),(11,'david','miller','david33@gmail.com',2),(12,'chrishaydon','bell','chrishaydon22@gmail.com',2),(13,'michael','brown','112michael@gmail.com',2),(14,'morgan','james','222morgan@gmail.com',2),(15,'rogers','chrishaydon','rogers34@gmail.com',2),(16,'morgan','wright','morgan2232@gmail.com',2),(17,'morgan','wright','morgan22223@gmail.com',2),(18,'david','ross','david222@gmail.com',2),(19,'maria','morgan','maria434@gmail.com',2),(20,'mike','bell','mike66@gmail.com',2),(21,'miller','michael','miller232@gmail.com',3),(22,'ross','rogers','ross56@gmail.com',3),(23,'brooks','mike','brooks232@gmail.com',3),(24,'miller','daniel','miller444@gmail.com',3),(25,'mike','wright','mike333@gmail.com',3),(26,'wright','smith','wright3242@gmail.com',3),(27,'david','morgan','david111@gmail.com',3),(28,'smith','bell','smith66868@gmail.com',3),(29,'paul','wright','paul456464@gmail.com',3),(30,'michael','james','michael6868@gmail.com',3),(31,'michael','sanders','michael55765@gmail.com',4),(32,'john','rivera','johnrrr44@gmail.com',4),(33,'paul','michael','paul33553@gmail.com',4),(34,'ross','mark','ross87989@gmail.com',4),(35,'brooks','smith','brooks223322@gmail.com',4),(36,'cooper','brown','cooper90909@gmail.com',4),(37,'ross','daniel','ross12121@gmail.com',4),(38,'cooper','miller','cooper6767@gmail.com',4),(39,'jenny','maria','jenny12121@gmail.com',4),(40,'paul','rivera','paul46646@gmail.com',4),(41,'maria','sanders','maria131313@gmail.com',5),(42,'bell','david','bell21242@gmail.com',5),(43,'rivera','cooper','rivera574754@gmail.com',5),(44,'mark','david','markwffw24@gmail.com',5),(45,'paul','cooper','paul56454@gmail.com',5),(46,'brooks','david','brooks53545@gmail.com',5),(47,'james','maria','james656@gmail.com',5),(48,'john','mark','john6786@gmail.com',5),(49,'rivera','jenny09','rivera121212@gmail.com',5),(50,'chrishaydon','sanders','chrishaydon21232@gmail.com',5);\n\nUNLOCK TABLES;\n\n")),(0,r.kt)("p",null,"Cek datanya untuk memastikan datanya sudah ada:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM city;\n\nSELECT * FROM person;\n")),(0,r.kt)("h2",{id:"spring-boot-back-end"},"Spring Boot Back End"),(0,r.kt)("p",null,"Di artikel kita membuat project Spring Boot yang hanya akan membuat aplikasi dengan studi kasus untuk menampilkan data READ ONLY, aplikasi ini tidak mendukung Create, Update dan Delete."),(0,r.kt)("p",null,"Kita akan membuat backend API dengan Spring boot yang akan mengenerate:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Keterangan"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/users")),(0,r.kt)("td",{parentName:"tr",align:null},"menampilkan data users")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/users/:id")),(0,r.kt)("td",{parentName:"tr",align:null},"menampilkan data user berdasarkan ",(0,r.kt)("strong",{parentName:"td"},"id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/users/search=:keyword")),(0,r.kt)("td",{parentName:"tr",align:null},"menampilkan data user berdasarkan ",(0,r.kt)("strong",{parentName:"td"},"keyword"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GET"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/citys/:id")),(0,r.kt)("td",{parentName:"tr",align:null},"menampilkan data user berdasarkan ",(0,r.kt)("strong",{parentName:"td"},"id_city"))))),(0,r.kt)("p",null,"Kita akan memanggil data dari database menggunakan Spring Data REST JPA ",(0,r.kt)("inlineCode",{parentName:"p"},"JpaRepository"),", sehingga kita bisa membuat kodingan kita jauh lebih simpel. "),(0,r.kt)("h3",{id:"setup-project"},"Setup Project"),(0,r.kt)("p",null,"Buat Project menggunakan ",(0,r.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring web tool")," atau melalui IDE (Spring Tool Suite, Eclipse, Intellij) untuk membuat Spring Boot project."),(0,r.kt)("h3",{id:"dependency"},"Dependency"),(0,r.kt)("p",null,"Dependency yang digunakan dalam project ini:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spring REST Repository"),(0,r.kt)("li",{parentName:"ul"},"Spring Data JPA"),(0,r.kt)("li",{parentName:"ul"},"MySQL Driver"),(0,r.kt)("li",{parentName:"ul"},"Lombok")),(0,r.kt)("p",null,"Struktur direktori project:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Struktur Project",src:n(1955).Z,width:"499",height:"577"})),(0,r.kt)("p",null,"Isi dependency dalam maven file di ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=pom.xml",title:"pom.xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">\n  <modelVersion>4.0.0</modelVersion>\n  <parent>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-parent</artifactId>\n    <version>2.6.7</version>\n    <relativePath/> \x3c!-- lookup parent from repository --\x3e\n  </parent>\n  <groupId>com.tutorialtimposu</groupId>\n  <artifactId>springboot-backend</artifactId>\n  <version>0.0.1-SNAPSHOT</version>\n  <name>springboot-backend</name>\n  <description>Spring Boot Backend</description>\n  <properties>\n    <java.version>17</java.version>\n  </properties>\n  <dependencies>\n    <dependency>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-data-rest</artifactId>\n    </dependency>\n\n    <dependency>\n      <groupId>mysql</groupId>\n      <artifactId>mysql-connector-java</artifactId>\n      <scope>runtime</scope>\n    </dependency>\n    <dependency>\n      <groupId>org.projectlombok</groupId>\n      <artifactId>lombok</artifactId>\n      <optional>true</optional>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-starter-test</artifactId>\n      <scope>test</scope>\n    </dependency>\n  </dependencies>\n\n  <build>\n    <plugins>\n      <plugin>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-maven-plugin</artifactId>\n        <configuration>\n          <excludes>\n            <exclude>\n              <groupId>org.projectlombok</groupId>\n              <artifactId>lombok</artifactId>\n            </exclude>\n          </excludes>\n        </configuration>\n      </plugin>\n    </plugins>\n  </build>\n\n</project>\n')),(0,r.kt)("h3",{id:"konfigurasi-file-properties-spring-datasource-jpa-dan-hibernate"},"Konfigurasi File Properties Spring Datasource, JPA dan Hibernate"),(0,r.kt)("p",null,"Tambahkan line dibawah ini ke dalam file ",(0,r.kt)("inlineCode",{parentName:"p"},"application.properties")," yang berada di folder ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/resources"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties",metastring:"title=application.properties",title:"application.properties"},"# jdbc properties\nspring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver\nspring.datasource.url=jdbc:mysql://localhost:3306/belajar\nspring.datasource.username=ucup\nspring.datasource.password=******\n\n# hibernate properties\nspring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect\n\n# custom base path url\nspring.data.rest.base-path=/api\n")),(0,r.kt)("p",null,"Selain konfigurasi ke database kita juga set base-path urlnya ke ",(0,r.kt)("inlineCode",{parentName:"p"},"/api"),"."),(0,r.kt)("h3",{id:"membuat-entity--model"},"Membuat Entity / Model"),(0,r.kt)("p",null,"Kita akan membuat dua entity ke dalam package ",(0,r.kt)("inlineCode",{parentName:"p"},"entity")," berdasarkan tabel yang telah kita buat yaitu tabel ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=City.java",title:"City.java"},'package com.tutorialtimposu.backend.entity;\n\nimport lombok.Data;\n\nimport javax.persistence.*;\nimport java.util.Set;\n\n@Entity\n@Table(name = "city")\n@Data\npublic class City {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    @Column(name = "id")\n    private Long id;\n\n    @Column(name = "city_name")\n    private String cityName;\n\n    @OneToMany(cascade = {\n            CascadeType.DETACH,\n            CascadeType.MERGE,\n            CascadeType.REFRESH,\n            CascadeType.PERSIST,\n    }, mappedBy = "city")\n    private Set<Person> person;\n\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=Person.java",title:"Person.java"},'package com.tutorialtimposu.backend.entity;\n\nimport lombok.Data;\n\nimport javax.persistence.*;\n\n@Entity\n@Table(name = "person")\n@Data\npublic class Person {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    @Column(name = "id")\n    private Long id;\n\n    @Column(name = "first_name")\n    private String firstName;\n\n    @Column(name = "last_name")\n    private String lastName;\n\n    @Column(name = "email")\n    private String email;\n\n    @ManyToOne(cascade = {\n            CascadeType.DETACH,\n            CascadeType.MERGE,\n            CascadeType.REFRESH,\n            CascadeType.PERSIST\n    })\n    @JoinColumn(name = "id_city")\n    private City city;\n\n}\n')),(0,r.kt)("p",null,"Perhatikan pada bagian ",(0,r.kt)("inlineCode",{parentName:"p"},"cascade")," di situ saya tidak mendefiniskan ke ",(0,r.kt)("inlineCode",{parentName:"p"},"all")," karena kita memiliki 2 tabel yang berelasi dan kita tidak ingin agar jika data dihapus disalah satu tabel maka berpengaruh ke tabel lainnya, makanya saya mendefinisikan ",(0,r.kt)("inlineCode",{parentName:"p"},"cascade")," nya secara manual dengan tidak memasukan ",(0,r.kt)("inlineCode",{parentName:"p"},"cascade")," dengan tipe ",(0,r.kt)("inlineCode",{parentName:"p"},"CascadeType.REMOVE"),"."),(0,r.kt)("h3",{id:"membuat-repository"},"Membuat Repository"),(0,r.kt)("p",null,"Kemudian kita akan membuat dua Repository DAO untuk masing-masing entity ke dalam package ",(0,r.kt)("inlineCode",{parentName:"p"},"dao"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=CityRepository.java",title:"CityRepository.java"},"package com.tutorialtimposu.backend.dao;\n\nimport com.tutorialtimposu.backend.entity.City;\nimport org.springframework.data.jpa.repository.JpaRepository;\n\npublic interface CityRepository extends JpaRepository<City, Long> {\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=PersonRepository",title:"PersonRepository"},"package com.tutorialtimposu.backend.dao;\n\nimport com.tutorialtimposu.backend.entity.Person;\nimport org.springframework.data.jpa.repository.JpaRepository;\n\npublic interface PersonRepository extends JpaRepository<Person, Long> {\n}\n")),(0,r.kt)("p",null,'Kita hanya membuat dua interface repository di atas menggunakan teknologi "Spring Magic" yaitu Spring Data REST JPA, dan kita tidak perlu tambahan class lagi, Spring akan secara otomatis membuatkan Service maupun REST Controllernya tanpa kita melakukan coding tambahan.'),(0,r.kt)("p",null,"Untuk mengujinya, jalankan aplikasi Spring Bootnya kemudian buka browser lalu ketik base-path url defaultnya ke ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api")," sesuai konfigurasi properties yang sudah kita buat."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test browser",src:n(2351).Z,width:"809",height:"584"})),(0,r.kt)("p",null,"Spring secara otomatis sudah membuatkan kita REST Controller sendiri, perhatikan pada baris:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"cities": {\n  "href": "http://localhost:8080/api/cities{?page,size,sort}",\n  "templated": true\n},\n"persons": {\n  "href": "http://localhost:8080/api/persons{?page,size,sort}",\n  "templated": true\n}\n')),(0,r.kt)("p",null,"Dimana sudah membuatkan REST Controller untuk object ",(0,r.kt)("inlineCode",{parentName:"p"},"City")," dengan nama ",(0,r.kt)("inlineCode",{parentName:"p"},"cities")," ke url ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/cities")," dan object ",(0,r.kt)("inlineCode",{parentName:"p"},"Person")," dengan nama ",(0,r.kt)("inlineCode",{parentName:"p"},"persons")," ke url ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/persons"),". Spring secara otomatis membuatkan nama dari masing-masing URL api tersebut, secara magic."),(0,r.kt)("p",null,"Tes Url ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/cities")," untuk meload data dari tabel ",(0,r.kt)("inlineCode",{parentName:"p"},"city")," dari database."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test browser",src:n(2280).Z,width:"976",height:"706"})),(0,r.kt)("p",null,"Tes Url ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/api/persons")," untuk meload data dari tabel ",(0,r.kt)("inlineCode",{parentName:"p"},"person")," dari database."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test browser",src:n(1137).Z,width:"976",height:"706"})),(0,r.kt)("h3",{id:"membatasi-akses-rest"},"Membatasi Akses REST"),(0,r.kt)("p",null,"Setelah berhasil membuat REST Api kita perlu menambahkan konfigurasi untuk menonaktifkan method ",(0,r.kt)("inlineCode",{parentName:"p"},"POST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"PUT")," dan ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE"),"."),(0,r.kt)("p",null,"Buat class baru dan simpan ke dalam package ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=DataRestConfig.java",title:"DataRestConfig.java"},"package com.tutorialtimposu.backend.config;\n\nimport com.tutorialtimposu.backend.entity.City;\nimport com.tutorialtimposu.backend.entity.Person;\nimport org.springframework.context.annotation.Configuration;\nimport org.springframework.data.rest.core.config.RepositoryRestConfiguration;\nimport org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;\nimport org.springframework.http.HttpMethod;\nimport org.springframework.web.servlet.config.annotation.CorsRegistry;\n\n@Configuration\npublic class DataRestConfig implements RepositoryRestConfigurer {\n\n    @Override\n    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {\n        // Method yang ingin dinonaktifkan POST, PUT dan DELETE\n        HttpMethod[] unsupportedAction = {HttpMethod.POST, HttpMethod.PUT, HttpMethod.DELETE};\n\n        config.getExposureConfiguration()\n                .forDomainType(Person.class)\n                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedAction))\n                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedAction));\n\n        config.getExposureConfiguration()\n                .forDomainType(City.class)\n                .withItemExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedAction))\n                .withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(unsupportedAction));\n    }\n}\n")),(0,r.kt)("p",null,"Testing dengan aplikasi REST Client. Disini saya akan testing POST data baru:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"test browser",src:n(6361).Z,width:"918",height:"820"})),(0,r.kt)("p",null,"Respon yang dihasilkan ",(0,r.kt)("inlineCode",{parentName:"p"},"405 - Method Not Allowed")," kita tidak bisa mengakses method POST, berarti konfigurasi kita berhasil."),(0,r.kt)("h2",{id:"angular-front-end"},"Angular Front End"),(0,r.kt)("h3",{id:"membuat-project"},"Membuat project"),(0,r.kt)("p",null,"Disini kita akan membuat project Angular dengan Angluar CLI pastikan sudah terinstall terlebih dahulu. Kita akan menggunakan perintah ",(0,r.kt)("inlineCode",{parentName:"p"},"ng new angular-frontend"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng new angular-frontend\n\n? Would you like to add Angular routing? No\n? Which stylesheet format would you like to use? CSS\n")),(0,r.kt)("h3",{id:"membuat-class"},"Membuat Class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate class model/Person\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"title=person.ts",title:"person.ts"},"export class Person {\n\n    id!: number;\n    firstName!: string;\n    lastName!: string;\n    email!: string;\n}\n")),(0,r.kt)("h3",{id:"membuat-service"},"Membuat Service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate service service/person\n")),(0,r.kt)("h3",{id:"membuat-component"},"Membuat Component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ng generate component component/person-list\n")),(0,r.kt)("h3",{id:"menambahkan-bootstrap"},"Menambahkan Bootstrap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install bootstrap\nnpm install @fortawesome/fontawesome-free\n")),(0,r.kt)("p",null,"lalu tambahkan di file ",(0,r.kt)("inlineCode",{parentName:"p"},"angular.json")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=angular.json",title:"angular.json"},'...\n\n"styles": [\n              "src/styles.css",\n              "node_modules/bootstrap/dist/css/bootstrap.min.css",\n              "node_modules/@fortawesome/fontawesome-free/all.min.css"\n            ],\n...\n')))}g.isMDXComponent=!0},2351:function(a,e,n){e.Z=n.p+"assets/images/1-06d4599ba7185043516fd104715d6ac0.PNG"},2280:function(a,e,n){e.Z=n.p+"assets/images/2-7ed3d2efcb5426da931ffff3ee2a989a.PNG"},1137:function(a,e,n){e.Z=n.p+"assets/images/3-2bcc9e46003c1842ff58f091bf9d403c.PNG"},6361:function(a,e,n){e.Z=n.p+"assets/images/4-63cccfb53215f1b5b8c550dd25712e84.PNG"},7623:function(a,e){e.Z="data:image/png;base64,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"},6078:function(a,e,n){e.Z=n.p+"assets/images/spring_angular_diagram-0983de1dea2920d3ad3d6b415865bdf7.png"},1955:function(a,e,n){e.Z=n.p+"assets/images/struktur-project-6152fa4173df6b1a95c80a661eb5d985.png"}}]);
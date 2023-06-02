"use strict";(self.webpackChunktimposu=self.webpackChunktimposu||[]).push([[9139],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>v});var t=a(7294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function d(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},s=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=c(a),m=i,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return a?t.createElement(v,o(o({ref:n},s),{},{components:a})):t.createElement(v,o({ref:n},s))}));function v(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:i,o[1]=d;for(var c=2;c<r;c++)o[c]=a[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7517:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var t=a(7462),i=(a(7294),a(3905));const r={slug:"service-android",title:"Membuat Service Android (Background & Foreground)",authors:"topekox",tags:["android","android-java"]},o=void 0,d={permalink:"/blog/service-android",source:"@site/blog/2022-06-13-service-android/index.md",title:"Membuat Service Android (Background & Foreground)",description:"Service adalah proses yang berjalan dibelakang layar. Service tidak memiliki UI, tapi bekerja lebih ke-proses suatu pekerjaan. Untuk membuat service di Android, dulu sering dibuat menggunakan class IntentService. Namun, sayangnya class IntentService sudah di-deprecated. Tapi kita masih bisa menggunakan class Service secara manual, yang bisa digunakan menggunakan Background Service atau Foreground Service.",date:"2022-06-13T00:00:00.000Z",formattedDate:"June 13, 2022",tags:[{label:"android",permalink:"/blog/tags/android"},{label:"android-java",permalink:"/blog/tags/android-java"}],readingTime:4.075,hasTruncateMarker:!0,authors:[{name:"Ucup TopekoX",title:"Tutorial Timposu creator",url:"https://topekox.github.io",imageURL:"https://topekox.github.io/assets/images/avatar.jpeg",key:"topekox"}],frontMatter:{slug:"service-android",title:"Membuat Service Android (Background & Foreground)",authors:"topekox",tags:["android","android-java"]},prevItem:{title:"Cara Membuat Project Spring MVC dengan Maven - XML Configuration (Bundle Tomcat)",permalink:"/blog/spring-mvc-maven-xml"},nextItem:{title:"Menggunakan Scheduled/Penjadwalan di Spring Boot",permalink:"/blog/menggunakan-scheduled-spring-boot"}},l={authorsImageUrls:[void 0]},c=[{value:"Background Service",id:"background-service",level:2},{value:"Foreground Service",id:"foreground-service",level:2},{value:"Menambahkan Notifikasi",id:"menambahkan-notifikasi",level:3},{value:"Service Always ON",id:"service-always-on",level:3}],s={toc:c},p="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(p,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Service adalah proses yang berjalan dibelakang layar. Service tidak memiliki UI, tapi bekerja lebih ke-proses suatu pekerjaan. Untuk membuat service di Android, dulu sering dibuat menggunakan class ",(0,i.kt)("inlineCode",{parentName:"p"},"IntentService"),". Namun, sayangnya class ",(0,i.kt)("inlineCode",{parentName:"p"},"IntentService")," sudah di-deprecated. Tapi kita masih bisa menggunakan class ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," secara manual, yang bisa digunakan menggunakan Background Service atau Foreground Service."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://images.unsplash.com/photo-1587840178393-079769787b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",alt:"Android"})),(0,i.kt)("h2",{id:"background-service"},"Background Service"),(0,i.kt)("p",null,"Background Service digunakan untuk menjalankan Service di background, namun service ini akan mati ketika aplikasi kita dimatikan."),(0,i.kt)("p",null,"Cara membuatnya, yaitu buat sebuah class extends ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," disini saya beri nama ",(0,i.kt)("inlineCode",{parentName:"p"},"MyBackgroundService.java")," dan override method ",(0,i.kt)("inlineCode",{parentName:"p"},"onStartCommand"),", dan buat ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread")," baru di dalam method tersebut."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=MyBackgroundService.java",title:"MyBackgroundService.java"},'package com.topekox.demoservice;\n\nimport android.app.Service;\nimport android.content.Intent;\nimport android.os.IBinder;\nimport android.util.Log;\n\nimport androidx.annotation.Nullable;\n\npublic class MyBackgroundService extends Service {\n\n    @Override\n    public int onStartCommand(Intent intent, int flags, int startId) {\n        new Thread(new Runnable() {\n            @Override\n            public void run() {\n                while (true) {\n                    Log.e("SERVICE", "Service is running...");\n                    try {\n                        Thread.sleep(2000);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                }\n            }\n        }).start();\n        return super.onStartCommand(intent, flags, startId);\n    }\n\n    @Nullable\n    @Override\n    public IBinder onBind(Intent intent) {\n        return null;\n    }\n}\n')),(0,i.kt)("p",null,"Pada class di atas kita membuat Thread di dalam service yang akan di eksekusi setiap interval 2 detik. Selanjutnya daftarkan class Service tersebut ke dalam ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<service android:name=".MyBackgroundService"></service>\n')),(0,i.kt)("p",null,"Kode lengkap ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=AndroidManifest.xml",title:"AndroidManifest.xml"},'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:tools="http://schemas.android.com/tools"\n    package="com.topekox.demoservice">\n\n    <application\n        android:allowBackup="true"\n        android:dataExtractionRules="@xml/data_extraction_rules"\n        android:fullBackupContent="@xml/backup_rules"\n        android:icon="@mipmap/ic_launcher"\n        android:label="@string/app_name"\n        android:roundIcon="@mipmap/ic_launcher_round"\n        android:supportsRtl="true"\n        android:theme="@style/Theme.DemoService"\n        tools:targetApi="31">\n        <activity\n            android:name=".MainActivity"\n            android:exported="true">\n            <intent-filter>\n                <action android:name="android.intent.action.MAIN" />\n\n                <category android:name="android.intent.category.LAUNCHER" />\n            </intent-filter>\n        </activity>\n        \x3c!-- Menambahkan Service --\x3e\n        <service android:name=".MyBackgroundService"></service>\n    </application>\n\n</manifest>\n')),(0,i.kt)("p",null,"Panggil Service dari class Activity, contoh dipanggil dari class ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"Intent intentService = new Intent(this, MyBackgroundService.class);\nstartService(intentService);\n")),(0,i.kt)("p",null,"Gambar log ketika aplikasi dijalankan."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"log",src:a(4372).Z,width:"1055",height:"305"})),(0,i.kt)("p",null,"Service akan berhenti ketika aplikasi dimatikan."),(0,i.kt)("h2",{id:"foreground-service"},"Foreground Service"),(0,i.kt)("p",null,"Berbeda dengan Background Service, Foreground Service akan tetap berjalan meski aplikasi dimatikan."),(0,i.kt)("p",null,"Cara membuatnya hampir sama dengan cara sebelumnya hanya pada bagian class ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity")," yang berbeda."),(0,i.kt)("p",null,"Buat class extends ",(0,i.kt)("inlineCode",{parentName:"p"},"Service")," disini saya beri nama ",(0,i.kt)("inlineCode",{parentName:"p"},"MyForegroundService.java")," dan override method ",(0,i.kt)("inlineCode",{parentName:"p"},"onStartCommand"),", dan buat ",(0,i.kt)("inlineCode",{parentName:"p"},"Thread")," baru di dalam method tersebut."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=MyForegroundService.java",title:"MyForegroundService.java"},'package com.topekox.demoservice;\n\nimport android.app.Notification;\nimport android.app.NotificationChannel;\nimport android.app.NotificationManager;\nimport android.app.Service;\nimport android.content.Intent;\nimport android.os.Build;\nimport android.os.IBinder;\nimport android.util.Log;\n\nimport androidx.annotation.Nullable;\nimport androidx.annotation.RequiresApi;\n\npublic class MyForegroundService extends Service {\n\n    @RequiresApi(api = Build.VERSION_CODES.O)\n    @Override\n    public int onStartCommand(Intent intent, int flags, int startId) {\n        new Thread(new Runnable() {\n            @Override\n            public void run() {\n                while (true) {\n                    Log.e("SERVICE", "Service is running...");\n                    try {\n                        Thread.sleep(2000);\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                }\n            }\n        }).start();\n\n        return super.onStartCommand(intent, flags, startId);\n    }\n\n    @Nullable\n    @Override\n    public IBinder onBind(Intent intent) {\n        return null;\n    }\n}\n')),(0,i.kt)("p",null,"Daftar service dan permission ",(0,i.kt)("inlineCode",{parentName:"p"},"FOREGROUND_SERVICE")," ke ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=AndroidManifest.xml",title:"AndroidManifest.xml"},'<?xml version="1.0" encoding="utf-8"?>\n<manifest xmlns:android="http://schemas.android.com/apk/res/android"\n    xmlns:tools="http://schemas.android.com/tools"\n    package="com.topekox.demoservice">\n    \x3c!-- add permission --\x3e\n    <uses-permission android:name="android.permission.FOREGROUND_SERVICE"></uses-permission>\n\n    <application\n        ...\n        <activity\n           ...\n        </activity>\n        \x3c!-- register service --\x3e\n        <service android:name=".MyForegroundService"></service>\n        ...\n    </application>\n\n</manifest>\n')),(0,i.kt)("p",null,"Panggil service di ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity"),", cuma disini sedikit berbeda karena di versi Android yang saya jalankan, saya harus memanggil annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@RequiresApi(api = Build.VERSION_CODES.O)")," untuk masalah kompatibelitas, kurang lebih method ",(0,i.kt)("inlineCode",{parentName:"p"},"onCreate")," seperti di bawah ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@RequiresApi(api = Build.VERSION_CODES.O)\n@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.activity_main);\n\n    Intent intentService = new Intent(this, MyForegroundService.class);\n    \n    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && intentService == null) {\n        startForegroundService(intentService);\n    } else {\n        MainActivity.this.startService(intentService);\n    }        \n}\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Baca dokumentasi lengkap Foreground Service ",(0,i.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/components/foreground-services"},"di sini"),".")),(0,i.kt)("h3",{id:"menambahkan-notifikasi"},"Menambahkan Notifikasi"),(0,i.kt)("p",null,"Untuk menambahkan notifikasi ",(0,i.kt)("inlineCode",{parentName:"p"},"NotificationChannel")," pada method ",(0,i.kt)("inlineCode",{parentName:"p"},"onStartCommand")," di class ForegroundService:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=MyForegroundService.java",title:"MyForegroundService.java"},'@RequiresApi(api = Build.VERSION_CODES.O)\n@Override\npublic int onStartCommand(Intent intent, int flags, int startId) {\n    new Thread(new Runnable() {\n        @Override\n        public void run() {\n            while (true) {\n                Log.e("SERVICE", "Service is running...");\n                try {\n                    Thread.sleep(2000);\n                } catch (InterruptedException e) {\n                    e.printStackTrace();\n                }\n            }\n        }\n    }).start();\n\n    final String CHANNEL_ID = "Foreground Channel ID";\n    NotificationChannel channel = new NotificationChannel(\n            CHANNEL_ID,\n            CHANNEL_ID,\n            NotificationManager.IMPORTANCE_LOW);\n\n    getSystemService(NotificationManager.class).createNotificationChannel(channel);\n    Notification.Builder notification = new Notification.Builder(this, CHANNEL_ID)\n            .setContentText("Service is running")\n            .setContentTitle("Service Enabled")\n            .setSmallIcon(R.drawable.ic_launcher_background);\n\n    startForeground(1001, notification.build());\n\n    return super.onStartCommand(intent, flags, startId);\n}\n')),(0,i.kt)("p",null,"Kita juga memberikan kondisi agar service hidup jika sebelumnya tidak hidup, tambahkan kondisi di class ",(0,i.kt)("inlineCode",{parentName:"p"},"MainActivity"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=MainActivity.java",title:"MainActivity.java"},"@RequiresApi(api = Build.VERSION_CODES.O)\n@Override\nprotected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(savedInstanceState);\n    setContentView(R.layout.activity_main);\n\n    if (!foregroundServiceIsRunning()) {\n        Intent intentService = new Intent(this, MyForegroundService.class);\n        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && intentService == null) {\n            startForegroundService(intentService);\n        } else {\n            MainActivity.this.startService(intentService);\n        }\n    }\n}\n\nprivate boolean foregroundServiceIsRunning() {\n    ActivityManager activityManager =\n            (ActivityManager) getSystemService(MainActivity.this.ACTIVITY_SERVICE);\n\n    for (ActivityManager.RunningServiceInfo service :\n            activityManager.getRunningServices(Integer.MAX_VALUE)) {\n        if (MyForegroundService.class.getName().equals(service.service.getClassName())) {\n            return true;\n        }\n    }\n    return false;\n}\n")),(0,i.kt)("p",null,"Gambar Notifikasi:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"notifikasi",src:a(4573).Z,width:"343",height:"345"})),(0,i.kt)("h3",{id:"service-always-on"},"Service Always ON"),(0,i.kt)("p",null,"Agar foreground service tetap berjalan walaupun Android telah direstart, buat sebuah class ",(0,i.kt)("inlineCode",{parentName:"p"},"BroadcastReceiver")," untuk mengandle ini:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:"title=MyBroadcastReceiver.java",title:"MyBroadcastReceiver.java"},"package com.topekox.demoservice;\n\nimport android.content.BroadcastReceiver;\nimport android.content.Context;\nimport android.content.Intent;\nimport android.os.Build;\n\nimport androidx.annotation.RequiresApi;\n\npublic class MyBroadcastReceiver extends BroadcastReceiver {\n\n    @RequiresApi(api = Build.VERSION_CODES.O)\n    @Override\n    public void onReceive(Context context, Intent intent) {\n        if (intent.getAction().equals(Intent.ACTION_BOOT_COMPLETED)) {\n            Intent intentService = new Intent(context, MyForegroundService.class);\n            context.startForegroundService(intentService);\n        }\n    }\n}\n")),(0,i.kt)("p",null,"Lalu tambahkan permission dan register intentnya di ",(0,i.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'...\n<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"></uses-permission>\n...\n \x3c!-- register receiver --\x3e\n    <receiver android:name=".MyBroadcastReceiver"\n        android:exported="true">\n        <intent-filter>\n            <action android:name="android.intent.action.BOOT_COMPLETED"></action>\n        </intent-filter>\n    </receiver>\n...\n')),(0,i.kt)("p",null,"Maka service akan tetap berjalan walau Android telah direstart."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/TopekoX/sample-android-java/tree/main/DemoServiceBackgroundForeground"},"Full Source Code"),".")))}u.isMDXComponent=!0},4372:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/1-1e73d2318d92dc4562bb23da7be17d93.png"},4573:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/2-e50d1eb0865739aeeea9c9d4a306827d.png"}}]);
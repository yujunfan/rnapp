1[Solved] Error: Exception in HostObject::get for prop 'Realm': java.lang.UnsatisfiedLinkError: couldn't find DSO to load: librealm.so caused by: dlopen failed: cannot locate symbol "__emutls_get_address" #5361

按照https://github.com/realm/realm-js/issues/5361处理，
realm 版本过高会和ndk 版本不匹配 降低 realm 版本 "realm": "11.0.0", 版本写死 11.0.0


2 创建远程app services 文档https://github.com/mongodb/template-app-react-native-todo


1创建mongodb API Keys 
  https://cloud.mongodb.com/v2#/org/637c7feae22b3b252b3be15c/access/apiKeys

1 先登录
realm-cli login --api-key="<my api key>" --private-api-key="<my private api key>"
realm-cli login --api-key=uqostbmi --private-api-key=7f562b65-773c-45bb-8de5-2f3a74143165


在创建
 realm-cli apps create -n "<App Name>" --template "react-native.todo.flex"

 具体教程https://www.mongodb.com/docs/atlas/app-services/apps/create/#std-label-create-a-realm-app


非常适合按钮、徽标和导航/标签栏。易于扩展、设计和集成到您的项目中。
 https://github.com/oblador/react-native-vector-icons


 安装 react-native-reanimated 和 react-native-gesture-handler 
 选择了固定版本以及 个版本调过之后 在翻墙网络稳定下才成功
   buildToolsVersion = "31.0.0"
        minSdkVersion = 21
        compileSdkVersion = 33
        targetSdkVersion = 33
        kotlinVersion = "1.7.10"
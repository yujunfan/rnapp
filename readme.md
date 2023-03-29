1[Solved] Error: Exception in HostObject::get for prop 'Realm': java.lang.UnsatisfiedLinkError: couldn't find DSO to load: librealm.so caused by: dlopen failed: cannot locate symbol "__emutls_get_address" #5361

按照https://github.com/realm/realm-js/issues/5361处理，
realm 版本过高会和ndk 版本不匹配 降低 realm 版本 "realm": "11.0.0", 版本写死 11.0.0
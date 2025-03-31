## 序言

在使用python开发时，通常我们使用if-else做分支判断，但是过多条件的的if-else或者过多重复的if-else逻辑，违背代码的简洁之道，代码也会变得较难维护。

## Code Review 中发现的问题

下面列举两种场景if-else使用问题及优化方法

### 1）if-else重复逻辑过多问题

```python
 def format_device_update_params(params):  
     if params["ssh_password"] != "******":  
         params["ssh_password"] = password.aes_encrypt(params["ssh_password"])  
     else:  
         params.pop("ssh_password")  
     if params["telnet_password"] != "******":  
         params["telnet_password"] = password.aes_encrypt(params["telnet_password"])  
     else:  
         params.pop("telnet_password")  
     if params["privilege_password"] != "******":  
         params["privilege_password"] = password.aes_encrypt(params["privilege_password"])  
     else:  
         params.pop("privilege_password")
```

上面代码出现多次if-else，处理的内容也基本相同，可以考虑使用for循环，将逻辑写在循环内，以下是优化后的

```python
 for key in ["ssh_password", "telnet_password", "privilege_password"]:  
     if params[key] != "******":  
         params["ssh_password"] = password.aes_encrypt(params[key])  
     else:  
         params.pop(key)
```

### 2) if elif…elif…else太长问题

```python
 if obj_id == "host":  
     cursor = model.HostBase().find(mongo_condition)  
 elif obj_id == "set":  
     cursor = model.SetBase().find(mongo_condition)  
 elif obj_id == "module":  
     cursor = model.ModuleBase().find(mongo_condition)  
 elif obj_id == "biz":  
     cursor = model.ApplicationBase().find(mongo_condition)  
 elif obj_id == "plat":  
     cursor = model.PlatBase().find(mongo_condition)  
 else:  
     cursor = model.ObjectBase().find({"$and": [{"bk_obj_id": obj_id}, mongo_condition]})
```
上面代码出现if elif…elif…else太长，阅读起来不太美观，这种情况可以考虑使用字典的方式。以下是优化后的

```python
 rule_mapping = {  
     "host": model.HostBase,  
     "set": model.SetBase,  
     "module": model.ModuleBase,  
     "biz": model.ApplicationBase,  
     "plat": model.PlatBase  
 }  
 ​  
 cursor = rule_mapping.get(obj_id)().find(mongo_condition) if obj_id in rule_mapping else model.ObjectBase().find({"$and": [{"bk_obj_id": obj_id}, mongo_condition]})
```

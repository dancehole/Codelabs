# vue文件上传和下载的最佳实践

> 第一次接触bk-upload上传附件的需求，在此记录，以便后用
>
> 生态环境部需求描述：
>
> - 新增工单支持上传附件，1-n个附件，必须上传，附件格式任意
> - 编辑状态里，新增字段“接收单位联系人，接收单位联系方式，接收单位完成情况反馈”
> - 操作里支持上传附件和下载/预览附件，

## 1.上传附件/文件

注意点：

1. 必须使用post请求
2. 请求的表单需要包含在formData类型里：`const parmas = new FormData()`



### 1.1加载文件示例

```js
loadFormData() {
    const params = new FormData() // 只有formData可以承载附件
    // 将非附件的表单数据追加到FormData中
    for (const key in this.formValue) {
    	params.append(key, this.formValue[key])
    }
    params.append('is_own', true)
    // 上传附件
    this.formValue.S_XTGDFJ.forEach((file, index) => {
        // 假设S_XTGDFJ是File列表
        params.append(`file_${index}`, file.origin, file.name)
    })
    return params
},
```



### 1.2打印formData的数据

**在打印formData类型的数据时，直接打印是不可用的：**

- 直接打印：

```js
console.log(params)
```

![image-20240628150836510](https://static.cwoa.net/0b79675441e8460f8fc64ea8e05b93a9.png)

<p align="center">打印结果</p>

- 正确方法（把formData类型转化为Object对象）

```js
let formDataObj = {};
for(let [key, value] of formData.entries()) {
    formDataObj[key] = value;
}
console.log(formDataObj);
```

![image-20240628150920135](https://static.cwoa.net/2e24d111b1fa4b8ab75067daebe1d250.png)

<p align="center">打印结果</p>




```js
// 上传附件, 新增工单的时候暂时弃用此接口（以后可能还会用到，暂时保留）
const AttachmentParams = new FormData()
AttachmentParams 
delete AttachmentParams.S_Attachment // 删除附件
AttachmentParams.is_own = false
AttachmentParams.newKey = 'S_XTGDFJ'
// AttachmentParams.append('order_id', params.S_XTGDBH)
// console.log(this.formValue.S_Attachment)
this.formValue.S_Attachment.forEach((file, index) => {
	// 假设S_Attachment是File列表
	AttachmentParams.S_XTGDFJ.append(`file_${index}`, file.origin, file.name)
})
console.log(AttachmentParams)
params.S_XTGDFJ = AttachmentParams
console.log(params.S_XTGDFJ)
this.$api.WorkDetails.uploadAttachment(AttachmentParams).then(res => {
	if (res.result) {
		this.$bkMessage({
			message: '作业任务创建成功！',
			theme: 'success'
		})
		this.$router.push({
			path: '/jobTask'
		})
	}
}).finally(() => {
	this.loading = false
})
```



```js
let formDataObj = {};
for(let [key, value] of formData.entries()) {
    formDataObj[key] = value;
}
console.log(formDataObj);


{
    "S_XTGDBH": "42",
    "S_FQDW": "D000",
    "S_XTGDZT": "43",
    "S_XTGDNR": "432",
    "S_YWLX": "02",
    "S_JSDW": "D000",
    "S_QKFK": "",
    "S_BJZT": "02",
    "S_BJSJ": "",
    "S_FQLXR": "243",
    "S_FQLXFS": "342",
    "S_JSLXR": "",
    "S_JSLXFS": "",
    "S_XTGDFJ": "[object Object],[object Object],[object Object]",
    "is_own": "true",
    "file_0": {},
    "file_1": {},
    "file_2": {}
}

打印file时，实际上只能取到file的引用：
{}
```

![image-20240628140424765](https://static.cwoa.net/4190f3d8b3aa4ce2bf641fc1ee680ae2.png)


直接打印：
```
console.log(params)
```

![](https://static.cwoa.net/0b79675441e8460f8fc64ea8e05b93a9.png)
## 文件下载

```js
const imageUrl = 'https://github.com/dancehole/dailyReportHandler/archive/refs/tags/1.0.2.tar.gz'
// 创建隐藏的可下载链接
const link = document.createElement('a')
link.href = imageUrl
link.target = '_blank' // 可选，新开窗口或标签页下载
link.download = imageUrl.split('/').pop() // 假设文件名是URL的最后一部分

// 触发点击下载
document.body.appendChild(link)
link.click()
document.body.removeChild(link) // 下载后移除元素
```



建议一个函数在20行以内完成，一眼就可以看清


需要一个测开工具，可以自动抓包保存内容的（好像有？）
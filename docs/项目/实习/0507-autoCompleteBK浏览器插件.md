  # AutoCompleteCW







## erp填写

参考：

```js

```

自动化流优化：自动填erp，嘉为软件自动登录 等等





相关代码：

选中元素的几种方式：

```js
var button = document.querySelector('.mr10.bk-primary.bk-button-small.bk-button');
button.click();

var elements = document.getElementsByClassName('is-today');
var element = elements[0]; // 这是获取到的第一个匹配的元素。如果有多个匹配的元素，需要遍历它们。

var element = document.querySelector('.is-today');
var element = document.querySelector('span:contains("新增日报")');
```

document.querySelector('.bk-tooltip .bk-select-dropdown');





```
var elements = document.querySelectorAll('.form[data-v-37f84d3d] .bk-select-container .bk-select-name');
elements.forEach(function(element, index) {
  setTimeout(function() {
    element.click();
  }, index * 500);
});
```



1. erp在我的日报里自动跳转新增日程
2. 逐个遍历

```js
var spans = document.querySelectorAll('span');
var targetElement;

for (var i = 0; i < spans.length; i++) {
  if (spans[i].textContent === '新增日报') {
    targetElement = spans[i];
    break;
  }
}

console.log(targetElement);
targetElement.click()



//工作类别
var elements = document.querySelectorAll('.form[data-v-37f84d3d] .bk-select-container .bk-select-name');
var ele=elements[0]
ele.click()

var elements = document.querySelectorAll('span.bk-option-name');
var element = elements[3]; // 产品研发
element.click()

//选中全天
var checkbox = document.querySelector('input[name="bk-checkbox_1"]');
checkbox.click()

//默认就是R版本，不操作了

//产品名称
var elements = document.querySelectorAll('.form[data-v-37f84d3d] .bk-select-container .bk-select-name');
var ele=elements[3]
ele.click()

//多云管理平台
var elements = document.querySelectorAll('.bk-options .bk-option');
var element = elements[2]; // 多云管理
element.click()

//获取日期
var today = new Date();
var month = String(today.getMonth() + 1).padStart(2, '0');
var day = String(today.getDate()).padStart(2, '0');
var formattedDate = '【'+month + '-' + day+'】';
console.log(formattedDate);

//往input里填东西：标题，比如我填一个日期
var inputs = document.querySelectorAll('input.bk-form-input');
var input = inputs[3]; 
input.value = formattedDate;

//选中texterea

var inputs = document.querySelectorAll('.bk-textarea-wrapper .bk-form-textarea');
var input = inputs[0];
input.value = formattedDate+'工作日报';
```





优化代码：

```js
//新增日报
setTimeout(function() {
  var spans = document.querySelectorAll('span');
  var targetElement;
  for (var i = 0; i < spans.length; i++) {
    if (spans[i].textContent === '新增日报') {
      targetElement = spans[i];
      break;
    }
  }
  console.log(targetElement);
  targetElement.click();
}, 1000);


//选中工作类别
setTimeout(function() {
    var elements = document.querySelectorAll('.form[data-v-37f84d3d] .bk-select-container .bk-select-name');
    var ele=elements[0]
    ele.click()
}, 4500);




//选中第四个元素/产品研发
setTimeout(function() {
  var elements = document.querySelectorAll('span.bk-option-name');
  var element = elements[3]; // 产品研发
  element.click();
}, 5000);

//点击全天复选框
setTimeout(function() {
  var checkboxes = document.querySelectorAll('.bk-checkbox');
  checkboxes[1].click();
}, 6000);

//产品名称
setTimeout(function() {
    var elements = document.querySelectorAll('.form[data-v-37f84d3d] .bk-select-container .bk-select-name');
    var ele=elements[3]
    ele.click()
}, 6500);

//点击多云管理选项
setTimeout(function() {
  var elements = document.querySelectorAll('.bk-options .bk-option');
  var element = elements[2]; // 多云管理
  element.click();
}, 7000);


var formattedDate
//获取日期
setTimeout(function() {
  var today = new Date();
  var month = String(today.getMonth() + 1).padStart(2, '0');
  var day = String(today.getDate()).padStart(2, '0');
  formattedDate = '【' + month + '-' + day + '】';
  console.log(formattedDate);
}, 8000);

//向input填写内容
setTimeout(function() {
  var inputs = document.querySelectorAll('input.bk-form-input');
  var input = inputs[3];
  input.value += formattedDate;
}, 9000);

//选中textarea
setTimeout(function() {
  var inputs = document.querySelectorAll('.bk-textarea-wrapper .bk-form-textarea');
  var input = inputs[0];
  input.value += formattedDate + '工作日报';
}, 10000);
```


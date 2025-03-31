const currRoute = window.location.href;
console.log(currRoute);
if (currRoute === "https://erpnew.cwoa.net/#/WorkDaily") {
  try {
    //新增日报
    setTimeout(function () {
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
    setTimeout(function () {
      var elements = document.querySelectorAll('.form[data-v-37f84d3d] .bk-select-container .bk-select-name');
      var ele = elements[0]
      ele.click()
    }, 4500);

    //选中第四个元素/产品研发
    setTimeout(function () {
      var elements = document.querySelectorAll('span.bk-option-name');
      var element = elements[3]; // 产品研发
      element.click();
    }, 5000);

    //点击全天复选框
    setTimeout(function () {
      var checkboxes = document.querySelectorAll('.bk-checkbox');
      checkboxes[1].click();
    }, 6000);

    //产品名称
    setTimeout(function () {
      var elements = document.querySelectorAll('.form[data-v-37f84d3d] .bk-select-container .bk-select-name');
      var ele = elements[3]
      ele.click()
    }, 6500);

    //点击多云管理选项
    setTimeout(function () {
      var elements = document.querySelectorAll('.bk-options .bk-option');
      var element = elements[2]; // 多云管理
      element.click();
    }, 7000);


    var formattedDate
    //获取日期
    setTimeout(function () {
      var today = new Date();
      var month = String(today.getMonth() + 1).padStart(2, '0');
      var day = String(today.getDate()).padStart(2, '0');
      formattedDate = '【' + month + '-' + day + '】';
      console.log(formattedDate);
    }, 8000);

    //向input填写内容
    setTimeout(function () {
      var inputs = document.querySelectorAll('input.bk-form-input');
      var input = inputs[3];
      input.click()
      input.value += formattedDate;
    }, 9000);

    //选中textarea
    setTimeout(function () {
      var inputs = document.querySelectorAll('.bk-textarea-wrapper .bk-form-textarea');
      var input = inputs[0];
      input.click()
      input.value += formattedDate + '工作日报';
    }, 10000);
  } catch (error) {
    console.error("出错了：", error);
  }

} else if (currRoute.includes("paas.cwbk.com/login")) {
  try {
    // 获取input元素
    var input = document.querySelector('#user');
    var input2 = document.querySelector('#password');
    // 填入指定的字符串
    input.value = "product";
    input2.value = "Bk@123456";
    // 延迟三秒后提交表单
    setTimeout(function () {
      var form = document.querySelector('#login-form');
      if (form) {
        form.submit();

        // 切换URL到指定路由
        console.log("重定向ing!")
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
          chrome.tabs.update(tabs[0].id, { url: "https://paas.cwbk.com/o/cmp_saas/#/home" });
        });
        console.log("重定向ing!")
      }
    }, 1000);
  } catch (error) {
    console.error("出错了：", error);
  }
}
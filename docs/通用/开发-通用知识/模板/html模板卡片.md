# html卡片模板

（项目介绍时，可以直接嵌入。可以嵌入markdown渲染）

> 参考：[个人风采，一键展示：手把手教你HTML+CSS制作个人介绍卡片！-阿里云开发者社区](https://developer.aliyun.com/article/1593306)

## 效果展示：

<div style="
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;">
  <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/common/1080x1080.ico" alt="头像" style="
         width: 100px; 
         height: 100px; 
         border-radius: 50%; 
         margin-bottom: 20px; 
         display: block; 
         margin-left: auto; 
         margin-right: auto;">
  <h1 style="font-size: 24px; margin: 0 0 10px;">dancehole</h1>
  <p style="color: #666; margin: 0 0 20px;">我是邓仕昊，深圳技术大学大四在读（小白一只）</p>
  <div>
    <a href="http://brief.dancehole.cn" target="_blank" style="
            display: inline-block; 
            margin: 0 10px; 
            color: #3498db; 
            text-decoration: none; 
            position: relative;">
      我的简介
    </a>
    <a href="http://intro.dancehole.cn" target="_blank" style="
            display: inline-block; 
            margin: 0 10px; 
            color: #3498db; 
            text-decoration: none; 
            position: relative;">
      我的项目
    </a>
    <a href="https://github.com/dancehole" target="_blank" style="
            display: inline-block; 
            margin: 0 10px; 
            color: #3498db; 
            text-decoration: none; 
            position: relative;">
      Github
    </a>
  </div>
</div>





## 代码

```html
<div style="
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;">
  <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/common/1080x1080.ico" alt="头像" style="
         width: 100px; 
         height: 100px; 
         border-radius: 50%; 
         margin-bottom: 20px; 
         display: block; 
         margin-left: auto; 
         margin-right: auto;">
  <h1 style="font-size: 24px; margin: 0 0 10px;">dancehole</h1>
  <p style="color: #666; margin: 0 0 20px;">我是邓仕昊，深圳技术大学大四在读（小白一只）</p>
  <div>
    <a href="http://brief.dancehole.cn" target="_blank" style="
            display: inline-block; 
            margin: 0 10px; 
            color: #3498db; 
            text-decoration: none; 
            position: relative;">
      我的简介
    </a>
    <a href="http://intro.dancehole.cn" target="_blank" style="
            display: inline-block; 
            margin: 0 10px; 
            color: #3498db; 
            text-decoration: none; 
            position: relative;">
      我的项目
    </a>
    <a href="https://github.com/dancehole" target="_blank" style="
            display: inline-block; 
            margin: 0 10px; 
            color: #3498db; 
            text-decoration: none; 
            position: relative;">
      Github
    </a>
  </div>
</div>

<script>
  /**
     * 当文档加载完成时，添加事件监听器以实现个人资料容器的点击交互效果。
     * 此函数等待文档完全加载后执行，确保所选元素已经存在于DOM中。
     */
  document.addEventListener("DOMContentLoaded", function () {
    // 选择页面中个人资料容器的元素，为后续的交互逻辑做准备。
    const profileContainer = document.querySelector('.profile-container');
    /**
     * 为个人资料容器添加点击事件监听器。
     * 当元素被点击时，切换其上的 'clicked' 类，以实现展开或收起的效果。
     */
    profileContainer.addEventListener('click', function () {
      // 切换 'clicked' 类，实现个人资料容器的展开和收起交互。
      profileContainer.classList.toggle('hasClicked');
    });
  });
</script>
```






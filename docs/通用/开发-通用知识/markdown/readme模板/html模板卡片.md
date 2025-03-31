# html卡片模板（项目介绍时，可以直接嵌入。可以嵌入markdown渲染）[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/模板/我的html个人卡片/#htmlmarkdown)

> 参考：[个人风采，一键展示：手把手教你HTML+CSS制作个人介绍卡片！-阿里云开发者社区](https://developer.aliyun.com/article/1593306)

## 带样式版[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/模板/我的html个人卡片/#_1)

```html
<div class="profile-container">
  <img src="https://q1.itc.cn/q_70/images03/20240609/1c1be14298be4dbe978e55bde6e958b0.jpeg" alt="头像" class="avatar">
  <h1>ZUO2302</h1>
  <p>你好！我是前端开发新手，正在学习HTML和CSS。</p>
  <div class="social-links">
    <a href="#" target="_blank">GitHub</a>
    <a href="#" target="_blank">Twitter</a>
  </div>
</div>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    animation: backgroundFade 10s infinite alternate;
  }

  @keyframes backgroundFade {
    0% {
      background-color: #f4f4f4;
    }

    100% {
      background-color: #d4e6f1;
    }
  }

  .profile-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;
    transform: scale(0.9);
    transition: transform 0.3s;
  }

  .hasClicked {
    border: 1px solid orange
  }

  .profile-container:hover {
    transform: scale(1);
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  h1 {
    font-size: 24px;
    margin: 0 0 10px;
  }

  p {
    color: #666;
    margin: 0 0 20px;
  }

  .social-links a {
    display: inline-block;
    margin: 0 10px;
    color: #3498db;
    text-decoration: none;
    position: relative;
    transition: color 0.3s;
  }

  .social-links a::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #3498db;
    position: absolute;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  .social-links a:hover {
    color: #2980b9;
  }

  .social-links a:hover::after {
    transform: scaleX(1);
  }
</style>
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
简单不带动画版¶
<div style="
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;">
  <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/img/1080x1080.ico" alt="头像" style="
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
```



<div class="profile-container">
  <img src="https://q1.itc.cn/q_70/images03/20240609/1c1be14298be4dbe978e55bde6e958b0.jpeg" alt="头像" class="avatar">
  <h1>ZUO2302</h1>
  <p>你好！我是前端开发新手，正在学习HTML和CSS。</p>
  <div class="social-links">
    <a href="#" target="_blank">GitHub</a>
    <a href="#" target="_blank">Twitter</a>
  </div>
</div>
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    animation: backgroundFade 10s infinite alternate;
  }

  @keyframes backgroundFade {
    0% {
      background-color: #f4f4f4;
    }

    100% {
      background-color: #d4e6f1;
    }
  }

  .profile-container {
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;
    transform: scale(0.9);
    transition: transform 0.3s;
  }

  .hasClicked {
    border: 1px solid orange
  }

  .profile-container:hover {
    transform: scale(1);
  }

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
    animation: rotate 4s linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  h1 {
    font-size: 24px;
    margin: 0 0 10px;
  }

  p {
    color: #666;
    margin: 0 0 20px;
  }

  .social-links a {
    display: inline-block;
    margin: 0 10px;
    color: #3498db;
    text-decoration: none;
    position: relative;
    transition: color 0.3s;
  }

  .social-links a::after {
    content: '';
    display: block;
    width: 100%;
    height: 2px;
    background-color: #3498db;
    position: absolute;
    left: 0;
    bottom: -5px;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  .social-links a:hover {
    color: #2980b9;
  }

  .social-links a:hover::after {
    transform: scaleX(1);
  }
</style>
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
简单不带动画版¶
<div style="
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 400px;
    width: 100%;">
  <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/img/1080x1080.ico" alt="头像" style="
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
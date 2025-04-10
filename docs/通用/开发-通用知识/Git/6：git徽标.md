GitHub项目徽标

## 前言

GitHub徽标，GitHub Badge，你也可以叫它徽章。就是在项目README中经常看到的那些表明构建状态或者版本等信息的小图标。就像这样：

![Static Badge](https://img.shields.io/badge/Gitee-dancehole-orange?style=flat&logo=gitee&logoColor=red&labelColor=white)

这些好看的小图标不仅简洁美观，而且包含了清晰易读的信息，在README中使用小徽标能够为自己的项目说明增色不少！如何给自己的项目加上小徽标呢？

## 一、关于徽标

1.  徽标图片分左右两部分，左边是标题，右边是内容，就像是键值对。
2.  GitHub徽标官网是 [https://shields.io/](https://link.zhihu.com/?target=https%3A//shields.io/)



## 二、如何添加动态徽标

动态徽标是指如果项目状态发生变化，会自动更新状态的徽标，它能保证用户看到的信息就是项目当前的真实状态。

**常用的动态徽标有：**

*   持续集成状态
*   项目版本信息
*   代码测试覆盖率
*   项目下载量
*   贡献者统计等等

这里以\`Travis CI\` 的持续集成状态为例。没有接触过 \`Travis CI\`的可以看我的上一篇文章 [利用Travis CI+GitHub实现持续集成和自动部署](https://link.zhihu.com/?target=https%3A//champyin.com/2019/09/27/%25E5%2588%25A9%25E7%2594%25A8Travis-CI-GitHub%25E5%25AE%259E%25E7%258E%25B0%25E6%258C%2581%25E7%25BB%25AD%25E9%259B%2586%25E6%2588%2590%25E5%2592%258C%25E8%2587%25AA%25E5%258A%25A8%25E9%2583%25A8%25E7%25BD%25B2/)。

1\. 登录 \`Travis CI\`，进入配置过构建的项目，在项目名称的右边有个 \`build passing\` 或者 \`build failing\` 徽标。

2\. 点击它，在弹出框中，就可以看到 \`Travis CI\` 为你提供的各种格式的徽章地址了。

3\. 你可以根据需要选择格式，imageUrl格式大概是这个样子：

```
https://www.travis-ci.org/{your-name}/{your-repo-name}.svg?branch=master
```


markdown格式大概是这个样子：

```
[![Build Status](https://www.travis-ci.org/{your-name}/{your-repo-name}.svg?branch=master)]
(https://www.travis-ci.org/{your-name}/{your-repo-name})
```


4\. 简单起见，我选择 \`markdown\` 格式。将内容复制后，打开项目的README文档，在顶部位置粘贴。

5\. 经过前4步，小徽章就搞定了。将README文档push到远程，刷新GitHub页面，过一会，就会看到README上面已经有了持续集成状态图标了:

![](git徽标.assets/v2-e681b26202fa5b53eb65e92fcdc57e26_b.png)

之所以要过一会才加载出来，是因为它要动态从 \`Travis CI\` 平台获取状态。

三、如何自定义徽标
---------

[https://shields.io/](https://link.zhihu.com/?target=https%3A//shields.io/) 提供了自定义徽标的功能。

**徽标图标格式**

```
https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg
```

**带链接的徽标**

```
[![](https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg)]({linkUrl})
```

**变量说明**

*   徽标标题：徽标左边的文字
*   徽标内容：徽标右边的文字
*   徽标颜色：徽标右边的背景颜色，可以是颜色的16进制值，也可以是颜色英文。支持的颜色英文如下：



## 我的静态徽标



<div align="center">
    <a href ="https://dancehole.gitee.io/"><img src="https://img.shields.io/badge/Blog-dancehole-orange?style=flat&logo=microdotblog&logoColor=white&labelColor=blue"></a>
    <a href ="https://gitee.com/dancehole"><img src="https://img.shields.io/badge/Gitee-dancehole-orange?style=flat&logo=gitee&logoColor=red&labelColor=white"></a>
    <a href ="https://github.com/dancehole"><img src="https://img.shields.io/badge/Github-dancehole-orange?style=flat&logo=github&logoColor=white&labelColor=grey"></a>
    <a href =""><img src="https://img.shields.io/badge/CSDN-dancehole-orange?style=flat&logo=csdn&logoColor=red&labelColor=yellow"></a>
	<a href =""><img src="https://img.shields.io/badge/51cto-dancehole-orange?style=flat&logo=51cto&logoColor=red&labelColor=maroon"></a>
    <a href =""><img src="https://img.shields.io/badge/51cto-dancehole-orange?style=flat&logo=51cto&logoColor=red&labelColor=maroon)"></a>
</div>

```html
<!-->我的信息<-->
<div align="center">
    <a href ="https://dancehole.gitee.io/"><img src="https://img.shields.io/badge/Blog-dancehole-orange?style=flat&logo=microdotblog&logoColor=white&labelColor=blue"></a>
    <a href ="https://gitee.com/dancehole"><img src="https://img.shields.io/badge/Gitee-dancehole-orange?style=flat&logo=gitee&logoColor=red&labelColor=white"></a>
    <a href ="https://github.com/dancehole"><img src="https://img.shields.io/badge/Github-dancehole-orange?style=flat&logo=github&logoColor=white&labelColor=grey"></a>
    <a href =""><img src="https://img.shields.io/badge/CSDN-dancehole-orange?style=flat&logo=csdn&logoColor=red&labelColor=yellow"></a>
	<a href =""><img src="https://img.shields.io/badge/51cto-dancehole-orange?style=flat&logo=51cto&logoColor=red&labelColor=maroon"></a>
    <a href =""><img src="https://img.shields.io/badge/51cto-dancehole-orange?style=flat&logo=51cto&logoColor=red&labelColor=maroon)"></a>
</div>
```

<div align="center">
    <!-- 联系方式 -->
    <img src="https://img.shields.io/badge/WeChat-皓-white?style=for-the-badge&logo=wechat&logoColor=white&labelColor=07C160">
    <img src="https://img.shields.io/badge/Email-1391755954%40qq.com-white?style=for-the-badge&logo=mail.ru&logoColor=white&labelColor=168DE2">
    <img src="https://img.shields.io/badge/Alipay-皓-white?style=for-the-badge&logo=alipay&logoColor=00A1E9&labelColor=white"></div>



    ```html
    ![Static Badge](https://img.shields.io/badge/WeChat-%E7%9A%93-white?style=flat&logo=wechat&logoColor=white&labelColor=%2332CD32)
    
    ![Static Badge](https://img.shields.io/badge/QQmail-1391755954%40qq.com-grey?style=flat&logo=tencentqq&logoColor=%238B0000&labelColor=white)
    
    ![Static Badge](https://img.shields.io/badge/Alipay-white?style=flat&logo=alipay&logoColor=blue&labelColor=white)
    ```











<div align="center">
    <a href ="https://www.apache.org/licenses/LICENSE-2.0.html"><img src="https://img.shields.io/badge/license-Apache--2.0-yellow"></a>
    <a><img src="https://img.shields.io/badge/Repo_type-docs-blue"></a>
    <a><img src="https://img.shields.io/badge/Status-Updating-green"></a>
    <a><img src="https://img.shields.io/badge/Download-Unavailable-darkred"></a>
    <a><img src="https://img.shields.io/badge/Release-Unavailable-darkred"></a>
</div>

```html
<!-->仓库信息<-->
<div align="center">
    <a href ="https://www.apache.org/licenses/LICENSE-2.0.html"><img src="https://img.shields.io/badge/license-Apache--2.0-yellow"></a>
    <a><img src="https://img.shields.io/badge/Repo_type-docs-blue"></a>
    <a><img src="https://img.shields.io/badge/Status-Updating-green"></a>
    <a><img src="https://img.shields.io/badge/Download-Unavailable-darkred"></a>
    <a><img src="https://img.shields.io/badge/Release-Unavailable-darkred"></a>
</div>
```





<div align="center">
    <a><img src="https://img.shields.io/badge/Repo_type-docs-blue"></a>
<a><img src="https://img.shields.io/badge/Repo_type-Tiny_C++_Game-blue"></a>
</div>

```html
<!-->仓库状态<-->
<div align="center">
    <a><img src="https://img.shields.io/badge/Repo_type-docs-blue"></a>
<a><img src="https://img.shields.io/badge/Repo_type-Tiny_C++_Game-blue"></a>
</div>
```






----

<div align="center">
    <a><img src="https://img.shields.io/badge/Status-Updating-green"></a>
    <a><img src="https://img.shields.io/badge/Status-Finish-Chartreuse"></a>
    <a><img src="https://img.shields.io/badge/Status-Stop_Updating-yellow"></a>
	<a><img src="https://img.shields.io/badge/Status-Unavailable-darkred"></a>
</div>

```html
<!-->仓库状态<-->
<div align="center">
    <a><img src="https://img.shields.io/badge/Status-Updating-green"></a>
    <a><img src="https://img.shields.io/badge/Status-Finish-Chartreuse"></a>
    <a><img src="https://img.shields.io/badge/Status-Stop_Updating-yellow"></a>
	<a><img src="https://img.shields.io/badge/Status-Unavailable-darkred"></a>
</div>
```




---

<div align="center">
    <a><img src="https://img.shields.io/badge/Download-available-Chartreuse"></a>
    <a><img src="https://img.shields.io/badge/Download-Unavailable-darkred"></a>
</div>

```html
<!-->仓库状态<-->
<div align="center">
    <a><img src="https://img.shields.io/badge/Download-available-Chartreuse"></a>
    <a><img src="https://img.shields.io/badge/Download-Unavailable-darkred"></a>
</div>
```






---

<div align="center">
        <a><img src="https://img.shields.io/badge/Release-available-Chartreuse"></a>
    <a><img src="https://img.shields.io/badge/Release-Unavailable-darkred"></a>
</div>

```html
<div align="center">
        <a><img src="https://img.shields.io/badge/Release-available-Chartreuse"></a>
    <a><img src="https://img.shields.io/badge/Release-Unavailable-darkred"></a>
</div>
```


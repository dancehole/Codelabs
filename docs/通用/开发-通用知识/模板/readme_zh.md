<div align="center">

<h1 align="center">项目标题：优雅的readme模板</h1>

<p align="center">
  <strong>简体中文</strong> | <a href="readme_en.md">English</a>
</p>


<div align="center">
    <a href ="https://dancehole.gitee.io/"><img src="https://img.shields.io/badge/Blog-dancehole-orange?style=flat&logo=microdotblog&logoColor=white&labelColor=blue"></a>
    <a href ="https://gitee.com/dancehole"><img src="https://img.shields.io/badge/Gitee-dancehole-orange?style=flat&logo=gitee&logoColor=red&labelColor=white"></a>
    <a href ="https://github.com/dancehole"><img src="https://img.shields.io/badge/Github-dancehole-orange?style=flat&logo=github&logoColor=white&labelColor=grey"></a>
</div>

<div align="center">
    <a href ="https://www.apache.org/licenses/LICENSE-2.0.html"><img src="https://img.shields.io/badge/license-Apache--2.0-yellow"></a>
    <a><img src="https://img.shields.io/badge/Repo_type-docs-blue"></a>
    <a><img src="https://img.shields.io/badge/Status-Updating-green"></a>
    <a><img src="https://img.shields.io/badge/Download-Unavailable-darkred"></a>
    <a><img src="https://img.shields.io/badge/Release-Unavailable-darkred"></a>
</div>

<p align="center" style="border: 1px solid black; padding: 5px; margin: 10px 0;">
    开源杂货铺，包括一个程序猿（我自己）成长所需要具备的必备技能和技巧（部分）。本项目由大一下时创建，持续维护中；<b>仓库取名灵感来自于学习鸿蒙时华为开发者Codelabs。目的为记录开发过程中一些不负责但难以记忆，在网上难以检索但非常重要的操作</b>。这也很符合CodeLab的定义：“自己动手，分享知识”。<br>CodeLabs静态站点已经部署，你可以访问[这里](https://dancehole.gitee.io/code-labs)获得更加好的排版体验
    </p>

</div>

## 📝 目录

- [程序下载](#demo)
- [运行环境](#prerequisites)
- [编译运行](#install)
- [Setup](#libsetup)
- [Usages](#usages)
- [Debug](#debug)
- [CSS](#css)
- [API](#api)
- [Hooks](#hooks)
- [Search Engine Optimization (SEO)](#seo)
- [FAQ](#faq)
- [Contributing](#contributing)

 💿 程序发行版下载<a name = "demo"></a>

**[点我下载最新版本]()**

- [Gitee Release]()

- [Github Release]()

- [Download Source Code]()

**下载说明：**

- 建议直接下载exe文件
- Zip内含资源文件，可供开发使用

**版本说明：**

- 仅支持Windows
- 版本号V1.0.0，**经测试存在许多bug，谨慎参考**

## ✅ 运行环境<a name = "prerequisites"></a>

项目基于[Vue]()+[mysql]()+..构建，

详细的构建方法可以参考[这里]()



## ⬇️ 编译运行<a name = "install"></a>

To install the package, just run:

```
$ npm install ng-lazyload-image
```

or the following if you are using yarn

```
$ yarn add ng-lazyload-image
```



## 🛠 安装库<a name = "libsetup"></a>





## 🖼 快速入门/使用方法<a name = "usages"></a>





## 🐛 Debug <a name = "debug"></a>

In order to get a better understanding of what is happening you can pass `[debug]="true"` which will output some debug information in the web console.

See [onStateChange](#onStateChange) for more information about the diffrent output messages.

## 💅 CSS <a name = "css"></a>

The css class name `ng-lazyloading` will automatically be added before the image is loaded and will be removed when the image has been loaded or if the image couldn't be loaded.

The css class name `ng-lazyloaded` will be added when the image is loaded (regardless of if the image could be loaded or not).

The css class name `ng-failed-lazyloaded` will be added when the image couldn't be loaded.

## 🔄 API <a name = "api"></a>



## 🎣 其他<a name = "hooks"></a>





## 🤔 FAQ <a name = "faq"></a>

**Q** How can I manually trigger the loading of images?

**A** You can either use the `getObservable` hook if you can trigger the loading outside the dom or you can use the `customObservable` input, see [Custom Observable](#custom-observable)

**Q** Does this library work with ionic or some other wrapper for Angular?

**A** Yes, but ionic and some other library wraps the whole document inside an other div so you might need to create your own scroll listener.

**Q** How can I add a transition effect between the default image and the lazy loaded image?

**A** See: https://github.com/tjoskar/ng-lazyload-image/issues/300



## 🙇‍ 贡献 参与我们<a name = "contributing"></a>

See the [contributing guide](CONTRIBUTING.md) 

欢迎您参与贡献，我们鼓励开发者以各种方式参与文档反馈和贡献。

您可以对现有文档进行评价、简单更改、反馈文档质量问题、贡献您的原创内容，详细请参考[贡献文档]()。



## 🙇‍ 联系我们/作者<a name = "contacting"></a>

- 官方Q群：

- 联系邮箱：@qq.com
- 个人网站：



## 🙇‍ 支持与致谢<a name = "contacting"></a>

- 项目作者名单：

| Nickname昵称 | Contribution贡献 |
| ------------ | ---------------- |
| Dancehole    |                  |

- 本项目由作者独立完成，原创不易，欢迎支持：

|                           微信支持                           |                 作者bilibili频道/公众号/微信                 |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-template-wechat1.png" alt="image-20240201235337475" width="200px" /> | <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-template-wechat2.png" alt="image-20240201235414474" width="200px" /> |

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-template-star.png"/>


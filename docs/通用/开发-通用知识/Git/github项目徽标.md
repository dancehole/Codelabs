> 摘录自别的文章，待总结

## 前言[¶](https://docs.dancehole.cn/Common/开发-通用知识/Git/git徽标/#_1)

GitHub徽标，GitHub Badge，你也可以叫它徽章。就是在项目README中经常看到的那些表明构建状态或者版本等信息的小图标。就像这样：

![img](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Git/git%E5%BE%BD%E6%A0%87/git%E5%BE%BD%E6%A0%87.assets/v2-0712b8aaa26b4fbd5ba7750151d1b72a_b.jpeg)

这些好看的小图标不仅简洁美观，而且包含了清晰易读的信息，在README中使用小徽标能够为自己的项目说明增色不少！如何给自己的项目加上小徽标呢？

## 一、关于徽标[¶](https://docs.dancehole.cn/Common/开发-通用知识/Git/git徽标/#_2)

1. 徽标图片分左右两部分，左边是标题，右边是内容，就像是键值对。
2. GitHub徽标官网是 [https://shields.io/](https://link.zhihu.com/?target=https%3A//shields.io/)
3. 图标规范

![img](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Git/git%E5%BE%BD%E6%A0%87/git%E5%BE%BD%E6%A0%87.assets/v2-7a094c74408a890e0087fcd03789aa97_b.jpg)

## 二、如何添加动态徽标[¶](https://docs.dancehole.cn/Common/开发-通用知识/Git/git徽标/#_3)

动态徽标是指如果项目状态发生变化，会自动更新状态的徽标，它能保证用户看到的信息就是项目当前的真实状态。

**常用的动态徽标有：**

- 持续集成状态
- 项目版本信息
- 代码测试覆盖率
- 项目下载量
- 贡献者统计等等

这里以`Travis CI` 的持续集成状态为例。没有接触过 `Travis CI`的可以看我的上一篇文章 [利用Travis CI+GitHub实现持续集成和自动部署](https://link.zhihu.com/?target=https%3A//champyin.com/2019/09/27/%E5%88%A9%E7%94%A8Travis-CI-GitHub%E5%AE%9E%E7%8E%B0%E6%8C%81%E7%BB%AD%E9%9B%86%E6%88%90%E5%92%8C%E8%87%AA%E5%8A%A8%E9%83%A8%E7%BD%B2/)。

\1. 登录 `Travis CI`，进入配置过构建的项目，在项目名称的右边有个 `build passing` 或者 `build failing` 徽标。

\2. 点击它，在弹出框中，就可以看到 `Travis CI` 为你提供的各种格式的徽章地址了。

\3. 你可以根据需要选择格式，imageUrl格式大概是这个样子：

| `1`  | `https://www.travis-ci.org/{your-name}/{your-repo-name}.svg?branch=master ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

markdown格式大概是这个样子：

| `1 2` | `[![Build Status](https://www.travis-ci.org/{your-name}/{your-repo-name}.svg?branch=master)] (https://www.travis-ci.org/{your-name}/{your-repo-name}) ` |
| ----- | ------------------------------------------------------------ |
|       |                                                              |

\4. 简单起见，我选择 `markdown` 格式。将内容复制后，打开项目的README文档，在顶部位置粘贴。

\5. 经过前4步，小徽章就搞定了。将README文档push到远程，刷新GitHub页面，过一会，就会看到README上面已经有了持续集成状态图标了:

![img](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Git/git%E5%BE%BD%E6%A0%87/git%E5%BE%BD%E6%A0%87.assets/v2-e681b26202fa5b53eb65e92fcdc57e26_b.png)

之所以要过一会才加载出来，是因为它要动态从 `Travis CI` 平台获取状态。

## 三、如何自定义徽标[¶](https://docs.dancehole.cn/Common/开发-通用知识/Git/git徽标/#_4)

[https://shields.io/](https://link.zhihu.com/?target=https%3A//shields.io/) 提供了自定义徽标的功能。

**徽标图标格式**

| `1`  | `https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

**带链接的徽标**

| `1`  | `[![](https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg)]({linkUrl}) ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

**变量说明**

- 徽标标题：徽标左边的文字
- 徽标内容：徽标右边的文字
- 徽标颜色：徽标右边的背景颜色，可以是颜色的16进制值，也可以是颜色英文。支持的颜色英文如下：

![img](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Git/git%E5%BE%BD%E6%A0%87/git%E5%BE%BD%E6%A0%87.assets/v2-fd14fc4888feb40e5ce12a44b2261823_b.jpg)

变量之间用 `-` 连接。将这3个变量替换为你需要的内容即可生成一个自定义的徽标。

**举个栗子**

例如下面这个是我的博客的徽标：

| `1`  | `[![](https://img.shields.io/badge/blog-@champyin-red.svg)](https://champyin.com) ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

效果：

![img](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Git/git%E5%BE%BD%E6%A0%87/git%E5%BE%BD%E6%A0%87.assets/v2-bd8305866d124bd4af544f5b2aff08fa_b.png)

点击该徽标会打开对应的linkUrl地址，即直接跳到我的博客。

> *PS：知乎不支持图片链接，所以没法看到效果，在其他支持md解析的地方是可以的*

**进阶**

除了上面所说的3个参数，[http://shields.io](https://link.zhihu.com/?target=http%3A//shields.io/) 还提供了一些 `query string` 来控制徽标样式。使用方式跟URL的query string一致：徽标图标地址?{参数名}={参数值}，多个参数用 `&` 连接：

| `1`  | `https://img.shields.io/badge/{徽标标题}-{徽标内容}-{徽标颜色}.svg?{参数名1}={参数值1}&{参数名2}={参数值2} ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

常用的 `query string` 参数有：

- style：控制徽标主题样式，style的值可以是：`plastic` | `flat` | `flat-square` | `social` 。
- label：用来强制覆盖原有徽标的标题文字。
- colorA：控制左半部分背景颜色，只能用16进制颜色值作为参数，不能使用颜色英文。
- colorB：控制右半部分背景颜色。

**以style参数为例**

`plastic` 立体效果：

![img](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Git/git%E5%BE%BD%E6%A0%87/git%E5%BE%BD%E6%A0%87.assets/v2-41c39d034e1e4d937b1480b45d5e5bf9_b.png)

| `1`  | `![](https://img.shields.io/badge/blog-@champyin-orange.svg?style=plastic) ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

`flat` 扁平化效果，也是默认效果：

![img](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Git/git%E5%BE%BD%E6%A0%87/git%E5%BE%BD%E6%A0%87.assets/v2-bb1b07160f69dec9637e71cca07f61a0_b.png)

| `1`  | `![](https://img.shields.io/badge/blog-@champyin-yellow.svg?style=flat) ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

`flat-square` 扁平 + 去圆角效果：

![img](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Git/git%E5%BE%BD%E6%A0%87/git%E5%BE%BD%E6%A0%87.assets/v2-7cc5f204140f66f3aa60ec007e5856a2_b.png)

![]([https://img.shields.io/badge/blog-@champyin-success.svg?style=flat-square](https://link.zhihu.com/?target=https%3A//img.shields.io/badge/blog-%40champyin-success.svg%3Fstyle%3Dflat-square))

`social` 社交样式效果：

![img](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Git/git%E5%BE%BD%E6%A0%87/git%E5%BE%BD%E6%A0%87.assets/v2-0da6dc311fe38a1d1d273fc5c2dcc658_b.png)

| `1`  | `![](https://img.shields.io/badge/blog-@champyin-blue.svg?style=social) ` |
| ---- | ------------------------------------------------------------ |
|      |                                                              |

还有很多参数，用法类似。更多信息可以到 [https://shields.io/](https://link.zhihu.com/?target=https%3A//shields.io/) 查阅。

## 总结[¶](https://docs.dancehole.cn/Common/开发-通用知识/Git/git徽标/#_5)

徽标简洁又不失内容，使用简单又不失灵活。如果你的项目还没有使用过徽标，那么不妨试试给你的项目中添加一个，你会爱上它。

\--

欢迎转载，转载请注明出处：

本文同步发表于：

[GitHub项目徽标 | 掘金](https://link.zhihu.com/?target=https%3A//juejin.im/post/5d98b2666fb9a04e1c07e071)
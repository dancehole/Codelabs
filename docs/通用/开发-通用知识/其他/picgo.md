# 基于PicGo的图床 配置及使用

> 在使用PicGo图床两个月后，给出的使用体验

## 概述

本文会涉及较多概念，在此事先展出：

1. **什么是PicGo?**

答：[PicGo](https://picgo.github.io/PicGo-Doc/zh/)是一个方便的图片管理工具，是图片云存储与用户访问的中间件，可以方便用户上传和管理图片（上云）。PicGo开源且免费，如果你不满意其中的功能可以使用electron-Vue自行部署

1. **如何使用？**
2. [快速上手 | PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/getting-started.html#mini窗口上传)
3. **图片存储选型**
4. 存储桶/OSS/COS对象存储服务。每个存储桶可以存放无数对象，每个对象都有独特域名。以阿里云/腾讯云存储桶为例，可以挂载任意文件/图片/静态网站托管。picGo支持，操作难度中等，需要费用，稳定性极高（掉链接的概率取决于money）
5. Github/Gitee。作为开源代码仓库，我们可以投机取巧的利用git服务让代码仓库作为图床。但两者均有缺点：Github国内访问速度慢，Gitee需要picgo插件支持+非常不友好（最大限制1M 不支持gif 曾发生过大规模封禁仓库 导致掉链接事件）建议谨慎选用。操作难度简单，无需费用，稳定性一般。建议使用时定期拉取作为本地备份
6. 其他图床（比如一些免费图床，因为不支持大量保存和海量访问，舍弃）列举一些相对好用的比如SMMS/imgurl等
7. 自搭图床服务（如php兰空图床）安全性较高，访问速度一般
8. **图床的评判标准 & 为什么要图片上云**
9. 主要为markdown需求，markdown文档不像word文档会保存图片在文档内，而是使用链接的形式保存（本地连接&网络连接），渲染器通过实时渲染图片完成。在迁移/共享时需要打包图片相对路径，非常非常麻烦，所以一个图床变成了与markdown文档并存的必备工具
10. 后续自己搭建网站时，也可以直接使用外链保存图片资源，降低静态资源占用

## Picgo+github配置

其他配置可以查看picgo官网，这里只展示github：

1. 准备一个仓库，用于存放图片（记录仓库名称）
2. 生成一个Token用于PicGo远程操作仓库：
3. 访问https://github.com/settings/tokens；(注意为个人settings，不是仓库的settings)
4. 点击Generate new token;选择token-classic；
5. expiration建议设置为一年。（失效后更新一下就可）
6. 把repo的勾打上即可。然后翻到页面最底部，点击`Generate token`的绿色按钮生成token。**（请保存/记录token，因为token只会出现一次）**
7. 注意：token一般不设置为永久，我们可以第一次30天-然后180天这样子，**到期时会自动销毁没有“续费”**
8. 配置Picgo

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-picgo-1.png"/>

- 仓库名：格式为`用户名/仓库`
- 分支名：main/master（以实际为准 建议单分支即可）
- Token：一个仓库使用一个Token即可
- 存储路径：图片存放在仓库的哪里，缺省为根目录；为了方便管理我们可以设置为`img/`，这样就会存在`/img/`目录下；我们可以在同一个仓库下添加不同存储路径，实现“分类”的效果（方便管理）
- 自定义域名：新版PicGo+github支持我们使用CDN加速，我们使用 jsdelivr做github的加速，自定义域名可以设置为`https://cdn.jsdelivr.net/gh/github用户名/仓库名@分支名`。详细部署可以参考[jsDelivr - 开源免费公共CDN](https://www.jsdelivr.com/)

## markdown渲染工具+Picgo配合使用[¶](https://docs.dancehole.cn/Common/开发-通用知识/其他/picGo图床/#markdownpicgo)

这里列举三种，vscode、typora、Obsidian

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-picgo-2.png"/>

## picgo插件

> 只找开源的插件
>
> - 不建议装太多，piggo版本要对应（或者保持picgo版本不更新，插件是和版本对应的）


## 目前图床的主流方案

- [Github](https://zhida.zhihu.com/search?content_id=469829810&content_type=Answer&match_order=1&q=Github&zhida_source=entity) + [JsDelivr](https://zhida.zhihu.com/search?content_id=469829810&content_type=Answer&match_order=1&q=JsDelivr&zhida_source=entity)
- [OSS](https://zhida.zhihu.com/search?content_id=469829810&content_type=Answer&match_order=1&q=OSS&zhida_source=entity) + CDN

- 付费：腾讯云 COS
- 免费：Backblaze + Cloudflare

- VPS 自建



## **VPS 自建**

如果你手头有服务器，那么可以考虑自建图床服务，市面上可选的图床工具还是有不少的，这里我选择**[lsky-pro](https://link.zhihu.com/?target=https%3A//github.com/lsky-org/lsky-pro)**进行尝试，探索自建图床的可行性。

> 其实开源图床项目挺多的，目前看`lsky-pro`项目更新以及功能都算前列，而且可以选择将图片上传到腾讯云COS或者b2，因此直接选用其进行测试。  

部署上手使用非常简单，直接用**[Docker部署](https://link.zhihu.com/?target=https%3A//github.com/HalcyonAzure/lsky-pro-docker)**即可，具体流程参考这个项目即可，最终效果如下：

![](https://pic1.zhimg.com/80/v2-42e11852a5bde6895d256d128fa01a74_720w.webp?source=1def8aca)

vps_lsky_01

![](https://picx.zhimg.com/80/v2-d7e559b46ce2277f3363ec2f5c3ec42c_720w.webp?source=1def8aca)

vps_lsky_02

可以设置登录才能上传，做到权限管控，可以设定图片存储在下图任一位置：

![](https://pic1.zhimg.com/80/v2-18a97bfc0e57ea4c8108abdcd60e40ab_720w.webp?source=1def8aca)

vps_lsky_03

经过测试，使用起来还是非常方便的，最后正式使用的话建议给自己域名套上一层CDN，这块可由你自己选择把控。


picgo需要配合其他软件和服务商一起使用


------
如果你只是在自己电脑上面写博客、笔记  

那么我的这个开源项目能为你减少由于文件路径改变而带来的麻烦，有了它，你可以很方便的在计算机之间移动你的笔记。  

推荐一个自己用python写的，面向本地笔记创作的，可能是配置操作最简单的轻量级图床服务器程序  

项目官网：[my-easy-pic-bed.ringotek.cn](http://link.zhihu.com/?target=http%3A//my-easy-pic-bed.ringotek.cn)  

github：  

[github.com/fslongjin/My](http://link.zhihu.com/?target=https%3A//github.com/fslongjin/My-Easy-Pic-Bed)





## 使用jsdelivr picgo 图床加速

> 原始链接：https://raw.githubusercontent.com/dancehole/image/main/danceholeLabs/common-markdown-alpha.png
>
> cdn加速后：https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-markdown-alpha.png

不开梯子（国内裸连访）访问图片：

- `找不到 raw.githubusercontent.com 的服务器 IP 地址`（大概率是dns解析问题）
- 如果是cdn加速，可能很慢但是能够加载出来



**picGo设置：**

- github设置-自定义域名-设置为`https://cdn.jsdelivr.net/gh/dancehole/image@main/`

**文章里已经存在的链接一键修改：**

- 批量替换：把前缀`https://raw.githubusercontent.com/dancehole/image/main/`全部替换成`https://cdn.jsdelivr.net/gh/dancehole/image@main/`

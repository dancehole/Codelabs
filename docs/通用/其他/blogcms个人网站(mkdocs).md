# Blog/CMS/个人网站 搭建

> 博客或笔记管理系统，或知识库，通用

## 项目选型

**博客框架选型**

- ~~Hexo~~
- 主流博客框架之一，可以简单快速的构建静态博客页面
- 难以自定义导航栏，知识库设计非常复杂
- 使用[标签]和[分类]进行文章的管理，我认为有缺陷
- 每篇文章需要单独设置前缀（修改md文件前面部分），虚最后选择弃用
- Jekyll
- 未尝试
- Pelican
- 基于Python、未尝试
- Solo
- 可以直接从Hexo等框架/markdown导入导出
- 由个人开发者开发，基于java，有着非常悠久的历史
- 样式种类非常多 可以高度定制（难度未知）
- ~~Hugo~~
- 基于Go
- 每篇文章需要单独设置前缀（修改md文件前面部分），虚最后选择弃用
- [VuePress (vuejs.org)](https://vuepress.vuejs.org/zh/)
- 基于Vue + webpack
- 部署时遇到了未知问题（nodejs22版本 兼容性错误）
- 貌似可以在github在线编辑并动态部署？
- 可以通过config.js修改导航栏和侧边栏，看着不错
- gitbook
- 有开源版本和商业发行版
- Docsify
- 适合不太长的文档（不太长 不太多）
- 比如api文档，开发者指南等
- 只有单级目录。但是可以实现动态md生成（不需要编译构建等）
- WordPress
- 基于PHP和mysql的开源免费CMS（内容管理系统）
- 同时适合小白和资深程序员。可建立博客和门户网站
- 全球使用最广泛，插件和主题最多
- 

**站点托管/源码存储**

- github
- gitlab
- gitee
- …等等

**评论框架**

- [gitalk插件](https://github.com/gitalk/gitalk/blob/master/readme-cn.md)
- 使用Github登录，基于github issue和preact保存
- [gitcuss插件](https://docs.dancehole.cn/Common/开发-通用知识/其他/Blog教程/[giscus](https://giscus.app/zh-CN))
- 使用Github登录，基于github disscussion
- 利用js=外链实现跨域？
- Waline
- 博客框架：Mkdocs+mkdocs-material（theme）

由于有了官方文档，所以操作几乎不需要记录了。

只记录基本操作：

## mkdocs

### 1. 安装

```
pip install mkdocs-material
# or
docker pull squidfunk/mkdocs-material
```

## 2. 使用

```
mkdocs new . # or docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material new .
```

文件组成：

```
.
├─ docs/
│  └─ index.md
└─ mkdocs.yml
```

## 3. 预览

```bash
mkdocs serve
# or
docker run --rm -it -p 8000:8000 -v ${PWD}:/docs squidfunk/mkdocs-material
```

## 4. 打包

```bash
mkdocs build
or
docker run --rm -it -v ${PWD}:/docs squidfunk/mkdocs-material build
```

## 5. 发布

方法一：打包后发布pages

方法二：使用Github Actions(CI工具)

- 在仓库根目录创建/workflows/ci.yml
- 粘贴配置信息：

```bash
name: ci 
on:
  push:
    branches:
      - master 
      - main
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Configure Git Credentials
        run: |
          git config user.name github-actions[bot]
          git config user.email 41898282+github-actions[bot]@users.noreply.github.com
      - uses: actions/setup-python@v5
        with:
          python-version: 3.x
      - run: echo "cache_id=$(date --utc '+%V')" >> $GITHUB_ENV 
      - uses: actions/cache@v4
        with:
          key: mkdocs-material-${{ env.cache_id }}
          path: .cache
          restore-keys: |
            mkdocs-material-
      - run: pip install mkdocs-material 
      - run: mkdocs gh-deploy --force
```


评论功能在gitee中暂不可用

基于Mkdocs+mkdocs-material+gitcus+gitee/github page+..的

## 部署

> 工作流自动化使用

[node.js - web前端常用的五种方式搭建本地静态html页面服务器 - 风雨过后见彩虹 - SegmentFault 思否](https://segmentfault.com/a/1190000039744899)





## picGo+github图床，使用jsdelivr进行cdn加速

博客里，图床图片链接为：

- `https://raw.githubusercontent.com/dancehole/image/main/danceholeLabs/common-markdown-alpha.png`
- 国内无法访问（dns错误，可以通过修改dns）

使用cdn加速：

- https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-markdown-alpha.png

- 访问可能很慢，但是最终会显示





## 自定义链接格式

设置：[配置手册 | PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/config.html#自定义链接格式)

格式自定义为





## 自定义链接格式

```
<img src="$url"      href="$url"      alt="图片加载失败，请使用代理访问（图片托管在github上）"  height="400px"	      loading="lazy"     title="$fileName"	      style="border-radius: 8px;"      decoding="async">
```







参考[使用Github+picGo搭建图床，保姆级教程来了 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/489236769)



自定义域名（jsdeliver加速）
https://cdn.jsdelivr.net/gh/{github用户名}/{仓库名}@{分支名}/


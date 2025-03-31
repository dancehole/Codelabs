开源三件套之Markdown-基本用法合集 opensource

# Markdown 基本介绍[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/开源三件套之一-Markdown/#markdown)

Markdown是一种基于**html**的**轻量级**标记语言：最后会渲染为html

优点： 1. 沉浸：纯键盘 2. 统一 3. 可迁移

基本语法：

# 一、文字的着重标记和段落的层次划分（易）[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/开源三件套之一-Markdown/#_1)

加粗，斜体 高亮 删除线 多级标题 分割线 段落引用 多级列表

语法示例：在各个网站也有，这里特别讨论一下其兼容性问题

| `1`  | ` `  |
| ---- | ---- |
|      |      |



## 效果展示：[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/开源三件套之一-Markdown/#_2)

**这是一个加粗字体** *这是一个强调文本* *这是另一个强调文本* (部分不可渲染)这是一个标记文本 ~~这是一个删除文本~~

> 这是一个引用文本

这是一个下标 （小字居下，比如 H2O） 这是一个上标 （小字居上，如 xn）

- 无序列表
- 无序列表
- 无需列表
  - 无序列表
  - 无序列表
- 有序列表一
- 有序列表二 a. 有序列表 b. 有序列表

目录：都不一样（插件）

代码片 `单行代码` `int main(){}无高亮`

| `1 2 3 4` | `int main(){  printf("设置语言后有语法高亮");  return 0; } ` |
| --------- | ------------------------------------------------------------ |
|           |                                                              |

规律：在特殊符号后面加空格（格式控制符）

补充：无列表可以用 + * - 引起 补充：层级在3之后就没有特殊符号，但可以无限缩进（不建议）

(部分不可渲染) - [ ] 这是一个计划(注意有3个空格)

> -[]这样不行 - [] 这样也不行

# 二、特定功能的实现与复杂功能[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/开源三件套之一-Markdown/#_3)

图片 表格 超链接 脚注 图床，图表

【搭建一个图床】

功能：弥补了txt到doc之间的空白

图片 ![Alt](https://img-home.csdnimg.cn/images/20220524100510.png)

![图片无法显示出来时显示此文字](https://docs.dancehole.cn/Common/%E5%BC%80%E5%8F%91-%E9%80%9A%E7%94%A8%E7%9F%A5%E8%AF%86/Markdown/)

链接: [这是一个链接](https://www.csdn.net/)

[这是一个链接(可以连接到本地)](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/Git/gitlist.md)

| 项目 | Value |
| :--- | :---- |
| 电脑 | $1600 |
| 手机 | $12   |
| 导管 | $1    |

| Column 0 |     Column 1      |               Column 2 |
| :------- | :---------------: | ---------------------: |
| 默认居左 | centered 文本居中 | right-aligned 文本居右 |

注脚：注脚会在文章最后显示？（页面最后） 一个具有注脚的文本。[1](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/开源三件套之一-Markdown/#fn:1)

Markdown将文本转换为 HTML。

- Markdown

  Text-to-HTML conversion tool

- Authors

  John

  Luke

自定义列表

- 自定义列表

  外一二

  外三四哇哦sowing

注释 *[HTML]: 超文本标记语言

最后，献上几个示例~，在gitee上，仅供参考

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13 14` | `<font face="逐浪新宋">我是逐浪新宋</font> <font face="逐浪圆体">我是逐浪圆体</font> <font face="逐浪花体">我是逐浪花体</font> <font face="逐浪像素字">我是逐浪像素字</font> <font face="逐浪立楷">我是逐浪立楷</font> <font color=red>我是红色</font> <font color=#008000>我是绿色</font> <font color=yellow>我是黄色</font> <font color=Blue>我是蓝色</font> <font color= #871F78>我是紫色</font> <font color= #DCDCDC>我是浅灰色</font> <font size=5>我是尺寸</font> <font size=10>我是尺寸</font> <font face="逐浪立楷" color=green size=10>我是逐浪立楷，绿色，尺寸为5</font> ` |
| ----------------------------------- | ------------------------------------------------------------ |
|                                     |                                                              |

我是逐浪新宋 我是逐浪圆体 我是逐浪花体 我是逐浪像素字 我是逐浪立楷 我是红色 我是绿色 我是黄色 我是蓝色 我是紫色 我是浅灰色 我是尺寸 我是尺寸

我是逐浪立楷，绿色，尺寸为5

------

1. 注脚的解释,一般都在最后 [↩](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/开源三件套之一-Markdown/#fnref:1)
@[toc](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/目录)

# Guide[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#guide)

这是一篇讲解如何正确使用**51CTO开源基础软件社区-Markdown**的排版示例，希望通过此，大家都能轻松上手，都能通过**Markdown** 能够让自己的文章有更加出色、清晰明了的排版。

## 什么是 Markdown[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#markdown)

Markdown (MD) 是现在普遍使用的一种文档书写语言格式，只需用一些非常简单易记的符号，如（# * / > [] () ），就可以轻松写出一篇具有良好的排版和可读性的文章。

## 语法示例[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#_1)

### 1.基本语法[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#1)

一些常规的语法格式。

#### 1.1 标题[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#11)

标题用#+空格表示，不同数量的#可以表示不同的标题 # Heading 1 ## Heading 2 ### Heading 3 #### Heading 4 ##### Heading 5 ###### Heading 6

#### 1.2 粗体和斜体粗体[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#12)

在需要操作的文字前后各加三个“*” **这个是粗体**斜体：在需要斜体的文字前后各加一个“*” *这个是斜体*用粗体加斜体：在需要操作的文字前后各加三个“*”***这个是粗体加斜体***

#### 1.3 删除线删除线语法[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#13)

在需要删除的文字前后各使用两个符合“~~”~~要删除的文字~~

#### 1.4 引用[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#14)

符号“>”后面书写文字。示例：

> 这个是引用

#### 1.5 目录[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#15)

可通过：@[toc](目录) 生成目录。

#### 1.6 空行[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#16)

如需空行，则可\ +回车换行。

### 2.LaTeX公式[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#2latex)

LaTeX数学公式有两种：行中公式和独立公式（行间公式）。行中公式放在文中与其它文字混编，独立公式单独成行。

#### 2.1 行内公式[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#21)

`$E=mc^2$` E=mc2

#### 2.2 独立公式[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#22)

`$$E=mc^2$$` \(E=mc2\)

#### 2.3 复杂公式[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#23)

| ` 1 2 3 4 5 6 7 8 9 10` | `$$\begin{array}{c} \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\ \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\ \nabla \cdot \vec{\mathbf{B}} & = 0 \end{array}$$ ` |
| ----------------------- | ------------------------------------------------------------ |
|                         |                                                              |

$$ \begin{array}{c}

\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} & = \frac{4\pi}{c}\vec{\mathbf{j}} \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \

\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \

\nabla \cdot \vec{\mathbf{B}} & = 0

\end{array} $$

**更多语法参考：**[《51CTO开源基础软件社区-Markdown 编辑器添加 Latex数学公式教程》](https://harmonyos.51cto.com/posts/3842)

希腊字母表

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-markdown-alpha.png"/>

### 3.代码高亮[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#3)

#### 3.1 普通[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#31)

| `1 2 3` | `*emphasize*    **strong** _emphasize_    __strong__ @a = 1 ` |
| ------- | ------------------------------------------------------------ |
|         |                                                              |

#### 3.2 语法高亮支持[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#32)

如果在 ``` 后面跟随语言名称，可以有语法高亮的效果，如:

##### 3.2.1 html/xml 代码高亮示例[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#321-htmlxml)

| ` 1 2 3 4 5 6 7 8 9 10 11` | `<!DOCTYPE html> <html lang="en"> <head>    <meta charset="UTF-8">    <meta http-equiv="X-UA-Compatible" content="IE=edge">    <meta name="viewport" content="width=device-width, initial-scale=1.0">    <title>Document</title> </head> <body>   </body> </html> ` |
| -------------------------- | ------------------------------------------------------------ |
|                            |                                                              |

##### 3.2.2 Python高亮示例[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#322-python)

| `1 2 3 4 5 6 7` | `#!/usr/bin/python3 # Fibonacci series: 斐波纳契数列 # 两个元素的总和确定了下一个数 a, b = 0, 1 while b < 10:    print(b)    a, b = b, a+b ` |
| --------------- | ------------------------------------------------------------ |
|                 |                                                              |

##### 3.2.3 CSS 文件示例[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#323-css)

| ` 1 2 3 4 5 6 7 8 9 10 11 12 13` | `body {    background-color: red; } h1 {    color: orange;    text-align: center; } p {    font-family: "Times New Roman";    font-size: 20px; } ` |
| -------------------------------- | ------------------------------------------------------------ |
|                                  |                                                              |

> 支持语言有: `HTML/XML`, `JSON`, `Bash`, `CSS`, `Java`, `JavaScript`, `PHP`, `Python`, `Rust`, `C/C++` …

### 4.绘制表格[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#4)

> | Column 1 | Column 2 | Column 3 |
> | :------- | -------: | :------: |
> | cell 1   |   cell 2 |  cell 3  |
> | cell 4   |   cell 5 |  cell 6  |
> | cell 7   |   cell 8 |  cell 9  |

| Column 1 | Column 2 | Column 3 |
| :------- | -------: | :------: |
| cell 1   |   cell 2 |  cell 3  |
| cell 4   |   cell 5 |  cell 6  |
| cell 7   |   cell 8 |  cell 9  |

### 5.高效绘制流程图[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#5)

\```html/xml` ``flow st=>start: Start op=>operation: Your Operation cond=>condition: Yes or No? e=>end

st->op->cond cond(yes)->e cond(no)->op ```

| ` 1 2 3 4 5 6 7 8 9 10` | `显示： ```flow st=>start: Start op=>operation: Your Operation cond=>condition: Yes or No? e=>end st->op->cond cond(yes)->e cond(no)->op ` |
| ----------------------- | ------------------------------------------------------------ |
|                         |                                                              |



### 6.高效绘制序列图[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#6)

\```html/xml` ``seq Alice->Bob: Hello Bob, how are you? Note right of Bob: Bob thinks Bob→Alice: I am good thanks! ```

| `1 2 3 4` | ````seq Alice->Bob: Hello Bob, how are you? Note right of Bob: Bob thinks Bob-->Alice: I am good thanks! ` |
| --------- | ------------------------------------------------------------ |
|           |                                                              |



### 7.高效绘制甘特图[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#7)

\```html/xml` ``gantt axisFormat %m/%d title 项目开发流程 section 项目立项 需求分析 :a1, 2021-01-01, 5d 可行性报告 :after a1, 6d 概念验证 : 5d section 项目实施 概要设计 :2021-01-14 , 5d 详细设计 :2021-01-19, 10d 编码 :2021-01-29, 10d 测试 :2021-02-08, 5d section 发布验收 发布: 3d 验收: 3d ```

```gantt
    axisFormat  %m/%d
    title 项目开发流程
    section 项目立项
        需求分析       :a1, 2021-01-01, 5d
        可行性报告     :after a1, 6d
        概念验证       : 5d
    section 项目实施
        概要设计      :2021-01-14  , 5d
        详细设计      :2021-01-19, 10d
        编码          :2021-01-29, 10d
        测试          :2021-02-08, 5d
    section 发布验收
        发布: 3d
        验收: 3d
```





### 8.Todo列表[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#8todo)

语法：

> \- [ ] **社区直播公开课开展情况** - [x] 5分钟搞定俄罗斯方块---组件化实战 - [x] HarmonyOS应用服务早期红利与各项技术场景创新分析 - [ ] 从萌新到高手——怎样快速掌握鸿蒙开发

显示： - [ ] **社区直播公开课开展情况** - [x] 5分钟搞定俄罗斯方块---组件化实战 - [x] HarmonyOS应用服务早期红利与各项技术场景创新分析 - [ ] 从萌新到高手——怎样快速掌握鸿蒙开发

### 9.链接[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#9)

支持直接粘贴链接地址。链接语法和显示如下： 语法1：`[链接名称](http://链接网址)` 显示：[链接名称](http://xn--ses510ahtve0t/) 或语法2：`<http://链接网址>` 显示：[http://链接网址](http://xn--ses510ahtve0t/)

### 10. 图片[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#10)

可通过上传按钮上传图片，也支持直接粘贴图片，也支持拖拽上传图片。语法如下： 语法：`![请添加链接描述](图片地址)`

### 11. 视频[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#11_1)

仅支持mp4和mp3视频。语法如下： 语法：`![视频名称](视频地址)`

### 12. 有序列表&有序列表[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#12_1)

无序列表的使用，在符号“-”后加空格使用。如下： - 列表项 - 列表项 - 列表项

如果要控制列表的层级，则需要在符号“-”前使用空格。如下： - 列表项 - 列表项 - 列表内容 - 列表内容

有序列表的使用，在数字及符号“.”后加空格几个，如下： 1. 列表项 2. 列表项 1. 列表内容 2. 列表内容 1. 子列表内容 2. 子列表内容 3. 子列表内容

### 13. 分割线[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#13_1)

可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，同时需要在分隔线的上面空一行。 例： `-------` `*****` `______`

------

------

------

### 14. 符号转义[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#14_1)

如果你的描述中需要用到 markdown 的符号，比如 `# *` 等，但又不想它被转义，这时候可以在这些符号前加反斜杠，如 `\ # *`进行避免。

### 15. 导入和导出[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#15_1)

支持正文导出`.md`的文档，支持导入.md格式的文档。 导入：支持导入本地 `.md`格式的文档 导出：正文内容可以导出本地`.md`格式的文档

### 16. 颜色[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#16_1)

使用 `$\color{颜色}{文字}$` 来更改特定的文字颜色。 更改文字颜色 需要浏览器支持，如果不支持则文字将被渲染为黑色。

输入 `$\color {#rgb} {text}$` 来自定义更多的颜色，示例： **语法：** `html/xml $\begin{array}{|rrrrrrrr|}\hline \verb+#000+ & \color{#000}{text} & & & \verb+#00F+ & \color{#00F}{text} & & \\ & & \verb+#0F0+ & \color{#0F0}{text} & & & \verb+#0FF+ & \color{#0FF}{text}\\ \verb+#F00+ & \color{#F00}{text} & & & \verb+#F0F+ & \color{#F0F}{text} & & \\ & & \verb+#FF0+ & \color{#FF0}{text} & & & \verb+#FFF+ & \color{#FFF}{text}\\ \hline \end{array}$` **显示：** You can't use 'macro parameter character #' in math modeYou can't use 'macro parameter character #' in math mode

### 17. 其他说明[¶](https://docs.dancehole.cn/Common/开发-通用知识/Markdown/[csdn]markdown最全语法/#17)

使用富文本编辑器发布的内容只能富文本编辑器编辑，不可切换Markdown编辑器； 使用Markdown编辑器发布的内容只能Markdown编辑器编辑，不可切换富文本编辑器编辑。
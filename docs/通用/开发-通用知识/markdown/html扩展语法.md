使用 Ctrl+Alt+Del 重启电脑



# markdown内嵌html

直接输入html语法即可解析：

优点是可以通过css样式更灵活的排布（如图片限制大小，图片居中等）

## 行级内联标签：

部分不可用的将特别标识

| 内联标签名   |                             效果                             |
| :----------- | :----------------------------------------------------------: |
| `<a>`        |       标签定义超链接，用于从一张页面链接到另一张页面。       |
| `<abbr>`     |                表示一个缩写形式==（不可用）==                |
| `<acronym>`  |               定义只取首字母缩写==（不可用）==               |
| `<b>`        |                         粗体(不推荐)                         |
| `<strong>`   |                           粗体强调                           |
| `<bdo>`      | 改变文本的显示方向，正常显示文本从左至右，例如，some，如果改成从右到左，则会显示成 emos==（不可用）== |
| `<big>`      |                         大号字体加粗                         |
| `<br>`       |                             换行                             |
| `<dfn>`      |                           定义字段                           |
| `<em>`       |                           斜体强调                           |
| `<i>`        |            斜体文本效果，好像效果和 `<em>` 相同呀            |
| `<font>`     | 规定文本的字体、字体尺寸、字体颜色，不赞成使用==（不可用）== |
| `<input>`    |                          文本输入框                          |
| `<kbd>`      |                         定义键盘文本                         |
| `<s>`        |             中划线，不推荐使用，推荐使用 `<del>`             |
| `<strike>`   | 中划线；`<strike>` 标签可定义加删除线文本定义。不推荐使用，推荐使用 `<del>` |
| `<del>`      |                            删除线                            |
| `<samp>`     |               定义范例计算机代码，定义样本文本               |
| `<select>`   |            项目选择，下拉列表；创建单选或多选菜单            |
| `<span>`     |              常用内联容器，组合文档中的行内元素              |
| `<sub>`      |                         定义下标文本                         |
| `<sup>`      |                         定义上标文本                         |
| `<textarea>` |                        多行文本输入框                        |
| `<tt>`       |               呈现类似打字机或者等宽的文本效果               |
| `<u>`        |                            下划线                            |
| `<var>`      |                           定义变量                           |
| `<cite>`     | [cite](https://www.w3school.com.cn/tags/tag_cite.asp) 标签通常表示它所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。按照惯例，引用的文本将以斜体显示。 |
| `<code>`     |                      定义计算机代码文本                      |
| `<dfn>`      |      可标记那些对特殊术语或短语的定义 ，也是斜体效果呀       |
| `<img>`      |                     向网页中嵌入一幅图像                     |
| `<label>`    |                为 input 元素定义标注（标记）                 |
| `<q>`        |       定义短的引用，浏览器经常在引用的内容周围添加引号       |
| `<small>`    |                       呈现小号字体效果                       |

示例：

这是一个超链接

**粗体1**

**粗体2**

大号字体



换行符

定义字段 

*斜体*

*斜体2*

文本输入框

键盘文本Space

~~这是删除线~~

范例计算机代码

单选框 多选框 单选框

下标：下标文本

上标：上标文本



```
呈现类似打字机或者等宽的文本效果
```

下划线

定义变量

引用

```
代码文本
```

标记

短引用

小号字体

![img](https://gitee.com/dancehole/chess/raw/develop/DS_TriangleChess/11.png)这是一张图片

latex（test）

$用 \cdot 表示点乘 \neq不等于，\equiv恒等于 \bmod 取模 $

/mat

下标平方根分式下标平方根分式下标y=a1⋅x2….平方根(a+b),分式AB

标记标记标记over―+under―

$\overrightarrow{向量a},\overleftarrow{向量b} $

积分等：

∫2∗1a2lim∗x→2ab∑∏

/ma

…αβγ

# markdown嵌入js文件

这通常用于markdown生成html后，部署到网站上，可以通过此实现一些伪动态内容【个人博客】

方法1：

| `1`  | `<script> alert("Hello, World!"); </script> ` |
| ---- | --------------------------------------------- |
|      |                                               |

方法2：

| `1`  | `<script src="script.js"></script> ` |
| ---- | ------------------------------------ |
|      |                                      |

导出即可

注意：js代码最好放在最后，否则会出现元素没用创建的报错（getelebyid错误）
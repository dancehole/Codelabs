# markdown内嵌html

直接输入html语法即可解析：

优点是可以通过css样式更灵活的排布（如图片限制大小，图片居中等）

## 行级内联标签：

部分不可用的将不显示

- **注意：对于这些html标签，我们更加推进使用`<p>`+css样式控制，以确保格式统一和可读性**

| 内联标签名   |                             效果                             | 展示                                                    |
| :----------- | :----------------------------------------------------------: | ------------------------------------------------------- |
| `<a>`        |       标签定义超链接，用于从一张页面链接到另一张页面。       | <a href="https://docs.dancehole.cn">这是一个链接</a>    |
| `<b>`        |                         粗体(不推荐)                         | <b>这是粗体</b>                                         |
| `<strong>`   |                           粗体强调                           | <strong>这是粗体2</strong>                              |
| `<big>`      |                         大号字体加粗                         | <big>大号加粗</big>                                     |
| `<br>`       |                             换行                             |                                                         |
| `<dfn>`      |                           定义字段                           | <dfn>定义字段</dfn>                                     |
| `<em>`       |                           斜体强调                           | <em>斜体</em>                                           |
| `<i>`        |            斜体文本效果，好像效果和 `<em>` 相同呀            | <i>斜体</i>                                             |
| `<font>`     |        规定文本的字体、字体尺寸、字体颜色，不赞成使用        | <font size="2" color="red">用size和color属性控制</font> |
| `<input>`    |                          文本输入框                          | [click here](#input)                                    |
| `<kbd>`      |                         定义键盘文本                         | <kbd>space</kbd>                                        |
| `<s>`        |             中划线，不推荐使用，推荐使用 `<del>`             | <s>中划线</s>                                           |
| `<del>`      |                            删除线                            | <del>删除线</del>                                       |
| `<select>`   |            项目选择，下拉列表；创建单选或多选菜单            | [click here](#input)                                    |
| `<span>`     |              常用内联容器，组合文档中的行内元素              |                                                         |
| `<sub>`      |                         定义下标文本                         | 这是<sub>下标</sub>                                     |
| `<sup>`      |                         定义上标文本                         | 这是<sup>上标</sup>                                     |
| `<textarea>` |                        多行文本输入框                        | [click here](#input)                                    |
| `<tt>`       |               呈现类似打字机或者等宽的文本效果               | <tt>打字机文本</tt>                                     |
| `<u>`        |                            下划线                            | <u>下划线</u>                                           |
| `<cite>`     | [cite](https://www.w3school.com.cn/tags/tag_cite.asp) 标签通常表示它所包含的文本对某个参考文献的引用，比如书籍或者杂志的标题。按照惯例，引用的文本将以斜体显示。 | <cite>引用</cite>                                       |
| `<code>`     |                      定义计算机代码文本                      | <code>代码</code>                                       |
| `<img>`      |                     向网页中嵌入一幅图像                     |                                                         |
| `<label>`    |                为 input 元素定义标注（标记）                 | <label>dasd</label>                                     |
| `<q>`        |       定义短的引用，浏览器经常在引用的内容周围添加引号       | <q>短引用</q>                                           |
| `<small>`    |                       呈现小号字体效果                       | <small>小号</small>                                     |



**表单内容：label、input、select和form标签<a id="input"></a>**

<form action="demo_form.php">  
<label>这是label标题</label><br>
First name: <input type="text" name="fname"><br>  
Last name: <input type="text" name="lname"><br>
select:<select>
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
</select><br>
<textarea rows="3" cols="30">
我是一个文本框。
</textarea><br>
  <input type="submit" value="提交"> 
</form>




## markdown嵌入js文件

这通常用于markdown生成html后，部署到网站上，可以通过此实现一些伪动态内容【个人博客】

方法1：

`<script> alert("Hello, World!"); </script>`

方法2：

`<script src="script.js"></script>`

导出即可

注意：js代码最好放在最后，否则会出现元素没用创建的报错（getElebyid错误）



## 链接demo

# <a id="titleA">titleA</a>

# <a id="titleB">titleB</a>

- [toA](#titleA)

- [toB](



```
<font face="逐浪新宋">我是逐浪新宋</font>
<font face="逐浪圆体">我是逐浪圆体</font>
<font face="逐浪花体">我是逐浪花体</font>
<font face="逐浪像素字">我是逐浪像素字</font>
<font face="逐浪立楷">我是逐浪立楷</font>
<font color=red>我是红色</font>
<font color=#008000>我是绿色</font>
<font color=yellow>我是黄色</font>
<font color=Blue>我是蓝色</font>
<font color= #871F78>我是紫色</font>
<font color= #DCDCDC>我是浅灰色</font>
<font size=5>我是尺寸</font>
<font size=10>我是尺寸</font>
<font face="逐浪立楷" color=green size=10>我是逐浪立楷，绿色，尺寸为5</font>
```

<font face="逐浪新宋">我是逐浪新宋</font>
<font face="逐浪圆体">我是逐浪圆体</font>
<font face="逐浪花体">我是逐浪花体</font>
<font face="逐浪像素字">我是逐浪像素字</font>
<font face="逐浪立楷">我是逐浪立楷</font>
<font color=red>我是红色</font>
<font color=#008000>我是绿色</font>
<font color=yellow>我是黄色</font>
<font color=Blue>我是蓝色</font>
<font color= #871F78>我是紫色</font>
<font color= #DCDCDC>我是浅灰色</font>
<font size=5>我是尺寸</font>
<font size=10>我是尺寸</font>
<font face="逐浪立楷" color=green size=10>我是逐浪立楷，绿色，尺寸为5</font>

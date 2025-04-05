
## 一、图片处理

1. 图片：统一使用html的`<img>`标签，而不是用markdown原生的`![]()`。
	- 原因1：方便控制样式，居中 & 统一大小
2. 多个图片排列时，使用**表格**约束样式。

举例：使用markdown标签的图片。假如图片是竖屏类的，很不好看

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-2024-aomen2"/>
<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-zhuhai-2"/>


方法1：使用表格约束


部分解析器会自动填充表格的样式

| 这是第一张图片                                                                                          | 这是第二章图片                                                                                       |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-2024-aomen2"/> | <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-zhuhai-2"/> |

方法二：单独控制每个图片的长宽高，和其他属性

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-2024-aomen2" height="100px"/>

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-zhuhai-2" height="150px"/>

一些常用的规范

```html
// 可以添加的属性：其中标*表示常用

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-2024-aomen2"
     href="跳转链接"
     alt="替代文本，假如图片无法渲染，可以有文字显示"
     width="长宽规定其中一个即可，保证比例"
     height="长宽规定其中一个即可"
     size="(max-width: 600px) 480px,1000px"	// 响应式设计
     loading="lazy"	// 懒加载 性能优化
     title="2024年澳门之旅"	// 悬停提示
     class="travel-photo"
     style="border-radius: 8px;"
     decoding="async">

// 可以添加的样式
<img 		       src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-2024-aomen2"
     style="width: 300px; height: auto；	// 长宽高 这里也可以定义
            max-width:300px; max-height:auto; // 最大尺寸
            object-fit:cover(充满容器 可能裁剪)
            		   contain（图片完整 可能留白）
            		   fill（拉伸填充）
            border: 2px solid #ff0000;(边框样式:宽度、类型、颜色)
            border-radius:50%(圆角，50%为圆形)
            box-shadow:2px 2px 10px rgba(0,0,0,0.3);(投影)
            filter: grayscale(50%);(图片滤镜：黑白效果)
            		blur(2px);(图片滤镜：模糊)
            		brightness:(1.2);(亮度)
            float: left;margin-right:10px;(文字环绕图片，设置浮动)
			position: absolute; top: 0; left: 0;
            cursor:pointer(手型)move(可被移动)wait(忙)default(箭头)text(可被选中)crosshair(十字线)help(可用帮助)zone-in(放大)zone-out()
            
            // 更高级的伪类悬停效果
            transition: transform 0.3s;
            "
     // 更高级的效果
     onmouseover="this.style.transform='scale(1.02)'"
     onmouseout="this.style.transform='scale(1)'"
     onclick="alert('图片被点击了！')"
     />

// 可以通过注入script标签，触发函数，实现更加复杂的功能（就和html编辑一样）
<script>
  function handleImageClick() {
    console.log("图片被点击");
    // 这里可以写更复杂的逻辑
  }
</script>
```

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-zhuhai-2"
     style="max-width: 100%;
			filter: grayscale(100%)blur(1px);
            max-height: 300px;
            border-radius: 18px;
			float: left; margin-right: 100px;margin-left:30px;
            box-shadow: 0 5px 10px rgba(255,0,0,0.4);
            transition: transform 0.3s;"
			title="这是一个图片"
	onmouseover="this.style.transform='scale(1.02)'"
    onmouseout="this.style.transform='scale(1)'">123456dsad

这是浮动布局

float

123

456

789

111

这是浮动布局





**实现放大缩小**



<img id="test1" width="100px" src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-zhuhai-2" 
  onclick="document.getElementById('fullscreen-image').style.display='block';document.getElementById('test1').style.display='none';"
  style="cursor: zoom-in;"/>

<!-- 隐藏的大图容器,点击后放大 -->

<div id="fullscreen-image" style="display: none;">
  <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/notebooks/travel-zhuhai-2" style="width: 100%;cursor: zoom-out;" onclick="document.getElementById('fullscreen-image').style.display='none';document.getElementById('test1').style.display='block'">
</div>





## 文字处理



有时候我们希望有图片的描述/表格的标题，希望有一行居中图片，可以用



```html
<center>center标签，HTML4 已废弃该标签，但在现代浏览器仍有效。</center>


（行内文本居中）
<p style="text-align: center;border:1px solid">这是行内文本居中</p>
<p style="text-align: center;border:1px solid">这是行内文本居中</p>

（块级元素居中）
<div style="display: flex; justify-content: center;border:1px solid;">
  <p>块级元素居中</p><p>块级元素居中</p><p>块级元素居中</p>
</div>

（网格布局居中）适合同时控制水平和垂直居中。
<div style="display: grid; place-items: center;border:1px solid;">
  <p>网格布局居中</p><p>网格布局居中</p><p>网格布局居中</p><p>网格布局居中</p>
</div>
```



<center>center标签，HTML4 已废弃该标签，但在现代浏览器仍有效。</center>

<p style="text-align: center;border:1px solid">这是行内文本居中</p>

<p style="text-align: center;border:1px solid">这是行内文本居中</p>

<div style="display: flex; justify-content: center;border:1px solid;">
  <p>块级元素居中</p><p>块级元素居中</p><p>块级元素居中</p>
</div>

<div style="display: grid; place-items: center;border:1px solid;">
  <p>网格布局居中</p><p>网格布局居中</p><p>网格布局居中</p><p>网格布局居中</p>
</div>



## 其他
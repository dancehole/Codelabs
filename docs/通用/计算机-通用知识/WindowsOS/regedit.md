f【状态：未发布，待修改，命令和排版】

# 注册表相关：还原win10资源管理器、win10右键菜单、修改右键菜单内容

----

==观前提示：本次修改涉及注册表，请提前备份原注册表，防止不正确的修改导致系统不稳定/无法启动==、

**参考文献：[注册表 | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/win32/sysinfo/registry)**

参考资料：b站up【有限的未知】【勤份】（排名不分先后）

参考文章：[你的Win10右键菜单还有一大堆用不上的选项？看完还你最简洁的右键菜单！！！_modernsharing-CSDN博客](https://blog.csdn.net/qq_45668124/article/details/104807420)等，在文章中间插入参考原文链接

使用环境：Windows11 家庭版/windos10家庭版可用/2024年1月/64bit

------

==本文内容不使用任何工具！！绿色简单，可以逆向恢复操作==

文末推荐的辅助管理右键菜单的工具：

**Dism++**（很多日常用到的用不到的可以设置，本文很多没有提及的都可以在此设置）

- [仓库地址：GitHub - Chuyu-Team/Dism-Multi-language](https://github.com/Chuyu-Team/Dism-Multi-language)

**ContextMenuManager** 开源轻量的右键菜单编辑器（<u>非常强大 开源且灵活</u>）

- [仓库地址：BluePointLilac/ContextMenuManager · GitHub](https://github.com/BluePointLilac/ContextMenuManager)

-----



[toc]

## 前言：注册表的编辑方式

通常来说注册表的编辑方式有三种，分别是：

- **使用注册表编辑器 **:
  - 打开运行对话框（Win + R）。
  - 输入 `regedit` 并按回车键。
  - 导航到你要修改的注册表路径并修改
  - <u>可视化查看与修改</u>
- **使用注册表命令行工具 (Reg)**:
  - 打开命令提示符（CMD）或 PowerShell。（运行-输入cmd或者powershell回车）
  - 使用 `reg` 命令来执行注册表操作。
  - <u>方便快速移植环境</u>
- **使用脚本或编程语言**:
  - 通常在软件/程序/工具中使用
  - 对用户透明（无需理会）
- **通过导入`.reg` 文件**:
  - 创建一个文本文件，编辑其中的注册表项和值。
  - 将文件扩展名改为 `.reg`。
  - 双击执行该文件，将其中的注册表信息导入到系统注册表中。

**下面所有操作均会介绍两种以上方法，请选择性使用。**

---

## 修改win11右键菜单、右键选项、还原win10右键菜单

> win11更新后，右键菜单总是没那么好用，每次想要的功能都被折叠了。本文给出两种方法展开折叠菜单。
>
> 适用版本：2024/1/25日可用

### 方法0（不改设置，非永久，更安全）

每次按下`shift+右键`，既可**直接打开折叠菜单**啦~ 

如果还觉得麻烦，可以参考下面两个方法（命令行and注册表）

### 方法一(命令行一键修改)

> 确保以管理员身份运行cmd，防止权限问题

**cmd输入**

- `reg.exe add "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /f /ve`

**重启文件资源管理器**

- `taskkill /f /im explorer.exe & start explorer.exe`

重启后即生效

---

**恢复方法**：如果想回到win11风格，在命令行输入`reg.exe delete "HKCU\Software\Classes\CLSID\{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}\InprocServer32" /va /f `.重启后恢复win11右键。

### 方法二（手动修改注册表）

> 假如方法一不行可以尝试

1. cmd输入regedit进入注册表编辑器

2. 定位到`“HKEY_CURRENT_USER\SOFTWARE\CLASSES\CLSID”`

3. 右键点击“CLSID”键值，新建一个名为`{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}`的项
   <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-5.png"/>

4. 右键点击新创建的项，新建一个名为`InprocServer32`的项，按下回车键保存

   <img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-2.png"/>

5. 重启或**重启**windows Explorer.exe进程（在任务管理器中，连同文件资源管理器、任务栏和开始菜单，请不要直接杀进程-会导致死机）

5. 恢复方法：同理将整个`{86ca1aa0-34aa-4e8b-a509-50c905bae2a2}`删除即可

---

### 效果图

原来右键->现在右键

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-11.png"/>



---

## 恢复win10风格的文件资源管理器

> 请注意：经测试，文件资源管理器**一经修改（为旧版）则无法恢复！！请谨慎操作**（如果想体验，可以直接看“彩蛋”）

### 前言

> win11风格的文件资源管理器缺点：
>
> 1. 路径显示字符更少了
> 2. 无法直接拖拽文件/文件夹到上一级
> 3. win11文件资源管理器静态资源占用高（未实测）
>
> 下面介绍三种方法

### 方法0（小彩蛋）

在Win11系统下，打开控制面板（cmd输入control），点击**左上角的向上箭头**即可一键恢复win10风格的文件管理器啦！（怀疑是微软工作人员忘记修改了）



<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-7.png"/>

**同样是win10风格的文件资源管理器**

---

### 方法一

1. 输入`reg add "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked" /v "{e2bf9676-5f8f-435c-97eb-11607a5bedf7}" /t REG_SZ /d "" /f`
2. 输入`reg add "HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked" /v "{e2bf9676-5f8f-435c-97eb-11607a5bedf7}" /t REG_SZ /d "" /f`

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-3.png"/>

4. 恢复win11操作（删除注册表）：`reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked" /f`

   `reg delete "HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Shell Extensions\Blocked" /f`

### 方法二

1. cmd输入regedit进入注册表编辑器
2. 定位到`\HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions\`
3. 新建项/K，命名为`Blocked`（如果已经存在，则忽略）
4. 新建字符串/S，命名为`{e2bf9676-5f8f-435c-97eb-11607a5bedf7}`。不用设置数据值。
4. 定位到`HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Shell Extensions`
4. 新建项Blocked
4. 新建字符串/S，命名为`{e2bf9676-5f8f-435c-97eb-11607a5bedf7}`。不用设置数据值。
5. 重启电脑/文件资源管理器(windows explorer)

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-5.png"/>

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-4.png"/>



### 效果图

原来：

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-16.png"/>

现在：

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-6.png"/>

**一个字，简洁！**





## 修改鼠标右键菜单相关内容

> 这里分为**五大部分**，修改**右键桌面/空白处菜单**，修改右键选**中文件夹、文件**菜单，修改右键新建文件里的文件目录、
>
> 这里可以更加精细的修改，但因为不常用所以忽略，详情可以查看[注册表原理及使用方法-dancehole]()

关系到右键菜单的几个位置：

```
文件：计算机\HKEY_CLASSES_ROOT\*
文件夹：计算机\HKEY_CLASSES_ROOT\Folder
目录：计算机\HKEY_CLASSES_ROOT\Directory
所有对象：计算机\HKEY_CLASSES_ROOT\AllFilesystemObjects
...等等
计算机\HKEY_CLASSES_ROOT\lnkfile\shellex\ContextMenuHandlers\QQShellExt
```

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-9.png"/>

如图所示定位到注册表三个项

> directory和folder区别参考：[电脑术语中：directory 和 folder 的区别-CSDN博客](https://blog.csdn.net/David_jiahuan/article/details/99578422)
>
> 简单来说，***directory***翻译为目录/路径，而***folder***翻译为文件夹
>
> **假如注册表内看到看不懂的项，建议别删别动（）**





### 修改右键新建文件菜单

> 我们以增加”新建markdown“为例。

1. `计算机\HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\Discardable\PostSetup\ShellNew`



添加md文件进入右键菜单：

```bash
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\.md]
@="Typora.md"
"Content Type"="text/markdown"
"PerceivedType"="text"

[HKEY_CLASSES_ROOT\.md\ShellNew]
"NullFile"=""
```

用NullFile=“”代表新建一个空文件

我们新建字符串为FileName，值为模板路径，这样就可以创建一个模板文件



<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-8.png"/>



我们可以指定新建一个模板文件（暂时支持纯文本文件，office模板需要额外设置）

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-15.png"/>

**把ShellNew里的NullFile重命名为FileName，值为模板内容（可以使用模板文件路径）**



### 修改右键空白弹出菜单

这里又分为两个部分：我想在右键新建我想要的菜单/自定义的菜单/删除不想要的菜单



1. 新建一个自定义折叠菜单。

定位到`计算机\HKEY_CLASSES_ROOT\Directory\Background\shell`，shell下面就是右键空白菜单的项



我们新建一个项“dancehole”，可以看到右键就多了一个

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-13.png"/>



修改他的属性：

1. 修改为多级目录，则同样在dancehole项下新建一个shell，以此类推（凡是某个**项**后有子项的，就要在项后新建一个shell）
2. 最后一级可以是一个command项，用于调用某个命令（比如调用程序）
3. 注意：一个注册表下的子项数量最多不超过16个（即“叶子节点不超过16个”），对树高没有限制



**使能项生效参数：在新建项（比如dancehole）下定义的【字符串键值】**

| 字符串      | 值 示例          | 备注                                  |
| ----------- | ---------------- | ------------------------------------- |
| SubCommands |                  | 用于声明该项有子项目                  |
| MUIVerb     | dancehole(&A)    | 项目命名和添加热键                    |
| Extended    |                  | 设置是否仅shift+右键显示              |
| icon        | D:/dancehole.ico | 定义图标（支持.ico/.exe）可从程序导入 |

**(Extended参数不保证生效，部分不可用)**

### 右键文件夹菜单 使用typora打开文件夹

参考[Typora如何添加到右键菜单中可以打开文件夹_typora 右键打开整个文件夹-CSDN博客](https://blog.csdn.net/u012520952/article/details/121683828)

1. 新增项

定位到`计算机\HKEY_CLASSES_ROOT\*\shell\`

定位到`计算机\HKEY_CLASSES_ROOT\Folder\shell\`

2. 新建项

新建typora-command

默认属性里添加`D:\Tools\Typora\typora.exe" "%1`（改为自己的typora路径）

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-12.png"/>



### 删除百度网盘、7zip等右键菜单内容

而百度网盘在：

- `计算机\HKEY_CLASSES_ROOT\Directory\shellex\ContextMenuHandlers\YunShellExt`

 删除该项即可

### 删除右键文件夹”还原以前的版本“

`HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Shell Extensions`

新建Blocked项

新建字符串，重命名为`{596AB062-B4D2-4215-9F74-E9109B0A8153}`



### 删除右键文件夹”包含到库中“

包含到库中，首先我们要知道库是什么：

库就是windows方便用户索引文件的方式，类似”收藏夹“。而我们目录安排的很好自然也不需要，所以连着库一起删除了吧~

【关于库，这里有另一个文章】

`计算机\HKEY_CLASSES_ROOT\Folder\ShellEx\ContextMenuHandlers\Library Location`

删除默认值`{3dad6c5d-2167-4cae-9914-f99e41c12cfa}`

### 删除右键文件夹”固定到开始“

`计算机\HKEY_CLASSES_ROOT\Folder\ShellEx\ContextMenuHandlers\PintoStartScreen`

删除默认值`{470C0EBD-5D73-4d58-9CED-E91E22E23282}`（或）



### 删除右键文件”固定到开始“

`计算机\HKEY_CLASSES_ROOT\*\shell\PintoStartScreen`

删除项/或删除其默认值



### 关闭 右键文件/文件夹”发送到“

[去除右键菜单中的发送到选项-CSDN博客](https://blog.csdn.net/weixin_33872566/article/details/86136263)

`计算机\HKEY_CLASSES_ROOT\AllFilesystemObjects\shellex\ContextMenuHandlers\SendTo`，默认属性为`	{7BA4C740-9E81-11CF-99D3-00AA004AE837}`

删去SendTo子键，或者增加Extended属性



### 关闭”通过qq发送到“

[去除右键菜单中“通过QQ发送到我的手机”-右键,手机-远景论坛-微软极客社区 (pcbeta.com)](https://bbs.pcbeta.com/viewthread-1460482-1-1.html)

```
Windows Registry Editor Version 5.00
[-HKEY_CLASSES_ROOT\AllFilesystemObjects\shellex\ContextMenuHandlers\QQShellExt64]
@="{5D639F05-2181-4B58-A850-9F7E5C79D5DE}"
[-HKEY_CLASSES_ROOT\Folder\shellex\ContextMenuHandlers\QQShellExt64]
@="{5D639F05-2181-4B58-A850-9F7E5C79D5DE}"
[-HKEY_CLASSES_ROOT\lnkfile\shellex\ContextMenuHandlers\QQShellExt64]
@="{5D639F05-2181-4B58-A850-9F7E5C79D5DE}"
```

1. 文件：打开注册表编辑器并找到 `HKEY_CLASSES_ROOT\AllFilesystemObjects\shellex\ContextMenuHandlers`，将`QQShellExt`删除属性`{5D639F05-2181-4B58-A850-9F7E5C79D5DE}`

2. 计算机\HKEY_CLASSES_ROOT\lnkfile\shellex\ContextMenuHandlers\QQShellExt



其中属性`{5D639F05-2181-4B58-A850-9F7E5C79D5DE}`为索引`\HKEY_CLASSES_ROOT\QQShellExt.QQShellExtension\CLSID`



## 结语

在文章末尾，发现了一个非常好用的工具推荐大家：由**蓝点lilac**大佬制作的windows右键管理工具，可以进行更加细致化的管理。

- [仓库地址：BluePointLilac/ContextMenuManager · GitHub](https://github.com/BluePointLilac/ContextMenuManager)

<img src="https://cdn.jsdelivr.net/gh/dancehole/image@main/danceholeLabs/common-csdn-regedit-10.png"/>



2024/1/25可用，后续版本更新方法可能失效。

**copyright[dancehole](https://blog.csdn.net/dancehole)，部分方法整理自互联网。**

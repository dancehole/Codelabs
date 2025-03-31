# FreeFileSync文件同步与备份工具

> 强大的文件同步工具，此处记录已经完成的操作（方便复用）
>
> 相关链接：
>
> [(19 封私信 / 18 条消息) 有什么软件可以两台电脑自动同步一个文件夹？ - 知乎 (zhihu.com)](https://www.zhihu.com/question/345199210)
>
> [好用的自动同步软件：FreeFileSync - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/266883367)



## 首次使用

### 1. 软件界面介绍

<img src="https://raw.githubusercontent.com/dancehole/image/main/danceholeLabs/common-freefilesync1.png"/>

1. 文件摘要区：可以看到主区域（左侧）的文件树，包括监视占用大小最多的文件/文件夹；占用最多的文件类型。可以通过此建立过滤器，排除不需要同步的文件。同时借助文件摘要区，可以对目录进行简单的清理与移动
2. 比较区
3. 同步区
4. 过滤器：



这里使用的过滤器，仅供参考：

CODE代码忽略

```bash
# freefilesync产生文件
\System Volume Information\
\$Recycle.Bin\
\RECYCLE?\
\Recovery\
*\thumbs.db

# git
*\*.git\

# vs
*\*.vs\
*\x64\
*\x86\
*\Debug\
*\[Dd]ebugPublic\
*\[Rr]elease\
*\[Rr]eleases\

# vivado
\*.sim

```





>  使用时会进行全盘/全文件夹扫描，害怕寿命者请谨慎



我们另存为两种文件，一种为批处理作业

<img src="https://raw.githubusercontent.com/dancehole/image/main/danceholeLabs/common-freefilesync2.png"/>

点击同步文件（下面），会打开软件界面并执行。比较完后可以查看文件异同，并**手动点击**同步

点击批处理文件，会后台执行（可选择）完毕并同步（**自动同步完成，除非报错**）。批处理作业建议拆成多个，防止文件损坏

<img src="https://raw.githubusercontent.com/dancehole/image/main/danceholeLabs/common-freefilesync3.png"/>



## 备份主机数据到移动硬盘 自动化

需求分析：备份文件 单向更新 镜像更新 单工作区


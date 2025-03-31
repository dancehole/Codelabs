# 装机前的电脑备份工作

首先我们要进行电脑的备份，而其中需要知道什么该备份，什么不该。而备份所有软件（名字、下载地址和使用方法），知道C盘的构造对装机后的文件保存也有很大的作用

>             176.6 GB    C:\
>              63.1 GB      C:\Users
>              50.9 GB        C:\Users\DELL
>              12.1 GB        C:\Users\Public
>               2.6 MB        C:\Users\Default
>               174 字节        desktop.ini
>                    0        C:\Users\Default User
>                    0        C:\Users\All Users
>              37.8 GB      C:\ProgramData
>              34.5 GB      C:\Windows
>              12.2 GB      C:\Program Files
>              11.4 GB      C:\Program Files (x86)
>               6.3 GB    [17 文件在 C:\]
>               6.2 GB      C:\Recovery
>               2.9 GB      C:\System Volume Information
>               1.4 GB      C:\Drivers
>             619.2 MB      C:\DiskGenius_WinPE
>             132.6 MB      C:\360RecycleBin
>              61.3 MB      C:\Apps
>              20.1 MB      C:\$Extend
>              13.6 MB      C:\$Recycle.Bin
>               4.4 MB      C:\taichi_cache
>           1,008.7 KB      C:\WCH.CN
>              50.8 KB      C:\Dell
>              12.3 KB      C:\$360Section
>              11.7 KB      C:\Temp
>                    0      C:\XboxGames
>                    0      C:\tmp
>                    0      C:\System Repair
>                    0      C:\PerfLogs
>                    0      C:\KuGou
>                    0      C:\Intel
>                    0      C:\inetpub
>                    0      C:\Documents and Settings
>                    0      C:\$WinREAgent
> 生成由 WizTree 4.12 2023/3/12 9:45:28 (您可以通过捐赠隐藏此信息)
>
> C:/Users	用户文件夹，里面保存了用户的配置文件等等。还有我的文档、图片音乐等库。
>
> C:\Users\用户名\AppData里面一般有三个文件夹，分别是Local，LocalLow，Roaming，简单地来说，都是用来存放软件的配置文件和临时文件的，里面有很多以软件名称或软件公司命名的文件夹，理论上都可以删除。但是但是尽量不要删除，这里边存放的是软件运行时和结束后的数据和配置文件，如果删了，会导致软件不正常或者出错
>
> **Windows**:包含windows的文件夹文件夹或文件不能删除，这里是存放操作系统的主要文件，非常重要不能删除！！
>
> **Program Files**:[应用程序文件夹]，一般软件都默认安装在这个文件夹中，不过里面也有一些系统自带的应用程序。在64位的 Windows7 系统中，C 盘中还会多出一个 Program Files (X86) 的文件夹，这是用来存放系统中 32 位软件的安装文件。
>
> **Program Data**[系统文件夹]，存放程序的使用数据、设置等相关文件，不可删除。
>
> **Downloads**这个是下载软件的默认下载路径，最好改到硬盘的其它分区，避免 C 盘中文件过多使电脑卡顿。
>
> **system**名字带system的文件夹不要删除，这些文件夹或者文件都是关于系统功能的，一旦删除会造成系统崩溃



> 以下描述的是系统盘为C盘的情况，一般会备份以下几类文件：
>
> 桌面文件：桌面上重要文件，路径 C:\Users\%username%\Desktop ，拷贝到非系统盘。
> 登录用户文件：登录用户的个人数据，如视频、图片、文档、下载、音乐、收藏夹等目录的数据，拷贝到非系统盘。
> host文件：如果设置修改过host文件，路径 C:\Windows\System32\drivers\etc ，拷贝到非系统盘。
> 备份个人在C盘安装软件的本地数据（需要针对对应软件查找）。
> 备份个人在C盘安装软件的配置文档（需要针对对应软件查找）。
> 备份 Win10 的激活密钥：
>
> 1、按下【Win+R】打开运行，输入：regedit 点击“确定”打开注册表编辑器；
> 2、依次展开：HKEY_LOCAL_MACHINE/SOFTWARE/Microsoft/Windows NT/CurrentVersion/SoftwareProtectionPlatform；
> 3、右侧双击打开：BackupProductKeyDefault ，数值数据就是当前 win10 系统的激活密钥。
> 备份 高级系统设置-环境变量：
>
> 1、按下【Win+R】打开运行，输入：cmd 点击“确定”打开命令提示符；
> 2、输入：set >> C:\env.txt，保存C盘生成的 env.txt。
> 备份部分软件的本地数据或配置文档路径：
>
> 微信的聊天记录本地数据：C:\Users\%username%\Documents\WeChat Files\你的微信号
> QQ的聊天记录本地数据：C:\Users\%username%\Documents\Tencent Files\你的QQ号
> 备份苹果手机数据的历史同步数据：C:\Users\%username%\AppData\Roaming\Apple Computer\MobileSync
> Chrome谷歌浏览器保存的网站密码：在打开的Chrome浏览器地址栏输入 chrome://settings/passwords，回车后在新打开的页面“已保存的密码”右侧，点击三个点，选择导出密码，输入系统密码，选择保存路径后，导出到本地备份。
> Chrome谷歌浏览器保存的书签：在打开的Chrome浏览器地址栏输入 chrome://bookmarks，回车后在新打开的页面右上角，点击三个点，选择导出书签，选择保存路径后，导出到本地备份。
> Chrome谷歌浏览器的扩展程序：C:\Users\%username%\AppData\Local\Google\Chrome\User Data\Default\Extensions
> iTunes的个人备份本地数据：C:\Users\%username%\AppData\Roaming\Apple Computer\MobileSync\Backup
> 飞秋的聊天记录本地数据：C:\Users\%username%\AppData\Roaming\feiq\feiq.fql
> Oracle客户端配置文档：C:\app\%username%\product\11.2.0\client_1\network\admin\tnsnames.ora。
> 其他可能需要备份的数据：
>
> 本机无线网络连接配置
> 邮件客户端本地数据
> 股票软件自选股或历史行情本地数据
> 印象笔记的本地数据（可能含有非同步数据）
> 单机游戏的本地存档数据
> 部分软件的个性化配置数据（一般保存在我的文档）
>
> 





装机准备

C：系统盘，存放配置文件，两年用了200G

D：软件&代码环境&工具，需要频繁调用C盘的东西的

E：游戏&媒体&备份等，占用空间非常大的

F：用户盘，需要全盘备份；可以全盘携带；存放代码、文件、资料等等





# 装机前置工作





# 重装系统后

1. 更新驱动
2. 备份注册表-一个干净的注册表
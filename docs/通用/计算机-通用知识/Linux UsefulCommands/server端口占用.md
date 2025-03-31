# Server端口占用解决

在socket通信中报错：Address already in use

netstat -apn | grep 2181（这里的端口号，替换成你被占用的那个端口号，比如Tomcat是8080，namenode是8020之类的，还有最好用root来使用这些系统级的命令）

然后得到这样的结果： 在这里插入图片描述 最后一排其实就pid，然后我们通过kill -9 pid 就可以杀掉对应的进程（例如，kill -9 4438）

但是kill前，我们还是要确定下到底这个哪里开的进程能不能随便杀掉，所以。。。

第二：ps -ef | grep 4438

这样就可以看看你这个进程到底是谁开的，在哪里开的，如下图：

在这里插入图片描述 这边显示了两行，每行都是以用户名开头的，第一个就是普通用户开启的namenode进程，第二个是root用户执行的ps -ef | grep 4438这个命令生成的，就好像我们每次jps的时候，就有jps这个进程。

第三：最后一步，其实就是kill -9 强制杀掉就没问题了！！！！

linux下3种kill所有python进程的方法 这篇文章主要介绍了linux下3种kill所有python进程的方法,需要的朋友可以参考下

在linux系统管理中，我们有时候需要kill掉所有python进程，初学者一般先查询出python正在运行的进程（ps -ef|grep python），然后一条条kill掉，或者写好一个脚本(方法2)，实际上方法都有现成的，这边有3种方法.

1. killall方式 # killall python

2.pkill方式

sudo pkill python 2. ps方式（脚本） ps列出ttlsa的pid，然后依次kill掉，比较繁琐. # ps -ef | grep python | grep -v grep | awk '{print $2}' | xargs kill -9
# FileSync同步工具[¶](https://docs.dancehole.cn/Common/计算机-通用知识/WindowsOS/配置FreeFileSync/#filesync)

具体的没有研究的很清楚，暂时用着先啦~

> 工作场景：冷热备同步，想要定期将工作日报的修改同步到server上

realTimeSync同步：

配置：

![image-20240514134953588](https://static.cwoa.net/206324fe1e524cdc94a325e9d08e64b1.png)

命令行举例：

```
xcopy "D:\Files\实习资料\Files" "D:\Files\实习资料\serve-mkdocs-shared\docs" /E /I /Y
```

也可以参考文档，使用freeFileSync的ffs_batch文件来同步：

```
“../FreeFileSync.exe” "../backup.ffs_batch"
```

假如是usb设备的插入：

[RealTimeSync - FreeFileSync](https://freefilesync.org/manual.php?topic=realtimesync)
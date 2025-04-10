# 基于Obsidian的文档同步方式

> resolve problem：使用git同步的方式仅限于PC端，移动端没有一个方便快捷的云同步方式

## 一、需求与方案概述

> markdwon文档具有体积小，文件多（取决于文档量），渲染和导出/移植方便，跨平台等优势

**本方案是基于Obsidian编辑器+remotely Save插件+OneDrive个人版的文档同步方式**

- 优势：相较git支持移动端；且不需要依赖git仓库；

**对工作日报/notebook的同步，我们一般的方法有：**

- 基于Git+Typora同步，typora的样式非常好看，图床配置也很简单。缺点是typora本质是破解的+git对设备有需求

**需求依赖/本系统稳定性瓶颈：**

- Obsidian（黑曜石 如果像typora一样不免费了就寄）
- Remotely Save：对插件的高依赖性，同时是一个黑盒子（不能完全保证安全性）
- OneDrive：5GB免费容量（个人版）

## 二、实施教程

> 测试版，非稳定教程


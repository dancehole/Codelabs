# git commit规范

> 嘉为git基本提交规范（速查表）

## commit消息命名

提交格式类似为：

**type: description**

例如：feature: 增加某字段

**type可选：**

- ( "feature"，"新特性")
- ( "bugfix"，"线上功能bug" )，
- ( "minor"，"不重要的修改(换行，拼写错误等)")
- ( "optimization"，"功能优化")
- ( "sprintfix"，"未上线代码修改(功能模块未上线部分bug)")
- ( "refactor"，"功能重构")，
- ( "test"，"增加测试代码")
- ( "docs"，"编写文档")
- ( "merge"，"分支合并及冲突解决")

ps:有些定开项目的代码提交规范不一致，可能的参考：

- [conventional-changelog/commitlint: 📓 Lint commit messages (github.com)](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
- 如果发现提交失败，对应修改即可

## 分支命名

建议命名为：基分支（需要提交commit的分支）/你的名字

比如在develop/zbank上开发，则需要再此分支上新建分支为`develop/zbank/dancehole`

## 使用git代码协作极速版

> 适用于git小白，一看便懂及其简单
>
> - 适用于已经存在远程项目，本地没有项目的情况（其他情况自行调整）
> - 适用于有远程仓库权限的情况，如没有权限可以自行调整（如fork下来）

1. `git clone`拉取远程代码
2. 本地checkout到远程的`dev`分支（开发分支）
3. 建立自己的开发分支，如`dev/dancehole`
4. 一顿开发，建议每一个提交都遵循规范
5. 在提交前`pull dev`，拉取远程基线的代码
6. 自己提交/发布到远程分支`dev/dancehole`
7. 提MR/PR：去git网页版，创建一个pull request，把远程的`dev/dancehole`分支内容合并到`dev`分支里
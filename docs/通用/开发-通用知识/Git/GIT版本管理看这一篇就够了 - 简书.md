本文地址：https://www.jianshu.com/p/0e9d07ec76f9

## 一、简介

`GIT`基本上是目前最为先进的分布式版本控制系统，通过`GIT`能够非常方便的管理文件多个版本，能够实现版本的回滚，比对等功能，并且支持分布式也就是多人协同工作。

`GIT`也是目前使用作为广泛的版本控制软件，大名鼎鼎的`Github`网站能直接与`GIT`对接，使用`GIT`上传代码到`Github`之中。

------

## 二、GIT安装配置

通常来说，`Linux`系统使用各自版本对应的包管理工具可以非常方便的安装`GIT`。例如`sudo apt-get install git`，但安装之后会有一些设置需要配置。

### 1.1.中文乱码

安装`GIT`之后比较常见的一个问题，就是中文乱码，可以通过在命令行中设置解决：



```python
git config --global core.quotepath false
```

### 1.2.配置身份信息

由于`GIT`支持多用户协作，所以在使用`GIT`之前，还需要配置身份信息。首先需要在`GIT`中配置你的用户名和邮箱地址：



```bash
git config --global user.name  "name"  // 名字
git config --global user.email "123@126.com"  // 邮箱
```

------

## 三、创建仓库

在使用`GIT`之前，得掌握一个`仓库`的概念，也就是`repository`。这个`repository`也就是一个目录，是`GIT`管理的单位，在一个`repository`中，所有文件的新建、修改、删除都会被`GIT`跟踪到，并加以管理，以便在以后进行还原等操作。

所以，使用`GIT`，首先要创建一个`repository`。

创建一个仓库，主要可以有两种方式。

#### 【init】

`init`的创建方式为从零开始创建一个仓库，首先需要有一个目录，使用`cd`进入到我们想要创建仓库的目录中，然后使用以下命令：



```base
git init
```

即可将当前目录转化为一个`repository`。目录中会出现一个`.git`目录，里面保存着所有的版本信息。

#### 【clone】

除了自己从零开始创建仓库外，还可以使用别人的远程仓库来创建，例如`Github`上有许多项目代码，都可以使用这种方式拷贝下来。



```bash
git clone git://git.kernel.org/pub/scm/.../linux.git
```

这样的话会在当前目录生成一个一模一样的仓库。

------

## 四、基础GIT命令

创建好仓库之后，就可以在仓库之中开始使用命令来控制此仓库文件的版本了。

在使用这些命令之前，还有几个`GIT`的基础概念需要掌握，分别是：`工作区(working directory)`，`暂存区(stage)`，`分支`，`版本库`。

- 首先，`工作区`指的其实就是我们平常我们修改文件，查看文件的地方。
- `暂存区`则是类似于一个中转的区域，被叫做`stage`或者`index`。在工作区中修改了内容，那么首先需要先将修改提交到暂存区中，积累一定的修改数量，汇集成一个版本之后，再一起提交到具体的分支中。
- 在`GIT`管理的项目中，有`分支`这个说法，可以理解为具体的开发方向，`GIT`仓库在初始化的时候会默认创建一个`master`分支，你的文件版本就实际保存在这些分支之中。
- `暂存区`和`分支`合起来称为整个版本库。

#### 【status】

在仓库中使用`git status`命令可以查看当前仓库的状态：



```objectivec
[root@southnorth lianjia]# git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#   modified:   lianjia/settings.py
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#   setup.py
no changes added to commit (use "git add" and/or "git commit -a")
```

其中主要列出了仓库当前所处的分支，被修改了的文件，以及没有被跟踪的文件。

**参数**：

1. `-s` - 以短格式显示仓库状态。

------

#### 【add】

在`GIT`仓库之中，虽然我们说所有的文件都可以被跟踪，但是这只限于文本文件的修改，`GIT`无法跟踪二进制文件的修改。

同时，在跟踪之前也需要先将文件添加到仓库的索引中，也就是说，使用`add`命令添加到索引中的文件，才会被`GIT`跟踪。在每次你新建或者修改了文件之后，需要你使用`add`命令将这个文件先添加到暂存区之中。



```csharp
git add filename
```

运行了此命令之后，未跟踪文件将会从`Untracked files:`中转移到`Changes not staged for commit:`中。

有些时候，可能修改的文件比较多，一个个去用`add`命令去添加比较麻烦，所以也可以用`*`来匹配文件名，以下命令可以将所有未被跟踪的文件添加到暂存区中：



```csharp
git add *
```

------

#### 【commit】

在将新文件或者修改过后的文件添加到暂存区之后，就可以使用`commit`命令将其正式提交到仓库了。但是要注意的是，`commit`提交到仓库的文件状态，是最后一次执行`add`时文件的状态，而不是执行`commit`时文件的状态。

所以，在提交文件之前，最好都先使用`git status`检查一下，有没有需要添加的文件还没有用`add`添加到暂存区中。然后就可以运行命令了：



```undefined
git commit
```

直接运行此命令后，会跳出一个编辑界面，一般默认是使用`vim`。如下所示：



```bash
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
#
# On branch master
# Your branch is up to date with 'origin/master'.
#
# Changes to be committed:
#       modified:   "hello.md"
```

这里其实是需要你输入一些关于此次`commit`的一些信息，对此次代码提交做一定的标识，方便以后如果需要还原版本的时候清楚代码的改动。对此信息保存退出后，则`commit`提交成功。

**参数**：

1. `-a` - 虽然说可以使用`add`命令对`commit`提交的暂存区做很精细的改动，但是当提交的文件非常多的时候，则`add`起来会比较的麻烦。所以`commit`提供了`-a`参数，使用此参数，则会自动将已被追踪的修改过的文件添加到缓存区中，不用再手动`add`添加了。

2. `-m` - `commit`提交的时候需要输入信息，有时候如果希望输入的信息比较少，则可以使用-m参数直接在命令行输入。如下所示：

   

   ```bash
   git commit -m 'message'
   ```

------

#### 【rm】

如果需要移除仓库中已经被追踪的文件，那么最好使用`GIT`提供的`rm`命令来删除，会更加安全：



```undefined
git rm filename
```

此删除命令会将磁盘上的文件一并删除，在`commit`后，此文件将不会再被追踪。

**参数**：

1. `-f` - 如果删除的文件已经被修改过，或者已经被添加到暂存区中，那么则需要用`-f`参数强制删除。这是一个保护措施，因为还未被提交的修改不会被保存下来，是无法恢复的。

2. `--cached` - 如果希望某个仓库中的文件不再被`GIT`跟踪，但是依然被保存在磁盘里，这种时候可以使用`--cached`来删除。在错误的添加了文件到仓库中后，这个参数非常有用。

   

   ```undefined
   git rm --cached filename
   ```

------

#### 【reset】

使用`GIT`最大的一个好处是，`GIT`会将你提交的每个`commit`保存下来，以供你以后在出现问题后，能够非常方便的回滚版本。回滚版本的其中一个命令就是`reset`。

在你将一些文件使用`add`命令添加到暂存区之后，使用`git status`命令查看状态时可以看到提示，如果想将添加到暂存区的文件取消暂存则可以使用以下命令：



```xml
git reset HEAD <file>...
```

在这里，`HEAD`代表的是最近一次的`commit`，此命令的意思则是将指定文件回滚到最近一次`commit`提交的状态。

如果没有指定文件的话，那么将会回滚整个仓库的状态，如下：



```undefined
git reset HEAD
```

**版本表示**：

回滚的时候可以指定回滚的版本，版本的表示方式有三种，默认情况下都是指向最近一次提交：

1. - `HEAD` - 最近一个提交
   - `HEAD^` - 上一次提交（倒数第二次提交）
   - `HEAD^ ^` - 倒数第三次提交
   - `HEAD^^^` - 倒数第四次的提交
2. - `HEAD~0` - 最近一个提交
   - `HEAD~1` - 上一次提交（倒数第二次提交）
   - `HEAD~2` - 倒数第三次提交
   - `HEAD~3` - 倒数第四次的提交
3. 每次提交的`SHA1`版本号。

**参数**：

1. `--mixed` - `GIT`的默认模式，使用此模式的时候，会清空暂存区，将回滚的内容全部恢复成未暂存的状态。也就是说不会修改任何本地工作区文件，只会回滚`index`和清空暂存区。
2. `--soft` - 使用此模式，同样不会修改任何本地工作区文件，与`--mixed`的区别主要在于，其会将回滚的内容放入暂存区中。
3. `--hard` - 此模式是一个比较危险的命令，使用此模式，将会把仓库彻底还原到`commit`的状态。如果你的暂存区和工作区中有修改了但未提交的内容，将会彻底丢失，所以谨慎使用此模式。

------

#### 【diff】

`git diff`命令可以查看两次文件内容有什么不同。使用以下命令可以查看工作区和版本库中最新版本的区别。



```jsx
git diff HEAD -- <filename>
```

在这里`--`表示的是工作区，`HEAD`表示的是最近一次`commit`提交的版本，还可以用`--cached`代表暂存区。

在没有指定的情况下，是默认查看工作区和暂存区的区别：



```xml
git diff <filename>
```

------

#### 【log】

使用`git log`命令，将会用以下的格式输出提交的`commit`日志记录，如果记录较多的话，需要按`q`键退出查看。



```tsx
$ git log
commit 69b8e6b3ebff7b84d6190a374475a20482d4c3ba (HEAD -> master, origin/master, origin/HEAD)
Author: wnanbei <wnanbei@gmail.com>
Date:   Thu Nov 15 17:16:53 2018 +0800

    add git branch part

commit 28056c5055ef9ed4156b74713c0205e8fde44713
Author: wnanbei <wnanbei@gmail.com>
Date:   Thu Nov 15 15:21:30 2018 +0800

    complete basic git command

commit 6f6aae904ad7551d49ab952e9e3afae70bc93c50
Author: wnanbei <wnanbei@gmail.com>
Date:   Thu Nov 8 17:19:46 2018 +0800

    add git
```

**参数**：

- `--oneline` - 每条`commit`日志只显示一行内容：

  

  ```bash
  $ git log --oneline
  69b8e6b (HEAD -> master, origin/master, origin/HEAD) add git branch part
  28056c5 complete basic git command
  6f6aae9 add git
  ```

- `--skip` - 指定跳过前面几条日志：

  

  ```csharp
  $ git log --skip=4 --oneline
  b9922fc add git
  edd4594 change the python file name
  a9cded2 add git article
  ```

- `-[length]` - 指定输出的日志数量

  

  ```bash
  $ git log --oneline -2
  69b8e6b (HEAD -> master, origin/master, origin/HEAD) add git branch part
  28056c5 complete basic git command
  ```

- `--pretty=` - 使用其他格式显示提交信息，可选项有：oneline、short、medium、full、fuller、email、raw，默认为medium。

- `--graph` - 在左侧以图形的方式显示提交的`commit`变动，更清晰的展示分支的合并等信息。

- `--decorate` - 展示更多的信息，例如HEAD、分支名、tag。

- `--author` - 通过提交者的名字来搜索提交信息。

- `--grep` - 从提交的关键字搜索提交信息。

- `-p` - 通过路径搜索提交信息

  

  ```bash
  git log -p -- config/my.config
  ```

------

#### 【tag】

在`GIT`中还有一个非常方便的功能，就是打标签，可以给某个特定的`commit`进行标记。比较广泛的一个方式使用它来标记版本号。使用以下命令将会给当前分支最新的一个`commit`打上`tag`。



```xml
git tag <tagname>
```

如果你需要指定给某个`commit`打`tag`的话，则需要你在命令后面加上`commit`的id。

使用以下命令可以查看`tag`的信息：



```bash
git tag  # 查看本地所有tag
git show <tagname>  # 查看指定tag的详细信息
git ls-remote --tags <remotename> 查看远程所有tag
```

需要注意的是，我们创建的`tag`都是只存在于本地的，所以如果要把`tag`同步到远程仓库的话，需要额外单独的使用命令同步`tag`。



```xml
git push <remotename> <tagName>  # 推送单个tag到远程仓库
git push <remotename> --tags  # 推送所有未推送的tag到远程仓库
```

**参数**：

- -`a` - 指定`tag`的名字。
- `-m` - 给`tag`添加上备注的信息，与`commit`的信息类似。
- `-d` - 这个参数代表删除`tag`。需要注意的是如果要删除远程的`tag`，则需要本地删除后，再push到远程仓库。

------

## 五、分支管理

在`GIT`之中，有分支的概念。在这里举一个例子，你希望在你的工作项目上新增添一个功能，那么你就可以在当前项目的基础上新开一个分支，然后在这个专门的分支上开发的你新功能，而原来的工作项目不受任何影响。等到你的新功能开发完毕通过测试后，就可以将这个分支与之前的工作项目分支合并了。

这种开发方式，能够将工作从开发主线上分离开来，避免工作时影响到工作主线。

由于`GIT`的分支实现原理跟指针类似，所以创建切换合并分支都是非常迅速的。`GIT`也非常鼓励新建一个分支去完成任务，任务完成后和主分支合并，然后删除掉这个新分支，这样使用下来与直接在主分支工作是差不多的，但是安全性要高不少。

#### 【branch】

首先，直接使用`git branch`命令是查看当前仓库的分支：



```undefined
git branch
```

如果在`git branch`命令后面跟上一个名字，则可以在当前仓库新建一个分支：



```undefined
git branch working
```

也可以使用当前分支的某历史版本创建分支，这样的话需要指定具体的`commit`的ID：



```undefined
git branch working 169d2dc
```

需要注意的是，仓库一般默认会有一个`master`分支，这个分支其实并没有什么特殊，跟其他新建的分支没有什么区别，只是在`git init`时默认会创建这样一个分支，大部分人也懒得去修改。

**参数**：

- `-d` - 如果在创建之后需要删除一个分支，可以加上此参数。

  

  ```undefined
  git branch -d working
  ```

------

#### 【checkout】

在创建了分支之后，我们所处的依然是之前的分支，要切换到新的分支的话，依然是需要我们手动切换的。



```undefined
git checkout working
```

**参数**：

- `-b` - 加上这个参数之后，则代表直接创建一个分支，并且切换到这个分支，也就是说可以省略掉`git branch`这个步骤。

------

#### 【merge】

在创建了分支之后，大部分情况下最终都是要合并的，也就是将分支修改的内容和另一个分支的修改内容合并到一起。

使用`git merge`命令将可以把某一分支与当前分支合并到一起：



```undefined
git merge working
```

如果两个分支之间没有冲突的话，那么分支的合并将会非常简单，`GIT`会自行决定如何合并两个分支。但是如果两个分支之间有文件冲突的话，也就是说两个分支内都对同一个文件进行了修改这种类似的操作，`GIT`将无法决定保留哪一个分支的内容。

因为在逻辑层面上，也需要由你自己来决定，在冲突的情况下，保留哪个分支的内容。在这种情况下，合并的时候会显示类似以下的内容：



```css
CONFLICT (content): Merge conflict in a.txt
Automatic merge failed; fix conflicts and then commit the result.
```

在冲突的文件内，`GIT`会将两个分支的内容都放在了一起，由你自行修改：



```jsx
<<<<<<< HEAD
i am master
=======
hello, i am working
>>>>>>> working
```

可以看到`====`分割上方的是当前分支的内容，下方是合并的`working`分支的内容。此时由你自行修改，处理完冲突之后，`add`添加好就可以提交了。

------

## 六、远程仓库

在前面讲的用法基本上都是本地的`GIT`用法，但是使用`GIT`很大的一个优势是可以多人协作，同时完成项目，那么这基本必然要涉及到远程仓库的使用。远程仓库可以自己在服务器上搭建，也可以使用一些其他人提供的仓库托管服务，例如`Github`这个全球最大的同性交友网站。

使用`init`命令生成的仓库中，是没有配置远程仓库的，需要自行配置。而如果是使用`clone`获取的仓库，则会将来源的远程仓库默认配置为一个名为`origin`的远程仓库，这个远程仓库没有什么特殊，只是默认起名而已。在一些比较复杂的多人合作项目中，会配置有多个远程仓库。

#### 【remote】

使用`git remote`命令即可查看当前仓库有配置哪些远程仓库：



```ruby
$ git remote
origin
```

如果你需要添加新的远程仓库，那么可以使用以下命令：



```xml
git remote add <shortname> <url> 
```

`<shortname>`是你给这个远程分支起的名字，这个名字只会在本地起作用。

以下还有一些显示与删除等命令：



```bash
git remote show [remote-name]  # 显示远程仓库详细的信息
git remote rename old_name new_name  # 重命名远程仓库
git remote rm remote_name  # 删除远程仓库
```

**参数**：

- `-v` - 会显示远程仓库的url。

------

#### 【fetch】

在配置了远程仓库之后，就可以从远程仓库拉取内容了。这个命令会访问远程仓库，从中拉取所有你还没有的数据。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。



```css
git fetch [remote-name]
```

如果需要只拉取某个分支的内容，需要在后面加上分支的名称。



```bash
git fetch origin master  # 拉取远程仓库origin中的master分支
git fetch origin master:temp  # 拉取远程仓库origin中的master分支，并命名为temp分支
```

需要注意的是，`fetch`这个命令只是将版本库中的内容拉取下来，并不会自动合并和修改你工作区中的内容，需要你自行手动合并。

之后需要合并拉取的内容到工作区的话，需要使用`git merge`命令。



```undefined
git merge FETCH_HEAD
```

这里的`FETCH_HEAD`是一个版本链接，记录在本地的一个文件中，指向着目前已经从远程仓库取下来的分支的末端版本。

一般来说一个比较常见且安全的使用方式如下：



```bash
git fetch origin master:tmp  # 在本地新建一个temp分支，并将远程origin仓库的master分支代码下载到本地temp分支
git diff tmp                 # 来比较本地代码与刚刚从远程下载下来的代码的区别
git merge tmp                # 合并temp分支到本地的master分支
git branch -d temp           # 如果不想保留temp分支 可以用这步删除
```

------

#### 【pull】

如果觉得使用`fetch`命令比较麻烦，且确定远程仓库的内容可以安全合并的话，那么可以使用`pull`命令。`pull`命令其实是一个混合命令，相当于把`git fetch`和`git merge`这两个命令合并到了一起，一个命令直接解决问题。



```undefined
git pull origin
```

------

#### 【push】

在多人协作完成项目时，本地工作完成后，需要推送到远程仓库中，这个时候需要使用`git push`命令来进行推送。这个命令的用法如下所示：



```xml
git push <远程主机名> <本地分支名>:<远程分支名>
```

如果当前分支只有一个远程分支，那么主机名与分支名都可以省略：



```undefined
git push
```

如果当前分支与远程分支存在追踪关系，则可以省略分支名，只留主机名，例如：



```undefined
git push origin
```

如果只省略远程分支名，则表示将分支退送到与之存在追踪关系的分支，如果远程分支不存在，则创建新的远程分支：



```undefined
git push origin master
```

如果只省略本地分支名，则代表删除指定远程分支：



```undefined
git push origin ：master
```

------

## 七、配置忽略文件

在使用`GIT`管理项目时，我们项目里常常会有一些文件是不需要纳入版本管理的，例如`Mac`系统的`.DS_Store`之类的默认文件，又比如Python的运行生成的`__pycache__`目录。

如果这种文件较多时，我们添加文件将变得比较的麻烦，所以`GIT`给我们提供了一个方式，可以忽略掉指定的文件。

首先是配置全局忽略，`GIT`管理的仓库都能起效。配置的方式有几种，我们这里主要使用`.gitignore`文件来进行配置。

首先我们需要创建一个`.gitignore`文件，这个文件放在哪里都可以，但推荐的位置是直接放到家目录中：



```bash
touch .gitignore
```

然后，我们需要将此文件配置到`GIT`中（如果有修改文件路径的话，这里需要相应的修改）：



```bash
git config --global core.excludesfile ~/.gitignore
```

最后，我们再来编辑`.gitignore`文件，将需要忽略的文件写到这个文件中即可，文件内格式如下所示：



```css
.DS_Store
__pycache__
*.pyc
.vscode
```

如果需要按照具体的项目来配置特定的忽略文件的话，那么可以配置一个`.gitignore`文件直接放到仓库的根目录即可。




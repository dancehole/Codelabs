# 文件批量重命名
> 需求：实习周报like this：
>
> ![image-20240704095737867](https://static.cwoa.net/f37ff5e6205f40199220deb1b645f77f.png)

一个个重命名有点太地狱了，于是写一个

“将该目录下所有文件重命名为某个格式”的py小工具：

```python
import os

# 获取当前目录下的所有文件
current_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(current_dir)
files = os.listdir()
# print(files)

i = 1
# 遍历文件
for file in files:
    # 判断文件是否以 .docx 结尾
    if file.endswith(".docx"):
        # 构造新的文件名
        new_name = f"【实习周记】第{i}周.docx"
        # 重命名文件
        print('正在重命名：',file,'==>',new_name)
        os.rename(file, new_name)

        # 增加计数器
        i += 1
```
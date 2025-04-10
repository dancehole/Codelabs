# python小工具-导出当前目录

```python
import os
import argparse

def get_directories(path, max_depth=1, current_depth=1):
    """
    获取指定路径下的目录列表，可控制遍历深度
    
    参数:
        path (str): 要遍历的路径
        max_depth (int): 最大遍历深度
        current_depth (int): 当前深度(内部使用)
    
    返回:
        list: 包含目录信息的字典列表，每个字典包含目录名和相对路径
    """
    directories = []
    try:
        for entry in os.listdir(path):
            full_path = os.path.join(path, entry)
            if os.path.isdir(full_path):
                dir_info = {
                    'name': entry,
                    'relative_path': os.path.relpath(full_path, start=path),
                    'depth': current_depth
                }
                directories.append(dir_info)
                
                # 如果未达到最大深度，递归获取子目录
                if current_depth < max_depth:
                    sub_dirs = get_directories(full_path, max_depth, current_depth + 1)
                    directories.extend(sub_dirs)
    
    except PermissionError:
        print(f"无权限访问目录: {path}")
    except Exception as e:
        print(f"获取目录 {path} 时出错: {str(e)}")
    
    return directories

def main():
    # 设置命令行参数解析
    parser = argparse.ArgumentParser(description='导出磁盘目录结构')
    parser.add_argument('-d', '--drives', nargs='+', default=['D:', 'E:'],
                        help='要扫描的磁盘列表，例如 D: E:')
    parser.add_argument('--depth', type=int, default=1,
                        help='遍历的目录深度(默认为1)')
    parser.add_argument('-o', '--output', 
                        help='输出到文件(可选)')
    
    args = parser.parse_args()
    
    # 收集所有目录信息
    all_dirs = []
    for drive in args.drives:
        root_path = f"{drive}\\"
        if not os.path.exists(root_path):
            print(f"磁盘 {drive} 不存在")
            continue
        
        print(f"\n正在扫描 {drive}盘 (深度: {args.depth})...")
        dirs = get_directories(root_path, args.depth)
        all_dirs.extend(dirs)
        
        # 打印当前磁盘结果
        print(f"\n{drive}盘的目录结构:")
        current_drive_dirs = [d for d in dirs if d['depth'] == 1]
        if current_drive_dirs:
            for i, dir_info in enumerate(current_drive_dirs, 1):
                print(f"{i}. {dir_info['name']}")
                # 打印子目录(如果深度>1)
                if args.depth > 1:
                    sub_dirs = [d for d in dirs if 
                                d['relative_path'].startswith(dir_info['name']) and 
                                d['depth'] > 1]
                    for sub in sub_dirs:
                        print(f"   {'  '*(sub['depth']-2)}└── {sub['name']}")
        else:
            print("没有找到任何目录")
    
    # 如果需要输出到文件
    if args.output:
        try:
            with open(args.output, 'w', encoding='utf-8') as f:
                f.write("磁盘目录结构导出\n")
                f.write(f"扫描深度: {args.depth}\n")
                f.write(f"扫描磁盘: {', '.join(args.drives)}\n\n")
                
                current_drive = None
                for dir_info in all_dirs:
                    drive = os.path.splitdrive(dir_info['relative_path'])[0]
                    if drive != current_drive:
                        current_drive = drive
                        f.write(f"\n{drive}盘:\n")
                    
                    indent = '    ' * (dir_info['depth'] - 1)
                    f.write(f"{indent}{dir_info['name']}\n")
            
            print(f"\n目录结构已导出到: {args.output}")
        except Exception as e:
            print(f"写入文件时出错: {str(e)}")

if __name__ == "__main__":
    main()
```





## 使用说明

1. **基本用法**：

   ```
   python directory_export.py
   ```

   默认扫描D盘和E盘的一级目录

2. **指定扫描磁盘**：

   ```
   python directory_export.py -d C: D: E:
   ```

3. **指定扫描深度**：

   ```
   python directory_export.py --depth 2
   ```

   扫描2级目录结构

4. **输出到文件**：

   ```
   python directory_export.py --depth 3 -o output.txt
   ```

   扫描3级目录并保存到output.txt

## 功能特点

1. **灵活的层级控制**：
   - 通过`--depth`参数可以指定要遍历的目录深度
   - 默认只扫描一级目录
2. **多磁盘支持**：
   - 可以同时扫描多个磁盘
   - 通过`-d`参数指定要扫描的磁盘列表
3. **可视化输出**：
   - 控制台输出采用树形结构展示
   - 不同层级有缩进和连接线
4. **导出功能**：
   - 支持将结果导出到文本文件
   - 保留层级结构信息
5. **错误处理**：
   - 自动跳过无权限访问的目录
   - 会提示不存在的磁盘

这个工具非常适合用于快速了解磁盘目录结构或进行环境迁移前的目录分析。
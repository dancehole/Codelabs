@echo off
title MkDocs 控制脚本
chcp 65001 >nul
color 0A

:menu
cls
echo.
echo  ========== MkDocs 操作菜单 ==========
echo.
echo  1. 运行 mkdocs serve（本地预览）
echo  2. 运行 mkdocs build（生成静态网站）
echo  3. 退出
echo.
set /p choice="请输入选项 (1/2/3): "

if "%choice%"=="1" (
    echo 正在启动 mkdocs serve...
    mkdocs serve
    pause
    goto menu
) else if "%choice%"=="2" (
    echo 正在执行 mkdocs build...
    mkdocs build
    echo 构建完成！输出在 "site" 文件夹。
    pause
    goto menu
) else if "%choice%"=="3" (
    exit
) else (
    echo 无效输入，请重新选择！
    pause
    goto menu
)
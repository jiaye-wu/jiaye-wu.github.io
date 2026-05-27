@echo off
rem 设置命令行窗口编码为 UTF-8，防止中文乱码
chcp 65001 >nul
title 实验室主页 本地环境控制台

:menu
cls
echo ========================================================
echo                 网站本地调试控制台 (V2.0)
echo ========================================================
echo.
echo   [1] 标准模式 (全量编译，最稳妥，修改配置/Bib时使用)
echo   [2] 极速模式 (增量编译，写文章/调样式专用，速度最快)
echo   [3] 深度清理 (抹除 _site 和 .jekyll-cache 缓存)
echo   [4] 更新环境 (拉取上游最新 Docker 镜像)
echo.
echo ========================================================
set /p choice="请输入你的选择 (1, 2, 3, 或 4) 并按回车: "

if "%choice%"=="1" goto standard
if "%choice%"=="2" goto fast
if "%choice%"=="3" goto clean
if "%choice%"=="4" goto update

echo.
echo [错误] 无效的输入，请重新选择！
pause
goto menu

:standard
echo.
echo [启动中] 正在拉起 标准模式 容器...
echo [提示] 停止服务请按 Ctrl + C
echo.
docker-compose up
goto end

:fast
echo.
echo [启动中] 正在拉起 极速模式 容器 (增量编译生效中)...
echo [提示] 停止服务请按 Ctrl + C
echo.
docker-compose -f docker-compose-fast.yml up
goto end

:clean
echo.
echo [执行中] 正在执行深度物理清理...
rmdir /s /q _site 2>nul
rmdir /s /q .jekyll-cache 2>nul
echo [完成] 缓存和静态文件已彻底清除！
echo.
pause
goto menu

:update
echo.
echo [联网中] 正在检查并拉取 docker-compose.yml 中定义的最新镜像...
docker-compose pull
echo [完成] 镜像环境已同步至最新！
echo.
pause
goto menu

:end
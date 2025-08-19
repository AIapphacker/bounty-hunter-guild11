@echo off
chcp 65001 >nul
echo ========================================
echo 海外华人互帮互助平台 - 文档转换工具
echo ========================================
echo.

echo 正在检查目录结构...
if not exist "docs" (
    echo 错误: docs 目录不存在！
    pause
    exit /b 1
)

if not exist "html" (
    echo 创建 html 目录...
    mkdir html
)

if not exist "pdf" (
    echo 创建 pdf 目录...
    mkdir pdf
)

echo.
echo 目录结构检查完成！
echo.

echo 可用的转换选项:
echo 1. 转换为HTML文件 (推荐)
echo 2. 转换为PDF文件 (需要手动操作)
echo 3. 查看文件状态
echo 4. 退出
echo.

:menu
set /p choice="请选择操作 (1-4): "

if "%choice%"=="1" goto convert_html
if "%choice%"=="2" goto convert_pdf
if "%choice%"=="3" goto show_status
if "%choice%"=="4" goto exit
echo 无效选择，请重新输入
goto menu

:convert_html
echo.
echo 正在转换为HTML文件...
powershell -ExecutionPolicy Bypass -File "simple-convert.ps1"
echo.
echo HTML转换完成！文件保存在 html/ 目录中
echo 您可以使用浏览器打开HTML文件，然后使用打印功能保存为PDF
echo.
pause
goto menu

:convert_pdf
echo.
echo PDF转换说明:
echo 由于技术限制，建议使用以下方法:
echo.
echo 方法1: 浏览器转换
echo 1. 打开 html/ 目录中的HTML文件
echo 2. 按 Ctrl+P 打开打印
echo 3. 选择"另存为PDF"
echo 4. 保存到 pdf/ 目录
echo.
echo 方法2: 在线工具
echo - 访问 https://www.markdowntopdf.com/
echo - 上传Markdown文件
echo - 下载PDF文件
echo.
echo 方法3: 本地工具
echo - 安装 Typora 编辑器
echo - 打开Markdown文件
echo - 导出为PDF
echo.
pause
goto menu

:show_status
echo.
echo 当前文件状态:
echo.
echo docs/ 目录:
dir /b docs\*.md 2>nul
echo.
echo html/ 目录:
dir /b html\*.html 2>nul
echo.
echo pdf/ 目录:
dir /b pdf\*.pdf 2>nul
echo.
pause
goto menu

:exit
echo.
echo 感谢使用！再见！
pause


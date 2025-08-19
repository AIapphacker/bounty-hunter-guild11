# Markdown to PDF 转换脚本
# 需要先安装 Pandoc

Write-Host "开始转换Markdown文件为PDF..." -ForegroundColor Green

# 检查Pandoc是否安装
try {
    $pandocVersion = pandoc --version
    Write-Host "Pandoc已安装: $pandocVersion" -ForegroundColor Green
} catch {
    Write-Host "Pandoc未安装，请先安装Pandoc" -ForegroundColor Red
    Write-Host "安装命令: winget install --id JohnMacFarlane.Pandoc" -ForegroundColor Yellow
    exit 1
}

# 创建PDF目录
if (!(Test-Path "pdf")) {
    New-Item -ItemType Directory -Name "pdf"
    Write-Host "创建PDF目录" -ForegroundColor Green
}

# 定义要转换的文件列表
$files = @(
    "商业企划书.md",
    "技术架构图.md", 
    "用户流程图.md",
    "资金流程图.md",
    "审核机制图.md",
    "商业模式图.md"
)

# 转换每个文件
foreach ($file in $files) {
    $inputPath = "docs\$file"
    $outputPath = "pdf\$($file -replace '\.md$', '.pdf')"
    
    if (Test-Path $inputPath) {
        Write-Host "正在转换: $file" -ForegroundColor Yellow
        
        try {
            # 使用pandoc转换
            pandoc $inputPath -o $outputPath --pdf-engine=wkhtmltopdf
            Write-Host "✓ 转换成功: $outputPath" -ForegroundColor Green
        } catch {
            Write-Host "✗ 转换失败: $file" -ForegroundColor Red
            Write-Host "错误信息: $_" -ForegroundColor Red
        }
    } else {
        Write-Host "✗ 文件不存在: $inputPath" -ForegroundColor Red
    }
}

Write-Host "转换完成！" -ForegroundColor Green
Write-Host "PDF文件保存在 pdf/ 目录中" -ForegroundColor Cyan


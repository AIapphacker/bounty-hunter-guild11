# Markdown to HTML 转换脚本
# 使用内置的PowerShell功能

Write-Host "开始转换Markdown文件为HTML..." -ForegroundColor Green

# 创建HTML目录
if (!(Test-Path "html")) {
    New-Item -ItemType Directory -Name "html"
    Write-Host "创建HTML目录" -ForegroundColor Green
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

# HTML模板
$htmlTemplate = @"
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{TITLE}</title>
    <style>
        body {
            font-family: 'Microsoft YaHei', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background-color: white;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1, h2, h3, h4, h5, h6 {
            color: #333;
            margin-top: 30px;
            margin-bottom: 15px;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            color: #34495e;
            border-bottom: 2px solid #ecf0f1;
            padding-bottom: 8px;
        }
        code {
            background-color: #f8f9fa;
            padding: 2px 6px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            color: #e83e8c;
        }
        pre {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            overflow-x: auto;
            border-left: 4px solid #3498db;
        }
        pre code {
            background-color: transparent;
            padding: 0;
            color: #333;
        }
        blockquote {
            border-left: 4px solid #3498db;
            margin: 20px 0;
            padding: 10px 20px;
            background-color: #ecf0f1;
            font-style: italic;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin: 20px 0;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: left;
        }
        th {
            background-color: #3498db;
            color: white;
        }
        tr:nth-child(even) {
            background-color: #f2f2f2;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 20px;
            background-color: #2c3e50;
            color: white;
            border-radius: 8px;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            color: #7f8c8d;
            border-top: 1px solid #ecf0f1;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{TITLE}</h1>
            <p>海外华人互帮互助平台 (Bounty Hunter Guild)</p>
            <p>创建日期: {DATE}</p>
        </div>
        
        {CONTENT}
        
        <div class="footer">
            <p>本文档为机密文件，仅供投资人和内部团队使用</p>
            <p>© 2025 Bounty Hunter Guild. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
"@

# 转换每个文件
foreach ($file in $files) {
    $inputPath = "docs\$file"
    $outputPath = "html\$($file -replace '\.md$', '.html')"
    
    if (Test-Path $inputPath) {
        Write-Host "正在转换: $file" -ForegroundColor Yellow
        
        try {
            # 读取Markdown内容
            $content = Get-Content $inputPath -Raw -Encoding UTF8
            
            # 简单的Markdown到HTML转换
            $htmlContent = $content -replace '^# (.+)$', '<h1>$1</h1>'
            $htmlContent = $htmlContent -replace '^## (.+)$', '<h2>$1</h2>'
            $htmlContent = $htmlContent -replace '^### (.+)$', '<h3>$1</h3>'
            $htmlContent = $htmlContent -replace '^#### (.+)$', '<h4>$1</h4>'
            $htmlContent = $htmlContent -replace '^##### (.+)$', '<h5>$1</h5>'
            $htmlContent = $htmlContent -replace '^###### (.+)$', '<h6>$1</h6>'
            
            # 处理粗体和斜体
            $htmlContent = $htmlContent -replace '\*\*(.+?)\*\*', '<strong>$1</strong>'
            $htmlContent = $htmlContent -replace '\*(.+?)\*', '<em>$1</em>'
            
            # 处理代码块
            $htmlContent = $htmlContent -replace '```(.+?)```', '<pre><code>$1</code></pre>'
            $htmlContent = $htmlContent -replace '`(.+?)`', '<code>$1</code>'
            
            # 处理列表
            $htmlContent = $htmlContent -replace '^- (.+)$', '<li>$1</li>'
            $htmlContent = $htmlContent -replace '^1\. (.+)$', '<li>$1</li>'
            
            # 处理段落
            $htmlContent = $htmlContent -replace '^([^<].+)$', '<p>$1</p>'
            
            # 生成HTML文件
            $title = $file -replace '\.md$', ''
            $date = Get-Date -Format "yyyy年MM月dd日"
            $finalHtml = $htmlTemplate -replace '{TITLE}', $title -replace '{DATE}', $date -replace '{CONTENT}', $htmlContent
            
            # 保存HTML文件
            $finalHtml | Out-File -FilePath $outputPath -Encoding UTF8
            
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
Write-Host "HTML文件保存在 html/ 目录中" -ForegroundColor Cyan
Write-Host "您可以使用浏览器打开HTML文件，然后使用浏览器的打印功能保存为PDF" -ForegroundColor Yellow

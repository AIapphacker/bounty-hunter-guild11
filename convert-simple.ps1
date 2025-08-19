# Simple HTML converter for all Markdown files

Write-Host "Starting conversion..." -ForegroundColor Green

# Create HTML directory
if (!(Test-Path "html")) {
    New-Item -ItemType Directory -Name "html"
}

# Files to convert
$files = @(
    "商业企划书.md",
    "技术架构图.md", 
    "用户流程图.md",
    "资金流程图.md",
    "审核机制图.md",
    "商业模式图.md"
)

foreach ($file in $files) {
    $inputPath = "docs\$file"
    $outputPath = "html\$($file -replace '\.md$', '.html')"
    
    if (Test-Path $inputPath) {
        Write-Host "Converting: $file" -ForegroundColor Yellow
        
        try {
            $content = Get-Content $inputPath -Raw -Encoding UTF8
            
            # Basic HTML template
            $html = @"
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$($file -replace '\.md$', '') - 海外华人互帮互助平台</title>
    <style>
        body {
            font-family: 'Microsoft YaHei', Arial, sans-serif;
            line-height: 1.8;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: white;
            padding: 40px;
            text-align: center;
        }
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .header h2 {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #3498db;
        }
        .content {
            padding: 40px;
            background: white;
        }
        h1, h2, h3, h4, h5, h6 {
            color: #2c3e50;
            margin: 30px 0 15px 0;
        }
        h1 {
            font-size: 2.2em;
            border-bottom: 4px solid #3498db;
            padding-bottom: 15px;
        }
        h2 {
            font-size: 1.8em;
            border-bottom: 3px solid #ecf0f1;
            padding-bottom: 10px;
        }
        p {
            margin: 15px 0;
            line-height: 1.8;
        }
        ul, ol {
            margin: 15px 0;
            padding-left: 30px;
        }
        li {
            margin: 8px 0;
        }
        strong {
            color: #e74c3c;
        }
        em {
            color: #9b59b6;
        }
        code {
            background: #f8f9fa;
            padding: 3px 8px;
            border-radius: 6px;
            font-family: monospace;
            color: #e83e8c;
        }
        pre {
            background: #2c3e50;
            color: #ecf0f1;
            padding: 20px;
            border-radius: 10px;
            overflow-x: auto;
            margin: 20px 0;
            border-left: 5px solid #3498db;
        }
        .nav {
            background: #f8f9fa;
            padding: 20px 40px;
            border-bottom: 1px solid #dee2e6;
        }
        .nav a {
            color: #3498db;
            text-decoration: none;
            margin-right: 20px;
            padding: 8px 16px;
            border-radius: 20px;
        }
        .nav a:hover {
            background: #3498db;
            color: white;
        }
        .footer {
            background: #34495e;
            color: white;
            text-align: center;
            padding: 30px;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>$($file -replace '\.md$', '')</h1>
            <h2>海外华人互帮互助平台</h2>
            <p>Bounty Hunter Guild</p>
        </div>
        
        <div class="nav">
            <a href="商业企划书.html">商业企划书</a>
            <a href="技术架构图.html">技术架构</a>
            <a href="用户流程图.html">用户流程</a>
            <a href="资金流程图.html">资金流程</a>
            <a href="审核机制图.html">审核机制</a>
            <a href="商业模式图.html">商业模式</a>
        </div>
        
        <div class="content">
            $content
        </div>
        
        <div class="footer">
            <p>本文档为机密文件，仅供投资人和内部团队使用</p>
            <p>© 2025 Bounty Hunter Guild. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
"@
            
            $html | Out-File -FilePath $outputPath -Encoding UTF8
            Write-Host "Success: $outputPath" -ForegroundColor Green
        } catch {
            Write-Host "Error: $file" -ForegroundColor Red
        }
    }
}

Write-Host "Conversion complete!" -ForegroundColor Green



# Generate all HTML files from Markdown

Write-Host "Generating HTML files..." -ForegroundColor Green

# Files to process
$files = @(
    "用户流程图.md",
    "资金流程图.md",
    "审核机制图.md",
    "商业模式图.md"
)

foreach ($file in $files) {
    $inputPath = "docs\$file"
    $outputPath = "html\$($file -replace '\.md$', '.html')"
    
    if (Test-Path $inputPath) {
        Write-Host "Processing: $file" -ForegroundColor Yellow
        
        try {
            $content = Get-Content $inputPath -Raw -Encoding UTF8
            
            # HTML template
            $html = @"
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>$($file -replace '\.md$', '') - 海外华人互帮互助平台</title>
    <style>
        body { 
            font-family: 'Microsoft YaHei', Arial, sans-serif; 
            margin: 40px; 
            line-height: 1.6; 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .container { 
            max-width: 1200px; 
            margin: 0 auto; 
            background: white; 
            padding: 40px; 
            border-radius: 20px; 
            box-shadow: 0 20px 40px rgba(0,0,0,0.1); 
        }
        h1 { 
            color: #2c3e50; 
            border-bottom: 3px solid #3498db; 
            padding-bottom: 10px; 
            text-align: center;
            font-size: 2.5em;
        }
        h2 { 
            color: #34495e; 
            border-bottom: 2px solid #ecf0f1; 
            padding-bottom: 8px; 
            margin-top: 30px;
        }
        h3 { 
            color: #7f8c8d; 
            margin-top: 25px;
        }
        code { 
            background: #f8f9fa; 
            padding: 2px 6px; 
            border-radius: 4px; 
            font-family: 'Consolas', monospace; 
            color: #e83e8c;
        }
        pre { 
            background: #2c3e50; 
            color: white; 
            padding: 20px; 
            border-radius: 10px; 
            overflow-x: auto; 
            margin: 20px 0;
            border-left: 5px solid #3498db;
            font-family: 'Consolas', monospace;
        }
        .header { 
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); 
            color: white; 
            padding: 30px; 
            text-align: center; 
            margin: -40px -40px 40px -40px; 
            border-radius: 20px 20px 0 0; 
        }
        .nav { 
            background: #f8f9fa; 
            padding: 20px 40px; 
            margin: -40px -40px 40px -40px; 
            border-bottom: 1px solid #dee2e6; 
            text-align: center;
        }
        .nav a { 
            color: #3498db; 
            text-decoration: none; 
            margin: 0 15px; 
            padding: 10px 20px; 
            border-radius: 25px; 
            transition: all 0.3s ease;
            display: inline-block;
        }
        .nav a:hover { 
            background: #3498db; 
            color: white; 
            transform: translateY(-2px);
        }
        p { margin: 15px 0; line-height: 1.8; }
        ul, ol { margin: 15px 0; padding-left: 30px; }
        li { margin: 8px 0; }
        strong { color: #e74c3c; font-weight: 600; }
        em { color: #9b59b6; font-style: italic; }
        .highlight { background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107; margin: 20px 0; }
        .info { background: #d1ecf1; padding: 15px; border-radius: 8px; border-left: 4px solid #17a2b8; margin: 20px 0; }
        .warning { background: #f8d7da; padding: 15px; border-radius: 8px; border-left: 4px solid #dc3545; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>$($file -replace '\.md$', '')</h1>
            <p>海外华人互帮互助平台 - Bounty Hunter Guild</p>
            <p>详细设计文档</p>
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
    </div>
</body>
</html>
"@
            
            $html | Out-File -FilePath $outputPath -Encoding UTF8
            Write-Host "Created: $outputPath" -ForegroundColor Green
        } catch {
            Write-Host "Error: $file" -ForegroundColor Red
        }
    }
}

Write-Host "All HTML files generated!" -ForegroundColor Green



# Create HTML files for all Markdown documents

Write-Host "Creating HTML files..." -ForegroundColor Green

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
        Write-Host "Processing: $file" -ForegroundColor Yellow
        
        try {
            $content = Get-Content $inputPath -Raw -Encoding UTF8
            
            # Simple HTML template
            $html = @"
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>$($file -replace '\.md$', '')</title>
    <style>
        body { font-family: 'Microsoft YaHei', Arial, sans-serif; margin: 40px; line-height: 1.6; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; padding: 40px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }
        h2 { color: #34495e; border-bottom: 2px solid #ecf0f1; padding-bottom: 8px; }
        h3 { color: #7f8c8d; }
        code { background: #f8f9fa; padding: 2px 6px; border-radius: 4px; font-family: monospace; }
        pre { background: #2c3e50; color: white; padding: 15px; border-radius: 5px; overflow-x: auto; }
        .header { background: #2c3e50; color: white; padding: 20px; text-align: center; margin: -40px -40px 40px -40px; border-radius: 10px 10px 0 0; }
        .nav { background: #f8f9fa; padding: 15px 40px; margin: -40px -40px 40px -40px; border-bottom: 1px solid #dee2e6; }
        .nav a { color: #3498db; text-decoration: none; margin-right: 15px; padding: 5px 10px; border-radius: 15px; }
        .nav a:hover { background: #3498db; color: white; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>$($file -replace '\.md$', '')</h1>
            <p>海外华人互帮互助平台 - Bounty Hunter Guild</p>
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

Write-Host "All HTML files created!" -ForegroundColor Green



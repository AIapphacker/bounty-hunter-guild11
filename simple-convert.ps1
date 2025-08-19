# Simple Markdown to HTML converter

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
<html>
<head>
    <meta charset="UTF-8">
    <title>$($file -replace '\.md$', '')</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        h1, h2, h3 { color: #333; }
        code { background: #f4f4f4; padding: 2px 4px; border-radius: 3px; }
        pre { background: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto; }
    </style>
</head>
<body>
$content
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


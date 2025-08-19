# 完整Markdown到HTML转换脚本
# 为所有文档生成清晰漂亮的HTML版本

Write-Host "开始转换所有Markdown文件为HTML..." -ForegroundColor Green

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

# 改进的HTML模板
$htmlTemplate = @"
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{TITLE} - 海外华人互帮互助平台</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Microsoft YaHei', 'PingFang SC', 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.8;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
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
            position: relative;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }
        
        .header h2 {
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #3498db;
            position: relative;
            z-index: 1;
        }
        
        .header h3 {
            font-size: 1.2em;
            margin-bottom: 15px;
            color: #ecf0f1;
            position: relative;
            z-index: 1;
        }
        
        .header p {
            font-size: 1.1em;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        
        .content {
            padding: 40px;
            background: white;
        }
        
        h1, h2, h3, h4, h5, h6 {
            color: #2c3e50;
            margin: 30px 0 15px 0;
            font-weight: 600;
            position: relative;
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
        
        h3 {
            font-size: 1.5em;
            color: #34495e;
        }
        
        h4 {
            font-size: 1.3em;
            color: #7f8c8d;
        }
        
        p {
            margin: 15px 0;
            text-align: justify;
            line-height: 1.8;
        }
        
        ul, ol {
            margin: 15px 0;
            padding-left: 30px;
        }
        
        li {
            margin: 8px 0;
            line-height: 1.6;
        }
        
        strong {
            color: #e74c3c;
            font-weight: 600;
        }
        
        em {
            color: #9b59b6;
            font-style: italic;
        }
        
        code {
            background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
            padding: 3px 8px;
            border-radius: 6px;
            font-family: 'Consolas', 'Monaco', 'Courier New', monospace;
            color: #e83e8c;
            font-size: 0.9em;
            border: 1px solid #dee2e6;
        }
        
        pre {
            background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
            color: #ecf0f1;
            padding: 20px;
            border-radius: 10px;
            overflow-x: auto;
            margin: 20px 0;
            border-left: 5px solid #3498db;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        pre code {
            background: transparent;
            color: #ecf0f1;
            padding: 0;
            border: none;
            font-size: 0.95em;
        }
        
        blockquote {
            border-left: 5px solid #3498db;
            margin: 20px 0;
            padding: 20px;
            background: linear-gradient(135deg, #ecf0f1 0%, #f8f9fa 100%);
            border-radius: 0 10px 10px 0;
            font-style: italic;
            position: relative;
        }
        
        blockquote::before {
            content: '"';
            font-size: 3em;
            color: #3498db;
            position: absolute;
            top: -10px;
            left: 20px;
            font-family: serif;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        th, td {
            padding: 15px;
            text-align: left;
            border-bottom: 1px solid #dee2e6;
        }
        
        th {
            background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
            color: white;
            font-weight: 600;
        }
        
        tr:nth-child(even) {
            background: #f8f9fa;
        }
        
        tr:hover {
            background: #e3f2fd;
            transition: background 0.3s ease;
        }
        
        .footer {
            background: linear-gradient(135deg, #34495e 0%, #2c3e50 100%);
            color: white;
            text-align: center;
            padding: 30px;
            margin-top: 40px;
        }
        
        .footer p {
            margin: 10px 0;
            opacity: 0.9;
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
            transition: all 0.3s ease;
        }
        
        .nav a:hover {
            background: #3498db;
            color: white;
        }
        
        .highlight {
            background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #ffc107;
            margin: 20px 0;
        }
        
        .warning {
            background: linear-gradient(135deg, #f8d7da 0%, #f5c6cb 100%);
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #dc3545;
            margin: 20px 0;
        }
        
        .info {
            background: linear-gradient(135deg, #d1ecf1 0%, #bee5eb 100%);
            padding: 20px;
            border-radius: 10px;
            border-left: 5px solid #17a2b8;
            margin: 20px 0;
        }
        
        @media (max-width: 768px) {
            body {
                padding: 10px;
            }
            
            .container {
                border-radius: 15px;
            }
            
            .header, .content {
                padding: 20px;
            }
            
            .header h1 {
                font-size: 2em;
            }
            
            h1 {
                font-size: 1.8em;
            }
            
            h2 {
                font-size: 1.5em;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>{TITLE}</h1>
            <h2>海外华人互帮互助平台</h2>
            <h3>Bounty Hunter Guild</h3>
            <p>创建日期: {DATE}</p>
            <p>版本: v1.0</p>
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
            {CONTENT}
        </div>
        
        <div class="footer">
            <p>本文档为机密文件，仅供投资人和内部团队使用</p>
            <p>© 2025 Bounty Hunter Guild. All rights reserved.</p>
            <p>海外华人互帮互助平台 - 连接全球华人，实现互帮互助</p>
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
            
            # 改进的Markdown到HTML转换
            $htmlContent = $content
            
            # 处理标题
            $htmlContent = $htmlContent -replace '^# (.+)$', '<h1>$1</h1>'
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
            
            # 处理段落（排除已经是HTML标签的行）
            $htmlContent = $htmlContent -replace '^([^<].+)$', '<p>$1</p>'
            
            # 清理多余的段落标签
            $htmlContent = $htmlContent -replace '<p><h1>', '<h1>'
            $htmlContent = $htmlContent -replace '<p><h2>', '<h2>'
            $htmlContent = $htmlContent -replace '<p><h3>', '<h3>'
            $htmlContent = $htmlContent -replace '<p><h4>', '<h4>'
            $htmlContent = $htmlContent -replace '<p><h5>', '<h5>'
            $htmlContent = $htmlContent -replace '<p><h6>', '<h6>'
            $htmlContent = $htmlContent -replace '<p><li>', '<li>'
            $htmlContent = $htmlContent -replace '<p><pre>', '<pre>'
            $htmlContent = $htmlContent -replace '<p><blockquote>', '<blockquote>'
            $htmlContent = $htmlContent -replace '<p><table>', '<table>'
            
            # 处理列表包装
            $htmlContent = $htmlContent -replace '(<li>.*?</li>)', '<ul>$1</ul>'
            
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
Write-Host "所有HTML文件保存在 html/ 目录中" -ForegroundColor Cyan
Write-Host "您可以使用浏览器打开HTML文件，享受清晰漂亮的阅读体验" -ForegroundColor Yellow



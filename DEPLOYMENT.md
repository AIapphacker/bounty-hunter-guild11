# 🚀 赏金猎人俱乐部网站部署指南

## 📋 部署前准备

### 1. 域名购买
- **推荐域名注册商：**
  - 阿里云万网：`https://wanwang.aliyun.com/`
  - 腾讯云：`https://dnspod.cloud.tencent.com/`
  - GoDaddy：`https://www.godaddy.com/`

- **域名建议：**
  - `bountyhunterclub.com`
  - `bhclub.com`
  - `赏金猎人俱乐部.com`

### 2. 代码准备
确保代码已推送到GitHub仓库：
```bash
git add .
git commit -m "准备部署"
git push origin main
```

## 🌐 部署方案

### 方案A：Vercel部署（推荐）

#### 步骤1：注册Vercel
1. 访问 `https://vercel.com/`
2. 使用GitHub账号登录
3. 点击 "New Project"

#### 步骤2：连接GitHub仓库
1. 选择您的GitHub仓库
2. 点击 "Import"
3. 保持默认设置，点击 "Deploy"

#### 步骤3：配置域名
1. 在项目设置中添加自定义域名
2. 将域名DNS解析指向Vercel提供的记录
3. 等待DNS生效（通常几分钟到几小时）

### 方案B：云服务器部署

#### 推荐配置
- **CPU：** 2核
- **内存：** 4GB
- **带宽：** 5Mbps
- **系统：** Ubuntu 20.04 LTS

#### 部署步骤
1. 购买云服务器
2. 安装Node.js和PM2
3. 上传代码并安装依赖
4. 配置Nginx反向代理
5. 配置SSL证书

### 方案C：静态网站托管

#### GitHub Pages
```bash
npm run build
npm run export
# 将out目录推送到gh-pages分支
```

#### Netlify
1. 连接GitHub仓库
2. 设置构建命令：`npm run build`
3. 设置发布目录：`.next`

## 🔧 环境配置

### 生产环境变量
创建 `.env.production` 文件：
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### 性能优化
1. 启用图片优化
2. 配置CDN
3. 启用Gzip压缩
4. 配置缓存策略

## 📱 移动端优化

### PWA支持
1. 添加manifest.json
2. 配置Service Worker
3. 优化离线体验

### 响应式设计
确保在所有设备上都有良好的用户体验

## 🔒 安全配置

### SSL证书
- 使用Let's Encrypt免费证书
- 配置HTTPS重定向
- 启用HSTS

### 安全头
配置安全相关的HTTP头

## 📊 监控和分析

### 性能监控
- 使用Vercel Analytics
- 配置Google Analytics
- 监控Core Web Vitals

### 错误追踪
- 配置Sentry错误追踪
- 监控API响应时间

## 🚀 快速部署命令

### Vercel CLI部署
```bash
npm i -g vercel
vercel login
vercel --prod
```

### 手动构建和部署
```bash
npm run build
npm run start
```

## 📞 技术支持

如果遇到部署问题，可以：
1. 查看Vercel部署日志
2. 检查GitHub Actions状态
3. 查看控制台错误信息

## 💰 成本估算

### 免费方案
- Vercel：免费（每月100GB带宽）
- GitHub Pages：免费
- Netlify：免费（每月100GB带宽）

### 付费方案
- 域名：约50-200元/年
- 云服务器：约100-500元/月
- CDN：约50-200元/月

---

**推荐新手使用Vercel部署，简单快速且免费！**

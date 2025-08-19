# 贡献指南 (Contributing Guide)

感谢您对赏金猎人工会项目的关注！我们欢迎所有形式的贡献，包括但不限于代码、文档、设计、测试等。

## 🚀 快速开始

### 1. 设置开发环境

```bash
# 克隆仓库
git clone https://github.com/AIapphacker/bounty-hunter-guild11.git
cd bounty-hunter-guild11

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 2. 创建分支

```bash
# 从main分支创建新分支
git checkout -b feature/your-feature-name

# 或者使用更详细的分支命名
git checkout -b feature/user-registration-system
git checkout -b bugfix/navigation-mobile-issue
git checkout -b docs/update-readme
```

## 📋 贡献类型

### 🐛 Bug修复
- 创建 `bugfix/` 前缀的分支
- 在修复前先创建Issue描述问题
- 提供复现步骤和预期行为

### ✨ 新功能
- 创建 `feature/` 前缀的分支
- 在开发前先创建Issue讨论功能需求
- 确保新功能与现有架构兼容

### 📚 文档改进
- 创建 `docs/` 前缀的分支
- 更新README、API文档、组件文档等
- 确保文档清晰易懂

### 🎨 设计改进
- 创建 `design/` 前缀的分支
- 提供设计稿和实现说明
- 确保设计符合项目风格

### 🧪 测试
- 创建 `test/` 前缀的分支
- 添加单元测试、集成测试
- 提高代码覆盖率

## 🔧 开发流程

### 1. 问题讨论
在开始开发前，请先在GitHub Issues中讨论：
- 功能需求
- 技术方案
- 实现细节
- 潜在问题

### 2. 代码开发
```bash
# 确保代码风格一致
npm run lint

# 类型检查
npm run type-check

# 运行测试（如果有）
npm test
```

### 3. 提交代码
```bash
# 添加更改
git add .

# 提交代码（使用清晰的提交信息）
git commit -m "feat: add user registration form component

- Add form validation with Zod
- Implement responsive design
- Add error handling and success messages
- Update component documentation"

# 推送到远程分支
git push origin feature/your-feature-name
```

### 4. 创建Pull Request
- 标题要清晰描述更改内容
- 详细描述更改的原因和影响
- 添加相关的Issue链接
- 提供测试说明

## 📝 代码规范

### TypeScript规范
- 使用严格的类型定义
- 避免使用 `any` 类型
- 为函数参数和返回值添加类型注解
- 使用接口定义对象结构

### React组件规范
- 使用函数组件和Hooks
- 组件名使用PascalCase
- 文件名与组件名保持一致
- 添加必要的PropTypes或TypeScript接口

### CSS规范
- 优先使用Tailwind CSS类
- 自定义CSS使用CSS变量
- 遵循BEM命名规范
- 确保响应式设计

### 文件组织
```
src/
├── components/          # 可复用组件
│   ├── ui/            # 基础UI组件
│   ├── forms/         # 表单相关组件
│   └── layout/        # 布局组件
├── hooks/              # 自定义Hooks
├── utils/              # 工具函数
├── types/              # TypeScript类型定义
└── styles/             # 样式文件
```

## 🧪 测试要求

### 单元测试
- 为新功能添加单元测试
- 测试覆盖率不低于80%
- 使用Jest和React Testing Library

### 集成测试
- 测试组件间的交互
- 测试用户流程
- 确保跨浏览器兼容性

## 📚 文档要求

### 代码注释
- 为复杂逻辑添加注释
- 使用JSDoc格式
- 注释要清晰易懂

### 组件文档
- 描述组件的用途和用法
- 提供Props说明
- 添加使用示例

### API文档
- 描述API端点和参数
- 提供请求/响应示例
- 说明错误处理

## 🔍 代码审查

### 审查要点
- 代码质量和可读性
- 功能实现的正确性
- 性能影响评估
- 安全性考虑
- 测试覆盖情况

### 审查流程
1. 创建Pull Request
2. 团队成员进行代码审查
3. 根据反馈进行修改
4. 获得批准后合并

## 🚫 禁止事项

- 不要直接提交到main分支
- 不要提交敏感信息（API密钥、密码等）
- 不要提交临时文件或构建产物
- 不要提交过大的文件

## 🎯 优先级任务

### 高优先级
- [ ] 用户认证系统
- [ ] 任务发布功能
- [ ] 支付集成
- [ ] 移动端优化

### 中优先级
- [ ] 用户个人资料
- [ ] 任务搜索和筛选
- [ ] 通知系统
- [ ] 数据统计

### 低优先级
- [ ] 主题切换
- [ ] 多语言支持
- [ ] 性能优化
- [ ] 单元测试

## 📞 获取帮助

如果您在贡献过程中遇到问题：

1. 查看现有Issues和Discussions
2. 在Discussions中提问
3. 联系项目维护者
4. 参考项目文档

## 🙏 致谢

感谢所有为项目做出贡献的开发者！您的贡献让这个项目变得更好。

---

**记住**：好的贡献不仅仅是代码，还包括文档、测试、设计建议等。每一个贡献都值得感谢！

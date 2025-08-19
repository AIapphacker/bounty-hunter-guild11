'use client'

export default function GameIntro() {
  const gameFeatures = [
    {
      title: "任务发布",
      description: "通过AI助手对话式创建任务，智能分类和推荐",
      steps: ["描述需求", "AI分析", "设置赏金", "发布任务"]
    },
    {
      title: "任务接单",
      description: "浏览任务大厅，筛选合适的任务，一键接单",
      steps: ["浏览任务", "筛选匹配", "评估收益", "确认接单"]
    },
    {
      title: "任务执行",
      description: "与雇主沟通确认，执行任务，实时更新进度",
      steps: ["需求确认", "开始执行", "进度更新", "完成提交"]
    },
    {
      title: "支付结算",
      description: "任务完成后，通过USDT智能合约自动结算",
      steps: ["质量检查", "雇主确认", "智能结算", "资金到账"]
    }
  ]

  const taskTypes = [
    {
      category: "生活服务类",
      examples: ["搬家", "清洁", "代购", "接送", "宠物照顾"],
      icon: "🏠"
    },
    {
      category: "专业技能类",
      examples: ["翻译", "设计", "编程", "财务", "法律咨询"],
      icon: "💼"
    },
    {
      category: "社交娱乐类",
      examples: ["组局", "旅游", "运动", "文化活动"],
      icon: "🎉"
    },
    {
      category: "学习互助类",
      examples: ["语言交换", "技能培训", "考试辅导"],
      icon: "📚"
    }
  ]

  return (
    <section id="game-intro" className="py-20 px-4 relative bg-gray-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(0, 149, 246, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(88, 81, 219, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="font-ig text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            游戏介绍与玩法
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            成为赏金猎人，免费接取任务，并顺利完成雇主任务后获得雇主成功反馈即可收获报酬奖励。
            成为任务发布者（雇主），发布任务细节和赏金，通过AI以及人工审查内容通过后，向大管家提交保证金后即可发布给合适的猎人，并耐心等待猎人接受任务并通过大管家建立联系方式，AI系统将为你提供最精准的匹配服务。
          </p>
        </div>

        {/* 游戏流程 */}
        <div className="mb-20">
          <h3 className="font-ig text-3xl font-bold mb-8 text-center text-blue-600">
            游戏流程
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative p-6 card hover:shadow-lg transition-all duration-300 border-blue-200 hover:border-blue-300"
              >
                {/* 步骤编号 */}
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-ig font-bold text-sm shadow-md">
                  {index + 1}
                </div>
                
                <h4 className="font-ig text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* 步骤列表 */}
                <ul className="space-y-2">
                  {feature.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 任务类型 */}
        <div className="mb-20">
          <h3 className="font-ig text-3xl font-bold mb-8 text-center text-purple-600">
            任务类型
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {taskTypes.map((type, index) => (
              <div
                key={index}
                className="p-6 card hover:shadow-lg transition-all duration-300 border-purple-200 hover:border-purple-300"
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{type.icon}</span>
                  <h4 className="font-ig text-xl font-semibold text-gray-900">
                    {type.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {type.examples.map((example, exampleIndex) => (
                    <span
                      key={exampleIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm border border-purple-200 hover:bg-purple-200 transition-colors duration-300"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 收益说明 */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 shadow-md">
          <h3 className="font-ig text-2xl font-bold mb-4 text-blue-600">
            收益模式
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">任务赏金</div>
              <div className="text-gray-600">根据任务难度和时长设定</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">信用等级</div>
              <div className="text-gray-600">完成任务获得信用积分</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">推荐奖励</div>
              <div className="text-gray-600">优质服务获得额外推荐</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

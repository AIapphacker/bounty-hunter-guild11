'use client'

export default function Precautions() {
  const warnings = [
    {
      level: "warning",
      title: "任务保证金",
      content: "任务发布者需在与猎人约定好时间前给管家缴纳任务保证金，以确保不会出现跑单情况。猎人执行完成任务后保证金全部返还。",
      icon: "💰"
    },
    {
      level: "danger",
      title: "恶意行为处罚",
      content: "猎人需安全以及按照任务所需时间完成任务。如出现恶意行为，警告降级一次，第二次清除猎人名单。",
      icon: "⚠️"
    },
    {
      level: "info",
      title: "任务审核",
      content: "任务发布者的任务需要工作人员进行审核。希望大家根据自己真实需求发布任务，虚假任务将被当作负面处理。",
      icon: "🔍"
    },
    {
      level: "success",
      title: "诚信为本",
      content: "平台以诚信为基础，所有用户都应遵守规则，维护良好的社区环境。优质服务将获得更多推荐机会。",
      icon: "✅"
    }
  ]

  const rules = [
    "禁止发布违法、违规任务",
    "禁止恶意刷单、虚假评价",
    "禁止泄露他人隐私信息",
    "禁止进行任何形式的诈骗活动",
    "必须遵守当地法律法规",
    "必须保护用户个人信息安全"
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'warning':
        return 'border-orange-200 bg-orange-50'
      case 'danger':
        return 'border-red-200 bg-red-50'
      case 'info':
        return 'border-blue-200 bg-blue-50'
      case 'success':
        return 'border-green-200 bg-green-50'
      default:
        return 'border-blue-200 bg-blue-50'
    }
  }

  const getLevelTextColor = (level: string) => {
    switch (level) {
      case 'warning':
        return 'text-orange-600'
      case 'danger':
        return 'text-red-600'
      case 'info':
        return 'text-blue-600'
      case 'success':
        return 'text-green-600'
      default:
        return 'text-blue-600'
    }
  }

  return (
    <section id="precautions" className="py-20 px-4 relative bg-white">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="font-ig text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            注意事项与规则
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            为了维护平台的健康发展和用户体验，请所有用户严格遵守以下规则。
            违反规则将受到相应处罚，严重者将被永久封禁。
          </p>
        </div>

        {/* 主要警告信息 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {warnings.map((warning, index) => (
            <div
              key={index}
              className={`relative p-6 card hover:shadow-lg transition-all duration-300 ${getLevelColor(warning.level)}`}
            >
              {/* 警告图标 */}
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{warning.icon}</span>
                <h3 className={`font-ig text-xl font-semibold ${getLevelTextColor(warning.level)}`}>
                  {warning.title}
                </h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                {warning.content}
              </p>
            </div>
          ))}
        </div>

        {/* 禁止事项 */}
        <div className="mb-16">
          <h3 className="font-ig text-3xl font-bold mb-8 text-center text-red-600">
            禁止事项
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                <span className="text-gray-700 font-medium">{rule}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 平台承诺 */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-200 shadow-md">
          <h3 className="font-ig text-2xl font-bold mb-4 text-blue-600">
            平台承诺
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">安全保障</div>
              <div className="text-gray-600">智能合约托管，确保资金安全</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">公平交易</div>
              <div className="text-gray-600">透明定价，无隐藏费用</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 mb-2">优质服务</div>
              <div className="text-gray-600">严格审核，保证服务质量</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

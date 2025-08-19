'use client'

export default function ClubIntro() {
  const features = [
    {
      icon: "🎯",
      title: "任务悬赏系统",
      description: "基于AI技术的智能任务匹配，让每个需求都能找到最合适的解决方案",
      color: "blue"
    },
    {
      icon: "🔐",
      title: "区块链支付",
      description: "USDT多链支持，智能合约托管，确保交易安全透明",
      color: "purple"
    },
    {
      icon: "🤝",
      title: "华人互助文化",
      description: "传承华人互助传统，建立信任机制，打造温暖社区",
      color: "green"
    },
    {
      icon: "🌍",
      title: "全球覆盖",
      description: "优先提供本地化服务&诚邀各地有资历服务商对接，跨越地域限制提供最准确的服务",
      color: "pink"
    },
    {
      icon: "⚡",
      title: "AI驱动",
      description: "OpenAI GPT-5集成，智能分析任务，AI辅助审核内容，精准推荐匹配猎人",
      color: "orange"
    },
    {
      icon: "📱",
      title: "多端支持",
      description: "Web、微信小程序、App全覆盖，随时随地发布接单",
      color: "blue"
    }
  ]

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'border-blue-200 hover:border-blue-300 bg-blue-50'
      case 'purple':
        return 'border-purple-200 hover:border-purple-300 bg-purple-50'
      case 'green':
        return 'border-green-200 hover:border-green-300 bg-green-50'
      case 'pink':
        return 'border-pink-200 hover:border-pink-300 bg-pink-50'
      case 'orange':
        return 'border-orange-200 hover:border-orange-300 bg-orange-50'
      default:
        return 'border-gray-200 hover:border-gray-300 bg-gray-50'
    }
  }

  const scrollToRegistration = () => {
    console.log('ClubIntro: Attempting to scroll to registration section')
    
    // 方法1: 使用scrollIntoView
    const element = document.getElementById('registration')
    if (element) {
      console.log('ClubIntro: Found registration element:', element)
      try {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        console.log('ClubIntro: Scrolled to registration successfully')
      } catch (error) {
        console.error('ClubIntro: Error scrolling to registration:', error)
        // 方法2: 备用方案 - 使用window.scrollTo
        const rect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset + rect.top - 100 // 减去100px的偏移
        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        })
        console.log('ClubIntro: Used fallback scroll method')
      }
    } else {
      console.error('ClubIntro: Registration element not found')
      // 方法3: 如果找不到元素，尝试滚动到页面底部
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      })
      console.log('ClubIntro: Scrolled to bottom as fallback')
    }
  }

  return (
    <section id="club-intro" className="py-20 px-4 relative bg-white">
      {/* 简洁的装饰元素 */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-200 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* 简洁的网格背景 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="font-ig text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            关于赏金猎人俱乐部
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们是一个创新的海外华人&留学生互助平台，通过任务悬赏系统连接全球华人群体，
            让每个人都能在需要帮助时找到援手，也能通过自己的技能帮助他人。
          </p>
        </div>

        {/* 特色功能网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative p-6 bg-white border rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 ${getColorClasses(feature.color)}`}
            >
              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="font-ig text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
              5000万+
            </div>
            <div className="text-gray-600">全球华人群体</div>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
              100万+
            </div>
            <div className="text-gray-600">注册用户</div>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
              50万+
            </div>
            <div className="text-gray-600">完成任务</div>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
              99.9%
            </div>
            <div className="text-gray-600">用户满意度</div>
          </div>
        </div>

        {/* 行动号召 */}
        <div className="text-center mt-16">
          <button 
            onClick={scrollToRegistration}
            className="bg-blue-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-blue-700 hover:shadow-lg transition-all duration-300 cursor-pointer font-semibold"
            type="button"
          >
            立即加入我们
          </button>
        </div>
      </div>
    </section>
  )
}

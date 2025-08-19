'use client'

import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`)
    
    // 方法1: 使用scrollIntoView
    const element = document.getElementById(sectionId)
    if (element) {
      console.log(`Found element:`, element)
      try {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
        console.log(`Scrolled to ${sectionId} successfully`)
      } catch (error) {
        console.error(`Error scrolling to ${sectionId}:`, error)
        // 方法2: 备用方案 - 使用window.scrollTo
        const rect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset + rect.top - 100 // 减去100px的偏移
        window.scrollTo({
          top: scrollTop,
          behavior: 'smooth'
        })
        console.log(`Used fallback scroll method for ${sectionId}`)
      }
    } else {
      console.error(`Element with id '${sectionId}' not found`)
      // 方法3: 如果找不到元素，尝试滚动到页面底部
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      })
      console.log(`Scrolled to bottom as fallback`)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 简洁的装饰元素 */}
      <div className="geometric-element"></div>
      <div className="geometric-element"></div>
      <div className="geometric-element"></div>
      
      {/* Instagram风格背景 */}
      <div className="absolute inset-0 ig-bg">
        {/* 简洁的网格背景 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 grid-bg" />
        </div>
        
        {/* 简洁的扫描线效果 */}
        <div className="absolute inset-0">
          <div className="scan-line w-full h-full" />
        </div>
        
        {/* 简洁的数据流效果 */}
        <div className="absolute inset-0">
          <div className="data-flow w-full h-full" />
        </div>
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* 主标题 */}
          <h1 className="font-ig text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gray-900">
            赏金猎人俱乐部
          </h1>
          
          {/* 副标题 */}
          <h2 className="font-ig text-2xl md:text-3xl lg:text-4xl font-bold mb-8 text-gray-600">
            BOUNTY HUNTER CLUB
          </h2>
          
          {/* 描述 */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            海外华人&留学生互帮互助平台 · 基于AI技术和区块链支付的创新任务悬赏系统
          </p>
          
          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('registration')}
              className="btn-primary text-lg px-8 py-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
              type="button"
            >
              加入俱乐部
            </button>
            <button 
              onClick={() => scrollToSection('club-intro')}
              className="btn-secondary text-lg px-8 py-4 hover:shadow-lg transition-all duration-300 cursor-pointer"
              type="button"
            >
              了解更多
            </button>
          </div>
        </div>
      </div>

      {/* 底部装饰线 */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
      
      {/* 滚动指示器 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

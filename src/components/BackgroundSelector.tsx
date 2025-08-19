'use client'

import { useState } from 'react'

const backgroundOptions = [
  {
    id: 'ig-bg',
    name: 'Instagram风格',
    description: '简洁大气的渐变背景'
  },
  {
    id: 'ig-bg-alt',
    name: '简约风格',
    description: '柔和的浅色渐变'
  },
  {
    id: 'gradient-primary',
    name: '主色调渐变',
    description: '蓝色到紫色的渐变'
  },
  {
    id: 'gradient-secondary',
    name: '次色调渐变',
    description: '深蓝到蓝色的渐变'
  },
  {
    id: 'bg-primary',
    name: '纯白背景',
    description: '简洁的白色背景'
  },
  {
    id: 'bg-secondary',
    name: '浅灰背景',
    description: '柔和的浅灰色背景'
  }
]

interface BackgroundSelectorProps {
  onBackgroundChange: (backgroundClass: string) => void
  currentBackground: string
}

export default function BackgroundSelector({ onBackgroundChange, currentBackground }: BackgroundSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleBackgroundChange = (backgroundClass: string) => {
    onBackgroundChange(backgroundClass)
    setIsOpen(false)
  }

  return (
    <div className="fixed top-20 right-4 z-50">
      {/* 背景切换按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-blue-600 text-white font-ig font-semibold rounded-full hover:bg-blue-700 hover:shadow-md transition-all duration-300 transform hover:scale-105"
      >
        🎨 切换背景
      </button>

      {/* 背景选择面板 */}
      {isOpen && (
        <div className="absolute top-12 right-0 w-80 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl shadow-xl p-4">
          <h3 className="font-ig text-lg font-semibold text-gray-900 mb-4 text-center">
            选择背景风格
          </h3>
          
          <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto">
            {backgroundOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => handleBackgroundChange(option.id)}
                className={`p-3 text-left rounded-lg border transition-all duration-300 hover:scale-105 ${
                  currentBackground === option.id
                    ? 'border-blue-600 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="font-ig font-semibold text-gray-900 mb-1">
                  {option.name}
                </div>
                <div className="text-sm text-gray-600">
                  {option.description}
                </div>
                {currentBackground === option.id && (
                  <div className="text-blue-600 text-xs mt-2 font-ig">
                    ✓ 当前使用
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* 关闭按钮 */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-4 px-4 py-2 border border-gray-300 text-gray-700 font-ig font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            关闭
          </button>
        </div>
      )}
    </div>
  )
}

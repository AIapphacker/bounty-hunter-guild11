'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
              <span className="text-white font-ig font-bold text-sm">BH</span>
            </div>
            <span className="font-ig text-xl text-gray-900 font-semibold group-hover:text-blue-600 transition-all duration-300">
              赏金猎人俱乐部
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#club-intro" 
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-medium"
            >
              俱乐部介绍
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link 
              href="#game-intro" 
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-medium"
            >
              游戏介绍
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link 
              href="#precautions" 
              className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-medium"
            >
              注意事项
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></div>
            </Link>
            <Link 
              href="#registration" 
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 hover:shadow-md transition-all duration-300 transform hover:scale-105"
            >
              立即注册
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300 relative"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'} mt-1`}></span>
                <span className={`w-6 h-0.5 bg-current transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''} mt-1`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 border-t border-gray-200 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="#club-intro" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                俱乐部介绍
              </Link>
              <Link 
                href="#game-intro" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                游戏介绍
              </Link>
              <Link 
                href="#precautions" 
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 hover:bg-blue-50 rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                注意事项
              </Link>
              <Link 
                href="#registration" 
                className="block px-3 py-2 bg-blue-600 text-white font-semibold rounded-full text-center hover:bg-blue-700 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                立即注册
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

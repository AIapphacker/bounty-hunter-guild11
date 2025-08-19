'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          出现了一些问题
        </h2>
        <p className="text-gray-600 mb-6">
          抱歉，页面加载时出现了错误。请尝试刷新页面或重新加载。
        </p>
        <button
          onClick={reset}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          重试
        </button>
      </div>
    </div>
  )
}

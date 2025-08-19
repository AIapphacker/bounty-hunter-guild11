'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              系统错误
            </h2>
            <p className="text-gray-600 mb-6">
              抱歉，系统出现了严重错误。请尝试刷新页面。
            </p>
            <button
              onClick={reset}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              重试
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          页面未找到
        </h2>
        <p className="text-gray-600 mb-6">
          抱歉，您访问的页面不存在。
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
        >
          返回首页
        </Link>
      </div>
    </div>
  )
}

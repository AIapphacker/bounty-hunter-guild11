/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // 移除过时的appDir配置
  },
  i18n: {
    locales: ['zh-CN', 'en'],
    defaultLocale: 'zh-CN',
    localeDetection: false
  },
  env: {
    CUSTOM_KEY: 'my-value',
  },
}

module.exports = nextConfig



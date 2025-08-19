import type { Metadata } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  variable: '--font-orbitron'
})

export const metadata: Metadata = {
  title: '留学生赏金猎人俱乐部 - Bounty Hunter Club',
  description: '海外华人&留学生互帮互助平台，基于AI技术和区块链支付的创新任务悬赏系统',
  keywords: '赏金猎人, 留学生, 互助平台, AI技术, 区块链支付, 任务悬赏',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

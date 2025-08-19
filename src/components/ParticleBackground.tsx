'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  opacity: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // 设置画布尺寸
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // 粒子配置 - Instagram风格色彩
    const particles: Particle[] = []
    const particleCount = 50 // 减少粒子数量，更简洁
    const colors = ['#0095f6', '#5851db', '#833ab4', '#405de6', '#5b51d8'] // Instagram品牌色

    // 创建粒子
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3, // 降低速度
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5, // 更小的粒子
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.1 // 更低的透明度
      })
    }

    // 动画循环
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 更新和绘制粒子
      particles.forEach((particle, index) => {
        // 更新位置
        particle.x += particle.vx
        particle.y += particle.vy

        // 边界检测
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // 绘制粒子
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity
        ctx.fill()

        // 绘制连接线 - 更细更淡
        particles.forEach((otherParticle, otherIndex) => {
          if (index === otherIndex) return
          
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          )
          
          if (distance < 80) { // 减少连接距离
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = particle.color
            ctx.globalAlpha = (80 - distance) / 80 * 0.05 // 更淡的连接线
            ctx.lineWidth = 0.5 // 更细的线条
            ctx.stroke()
          }
        })
      })

      // 重置透明度
      ctx.globalAlpha = 1

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.2 }} // 更低的整体透明度
    />
  )
}

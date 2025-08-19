'use client'

import { useState } from 'react'

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    studentId: '',
    skills: '',
    experience: '',
    motivation: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟提交过程
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // 重置表单
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        country: '',
        city: '',
        studentId: '',
        skills: '',
        experience: '',
        motivation: ''
      })
    }, 3000)
  }

  const countries = [
    '美国', '加拿大', '英国', '澳大利亚', '新西兰', '德国', '法国', '日本', '新加坡', '其他'
  ]

  if (submitSuccess) {
    return (
      <section id="registration" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 shadow-lg">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="font-ig text-3xl font-bold mb-4 text-blue-600">
              申请提交成功！
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              您的申请已成功提交，我们的管家团队将在24小时内完成审核。
              审核通过后，您将收到专属的俱乐部会员编号。
            </p>
            <div className="text-blue-600 font-ig text-lg">
              请保持手机和邮箱畅通，我们会及时通知您审核结果。
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="registration" className="py-20 px-4 relative bg-gray-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="font-ig text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            加入赏金猎人俱乐部
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            填写以下信息，通过管家审核后即可成为俱乐部会员，获得专属会员编号。
            开始您的赏金猎人之旅！
          </p>
        </div>

        {/* 注册表单 */}
        <div className="card p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 基本信息 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="label">姓名 *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="请输入您的真实姓名"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="label">邮箱 *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="请输入您的邮箱地址"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="label">手机号码 *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="请输入您的手机号码"
                />
              </div>
              
              <div>
                <label htmlFor="country" className="label">所在国家 *</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                >
                  <option value="">请选择国家</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="city" className="label">所在城市 *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="请输入您所在的城市"
                />
              </div>
              
              <div>
                <label htmlFor="studentId" className="label">学生证号</label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleInputChange}
                  className="w-full"
                  placeholder="如果您是学生，请输入学生证号"
                />
              </div>
            </div>

            {/* 技能和经验 */}
            <div>
              <label htmlFor="skills" className="label">技能特长</label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                rows={3}
                className="w-full"
                placeholder="请描述您的技能特长，如：翻译、设计、编程、家政等"
              />
            </div>
            
            <div>
              <label htmlFor="experience" className="label">相关经验</label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={3}
                className="w-full"
                placeholder="请描述您相关的服务经验"
              />
            </div>
            
            <div>
              <label htmlFor="motivation" className="label">加入动机 *</label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full"
                placeholder="请说明您为什么想要加入赏金猎人俱乐部，以及您希望如何为社区做出贡献"
              />
            </div>

            {/* 提交按钮 */}
            <div className="text-center pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary text-lg px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '提交中...' : '提交申请'}
              </button>
            </div>
          </form>
        </div>

        {/* 申请说明 */}
        <div className="mt-12 text-center">
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="font-ig text-xl font-semibold text-blue-600 mb-3">
              申请说明
            </h3>
            <div className="text-gray-600 space-y-2">
              <p>• 所有申请将在24小时内完成审核</p>
              <p>• 审核通过后，您将获得专属会员编号</p>
              <p>• 成为会员后，即可开始接取任务或发布任务</p>
              <p>• 如有疑问，请联系我们的客服团队</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

/**
 * 价格方案组件
 * @returns {JSX.Element} 价格方案组件
 */
export default function Pricing() {
  const plans = [
    {
      name: '免费体验',
      price: '0',
      description: '适合个人用户尝试我们的基础功能',
      features: [
        '每日5张图片生成额度',
        '基础风格选择（5种）',
        '标准处理速度',
        '最大输出分辨率 1080p',
        '无水印导出',
        '社区支持'
      ],
      buttonText: '开始免费使用',
      popular: false
    },
    {
      name: '专业版',
      price: '99',
      period: '月',
      description: '适合专业创作者和小型团队',
      features: [
        '每日100张图片生成额度',
        '全部风格选择（20+种）',
        '优先处理队列',
        '最大输出分辨率 4K',
        '批量处理功能',
        '优先技术支持',
        '7天历史记录'
      ],
      buttonText: '选择专业版',
      popular: true
    },
    {
      name: '企业版',
      price: '299',
      period: '月',
      description: '适合企业和大型团队使用',
      features: [
        '无限图片生成额度',
        '全部风格选择（20+种）',
        '最高优先处理队列',
        '最大输出分辨率 8K',
        '批量处理功能',
        'API访问接口',
        '专属客户经理',
        '30天历史记录',
        '自定义品牌水印'
      ],
      buttonText: '联系销售',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            选择适合您的<span className="text-blue-600">价格方案</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            我们提供灵活的价格方案，从免费体验到企业定制，满足不同用户的需求。
            所有方案均可随时升级或降级。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl shadow-sm overflow-hidden ${
                plan.popular ? 'ring-2 ring-blue-600' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  最受欢迎
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold">¥{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 text-lg">/{plan.period}</span>
                  )}
                </div>
                <Link 
                  href="/#upload" 
                  className={`block text-center py-3 px-6 rounded-md font-medium transition duration-200 ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
              <div className="border-t border-gray-100 p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check size={20} className="text-green-500 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
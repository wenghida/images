'use client';

import { motion } from 'framer-motion';

/**
 * 用户评价组件
 * @returns {JSX.Element} 用户评价组件
 */
export default function Testimonials() {
  const testimonials = [
    {
      name: '张先生',
      role: '自由摄影师',
      content: '图像魔方彻底改变了我的工作流程！我可以快速将普通照片转换成不同风格的艺术作品，客户非常喜欢这些效果。节省了我大量后期处理的时间。',
      avatar: '张'
    },
    {
      name: '李女士',
      role: '社交媒体运营',
      content: '作为一名社交媒体运营，我需要持续产出有吸引力的内容。图像魔方帮助我轻松创建独特的视觉效果，大大提升了账号的互动率和关注度。',
      avatar: '李'
    },
    {
      name: '王先生',
      role: '电商店主',
      content: '我用图像魔方处理产品图片，效果令人惊艳！转化率提升了30%以上，强烈推荐给所有需要高质量图像的电商从业者。',
      avatar: '王'
    },
    {
      name: '赵女士',
      role: '平面设计师',
      content: '作为设计师，我经常需要寻找灵感。图像魔方不仅是一个工具，更是我创意的源泉。它生成的图像总能给我带来新的设计思路。',
      avatar: '赵'
    },
    {
      name: '刘先生',
      role: '游戏开发者',
      content: '我们团队使用图像魔方为游戏角色生成概念图，大大加速了设计流程。生成的图像质量非常高，为我们的创作提供了很好的参考。',
      avatar: '刘'
    },
    {
      name: '陈女士',
      role: '市场营销主管',
      content: '图像魔方帮助我们快速生成各种营销素材，无需聘请专业设计师。它的多样化风格选择让我们的品牌形象更加丰富多彩。',
      avatar: '陈'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            用户的<span className="text-blue-600">真实评价</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            来自各行各业的用户分享他们使用图像魔方的真实体验，
            看看他们如何利用我们的技术提升工作效率和创意表达。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
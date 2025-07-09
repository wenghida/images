'use client';

import { motion } from 'framer-motion';
import { Wand2, Sparkles, Palette, Clock, Shield, Award } from 'lucide-react';

/**
 * 功能特点组件
 * @returns {JSX.Element} 功能特点组件
 */
export default function Features() {
  const features = [
    {
      icon: <Wand2 size={32} className="text-blue-600" />,
      title: '智能风格转换',
      description: '基于先进AI算法，保留原图特征的同时，完美转换为您选择的风格。'
    },
    {
      icon: <Sparkles size={32} className="text-blue-600" />,
      title: '高清输出',
      description: '所有生成图像均为高分辨率，确保细节清晰，适合各种用途。'
    },
    {
      icon: <Palette size={32} className="text-blue-600" />,
      title: '多种风格选择',
      description: '提供卡通、仙侠、写实等多种风格选择，满足您的不同创意需求。'
    },
    {
      icon: <Clock size={32} className="text-blue-600" />,
      title: '快速处理',
      description: '强大的云端处理能力，几秒钟内即可完成图像生成，无需长时间等待。'
    },
    {
      icon: <Shield size={32} className="text-blue-600" />,
      title: '隐私保障',
      description: '所有上传的图片均严格保密，处理完成后自动删除，保障您的隐私安全。'
    },
    {
      icon: <Award size={32} className="text-blue-600" />,
      title: '专业品质',
      description: '生成的图像具有专业品质，可直接用于商业设计、社交媒体等场景。'
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            专业级图像转换，<span className="text-blue-600">只需简单几步</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            我们的AI技术能够智能分析您的图像，并根据选择的风格进行精确转换，
            保留原图的精髓，同时呈现令人惊艳的艺术效果。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
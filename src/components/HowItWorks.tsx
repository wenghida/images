'use client';

import { motion } from 'framer-motion';
import { Upload, Palette, Wand2, Download } from 'lucide-react';

/**
 * 使用流程组件
 * @returns {JSX.Element} 使用流程组件
 */
export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload size={32} className="text-white" />,
      title: '上传图片',
      description: '点击上传或拖拽您想要转换的图片到我们的平台。支持JPG、PNG等常见格式。'
    },
    {
      icon: <Palette size={32} className="text-white" />,
      title: '选择风格',
      description: '从多种预设风格中选择您喜欢的效果，包括卡通、仙侠、写实等多种选项。'
    },
    {
      icon: <Wand2 size={32} className="text-white" />,
      title: '智能生成',
      description: '我们的AI引擎会分析您的图片，并根据所选风格进行智能转换，生成高质量图像。'
    },
    {
      icon: <Download size={32} className="text-white" />,
      title: '下载使用',
      description: '生成完成后，您可以预览并下载图片，用于个人创作、社交媒体或商业用途。'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600">简单四步</span>，获得惊艳图像
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            我们的平台操作简单直观，无需复杂设置，只需几个简单步骤，
            即可将您的普通照片转变为令人惊艳的艺术作品。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -z-10 transform -translate-y-1/2">
                    <div className="absolute right-0 w-3 h-3 rounded-full bg-blue-600 -translate-y-1 translate-x-1/2"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
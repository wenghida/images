'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

/**
 * FAQ问答组件
 * @returns {JSX.Element} FAQ组件
 */
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '图像魔方支持哪些图片格式？',
      answer: '我们支持所有常见的图片格式，包括JPG、PNG、WEBP、BMP等。为了获得最佳效果，我们建议上传清晰度较高的图片。'
    },
    {
      question: '生成的图片可以用于商业用途吗？',
      answer: '是的，所有通过我们平台生成的图片，您拥有完全的使用权。您可以将这些图片用于个人或商业项目，无需额外授权。'
    },
    {
      question: '处理一张图片需要多长时间？',
      answer: '根据所选风格和图片复杂度不同，处理时间通常在5-30秒之间。我们的系统会不断优化，以提供更快的处理速度。'
    },
    {
      question: '如何选择最适合我图片的风格？',
      answer: '我们提供多种预设风格供您选择。您可以先上传图片，然后尝试不同风格，预览效果后再决定使用哪一种。我们也会根据您的图片特点推荐最适合的风格选项。'
    },
    {
      question: '对上传图片的大小有限制吗？',
      answer: '免费用户可上传最大5MB的图片，付费用户可上传最大20MB的图片。如果您的图片超过限制，可以先压缩后再上传。'
    },
    {
      question: '我的图片和生成结果会被保存吗？',
      answer: '为了保护您的隐私，我们不会永久存储您上传的原始图片。生成的结果会在您的账户中保存7天，之后将自动删除，除非您选择永久保存。'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="heading-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            常见<span className="text-blue-600">问题解答</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            我们收集了用户最常问的问题，如果您有其他疑问，
            欢迎随时联系我们的客服团队。
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200 py-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-xl font-medium">{faq.question}</h3>
                <span className="text-blue-600">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 text-gray-600"
                >
                  <p>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

/**
 * 网站首屏Hero区域组件
 * @returns {JSX.Element} Hero组件
 */
export default function Hero() {
  // 样式卡片数据
  const styleCards = [
    {
      id: "cartoon",
      name: "卡通风格",
      image:
        "https://images.unsplash.com/photo-1560800452-f2d475982b96?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: "fantasy",
      name: "仙侠风格",
      image:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=300&h=300&auto=format&fit=crop",
    },
    {
      id: "realistic",
      name: "写实风格",
      image:
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=300&h=300&auto=format&fit=crop",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-28 lg:py-32">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50 rounded-full mix-blend-multiply opacity-20 blur-3xl"></div>
      </div>

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-block mb-6 px-4 py-2 bg-blue-50 rounded-full">
              <span className="text-blue-600 font-medium flex items-center justify-center">
                <Sparkles size={16} className="mr-2" />
                AI驱动的图像转换平台
              </span>
            </div>
            <h1 className="heading-xl mb-6">
              <span className="gradient-text">智能图像转换</span>，
              <br />
              释放创意无限可能
            </h1>
            <motion.p
              className="text-xl text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              上传您的图片，选择风格，一键生成专业级别的精美图像。
              无论是卡通风格、仙侠世界还是写实主义，我们都能为您打造完美作品。
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/#upload" className="create-button">
                <Sparkles size={18} />
                立即创作
              </Link>
              <Link
                href="/#how-it-works"
                className="btn-secondary flex items-center"
              >
                了解更多
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* 样式卡片展示 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {styleCards.map((card) => (
            <div key={card.id} className="creation-card aspect-square">
              <Image
                src={card.image}
                alt={card.name}
                width={400}
                height={400}
                className="creation-card-img"
              />
              <div className="creation-card-content">
                <h3 className="creation-card-title">{card.name}</h3>
                <p className="creation-card-desc">点击体验</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* 用户评价指标 */}
        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-1">1000+</div>
            <div className="text-gray-600">活跃用户</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-1">50万+</div>
            <div className="text-gray-600">生成图像</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-1">4.9/5</div>
            <div className="text-gray-600">用户评分</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text mb-1">20+</div>
            <div className="text-gray-600">风格选择</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

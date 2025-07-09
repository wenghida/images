'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Image as ImageIcon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * 网站顶部导航栏组件
 * @returns {JSX.Element} 导航栏组件
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 监听滚动事件，改变导航栏样式
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-2">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="text-xl font-bold">
                图像魔方
              </span>
            </div>
          </Link>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex space-x-1">
            {[
              { href: '/#features', label: '功能特点' },
              { href: '/#how-it-works', label: '使用流程' },
              { href: '/#pricing', label: '价格方案' },
              { href: '/#testimonials', label: '用户评价' },
              { href: '/#faq', label: '常见问题' },
            ].map((item, index) => (
              <Link 
                key={index}
                href={item.href} 
                className="px-4 py-2 rounded-lg font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* 登录/注册按钮 */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/#upload" 
              className="create-button"
            >
              <ImageIcon size={18} />
              开始创作
            </Link>
            <Link 
              href="/login" 
              className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              登录/注册
            </Link>
          </div>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {/* 移动端菜单 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <nav className="flex flex-col p-4 space-y-1">
                {[
                  { href: '/#features', label: '功能特点' },
                  { href: '/#how-it-works', label: '使用流程' },
                  { href: '/#pricing', label: '价格方案' },
                  { href: '/#testimonials', label: '用户评价' },
                  { href: '/#faq', label: '常见问题' },
                ].map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href} 
                    className="px-4 py-3 rounded-lg font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="/#upload" 
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 flex items-center justify-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ImageIcon size={18} className="mr-2" />
                  开始创作
                </Link>
                <Link 
                  href="/login" 
                  className="px-4 py-3 rounded-lg font-medium text-center hover:bg-gray-100 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  登录/注册
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 
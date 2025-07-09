import Link from 'next/link';

/**
 * 网站底部页脚组件
 * @returns {JSX.Element} 页脚组件
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold">
              图像魔方
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              我们是专业的AI图像生成平台，致力于为用户提供高质量的图像转换服务，让您的创意无限延伸。
            </p>
            <p className="mt-6 text-gray-500">
              © {currentYear} 图像魔方. 版权所有 - 翁志达
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">导航</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                  功能特点
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">
                  使用流程
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                  价格方案
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">
                  用户评价
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-600 hover:text-blue-600 transition-colors">
                  常见问题
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">联系我们</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">
                邮箱: <a href="mailto:wzd550252437@gmail.com" className="hover:text-blue-600 transition-colors">
                  wzd550252437@gmail.com
                </a>
              </li>
              <li className="text-gray-600">
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                  隐私政策
                </Link>
              </li>
              <li className="text-gray-600">
                <Link href="/terms" className="hover:text-blue-600 transition-colors">
                  服务条款
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
} 
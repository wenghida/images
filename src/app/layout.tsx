import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "图像魔方 - 专业AI图像生成平台",
  description: "上传您的图片，选择风格，一键生成专业级别的精美图像。无论是卡通风格、仙侠世界还是写实主义，我们都能为您打造完美作品。",
};

/**
 * 根布局组件
 * @param {Object} props - 组件属性
 * @param {React.ReactNode} props.children - 子组件
 * @returns {JSX.Element} 根布局组件
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

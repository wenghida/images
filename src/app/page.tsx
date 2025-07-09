import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';
import ImageUploader from '@/components/ImageUploader';
import Footer from '@/components/Footer';

/**
 * 网站主页
 * @returns {JSX.Element} 主页组件
 */
export default function Home() {
  return (
    <main className="pt-20">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <ImageUploader />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}

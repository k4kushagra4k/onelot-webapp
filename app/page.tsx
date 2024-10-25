import HeroSection from '@/components/HomePage/HeroSection';
import FeaturesSection from '@/components/HomePage/FeaturesSection';
import HighlightsSection from '@/components/HomePage/HighlightsSection';
import FAQSection from '@/components/HomePage/FAQSection';
import FooterSection from '@/components/HomePage/FooterSection';
export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HighlightsSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
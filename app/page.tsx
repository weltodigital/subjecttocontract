import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProductPreview from './components/ProductPreview';
import WhatsInIt from './components/WhatsInIt';
import WhoReadsThis from './components/WhoReadsThis';
import HowItWorks from './components/HowItWorks';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Page() {
  return (
    <main>
      <Hero />
      <SocialProof />
      <ProductPreview />
      <WhatsInIt />
      <WhoReadsThis />
      <HowItWorks />
      <FinalCTA />
      <Footer />
    </main>
  );
}

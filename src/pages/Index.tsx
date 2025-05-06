
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Set the title
    document.title = 'Shakuni - Multicloud Honeypot Security Service';
  }, []);

  return (
    <div className="min-h-screen bg-shakuni-dark text-shakuni-text">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  );
};

export default Index;

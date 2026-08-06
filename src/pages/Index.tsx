import { useEffect } from 'react';
import HeroSection from '@/components/landing/HeroSection';
import TrustBar from '@/components/landing/TrustBar';
import ProblemSolution from '@/components/landing/ProblemSolution';
import ServicesGrid from '@/components/landing/ServicesGrid';
import SoftwareShowcase from '@/components/landing/SoftwareShowcase';
import Methodology from '@/components/landing/Methodology';
import Stats from '@/components/landing/Stats';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

const Index = () => {
  useEffect(() => {
    document.title = 'Efficient Flow – Beratung, Digitalisierung & Software';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-hidden').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSolution />
      <ServicesGrid />
      <SoftwareShowcase />
      <Methodology />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  );
};

export default Index;

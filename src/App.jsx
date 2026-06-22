import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import PublicHealthExperience from './components/PublicHealthExperience';
import Programmes from './components/Programmes';
import Research from './components/Research';
import Impact from './components/Impact';
import Partner from './components/Partner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PartnerModal from './components/PartnerModal';

function App() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  // Intersection Observer for fade-up animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach((el) => observer.observe(el));

    return () => {
      fadeElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openPartnerModal = () => setPartnerModalOpen(true);
  const closePartnerModal = () => setPartnerModalOpen(false);

  return (
    <>
      <Navbar onOpenPartner={openPartnerModal} />
      <Hero onOpenPartner={openPartnerModal} />
      <About />
      <PublicHealthExperience />
      <Programmes />
      <Research />
      <Impact />
      <Partner onOpenDonate={openPartnerModal} onOpenPartner={openPartnerModal} />
      <Contact />
      <Footer />
      <PartnerModal isOpen={partnerModalOpen} onClose={closePartnerModal} />
    </>
  );
}

export default App;

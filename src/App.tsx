import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Acts from './components/Acts';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Reviews from './components/Reviews';
import VideoReviews from './components/VideoReviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Location />
        <Reviews />
        <VideoReviews />
        <Contact />
        <Services />
        <Acts />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;

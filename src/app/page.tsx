import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeSwitcher from './components/ThemeSwitcher'; // ← Add
import ParticlesBackground from './components/ParticlesBackground'; // ← Add
import Interactive3DCard from './components/3DCard'; // ← Add
import GalleryModal from './components/GalleryModal'; // ← Add
import MobileBottomNav from './components/MobileBottomNav';

export default function Home() {
  return (
    <main className="min-h-screen">
      <ParticlesBackground /> {/* Add this line */}
      <ThemeSwitcher /> {/* Add this line */}
      <Navbar />
      <Hero />
      <About />
      
      
      {/* Add Interactive Demo Section */}
      <section className="py-20 px-4 md:px-8 lg:px-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive <span className="gradient-text">Demo</span>
          </h2>
          <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
            Hover over the card to see 3D effects
          </p>
          <Interactive3DCard />
          <div className="mt-12">
            <GalleryModal />
          </div>
        </div>
      </section>

      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <MobileBottomNav />
    </main>
  );
}
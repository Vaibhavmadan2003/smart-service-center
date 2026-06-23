import Header from '../src/components/Header';
import Hero from '../src/components/Hero';
import About from '../src/components/About';
import Services from '../src/components/Services';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  );
}



import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-text-primary selection:bg-golden selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Work />
        <FAQ />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-text-muted text-sm border-t border-dark-border bg-dark-bg">
        <p>&copy; {new Date().getFullYear()} Comets AI. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

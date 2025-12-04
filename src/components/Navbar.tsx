import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Chrome, Menu, X, Youtube } from 'lucide-react';
import logo from '../assets/icons/icon128.svg';
import { useExtension } from '../context/ExtensionContext';
import { trackChromeStoreClick, trackEvent } from '../utils/analytics';

const navLinks = [
  { name: 'Features', href: '#work' },
  { name: 'FAQ', href: '#faq' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isInstalled } = useExtension();

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass-panel rounded-full px-6 py-3 flex items-center justify-between gap-8 min-w-[320px] md:min-w-[700px]"
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <img src={logo} alt="Comets AI" className="w-8 h-8 object-contain" />
          <span className="text-xl font-bold tracking-tighter text-text-primary">Comets</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-dark-surface/50 p-1 rounded-full border border-dark-border/50 backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="px-5 py-2.5 rounded-full text-sm font-medium text-text-secondary hover:bg-dark-elevated hover:text-text-primary transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          {isInstalled ? (
            <a 
              href="https://www.youtube.com/watch?v=BEWz4SXfyCQ#cometsai=true" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent('Navigation', 'click', 'YouTube Button')}
              className="btn-primary text-sm px-5 py-2.5 group bg-red-600 hover:bg-red-700 border-red-500/50 text-white"
            >
              <Youtube size={18} />
              <span>Open YouTube</span>
            </a>
          ) : (
            <a 
              href="https://chromewebstore.google.com/detail/comets-ai/lcpondbkhpeammcjghmlflopdheombbd" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackChromeStoreClick}
              className="btn-primary text-sm px-5 py-2.5 group"
            >
              <Chrome size={18} />
              <span>Add to Chrome</span>
            </a>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 bg-dark-surface border border-dark-border rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-text-primary py-2 border-b border-dark-border/50 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              {isInstalled ? (
                <a 
                  href="https://www.youtube.com/watch?v=BEWz4SXfyCQ#cometsai=true" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('Navigation', 'click', 'YouTube Button - Mobile')}
                  className="btn-primary w-full justify-center mt-4 gap-2 bg-red-600 hover:bg-red-700 border-red-500/50 text-white"
                >
                  <Youtube size={18} />
                  <span>Open YouTube</span>
                </a>
              ) : (
                <a 
                  href="https://chromewebstore.google.com/detail/comets-ai/lcpondbkhpeammcjghmlflopdheombbd" 
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackChromeStoreClick}
                  className="btn-primary w-full justify-center mt-4 gap-2"
                >
                  <Chrome size={18} />
                  <span>Add to Chrome</span>
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

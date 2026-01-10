import React from 'react';
import { motion } from 'framer-motion';
import { Chrome, ArrowRight, Star } from 'lucide-react';
import logo from '../assets/icons/icon128.svg';
import { useExtension } from '../context/ExtensionContext';
import { trackSectionView, trackChromeStoreClick, trackFooterLinkClick } from '../utils/analytics';
import { ChromeLogo } from './icons/ChromeLogo';

const Contact = () => {
  const { isInstalled } = useExtension();

  // Track contact section view
  React.useEffect(() => {
    trackSectionView('Contact');
  }, []);

  return (
    <section id="contact" className="py-20 bg-dark-bg border-t border-dark-border relative overflow-hidden">

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-golden rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cream rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-text-primary mb-8 leading-tight tracking-tight">
              {isInstalled ? (
                <>
                  Enjoying <br />
                  <span className="text-golden font-serif italic font-normal">Comets AI?</span>
                </>
              ) : (
                <>
                  Ready to see the <br />
                  <span className="text-golden font-serif italic font-normal">unseen?</span>
                </>
              )}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              {isInstalled
                ? "We'd love to hear your feedback. Leave us a review on the Chrome Web Store."
                : "Join thousands of creators, marketers, and researchers who are already using Comets AI to understand their audience better."
              }
            </p>

            {isInstalled ? (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://chromewebstore.google.com/detail/comets-ai/lcpondbkhpeammcjghmlflopdheombbd/reviews"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackChromeStoreClick('contact', isInstalled)}
                className="btn-primary text-xl px-10 py-5 inline-flex shadow-2xl shadow-golden/30"
              >
                <Star size={24} />
                <span>Leave a Review</span>
                <ArrowRight size={20} />
              </motion.a>
            ) : (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://chromewebstore.google.com/detail/comets-ai/lcpondbkhpeammcjghmlflopdheombbd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackChromeStoreClick('contact', isInstalled)}
                className="btn-primary text-xl px-10 py-5 inline-flex shadow-2xl shadow-golden/30"
              >
                <ChromeLogo size={24} />
                <span>Add to Chrome — Free</span>
                <ArrowRight size={20} />
              </motion.a>
            )}
            <p className="mt-4 text-sm text-text-muted">No credit card required • Installs in seconds</p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-dark-border gap-6">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Comets AI" className="w-8 h-8 object-contain" />
              <span className="text-xl font-bold text-text-primary tracking-tight">Comets AI</span>
            </div>

            <div className="flex gap-8 text-sm font-medium text-text-secondary">
              <a
                href="https://docs.google.com/document/d/1THSW6cyOvMLxE938Qo7U8y79F_Adg5rS-UJa1rKBEqM/edit?tab=t.0"
                className="hover:text-golden transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFooterLinkClick('Privacy Policy', 'https://docs.google.com/document/d/1THSW6cyOvMLxE938Qo7U8y79F_Adg5rS-UJa1rKBEqM/edit?tab=t.0')}
              >
                Privacy Policy
              </a>
              <a
                href="mailto:ahsandev.pro@gmail.com"
                className="hover:text-golden transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackFooterLinkClick('Support', 'mailto:ahsandev.pro@gmail.com')}
              >
                Support
              </a>
            </div>

            {/* // for future use */}
            {/* <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-text-secondary hover:bg-golden hover:text-white hover:border-golden transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-text-secondary hover:bg-golden hover:text-white hover:border-golden transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-text-secondary hover:bg-golden hover:text-white hover:border-golden transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-surface border border-dark-border flex items-center justify-center text-text-secondary hover:bg-golden hover:text-white hover:border-golden transition-all">
                <Mail size={18} />
              </a>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

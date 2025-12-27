import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Chrome, Zap, Shield, Star, Youtube } from 'lucide-react';
import { useExtension } from '../context/ExtensionContext';
import mainFrameImg from '../assets/product-images/main-frame2.png';
import { trackSectionView, trackChromeStoreClick, trackYouTubeClick } from '../utils/analytics';

const Hero = () => {
  const { isInstalled } = useExtension();

  // Track hero section view
  React.useEffect(() => {
    trackSectionView('Hero');
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-20 bg-dark-bg">

      {/* Soft Gradient Background (Aurora Effect) - Dark Mode */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] bg-golden/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-cream/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] bg-golden/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="mt-20 flex flex-col items-center text-center max-w-5xl mx-auto">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-[500] text-text-primary mb-8 leading-[1.1] tracking-tight"
          >
            {isInstalled ? (
              <>
                Ready to enjoy <br />
                <span className="font-serif italic font-normal text-golden">your content more</span>
              </>
            ) : (
              <>
                YouTube Comment Search <br />
                <span className="font-serif italic font-normal text-golden">& AI Analyzer Tool</span>
              </>
            )}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-text-secondary text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl leading-relaxed"
          >
            {isInstalled
              ? "Comets AI is installed and ready. Head over to YouTube to start analyzing comments."
              : "The easiest way to search YouTube comments by keyword, timestamp, or topic. Analyze sentiment and find specific comments instantly with our AI-powered extension."
            }
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 items-center justify-center"
          >
            {isInstalled ? (
              <a
                href="https://www.youtube.com/watch?v=BEWz4SXfyCQ#cometsai=true"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackYouTubeClick('hero')}
                className="btn-primary text-lg px-8 py-4 shadow-xl shadow-red-500/20 hover:shadow-red-500/40 group bg-red-600 hover:bg-red-700 border-red-500/50 text-white"
              >
                <Youtube size={24} />
                <span>Open YouTube</span>
                <div className="bg-white/20 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            ) : (
              <a
                href="https://chromewebstore.google.com/detail/comets-ai/lcpondbkhpeammcjghmlflopdheombbd"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackChromeStoreClick('hero', isInstalled)}
                className="btn-primary text-lg px-8 py-4 shadow-xl shadow-golden/20 hover:shadow-golden/40 group"
              >
                <Chrome size={24} />
                <span className="whitespace-nowrap"><span className="inline sm:hidden">Add to Chrome</span><span className="hidden sm:inline">Add to Chrome - It's Free</span></span>
                <div className="bg-white/20 rounded-full p-1 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={16} />
                </div>
              </a>
            )}

            {/* User Reviews for later */}
            {/* <div className="flex items-center gap-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-dark-bg bg-dark-surface overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col items-start ml-2">
                <div className="flex text-golden">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <span className="text-sm text-text-muted font-medium">Trusted by 10,000+ users</span>
              </div>
            </div> */}
          </motion.div>

          {/* Hero Image / Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ delay: 0.6, duration: 1, type: "spring" }}
            className="mt-20 relative z-10 w-full max-w-5xl mx-auto perspective-1000"
          >
            <div className="relative rounded-xl bg-dark-surface/50 p-2 ring-1 ring-white/10 backdrop-blur-sm shadow-2xl shadow-golden/10">
              <div className="absolute -inset-1 bg-gradient-to-r from-golden/20 to-purple-500/20 rounded-2xl blur-xl opacity-50 animate-pulse" />
              <img
                src={mainFrameImg}
                alt="Comets AI Dashboard"
                className="relative rounded-lg shadow-2xl border border-white/5 w-full h-auto"
              />

              {/* Floating Badge 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 -top-8 md:-right-12 md:top-10 bg-dark-surface border border-white/10 p-3 rounded-xl shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Zap size={20} className="text-green-400" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Analysis Speed</div>
                    <div className="text-sm font-bold text-text-primary">0.4s / comment</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge 2 */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 -bottom-8 md:-left-12 md:bottom-20 bg-dark-surface border border-white/10 p-3 rounded-xl shadow-xl backdrop-blur-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-golden/20 flex items-center justify-center">
                    <Star size={20} className="text-golden" />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted">Sentiment Accuracy</div>
                    <div className="text-sm font-bold text-text-primary">98.5%</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Trust Badges / Stats (Awake style pills) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-4"
          >
            <div className="px-6 py-3 bg-dark-surface rounded-full flex items-center gap-3 text-text-primary font-medium border border-dark-border hover:border-golden/30 transition-colors">
              <Zap size={20} className="text-golden" />
              <span>Sets up in 5 seconds</span>
            </div>
            <div className="px-6 py-3 bg-dark-surface rounded-full flex items-center gap-3 text-text-primary font-medium border border-dark-border hover:border-golden/30 transition-colors">
              <Shield size={20} className="text-cream" />
              <span>Privacy First</span>
            </div>
            <div className="px-6 py-3 bg-dark-surface rounded-full flex items-center gap-3 text-text-primary font-medium border border-dark-border hover:border-golden/30 transition-colors">
              <Star size={20} className="text-golden" />
              <span>4.9/5 Rating</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Heart, Cloud, FileText, ArrowUpRight } from 'lucide-react';

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.1)" }: { children: React.ReactNode, className?: string, spotlightColor?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-dark-surface/50 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8 text-center">
          <div className="mx-auto max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight"
            >
              Turn chaos into <br />
              <span className="font-serif italic font-normal text-golden">crystal-clear insights</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-secondary leading-relaxed"
            >
              We help creators and brands understand their audience with precision tools designed for clarity.
            </motion.p>
          </div>
        </div>

        {/* Spotlight Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32 auto-rows-[400px]">
          
          {/* Feature 1: Emotion Detection (Large - Spans 2 cols) */}
          <SpotlightCard className="md:col-span-2 group" spotlightColor="rgba(234, 179, 8, 0.15)">
            <div className="h-full flex flex-col md:flex-row relative z-10">
              {/* Text Content (40%) */}
              <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-dark-surface via-dark-surface/80 to-transparent z-0" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-golden/10 flex items-center justify-center shrink-0">
                      <Heart size={24} className="text-golden" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary">Emotion Detection</h3>
                  </div>
                  <p className="text-text-secondary text-lg leading-relaxed">Instantly gauge the mood of the audience with AI-powered sentiment analysis.</p>
                </div>
              </div>
              
              {/* Image Content (60%) */}
              <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-surface/20 z-10" />
                <img 
                  src="/src/assets/product-images/emotion.png" 
                  alt="Emotion Detection" 
                  className="absolute inset-0 w-full h-full object-cover object-right opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </SpotlightCard>

          {/* Feature 2: Word Clouds (Tall/Square - Spans 1 col) */}
          <SpotlightCard className="md:col-span-1 group" spotlightColor="rgba(168, 85, 247, 0.15)">
            <div className="h-full flex flex-col relative z-10">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
                    <Cloud size={24} className="text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary leading-tight">Visual Word Clouds</h3>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">Spot recurring themes instantly.</p>
              </div>
              
              <div className="mt-auto relative flex-1 min-h-[200px] w-full">
                 <img 
                  src="/src/assets/product-images/wordcloud.png" 
                  alt="Word Cloud" 
                  className="absolute inset-0 w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </SpotlightCard>

          {/* Feature 3: Smart Summaries (Square - Spans 1 col) */}
          <SpotlightCard className="md:col-span-1 group" spotlightColor="rgba(34, 197, 94, 0.15)">
            <div className="h-full flex flex-col relative z-10">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0">
                    <FileText size={24} className="text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary leading-tight">Smart Summaries</h3>
                </div>
                <p className="text-text-secondary text-lg leading-relaxed">Summarize thousands of comments.</p>
              </div>
              
              <div className="mt-auto relative flex-1 min-h-[200px] w-full">
                <img 
                  src="/src/assets/product-images/summarization.png" 
                  alt="Smart Summaries" 
                  className="absolute inset-0 w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </SpotlightCard>

          {/* Feature 4: Custom Preferences (Large - Spans 2 cols) */}
          <SpotlightCard className="md:col-span-2 group" spotlightColor="rgba(59, 130, 246, 0.15)">
            <div className="h-full flex flex-col md:flex-row relative z-10">
              {/* Text Content (55%) */}
              <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-dark-surface via-dark-surface/80 to-transparent z-0" />
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Search size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-text-primary">Custom Preferences</h3>
                  </div>
                  <p className="text-text-secondary text-lg leading-relaxed">Tailor the analysis to your specific needs. Adjust sensitivity, filter by keywords, and customize your dashboard.</p>
                </div>
              </div>
              
              {/* Image Content (45%) */}
              <div className="w-full md:w-[45%] relative min-h-[300px] md:min-h-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-dark-surface/20 z-10" />
                <img 
                  src="/src/assets/product-images/user-preference.png" 
                  alt="Custom Preferences" 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          </SpotlightCard>

        </div>

        {/* Large Callout Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-[2.5rem] bg-gradient-to-br from-dark-surface to-dark-elevated border border-dark-border p-12 md:p-20 relative overflow-hidden"
        >
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">Ready to transform your workflow?</h3>
            <p className="text-text-secondary text-xl mb-10 max-w-xl">Join thousands of creators who are saving hours every week with Comets AI.</p>
            <a 
              href="https://chromewebstore.google.com/detail/comets-ai/lcpondbkhpeammcjghmlflopdheombbd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Get Started Now
              <ArrowUpRight size={20} />
            </a>
          </div>
          
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-golden/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cream/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </motion.div>

      </div>
    </section>
  );
};

export default Work;

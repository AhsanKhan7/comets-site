import { motion } from 'framer-motion';
import { Search, Heart, Cloud, FileText, ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: "Emotion Detection",
    description: "Instantly gauge the mood of the audience with AI-powered sentiment analysis. Understand how your viewers feel at a glance.",
    icon: Heart,
    image: "/src/assets/product-images/emotion.png",
    color: "bg-golden/10",
    textColor: "text-golden",
    delay: 0
  },
  {
    title: "Visual Word Clouds",
    description: "See what everyone is talking about with beautiful, interactive word clouds. Spot recurring themes and keywords instantly.",
    icon: Cloud,
    image: "/src/assets/product-images/wordcloud.png",
    color: "bg-golden/10",
    textColor: "text-golden",
    delay: 0.2
  },
  {
    title: "Smart Summaries",
    description: "Get the gist of thousands of comments in a single, concise paragraph. Save hours of reading time with AI-generated summaries.",
    icon: FileText,
    image: "/src/assets/product-images/personalized-comments.png",
    color: "bg-cream/10",
    textColor: "text-cream",
    delay: 0.1
  },
  {
    title: "Custom Preferences",
    description: "Tailor the analysis to your specific needs. Adjust sensitivity, filter by keywords, and customize your dashboard.",
    icon: Search,
    image: "/src/assets/product-images/user-prefrences.png",
    color: "bg-cream/10",
    textColor: "text-cream",
    delay: 0.3
  }
];

const Work = () => {
  return (
    <section id="work" className="py-32 bg-dark-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-32 gap-8 text-center">
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

        {/* Features Showcase - Alternating Layout */}
        <div className="flex flex-col gap-32 mb-32">
          {features.map((feature, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon size={28} className={feature.textColor} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">{feature.title}</h3>
                <p className="text-xl text-text-secondary leading-relaxed mb-8">{feature.description}</p>
              </motion.div>

              {/* Image Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 2 : -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 w-full"
              >
                <div className="relative group">
                  <div className={`absolute -inset-4 ${feature.color} rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                  <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-dark-surface/50 backdrop-blur-sm">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>

            </div>
          ))}
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

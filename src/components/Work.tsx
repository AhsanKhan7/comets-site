import { motion } from 'framer-motion';
import { BarChart2, Zap, Search, Heart, Cloud, FileText, ArrowUpRight } from 'lucide-react';

const features = [
  {
    title: "Emotion Detection",
    description: "Instantly gauge the mood of the audience with AI-powered sentiment analysis.",
    icon: Heart,
    color: "bg-golden/10",
    textColor: "text-golden",
    delay: 0
  },
  {
    title: "Smart Summaries",
    description: "Get the gist of thousands of comments in a single, concise paragraph.",
    icon: FileText,
    color: "bg-cream/10",
    textColor: "text-cream",
    delay: 0.1
  },
  {
    title: "Visual Word Clouds",
    description: "See what everyone is talking about with beautiful, interactive word clouds.",
    icon: Cloud,
    color: "bg-golden/10",
    textColor: "text-golden",
    delay: 0.2
  },
  {
    title: "Pro Search",
    description: "Find exactly what you're looking for with advanced filtering and search.",
    icon: Search,
    color: "bg-cream/10",
    textColor: "text-cream",
    delay: 0.3
  },
  {
    title: "Trend Spotting",
    description: "Identify rising topics and viral discussions before they peak.",
    icon: BarChart2,
    color: "bg-golden/10",
    textColor: "text-golden",
    delay: 0.4
  },
  {
    title: "Real-time Analysis",
    description: "Watch insights update live as new comments roll in.",
    icon: Zap,
    color: "bg-cream/10",
    textColor: "text-cream",
    delay: 0.5
  }
];

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

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-[2rem] bg-dark-surface border border-dark-border hover:border-golden/30 transition-all duration-300`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 rounded-full bg-dark-elevated flex items-center justify-center shadow-sm ${feature.textColor}`}>
                  <feature.icon size={24} />
                </div>
                <div className="w-10 h-10 rounded-full bg-dark-elevated flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} className="text-text-primary" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">{feature.description}</p>
            </motion.div>
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

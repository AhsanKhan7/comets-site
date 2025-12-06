import { motion } from 'framer-motion';

const stats = [
  { value: "+10k", label: "Active Users" },
  { value: "50M+", label: "Comments Analyzed" },
  { value: "4.9", label: "Average Rating" },
];

const About = () => {
  return (
    <section id="about" className="py-32 bg-dark-bg">
      <div className="container mx-auto px-6">
        
        {/* Stats Row */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 mb-32 border-b border-dark-border pb-20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary mb-2 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-text-muted font-medium text-lg uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section - Hidden for now */}
        {/* 
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          ...
        </div> 
        */}
      </div>
    </section>
  );
};

export default About;

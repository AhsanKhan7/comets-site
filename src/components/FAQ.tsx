import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { trackFAQClick, trackSectionView } from '../utils/analytics';

const faqs = [
  {
    question: "Is this free?",
    answer: "Yes! Comets AI is completely free. We may add optional premium features later, but core functionality stays free forever."
  },
  {
    question: "Does it work on all YouTube videos?",
    answer: "Yes—any public video with comments enabled. Music videos, reviews, vlogs, tutorials, podcasts, everything."
  },
  {
    question: "Will it slow down YouTube?",
    answer: "No. Comets AI is lightweight and only activates when you click the icon. Videos play normally."
  },
  {
    question: "How accurate is the emotion detection?",
    answer: "Our AI is trained on millions of YouTube comments and understands context, sarcasm, and nuance. It catches what people mean, not just what they type."
  },
  {
    question: "Can I use this for research or school projects?",
    answer: "Absolutely! Perfect for analyzing public opinion, studying social media trends, and understanding community reactions."
  },
  {
    question: "Do I need technical skills?",
    answer: "If you can click \"Add to Chrome — Free,\" you're set. Designed for everyone, not just tech experts."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Track FAQ section view
  React.useEffect(() => {
    trackSectionView('FAQ');
  }, []);

  return (
    <section id="faq" className="py-32 bg-dark-bg">
      <div className="container mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Common <span className="font-serif italic font-normal text-golden">Questions</span>
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary">
            Everything you need to know about the Comets AI YouTube comment search tool.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-dark-border last:border-0"
            >
              <div
                onClick={() => {
                  const newIndex = openIndex === index ? null : index;
                  const action = newIndex === index ? 'expand' : 'collapse';
                  setOpenIndex(newIndex);
                  trackFAQClick(faq.question, action);
                }}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
              >
                <span className="text-base sm:text-lg md:text-xl font-medium text-text-primary group-hover:text-golden transition-colors select-none">{faq.question}</span>
                <span className={`text-text-muted group-hover:text-golden transition-colors ${openIndex === index ? 'rotate-45' : ''} duration-300`}>
                  <Plus size={24} />
                </span>
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-text-secondary text-base sm:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

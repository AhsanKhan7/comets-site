import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { trackFAQClick } from '../utils/analytics';

const faqs = [
  {
    question: "Is there a fee associated with it?",
    answer: "Nope! Comets AI is free to use. We may later add premium features for those wishing even deeper analysis, but the core experience will always remain free."
  },
  {
    question: "Can I use it on any video?",
    answer: "Yep! Any public YouTube video that has comments works perfectly. Music videos, vlogs, reviews, tutorials—you name it."
  },
  {
    question: "Will this mess up my YouTube experience?",
    answer: "Not at all. Comets AI is lightweight and only works when you click it. Your videos play normally, and everything stays fast."
  },
  {
    question: "Must I be a technical whiz?",
    answer: "If you can install a Chrome extension—it just requires clicking \"Add to Chrome\"—you're golden. It's designed for regular people, not programmers."
  },
  {
    question: "Can I use this for research or school projects?",
    answer: "It's perfect for analyzing public opinion, studying trends on social media, and understanding community reactions."
  },
  {
    question: "Does the emotion detection even work?",
    answer: "We have trained our AI on millions of real comments. It understands context, sarcasm, and the nuances of how people actually talk online. And it's surprisingly good at catching what humans mean, not just what they say."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-dark-bg">
      <div className="container mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-text-primary mb-6 leading-tight">
            Common <span className="font-serif italic font-normal text-golden">Questions</span>
          </h2>
          <p className="text-xl text-text-secondary">
            Everything you need to know about Comets AI.
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
                  setOpenIndex(newIndex);
                  if (newIndex === index) {
                    trackFAQClick(faq.question);
                  }
                }}
                className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
              >
                <span className="text-xl font-medium text-text-primary group-hover:text-golden transition-colors select-none">{faq.question}</span>
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
                    <div className="pb-8 text-text-secondary text-lg leading-relaxed">
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

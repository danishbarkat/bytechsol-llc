import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Bytechsol offer?',
    answer: 'We offer web development, mobile app development, custom software solutions, AI/ML integration, digital marketing, and ERP implementation including Odoo services.',
  },
  {
    question: 'Do you build custom software solutions for startups and enterprises?',
    answer: 'Yes, we specialize in building scalable custom software solutions tailored for both startups and enterprises, helping them achieve their digital transformation goals.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern tech stacks including React, Next.js, Node.js, Python, AI/ML frameworks, and cloud platforms like AWS and Azure to build robust solutions.',
  },
  {
    question: 'How does Bytechsol handle ERP implementation and Odoo services?',
    answer: 'We provide end-to-end Odoo implementation, customization, and integration services, helping businesses streamline their operations with powerful ERP solutions.',
  },
  {
    question: 'Can you integrate AI into my website or software product?',
    answer: 'Absolutely! We specialize in AI/ML integration, including chatbots, recommendation systems, predictive analytics, and custom AI models tailored to your needs.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. A typical web project takes 4-8 weeks, while custom software can range from 2-6 months. We provide detailed timelines during consultation.',
  },
  {
    question: 'Do you offer post-launch support and maintenance?',
    answer: 'Yes, we provide comprehensive post-launch support, maintenance, updates, and optimization services to ensure your digital products continue to perform optimally.',
  },
  {
    question: 'How do I get started with Bytechsol?',
    answer: 'Simply fill out our contact form or reach out via email. We\'ll schedule a consultation to understand your needs and provide a tailored proposal.',
  },
  {
    question: 'Why should I choose Bytechsol over other software agencies?',
    answer: 'We offer transparent communication, in-house expertise (no outsourcing), proven track record with awards, and a commitment to building long-term partnerships focused on your success.',
  },
  {
    question: 'Does Bytechsol offer 24/7 support?',
    answer: 'We offer dedicated support during business hours with emergency support available for critical issues. Premium support packages include extended hours coverage.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know about our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-lg hover:shadow-xl hover:bg-slate-800 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-slate-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

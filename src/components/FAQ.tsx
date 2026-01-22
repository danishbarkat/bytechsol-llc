import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from './ThemeContext';

const faqs = [
  {
    question: 'How does the discovery process work at BytechSol?',
    answer: 'We start with a deep-dive strategy session to understand your business goals, target audience, and technical requirements. From there, we build a comprehensive roadmap and project architecture tailored to your needs.',
  },
  {
    question: 'Do you offer fixed-price or hourly billing models?',
    answer: 'We offer both. Fixed-price models are ideal for well-defined projects (like a website launch), while hourly or dedicated team models work best for ongoing product development and complex ERP implementations.',
  },
  {
    question: 'How do you ensure the security of my data and code?',
    answer: 'Security is at our core. We implement AES-256 encryption, follow OWASP best practices, conduct regular security audits, and sign strict NDAs to protect your intellectual property and user data.',
  },
  {
    question: 'Can you work with our existing in-house technical team?',
    answer: 'Absolutely. We frequently act as a technical extension for internal teams, providing specialized expertise in AI, Odoo ERP, or high-performance frontend development to accelerate delivery.',
  },
  {
    question: 'What happens after the project is launched?',
    answer: 'We provide 24/7 technical support and maintenance packages. We stay with you for "Day 2" success, ensuring your product remains updated, optimized, and scalable as your business grows.',
  }
];

export function FAQ() {
  const { theme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`relative py-32 px-6 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block text-blue-500">
            FAQ
          </span>
          <h2 className={`text-4xl md:text-5xl font-medium mb-12 text-[#4A7DFF]`} style={{ fontFamily: '"Fraunces", serif', letterSpacing: '-0.02em' }}>
            Frequently asked questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-3xl transition-all duration-300 p-6 ${theme === 'dark'
                  ? 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                  : 'bg-white border border-slate-200 shadow-[0_30px_60px_rgba(15,23,42,0.12)] hover:shadow-xl'
                  } ${isOpen ? 'ring-1 ring-blue-500/30' : ''}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start justify-between text-left gap-4"
                >
                  <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? 'rotate-180 text-blue-500' : 'text-slate-400'}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className={`mt-4 text-base leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

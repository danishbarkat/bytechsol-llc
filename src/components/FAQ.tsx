import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Bytechsol offer?',
    answer: 'Bytechsol is a full-service software agency offering custom web development, mobile app development, AI/ML solutions, ERP implementation, Odoo customization, CMS development, UI/UX design, and digital marketing services, including SEO and SMM.',
  },
  {
    question: 'Do you build custom software solutions for startups and enterprises?',
    answer: 'Yes! We help startups establish their business ideas or customize enterprise software in large organizations based on the needs of every business, from MVPs to complex enterprise systems.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We work with a wide range of modern technologies, including JavaScript frameworks (React, Vue), Python, Django, Odoo, Shopify, and AI/ML solutions, so any project will be scalable and future-proof.',
  },
  {
    question: 'How does Bytechsol handle ERP implementation and Odoo services?',
    answer: 'Our team of ERP specialists offers complete implementation, migration, and consultation of Odoo. We support companies to simplify their processes, automate their processes, and tailor Odoo to meet business requirements.',
  },
  {
    question: 'Can you integrate AI into my website or software product?',
    answer: 'Yes, we develop AI-based chatbots, voice assistants, and other individually developed solutions with the integration of the latest AI/LLM technology to automate customer support services, enhance user experience, and boost productivity across all digital touchpoints.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines are dependent on scope, but we operate in iterative agile sprints to make delivery quick. Depending on the complexity, it would take 2-4 weeks to develop a simple site and roughly 2-3 months for a complex platform.',
  },
  {
    question: 'Do you offer post-launch support and maintenance?',
    answer: 'Yes. We also provide maintenance, enhancements, and technical support to ensure that your product keeps functioning smoothly and remains aligned with your requirements.',
  },
  {
    question: 'How do I get started with Bytechsol?',
    answer: 'Simple! Just schedule a free consultation or fill out our contact form. We will talk about your idea, goals, and timeline—then we will guide you on the exact next steps to bring your project to life.',
  },
  {
    question: 'Why should I choose Bytechsol over other software agencies?',
    answer: 'We don’t just deliver code — we deliver outcomes. Bytechsol blends business strategy, next-generation technology, and user-centered design to launch digital products that grow with you.',
  },
  {
    question: 'Does Bytechsol offer 24/7 support?',
    answer: 'Bytechsol provides round-the-clock support, so you never feel alone. Whether it’s reporting a critical bug or a last-minute change, our team is always within reach regardless of time zone.',
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

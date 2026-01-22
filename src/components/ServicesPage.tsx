import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Services } from './Services';
import { OurApproach } from './OurApproach';
import { useState } from 'react';
import { ChevronDown, Sparkles, ArrowRight, Zap, Target, ShieldCheck, Globe } from 'lucide-react';

const faqItems = [
  {
    question: "Do you offer full-service implementation for all listed services?",
    answer: "Yes, from initial strategy and design to development, deployment, and ongoing maintenance, we provide end-to-end delivery for every service in our stack."
  },
  {
    question: "How do you handle multi-service integrated projects?",
    answer: "We assign dedicated project squads that include specialists from each required service area (e.g., ERP + AI + Web), ensuring a unified architecture and seamless integration."
  },
  {
    question: "What is your typical onboarding timeline?",
    answer: "We can usually kick off a discovery phase within 48-72 hours of project approval. Implementation timelines vary based on scope but are always structured in agile sprints."
  },
  {
    question: "Can we start with one service and scale later?",
    answer: "Absolutely. Many of our clients start with a specific need (like SEO or a Web Portal) and later expand into Odoo ERP or AI automation as their business grows."
  },
  {
    question: "Do you provide training for the internal teams?",
    answer: "Yes, every service delivery includes comprehensive documentation, video screen-shares, and live training sessions to ensure your team is fully empowered to use the new solutions."
  }
];

export function ServicesPage() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#3b82f6,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-bold uppercase tracking-wider"
          >
            <Zap className="w-4 h-4" />
            Empowering Modern Enterprises
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Digital <span className="text-blue-500">Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            From Odoo ERP implementation to AI-native applications, we deliver end-to-end technical excellence tailored to your growth goals.
          </motion.p>
        </div>
      </section>

      <div className="relative">
        <Services />
      </div>

      <div className="relative">
        <OurApproach />
      </div>

      {/* FAQ Section - Redesigned to match Odoo premium style */}
      <section className="py-32 px-6 border-t border-white/5">
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
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-3xl transition-all duration-300 p-6 ${theme === 'dark'
                    ? 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                    : 'bg-white border border-slate-200 shadow-[0_30px_60px_rgba(15,23,42,0.12)] hover:shadow-xl'
                    } ${isOpen ? 'ring-1 ring-blue-500/30' : ''}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
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
                        className="overflow-hidden"
                      >
                        <div className={`mt-4 text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-24 px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[5rem] overflow-hidden bg-blue-600 p-12 md:p-24 text-center text-white shadow-3xl">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#2563eb,transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#60a5fa,transparent_50%)] opacity-30" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Ready to activate your growth stack?</h2>
              <p className="text-2xl text-blue-100 mb-12 font-medium">Whether you need a legacy migration or a next-gen AI build, our squads are ready to deliver impact at scale.</p>
              <div className="flex flex-wrap justify-center gap-8">
                <button className="px-12 py-6 bg-white text-blue-600 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3">
                  Schedule Discovery Call <ArrowRight className="w-6 h-6" />
                </button>
                <button className="px-12 py-6 bg-blue-700 text-white rounded-3xl font-black text-xl hover:bg-blue-800 transition-colors border border-white/20">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

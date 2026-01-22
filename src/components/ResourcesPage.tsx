import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { BookOpen, Lightbulb, Search, ArrowRight, Download, Sparkles, ChevronDown } from 'lucide-react';

const resources = [
  {
    title: 'The AI Readiness Guide 2026',
    type: 'Whitepaper',
    icon: Search,
    tags: ['AI / ML', 'Strategy'],
    description: 'A comprehensive technical audit framework for enterprise-scale AI integration and agent deployment.',
    color: 'from-blue-600 to-indigo-600'
  },
  {
    title: 'Modern SEO for Semantic Search',
    type: 'E-Book',
    icon: BookOpen,
    tags: ['SEO', 'Marketing'],
    description: 'How machine learning is redefining search and how to optimize for AI-driven discovery engines.',
    color: 'from-purple-600 to-pink-600'
  }
];

const faqItems = [
  {
    question: "Are these resources free to download?",
    answer: "Yes, our primary whitepapers and guides are free. We believe in sharing our technical insights to help the ecosystem grow. Some premium case studies may require registration."
  },
  {
    question: "Do you offer physical copies of your reports?",
    answer: "We are a digital-first company, but we do provide high-quality print versions of our annual 'State of Digital Transformation' report for our enterprise partners."
  },
  {
    question: "How often is the resource library updated?",
    answer: "We publish new technical insights and industry analysis at the beginning of every quarter, ensuring our partners stay ahead of emergent technology trends."
  },
  {
    question: "Can I use these materials for internal training?",
    answer: "Absolutely. Our resources are designed to be shared. We only ask that you credit BytechSol as the original source of the technical analysis."
  },
  {
    question: "How can I request a deep-dive on a specific tech topic?",
    answer: "We love technical challenges. You can suggest topics for our next whitepaper by reaching out to our strategy team at insights@bytechsol.com."
  }
];

export function ResourcesPage() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#4f46e5,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-sm font-bold uppercase tracking-wider"
          >
            <Lightbulb className="w-4 h-4" />
            Insights & Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Resources <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">Hub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Empowering your technical vision with masterclasses, whitepapers, and industry-leading research on the future of digital growth.
          </motion.p>
        </div>
      </section>

      {/* Grid of Resource Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {resources.map((resource, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[3.5rem] border transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
                } group`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${resource.color} text-white shadow-lg`}>
                  <resource.icon className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                  {resource.tags.map(tag => (
                    <span key={tag} className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${theme === 'dark' ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-600'}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{resource.title}</h3>
              <p className={`text-lg leading-relaxed mb-10 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{resource.description}</p>
              <div className="flex items-center justify-between">
                <span className={`text-sm font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{resource.type}</span>
                <button className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${theme === 'dark' ? 'bg-white/5 border border-white/10 text-white group-hover:bg-blue-600 group-hover:border-blue-600' : 'bg-slate-900 text-white group-hover:bg-blue-600 shadow-lg'
                  }`}>
                  <Download className="w-6 h-6" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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

      {/* Resource Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[5rem] overflow-hidden bg-slate-900 p-12 md:p-24 text-center text-white border border-white/5 shadow-3xl">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#4f46e5,transparent_50%)] opacity-20" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,#0ea5e9,transparent_50%)] opacity-20" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">Need a custom roadmap for your technical evolution?</h2>
              <p className="text-2xl text-slate-300 mb-12 font-medium">Our strategy team produces tailored technical reports for global enterprises looking to lead their industries.</p>
              <button className="px-12 py-6 bg-white text-slate-900 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3 mx-auto">
                Book a Strategy Session <ArrowRight className="w-6 h-6 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

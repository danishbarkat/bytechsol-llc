import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { Newspaper, Image, Camera, Award, Download, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

const pressAssets = [
  {
    title: 'Brand Identity Vector Pack',
    description: 'Logos, symbols, and wordmarks in all brand variations (SVG, PNG, EPS).',
    size: '12.4 MB',
    icon: Image,
    color: 'bg-indigo-500'
  },
  {
    title: 'Executive Leadership Bios',
    description: 'Professional biographies and mission statements of our key leadership team.',
    size: '4.2 MB',
    icon: Newspaper,
    color: 'bg-blue-500'
  }
];

const faqItems = [
  {
    question: "Do you offer interviews with your lead engineers?",
    answer: "Yes, our technical leadership is available for expert commentary on AI, ERP, and digital transformation topics. Please contact media@bytechsol.com."
  },
  {
    question: "How should I credit BytechSol in my publication?",
    answer: "Please use 'BytechSol' as our primary brand name and link to our official website (bytechsol.com) whenever possible."
  },
  {
    question: "Are these images authorized for commercial print?",
    answer: "Our press assets are licensed for editorial and journalistic use. For commercial use, please contact our brand team for specific authorization."
  },
  {
    question: "How can I request a custom product demo for a review?",
    answer: "Media representatives can request sandboxed environments of our software products for review purposes through our PR channel."
  },
  {
    question: "Do you have a physical office reachable for press visits?",
    answer: "We have strategic hubs in London, Dubai, and Pakistan. Press visits can be coordinated with at least 14 days' notice."
  }
];

export function PressKitPage() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_0%,#4f46e5,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 text-sm font-bold uppercase tracking-wider"
          >
            <Newspaper className="w-4 h-4" />
            Media & Public Relations
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Press <span className="text-indigo-500">Kit</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Authoritative brand assets and media resources for journalists, partners, and creators worldwide.
          </motion.p>
        </div>
      </section>

      {/* Media Assets Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {pressAssets.map((asset, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group p-10 rounded-[3rem] border transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900 border-white/5 hover:border-indigo-500/30 shadow-2xl' : 'bg-white border-slate-200 hover:border-indigo-500 shadow-xl'
                }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className={`w-16 h-16 rounded-2xl ${asset.color} flex items-center justify-center text-white shadow-lg`}>
                  <asset.icon className="w-8 h-8" />
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>
                  Size: {asset.size}
                </span>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{asset.title}</h3>
              <p className={`text-lg leading-relaxed mb-10 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{asset.description}</p>
              <button className={`w-full py-5 rounded-2xl flex items-center justify-center gap-3 font-bold transition-all ${theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-slate-900 text-white hover:bg-slate-800 shadow-lg'
                }`}>
                <Download className="w-5 h-5" /> Download Asset Pack
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Media FAQ - Redesigned to match Odoo premium style */}
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

      {/* Press Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[5rem] overflow-hidden bg-indigo-600 p-12 md:p-24 text-center text-white shadow-3xl">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#4338ca,transparent_50%)]" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,#6366f1,transparent_50%)] opacity-30" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">Inquiring for a major publication?</h2>
              <p className="text-2xl text-indigo-50 text-indigo-100/90 mb-12 font-medium">Our press team facilitates exclusive interviews, provides custom insights, and handles media requests with enterprise-speed.</p>
              <button className="px-12 py-6 bg-white text-indigo-600 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3 mx-auto">
                Connect with Media Team <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

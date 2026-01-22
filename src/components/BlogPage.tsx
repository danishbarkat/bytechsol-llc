import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Newspaper, Calendar, Clock, ArrowRight, ChevronDown, Sparkles, Search, Tag } from 'lucide-react';

const articles = [
  {
    title: 'The Future of Odoo 18: What Enterprise Leaders Need to Know',
    category: 'ERP & Automation',
    date: 'Jan 15, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    description: 'A deep technical dive into the core architecture updates of Odoo 18 and how it optimizes global supply chains.'
  },
  {
    title: 'Architecting AI-Native Applications with LLM Orchestration',
    category: 'AI / ML',
    date: 'Jan 10, 2026',
    readTime: '18 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    description: 'Beyond basic API calls: How to build resilient AI workflows using LangChain and persistent memory layers.'
  },
  {
    title: 'The Semantic SEO Revolution: Optimizing for LLM Discovery',
    category: 'Marketing Tech',
    date: 'Jan 05, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8f2c1d1?auto=format&fit=crop&w=800&q=80',
    description: 'How machine learning is changing web discovery and why traditional keyword optimization is no longer enough.'
  }
];

const faqItems = [
  {
    question: "How often do you publish new technical insights?",
    answer: "We publish detailed technical articles and industry analysis every week on Tuesdays and Thursdays. Subscribe to our journal for direct inbox delivery."
  },
  {
    question: "Can I contribute an article to the BytechSol Journal?",
    answer: "We occasionally feature guest insights from technical leaders in the AI and ERP ecosystem. Please send your pitch to journal@bytechsol.com."
  },
  {
    question: "Are your code snippets free to use?",
    answer: "Yes, all technical code examples provided in our blog are MIT-licensed. We encourage engineers to adapt and implement them in their own projects."
  },
  {
    question: "Do you have a newsletter for these updates?",
    answer: "Absolutely. Join 50,000+ technical leaders by subscribing to 'The Intelligence Layer,' our weekly digest of digital transformation trends."
  },
  {
    question: "How can I request a deep-dive on a specific topic?",
    answer: "We love reader suggestions. Reach out to us on Twitter or via email with the hashtag #BytechSolJournal to suggest a technical topic."
  }
];

export function BlogPage() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#f97316,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-orange-500/10 border border-orange-500/20 text-orange-600 text-sm font-bold uppercase tracking-wider"
          >
            <Newspaper className="w-4 h-4" />
            Insights & Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            The <span className="text-orange-500">Journal</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Deep technical analysis, case studies, and engineering strategies from the forefront of digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {articles.map((article, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-8 border transition-all duration-500 ${theme === 'dark' ? 'border-white/10' : 'border-slate-200 shadow-xl'
                } group-hover:border-orange-500/50`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest border border-white/30">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center gap-6 mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> {article.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> {article.readTime}
                </div>
              </div>
              <h3 className={`text-2xl font-black mb-4 leading-snug transition-colors group-hover:text-orange-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {article.title}
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                {article.description}
              </p>
              <div className={`flex items-center gap-2 font-bold transition-all group-hover:gap-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Read More <ArrowRight className="w-5 h-5 text-orange-500" />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Blog FAQ - Redesigned to match Odoo premium style */}
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

      {/* Newsletter Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[4rem] overflow-hidden bg-orange-600 p-12 md:p-24 text-center text-white shadow-3xl">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#ea580c,transparent_50%)]" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,#fb923c,transparent_50%)] opacity-30" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Join the innovators.</h2>
              <p className="text-2xl text-orange-50 mb-12 font-medium">Get the latest technical insights, code snippets, and strategy guides delivered directly to your inbox every week.</p>
              <div className="flex flex-wrap justify-center gap-8">
                <button className="px-12 py-6 bg-white text-orange-600 rounded-2xl font-black text-xl hover:scale-110 transition-transform shadow-2xl">
                  Subscribe for Free
                </button>
                <button className="px-12 py-6 bg-orange-700 text-white rounded-2xl font-black text-xl hover:bg-orange-800 transition-colors border border-white/20">
                  Browse Archives
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

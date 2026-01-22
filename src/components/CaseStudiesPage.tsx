import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { BookOpen, TrendingUp, BarChart3, Users, ChevronDown, Sparkles, ArrowRight, Laptop, Globe, Globe2, Rocket } from 'lucide-react';

const caseStudies = [
    {
        title: 'Odoo ERP Transformation for Global Mfg.',
        category: 'ERP & Automation',
        icon: Rocket,
        metrics: { efficiency: '+45%', cost: '-30%', growth: '12x' },
        description: 'How we unified 12 international warehouses into a single Odoo 18 ecosystem, automating procurement and reducing downtime significantly.',
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
        color: 'from-blue-600 to-indigo-600'
    },
    {
        title: 'AI-Powered FinTech Dashboard',
        category: 'AI / ML & Web',
        icon: TrendingUp,
        metrics: { accuracy: '99.2%', speed: '3x faster', churn: '-20%' },
        description: 'Integrating predictive analytics into a high-scale financial platform to identify market trends and automate wealth management workflows.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
        color: 'from-purple-600 to-pink-600'
    },
    {
        title: 'Next-Gen E-Commerce for Retail Giant',
        category: 'Product & Web',
        icon: Globe2,
        metrics: { conversion: '+22%', loading: '< 1s', mobile: '+65%' },
        description: 'Building a headless commerce solution for a major retail brand that handles millions of visitors while maintaining core web vitals excellence.',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1200&q=80',
        color: 'from-emerald-600 to-teal-600'
    }
];

const faqItems = [
    {
        question: "How long does a typical deep-dive case study take to produce?",
        answer: "We document our projects continuously. A full public case study typically takes 2-3 weeks to finalize after project delivery, including client approval and metrics validation."
    },
    {
        question: "Are the growth percentages in these studies verified?",
        answer: "Yes, every metric listed is verified through client feedback, analytics data, and post-launch performance audits. We pride ourselves on radical transparency."
    },
    {
        question: "Do you have case studies for smaller businesses?",
        answer: "Absolutely. While we highlight enterprise successes, we have hundreds of successful deliveries for SMEs. Contact us for a personalized portfolio relevant to your business size."
    },
    {
        question: "Can I speak to the clients mentioned in these studies?",
        answer: "Many of our clients are happy to act as references for serious inquiries. We can coordinate reference calls as part of our final proposal stage."
    },
    {
        question: "How do you handle confidentiality in case studies?",
        answer: "We always obtain written permission before publishing details. For sensitive projects, we publish 'blind' case studies that focus on the technical solution while protecting brand identity."
    }
];

export function CaseStudiesPage() {
    const { theme } = useTheme();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#10b981,transparent_70%)]" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-bold uppercase tracking-wider"
                    >
                        <BarChart3 className="w-4 h-4" />
                        Proven Impact & ROI
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                    >
                        Case <span className="text-emerald-500">Studies</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                        Go beyond simple projects. Explore our deep success stories where technical excellence met strategic vision to drive real business growth.
                    </motion.p>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-24">
                        {caseStudies.map((study, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
                            >
                                <div className="flex-1 relative">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative rounded-[3.5rem] overflow-hidden shadow-3xl border-4 border-white/10"
                                    >
                                        <img src={study.image} alt={study.title} className="w-full h-[500px] object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                                        <div className={`absolute bottom-10 left-10 p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 text-white max-w-[280px]`}>
                                            <div className="flex flex-wrap gap-4">
                                                {Object.entries(study.metrics).map(([key, val]) => (
                                                    <div key={key}>
                                                        <div className="text-2xl font-bold">{val}</div>
                                                        <div className="text-[10px] uppercase tracking-widest opacity-60">{key}</div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-bold uppercase tracking-widest">
                                        <study.icon className="w-4 h-4" />
                                        {study.category}
                                    </div>
                                    <h2 className={`text-4xl md:text-5xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{study.title}</h2>
                                    <p className={`text-xl leading-relaxed mb-10 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{study.description}</p>
                                    <button className="px-10 py-5 rounded-2xl bg-emerald-600 text-white font-bold hover:scale-105 transition-transform flex items-center gap-3">
                                        Read Full Story <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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

            {/* Results Banner */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-[5rem] overflow-hidden bg-emerald-600 p-12 md:p-24 text-center text-white shadow-3xl">
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#059669,transparent_50%)]" />
                            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#34d399,transparent_50%)] opacity-30" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">Want your project to be our next big success story?</h2>
                            <p className="text-2xl text-emerald-50 text-emerald-100/90 mb-12 font-medium">We're motivated by metrics and driven by growth. Let's build something that makes a statement in your industry.</p>
                            <div className="flex flex-wrap justify-center gap-8">
                                <button className="px-12 py-6 bg-white text-emerald-600 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl">
                                    Let's Talk Results
                                </button>
                                <button className="px-12 py-6 bg-emerald-700 text-white rounded-3xl font-black text-xl hover:bg-emerald-800 transition-colors border border-white/20">
                                    View All Projects
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

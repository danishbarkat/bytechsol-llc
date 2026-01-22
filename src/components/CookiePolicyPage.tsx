import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { Cookie, Info, Settings, ShieldCheck, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

const faqItems = [
    {
        question: "Do you use cookies for advertising?",
        answer: "BytechSol does not use third-party advertising cookies to track your behavior across other sites. We only use functional and analytical cookies to improve our platform."
    },
    {
        question: "How can I withdraw my cookie consent?",
        answer: "You can update your cookie preferences at any time via our built-in cookie settings panel or by clearing your browser cache and refreshing the site."
    },
    {
        question: "What are 'Essential Cookies'?",
        answer: "Essential cookies are necessary for the website to function. They enable core features like security, network management, and accessibility."
    },
    {
        question: "Do you share analytical data with Google?",
        answer: "We use Google Analytics with anonymized IP addresses. This means no personally identifiable information (PII) is shared with Google or third parties."
    },
    {
        question: "How often is the cookie policy updated?",
        answer: "We review our cookie usage quarterly and update this policy whenever we introduce new technologies that change how data is processed on our site."
    }
];

export function CookiePolicyPage() {
    const { theme } = useTheme();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#f59e0b,transparent_70%)]" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-amber-500/10 border border-amber-500/20 text-amber-600 text-sm font-bold uppercase tracking-wider"
                    >
                        <Cookie className="w-4 h-4" />
                        Cookie Transparency
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                    >
                        Cookie <span className="text-amber-500">Policy</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                        Understanding how cookies enhance your experience. We use data responsibly to ensure our technical ecosystem performs at its peak.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid gap-12">
                        {[
                            {
                                icon: Info,
                                title: "What are cookies?",
                                text: "Cookies are small text files stored on your device that help our website remember your preferences and provide a smoother, more efficient browsing experience.",
                                color: "text-amber-500"
                            },
                            {
                                icon: Settings,
                                title: "How we use them",
                                text: "We primarily use cookies for performance monitoring, technical troubleshooting, and remembering your theme preferences (Dark vs Light mode).",
                                color: "text-orange-500"
                            },
                            {
                                icon: ShieldCheck,
                                title: "Your Control",
                                text: "You have complete control over cookies. You can manage your preferences through your browser settings or our interactive consent banner.",
                                color: "text-yellow-600"
                            }
                        ].map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className={`p-10 rounded-[3rem] border transition-all ${theme === 'dark' ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-200 shadow-xl'
                                    }`}
                            >
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className={`p-4 rounded-2xl bg-current bg-opacity-10 ${section.color}`}>
                                        <section.icon className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{section.title}</h3>
                                        <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{section.text}</p>
                                    </div>
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

            {/* Banner Section */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-[5rem] overflow-hidden bg-amber-600 p-12 md:p-24 text-center text-white shadow-3xl">
                        <div className="absolute inset-0">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#d97706,transparent_50%)]" />
                            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#fbbf24,transparent_50%)] opacity-30" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">Want to manage your cookie preferences?</h2>
                            <p className="text-2xl text-amber-50 text-amber-100/90 mb-12 font-medium">Use our dedicated privacy dashboard to customize your technical experience on BytechSol.</p>
                            <button className="px-12 py-6 bg-white text-amber-600 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3 mx-auto">
                                Open Cookie Settings <Cookie className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

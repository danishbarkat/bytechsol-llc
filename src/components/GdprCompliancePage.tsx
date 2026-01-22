import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { ShieldCheck, UserCheck, Database, HardDrive, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

const faqItems = [
    {
        question: "Is BytechSol fully GDPR compliant?",
        answer: "Yes, we have implemented all necessary technical and organizational measures to ensure compliance with GDPR standards for both our internal operations and client projects."
    },
    {
        question: "Do you provide Data Processing Agreements (DPA)?",
        answer: "Absolutely. We provide standard DPAs for all project engagements where we act as a data processor on behalf of our clients."
    },
    {
        question: "Where is my data physically stored?",
        answer: "Our primary servers are located within the EEA and strategic global hubs that ensure equivalent levels of protection as required by GDPR Article 45."
    },
    {
        question: "How do you handle Subject Access Requests (SAR)?",
        answer: "All valid SARs are processed within 30 days of receipt. Our dedicated Data Protection Officer (DPO) oversees the secure retrieval and delivery of requested data."
    },
    {
        question: "What is your data breach notification policy?",
        answer: "In the unlikely event of a breach, we notify relevant supervisory authorities and affected individuals within 72 hours, as mandated by GDPR guidelines."
    }
];

export function GdprCompliancePage() {
    const { theme } = useTheme();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#10b981,transparent_70%)]" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-bold uppercase tracking-wider"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        EU Standards
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                    >
                        GDPR <span className="text-emerald-500">Compliance</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                        Radical transparency and rigorous data protection. We meet the world's strictest privacy standards to ensure your digital ecosystem is secure.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid gap-12">
                        {[
                            {
                                icon: UserCheck,
                                title: "Data Subject Rights",
                                text: "We respect and facilitate all eight fundamental rights granted under GDPR, including the right to access, rectification, and portability of personal data.",
                                color: "text-emerald-500"
                            },
                            {
                                icon: Database,
                                title: "Privacy by Design",
                                text: "Our engineering philosophy integrates data protection from the very first line of code, ensuring that security is never an afterthought in your project.",
                                color: "text-teal-500"
                            },
                            {
                                icon: HardDrive,
                                title: "Secure Storage",
                                text: "We utilize multi-layered encryption and decentralized storage architectures to ensure that sensitive data remains resilient against technical failures and threats.",
                                color: "text-green-600"
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
                    <div className="relative rounded-[5rem] overflow-hidden bg-emerald-600 p-12 md:p-24 text-center text-white shadow-3xl">
                        <div className="absolute inset-0">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#059669,transparent_50%)]" />
                            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#34d399,transparent_50%)] opacity-30" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">Ensuring enterprise-grade compliance?</h2>
                            <p className="text-2xl text-emerald-50 text-emerald-100/90 mb-12 font-medium">We partner with global organizations to implement high-scale digital solutions that never compromise on data subject rights.</p>
                            <button className="px-12 py-6 bg-white text-emerald-600 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3 mx-auto">
                                Consult with DPO <ShieldCheck className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

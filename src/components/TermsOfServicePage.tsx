import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { Gavel, Scale, FileCheck, Globe, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

const faqItems = [
    {
        question: "Are these terms binding for free trials?",
        answer: "Yes, our Terms of Service apply to all users of our digital platform, including those on free trials or evaluation versions of our software products."
    },
    {
        question: "Can I cancel my service agreement at any time?",
        answer: "Most service agreements can be terminated with a 30-day notice period, subject to any project-specific commitments defined in your Statement of Work (SOW)."
    },
    {
        question: "Who owns the intellectual property of the final product?",
        answer: "Upon final payment, BytechSol transfers full ownership of the developed software's intellectual property to your organization, unless otherwise specified in your contract."
    },
    {
        question: "Do you offer service level agreements (SLAs)?",
        answer: "Yes, we provide robust SLAs for আমাদের enterprise clients, guaranteeing specific uptime requirements and priority technical support response times."
    },
    {
        question: "How are disputes typically handled?",
        answer: "We prefer resolving any issues through direct consultation and mediation. If necessary, disputes are governed by the laws of the jurisdiction specified in your contract."
    }
];

export function TermsOfServicePage() {
    const { theme } = useTheme();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#a855f7,transparent_70%)]" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-bold uppercase tracking-wider"
                    >
                        <Gavel className="w-4 h-4" />
                        Legal Framework
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                    >
                        Terms of <span className="text-purple-500">Service</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                        Clear, fair, and professional guidelines for our collaboration. Understanding the foundation of our partnership starts here.
                    </motion.p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid gap-12">
                        {[
                            {
                                icon: Scale,
                                title: "Agreement to Terms",
                                text: "By accessing or using BytechSol services, you agree to be bound by these legal terms. We ensure our frameworks protect both your business interests and our technical delivery standards.",
                                color: "text-purple-500"
                            },
                            {
                                icon: FileCheck,
                                title: "Intellectual Property",
                                text: "We believe in transparent ownership. All custom software developed for your project is transferred to your full legal ownership upon completion of our contract terms.",
                                color: "text-pink-500"
                            },
                            {
                                icon: Globe,
                                title: "Governing Law",
                                text: "Our services are provided in accordance with international digital standards, with specific jurisdictional governance defined clearly within individual project agreements.",
                                color: "text-indigo-500"
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
                    <div className="relative rounded-[5rem] overflow-hidden bg-purple-600 p-12 md:p-24 text-center text-white shadow-3xl">
                        <div className="absolute inset-0">
                            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#7e22ce,transparent_50%)]" />
                            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#c084fc,transparent_50%)] opacity-30" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">Need a customized service contract?</h2>
                            <p className="text-2xl text-purple-50 text-purple-100/90 mb-12 font-medium">We offer flexible legal frameworks tailored for complex enterprise deployments and strategic partnerships.</p>
                            <button className="px-12 py-6 bg-white text-purple-600 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3 mx-auto">
                                Explore Partnership Terms <Scale className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

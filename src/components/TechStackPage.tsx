import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { Cpu, Server, Globe, Smartphone, Database, ChevronDown, Sparkles, ArrowRight, Code2 } from 'lucide-react';

const technologies = [
    {
        category: 'Backend & Core',
        icon: Server,
        items: ['Python / Django', 'Node.js / Express', 'Go (Golang)', 'Odoo 18 Framework'],
        color: 'text-blue-500',
        bg: 'bg-blue-500/10'
    },
    {
        category: 'Frontend & Web',
        icon: Globe,
        items: ['React / Next.js', 'Vue.js / Nuxt', 'TypeScript', 'Tailwind CSS'],
        color: 'text-indigo-500',
        bg: 'bg-indigo-500/10'
    },
    {
        category: 'Mobile & Apps',
        icon: Smartphone,
        items: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'],
        color: 'text-purple-500',
        bg: 'bg-purple-500/10'
    },
    {
        category: 'AI & Data',
        icon: Cpu,
        items: ['OpenAI / LangChain', 'TensorFlow', 'PostgreSQL', 'Redis'],
        color: 'text-emerald-500',
        bg: 'bg-emerald-500/10'
    }
];

const faqItems = [
    {
        question: "How do you choose the right tech stack for a project?",
        answer: "We analyze your specific scale requirements, budget, and long-term maintenance needs. We prioritize stable, high-performance, and future-proof technologies like Next.js and Django."
    },
    {
        question: "Can you work with legacy technology stacks?",
        answer: "Yes, we specialize in legacy modernization. We can help you maintain existing systems while architecting a phased migration to a modern, scalable backend."
    },
    {
        question: "Do you offer post-deployment technical maintenance?",
        answer: "Absolutely. Our engineering squads provide continuous monitoring, security patching, and core performance optimizations to ensure your stack remains pristine."
    },
    {
        question: "Is your engineering team certified in Odoo?",
        answer: "Our ERP architects hold the latest Odoo certifications and have successfully delivered complex warehouse and manufacturing implementations globally."
    },
    {
        question: "How do you ensure code quality across different stacks?",
        answer: "We enforce strict PR reviews, automated CI/CD pipelines, and 80%+ test coverage requirements for all enterprise-scale technical deliveries."
    }
];

export function TechStackPage() {
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
                        <Cpu className="w-4 h-4" />
                        Vetted Technical Excellence
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                    >
                        Engineering <span className="text-indigo-500">Excellence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                        A high-performance stack curated for enterprise scale and AI-native resilience. We don't just write code; we build the future.
                    </motion.p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`p-10 rounded-[3rem] border transition-all hover:scale-105 duration-300 ${theme === 'dark' ? 'bg-slate-900 border-white/5 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
                                }`}
                        >
                            <div className={`w-14 h-14 rounded-2xl ${tech.bg} ${tech.color} flex items-center justify-center mb-8`}>
                                <tech.icon className="w-7 h-7" />
                            </div>
                            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{tech.category}</h3>
                            <ul className="space-y-4">
                                {tech.items.map(item => (
                                    <li key={item} className="flex items-center gap-3">
                                        <div className={`w-1.5 h-1.5 rounded-full ${tech.color}`} />
                                        <span className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Technical FAQ - Redesigned to match Odoo premium style */}
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

            {/* Technical Banner */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-[5rem] overflow-hidden bg-slate-900 p-12 md:p-24 text-center text-white border border-white/5 shadow-3xl">
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#4f46e5,transparent_50%)] opacity-20" />
                            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#10b981,transparent_50%)] opacity-10" />
                        </div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">Require a deep technical audit of your existing architecture?</h2>
                            <p className="text-2xl text-slate-300 mb-12 font-medium">Our senior architects provide comprehensive roadmap analysis for global organizations ready to migrate to the next generation of intelligent technology.</p>
                            <button className="px-12 py-6 bg-white text-slate-900 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3 mx-auto">
                                Book Tech Audit <Code2 className="w-6 h-6 text-indigo-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

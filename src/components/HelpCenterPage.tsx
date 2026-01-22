import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { HelpCircle, MessageSquare, LifeBuoy, FileQuestion, ChevronDown, Sparkles, ArrowRight, Phone, Mail, Clock, Users } from 'lucide-react';

const faqItems = [
    {
        question: "What are your standard support hours?",
        answer: "Our enterprise support team is available 24/7. Standard business support operates from 9:00 AM to 6:00 PM (GMT+5), Monday through Friday."
    },
    {
        question: "How do I report a critical technical issue?",
        answer: "Enterprise clients can use their dedicated Slack channel or high-priority support hotline. For all other users, please email urgent@bytechsol.com."
    },
    {
        question: "Do you provide on-site technical assistance?",
        answer: "Yes, for major Odoo implementations and industrial AI deployments, we can deploy on-site engineering squads to our hubs in Dubai, London, and Pakistan."
    },
    {
        question: "How can I track the status of my support ticket?",
        answer: "Once a ticket is created, you will receive a tracking link via email. You can also view all active tickets through our client dashboard."
    },
    {
        question: "Can I upgrade my support plan mid-project?",
        answer: "Absolutely. You can scale your support level upwards at any time to include faster response times, dedicated account managers, and 24/7 technical coverage."
    }
];

export function HelpCenterPage() {
    const { theme } = useTheme();
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
            {/* Hero Section */}
            <section className="relative py-32 px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#3b82f6,transparent_70%)]" />
                </div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-bold uppercase tracking-wider"
                    >
                        <LifeBuoy className="w-4 h-4" />
                        Support Ecosystem
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                    >
                        Help <span className="text-blue-500">Center</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    >
                        Resolution-focused support for global enterprises. Our technical squads are always within reach.
                    </motion.p>
                </div>
            </section>

            {/* Support Channels Grid */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                    {[
                        { icon: MessageSquare, title: "Live Chat", text: "Instant technical support for quick queries.", action: "Start Chat" },
                        { icon: Mail, title: "Support Ticket", text: "Detailed resolution for complex challenges.", action: "Submit Ticket" },
                        { icon: Phone, title: "Phone Line", text: "Dedicated hotlines for enterprise partners.", action: "Call Us" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`p-10 rounded-[3rem] border transition-all ${theme === 'dark' ? 'bg-slate-900 border-white/5 shadow-2xl' : 'bg-white border-slate-200 shadow-xl'
                                }`}
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                            <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.text}</p>
                            <button className={`w-full py-4 rounded-xl font-bold transition-all ${theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-slate-900 text-white hover:bg-slate-800'
                                }`}>{item.action}</button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Common Questions - Redesigned to match Odoo premium style */}
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

            {/* Enterprise Support Banner */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative rounded-[5rem] overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 p-12 md:p-24 text-white shadow-3xl">
                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div className="text-left">
                                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Elite Technical Stewardship.</h2>
                                <p className="text-xl text-blue-100/90 mb-10">Beyond basic support, we provide strategic technical management to ensure your architecture evolves with your business velocity.</p>
                                <div className="flex flex-wrap gap-8">
                                    <div className="flex items-center gap-3">
                                        <Clock className="w-5 h-5 text-blue-300" />
                                        <span className="font-bold text-sm tracking-widest uppercase">15m Avg. Response</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <MessageSquare className="w-5 h-5 text-blue-300" />
                                        <span className="font-bold text-sm tracking-widest uppercase">Slack Connect</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
                                    <div className="text-4xl font-black mb-1">24/7</div>
                                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Coverage</div>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
                                    <div className="text-4xl font-black mb-1">99.9%</div>
                                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Uptime SLA</div>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
                                    <div className="text-4xl font-black mb-1">Users</div>
                                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Focused</div>
                                </div>
                                <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20">
                                    <Sparkles className="w-8 h-8 mb-2" />
                                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">Elite Tier</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

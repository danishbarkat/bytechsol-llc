import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Heart, Sparkles, Zap, Target, ArrowRight } from 'lucide-react';

const principles = [
    {
        number: '01',
        title: 'Empathy at the Core',
        description: 'We listen first before creating plans or prototyping; we listen to your story and your goals, and to users. All of our custom software solutions start with empathetic knowledge of what an actual human needs.',
        icon: Heart,
        color: '#3b82f6'
    },
    {
        number: '02',
        title: 'Simplicity that Speaks',
        description: 'Complicated does not imply superior. We are user-centered design thinkers who believe in design that is intuitive, accessible, and elegant because the best digital experiences have an effortless feel to them.',
        icon: Sparkles,
        color: '#2563eb'
    },
    {
        number: '03',
        title: 'Speed with Purpose',
        description: 'We act swiftly—not rashly. Be it lean MVPs or web development at scale, we work with purpose, pivot when necessary, and stay focused on driving your business success.',
        icon: Zap,
        color: '#1d4ed8'
    },
    {
        number: '04',
        title: 'Designed to Deliver Results',
        description: 'We don’t make design awards; we make you win customers. Our focus is impact: conversions, retention, performance, and ROI.',
        icon: Target,
        color: '#1e40af'
    }
];

export function Principles() {
    const { theme } = useTheme();

    return (
        <section className={`relative py-32 px-6 overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'
            }`}>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                        <span className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em]">Our Philosophy</span>
                    </div>
                    <h2 className={`text-5xl md:text-7xl font-bold mb-8 leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                        The Principles <br className="hidden md:block" /> Powering <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Our Projects</span>
                    </h2>
                    <p className={`text-xl md:text-2xl leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                        From first brainstorm to final build, these values guide every decision we make.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {principles.map((principle, index) => (
                        <motion.div
                            key={principle.number}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-12 rounded-[4rem] border transition-all duration-700 overflow-hidden ${theme === 'dark'
                                    ? 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/5'
                                    : 'bg-white border-slate-100 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-200'
                                }`}
                        >
                            <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 rounded-[2.5rem] flex items-center justify-center relative overflow-hidden group/icon shadow-2xl">
                                        <div className="absolute inset-0 bg-blue-500/10 group-hover/icon:bg-blue-500/20 transition-colors" />
                                        <div className="absolute inset-0 border-2 border-blue-500/20 rounded-[2.5rem]" />
                                        <principle.icon className="w-12 h-12 text-blue-500 relative z-10 transition-transform duration-700 group-hover/icon:scale-110 group-hover/icon:rotate-6" />
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className={`text-xs font-bold mb-4 uppercase tracking-[0.4em] ${theme === 'dark' ? 'text-blue-400/50' : 'text-blue-500/50'
                                        }`}>
                                        Foundation {principle.number}
                                    </div>
                                    <h3 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                        }`}>
                                        {principle.title}
                                    </h3>
                                    <p className={`text-xl leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                                        }`}>
                                        {principle.description}
                                    </p>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="mt-8 inline-flex items-center gap-2 text-blue-500 font-bold uppercase tracking-widest text-sm cursor-pointer"
                                    >
                                        View Commitment <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Massive background number */}
                            <div className={`absolute -bottom-10 -right-6 text-[15rem] font-black italic select-none opacity-[0.02] pointer-events-none transition-all group-hover:opacity-[0.04] group-hover:-translate-y-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                }`}>
                                {principle.number}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

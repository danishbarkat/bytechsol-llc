import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import {
    ArrowRight,
    Clock,
    CheckCircle2,
    Sparkles,
    Zap,
    Shield,
    Globe,
    Database,
    Code2
} from 'lucide-react';

export function AboutHero() {
    const { theme } = useTheme();

    return (
        <section className={`relative pt-32 pb-20 px-6 overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
            }`}>
            {/* Background Polish */}
            <div className="absolute inset-0 z-0">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-full ${theme === 'dark'
                        ? 'bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)]'
                        : 'bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]'
                    }`} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* The Main Card Container */}
                <div className={`relative rounded-[3rem] border backdrop-blur-3xl overflow-hidden p-12 md:p-24 shadow-2xl transition-colors duration-500 ${theme === 'dark'
                        ? 'border-white/10 bg-white/[0.02]'
                        : 'border-white bg-white/80'
                    }`}>
                    {/* Subtle Grid Background inside card */}
                    <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${theme === 'dark' ? 'invert-0' : 'invert'
                        }`}
                        style={{
                            backgroundImage: `linear-gradient(#4e91ff 1px, transparent 1px), linear-gradient(90deg, #4e91ff 1px, transparent 1px)`,
                            backgroundSize: '40px 40px',
                        }}
                    />

                    <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                        {/* Left Column: Content */}
                        <div className="text-left">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 ${theme === 'dark' ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'
                                    }`}
                            >
                                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                <span className={`text-sm font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                    }`}>About Bytechsol</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className={`text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                    }`}
                            >
                                We Don’t Just Build Software, <br />
                                <span className="text-blue-500">We Build What Matters.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={`text-lg md:text-xl mb-12 max-w-xl leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                                    }`}
                            >
                                We make digital, heartfelt, and purposeful solutions at Bytechsol.
                                Whether in small companies or large enterprises, we make businesses
                                successful through intelligent technology.
                            </motion.p>

                            {/* Feature Chips */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="flex flex-wrap gap-4 mb-12"
                            >
                                {[
                                    { icon: Zap, label: '8-12 weeks' },
                                    { icon: Shield, label: '95% Success' },
                                    { icon: CheckCircle2, label: 'Standard-First' }
                                ].map((chip, i) => (
                                    <div key={i} className={`flex items-center gap-2 px-5 py-2.5 rounded-full border font-medium text-sm transition-colors ${theme === 'dark'
                                            ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                                        }`}>
                                        <chip.icon className="w-4 h-4 text-blue-400" />
                                        {chip.label}
                                    </div>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col sm:flex-row items-center gap-6"
                            >
                                <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 rounded-2xl text-white font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-500/20 active:scale-95 flex items-center justify-center gap-2">
                                    Start Your Vision
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                                <button className={`w-full sm:w-auto px-10 py-5 rounded-2xl border font-bold text-lg transition-all flex items-center justify-center ${theme === 'dark'
                                        ? 'border-white/20 text-white hover:bg-white/10'
                                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                                    }`}>
                                    Learn Our Process
                                </button>
                            </motion.div>
                        </div>

                        {/* Right Column: Floating Visuals */}
                        <div className="relative h-[400px] md:h-[500px] hidden lg:block">
                            {/* Main Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-600 rounded-[2.5rem] flex items-center justify-center shadow-3xl shadow-blue-500/40 relative z-20"
                            >
                                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-blue-700 rounded-b-[2.5rem]" />
                                <Code2 className="w-24 h-24 text-white relative z-10" />
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-[60%] left-[60%] w-32 h-32 bg-emerald-500 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-emerald-500/30 relative z-30"
                            >
                                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-emerald-600 rounded-b-[2rem]" />
                                <Globe className="w-16 h-16 text-white relative z-10" />
                            </motion.div>

                            {/* Stat Badges */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute top-[10%] left-[40%] p-6 rounded-3xl bg-white text-slate-900 shadow-2xl flex items-center gap-4 z-40 border border-slate-100"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Timeline</div>
                                    <div className="text-lg font-black italic text-slate-950">8-12 weeks</div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1 }}
                                className="absolute bottom-[0%] right-[35%] p-6 rounded-3xl bg-white text-slate-900 shadow-2xl flex items-center gap-4 z-40 border border-slate-100"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Success Rate</div>
                                    <div className="text-lg font-black italic text-slate-950">95%</div>
                                </div>
                            </motion.div>

                            {/* Floating Icons Background */}
                            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute inset-0 z-0">
                                <Sparkles className="absolute top-0 right-10 w-8 h-8 text-yellow-500 opacity-30" />
                                <Database className="absolute bottom-10 left-0 w-10 h-10 text-blue-400 opacity-20" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Floating background elements for the whole section */}
                <div className="absolute -z-10 top-0 left-0 w-full h-full pointer-events-none">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className={`absolute -top-40 -left-20 w-[600px] h-[600px] blur-[150px] rounded-full ${theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-400/10'
                            }`}
                    />
                </div>
            </div>
        </section>
    );
}

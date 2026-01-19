import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { ArrowUpRight } from 'lucide-react';

export function HistorySection() {
    const { theme } = useTheme();

    return (
        <section className={`relative py-32 px-6 overflow-hidden ${theme === 'dark' ? 'bg-slate-950/50' : 'bg-white'
            }`}>
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-l from-blue-500/30 to-transparent blur-[120px] rounded-full transform translate-x-1/2" />
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left: Image/Visual Placeholder */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`relative aspect-square rounded-[3rem] overflow-hidden border backdrop-blur-3xl shadow-2xl ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'
                            }`}
                    >
                        <div className="absolute inset-0 flex items-center justify-center p-12 text-center relative z-20">
                            <div className="space-y-6">
                                <div className={`text-sm tracking-[0.4em] uppercase font-bold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                    }`}>
                                    Our Evolution
                                </div>
                                <h3 className={`text-4xl md:text-5xl font-bold leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                    }`}>
                                    Founded on Ambition, <br />
                                    <span className="text-blue-500">Driven by Impact.</span>
                                </h3>
                            </div>
                        </div>

                        {/* Premium Background Pattern */}
                        <div className="absolute inset-0 opacity-[0.03] z-10" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }} />

                        {/* Animated Glow in Corner */}
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{ duration: 8, repeat: Infinity }}
                            className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full"
                        />
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className={`inline-block px-6 py-2 rounded-full mb-10 backdrop-blur-md border ${theme === 'dark' ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-100'
                            }`}>
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">Our Story</span>
                        </div>

                        <h2 className={`text-4xl md:text-6xl font-bold mb-10 leading-[1.15] ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>
                            From one vision to becoming a <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">global tech powerhouse.</span>
                        </h2>

                        <div className={`space-y-8 text-xl leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                            <p>
                                Bytechsol did not turn out to be the best software agency in one day. Where it all began is a small team with huge ambitions and a dedication to creating smarter digital solutions and not simply prettier websites.
                            </p>
                            <p>
                                That side hustle eventually led to a complete digital powerhouse. Whether it was working with startups to create their initial MVPs or building enterprise systems at scale, we have created custom web solutions, AI products, ERP solutions, and even executed SEO to move the needle.
                            </p>
                            <p className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                                Honestly? We still build like it’s day one: fast, honest, and human. Behind every screen is someone betting it all on an idea.
                            </p>
                        </div>

                        <motion.button
                            whileHover={{ x: 10 }}
                            className="mt-12 group flex items-center gap-4 text-blue-500 font-bold text-2xl tracking-tight"
                        >
                            Shape your vision
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center transition-colors group-hover:bg-blue-500 group-hover:text-white">
                                <ArrowUpRight className="w-6 h-6" />
                            </div>
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

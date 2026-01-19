import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import {
    Rocket,
    Monitor,
    LineChart,
    Cpu,
    Handshake
} from 'lucide-react';

const missionPoints = [
    {
        number: '01',
        title: 'Designing Impactful Digital Experiences',
        description: 'We craft user-focused websites, UI/UX designs, and CMS platforms that are not just beautiful — they’re built to convert and engage.',
        icon: Monitor,
        color: '#3b82f6'
    },
    {
        number: '02',
        title: 'Engineering Scalable Custom Solutions',
        description: 'Whether it is a powerful piece of software or a complex web application, we create custom web products that grow with your business, effectively and safely.',
        icon: Rocket,
        color: '#2563eb'
    },
    {
        number: '03',
        title: 'Driving Brands with Strategy + Tech',
        description: 'Our team blends brand strategy with digital tools — SEO, SMM, and eCommerce platforms like Shopify — to make your brand stand out and sell more.',
        icon: LineChart,
        color: '#1d4ed8'
    },
    {
        number: '04',
        title: 'Leveraging AI, ERP, and Odoo to Automate Success',
        description: 'We incorporate customization of AI/ML, ERP implementation, and Odoo systems to ensure entry-point smooth procedures, approved decision-making and productivity.',
        icon: Cpu,
        color: '#1e40af'
    },
    {
        number: '05',
        title: 'Your Long-Term Tech Partner',
        description: 'We’re not just vendors. We’re strategic partners committed to delivering full-cycle digital transformation — from idea to execution and beyond.',
        icon: Handshake,
        color: '#1e3a8a'
    }
];

export function MissionSection() {
    const { theme } = useTheme();

    return (
        <section className={`relative py-32 px-6 overflow-hidden ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left Side: Header */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:sticky lg:top-40 mb-20 lg:mb-0"
                    >
                        <div className={`inline-block px-6 py-2 rounded-full mb-8 backdrop-blur-md border ${theme === 'dark' ? 'bg-blue-500/10 text-blue-300 border-blue-500/20' : 'bg-blue-50 text-blue-600 border-blue-100'
                            }`}>
                            <span className="text-sm font-bold uppercase tracking-[0.2em]">Our Purpose</span>
                        </div>

                        <h2 className={`text-5xl md:text-7xl font-bold mb-10 leading-[1.1] ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                            }`}>
                            Building Digital <br /> Solutions That <br />
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Drive Growth.
                            </span>
                        </h2>
                        <p className={`text-xl md:text-2xl leading-relaxed mb-12 font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                            }`}>
                            We enable businesses by creating enhanced digital experiences on demand.
                            All our pixels, lines of code, and strategies are designed to solve
                            real business problems.
                        </p>

                        <div className={`p-10 rounded-[2.5rem] border backdrop-blur-xl transition-all hover:shadow-2xl hover:shadow-blue-500/10 ${theme === 'dark' ? 'bg-white/5 border-white/10 hover:border-blue-500/20' : 'bg-blue-50 border-blue-100'
                            }`}>
                            <p className={`italic text-2xl font-light leading-relaxed ${theme === 'dark' ? 'text-blue-300' : 'text-blue-800'
                                }`}>
                                "From one vision to becoming a global tech partner, we help businesses scale smarter."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Points */}
                    <div className="space-y-10">
                        {missionPoints.map((point, index) => (
                            <motion.div
                                key={point.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`group p-10 rounded-[3rem] border transition-all duration-700 overflow-hidden relative ${theme === 'dark'
                                        ? 'bg-white/[0.02] border-white/10 hover:border-blue-500/30 hover:bg-white/[0.05]'
                                        : 'bg-white border-slate-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-500/10'
                                    }`}
                            >
                                {/* Background Number Decoration */}
                                <div className={`absolute top-4 right-8 text-8xl font-black italic select-none opacity-[0.03] transition-all group-hover:opacity-[0.06] group-hover:-translate-y-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                    }`}>
                                    {point.number}
                                </div>

                                <div className="flex flex-col md:flex-row items-start gap-8 relative z-10">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-3 shadow-xl"
                                            style={{
                                                background: `${point.color}20`,
                                                border: `1px solid ${point.color}40`
                                            }}
                                        >
                                            <point.icon className="w-8 h-8" style={{ color: point.color }} />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className={`text-2xl md:text-3xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                                            }`}>
                                            {point.title}
                                        </h3>
                                        <p className={`text-lg leading-relaxed font-light ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                                            }`}>
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

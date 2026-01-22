import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Contact } from './Contact';
import { FAQ } from './FAQ';
import { Sparkles, ArrowRight, MessageSquare, Zap, Target } from 'lucide-react';

export function ContactPage() {
  const { theme } = useTheme();

  return (
    <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Contact Hero */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#6366f1,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-sm font-bold uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4" />
            Let's Start Your Journey
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Unleash Your <span className="text-indigo-500">Value</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Ready to scale? We're here to help you navigate the future of your business with cutting-edge technology and strategy.
          </motion.p>
        </div>
      </section>

      <Contact />

      <FAQ />

      {/* Global Presence Banner */}
      <section className="py-24 px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[4rem] overflow-hidden bg-slate-900 p-12 md:p-24 text-center text-white border border-white/5">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#4f46e5,transparent_50%)] opacity-30" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#3b82f6,transparent_50%)] opacity-30" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center text-left">
              <div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">We operate at the speed of your vision.</h2>
                <p className="text-xl text-slate-300 mb-10">With expert teams across Dubai, London, and Pakistan, we ensure seamless 24/7 delivery and support for your most ambitious projects.</p>
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Now Accepting Hub Partners</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Zap, label: 'Fast Onboarding', text: '< 48 hours' },
                  { icon: Target, label: 'Expert Squads', text: '100% Vetted' },
                  { icon: MessageSquare, label: 'Support SLA', text: '24/7 uptime' },
                  { icon: Sparkles, label: 'Success Rate', text: '99% ROI' },
                ].map((item, idx) => (
                  <div key={idx} className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <item.icon className="w-6 h-6 text-indigo-400 mb-4" />
                    <div className="text-2xl font-black mb-1">{item.text}</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

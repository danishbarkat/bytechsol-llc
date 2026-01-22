import { motion } from 'motion/react';
import { Mail, ArrowRight, Star, Send, MapPin, Phone, MessageSquare } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Contact() {
  const { theme } = useTheme();

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-20 items-start">
          {/* Left Side: Impactful CTA & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={`text-4xl md:text-6xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Let's Build Your <br />
              <span className="text-indigo-500">Digital Empire</span>
            </h2>
            <p className={`text-xl mb-12 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Ready to accelerate your business with intelligent digital solutions?
              At BytechSol, we turn complex ideas into high-performance platforms built for the future.
            </p>

            {/* Support Channels */}
            <div className="space-y-6 mb-12">
              {[
                { icon: Mail, label: 'Email Us', value: 'contact@bytechsol.com', color: 'text-blue-500' },
                { icon: Phone, label: 'Call Support', value: '+92 321 4531234', color: 'text-emerald-500' },
                { icon: MapPin, label: 'Global Hub', value: 'Dubai | London | Pakistan', color: 'text-purple-500' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl ${theme === 'dark' ? 'bg-white/5 border-white/5' : 'bg-slate-100 border-slate-200'} border flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform shadow-lg`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-1">{item.label}</div>
                    <div className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* trust badges */}
            <div className="flex flex-wrap gap-4 pt-12 border-t border-white/5">
              {[
                { label: 'Top Agency', icon: Star, color: 'text-yellow-500' },
                { label: 'Enterprise Ready', icon: ShieldCheck, color: 'text-indigo-500' },
                { label: '24/7 Support', icon: MessageSquare, color: 'text-emerald-500' }
              ].map((badge, idx) => (
                <div key={idx} className={`flex items-center gap-2 px-6 py-3 rounded-full border ${theme === 'dark' ? 'bg-white/5 border-white/10' : 'bg-white border-slate-200 shadow-sm'}`}>
                  <badge.icon className={`w-4 h-4 ${badge.color}`} />
                  <span className={`text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{badge.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: High-End Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className={`p-10 md:p-14 rounded-[4rem] border transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900/50 border-white/5 shadow-3xl' : 'bg-white border-slate-200 shadow-2xl'
              }`}>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className={`w-full px-6 py-5 rounded-2xl border transition-all ${theme === 'dark' ? 'bg-slate-950/50 border-white/5 focus:border-indigo-500' : 'bg-slate-50 border-slate-100 focus:border-indigo-500'
                        } outline-none`}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Work Email</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      className={`w-full px-6 py-5 rounded-2xl border transition-all ${theme === 'dark' ? 'bg-slate-950/50 border-white/5 focus:border-indigo-500' : 'bg-slate-50 border-slate-100 focus:border-indigo-500'
                        } outline-none`}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Subject</label>
                  <select className={`w-full px-6 py-5 rounded-2xl border transition-all ${theme === 'dark' ? 'bg-slate-950/50 border-white/5 focus:border-indigo-500' : 'bg-slate-50 border-slate-100 focus:border-indigo-500'
                    } outline-none appearance-none`}>
                    <option>General Transformation</option>
                    <option>AI / LLM Integration</option>
                    <option>Odoo ERP Implementation</option>
                    <option>Custom Web Product</option>
                    <option>Industrial Automation</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className={`text-sm font-black uppercase tracking-widest ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project vision..."
                    className={`w-full px-6 py-5 rounded-2xl border transition-all resize-none ${theme === 'dark' ? 'bg-slate-950/50 border-white/5 focus:border-indigo-500' : 'bg-slate-50 border-slate-100 focus:border-indigo-500'
                      } outline-none`}
                  />
                </div>

                <button className="w-full py-6 rounded-3xl bg-indigo-600 text-white font-black text-lg hover:bg-indigo-500 shadow-xl shadow-indigo-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                  Send Message <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

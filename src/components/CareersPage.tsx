import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, ChevronDown, Sparkles, Heart, Zap, Globe, Rocket, Users } from 'lucide-react';

const jobs = [
  {
    title: 'Senior AI / ML Engineer',
    location: 'Remote / London / Dubai',
    type: 'Full-time',
    category: 'Engineering',
    salary: 'Competitive',
  },
  {
    title: 'ERP Implementation Specialist',
    location: 'Remote / Pakistan',
    type: 'Full-time',
    category: 'Consulting',
    salary: 'Market Competitive',
  },
  {
    title: 'Senior Product Designer',
    location: 'Remote',
    type: 'Contract',
    category: 'Design',
    salary: 'Project-based',
  },
  {
    title: 'Full Stack Developer (Next.js/Django)',
    location: 'Hybrid / Pakistan',
    type: 'Full-time',
    category: 'Engineering',
    salary: 'High Growth',
  }
];

const faqItems = [
  {
    question: "What is the typical interview process?",
    answer: "Our process usually involves 3 stages: an initial culture fit call, a technical assessment or portfolio review, and a final strategy interview with our leadership team."
  },
  {
    question: "Do you offer fully remote positions?",
    answer: "Yes, we are a digital-first company. While we have hubs in Pakistan, Dubai, and London, many of our roles are open to candidates globally."
  },
  {
    question: "What benefits do you offer?",
    answer: "We offer competitive salaries, flexible working hours, paid time off, health insurance, and a generous learning budget for professional certifications."
  },
  {
    question: "How do you support professional growth?",
    answer: "We hold monthly knowledge-sharing sessions, provide access to premium learning platforms, and encourage our team to lead innovative R&D projects."
  },
  {
    question: "Can I apply for multiple roles at once?",
    answer: "We recommend applying for the one role that best fits your expertise. However, our talent team reviews every application and may suggest other open positions based on your profile."
  }
];

export function CareersPage() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,#10b981,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-sm font-bold uppercase tracking-wider"
          >
            <Rocket className="w-4 h-4" />
            Build Your Legacy
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Shape the <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">Digital Future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Join a global team of visionaries, engineers, and designers dedicated to building high-impact digital solutions that change industries.
          </motion.p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { icon: Heart, title: 'Purpose Driven', text: 'We build things that matter, solving real-world problems with intelligent technology.' },
            { icon: Globe, title: 'Truly Remote', text: 'Work from anywhere in the world. We value output and creativity over office attendance.' },
            { icon: Zap, title: 'Fast Growth', text: 'Accelerate your career in a high-growth environment with direct access to leadership.' }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-6 text-emerald-500">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
              <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Board */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-5xl font-black mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Current Openings</h2>
            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>Find your next mission at BytechSol</p>
          </div>
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group p-10 rounded-[2.5rem] border transition-all duration-300 hover:scale-[1.02] ${theme === 'dark'
                  ? 'bg-slate-900/50 border-white/5 hover:border-emerald-500/30'
                  : 'bg-white border-slate-200 hover:border-emerald-500 shadow-xl'
                  }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-emerald-500/10 text-emerald-500 mb-4">
                      {job.category}
                    </span>
                    <h3 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-8 text-slate-500 font-medium">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-emerald-500" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-emerald-500" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-emerald-500" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex-shrink-0 px-10 py-5 rounded-2xl bg-emerald-600 text-white font-black hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-all flex items-center gap-3">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring FAQ - Redesigned to match Odoo premium style */}
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

      {/* Culture Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[4rem] overflow-hidden bg-slate-900 p-12 md:p-24 text-center text-white border border-white/5 shadow-3xl">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,#10b981,transparent_50%)] opacity-20" />
              <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_100%,#0ea5e9,transparent_50%)] opacity-20" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Don't see a role that fits?</h2>
              <p className="text-2xl text-slate-300 mb-12">We are always looking for exceptional talent. If you believe you can bring something unique to BytechSol, we want to hear from you.</p>
              <div className="flex flex-wrap justify-center gap-8">
                <button className="px-12 py-6 bg-emerald-600 text-white rounded-2xl font-black text-xl hover:scale-105 transition-transform flex items-center gap-3">
                  Send Your Resume <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-12 py-6 bg-white/5 border border-white/10 text-white rounded-2xl font-black text-xl hover:bg-white/10 transition-colors">
                  Contact Talent Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

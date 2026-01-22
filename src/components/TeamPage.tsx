import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { Linkedin, Twitter, Globe, ChevronDown, Sparkles, ArrowRight, Star, Users, Briefcase, Heart } from 'lucide-react';

const team = [
  {
    name: 'Danish (Dan)',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 10+ years of experience in AI-driven transformation and enterprise architecture.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', twitter: '#', globe: '#' }
  },
  {
    name: 'Sarah Chen',
    role: 'Head of AI Research',
    bio: 'Pioneer in LLM integration and semantic search architect with a background in data science.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', twitter: '#', globe: '#' }
  },
  {
    name: 'Alex Rivera',
    role: 'Lead ERP Architect',
    bio: 'Specialist in Odoo 18 migrations and warehouse automation for global distribution networks.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', twitter: '#', globe: '#' }
  },
  {
    name: 'Ayesha Malik',
    role: 'Senior Product Designer',
    bio: 'AWWWARDS-winning designer focused on building accessible and immersive digital experiences.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    socials: { linkedin: '#', twitter: '#', globe: '#' }
  }
];

const faqItems = [
  {
    question: "How many experts are in the BytechSol team?",
    answer: "We have a core team of 25+ developers, designers, and strategists, complemented by a global network of vetted technical consultants for specialized requirements."
  },
  {
    question: "Do you have local teams in multiple countries?",
    answer: "Yes, we have strategic hubs in Pakistan, Dubai, and London, allowing us to provide localized support and 24/7 technical coverage across time zones."
  },
  {
    question: "How do you ensure team consistency across projects?",
    answer: "We assign dedicated project squads that stay with your project from discovery to post-launch, ensuring deep domain knowledge and technical continuity."
  },
  {
    question: "Are your developers certified in specific technologies?",
    answer: "Absolutely. Our team holds certifications in AWS, Odoo, Google Cloud, and various expert-level engineering frameworks."
  },
  {
    question: "How can I join the BytechSol team?",
    answer: "Check our Careers page for active openings or send your portfolio to careers@bytechsol.com if you believe you fit our technical culture."
  }
];

export function TeamPage() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#a855f7,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-purple-500/10 border border-purple-500/20 text-purple-600 text-sm font-bold uppercase tracking-wider"
          >
            <Users className="w-4 h-4" />
            The Minds Behind the Magic
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Meet the <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">Innovators</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            A diverse group of engineers, designers, and strategists working together to build the next generation of digital products.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group lg:mb-12"
              >
                <div className={`relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 border transition-all duration-500 ${theme === 'dark' ? 'border-white/10' : 'border-slate-200'
                  } group-hover:border-purple-500/50 group-hover:shadow-2xl`}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <Linkedin className="w-6 h-6 text-white cursor-pointer hover:text-purple-400 transition-colors" />
                      <Twitter className="w-6 h-6 text-white cursor-pointer hover:text-purple-400 transition-colors" />
                      <Globe className="w-6 h-6 text-white cursor-pointer hover:text-purple-400 transition-colors" />
                    </div>
                  </div>
                </div>
                <h3 className={`text-2xl font-black mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {member.name}
                </h3>
                <p className="text-purple-500 font-bold text-sm uppercase tracking-widest mb-4">{member.role}</p>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team FAQ - Redesigned to match Odoo premium style */}
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

      {/* Team CTA Banner */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[4rem] overflow-hidden bg-purple-700 p-12 md:p-24 text-center text-white shadow-3xl">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#7e22ce,transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#3b82f6,transparent_50%)] opacity-30" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Work with world-class innovators.</h2>
              <p className="text-2xl text-purple-100 mb-12 font-medium">Ready to start your project with a team that cares about your vision as much as you do?</p>
              <div className="flex flex-wrap justify-center gap-8">
                <button className="px-12 py-6 bg-white text-purple-700 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl">
                  Contact the Team
                </button>
                <button className="px-12 py-6 bg-purple-800 text-white rounded-3xl font-black text-xl hover:bg-purple-900 transition-colors border border-white/20">
                  View Our Process
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

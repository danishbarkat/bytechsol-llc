import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useState } from 'react';
import { Shield, Eye, Lock, FileText, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

const faqItems = [
  {
    question: "How long do you retain my data?",
    answer: "We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, typically for the duration of our business relationship plus statutory retention periods."
  },
  {
    question: "Do you sell my data to third parties?",
    answer: "No, BytechSol does not sell, trade, or rent your personal identification information to others. We value your trust and privacy above all."
  },
  {
    question: "Can I request for my data to be deleted?",
    answer: "Absolutely. Under GDPR and other privacy frameworks, you have the 'Right to be Forgotten'. You can contact us at privacy@bytechsol.com to request data deletion."
  },
  {
    question: "Is my data encrypted during transfer?",
    answer: "Yes, all data transmitted between your browser and our servers is encrypted using industry-standard SSL/TLS technology."
  },
  {
    question: "How do you handle international data transfers?",
    answer: "For data transferred outside the EEA, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the European Commission."
  }
];

export function PrivacyPolicyPage() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#3b82f6,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-bold uppercase tracking-wider"
          >
            <Shield className="w-4 h-4" />
            Trust & Safety
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-8xl font-black mb-8 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Privacy <span className="text-blue-500">Policy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Your privacy is our priority. Learn how we handle your data with transparency, security, and absolute integrity.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-12">
            {[
              {
                icon: Eye,
                title: "Data Collection",
                text: "We collect information you provide directly, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email, and company details.",
                color: "text-blue-500"
              },
              {
                icon: Lock,
                title: "Data Security",
                text: "We implement industry-standard security measures to protect your data from unauthorized access, alteration, or disclosure. Your trust is built on our technical excellence.",
                color: "text-indigo-500"
              },
              {
                icon: FileText,
                title: "Information Usage",
                text: "Your data is used solely to provide and improve our services, communicate important updates, and ensure a personalized experience within our digital ecosystem.",
                color: "text-cyan-500"
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`p-10 rounded-[3rem] border transition-all ${theme === 'dark' ? 'bg-slate-900/50 border-white/5' : 'bg-white border-slate-200 shadow-xl'
                  }`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className={`p-4 rounded-2xl bg-current bg-opacity-10 ${section.color}`}>
                    <section.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{section.title}</h3>
                    <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{section.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Redesigned to match Odoo premium style */}
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

      {/* Banner Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[5rem] overflow-hidden bg-blue-600 p-12 md:p-24 text-center text-white shadow-3xl">
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#2563eb,transparent_50%)]" />
              <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,#60a5fa,transparent_50%)] opacity-30" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1]">Have more questions about your data?</h2>
              <p className="text-2xl text-blue-50 text-blue-100/90 mb-12 font-medium">Our privacy team is here to help you understand every detail of our security framework.</p>
              <button className="px-12 py-6 bg-white text-blue-600 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3 mx-auto">
                Contact Privacy Team <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

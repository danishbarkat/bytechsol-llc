import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Contact } from './Contact';
import { FAQ } from './FAQ';

export function ContactPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen">
      {/* Contact Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-8xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
          >
            Let&apos;s Build <br />
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Something Great
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            Ready to start your next project? We&apos;re here to help you navigate the future of your business.
          </motion.p>
        </div>
      </section>

      <Contact />
      <FAQ />
    </main>
  );
}

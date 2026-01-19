import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Services } from './Services';
import { OurApproach } from './OurApproach';
import { CTASection } from './CTASection';

export function ServicesPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen">
      {/* Services Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-8xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
          >
            Digital Solutions <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              for Modern Growth
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            From Odoo ERP implementation to AI-native applications, we deliver end-to-end technical excellence.
          </motion.p>
        </div>
      </section>

      <Services />
      <OurApproach />
      <CTASection />
    </main>
  );
}

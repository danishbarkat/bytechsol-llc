import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';

export function PrivacyPolicyPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-5xl font-bold mb-12 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
        >
          Privacy Policy
        </motion.h1>

        <div className={`space-y-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} leading-relaxed`}>
          <section>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>1. Introduction</h2>
            <p>Welcome to BytechSol. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at info@bytechsol.com.</p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>2. Information We Collect</h2>
            <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.</p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>3. How We Use Your Information</h2>
            <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
          </section>

          <section>
            <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>4. Contact Us</h2>
            <p>If you have questions or comments about this notice, you may email us at info@bytechsol.com or by post to our registered office address.</p>
          </section>
        </div>
      </div>
    </main>
  );
}

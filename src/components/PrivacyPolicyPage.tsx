import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Shield, Sparkles } from 'lucide-react';

export function PrivacyPolicyPage() {
  const { theme } = useTheme();

  const sections = [
    {
      title: '1. Information We Collect',
      content: 'We collect information you provide directly to us, including name, email address, phone number, and any other information you choose to provide. We also automatically collect certain information about your device when you use our services, including IP address, browser type, and operating system.'
    },
    {
      title: '2. How We Use Your Information',
      content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze trends and usage, and to personalize your experience. We may also use your information to send you technical notices, updates, security alerts, and support messages.'
    },
    {
      title: '3. Information Sharing',
      content: 'We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf. We may also share information in response to a request for information if we believe disclosure is in accordance with applicable law.'
    },
    {
      title: '4. Data Security',
      content: 'We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic storage system is completely secure, so we cannot guarantee absolute security.'
    },
    {
      title: '5. Your Rights',
      content: 'You have the right to access, update, or delete your personal information at any time. You may also have the right to restrict or object to certain processing of your data. To exercise these rights, please contact us using the information provided below.'
    },
    {
      title: '6. Cookies and Tracking',
      content: 'We use cookies and similar tracking technologies to collect and use personal information about you. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.'
    },
    {
      title: '7. Children\'s Privacy',
      content: 'Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us immediately.'
    },
    {
      title: '8. Changes to This Policy',
      content: 'We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. You are advised to review this policy periodically for any changes.'
    },
    {
      title: '9. Contact Us',
      content: 'If you have any questions about this privacy policy, please contact us at privacy@bytechsol.com or by mail at: BytechSol, 123 Innovation Street, San Francisco, CA 94105.'
    },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 border border-purple-500/30"
          >
            <Shield className="w-4 h-4 text-purple-400" />
            <span className={`text-sm tracking-wider uppercase ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
              Privacy Policy
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Privacy Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
          >
            Last Updated: December 15, 2024
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-10 rounded-3xl border mb-12 ${
              theme === 'dark'
                ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                : 'bg-white/50 backdrop-blur-xl border-slate-200'
            }`}
          >
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              BytechSol ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`p-8 rounded-2xl border ${
                  theme === 'dark'
                    ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                    : 'bg-white/50 backdrop-blur-xl border-slate-200'
                }`}
              >
                <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {section.title}
                </h2>
                <p className={`leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

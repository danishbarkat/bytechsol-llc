import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { X, Mail, Sparkles, TrendingUp, Zap, Gift } from 'lucide-react';
import { useState, useEffect } from 'react';

export function NewsletterPopup() {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    // Check if user has already seen or dismissed the popup
    const hasSeenPopup = localStorage.getItem('newsletter_popup_seen');
    
    if (!hasSeenPopup) {
      // Show popup after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter_popup_seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Store email (in real app, send to backend)
    console.log('Newsletter subscription:', email);
    
    // Close after 2 seconds
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const benefits = [
    { icon: TrendingUp, text: 'Weekly industry insights' },
    { icon: Zap, text: 'Exclusive tech tips' },
    { icon: Gift, text: 'Early access to new features' },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />

          {/* Popup Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, type: 'spring' }}
              className="pointer-events-auto relative w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl opacity-50 blur-2xl animate-pulse" />

              {/* Main Card */}
              <div className={`relative rounded-3xl border overflow-hidden ${
                theme === 'dark'
                  ? 'bg-slate-900/95 backdrop-blur-xl border-slate-800'
                  : 'bg-white/95 backdrop-blur-xl border-slate-200'
              }`}>
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className={`absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center transition-all z-10 ${
                    theme === 'dark'
                      ? 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
                  />
                  <motion.div
                    animate={{
                      scale: [1.2, 1, 1.2],
                      opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                    className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
                  />
                </div>

                {/* Content */}
                <div className="relative p-10">
                  {!isSubmitted ? (
                    <>
                      {/* Icon */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6 mx-auto"
                      >
                        <Mail className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Heading */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center mb-4"
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 border border-purple-500/30">
                          <Sparkles className="w-4 h-4 text-purple-400" />
                          <span className={`text-sm tracking-wider uppercase ${
                            theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                          }`}>
                            Stay Updated
                          </span>
                        </div>
                        
                        <h2 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          Subscribe to Our{' '}
                          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                            Weekly Newsletter
                          </span>
                        </h2>
                        
                        <p className={`text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Get the latest insights, tips, and updates delivered straight to your inbox
                        </p>
                      </motion.div>

                      {/* Benefits */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-3 mb-6"
                      >
                        {benefits.map((benefit, index) => {
                          const BenefitIcon = benefit.icon;
                          return (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                                <BenefitIcon className="w-5 h-5 text-white" />
                              </div>
                              <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                                {benefit.text}
                              </span>
                            </div>
                          );
                        })}
                      </motion.div>

                      {/* Form */}
                      <motion.form
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <div>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className={`w-full px-5 py-4 rounded-xl border transition-all text-lg ${
                              theme === 'dark'
                                ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                                : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20'
                            } focus:outline-none`}
                          />
                        </div>

                        <button
                          type="submit"
                          className="group w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105 relative overflow-hidden"
                        >
                          <motion.div
                            className="absolute inset-0 bg-white"
                            initial={{ x: '-100%', opacity: 0 }}
                            whileHover={{ x: '100%', opacity: 0.1 }}
                            transition={{ duration: 0.6 }}
                          />
                          <span className="relative flex items-center justify-center gap-2">
                            Subscribe Now
                            <Mail className="w-5 h-5" />
                          </span>
                        </button>
                      </motion.form>

                      {/* Privacy Note */}
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className={`text-xs text-center mt-4 ${
                          theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
                        }`}
                      >
                        We respect your privacy. Unsubscribe at any time.
                      </motion.p>
                    </>
                  ) : (
                    /* Success Message */
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, type: 'spring' }}
                        className="w-20 h-20 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center mb-6 mx-auto"
                      >
                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </motion.div>
                      
                      <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        Successfully Subscribed! 🎉
                      </h3>
                      
                      <p className={`text-lg ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        Thank you for subscribing! Check your inbox for our welcome email.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Zap, Globe, MessageCircle } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function CTASection() {
  const { theme } = useTheme();
  
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Card with Unique Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background with Gradient Border Effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className={`relative rounded-3xl overflow-hidden ${
            theme === 'dark' 
              ? 'bg-slate-900/80 backdrop-blur-xl border border-slate-800/50' 
              : 'bg-white/80 backdrop-blur-xl border border-slate-200/50'
          }`}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative p-12 md:p-16">
              {/* Floating Icons */}
              <div className="absolute top-8 right-8 hidden lg:block">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-purple-500"
                >
                  <Sparkles className="w-8 h-8" />
                </motion.div>
              </div>

              <div className="absolute bottom-12 left-12 hidden lg:block">
                <motion.div
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="text-cyan-500"
                >
                  <Zap className="w-8 h-8" />
                </motion.div>
              </div>

              <div className="absolute top-1/2 left-8 hidden lg:block">
                <motion.div
                  animate={{ 
                    x: [0, -8, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="text-blue-500"
                >
                  <Globe className="w-6 h-6" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="text-center max-w-4xl mx-auto relative z-10">
                {/* Small Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 border border-purple-500/30"
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
                    Let's Create Magic Together
                  </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className={`text-4xl md:text-6xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                >
                  Ready to Build Something
                  <br />
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Extraordinary?
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className={`text-lg md:text-xl mb-10 max-w-3xl mx-auto ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Transform your vision into reality with our cutting-edge AI solutions, 
                  expert development, and innovative design strategies.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  {/* Primary Button */}
                  <a
                    href="mailto:contact@bytechsol.com"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      <MessageCircle className="w-5 h-5" />
                      Start Your Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </a>

                  {/* Secondary Button */}
                  <a
                    href="#projects"
                    className={`inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 transition-all duration-300 ${
                      theme === 'dark'
                        ? 'border-slate-700 text-white hover:bg-slate-800'
                        : 'border-slate-300 text-slate-900 hover:bg-slate-100'
                    }`}
                  >
                    <span>View Our Work</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                      Available Now
                    </span>
                  </div>
                  <div className={`w-px h-4 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`}></div>
                  <div className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                    ⚡ Fast Response Time
                  </div>
                  <div className={`w-px h-4 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`}></div>
                  <div className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                    🔒 NDA Available
                  </div>
                  <div className={`w-px h-4 ${theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'}`}></div>
                  <div className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                    🎯 100+ Projects Delivered
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
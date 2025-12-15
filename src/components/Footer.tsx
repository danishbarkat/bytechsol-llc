import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Linkedin, Twitter, Instagram, Github, Mail, ArrowRight, Sparkles, Heart, Zap, Send, ExternalLink, Cpu } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useRouter } from './Router';
import { useState, useEffect } from 'react';

const footerLinks = {
  services: [
    { label: 'Web Development', route: '/services/web-development' },
    { label: 'AI/ML Solutions', route: '/services/ai-ml' },
    { label: 'Mobile Apps', route: '/services/mobile-development' },
    { label: 'Cloud Solutions', route: '/services/cloud-solutions' },
    { label: 'ERP Systems', route: '/services/erp-crm' },
    { label: 'Digital Marketing', route: '/services/digital-marketing' },
  ],
  company: [
    { label: 'About Us', route: '/about' },
    { label: 'Our Team', route: '/team' },
    { label: 'Careers', route: '/careers' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact', route: '/contact' },
  ],
  resources: [
    { label: 'Resources Hub', route: '/resources' },
    { label: 'Case Studies', route: '/portfolio' },
    { label: 'Tech Stack', route: '/' },
    { label: 'Press Kit', route: '/press-kit' },
    { label: 'Help Center', route: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', route: '/privacy-policy' },
    { label: 'Terms of Service', route: '/terms-of-service' },
    { label: 'Cookie Policy', route: '/cookie-policy' },
    { label: 'GDPR Compliance', route: '/gdpr-compliance' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/bytechsol', label: 'Twitter', gradient: 'from-blue-400 to-blue-600' },
  { icon: Linkedin, href: 'https://linkedin.com/company/bytechsol', label: 'LinkedIn', gradient: 'from-blue-600 to-blue-800' },
  { icon: Instagram, href: 'https://instagram.com/bytechsol', label: 'Instagram', gradient: 'from-pink-500 to-purple-600' },
  { icon: Github, href: 'https://github.com/bytechsol', label: 'GitHub', gradient: 'from-slate-600 to-slate-800' },
];

// Floating particles component
function FloatingParticles({ theme }: { theme: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            theme === 'dark' ? 'bg-purple-400/30' : 'bg-purple-600/20'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Magnetic button component
function MagneticButton({ children, href, gradient, label }: { children: React.ReactNode; href: string; gradient: string; label: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.3);
        y.set((e.clientY - centerY) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group relative w-12 h-12 rounded-2xl flex items-center justify-center overflow-hidden"
      title={label}
    >
      {/* Gradient background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        initial={false}
      />
      
      {/* Border */}
      <div className="absolute inset-0 rounded-2xl border border-slate-700/50 group-hover:border-transparent transition-colors duration-500" />
      
      {/* Icon */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
    </motion.a>
  );
}

export function Footer() {
  const { theme } = useTheme();
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <footer className={`relative overflow-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900' 
        : 'bg-gradient-to-b from-white via-slate-50 to-slate-100'
    }`}>
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-600 via-blue-600 to-purple-600 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.05, 0.15, 0.05],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 20, repeat: Infinity, delay: 5, ease: "easeInOut" }}
          className="absolute -bottom-1/3 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-600 rounded-full blur-3xl"
        />
        
        {/* Animated Grid */}
        <motion.div
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(${theme === 'dark' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)'} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === 'dark' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(139, 92, 246, 0.05)'} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        
        {/* Floating Particles */}
        <FloatingParticles theme={theme} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Premium Newsletter Section */}
        <div className="pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Premium Glow */}
            <motion.div
              animate={{
                opacity: isHovered ? 0.4 : 0.2,
                scale: isHovered ? 1.02 : 1,
              }}
              transition={{ duration: 0.6 }}
              className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-[32px] blur-3xl"
            />
            
            <div className={`relative p-12 md:p-16 rounded-[28px] border overflow-hidden ${
              theme === 'dark'
                ? 'bg-slate-900/95 backdrop-blur-2xl border-slate-700/50'
                : 'bg-white/95 backdrop-blur-2xl border-slate-200/50'
            }`}>
              {/* Animated Dots Pattern */}
              <motion.div
                animate={{ opacity: [0.03, 0.08, 0.03] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, ${theme === 'dark' ? 'white' : 'black'} 1px, transparent 0)`,
                  backgroundSize: '48px 48px'
                }}
              />

              {/* Animated Corner Accents */}
              <motion.div
                animate={{
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-8 right-8 w-20 h-20 border border-purple-500/20 rounded-3xl"
              />
              <motion.div
                animate={{
                  rotate: [360, 270, 180, 90, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-8 left-8 w-16 h-16 border border-cyan-500/20 rounded-2xl"
              />

              <div className="relative grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Floating Badge */}
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 border border-purple-500/30 backdrop-blur-sm"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </motion.div>
                    <span className={`text-sm tracking-wider uppercase font-medium ${
                      theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                    }`}>
                      Join 10,000+ Subscribers
                    </span>
                  </motion.div>
                  
                  <h3 className={`text-4xl md:text-5xl mb-6 leading-tight ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}>
                    Never Miss a{' '}
                    <motion.span
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="inline-block bg-gradient-to-r from-purple-600 via-blue-600 via-cyan-600 to-purple-600 bg-[length:200%_auto] bg-clip-text text-transparent"
                    >
                      Beat
                    </motion.span>
                  </h3>
                  
                  <p className={`text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    Get exclusive insights, cutting-edge tech updates, and industry trends delivered to your inbox every week. Join the community of innovators.
                  </p>

                  {/* Trust Indicators */}
                  <div className="flex items-center gap-6 mt-8">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2"
                    >
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className={`w-8 h-8 rounded-full border-2 ${
                              theme === 'dark' ? 'border-slate-900 bg-slate-700' : 'border-white bg-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className={`text-sm ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        10K+ readers
                      </span>
                    </motion.div>
                    
                    <div className={`h-4 w-px ${
                      theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'
                    }`} />
                    
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        </motion.div>
                      ))}
                      <span className={`ml-2 text-sm ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        4.9/5 rating
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Right Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {!isSubscribed ? (
                    <form onSubmit={handleSubscribe} className="space-y-4">
                      <div className="relative group">
                        <motion.div
                          className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-500"
                        />
                        <div className={`relative rounded-2xl border transition-all duration-300 ${
                          theme === 'dark'
                            ? 'bg-slate-800 border-slate-700 focus-within:border-purple-500'
                            : 'bg-white border-slate-300 focus-within:border-purple-500'
                        }`}>
                          <Mail className={`absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none ${
                            theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                          }`} />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            required
                            className={`w-full pl-14 pr-5 py-5 rounded-2xl bg-transparent transition-all focus:outline-none ${
                              theme === 'dark'
                                ? 'text-white placeholder-slate-500'
                                : 'text-slate-900 placeholder-slate-400'
                            }`}
                          />
                        </div>
                      </div>
                      
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white overflow-hidden"
                      >
                        {/* Animated shine */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{
                            x: ['-200%', '200%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1,
                          }}
                        />
                        
                        <span className="relative flex items-center justify-center gap-3 text-lg">
                          <Send className="w-5 h-5" />
                          Subscribe Now
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </span>
                      </motion.button>

                      <p className={`text-center text-sm ${
                        theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                      }`}>
                        🔒 Unsubscribe anytime. No spam, we promise!
                      </p>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="relative w-24 h-24 mx-auto mb-6"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600"
                        />
                        <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 flex items-center justify-center">
                          <motion.svg
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="w-12 h-12 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <motion.path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </motion.svg>
                        </div>
                      </motion.div>
                      
                      <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`text-2xl mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                      >
                        Welcome Aboard! 🎉
                      </motion.h4>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}
                      >
                        Check your inbox for a confirmation email
                      </motion.p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className={`py-20 border-t ${
          theme === 'dark' ? 'border-slate-800/50' : 'border-slate-200/50'
        }`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-lg"
                    />
                    <div className={`relative w-14 h-14 flex items-center justify-center ${
                      theme === 'dark' ? 'bg-white text-slate-900' : 'bg-slate-900 text-white'
                    }`} style={{ borderRadius: '50%' }}>
                      <span className="font-bold text-lg">BS</span>
                    </div>
                  </motion.div>
                  
                  <div>
                    <span className={`block text-2xl tracking-tight ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>BytechSol</span>
                    <motion.span
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="block text-sm bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-[length:200%_auto] bg-clip-text text-transparent"
                    >
                      Innovation Engineered
                    </motion.span>
                  </div>
                </div>
                
                <p className={`mb-8 leading-relaxed ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Building the future of digital experiences through cutting-edge technology, AI innovation, and human creativity. Transform your vision into reality.
                </p>

                {/* Social Links with Magnetic Effect */}
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <MagneticButton
                        key={social.label}
                        href={social.href}
                        gradient={social.gradient}
                        label={social.label}
                      >
                        <Icon className="w-5 h-5 text-white relative z-10" />
                      </MagneticButton>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className={`mb-8 uppercase tracking-wider flex items-center gap-2 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                <Cpu className="w-4 h-4 text-purple-500" />
                Services
              </h3>
              <ul className="space-y-4">
                {footerLinks.services.map((service, idx) => (
                  <motion.li
                    key={service.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a 
                      href={`#${service.route}`}
                      onClick={() => navigate(service.route as any)}
                      className={`group inline-flex items-center gap-3 transition-all ${
                        theme === 'dark' 
                          ? 'text-slate-400 hover:text-purple-400' 
                          : 'text-slate-600 hover:text-purple-600'
                      }`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{service.label}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className={`mb-8 uppercase tracking-wider ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>Company</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a 
                      href={`#${link.route}`}
                      onClick={() => navigate(link.route as any)}
                      className={`group inline-flex items-center gap-3 transition-all ${
                        theme === 'dark' 
                          ? 'text-slate-400 hover:text-purple-400' 
                          : 'text-slate-600 hover:text-purple-600'
                      }`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className={`mb-8 uppercase tracking-wider ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>Resources</h3>
              <ul className="space-y-4">
                {footerLinks.resources.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a 
                      href={`#${link.route}`}
                      onClick={() => navigate(link.route as any)}
                      className={`group inline-flex items-center gap-3 transition-all ${
                        theme === 'dark' 
                          ? 'text-slate-400 hover:text-purple-400' 
                          : 'text-slate-600 hover:text-purple-600'
                      }`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className={`mb-8 uppercase tracking-wider ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>Legal</h3>
              <ul className="space-y-4">
                {footerLinks.legal.map((link, idx) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a 
                      href={`#${link.route}`}
                      onClick={() => navigate(link.route as any)}
                      className={`group inline-flex items-center gap-3 transition-all ${
                        theme === 'dark' 
                          ? 'text-slate-400 hover:text-purple-400' 
                          : 'text-slate-600 hover:text-purple-600'
                      }`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`py-10 border-t ${
            theme === 'dark' ? 'border-slate-800/50' : 'border-slate-200/50'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-2 ${
                theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
              }`}
            >
              <span>© 2024 BytechSol. All rights reserved.</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-2 ${
                theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
              }`}
            >
              <span>Crafted with</span>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </motion.div>
              <span>and</span>
              <motion.div
                animate={{
                  rotate: [0, 15, -15, 0],
                }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </motion.div>
              <span>in Pakistan 🇵🇰</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
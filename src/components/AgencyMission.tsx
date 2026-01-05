import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useRef, useState, useEffect } from 'react';
import { 
  Rocket, 
  Sparkles, 
  Zap, 
  Users, 
  Target, 
  TrendingUp,
  Shield,
  Clock,
  Lightbulb,
  Award,
  Heart,
  CheckCircle2,
  ArrowRight,
  Check
} from 'lucide-react';
import { OurApproach } from './OurApproach';

const BRAND_COLOR = '#4e91ff';
const BRAND_GRADIENT = 'from-blue-500 to-blue-600';
const BRAND_RGB = '78, 145, 255';

const benefits = [
  {
    icon: Rocket,
    title: 'Accelerate Your Growth',
    description: 'We build digital solutions that scale with your business, helping you reach your goals faster.',
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    particles: 8,
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Cutting-edge AI and technology tailored to solve your unique business challenges.',
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    particles: 6,
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'Enterprise-grade security and reliability you can count on, 24/7.',
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    particles: 10,
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Expert team always ready to help you succeed with personalized assistance.',
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    particles: 7,
  },
];

const stats = [
  { value: 500, suffix: '+', label: 'Projects Delivered', icon: Award, color: BRAND_COLOR },
  { value: 98, suffix: '%', label: 'Client Satisfaction', icon: Heart, color: BRAND_COLOR },
  { value: 24, suffix: '/7', label: 'Support Available', icon: Clock, color: BRAND_COLOR },
  { value: 15, suffix: 'M+', label: 'Users Served', icon: Users, color: BRAND_COLOR },
];

// Animated Counter
function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let startTime: number;
    const duration = 2000;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, inView]);

  return <>{count}{suffix}</>;
}

// Magnetic Benefit Card
function MagneticBenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 10);
    y.set((e.clientY - centerY) / 10);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: mouseX,
        y: mouseY,
      }}
      className="relative group cursor-pointer"
    >
      {/* Main card */}
      <motion.div
        className={`relative overflow-hidden backdrop-blur-2xl border-2 p-8 transition-all duration-500 ${
          theme === 'dark'
            ? 'bg-slate-900/60 border-slate-800'
            : 'bg-white/80 border-slate-200 shadow-lg'
        }`}
        style={{ 
          borderRadius: '2rem',
          minHeight: '380px',
        }}
        animate={{
          borderColor: isHovered ? benefit.color : (theme === 'dark' ? '#1f2937' : '#e5e7eb'),
        }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient}`}
          animate={{
            opacity: isHovered ? 0.08 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Mesh gradient orb */}
        <motion.div
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl"
          style={{
            background: `radial-gradient(circle, ${benefit.color}40, transparent 70%)`,
          }}
          animate={{
            scale: isHovered ? [1, 1.3, 1] : 1,
            rotate: isHovered ? 360 : 0,
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity },
            rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
          }}
        />

        {/* Floating particles */}
        {isHovered && [...Array(benefit.particles)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: benefit.color,
              boxShadow: `0 0 10px ${benefit.color}`,
            }}
            initial={{
              x: '50%',
              y: '50%',
              scale: 0,
            }}
            animate={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}

        <div className="relative z-10">
          {/* Morphing icon container */}
          <motion.div
            className="mb-8"
            animate={{
              y: isHovered ? [0, -15, 0] : 0,
            }}
            transition={{
              duration: 2,
              repeat: isHovered ? Infinity : 0,
              ease: 'easeInOut',
            }}
          >
            <motion.div
              className={`relative w-24 h-24 flex items-center justify-center backdrop-blur-xl border-2 ${
                theme === 'dark'
                  ? 'bg-slate-800/50 border-slate-700'
                  : 'bg-white border-slate-200'
              }`}
              style={{ borderRadius: '1.5rem' }}
              animate={{
                borderRadius: isHovered ? ['1.5rem', '50%', '1.5rem'] : '1.5rem',
                rotate: isHovered ? [0, 180, 360] : 0,
              }}
              transition={{
                borderRadius: { duration: 2, repeat: isHovered ? Infinity : 0 },
                rotate: { duration: 3, repeat: isHovered ? Infinity : 0, ease: 'linear' },
              }}
            >
              {/* Glowing ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: benefit.color }}
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : 1,
                  opacity: isHovered ? [0.5, 0, 0.5] : 0,
                }}
                transition={{
                  duration: 1.5,
                  repeat: isHovered ? Infinity : 0,
                }}
              />
              
              <benefit.icon className="w-10 h-10 relative z-10" style={{ color: benefit.color }} />
            </motion.div>
          </motion.div>

          {/* Content */}
          <h3
            className={`mb-4 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
            style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '1.3' }}
          >
            {benefit.title}
          </h3>

          <p
            className={`mb-8 leading-relaxed transition-colors ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
            style={{ fontSize: '1rem' }}
          >
            {benefit.description}
          </p>

          {/* Interactive CTA */}
          <motion.div
            className="flex items-center gap-3"
            animate={{
              x: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={`text-sm uppercase tracking-wider ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
              style={{ fontWeight: '600' }}
            >
              Explore
            </span>
            
            <motion.div
              className="relative w-10 h-10 rounded-full flex items-center justify-center"
              style={{ 
                background: benefit.color,
                boxShadow: `0 0 20px ${benefit.color}60`,
              }}
              animate={{
                x: isHovered ? [0, 5, 0] : 0,
              }}
              transition={{
                duration: 1,
                repeat: isHovered ? Infinity : 0,
              }}
            >
              <ArrowRight className="w-5 h-5 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Animated border effect */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ borderRadius: '2rem' }}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="none"
            stroke={benefit.color}
            strokeWidth="2"
            strokeDasharray="10 10"
            rx="32"
            style={{ opacity: isHovered ? 0.3 : 0 }}
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="1s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </motion.div>

      {/* Floating shadow */}
      <motion.div
        className="absolute inset-0 -z-10 blur-2xl opacity-0"
        style={{
          background: `radial-gradient(circle, ${benefit.color}30, transparent 70%)`,
        }}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          y: isHovered ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}

// Circular Progress Stats
function CircularProgressStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { theme } = useTheme();
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  const circumference = 2 * Math.PI * 45;
  const progress = stat.suffix === '%' ? stat.value / 100 : stat.suffix === 'M+' ? 1 : 0.8;

  return (
    <motion.div
      ref={statRef}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', bounce: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      onViewportEnter={() => setInView(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="text-center"
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {/* Circular progress */}
        <div className="relative w-32 h-32 mx-auto mb-4">
          {/* Background circle */}
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="45"
              fill="none"
              stroke={theme === 'dark' ? '#1f2937' : '#e5e7eb'}
              strokeWidth="8"
            />
            
            {/* Progress circle */}
            <motion.circle
              cx="64"
              cy="64"
              r="45"
              fill="none"
              stroke={stat.color}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{
                strokeDashoffset: inView ? circumference * (1 - progress) : circumference,
              }}
              transition={{ duration: 2, ease: 'easeOut' }}
              style={{
                filter: `drop-shadow(0 0 8px ${stat.color}60)`,
              }}
            />
          </svg>

          {/* Icon in center */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl border-2 ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
              style={{
                boxShadow: isHovered ? `0 0 30px ${stat.color}60` : 'none',
              }}
            >
              <stat.icon className="w-7 h-7" style={{ color: stat.color }} />
            </div>
          </motion.div>
        </div>

        {/* Number */}
        <div
          className={`mb-2 transition-colors ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}
          style={{ 
            fontSize: '2rem', 
            fontWeight: '700',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
        </div>

        {/* Label */}
        <div
          className={`text-sm uppercase tracking-wider transition-colors ${
            theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
          }`}
        >
          {stat.label}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function AgencyMission() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeApproach, setActiveApproach] = useState(0);
  const approachContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = approachContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setActiveApproach(index);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    const sections = container.querySelectorAll('.approach-section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative py-32 px-6 overflow-hidden transition-colors ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      {/* Advanced background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated grid */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(${BRAND_RGB}, ${theme === 'dark' ? 0.2 : 0.15}) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Multiple floating gradients */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, rgba(${BRAND_RGB}, 0.5), transparent)` }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, rgba(${BRAND_RGB}, 0.5), transparent)` }}
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            className={`inline-flex items-center gap-3 px-8 py-4 mb-10 backdrop-blur-xl border-2 ${
              theme === 'dark'
                ? 'bg-purple-500/10 border-purple-500/30'
                : 'bg-purple-100/50 border-purple-300'
            }`}
            style={{ borderRadius: '3rem' }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Sparkles className={`w-5 h-5 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} />
            </motion.div>
            <span
              className={`tracking-widest uppercase ${
                theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
              }`}
              style={{ fontSize: '0.875rem', fontWeight: '600' }}
            >
              What We Do For You
            </span>
          </motion.div>

          <motion.h2
            className={`mb-8 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
            style={{ fontSize: '4rem', lineHeight: '1.1', fontWeight: '800' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            Empowering Your{' '}
            <br />
            <motion.span 
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-blue-500 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Digital Success
            </motion.span>
          </motion.h2>

          <motion.p
            className={`text-xl transition-colors max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            We transform your ideas into powerful digital experiences that drive growth, 
            engage users, and deliver measurable results.
          </motion.p>
        </motion.div>

        {/* Magnetic Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {benefits.map((benefit, index) => (
            <MagneticBenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>

        {/* Circular Progress Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`mb-32 p-16 backdrop-blur-2xl border-2 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-slate-900/60 border-slate-800'
              : 'bg-white/80 border-slate-200 shadow-2xl'
          }`}
          style={{ borderRadius: '3rem' }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <CircularProgressStat key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Our Approach Section - Antigravity Style Split Screen */}
      <OurApproach />

      <div className="max-w-7xl mx-auto relative z-10 px-6">
        {/* Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`relative overflow-hidden p-16 backdrop-blur-2xl border-2 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-purple-900/40 border-purple-500/30'
              : 'bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 border-purple-300'
          }`}
          style={{ borderRadius: '3rem' }}
        >
          {/* Animated dots pattern */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle, rgba(${BRAND_RGB}, ${theme === 'dark' ? 0.35 : 0.25}) 2px, transparent 2px)`,
              backgroundSize: '40px 40px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.div
              className="mb-8"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="relative inline-block">
                {/* Pulsing rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: BRAND_COLOR }}
                    animate={{
                      scale: [1, 2, 2],
                      opacity: [0.5, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
                
                <CheckCircle2 className="w-20 h-20 relative z-10 brand-text" />
              </div>
            </motion.div>

            <h3
              className={`mb-6 transition-colors ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
              style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1.2' }}
            >
              Ready to Transform Your Digital Presence?
            </h3>

            <p
              className={`mb-10 text-lg leading-relaxed transition-colors ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Let's collaborate to build something extraordinary. Our team is ready to bring 
              your vision to life with cutting-edge technology and creative excellence.
            </p>

            <motion.button
              className={`group relative px-10 py-5 overflow-hidden backdrop-blur-xl border-2 transition-all ${
                theme === 'dark'
                  ? 'bg-purple-600 border-purple-500 text-white'
                  : 'bg-purple-600 border-purple-600 text-white'
              }`}
              style={{ borderRadius: '1.5rem', fontSize: '1.125rem', fontWeight: '700' }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
              
              <span className="relative z-10 flex items-center gap-3">
                Start Your Project
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

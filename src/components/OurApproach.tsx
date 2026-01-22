import { motion, useInView } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useRef, useState, useEffect } from 'react';
import {
  Heart,
  Target,
  Zap,
  TrendingUp,
  Check,
  Rocket,
  Lightbulb,
  Shield,
  Users,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const BRAND_COLOR = '#4e91ff';

const benefits = [
  {
    icon: Rocket,
    title: 'Accelerate Your Growth',
    description: 'We build digital solutions that scale with your business, helping you reach your goals faster.',
    color: BRAND_COLOR,
    details: {
      subtitle: 'Scale Your Business Rapidly',
      points: [
        'Custom solutions built to match your business growth trajectory',
        'Scalable architecture that grows with your user base',
        'Performance optimization for lightning-fast user experiences',
        'Cloud-native infrastructure for global reach',
        'Automated workflows to reduce operational overhead',
      ],
      outcome: 'Achieve faster time-to-market and sustainable growth with technology that scales.',
    },
  },
  {
    icon: Lightbulb,
    title: 'Innovative Solutions',
    description: 'Cutting-edge AI and technology tailored to solve your unique business challenges.',
    color: BRAND_COLOR,
    details: {
      subtitle: 'AI-Powered Innovation',
      points: [
        'Machine learning models customized for your industry',
        'Intelligent automation to streamline complex processes',
        'Predictive analytics for data-driven decision making',
        'Natural language processing for enhanced user interactions',
        'Computer vision solutions for visual intelligence',
      ],
      outcome: 'Stay ahead of competition with cutting-edge AI solutions tailored to your needs.',
    },
  },
  {
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'Enterprise-grade security and reliability you can count on, 24/7.',
    color: BRAND_COLOR,
    details: {
      subtitle: 'Bank-Level Security & Uptime',
      points: [
        'End-to-end encryption for data protection',
        '99.9% uptime guarantee with redundant systems',
        'Regular security audits and penetration testing',
        'GDPR and compliance-ready infrastructure',
        'Real-time monitoring and instant threat detection',
      ],
      outcome: 'Sleep soundly knowing your data and users are protected 24/7.',
    },
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Expert team always ready to help you succeed with personalized assistance.',
    color: BRAND_COLOR,
    details: {
      subtitle: 'Always Here For You',
      points: [
        'Dedicated account manager for personalized service',
        '24/7 technical support via chat, email, and phone',
        'Regular training sessions and knowledge transfer',
        'Proactive monitoring and issue prevention',
        'Quarterly business reviews to ensure success',
      ],
      outcome: 'Get peace of mind with a team that treats your success as their mission.',
    },
  },
];

const approaches = [
  {
    step: '01',
    title: 'Understanding Your Vision',
    description: 'We start by deeply understanding your goals, challenges, and target audience.',
    icon: Heart,
    color: BRAND_COLOR,
    details: {
      subtitle: 'Deep Discovery & Research',
      points: [
        'Comprehensive stakeholder interviews to understand your vision',
        'Market and competitor analysis to identify opportunities',
        'User persona development and customer journey mapping',
        'Technical feasibility assessment and risk analysis',
        'Business goals alignment and KPI definition',
      ],
      outcome: 'A clear roadmap that aligns with your business objectives and user needs.',
    },
  },
  {
    step: '02',
    title: 'Strategic Planning',
    description: 'Crafting a custom roadmap with AI-powered insights and industry best practices.',
    icon: Target,
    color: BRAND_COLOR,
    details: {
      subtitle: 'Data-Driven Strategy',
      points: [
        'AI-powered insights and predictive analytics integration',
        'Technology stack selection optimized for your needs',
        'Detailed project timeline with milestones and deliverables',
        'Resource allocation and team structure planning',
        'Risk mitigation strategies and contingency planning',
      ],
      outcome: 'A comprehensive blueprint that sets your project up for success.',
    },
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'Building your solution iteratively with continuous feedback and improvements.',
    icon: Zap,
    color: BRAND_COLOR,
    details: {
      subtitle: 'Iterative Build & Refinement',
      points: [
        'Sprint-based development with regular demos and feedback',
        'Continuous integration and automated testing',
        'Real-time collaboration and transparent communication',
        'Quality assurance at every stage of development',
        'Flexible adaptation to changing requirements',
      ],
      outcome: 'A robust, tested solution built with continuous stakeholder input.',
    },
  },
  {
    step: '04',
    title: 'Launch & Optimize',
    description: 'Deploying with confidence and continuously optimizing for better results.',
    icon: TrendingUp,
    color: BRAND_COLOR,
    details: {
      subtitle: 'Deploy & Continuous Improvement',
      points: [
        'Smooth deployment with zero-downtime strategies',
        'Performance monitoring and analytics setup',
        'User training and comprehensive documentation',
        'Post-launch support and rapid issue resolution',
        'Data-driven optimization and feature enhancements',
      ],
      outcome: 'A live product that evolves with your users and business needs.',
    },
  },
];

export function OurApproach() {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if section is in view - Only show card when section header has scrolled past
      // and we're properly inside the section (not just touching the edge)
      const sectionInView = rect.top <= 100 && rect.bottom > windowHeight * 0.5;
      setIsInView(sectionInView);

      if (!sectionInView) return;

      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        const rect = item.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const center = windowHeight / 2;

        // Check if item is closest to center of viewport
        const itemCenter = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(itemCenter - center);

        if (distanceFromCenter < windowHeight / 3) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allItems = [...benefits, ...approaches];
  const displayItem = allItems[activeIndex] || allItems[0];
  const isBenefit = activeIndex < benefits.length;

  return (
    <section
      ref={containerRef}
      className={`relative transition-colors py-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
        }`}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className={`mb-6 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
            style={{ fontSize: '3.5rem', fontWeight: '800', lineHeight: '1.1' }}
          >
            Our Approach to Delivery
          </h2>
          <p
            className={`text-xl transition-colors max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            A proven 4-step process for ERP, AI, and digital product delivery.
          </p>
        </motion.div>
      </div>

      {/* Split Screen Container - with snap scrolling */}
      <div className="relative" style={{ scrollSnapType: 'y mandatory' }}>
        {/* Benefits Section */}
        <div>
          <div className="flex items-center min-h-screen">
            {/* LEFT - Scrollable Benefits */}
            <div className="w-2/5 px-16">
              <h3
                className={`mb-12 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}
                style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.15em' }}
              >
                WHY CHOOSE US
              </h3>
            </div>
            {/* RIGHT - Sticky space placeholder */}
            <div className="w-3/5" />
          </div>

          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              ref={(el) => { itemRefs.current[index] = el; }}
              className="flex items-center min-h-screen"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* LEFT SIDE */}
              <div className="w-2/5 px-16">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.7, type: 'spring' }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="flex items-start gap-5 mb-5">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${benefit.color}20`, border: `2px solid ${benefit.color}40` }}
                    >
                      <benefit.icon className="w-7 h-7" style={{ color: benefit.color }} />
                    </div>
                  </div>

                  <h4
                    className={`mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                    style={{ fontSize: '2rem', fontWeight: '700', lineHeight: '1.3' }}
                  >
                    {benefit.title}
                  </h4>

                  <p
                    className={`text-lg leading-relaxed mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}
                  >
                    {benefit.description}
                  </p>

                  <div className="flex items-center gap-3 group cursor-pointer">
                    <span
                      className={`text-sm uppercase tracking-wider ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
                        }`}
                      style={{ fontWeight: '600' }}
                    >
                      Explore
                    </span>
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-2"
                      style={{ background: benefit.color }}
                    >
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* RIGHT SIDE - Empty space for sticky card */}
              <div className="w-3/5" />
            </div>
          ))}
        </div>

        {/* Approaches Section */}
        <div>
          <div className="flex items-center min-h-screen">
            <div className="w-2/5 px-16">
              <h3
                className={`mb-12 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}
                style={{ fontSize: '0.875rem', fontWeight: '700', letterSpacing: '0.15em' }}
              >
                OUR PROCESS
              </h3>
            </div>
            <div className="w-3/5" />
          </div>

          {approaches.map((approach, approachIndex) => (
            <div
              key={approach.step}
              ref={(el) => { itemRefs.current[benefits.length + approachIndex] = el; }}
              className="flex items-center min-h-screen"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* LEFT SIDE */}
              <div className="w-2/5 px-16">
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.7, type: 'spring' }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  <div className="mb-6">
                    <div
                      className="inline-block px-5 py-3 rounded-full"
                      style={{
                        background: `${approach.color}20`,
                        border: `2px solid ${approach.color}`,
                        color: approach.color,
                      }}
                    >
                      <span style={{ fontSize: '1rem', fontWeight: '700', letterSpacing: '0.1em' }}>
                        STEP {approach.step}
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`mb-5 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                    style={{
                      fontSize: '2.75rem',
                      fontWeight: '800',
                      lineHeight: '1.2',
                    }}
                  >
                    {approach.title}
                  </h3>

                  <p
                    className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    style={{ fontSize: '1.125rem' }}
                  >
                    {approach.description}
                  </p>

                  <div
                    className="mt-8 h-1 rounded-full"
                    style={{ width: '100px', backgroundColor: approach.color }}
                  />
                </motion.div>
              </div>

              {/* RIGHT SIDE - Empty space for sticky card */}
              <div className="w-3/5" />
            </div>
          ))}
        </div>
      </div>

      {/* STICKY RIGHT CARD - Positioned absolutely */}
      {isInView && (
        <div className="fixed top-1/2 right-0 w-3/5 pl-16 pr-16 pointer-events-none" style={{ transform: 'translateY(-50%)', zIndex: 10 }}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, rotateY: -15, z: -100 }}
            animate={{ opacity: 1, rotateY: 0, z: 0 }}
            exit={{ opacity: 0, rotateY: 15, z: -100 }}
            transition={{ duration: 0.8, type: 'spring', bounce: 0.3 }}
            className="relative pointer-events-auto"
            style={{ perspective: '1500px', transformStyle: 'preserve-3d' }}
          >
            {/* Holographic Scan Lines Background */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none" style={{ zIndex: 1 }}>
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `repeating-linear-gradient(
                    0deg,
                    ${displayItem.color}15 0px,
                    transparent 2px,
                    transparent 4px
                  )`,
                }}
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Floating Particle Network */}
            <div className="absolute -inset-32 pointer-events-none" style={{ zIndex: 0 }}>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    background: displayItem.color,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: `0 0 8px ${displayItem.color}`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Main 3D Isometric Container */}
            <motion.div
              className="relative"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'rotateX(2deg) rotateY(-3deg)',
              }}
              animate={{
                rotateX: [2, 4, 2],
                rotateY: [-3, -1, -3],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {/* Wireframe Outline Effect */}
              <div className="absolute -inset-2 pointer-events-none" style={{ zIndex: 5 }}>
                <svg className="w-full h-full" style={{ filter: `drop-shadow(0 0 8px ${displayItem.color})` }}>
                  <defs>
                    <linearGradient id={`wireframe-${activeIndex}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: displayItem.color, stopOpacity: 0.8 }} />
                      <stop offset="50%" style={{ stopColor: displayItem.color, stopOpacity: 0.3 }} />
                      <stop offset="100%" style={{ stopColor: displayItem.color, stopOpacity: 0.8 }} />
                    </linearGradient>
                  </defs>
                  <rect
                    x="2"
                    y="2"
                    width="calc(100% - 4px)"
                    height="calc(100% - 4px)"
                    fill="none"
                    stroke={`url(#wireframe-${activeIndex})`}
                    strokeWidth="2"
                    rx="40"
                    strokeDasharray="10 5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="30"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>
              </div>

              {/* Circuit Pattern Background */}
              <div
                className="absolute inset-0 opacity-5 rounded-3xl pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(${displayItem.color} 1px, transparent 1px),
                    linear-gradient(90deg, ${displayItem.color} 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px',
                  zIndex: 2,
                }}
              />

              {/* Liquid Morphing Gradient Background */}
              <motion.div
                className="absolute -inset-12 blur-3xl opacity-30 rounded-full"
                animate={{
                  background: [
                    `radial-gradient(circle at 30% 30%, ${displayItem.color}, transparent 60%)`,
                    `radial-gradient(circle at 70% 70%, ${displayItem.color}, transparent 60%)`,
                    `radial-gradient(circle at 30% 30%, ${displayItem.color}, transparent 60%)`,
                  ],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Main Glass Card */}
              <div
                className={`relative backdrop-blur-xl border shadow-2xl ${theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-700/50'
                  : 'bg-white/80 border-slate-300/50'
                  }`}
                style={{
                  borderRadius: '2.5rem',
                  boxShadow: `
                    0 0 60px ${displayItem.color}30,
                    inset 0 0 60px ${displayItem.color}10
                  `,
                  zIndex: 3,
                  minHeight: '650px',
                  maxHeight: '85vh',
                }}
              >
                <div className="absolute inset-0 overflow-y-auto custom-scrollbar rounded-[2.5rem]">
                  {/* Animated Corner Accents */}
                  {[
                    { top: '-10px', left: '-10px', rotate: 0 },
                    { top: '-10px', right: '-10px', rotate: 90 },
                    { bottom: '-10px', left: '-10px', rotate: 270 },
                    { bottom: '-10px', right: '-10px', rotate: 180 },
                  ].map((pos, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-20 h-20 pointer-events-none"
                      style={{
                        ...pos,
                        background: `linear-gradient(135deg, ${displayItem.color}40, transparent)`,
                        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                        transform: `rotate(${pos.rotate}deg)`,
                      }}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}

                  {/* Holographic Top Bar with Data Stream */}
                  <div className="relative h-2 overflow-hidden">
                    <motion.div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(90deg, 
                        transparent 0%, 
                        ${displayItem.color} 20%,
                        ${displayItem.color}80 50%,
                        ${displayItem.color} 80%,
                        transparent 100%
                      )`,
                      }}
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>

                  {/* Content Container */}
                  <div className="relative p-10" style={{ zIndex: 4 }}>
                    {/* Floating 3D Icon Container */}
                    <div className="flex items-start gap-8 mb-10">
                      <motion.div
                        className="relative flex-shrink-0"
                        style={{
                          transformStyle: 'preserve-3d',
                          perspective: '800px',
                        }}
                        animate={{
                          rotateY: [0, 10, 0, -10, 0],
                          rotateX: [0, 5, 0, -5, 0],
                          z: [0, 20, 0],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        {/* Holographic Layers Behind Icon */}
                        {[0, 1, 2].map((layer) => (
                          <motion.div
                            key={layer}
                            className="absolute inset-0 rounded-2xl border-2"
                            style={{
                              width: '120px',
                              height: '120px',
                              borderColor: `${displayItem.color}40`,
                              transform: `translateZ(-${layer * 20}px)`,
                            }}
                            animate={{
                              scale: [1, 1.05, 1],
                              opacity: [0.3, 0.1, 0.3],
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: layer * 0.3,
                            }}
                          />
                        ))}

                        {/* Main Icon Box */}
                        <motion.div
                          className={`relative overflow-hidden ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'
                            }`}
                          style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '1.5rem',
                            border: `3px solid ${displayItem.color}`,
                            boxShadow: `
                            0 0 40px ${displayItem.color}50,
                            inset 0 0 40px ${displayItem.color}20
                          `,
                            transform: 'translateZ(0)',
                          }}
                          key={`icon-${activeIndex}`}
                          initial={{ rotateY: -180, scale: 0.5 }}
                          animate={{ rotateY: 0, scale: 1 }}
                          transition={{ type: 'spring', bounce: 0.5, delay: 0.2 }}
                        >
                          {/* Scanning Line Effect */}
                          <motion.div
                            className="absolute inset-x-0 h-8 pointer-events-none"
                            style={{
                              background: `linear-gradient(180deg, transparent, ${displayItem.color}60, transparent)`,
                              filter: 'blur(8px)',
                            }}
                            animate={{
                              y: [-40, 160],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          />

                          <div className="w-full h-full flex items-center justify-center relative z-10">
                            <displayItem.icon
                              className="w-14 h-14"
                              style={{
                                color: displayItem.color,
                                filter: `drop-shadow(0 0 12px ${displayItem.color})`,
                              }}
                            />
                          </div>

                          {/* Corner Glow Dots */}
                          {[
                            { top: 8, left: 8 },
                            { top: 8, right: 8 },
                            { bottom: 8, left: 8 },
                            { bottom: 8, right: 8 },
                          ].map((pos, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-3 h-3 rounded-full"
                              style={{
                                ...pos,
                                background: displayItem.color,
                                boxShadow: `0 0 10px ${displayItem.color}`,
                              }}
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.4,
                              }}
                            />
                          ))}
                        </motion.div>
                      </motion.div>

                      {/* Title Section */}
                      <div className="flex-1 pt-4">
                        <motion.div
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {!isBenefit && (
                            <div
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                              style={{
                                background: `${displayItem.color}20`,
                                border: `2px solid ${displayItem.color}60`,
                                boxShadow: `0 0 20px ${displayItem.color}30`,
                              }}
                            >
                              <div
                                className="w-2 h-2 rounded-full animate-pulse"
                                style={{ background: displayItem.color }}
                              />
                              <span
                                style={{
                                  fontSize: '0.75rem',
                                  fontWeight: '800',
                                  color: displayItem.color,
                                  letterSpacing: '0.15em',
                                }}
                              >
                                STEP {(displayItem as any).step}
                              </span>
                            </div>
                          )}
                        </motion.div>

                        <motion.h3
                          className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                          style={{
                            fontSize: '2rem',
                            fontWeight: '800',
                            lineHeight: '1.2',
                            textShadow: `0 0 30px ${displayItem.color}30`,
                          }}
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {displayItem.title}
                        </motion.h3>

                        <motion.p
                          className={`leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                          style={{ fontSize: '1rem' }}
                          initial={{ x: -30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.5 }}
                        >
                          {displayItem.description}
                        </motion.p>
                      </div>
                    </div>

                    {/* Holographic Details Panel */}
                    <motion.div
                      className={`relative p-8 rounded-2xl border mb-6 overflow-hidden ${theme === 'dark' ? 'bg-slate-800/30 border-slate-700/30' : 'bg-slate-50/50 border-slate-200'
                        }`}
                      style={{
                        backdropFilter: 'blur(20px)',
                        boxShadow: `inset 0 0 40px ${displayItem.color}10`,
                      }}
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {/* Animated Grid Background */}
                      <motion.div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage: `
                          linear-gradient(${displayItem.color} 1px, transparent 1px),
                          linear-gradient(90deg, ${displayItem.color} 1px, transparent 1px)
                        `,
                          backgroundSize: '30px 30px',
                        }}
                        animate={{
                          backgroundPosition: ['0px 0px', '30px 30px'],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      <h4
                        className={`mb-6 flex items-center gap-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                        style={{ fontSize: '1.25rem', fontWeight: '700' }}
                      >
                        <motion.div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            background: displayItem.color,
                            boxShadow: `0 0 20px ${displayItem.color}60`,
                          }}
                          animate={{
                            boxShadow: [
                              `0 0 20px ${displayItem.color}60`,
                              `0 0 30px ${displayItem.color}80`,
                              `0 0 20px ${displayItem.color}60`,
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Check className="w-5 h-5 text-white" />
                        </motion.div>
                        {displayItem.details.subtitle}
                      </h4>

                      <div className="space-y-4 relative z-10">
                        {displayItem.details.points.map((point, index) => (
                          <motion.div
                            key={index}
                            className="flex items-start gap-4 group"
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 + index * 0.08 }}
                          >
                            <motion.div
                              className="relative w-6 h-6 flex-shrink-0 mt-1"
                              whileHover={{ scale: 1.2, rotate: 180 }}
                              transition={{ type: 'spring', stiffness: 300 }}
                            >
                              {/* Hexagon Shape */}
                              <svg viewBox="0 0 24 24" className="w-full h-full">
                                <motion.polygon
                                  points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5"
                                  fill={`${displayItem.color}30`}
                                  stroke={displayItem.color}
                                  strokeWidth="2"
                                  animate={{
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: index * 0.2,
                                  }}
                                />
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="3"
                                  fill={displayItem.color}
                                  style={{ filter: `drop-shadow(0 0 6px ${displayItem.color})` }}
                                />
                              </svg>
                            </motion.div>
                            <p className={`leading-relaxed flex-1 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                              {point}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Outcome Holographic Badge */}
                    <motion.div
                      className="relative p-6 rounded-xl overflow-hidden"
                      style={{
                        background: theme === 'dark'
                          ? `linear-gradient(135deg, ${displayItem.color}20, ${displayItem.color}10)`
                          : `linear-gradient(135deg, ${displayItem.color}15, ${displayItem.color}05)`,
                        border: `2px solid ${displayItem.color}40`,
                        boxShadow: `0 0 30px ${displayItem.color}20`,
                      }}
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.1 }}
                    >
                      {/* Animated Light Ray */}
                      <motion.div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${displayItem.color}30, transparent)`,
                        }}
                        animate={{
                          x: ['-100%', '200%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      <div className="flex items-start gap-4 relative z-10">
                        <motion.div
                          className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{
                            background: displayItem.color,
                            boxShadow: `0 0 20px ${displayItem.color}80`,
                          }}
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                        >
                          {isBenefit ? (
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          ) : (
                            <TrendingUp className="w-6 h-6 text-white" />
                          )}
                        </motion.div>

                        <div className="flex-1">
                          <h4
                            className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                            style={{ fontSize: '1.125rem', fontWeight: '700' }}
                          >
                            {isBenefit ? 'Key Benefit' : 'Expected Outcome'}
                          </h4>
                          <p
                            className={`leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}
                            style={{ fontSize: '0.95rem', fontWeight: '500' }}
                          >
                            {displayItem.details.outcome}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Progress Indicator - Only for Approaches */}
                    {!isBenefit && (
                      <div className="flex items-center justify-center gap-2 mt-8">
                        {approaches.map((item, index) => (
                          <motion.div
                            key={item.step}
                            className="cursor-pointer relative"
                            whileHover={{ scale: 1.2 }}
                          >
                            <motion.div
                              className="rounded-full relative overflow-hidden"
                              animate={{
                                width: activeIndex === benefits.length + index ? '40px' : '10px',
                                height: '10px',
                              }}
                              transition={{ duration: 0.4, type: 'spring' }}
                              style={{
                                background: activeIndex === benefits.length + index
                                  ? displayItem.color
                                  : theme === 'dark' ? '#334155' : '#cbd5e1',
                                boxShadow: activeIndex === benefits.length + index
                                  ? `0 0 15px ${displayItem.color}`
                                  : 'none',
                              }}
                            >
                              {activeIndex === benefits.length + index && (
                                <motion.div
                                  className="absolute inset-0"
                                  style={{
                                    background: `linear-gradient(90deg, transparent, white, transparent)`,
                                  }}
                                  animate={{
                                    x: ['-100%', '200%'],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: 'linear',
                                  }}
                                />
                              )}
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

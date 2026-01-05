import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useRef } from 'react';
import { Rocket, Lightbulb, Users, TrendingUp, Sparkles, Zap, Globe, Award } from 'lucide-react';

const BRAND_COLOR = '#4e91ff';
const BRAND_GRADIENT = 'from-blue-500 to-blue-500';

const journeySteps = [
  {
    year: '2010',
    title: 'The Beginning',
    description: 'Started with a vision to revolutionize digital experiences. Two developers in a garage, one big dream.',
    icon: Lightbulb,
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    stat: 'Founded',
    achievement: 'First Client Project',
  },
  {
    year: '2013',
    title: 'AI Integration',
    description: 'Pioneered AI-powered workflows before it was mainstream. Built our first intelligent design system.',
    icon: Zap,
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    stat: '10+ Clients',
    achievement: 'AI Research Lab Established',
  },
  {
    year: '2016',
    title: 'Global Expansion',
    description: 'Expanded to 5 countries. Our team grew to 50+ creative minds working on cutting-edge projects.',
    icon: Globe,
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    stat: '50+ Team Members',
    achievement: 'International Offices',
  },
  {
    year: '2019',
    title: 'Industry Recognition',
    description: 'Won multiple awards for innovation. Featured in top tech publications. Built products for Fortune 500.',
    icon: Award,
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    stat: '15 Awards',
    achievement: 'Top 10 Digital Agency',
  },
  {
    year: '2022',
    title: 'Innovation at Scale',
    description: 'Launched AI-first design platform. Serving 1000+ clients globally with revolutionary solutions.',
    icon: TrendingUp,
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    stat: '1000+ Projects',
    achievement: 'AI Platform Launch',
  },
  {
    year: '2024',
    title: 'The Future',
    description: 'Building tomorrow\'s digital experiences today. Leading the next wave of AI-powered creativity.',
    icon: Rocket,
    color: BRAND_COLOR,
    gradient: BRAND_GRADIENT,
    stat: '15M+ Users',
    achievement: 'Shaping the Future',
  },
];

export function StorytellingJourney() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      className={`relative py-32 px-6 overflow-hidden transition-colors ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-white'
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="journeyGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path
                  d="M 50 0 L 0 0 0 50"
                  fill="none"
                  stroke={theme === 'dark' ? '#64748b' : '#94a3b8'}
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#journeyGrid)" />
          </svg>
        </div>

        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: `radial-gradient(circle, ${BRAND_COLOR}, transparent)` }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            className={`inline-flex items-center gap-3 px-6 py-3 mb-8 backdrop-blur-xl border-2 ${
              theme === 'dark'
                ? 'bg-indigo-500/10 border-indigo-500/30'
                : 'bg-indigo-100/50 border-indigo-300'
            }`}
            style={{ borderRadius: '3rem' }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Sparkles className={theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} />
            </motion.div>
            <span
              className={`tracking-widest uppercase ${
                theme === 'dark' ? 'text-indigo-300' : 'text-indigo-700'
              }`}
              style={{ fontSize: '0.875rem', fontWeight: '600' }}
            >
              Our Journey
            </span>
          </motion.div>

          <h2
            className={`mb-6 transition-colors ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}
            style={{ fontSize: '3.5rem', lineHeight: '1.2', fontWeight: '700' }}
          >
            A Story of{' '}
            <span className="bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500 bg-clip-text text-transparent">
              Innovation & Growth
            </span>
          </h2>

          <p
            className={`text-xl transition-colors max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            From a small startup to a global leader in digital innovation. This is our story.
          </p>
        </motion.div>

        {/* Animated path line */}
        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 hidden lg:block">
            <div
              className={`absolute inset-0 ${
                theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
              }`}
            />
            <motion.div
              className="absolute top-0 left-0 right-0 bg-gradient-to-b from-blue-500 via-blue-500 to-blue-500"
              style={{
                height: useTransform(smoothProgress, [0, 1], ['0%', '100%']),
                boxShadow: '0 0 20px rgba(78, 145, 255, 0.5)',
              }}
            />
          </div>

          {/* Journey steps */}
          <div className="space-y-32">
            {journeySteps.map((step, index) => (
              <JourneyStep
                key={step.year}
                step={step}
                index={index}
                totalSteps={journeySteps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneyStep({
  step,
  index,
  totalSteps,
}: {
  step: typeof journeySteps[0];
  index: number;
  totalSteps: number;
}) {
  const { theme } = useTheme();
  const isEven = index % 2 === 0;
  const stepRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stepRef,
    offset: ['start end', 'center center'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5], [isEven ? -100 : 100, 0]);

  return (
    <motion.div
      ref={stepRef}
      style={{ opacity, scale }}
      className="relative"
    >
      {/* Desktop layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        {/* Left side */}
        <motion.div
          style={{ x: isEven ? x : 0 }}
          className={`${isEven ? 'text-right' : 'order-2'}`}
        >
          <div className={`inline-block ${isEven ? '' : 'text-left'}`}>
            {/* Year badge */}
            <motion.div
              className={`inline-flex items-center gap-2 px-6 py-2 mb-6 backdrop-blur-xl border-2 ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border-slate-700'
                  : 'bg-white border-slate-200 shadow-lg'
              }`}
              style={{ borderRadius: '2rem' }}
              whileHover={{ scale: 1.05 }}
            >
              <span
                className={`text-2xl ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
                style={{ fontWeight: '700' }}
              >
                {step.year}
              </span>
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: step.color,
                  boxShadow: `0 0 10px ${step.color}`,
                }}
              />
            </motion.div>

            {/* Content card */}
            <motion.div
              className={`relative overflow-hidden backdrop-blur-2xl border-2 p-8 ${
                theme === 'dark'
                  ? 'bg-slate-900/80 border-slate-800'
                  : 'bg-white/80 border-slate-200 shadow-xl'
              }`}
              style={{ borderRadius: '2rem' }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow effect */}
              <div
                className="absolute top-0 right-0 w-32 h-32 blur-3xl opacity-30"
                style={{ background: step.color }}
              />

              <div className="relative z-10">
                <h3
                  className={`mb-4 ${
                    theme === 'dark' ? 'text-white' : 'text-slate-900'
                  }`}
                  style={{ fontSize: '2rem', fontWeight: '700' }}
                >
                  {step.title}
                </h3>

                <p
                  className={`mb-6 leading-relaxed ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                  }`}
                  style={{ fontSize: '1.125rem' }}
                >
                  {step.description}
                </p>

                {/* Stats */}
                <div className="flex gap-6">
                  <div>
                    <div
                      className={`text-sm uppercase tracking-wider mb-1 ${
                        theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                      }`}
                    >
                      Milestone
                    </div>
                    <div
                      className={`${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                      style={{ fontSize: '1.25rem', fontWeight: '600' }}
                    >
                      {step.stat}
                    </div>
                  </div>
                  <div>
                    <div
                      className={`text-sm uppercase tracking-wider mb-1 ${
                        theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                      }`}
                    >
                      Achievement
                    </div>
                    <div
                      className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                      style={{ fontSize: '1.25rem', fontWeight: '600' }}
                    >
                      {step.achievement}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Center icon (on the line) */}
        <motion.div
          style={{ x: isEven ? 0 : x }}
          className={`${isEven ? 'order-2' : ''} flex ${
            isEven ? 'justify-start' : 'justify-end'
          }`}
        >
          <motion.div
            className="absolute left-1/2 -translate-x-1/2"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Outer ring */}
              <motion.div
                className={`w-32 h-32 rounded-full border-4 flex items-center justify-center backdrop-blur-xl ${
                  theme === 'dark'
                    ? 'bg-slate-900/90 border-slate-800'
                    : 'bg-white border-slate-200 shadow-2xl'
                }`}
                animate={{
                  boxShadow: [
                    `0 0 20px ${step.color}40`,
                    `0 0 40px ${step.color}60`,
                    `0 0 20px ${step.color}40`,
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {/* Glowing orb */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-40"
                  style={{ background: step.color }}
                />

                {/* Icon */}
                <step.icon
                  className="w-12 h-12 relative z-10"
                  style={{ color: step.color }}
                />
              </motion.div>

              {/* Orbiting particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full -translate-x-1/2 -translate-y-1/2"
                  style={{
                    background: step.color,
                    boxShadow: `0 0 10px ${step.color}`,
                  }}
                  animate={{
                    x: [
                      Math.cos((i / 3) * Math.PI * 2) * 70,
                      Math.cos(((i / 3) * Math.PI * 2) + Math.PI * 2) * 70,
                    ],
                    y: [
                      Math.sin((i / 3) * Math.PI * 2) * 70,
                      Math.sin(((i / 3) * Math.PI * 2) + Math.PI * 2) * 70,
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: i * 0.3,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile layout */}
      <div className="lg:hidden">
        <motion.div
          style={{ opacity, scale }}
          className="relative"
        >
          {/* Year and icon */}
          <div className="flex items-center gap-6 mb-6">
            <motion.div
              className={`w-20 h-20 rounded-full border-4 flex items-center justify-center backdrop-blur-xl ${
                theme === 'dark'
                  ? 'bg-slate-900/90 border-slate-800'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              style={{
                boxShadow: `0 0 30px ${step.color}40`,
              }}
            >
              <step.icon className="w-8 h-8" style={{ color: step.color }} />
            </motion.div>

            <motion.div
              className={`flex items-center gap-3 px-5 py-2 backdrop-blur-xl border-2 ${
                theme === 'dark'
                  ? 'bg-slate-900/50 border-slate-700'
                  : 'bg-white border-slate-200 shadow-lg'
              }`}
              style={{ borderRadius: '2rem' }}
            >
              <span
                className={`text-xl ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
                style={{ fontWeight: '700' }}
              >
                {step.year}
              </span>
              <div
                className="w-2 h-2 rounded-full"
                style={{
                  background: step.color,
                  boxShadow: `0 0 8px ${step.color}`,
                }}
              />
            </motion.div>
          </div>

          {/* Content card */}
          <motion.div
            className={`relative overflow-hidden backdrop-blur-2xl border-2 p-6 ${
              theme === 'dark'
                ? 'bg-slate-900/80 border-slate-800'
                : 'bg-white/80 border-slate-200 shadow-xl'
            }`}
            style={{ borderRadius: '1.5rem' }}
            whileHover={{ y: -5 }}
          >
            <div
              className="absolute top-0 right-0 w-24 h-24 blur-2xl opacity-30"
              style={{ background: step.color }}
            />

            <div className="relative z-10">
              <h3
                className={`mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
                style={{ fontSize: '1.5rem', fontWeight: '700' }}
              >
                {step.title}
              </h3>

              <p
                className={`mb-4 leading-relaxed ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {step.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div
                    className={`text-xs uppercase tracking-wider mb-1 ${
                      theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                    }`}
                  >
                    Milestone
                  </div>
                  <div
                    className={`${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}
                    style={{ fontWeight: '600' }}
                  >
                    {step.stat}
                  </div>
                </div>
                <div>
                  <div
                    className={`text-xs uppercase tracking-wider mb-1 ${
                      theme === 'dark' ? 'text-slate-500' : 'text-slate-500'
                    }`}
                  >
                    Achievement
                  </div>
                  <div
                    className={`bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}
                    style={{ fontWeight: '600' }}
                  >
                    {step.achievement}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

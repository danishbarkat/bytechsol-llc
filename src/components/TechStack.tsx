import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Check, Sparkles, Code2, Cpu, Database, Cloud, Zap, Terminal, ChevronRight, Activity, Boxes } from 'lucide-react';
import { useState } from 'react';

const BRAND_COLOR = '#4e91ff';
const BRAND_RGB = '78, 145, 255';

const techCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    color: BRAND_COLOR,
    bgGradient: 'from-blue-500/20 to-blue-500/20',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion', 'Three.js'],
    description: 'Building beautiful, responsive interfaces',
    stats: { performance: 98, scalability: 95, reliability: 97 },
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    color: BRAND_COLOR,
    bgGradient: 'from-blue-500/20 to-blue-500/20',
    technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    description: 'Robust server-side architecture',
    stats: { performance: 96, scalability: 98, reliability: 99 },
  },
  {
    title: 'AI & Machine Learning',
    icon: Cpu,
    color: BRAND_COLOR,
    bgGradient: 'from-blue-500/20 to-blue-500/20',
    technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Anthropic', 'Hugging Face', 'LangChain'],
    description: 'Intelligent automation and insights',
    stats: { performance: 94, scalability: 92, reliability: 96 },
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    color: BRAND_COLOR,
    bgGradient: 'from-blue-500/20 to-blue-500/20',
    technologies: ['AWS', 'Google Cloud', 'Vercel', 'Docker', 'Kubernetes', 'Terraform'],
    description: 'Scalable cloud-native solutions',
    stats: { performance: 97, scalability: 99, reliability: 99 },
  },
];

const features = [
  'Cross-surface agent development',
  'Real-time collaboration tools',
  'AI-enhanced code generation',
  'Automated testing & deployment',
  'Performance monitoring',
  'Scalable architecture patterns',
];

export function TechStack() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(0);
  const active = techCategories[activeCategory];

  return (
    <section
      className={`relative py-32 px-6 overflow-hidden transition-colors ${
        theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
      }`}
    >
      {/* Scanline Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            rgba(${BRAND_RGB}, ${theme === 'dark' ? 0.25 : 0.2}) 0px,
            transparent 2px,
            transparent 4px
          )`,
        }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full"
            style={{
              background: theme === 'dark'
                ? 'linear-gradient(135deg, #1e293b, #0f172a)'
                : 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
              border: `2px solid ${theme === 'dark' ? '#334155' : '#cbd5e1'}`,
            }}
          >
            <Boxes className="w-5 h-5 brand-text" />
            <span className="brand-text text-sm tracking-[0.3em] uppercase" style={{ fontWeight: 700 }}>
              Technology Stack
            </span>
            <motion.div
              className="w-2 h-2 rounded-full brand-bg"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <h2
            className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
            style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1 }}
          >
            Built for Developers and Creatives
          </h2>

          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Our technology stack combines cutting-edge frameworks with proven tools
          </p>
        </motion.div>

        {/* Mission Control Layout */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16">
          {/* Left Sidebar - Category Selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-4"
          >
            {techCategories.map((category, index) => {
              const Icon = category.icon;
              const isActive = activeCategory === index;

              return (
                <motion.button
                  key={category.title}
                  onClick={() => setActiveCategory(index)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all relative overflow-hidden group ${
                    isActive
                      ? theme === 'dark'
                        ? 'bg-slate-900 border-slate-700'
                        : 'bg-white border-slate-300 shadow-lg'
                      : theme === 'dark'
                      ? 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    boxShadow: isActive ? `0 0 40px ${category.color}30` : 'none',
                  }}
                >
                  {/* Active Indicator Bar */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1"
                    style={{ background: category.color }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Glow Effect */}
                  {isActive && (
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: `radial-gradient(circle at 0% 50%, ${category.color}, transparent 70%)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.2 }}
                    />
                  )}

                  <div className="flex items-center gap-4 relative z-10">
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isActive
                          ? `${category.color}30`
                          : theme === 'dark'
                          ? '#1e293b'
                          : '#f1f5f9',
                        border: `2px solid ${isActive ? category.color : 'transparent'}`,
                        boxShadow: isActive ? `0 0 20px ${category.color}40` : 'none',
                      }}
                    >
                      <Icon
                        className="w-7 h-7"
                        style={{
                          color: isActive ? category.color : theme === 'dark' ? '#64748b' : '#94a3b8',
                        }}
                      />
                    </div>

                    <div className="flex-1">
                      <h3
                        className={`mb-1 transition-colors ${
                          isActive
                            ? theme === 'dark'
                              ? 'text-white'
                              : 'text-slate-900'
                            : theme === 'dark'
                            ? 'text-slate-400'
                            : 'text-slate-600'
                        }`}
                        style={{ fontSize: '1.125rem', fontWeight: 700 }}
                      >
                        {category.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          isActive
                            ? theme === 'dark'
                              ? 'text-slate-400'
                              : 'text-slate-600'
                            : theme === 'dark'
                            ? 'text-slate-600'
                            : 'text-slate-500'
                        }`}
                      >
                        {category.description}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 transition-all ${
                        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                      }`}
                      style={{ color: category.color }}
                    />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right - Main Display Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 50, rotateY: -10 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -50, rotateY: 10 }}
                transition={{ duration: 0.5, type: 'spring' }}
                className={`relative rounded-3xl border-2 p-10 overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200 shadow-2xl'
                }`}
                style={{
                  boxShadow: `0 20px 60px ${active.color}20`,
                  perspective: '1000px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Terminal Header Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-12 flex items-center px-6 gap-2 border-b"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(180deg, #1e293b, #0f172a)'
                      : 'linear-gradient(180deg, #f1f5f9, #e2e8f0)',
                    borderColor: theme === 'dark' ? '#334155' : '#cbd5e1',
                  }}
                >
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <Terminal className="w-4 h-4 ml-4" style={{ color: active.color }} />
                  <span
                    className={`text-sm ml-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                    style={{ fontFamily: 'monospace', fontWeight: 600 }}
                  >
                    {active.title.toLowerCase().replace(/ /g, '-')}
                  </span>
                </div>

                <div className="pt-10">
                  {/* Title Section */}
                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${active.color}30, ${active.color}10)`,
                          border: `2px solid ${active.color}`,
                          boxShadow: `0 0 30px ${active.color}40`,
                        }}
                      >
                        <active.icon className="w-10 h-10" style={{ color: active.color }} />
                      </div>

                      <div>
                        <h3
                          className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
                          style={{ fontSize: '2rem', fontWeight: 800 }}
                        >
                          {active.title}
                        </h3>
                        <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                          {active.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Performance Stats */}
                  <motion.div
                    className="mb-8 grid grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {Object.entries(active.stats).map(([key, value], index) => (
                      <div
                        key={key}
                        className={`p-4 rounded-xl border ${
                          theme === 'dark'
                            ? 'bg-slate-800/50 border-slate-700'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Activity className="w-4 h-4" style={{ color: active.color }} />
                          <span
                            className={`text-xs uppercase tracking-wider ${
                              theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
                            }`}
                            style={{ fontWeight: 700 }}
                          >
                            {key}
                          </span>
                        </div>
                        <div className="flex items-end gap-2">
                          <span
                            className={theme === 'dark' ? 'text-white' : 'text-slate-900'}
                            style={{ fontSize: '2rem', fontWeight: 800, lineHeight: 1 }}
                          >
                            {value}
                          </span>
                          <span className={`text-sm mb-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                            %
                          </span>
                        </div>
                        {/* Progress Bar */}
                        <div
                          className="mt-2 h-1.5 rounded-full overflow-hidden"
                          style={{
                            background: theme === 'dark' ? '#1e293b' : '#e2e8f0',
                          }}
                        >
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: active.color,
                              boxShadow: `0 0 10px ${active.color}`,
                            }}
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Technologies Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4
                      className={`mb-4 flex items-center gap-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
                      style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em' }}
                    >
                      <span style={{ color: active.color }}>▸</span> TECHNOLOGIES
                    </h4>

                    <div className="grid grid-cols-3 gap-3">
                      {active.technologies.map((tech, index) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.05 }}
                          whileHover={{ scale: 1.05, y: -3 }}
                          className={`relative p-4 rounded-xl border-2 text-center cursor-pointer group overflow-hidden ${
                            theme === 'dark'
                              ? 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
                              : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                          }`}
                          style={{
                            transition: 'all 0.3s',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = active.color;
                            e.currentTarget.style.boxShadow = `0 0 20px ${active.color}30`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = theme === 'dark' ? '#334155' : '#e2e8f0';
                            e.currentTarget.style.boxShadow = 'none';
                          }}
                        >
                          {/* Hover Glow */}
                          <motion.div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{
                              background: `linear-gradient(135deg, ${active.color}10, transparent)`,
                            }}
                          />

                          <span
                            className={`relative z-10 block ${
                              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                            }`}
                            style={{ fontWeight: 600 }}
                          >
                            {tech}
                          </span>

                          {/* Corner Accent */}
                          <div
                            className="absolute top-0 right-0 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                            style={{
                              background: active.color,
                              clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                            }}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Command Line Output Effect */}
                  <motion.div
                    className={`mt-8 p-4 rounded-xl font-mono text-sm ${
                      theme === 'dark' ? 'bg-slate-950 text-green-400' : 'bg-slate-900 text-green-300'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span style={{ color: active.color }}>$</span>
                      <span>
                        npm install {active.title.toLowerCase().split(' ')[0]}-stack
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 1, delay: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      <span>Installation complete</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Corner Decorations */}
                <div
                  className="absolute bottom-0 right-0 w-40 h-40 opacity-10 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at bottom right, ${active.color}, transparent 70%)`,
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Features List - Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Title Section */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-3 mb-4 px-6 py-3 rounded-full"
              style={{
                background: theme === 'dark'
                  ? 'linear-gradient(135deg, #1e293b, #0f172a)'
                  : 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
                border: `2px solid ${theme === 'dark' ? '#334155' : '#cbd5e1'}`,
              }}
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 text-sm tracking-[0.3em] uppercase" style={{ fontWeight: 700 }}>
                Platform Features
              </span>
            </motion.div>

            <h3
              className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
              style={{ fontSize: '2.5rem', fontWeight: 800 }}
            >
              AI-Enhanced Development Platform
            </h3>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Our agentic development platform provides AI-enhanced workflows that reduce
              complexity and accelerate time-to-market
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const isLarge = index === 0 || index === 3;
              const colors = [BRAND_COLOR];
              const featureColor = colors[index];

              return (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                  transition={{ delay: index * 0.1, type: 'spring' }}
                  viewport={{ once: true }}
                  className={`relative group cursor-pointer ${
                    isLarge ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
                  style={{ perspective: '1000px' }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Card */}
                  <div
                    className={`relative h-full rounded-2xl border-2 p-8 overflow-hidden transition-all ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-200'
                    }`}
                    style={{
                      minHeight: isLarge ? '200px' : '180px',
                      transformStyle: 'preserve-3d',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = featureColor;
                      e.currentTarget.style.boxShadow = `0 20px 60px ${featureColor}30`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = theme === 'dark' ? '#1e293b' : '#e2e8f0';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Animated Gradient Background */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${featureColor}15, transparent)`,
                      }}
                    />

                    {/* Floating Particles */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 rounded-full opacity-0 group-hover:opacity-60"
                        style={{
                          background: featureColor,
                          left: `${20 + i * 15}%`,
                          top: `${30 + i * 10}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{
                          duration: 2 + i * 0.3,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}

                    {/* Number Badge */}
                    <motion.div
                      className="absolute top-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${featureColor}20`,
                        border: `2px solid ${featureColor}40`,
                      }}
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <span
                        className="text-xl"
                        style={{ color: featureColor, fontWeight: 800 }}
                      >
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="mb-4 relative z-10"
                      animate={{
                        rotateY: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${featureColor}30, ${featureColor}10)`,
                          border: `2px solid ${featureColor}`,
                          boxShadow: `0 0 20px ${featureColor}30`,
                        }}
                      >
                        <Check
                          className="w-8 h-8"
                          style={{ color: featureColor }}
                        />
                      </div>
                    </motion.div>

                    {/* Feature Text */}
                    <h4
                      className={`mb-3 relative z-10 ${
                        theme === 'dark' ? 'text-white' : 'text-slate-900'
                      }`}
                      style={{ fontSize: '1.25rem', fontWeight: 700 }}
                    >
                      {feature}
                    </h4>

                    {/* Description (for large cards) */}
                    {isLarge && (
                      <p
                        className={`text-sm relative z-10 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {index === 0
                          ? 'Build intelligent applications that work seamlessly across multiple platforms and devices with our unified development framework.'
                          : 'Deploy with confidence using our automated testing suite and continuous deployment pipeline that ensures quality at every stage.'}
                      </p>
                    )}

                    {/* Progress Bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden"
                      style={{
                        background: theme === 'dark' ? '#0f172a' : '#f1f5f9',
                      }}
                    >
                      <motion.div
                        className="h-full"
                        style={{
                          background: featureColor,
                          boxShadow: `0 0 10px ${featureColor}`,
                        }}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>

                    {/* Corner Accent */}
                    <div
                      className="absolute bottom-0 right-0 w-20 h-20 opacity-10 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at bottom right, ${featureColor}, transparent 70%)`,
                      }}
                    />

                    {/* Scan Line Effect */}
                    <motion.div
                      className="absolute left-0 right-0 h-px opacity-0 group-hover:opacity-30"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${featureColor}, transparent)`,
                      }}
                      animate={{
                        top: ['0%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <motion.a
              href="#"
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-full relative overflow-hidden group ${
                theme === 'dark'
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
              style={{
                boxShadow: '0 10px 40px rgba(78, 145, 255, 0.25)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 60px rgba(78, 145, 255, 0.35)' }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />

              <span className="text-white relative z-10" style={{ fontSize: '1.125rem', fontWeight: 700 }}>
                Explore Our Platform
              </span>
              <Sparkles className="w-5 h-5 text-white relative z-10" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

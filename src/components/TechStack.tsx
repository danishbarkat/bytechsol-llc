import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Check, Sparkles, Code2, Cpu, Database, Cloud, Zap, Terminal, ChevronRight, Activity, Boxes, Smartphone, GitBranch, Layers, Users, ArrowRight } from 'lucide-react';
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
  {
    title: 'Cross-surface agent development',
    description: 'Build intelligent applications that work seamlessly across multiple platforms and devices with our unified development framework.',
    icon: Smartphone,
    color: '#4e91ff',
    size: 'large'
  },
  {
    title: 'Real-time collaboration tools',
    description: 'Sync changes instantly across your team with built-in presence and conflict resolution.',
    icon: Users,
    color: '#a855f7',
    size: 'small'
  },
  {
    title: 'AI-enhanced code generation',
    description: 'Accelerate development with agentic coding assistants that understand your architecture.',
    icon: Sparkles,
    color: '#ec4899',
    size: 'small'
  },
  {
    title: 'Automated testing & deployment',
    description: 'Deploy with confidence using our automated testing suite and continuous deployment pipeline that ensures quality at every stage.',
    icon: GitBranch,
    color: '#22c55e',
    size: 'large'
  },
  {
    title: 'Performance monitoring',
    description: 'Real-time insights into system health and user experience with predictive alerts.',
    icon: Activity,
    color: '#f97316',
    size: 'small'
  },
  {
    title: 'Scalable architecture patterns',
    description: 'Modular designs that grow with your user base, built on industry-standard microservices.',
    icon: Layers,
    color: '#06b6d4',
    size: 'small'
  },
];

export function TechStack() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(0);
  const active = techCategories[activeCategory];

  return (
    <section
      className={`relative py-32 px-6 overflow-hidden transition-colors ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'
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
            Technology Stack for ERP, AI &amp; Scalable Apps
          </h2>

          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            We combine modern frameworks, cloud infrastructure, data platforms, and automation tooling to support ERP,
            AI, and custom digital products.
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
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all relative overflow-hidden group ${isActive
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
                        className={`mb-1 transition-colors ${isActive
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
                        className={`text-sm ${isActive
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
                      className={`w-5 h-5 transition-all ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
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
                className={`relative rounded-3xl border-2 p-10 overflow-hidden ${theme === 'dark'
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
                        className={`p-4 rounded-xl border ${theme === 'dark'
                          ? 'bg-slate-800/50 border-slate-700'
                          : 'bg-slate-50 border-slate-200'
                          }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <Activity className="w-4 h-4" style={{ color: active.color }} />
                          <span
                            className={`text-xs uppercase tracking-wider ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
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
                          className={`relative p-4 rounded-xl border-2 text-center cursor-pointer group overflow-hidden ${theme === 'dark'
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
                            className={`relative z-10 block ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
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
                    className={`mt-8 p-4 rounded-xl font-mono text-sm ${theme === 'dark' ? 'bg-slate-950 text-green-400' : 'bg-slate-900 text-green-300'
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

        {/* AI-Native Development Core - Technical Module Layout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-32 relative"
        >
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{
                background: 'rgba(78, 145, 255, 0.1)',
                border: '1px solid rgba(78, 145, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-[10px] font-bold uppercase tracking-[0.4em]">Next-Gen Infrastructure</span>
            </motion.div>

            <h2 className={`mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`} style={{ fontSize: '3.5rem', fontWeight: 800 }}>
              AI-Native <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Development Core</span>
            </h2>
            <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              A unified intelligence layer that scales your development velocity with agentic automation and production-ready architecture.
            </p>
          </div>

          {/* Technical Modular Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {/* Background Connection Lines (Subtle) */}
            <div className={`absolute inset-0 -z-10 opacity-[0.05] ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
              <svg width="100%" height="100%" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 100L400 400M400 400L800 100M400 400L400 700M400 400L800 700M800 100L1100 400M800 700L1100 400" stroke="currentColor" strokeWidth="1" strokeDasharray="10 10" />
                <circle cx="400" cy="400" r="4" fill="currentColor" />
                <circle cx="800" cy="100" r="4" fill="currentColor" />
                <circle cx="800" cy="700" r="4" fill="currentColor" />
              </svg>
            </div>

            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div
                    className={`h-full rounded-[2rem] border p-8 transition-all duration-700 relative overflow-hidden backdrop-blur-sm ${theme === 'dark'
                      ? 'bg-slate-900/60 border-white/5 hover:border-blue-500/40'
                      : 'bg-white border-slate-200/60 hover:border-blue-400 hover:shadow-[0_30px_60px_-15px_rgba(78,145,255,0.15)]'
                      }`}
                  >
                    {/* Glowing Mesh Gradient (Visible on Hover) */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10"
                      style={{
                        background: `radial-gradient(circle at 0% 0%, ${feature.color}15 0%, transparent 70%)`
                      }}
                    />

                    {/* Module ID Decal */}
                    <div className="flex justify-between items-center mb-10">
                      <div
                        className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] border"
                        style={{
                          color: feature.color,
                          borderColor: `${feature.color}30`,
                          background: `${feature.color}05`
                        }}
                      >
                        CORE_MODULE_0{index + 1}
                      </div>
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: feature.color }} />
                    </div>

                    {/* Icon & Content */}
                    <div className="relative mb-8">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                        style={{
                          background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}05)`,
                          border: `1px solid ${feature.color}30`,
                          boxShadow: `0 10px 20px -10px ${feature.color}40`
                        }}
                      >
                        <Icon className="w-8 h-8" style={{ color: feature.color }} />
                      </div>
                      {/* Aura effect behind icon on hover */}
                      <div
                        className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10"
                        style={{ background: feature.color }}
                      />
                    </div>

                    <h4 className={`text-2xl font-bold mb-4 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {feature.title}
                    </h4>
                    <p className={`text-base leading-relaxed mb-6 flex-grow ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {feature.description}
                    </p>

                    {/* Progress Indicator */}
                    <div className="mt-auto flex items-center gap-3">
                      <div className="flex-1 h-[2px] bg-slate-500/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: 0.5 }}
                          style={{ background: feature.color }}
                        />
                      </div>
                      <span className="text-[10px] font-mono font-bold opacity-40 uppercase tracking-widest">Active</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

// --- Helper Components & Utils ---

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ?
    `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
    '255, 255, 255';
}

function TiltCard({ children, color, theme }: { children: React.ReactNode, color: string, theme: string }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`relative h-full rounded-[2.5rem] border-2 transition-all duration-200 overflow-hidden ${theme === 'dark'
        ? 'bg-slate-900 border-slate-800'
        : 'bg-white border-slate-200'
        }`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        boxShadow: rotate.x !== 0 ? `0 20px 50px ${color}20` : 'none',
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Background Glow that follows mouse */}
      <motion.div
        className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${color}10 0%, transparent 70%)`,
        }}
      />
      {children}
    </motion.div>
  );
}

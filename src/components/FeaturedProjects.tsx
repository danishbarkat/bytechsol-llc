import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from './ThemeContext';

const projects = [
  {
    id: 1,
    title: 'Bellroy',
    description: 'Premium carry goods e-commerce experience.',
    image: '/assets/portfolio/custom-web-solution/bellroy.png',
    tag: 'E-commerce'
  },
  {
    id: 2,
    title: 'LuxeDH',
    description: 'Luxury designer handbags and accessories.',
    image: '/assets/portfolio/shopify/luxedh.png',
    tag: 'Shopify'
  },
  {
    id: 3,
    title: 'Ledger',
    description: 'Secure hardware wallet solutions for crypto.',
    image: '/assets/portfolio/wordpress/ledger.jpg',
    tag: 'WordPress'
  },
  {
    id: 4,
    title: 'CORE Survival',
    description: 'Tactical lighting systems.',
    image: '/assets/portfolio/squarespace/coresurvival.jpg',
    tag: 'Squarespace'
  },
  {
    id: 5,
    title: 'Hair Cuttery',
    description: 'Full-service hair salon chain website.',
    image: '/assets/portfolio/wordpress/haircuttery.jpg',
    tag: 'WordPress'
  },
  {
    id: 6,
    title: 'PetLab Co.',
    description: 'Leading pet health and wellness brand.',
    image: '/assets/portfolio/custom-web-solution/petlabco.png',
    tag: 'E-commerce'
  },
];

export function FeaturedProjects() {
  const { theme } = useTheme();

  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Decorative Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 relative"
        >
          <div className="flex items-center gap-8">
            <h2 className={`text-5xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Featured projects &amp; results
            </h2>

            {/* Decorative Lines */}
            <div className="flex-1 relative h-20 overflow-hidden opacity-20">
              <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 400 80">
                {/* Random decorative lines */}
                <path d="M0,40 Q50,20 100,40 T200,40" stroke={theme === 'dark' ? '#94a3b8' : '#475569'} strokeWidth="1" fill="none" />
                <path d="M50,60 L150,10" stroke={theme === 'dark' ? '#94a3b8' : '#475569'} strokeWidth="1" fill="none" />
                <circle cx="200" cy="40" r="3" fill={theme === 'dark' ? '#94a3b8' : '#475569'} />
                <path d="M220,30 L250,50" stroke={theme === 'dark' ? '#94a3b8' : '#475569'} strokeWidth="1" fill="none" />
                <circle cx="270" cy="40" r="2" fill={theme === 'dark' ? '#94a3b8' : '#475569'} />
              </svg>
            </div>
          </div>
          <p className={`mt-6 max-w-2xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Recent work across web, mobile, ecommerce, and AI-driven products built for speed and measurable impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative flex flex-col h-[520px] overflow-hidden rounded-[4.5rem] transition-all duration-500 ${theme === 'dark'
                ? 'bg-[#0F172A] border border-white/5 hover:border-brand/40 shadow-2xl'
                : 'bg-white border-2 border-slate-100 hover:border-brand-primary/40 shadow-xl'
                }`}
            >
              {/* Image Area - Immersive & Large */}
              <div className="relative flex-1 overflow-hidden p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-50" />
                <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-110 flex items-center justify-center rounded-[3.5rem] overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Tag Capsule - Synced with Arrow Color & Better Spacing */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="brand-bg backdrop-blur-md text-white text-[9px] font-bold px-5 py-2 rounded-full uppercase tracking-[0.2em] shadow-lg border border-white/20">
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Info Area - Glassmorphism Footer */}
              <div className={`relative p-10 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900/40 border-t border-white/5' : 'bg-slate-50/50 border-t border-slate-100'
                }`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm leading-relaxed line-clamp-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      {project.description}
                    </p>
                  </div>

                  {/* Action Button - Synced with Capsule Color */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full brand-bg text-white flex items-center justify-center shadow-lg shadow-brand/20 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Background Glow Effect */}
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

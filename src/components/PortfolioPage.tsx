import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Star } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CTASection } from './CTASection';

// Enhanced project data with categories
const projects = [
  {
    id: 1,
    title: 'The Pet\'s Report App',
    description: 'AI-powered pet health monitoring and diagnostics system.',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MDEzMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['AI', 'Mobile', 'Healthcare']
  },
  {
    id: 2,
    title: 'Wallai Zen',
    description: 'A comprehensive digital product for meditation and mindfulness.',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwYXBwfGVufDB8fHx8MTczNTE1MDA1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Wellness', 'React', 'UX/UI']
  },
  {
    id: 3,
    title: 'Dualizer',
    description: 'Next-generation banking planner app with predictive AI insights.',
    category: 'Fintech',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDB8fHx8MTczNTE1MDA1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Finance', 'Mobile', 'Security']
  },
  {
    id: 4,
    title: 'Mugera',
    description: 'The admirable nest for building independent spaces in the Metaverse.',
    category: 'Web3',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzM1MTUwMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Metaverse', '3D', 'Community']
  },
  {
    id: 5,
    title: 'Neyabit',
    description: 'Official website of Neyabit, leading the Grand Analysis Center.',
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTczNTE1MDA1MHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Analytics', 'Corporate', 'Web']
  },
  {
    id: 6,
    title: 'Mnemonic',
    description: 'High-conversion e-commerce platform with AI recommendations.',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBhcHB8ZW58MHx8fHwxNzM1MTUwMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Retail', 'AI', 'Platform']
  },
];

const categories = ['All', 'App Development', 'Web Design', 'Fintech', 'Web3', 'Enterprise', 'E-Commerce'];
const allCategory = categories[0];

export function PortfolioPage() {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState(allCategory);

  const filteredProjects = activeCategory === allCategory
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'bg-black text-white' : 'bg-slate-50 text-slate-900'}`}>

      {/* Hero Section */}
      <section className="relative pt-48 md:pt-52 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center z-10 relative">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-8"
          >
            <span className={`
              inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border
              ${theme === 'dark'
                ? 'bg-slate-900 border-slate-800 text-blue-400'
                : 'bg-white border-slate-200 text-blue-600'}
            `}>
              <Star className="w-3 h-3 fill-current" />
              Impactful Deliverables
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className={`text-5xl md:text-7xl lg:text-8xl font-medium mb-6 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            Selected Works
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}
            style={{ fontFamily: '"Times New Roman", Times, serif' }}
          >
            A curated showcase of engineering excellence, where scalable data systems meet immersive digital experiences.
          </motion.p>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeCategory === cat
                    ? 'bg-blue-600 text-white'
                    : theme === 'dark'
                      ? 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'}
                `}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={project.id}
                  className="group flex flex-col h-full cursor-pointer rounded-2xl overflow-hidden p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 brand-bg"
                >
                  {/* Card Image */}
                  <div className="relative h-64 rounded-xl overflow-hidden mb-4 bg-slate-800">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Category Overlay Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-slate-900/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-grow px-2 pb-2">
                    <h3 className="text-2xl font-serif font-medium mb-2 text-white" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                      {project.title}
                    </h3>

                    <p className="font-serif text-sm leading-relaxed mb-6 line-clamp-2 text-blue-100" style={{ fontFamily: '"Times New Roman", Times, serif' }}>
                      {project.description}
                    </p>

                    <div className="mt-auto flex justify-between items-center border-t border-white/20 pt-4">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
                        <span className="text-[10px] uppercase tracking-widest text-blue-100">
                          {project.tags[0]}
                        </span>
                      </div>

                      <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-blue-600 group-hover:border-white">
                        <ArrowUpRight className="w-4 h-4 text-white group-hover:text-blue-600" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}

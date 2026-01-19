import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useTheme } from './ThemeContext';

const projects = [
  {
    id: 1,
    title: 'The Pet\'s Report App',
    description: 'AI-powered pet health monitoring',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MDEzMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Wallai Zen',
    description: 'A digital product for meditation and mindfulness',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwYXBwfGVufDB8fHx8MTczNTE1MDA1MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Dualizer',
    description: 'Banking planner app with AI insights',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBiYW5raW5nJTIwYXBwfGVufDB8fHx8MTczNTE1MDA1MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Mugera',
    description: 'The admirable nest for building in the Metaverse',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmV8ZW58MHx8fHwxNzM1MTUwMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Neyabit',
    description: 'Official website of Neyabit, Grand Analysis Center',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDB8fHx8MTczNTE1MDA1MHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Mnemonic',
    description: 'Awesome e-commerce platform with AI recommendations',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBhcHB8ZW58MHx8fHwxNzM1MTUwMDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 - The Pet's Report App - Large Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:row-span-2 group cursor-pointer"
          >
            <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent' 
                  : 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent'
              }`} />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-white text-2xl mb-2">{projects[0].title}</h3>
                <p className="text-slate-300 text-sm mb-4">{projects[0].description}</p>
                
                {/* Arrow Button */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-slate-900 transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 2 - Wallai Zen - Wide Top Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group cursor-pointer"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={projects[1].image}
                alt={projects[1].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent' 
                  : 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent'
              }`} />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl mb-1">{projects[1].title}</h3>
                <p className="text-slate-300 text-sm">{projects[1].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Project 3 - Dualizer - Medium */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={projects[2].image}
                alt={projects[2].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent' 
                  : 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent'
              }`} />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl mb-1">{projects[2].title}</h3>
                <p className="text-slate-300 text-sm">{projects[2].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Project 4 - Mugera - Tall Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={projects[3].image}
                alt={projects[3].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent' 
                  : 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent'
              }`} />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl mb-1">{projects[3].title}</h3>
                <p className="text-slate-300 text-sm">{projects[3].description}</p>
                
                {/* Arrow Button */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-300 mt-3">
                  <ArrowUpRight className="w-5 h-5 text-white group-hover:text-slate-900 transition-colors" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Project 5 - Neyabit */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={projects[4].image}
                alt={projects[4].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent' 
                  : 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent'
              }`} />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl mb-1">{projects[4].title}</h3>
                <p className="text-slate-300 text-sm">{projects[4].description}</p>
              </div>
            </div>
          </motion.div>

          {/* Project 6 - Mnemonic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-2xl">
              <ImageWithFallback
                src={projects[5].image}
                alt={projects[5].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                theme === 'dark' 
                  ? 'bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent' 
                  : 'bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent'
              }`} />
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white text-xl mb-1">{projects[5].title}</h3>
                <p className="text-slate-300 text-sm">{projects[5].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

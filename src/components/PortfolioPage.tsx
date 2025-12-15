import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { 
  ExternalLink,
  Github,
  Sparkles,
  ArrowRight,
  Code,
  Smartphone,
  ShoppingCart,
  Brain,
  Database,
  Globe
} from 'lucide-react';

export function PortfolioPage() {
  const { theme } = useTheme();

  const projects = [
    {
      title: 'FinTech Pro',
      category: 'Web Application',
      description: 'AI-powered financial analytics platform with real-time market insights and predictive modeling.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['React', 'Node.js', 'AI/ML', 'TypeScript'],
      gradient: 'from-purple-600 to-pink-600',
      icon: Brain,
      stats: { users: '50K+', rating: '4.9/5' }
    },
    {
      title: 'ShopFlow',
      category: 'E-Commerce',
      description: 'Complete e-commerce solution with advanced inventory management and multi-vendor support.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800',
      tags: ['Next.js', 'Stripe', 'MongoDB', 'Redis'],
      gradient: 'from-blue-600 to-cyan-600',
      icon: ShoppingCart,
      stats: { sales: '$2M+', orders: '100K+' }
    },
    {
      title: 'HealthHub',
      category: 'Mobile App',
      description: 'Comprehensive healthcare app connecting patients with doctors for virtual consultations.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      tags: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      gradient: 'from-emerald-600 to-teal-600',
      icon: Smartphone,
      stats: { downloads: '200K+', doctors: '5K+' }
    },
    {
      title: 'ERP Master',
      category: 'Enterprise Software',
      description: 'Full-featured ERP system for manufacturing with supply chain and production planning.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      tags: ['Odoo', 'Python', 'PostgreSQL', 'Docker'],
      gradient: 'from-orange-600 to-red-600',
      icon: Database,
      stats: { companies: '150+', modules: '20+' }
    },
    {
      title: 'AI Content Studio',
      category: 'AI Platform',
      description: 'Advanced AI content generation platform with multi-language support and SEO optimization.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      tags: ['OpenAI', 'Python', 'FastAPI', 'Vue.js'],
      gradient: 'from-violet-600 to-purple-600',
      icon: Brain,
      stats: { content: '1M+', languages: '30+' }
    },
    {
      title: 'TravelConnect',
      category: 'Web Platform',
      description: 'Travel booking platform with AI-powered recommendations and dynamic pricing.',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
      tags: ['React', 'GraphQL', 'Nest.js', 'AWS'],
      gradient: 'from-cyan-600 to-blue-600',
      icon: Globe,
      stats: { bookings: '500K+', destinations: '150+' }
    },
    {
      title: 'CodeCollab',
      category: 'Developer Tool',
      description: 'Real-time collaborative coding platform with AI-powered code suggestions.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
      tags: ['WebSocket', 'Monaco', 'Express', 'Docker'],
      gradient: 'from-pink-600 to-rose-600',
      icon: Code,
      stats: { developers: '100K+', projects: '50K+' }
    },
    {
      title: 'FitTrack Pro',
      category: 'Mobile App',
      description: 'Fitness tracking app with personalized workout plans and nutrition guidance.',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800',
      tags: ['Flutter', 'Firebase', 'TensorFlow', 'Stripe'],
      gradient: 'from-green-600 to-emerald-600',
      icon: Smartphone,
      stats: { workouts: '1M+', users: '300K+' }
    },
    {
      title: 'SmartHome Hub',
      category: 'IoT Platform',
      description: 'Unified smart home control platform with voice assistant integration.',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800',
      tags: ['IoT', 'Node.js', 'MQTT', 'React'],
      gradient: 'from-indigo-600 to-blue-600',
      icon: Database,
      stats: { devices: '50K+', homes: '10K+' }
    },
  ];

  const categories = ['All', 'Web Application', 'E-Commerce', 'Mobile App', 'Enterprise Software', 'AI Platform'];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className={`text-sm tracking-wider uppercase ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
              Our Portfolio
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Transforming Ideas into{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Digital Reality
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl max-w-3xl mx-auto mb-12 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            Explore our diverse portfolio of successful projects across web, mobile, AI, and enterprise solutions.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {[
              { label: 'Projects Delivered', value: '150+' },
              { label: 'Happy Clients', value: '100+' },
              { label: 'Success Rate', value: '98%' },
              { label: 'Total Users', value: '2M+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const ProjectIcon = project.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative"
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
                  />
                  
                  <div
                    className={`relative h-full rounded-2xl border overflow-hidden transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800 group-hover:bg-slate-900'
                        : 'bg-white/90 backdrop-blur-xl border-slate-200 group-hover:bg-white'
                    }`}
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`} />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center`}>
                          <ProjectIcon className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Category */}
                      <div className={`inline-block px-3 py-1 rounded-full text-xs mb-3 bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </div>

                      {/* Title */}
                      <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className={`mb-4 text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {project.description}
                      </p>

                      {/* Stats */}
                      <div className={`flex items-center gap-4 text-xs mb-4 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                        {Object.entries(project.stats).map(([key, value], i) => (
                          <span key={i}>
                            <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                              {value}
                            </span> {key}
                          </span>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2 py-1 rounded text-xs ${
                              theme === 'dark'
                                ? 'bg-slate-800 text-slate-400'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-3">
                        <button
                          className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                            theme === 'dark'
                              ? 'bg-slate-800 hover:bg-slate-700 text-white'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
                          }`}
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Case Study
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-3xl p-12 text-center ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 border border-slate-800'
                : 'bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-cyan-100/50 border border-slate-200'
            }`}
          >
            <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Ready to Start Your Project?
            </h2>
            <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              Let's create the next success story together
            </p>
            <a
              href="mailto:contact@bytechsol.com"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

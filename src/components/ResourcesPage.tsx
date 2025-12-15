import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { 
  BookOpen, 
  FileText, 
  Code, 
  HelpCircle,
  ArrowRight,
  Sparkles,
  Clock,
  TrendingUp,
  Zap,
  Layers,
  Database,
  MessageCircle
} from 'lucide-react';

export function ResourcesPage() {
  const { theme } = useTheme();

  const resources = [
    {
      icon: BookOpen,
      title: 'Blog',
      description: 'Insights, tutorials, and industry trends from our experts',
      gradient: 'from-purple-600 to-violet-600',
      posts: '50+ Articles',
      link: '#/resources/blog',
      items: [
        'Latest Tech Trends',
        'Development Tutorials',
        'Industry Insights',
        'Case Studies'
      ]
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Real-world success stories from our client projects',
      gradient: 'from-blue-600 to-cyan-600',
      posts: '25+ Studies',
      link: '#/resources/case-studies',
      items: [
        'E-Commerce Success',
        'AI Implementation',
        'ERP Transformations',
        'Mobile App Launches'
      ]
    },
    {
      icon: FileText,
      title: 'White Papers',
      description: 'In-depth research and analysis on emerging technologies',
      gradient: 'from-emerald-600 to-teal-600',
      posts: '15+ Papers',
      link: '#/resources/white-papers',
      items: [
        'AI in Business',
        'Cloud Architecture',
        'Security Best Practices',
        'Digital Transformation'
      ]
    },
    {
      icon: Layers,
      title: 'Design System',
      description: 'Our comprehensive design system and component library',
      gradient: 'from-pink-600 to-rose-600',
      posts: '100+ Components',
      link: '#/resources/design-system',
      items: [
        'UI Components',
        'Design Tokens',
        'Brand Guidelines',
        'Icon Library'
      ]
    },
    {
      icon: Code,
      title: 'API Documentation',
      description: 'Complete API references and integration guides',
      gradient: 'from-orange-600 to-amber-600',
      posts: '30+ Endpoints',
      link: '#/resources/api-docs',
      items: [
        'REST API Reference',
        'Authentication',
        'Code Examples',
        'SDKs & Libraries'
      ]
    },
    {
      icon: HelpCircle,
      title: 'Help Center',
      description: 'FAQs, guides, and support documentation',
      gradient: 'from-cyan-600 to-blue-600',
      posts: '200+ Articles',
      link: '#/resources/help-center',
      items: [
        'Getting Started',
        'Troubleshooting',
        'Best Practices',
        'Video Tutorials'
      ]
    },
  ];

  const featuredContent = [
    {
      type: 'Blog Post',
      title: 'The Future of AI in Web Development',
      date: 'December 10, 2024',
      readTime: '8 min read',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      type: 'Case Study',
      title: 'How We Scaled an E-Commerce Platform to 1M Users',
      date: 'December 5, 2024',
      readTime: '12 min read',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      type: 'White Paper',
      title: 'Comprehensive Guide to Modern ERP Systems',
      date: 'November 28, 2024',
      readTime: '25 min read',
      gradient: 'from-emerald-600 to-teal-600',
    },
  ];

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
              Resources
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Knowledge Hub &{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Learning Center
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
          >
            Explore our comprehensive collection of guides, documentation, case studies, and insights to help you succeed.
          </motion.p>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Featured Content
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {featuredContent.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative cursor-pointer"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${content.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
                />
                <div
                  className={`relative h-full p-8 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                      : 'bg-white/90 backdrop-blur-xl border-slate-200'
                  }`}
                >
                  <div className={`inline-block px-3 py-1 rounded-full text-sm mb-4 bg-gradient-to-r ${content.gradient} text-white`}>
                    {content.type}
                  </div>
                  <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {content.title}
                  </h3>
                  <div className={`flex items-center gap-4 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {content.readTime}
                    </span>
                    <span>{content.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const ResourceIcon = resource.icon;
              
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
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${resource.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
                  />
                  
                  <a
                    href={resource.link}
                    className={`relative block h-full p-8 rounded-2xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800 group-hover:bg-slate-900'
                        : 'bg-white/90 backdrop-blur-xl border-slate-200 group-hover:bg-white'
                    }`}
                  >
                    {/* Icon */}
                    <div className="relative mb-6 inline-flex">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${resource.gradient} opacity-20 blur-xl rounded-full`}
                      />
                      <div
                        className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${resource.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <ResourceIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {resource.description}
                    </p>

                    {/* Items List */}
                    <ul className="space-y-2 mb-6">
                      {resource.items.slice(0, 3).map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className={`text-sm flex items-center gap-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${resource.gradient}`} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                      <div className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                        {resource.posts}
                      </div>
                      <ArrowRight
                        className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      />
                    </div>
                  </a>
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
              Need More Help?
            </h2>
            <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              Can't find what you're looking for? Our team is here to help.
            </p>
            <a
              href="mailto:support@bytechsol.com"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Contact Support
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Download, FileText, Video, Book } from 'lucide-react';

const resources = [
  {
    title: 'Enterprise AI Strategy Playbook',
    type: 'Guide',
    icon: Book,
    description: 'A comprehensive guide to implementing AI in your organization.',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: '2024 Digital Transformation Report',
    type: 'Whitepaper',
    icon: FileText,
    description: 'Key insights into the current state of digital business.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Odoo Implementation Webinar',
    type: 'Video',
    icon: Video,
    description: 'Master your ERP workflow with our expert-led session.',
    color: 'from-orange-500 to-red-500',
  },
];

export function ResourcesPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen">
      {/* Resources Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-8xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
          >
            Free <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Knowledge Hub
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            Access our exclusive library of guides, whitepapers, and tools to help you grow.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`p-8 rounded-3xl h-full border transition-all duration-300 ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200'
                  }`}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <resource.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-blue-500 text-sm font-bold uppercase tracking-widest mb-2 block">
                    {resource.type}
                  </span>
                  <h3 className={`text-2xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {resource.title}
                  </h3>
                  <p className={`mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {resource.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white text-sm hover:bg-slate-700 transition-colors">
                    <Download className="w-4 h-4" />
                    Download Free
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

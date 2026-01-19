import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { BlogCarousel } from './BlogCarousel';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const extraPosts = [
  {
    id: 5,
    title: 'Scaling Odoo for Enterprise Growth',
    excerpt: 'Best practices for managing large-scale ERP implementations and ensuring system stability.',
    category: 'ERP',
    date: 'Nov 15, 2024',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'The Role of AI in Modern SEO',
    excerpt: 'How machine learning is redefining search engine optimization and content strategy.',
    category: 'SEO',
    date: 'Nov 10, 2024',
    readTime: '9 min read',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
  },
];

export function BlogPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen">
      {/* Blog Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-8xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
          >
            Insights & <br />
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
              Innovation
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            Deep dives into technology, design, and business strategy from the experts at BytechSol.
          </motion.p>
        </div>
      </section>

      <BlogCarousel />

      {/* Main Feed */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {extraPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs uppercase tracking-widest">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-6 mb-4 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className={`text-2xl mb-4 transition-colors ${theme === 'dark' ? 'text-white group-hover:text-purple-400' : 'text-slate-900 group-hover:text-purple-600'
                  }`}>
                  {post.title}
                </h3>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {post.excerpt}
                </p>
                <div className="inline-flex items-center gap-2 text-purple-500 font-semibold group/link">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

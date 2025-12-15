import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI-Enhanced UX Design',
    excerpt: 'Exploring how artificial intelligence is transforming the way we approach user experience design and creating more intuitive interfaces.',
    category: 'AI & Design',
    date: 'Dec 1, 2024',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1708373100061-f75279dbaa7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzY1MDc4MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Building Agent-First Development Workflows',
    excerpt: 'A deep dive into creating development environments where AI agents collaborate with human developers to accelerate product delivery.',
    category: 'Development',
    date: 'Nov 28, 2024',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1593442257276-1895e27c8ed6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb2Rpbmd8ZW58MXx8fHwxNzY1MDkwMTc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Cross-Surface Design Systems at Scale',
    excerpt: 'Learn how to build and maintain design systems that work seamlessly across web, mobile, and emerging platforms.',
    category: 'Design Systems',
    date: 'Nov 25, 2024',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY1MDEzMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Real-Time Collaboration Tools for Remote Teams',
    excerpt: 'How we built a real-time collaboration platform that enables distributed teams to work as efficiently as co-located ones.',
    category: 'Product',
    date: 'Nov 22, 2024',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1658806283210-6d7330062704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2NTEwNjM1NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function BlogCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? blogPosts.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === blogPosts.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="blog" className="relative py-32 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 flex items-end justify-between"
        >
          <div>
            <span className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-4 block">
              Latest Insights
            </span>
            <h2 className="text-white">From Our Blog</h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-slate-700 text-white hover:bg-slate-900 transition-colors flex items-center justify-center"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 border border-slate-700 text-white hover:bg-slate-900 transition-colors flex items-center justify-center"
            >
              →
            </button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {blogPosts.map((post) => (
              <div key={post.id} className="w-full flex-shrink-0 px-2">
                <div className="grid md:grid-cols-2 gap-8 bg-slate-900 border border-slate-800 overflow-hidden group hover:border-slate-700 transition-colors">
                  {/* Image */}
                  <div className="aspect-[16/10] bg-slate-800 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-purple-400 text-sm uppercase tracking-wider mb-4">
                      {post.category}
                    </span>
                    <h3 className="text-white mb-4 text-2xl">{post.title}</h3>
                    <p className="text-slate-400 leading-relaxed mb-6">{post.excerpt}</p>

                    {/* Meta */}
                    <div className="flex items-center gap-6 mb-6 text-sm text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors group/link"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 border border-slate-700 text-white hover:bg-slate-900 transition-colors flex items-center justify-center"
          >
            ←
          </button>
          <span className="text-slate-400">
            {currentIndex + 1} / {blogPosts.length}
          </span>
          <button
            onClick={handleNext}
            className="w-12 h-12 border border-slate-700 text-white hover:bg-slate-900 transition-colors flex items-center justify-center"
          >
            →
          </button>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-slate-700 text-white hover:bg-slate-900 transition-all"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
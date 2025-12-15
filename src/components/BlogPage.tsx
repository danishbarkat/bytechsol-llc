import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  published: boolean;
}

export function BlogPage() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('blog_posts');
    if (saved) {
      const allPosts = JSON.parse(saved);
      // Only show published posts
      setPosts(allPosts.filter((p: BlogPost) => p.published));
    }
  }, []);

  if (selectedPost) {
    return (
      <div className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <button
            onClick={() => setSelectedPost(null)}
            className={`mb-8 flex items-center gap-2 ${
              theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            ← Back to all posts
          </button>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={selectedPost.coverImage}
              alt={selectedPost.title}
              className="w-full h-96 object-cover rounded-3xl mb-8"
            />

            {/* Meta */}
            <div className="flex items-center gap-4 mb-6 text-sm">
              <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                <User className="w-4 h-4" />
                {selectedPost.author}
              </div>
              <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                <Calendar className="w-4 h-4" />
                {new Date(selectedPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              {selectedPost.category && (
                <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400">
                  {selectedPost.category}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className={`text-5xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              {selectedPost.title}
            </h1>

            {/* Content */}
            <div className={`prose prose-lg max-w-none mb-8 ${
              theme === 'dark' ? 'prose-invert' : ''
            }`}>
              <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                {selectedPost.excerpt}
              </p>
              <div className={`whitespace-pre-wrap ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                {selectedPost.content}
              </div>
            </div>

            {/* Tags */}
            {selectedPost.tags && selectedPost.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-800">
                {selectedPost.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm ${
                      theme === 'dark'
                        ? 'bg-slate-800 text-slate-400'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 border border-purple-500/30">
            <Tag className="w-4 h-4 text-purple-400" />
            <span className={`text-sm tracking-wider uppercase ${
              theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
            }`}>
              Our Blog
            </span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Latest{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Insights
            </span>
          </h1>
          
          <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            Thoughts, stories and ideas from our team
          </p>
        </motion.div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className={`text-center py-20 ${
            theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
          }`}>
            <p className="text-xl">No blog posts published yet.</p>
            <p className="mt-2">Check back soon for exciting content!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className={`relative rounded-2xl border overflow-hidden transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800 hover:border-purple-500/50'
                    : 'bg-white border-slate-200 hover:border-purple-500/50'
                }`}>
                  {/* Cover Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {post.category && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs bg-purple-500/90 text-white backdrop-blur-sm">
                          {post.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <div className={`flex items-center gap-2 ${
                        theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
                      }`}>
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className={`flex items-center gap-2 ${
                        theme === 'dark' ? 'text-slate-500' : 'text-slate-600'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-xl mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all ${
                      theme === 'dark' ? 'text-white' : 'text-slate-900'
                    }`}>
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className={`text-sm mb-4 line-clamp-3 ${
                      theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                    }`}>
                      {post.excerpt}
                    </p>

                    {/* Read More */}
                    <div className={`flex items-center gap-2 text-sm ${
                      theme === 'dark' 
                        ? 'text-purple-400 group-hover:text-purple-300' 
                        : 'text-purple-600 group-hover:text-purple-500'
                    }`}>
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

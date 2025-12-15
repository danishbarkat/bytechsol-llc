import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Plus, Edit, Trash2, Eye, Calendar, User, Image as ImageIcon } from 'lucide-react';
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

export function BlogManagement() {
  const { theme } = useTheme();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);

  // Load posts from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('blog_posts');
    if (saved) {
      setPosts(JSON.parse(saved));
    }
  }, []);

  // Save posts to localStorage
  const savePosts = (newPosts: BlogPost[]) => {
    setPosts(newPosts);
    localStorage.setItem('blog_posts', JSON.stringify(newPosts));
  };

  const handleAddNew = () => {
    setCurrentPost({
      id: Date.now().toString(),
      title: '',
      slug: '',
      excerpt: '',
      content: '',
      coverImage: '',
      author: 'Admin',
      date: new Date().toISOString().split('T')[0],
      category: '',
      tags: [],
      published: false,
    });
    setIsEditing(true);
  };

  const handleEdit = (post: BlogPost) => {
    setCurrentPost(post);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      savePosts(posts.filter(p => p.id !== id));
    }
  };

  const handleSave = () => {
    if (!currentPost) return;

    // Generate slug from title if empty
    if (!currentPost.slug) {
      currentPost.slug = currentPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    }

    const existingIndex = posts.findIndex(p => p.id === currentPost.id);
    if (existingIndex >= 0) {
      const updated = [...posts];
      updated[existingIndex] = currentPost;
      savePosts(updated);
    } else {
      savePosts([...posts, currentPost]);
    }

    setIsEditing(false);
    setCurrentPost(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentPost(null);
  };

  const updateField = (field: keyof BlogPost, value: any) => {
    if (currentPost) {
      setCurrentPost({ ...currentPost, [field]: value });
    }
  };

  if (isEditing && currentPost) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl"
      >
        <div className={`p-8 rounded-2xl border ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200'
        }`}>
          <h2 className={`text-2xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            {posts.find(p => p.id === currentPost.id) ? 'Edit Post' : 'New Post'}
          </h2>

          <div className="space-y-6">
            {/* Title */}
            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Title *
              </label>
              <input
                type="text"
                value={currentPost.title}
                onChange={(e) => updateField('title', e.target.value)}
                placeholder="Enter post title"
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            {/* Slug */}
            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Slug (URL)
              </label>
              <input
                type="text"
                value={currentPost.slug}
                onChange={(e) => updateField('slug', e.target.value)}
                placeholder="auto-generated-from-title"
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            {/* Cover Image */}
            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Cover Image URL *
              </label>
              <input
                type="url"
                value={currentPost.coverImage}
                onChange={(e) => updateField('coverImage', e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
              {currentPost.coverImage && (
                <img
                  src={currentPost.coverImage}
                  alt="Preview"
                  className="mt-4 w-full h-48 object-cover rounded-xl"
                />
              )}
            </div>

            {/* Category & Author */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Category
                </label>
                <input
                  type="text"
                  value={currentPost.category}
                  onChange={(e) => updateField('category', e.target.value)}
                  placeholder="Technology, Business, etc."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Author
                </label>
                <input
                  type="text"
                  value={currentPost.author}
                  onChange={(e) => updateField('author', e.target.value)}
                  placeholder="Author name"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
            </div>

            {/* Excerpt */}
            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Excerpt *
              </label>
              <textarea
                value={currentPost.excerpt}
                onChange={(e) => updateField('excerpt', e.target.value)}
                placeholder="Brief description of the post"
                rows={3}
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            {/* Content */}
            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Content *
              </label>
              <textarea
                value={currentPost.content}
                onChange={(e) => updateField('content', e.target.value)}
                placeholder="Write your post content here..."
                rows={12}
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            {/* Tags */}
            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Tags (comma separated)
              </label>
              <input
                type="text"
                value={currentPost.tags.join(', ')}
                onChange={(e) => updateField('tags', e.target.value.split(',').map(t => t.trim()))}
                placeholder="react, javascript, web development"
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            {/* Published */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="published"
                checked={currentPost.published}
                onChange={(e) => updateField('published', e.target.checked)}
                className="w-5 h-5 rounded border-slate-700"
              />
              <label htmlFor="published" className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                Publish immediately
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all"
              >
                Save Post
              </button>
              <button
                onClick={handleCancel}
                className={`px-6 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'border-slate-700 text-slate-400 hover:bg-slate-800'
                    : 'border-slate-300 text-slate-600 hover:bg-slate-50'
                }`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Blog Posts
          </h2>
          <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
            Manage your blog content
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all"
        >
          <Plus className="w-5 h-5" />
          New Post
        </button>
      </div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <div className={`p-12 rounded-2xl border border-dashed text-center ${
          theme === 'dark'
            ? 'border-slate-800 bg-slate-900/50'
            : 'border-slate-300 bg-slate-50'
        }`}>
          <ImageIcon className={`w-16 h-16 mx-auto mb-4 ${
            theme === 'dark' ? 'text-slate-700' : 'text-slate-400'
          }`} />
          <h3 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            No blog posts yet
          </h3>
          <p className={`mb-6 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
            Create your first blog post to get started
          </p>
          <button
            onClick={handleAddNew}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all"
          >
            Create First Post
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-6 rounded-2xl border ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex gap-6">
                {/* Cover Image */}
                {post.coverImage && (
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-48 h-32 object-cover rounded-xl flex-shrink-0"
                  />
                )}

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className={`text-xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {post.title}
                      </h3>
                      <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className={`flex items-center gap-2 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        {post.category && (
                          <span className="px-3 py-1 rounded-full text-xs bg-purple-500/20 text-purple-400">
                            {post.category}
                          </span>
                        )}
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          post.published
                            ? 'bg-emerald-500/20 text-emerald-400'
                            : 'bg-orange-500/20 text-orange-400'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(post)}
                    className={`p-2 rounded-lg ${
                      theme === 'dark'
                        ? 'hover:bg-slate-800 text-slate-400'
                        : 'hover:bg-slate-100 text-slate-600'
                    }`}
                    title="Edit"
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className={`p-2 rounded-lg ${
                      theme === 'dark'
                        ? 'hover:bg-red-500/10 text-red-500'
                        : 'hover:bg-red-50 text-red-600'
                    }`}
                    title="Delete"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

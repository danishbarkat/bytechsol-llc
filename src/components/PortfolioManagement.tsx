import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Plus, Edit, Trash2, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  category: string;
  technologies: string[];
  liveLink?: string;
  demoLink?: string;
  features: string[];
  client: string;
  year: string;
  featured: boolean;
}

export function PortfolioManagement() {
  const { theme } = useTheme();
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState<PortfolioProject | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio_projects');
    if (saved) {
      setProjects(JSON.parse(saved));
    }
  }, []);

  const saveProjects = (newProjects: PortfolioProject[]) => {
    setProjects(newProjects);
    localStorage.setItem('portfolio_projects', JSON.stringify(newProjects));
  };

  const handleAddNew = () => {
    setCurrentProject({
      id: Date.now().toString(),
      title: '',
      description: '',
      coverImage: '',
      category: '',
      technologies: [],
      liveLink: '',
      demoLink: '',
      features: [],
      client: '',
      year: new Date().getFullYear().toString(),
      featured: false,
    });
    setIsEditing(true);
  };

  const handleEdit = (project: PortfolioProject) => {
    setCurrentProject(project);
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this project?')) {
      saveProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleSave = () => {
    if (!currentProject) return;

    const existingIndex = projects.findIndex(p => p.id === currentProject.id);
    if (existingIndex >= 0) {
      const updated = [...projects];
      updated[existingIndex] = currentProject;
      saveProjects(updated);
    } else {
      saveProjects([...projects, currentProject]);
    }

    setIsEditing(false);
    setCurrentProject(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentProject(null);
  };

  const updateField = (field: keyof PortfolioProject, value: any) => {
    if (currentProject) {
      setCurrentProject({ ...currentProject, [field]: value });
    }
  };

  if (isEditing && currentProject) {
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
            {projects.find(p => p.id === currentProject.id) ? 'Edit Project' : 'New Project'}
          </h2>

          <div className="space-y-6">
            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Project Title *
              </label>
              <input
                type="text"
                value={currentProject.title}
                onChange={(e) => updateField('title', e.target.value)}
                placeholder="Enter project name"
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Cover Image URL *
              </label>
              <input
                type="url"
                value={currentProject.coverImage}
                onChange={(e) => updateField('coverImage', e.target.value)}
                placeholder="https://images.unsplash.com/..."
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
              {currentProject.coverImage && (
                <img
                  src={currentProject.coverImage}
                  alt="Preview"
                  className="mt-4 w-full h-64 object-cover rounded-xl"
                />
              )}
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Category
                </label>
                <input
                  type="text"
                  value={currentProject.category}
                  onChange={(e) => updateField('category', e.target.value)}
                  placeholder="Web App, Mobile, etc."
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Client
                </label>
                <input
                  type="text"
                  value={currentProject.client}
                  onChange={(e) => updateField('client', e.target.value)}
                  placeholder="Client name"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Year
                </label>
                <input
                  type="text"
                  value={currentProject.year}
                  onChange={(e) => updateField('year', e.target.value)}
                  placeholder="2024"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
            </div>

            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Description *
              </label>
              <textarea
                value={currentProject.description}
                onChange={(e) => updateField('description', e.target.value)}
                placeholder="Describe the project..."
                rows={5}
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Live Link (optional)
                </label>
                <input
                  type="url"
                  value={currentProject.liveLink}
                  onChange={(e) => updateField('liveLink', e.target.value)}
                  placeholder="https://project-live.com"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Demo Link (optional)
                </label>
                <input
                  type="url"
                  value={currentProject.demoLink}
                  onChange={(e) => updateField('demoLink', e.target.value)}
                  placeholder="https://demo.project.com"
                  className={`w-full px-4 py-3 rounded-xl border ${
                    theme === 'dark'
                      ? 'bg-slate-800 border-slate-700 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
                />
              </div>
            </div>

            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Technologies (comma separated)
              </label>
              <input
                type="text"
                value={currentProject.technologies.join(', ')}
                onChange={(e) => updateField('technologies', e.target.value.split(',').map(t => t.trim()))}
                placeholder="React, Node.js, MongoDB"
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            <div>
              <label className={`block mb-2 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                Key Features (comma separated)
              </label>
              <textarea
                value={currentProject.features.join(', ')}
                onChange={(e) => updateField('features', e.target.value.split(',').map(f => f.trim()))}
                placeholder="Real-time updates, User authentication, Dashboard analytics"
                rows={3}
                className={`w-full px-4 py-3 rounded-xl border ${
                  theme === 'dark'
                    ? 'bg-slate-800 border-slate-700 text-white'
                    : 'bg-white border-slate-300 text-slate-900'
                } focus:outline-none focus:ring-2 focus:ring-purple-500/20`}
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="featured"
                checked={currentProject.featured}
                onChange={(e) => updateField('featured', e.target.checked)}
                className="w-5 h-5 rounded border-slate-700"
              />
              <label htmlFor="featured" className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                Feature this project on homepage
              </label>
            </div>

            <div className="flex gap-4 pt-4">
              <button
                onClick={handleSave}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all"
              >
                Save Project
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
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Portfolio Projects
          </h2>
          <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
            Manage your portfolio showcase
          </p>
        </div>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all"
        >
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </div>

      {projects.length === 0 ? (
        <div className={`p-12 rounded-2xl border border-dashed text-center ${
          theme === 'dark'
            ? 'border-slate-800 bg-slate-900/50'
            : 'border-slate-300 bg-slate-50'
        }`}>
          <ImageIcon className={`w-16 h-16 mx-auto mb-4 ${
            theme === 'dark' ? 'text-slate-700' : 'text-slate-400'
          }`} />
          <h3 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            No projects yet
          </h3>
          <p className={`mb-6 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
            Add your first project to showcase your work
          </p>
          <button
            onClick={handleAddNew}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-xl transition-all"
          >
            Create First Project
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-2xl border overflow-hidden ${
                theme === 'dark'
                  ? 'bg-slate-900 border-slate-800'
                  : 'bg-white border-slate-200'
              }`}
            >
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className={`text-xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {project.description.substring(0, 100)}...
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded text-xs bg-purple-500/20 text-purple-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live
                        </a>
                      )}
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                      {project.featured && (
                        <span className="px-2 py-1 rounded text-xs bg-emerald-500/20 text-emerald-400">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(project)}
                      className={`p-2 rounded-lg ${
                        theme === 'dark'
                          ? 'hover:bg-slate-800 text-slate-400'
                          : 'hover:bg-slate-100 text-slate-600'
                      }`}
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className={`p-2 rounded-lg ${
                        theme === 'dark'
                          ? 'hover:bg-red-500/10 text-red-500'
                          : 'hover:bg-red-50 text-red-600'
                      }`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}

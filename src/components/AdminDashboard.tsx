import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { 
  BarChart3, TrendingUp, Users, Eye, Search, Globe, 
  Zap, Target, Award, ArrowUpRight, LogOut, Menu,
  FileText, Briefcase, UserPlus
} from 'lucide-react';
import { useState } from 'react';
import { BlogManagement } from './BlogManagement';
import { PortfolioManagement } from './PortfolioManagement';
import { TeamManagement } from './TeamManagement';

interface AdminDashboardProps {
  onLogout: () => void;
}

export function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'blog' | 'portfolio' | 'team'>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const seoStats = [
    { 
      icon: Eye, 
      label: 'Total Visitors', 
      value: '45,892', 
      change: '+12.5%', 
      trend: 'up',
      gradient: 'from-purple-600 to-pink-600'
    },
    { 
      icon: Users, 
      label: 'Active Users', 
      value: '2,847', 
      change: '+8.2%', 
      trend: 'up',
      gradient: 'from-blue-600 to-cyan-600'
    },
    { 
      icon: TrendingUp, 
      label: 'Page Views', 
      value: '128,456', 
      change: '+23.1%', 
      trend: 'up',
      gradient: 'from-emerald-600 to-teal-600'
    },
    { 
      icon: Target, 
      label: 'Bounce Rate', 
      value: '32.4%', 
      change: '-5.3%', 
      trend: 'down',
      gradient: 'from-orange-600 to-red-600'
    },
  ];

  const onPageSEO = [
    { metric: 'Meta Tags', score: 95, status: 'Excellent' },
    { metric: 'Heading Structure', score: 88, status: 'Good' },
    { metric: 'Image Alt Tags', score: 92, status: 'Excellent' },
    { metric: 'Internal Links', score: 85, status: 'Good' },
    { metric: 'Page Speed', score: 78, status: 'Fair' },
    { metric: 'Mobile Friendly', score: 98, status: 'Excellent' },
  ];

  const offPageSEO = [
    { metric: 'Backlinks', value: '1,247', quality: 'High' },
    { metric: 'Domain Authority', value: '68/100', quality: 'Good' },
    { metric: 'Social Signals', value: '8,945', quality: 'High' },
    { metric: 'Brand Mentions', value: '342', quality: 'Medium' },
  ];

  const topKeywords = [
    { keyword: 'web development', position: 3, volume: '12K', trend: 'up' },
    { keyword: 'AI solutions', position: 5, volume: '8.5K', trend: 'up' },
    { keyword: 'ERP implementation', position: 7, volume: '6.2K', trend: 'stable' },
    { keyword: 'digital marketing', position: 4, volume: '15K', trend: 'up' },
  ];

  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'blog', icon: FileText, label: 'Blog Management' },
    { id: 'portfolio', icon: Briefcase, label: 'Portfolio Management' },
    { id: 'team', icon: UserPlus, label: 'Team Management' },
  ];

  return (
    <div className={`min-h-screen flex ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-100'}`}>
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isSidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className={`fixed left-0 top-0 h-screen w-72 border-r z-40 ${
          theme === 'dark'
            ? 'bg-slate-900 border-slate-800'
            : 'bg-white border-slate-200'
        }`}
      >
        {/* Logo */}
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
              <span className="text-white">BS</span>
            </div>
            <div>
              <h3 className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>Admin Portal</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                Super Admin
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    : theme === 'dark'
                    ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 left-4 right-4">
          <button
            onClick={onLogout}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              theme === 'dark'
                ? 'bg-slate-800 text-slate-400 hover:bg-red-500/10 hover:text-red-500'
                : 'bg-slate-100 text-slate-600 hover:bg-red-50 hover:text-red-600'
            }`}
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'ml-72' : 'ml-0'} transition-all duration-300`}>
        {/* Header */}
        <header className={`sticky top-0 z-30 border-b ${
          theme === 'dark'
            ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
            : 'bg-white/90 backdrop-blur-xl border-slate-200'
        }`}>
          <div className="flex items-center justify-between p-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className={`p-2 rounded-lg ${
                  theme === 'dark'
                    ? 'hover:bg-slate-800 text-slate-400'
                    : 'hover:bg-slate-100 text-slate-600'
                }`}
              >
                <Menu className="w-6 h-6" />
              </button>
              <div>
                <h1 className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {activeTab === 'dashboard' && 'SEO Analytics Dashboard'}
                  {activeTab === 'blog' && 'Blog Management'}
                  {activeTab === 'portfolio' && 'Portfolio Management'}
                  {activeTab === 'team' && 'Team Management'}
                </h1>
                <p className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                  Manage your website content and analytics
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {seoStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500`} />
                      <div className={`relative p-6 rounded-2xl border ${
                        theme === 'dark'
                          ? 'bg-slate-900 border-slate-800'
                          : 'bg-white border-slate-200'
                      }`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient}`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <div className={`flex items-center gap-1 text-sm ${
                            stat.trend === 'up' ? 'text-emerald-500' : 'text-red-500'
                          }`}>
                            <ArrowUpRight className={`w-4 h-4 ${stat.trend === 'down' ? 'rotate-90' : ''}`} />
                            {stat.change}
                          </div>
                        </div>
                        <h3 className={`text-3xl mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          {stat.value}
                        </h3>
                        <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                          {stat.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* On-Page SEO & Off-Page SEO */}
              <div className="grid lg:grid-cols-2 gap-6">
                {/* On-Page SEO */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`p-6 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600">
                      <Search className="w-6 h-6 text-white" />
                    </div>
                    <h2 className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      On-Page SEO
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {onPageSEO.map((item, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                            {item.metric}
                          </span>
                          <span className={`text-sm ${
                            item.score >= 90 ? 'text-emerald-500' :
                            item.score >= 80 ? 'text-blue-500' :
                            'text-orange-500'
                          }`}>
                            {item.status} ({item.score}%)
                          </span>
                        </div>
                        <div className={`h-2 rounded-full overflow-hidden ${
                          theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
                        }`}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.score}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className={`h-full rounded-full ${
                              item.score >= 90 ? 'bg-gradient-to-r from-emerald-600 to-teal-600' :
                              item.score >= 80 ? 'bg-gradient-to-r from-blue-600 to-cyan-600' :
                              'bg-gradient-to-r from-orange-600 to-red-600'
                            }`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Off-Page SEO */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`p-6 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h2 className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                      Off-Page SEO
                    </h2>
                  </div>
                  <div className="space-y-4">
                    {offPageSEO.map((item, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-xl border ${
                          theme === 'dark'
                            ? 'bg-slate-800/50 border-slate-700'
                            : 'bg-slate-50 border-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                            {item.metric}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            item.quality === 'High' ? 'bg-emerald-500/20 text-emerald-500' :
                            item.quality === 'Good' ? 'bg-blue-500/20 text-blue-500' :
                            'bg-orange-500/20 text-orange-500'
                          }`}>
                            {item.quality}
                          </span>
                        </div>
                        <p className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Top Keywords */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`p-6 rounded-2xl border ${
                  theme === 'dark'
                    ? 'bg-slate-900 border-slate-800'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h2 className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                    Top Ranking Keywords
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {topKeywords.map((kw, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-xl border ${
                        theme === 'dark'
                          ? 'bg-slate-800/50 border-slate-700'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                          Position
                        </span>
                        <span className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          #{kw.position}
                        </span>
                      </div>
                      <h4 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {kw.keyword}
                      </h4>
                      <div className="flex items-center justify-between text-sm">
                        <span className={theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}>
                          {kw.volume}/mo
                        </span>
                        <span className={
                          kw.trend === 'up' ? 'text-emerald-500' : 'text-slate-500'
                        }>
                          {kw.trend === 'up' ? '↑' : '→'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}

          {activeTab === 'blog' && <BlogManagement />}
          {activeTab === 'portfolio' && <PortfolioManagement />}
          {activeTab === 'team' && <TeamManagement />}
        </div>
      </div>
    </div>
  );
}

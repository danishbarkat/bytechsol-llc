import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { useRouter } from './Router';
import { getServiceTitles } from './servicesData';

const servicesMenu = getServiceTitles().map(service => ({
  title: service.title,
  route: `/services/${service.id}`
}));

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { navigate, currentRoute } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsServicesOpen(false);
    };
    if (isServicesOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isServicesOpen]);

  return (
    <>
      {/* Desktop Navbar - Floating Pill Design */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`hidden lg:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          isScrolled ? 'top-4' : 'top-6'
        }`}
        style={{ width: 'auto', maxWidth: '90vw' }}
      >
        <div
          className={`flex items-center gap-2 px-3 py-2.5 transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-slate-900/90 backdrop-blur-xl border border-slate-800/50'
              : 'bg-white/90 backdrop-blur-xl border border-slate-200/50'
          }`}
          style={{
            borderRadius: '3rem',
            boxShadow: theme === 'dark'
              ? '0 10px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
              : '0 10px 40px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
          }}
        >
          {/* Logo */}
          <a href="#/" onClick={() => navigate('/')}>
            <div
              className={`w-11 h-11 flex items-center justify-center transition-colors cursor-pointer ${
                theme === 'dark'
                  ? 'bg-white text-slate-900'
                  : 'bg-slate-900 text-white'
              }`}
              style={{ borderRadius: '50%' }}
            >
              <span className="font-bold">BS</span>
            </div>
          </a>

          {/* Divider */}
          <div
            className={`w-px h-7 mx-3 ${
              theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-300/50'
            }`}
          />

          {/* Navigation Links */}
          <div className="flex items-center gap-2 px-3">
            {/* Home Link */}
            <a
              href="#/"
              onClick={() => navigate('/')}
              className={`px-6 py-2.5 transition-all duration-200 ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
              style={{ borderRadius: '1.5rem' }}
            >
              Home
            </a>

            {/* About Link */}
            <a
              href="#/about"
              onClick={() => navigate('/about')}
              className={`px-6 py-2.5 transition-all duration-200 ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
              style={{ borderRadius: '1.5rem' }}
            >
              About
            </a>

            {/* Services Dropdown Wrapper */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
                className={`inline-flex items-center gap-1 px-6 py-2.5 transition-all duration-200 ${
                  theme === 'dark'
                    ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
                style={{ borderRadius: '1.5rem' }}
              >
                Services
                <motion.div
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute left-0 top-full mt-2 w-72 rounded-2xl border-2 overflow-hidden z-50 ${
                      theme === 'dark'
                        ? 'bg-slate-900 border-slate-800'
                        : 'bg-white border-slate-200'
                    }`}
                    style={{
                      boxShadow: theme === 'dark'
                        ? '0 20px 60px rgba(0, 0, 0, 0.6)'
                        : '0 20px 60px rgba(0, 0, 0, 0.2)',
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-2">
                      <a
                        href="#/services"
                        onClick={() => {
                          navigate('/services');
                          setIsServicesOpen(false);
                        }}
                        className={`block px-4 py-3 rounded-xl transition-all duration-200 ${
                          theme === 'dark'
                            ? 'text-purple-400 hover:text-white hover:bg-slate-800/70'
                            : 'text-purple-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                        style={{ fontWeight: 600 }}
                      >
                        All Services
                      </a>
                      
                      <div className={`h-px my-2 ${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'}`} />

                      {servicesMenu.map((service, index) => (
                        <motion.a
                          key={service.route}
                          href={`#${service.route}`}
                          onClick={() => {
                            navigate(service.route as any);
                            setIsServicesOpen(false);
                          }}
                          className={`block px-4 py-3 rounded-xl transition-all duration-200 ${
                            theme === 'dark'
                              ? 'text-slate-300 hover:text-white hover:bg-slate-800/70'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                          }`}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ x: 5 }}
                        >
                          {service.title}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#/portfolio"
              onClick={() => navigate('/portfolio')}
              className={`px-6 py-2.5 transition-all duration-200 ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
              style={{ borderRadius: '1.5rem' }}
            >
              Portfolio
            </a>

            <a
              href="#/blog"
              onClick={() => navigate('/blog')}
              className={`px-6 py-2.5 transition-all duration-200 ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
              style={{ borderRadius: '1.5rem' }}
            >
              Blog
            </a>

            <a
              href="#/resources"
              onClick={() => navigate('/resources')}
              className={`px-6 py-2.5 transition-all duration-200 ${
                theme === 'dark'
                  ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
              }`}
              style={{ borderRadius: '1.5rem' }}
            >
              Resources
            </a>
          </div>

          {/* Divider */}
          <div
            className={`w-px h-7 mx-3 ${
              theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-300/50'
            }`}
          />

          {/* Theme Toggle Icon */}
          <button
            onClick={toggleTheme}
            className={`p-2.5 transition-all duration-200 ${
              theme === 'dark'
                ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
            }`}
            style={{ borderRadius: '50%' }}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Divider */}
          <div
            className={`w-px h-7 mx-3 ${
              theme === 'dark' ? 'bg-slate-700/50' : 'bg-slate-300/50'
            }`}
          />

          {/* Contact Email Pill */}
          <a
            href="mailto:contact@bytechsol.com"
            className={`px-7 py-2.5 transition-all duration-200 ${
              theme === 'dark'
                ? 'bg-slate-800 text-white hover:bg-slate-700'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
            style={{ borderRadius: '1.5rem' }}
          >
            contact@bytechsol.com
          </a>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Top Bar */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? theme === 'dark'
              ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800'
              : 'bg-white/90 backdrop-blur-xl border-b border-slate-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#/" onClick={() => navigate('/')} className="flex items-center gap-3">
              <div
                className={`w-10 h-10 flex items-center justify-center ${
                  theme === 'dark'
                    ? 'bg-white text-slate-900'
                    : 'bg-slate-900 text-white'
                }`}
                style={{ borderRadius: '50%' }}
              >
                <span className="text-sm font-bold">BS</span>
              </div>
              <span
                className={`${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                } tracking-tight`}
              >
                BytechSol
              </span>
            </a>

            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`p-2 transition-colors ${
                  theme === 'dark'
                    ? 'text-slate-300 hover:text-white'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`mt-4 pt-4 border-t ${
                  theme === 'dark' ? 'border-slate-800' : 'border-slate-200'
                }`}
              >
                <div className="flex flex-col gap-3">
                  <a
                    href="#/"
                    onClick={() => navigate('/')}
                    className={`px-4 py-2 transition-colors ${
                      theme === 'dark'
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Home
                  </a>
                  <a
                    href="#/about"
                    onClick={() => navigate('/about')}
                    className={`px-4 py-2 transition-colors ${
                      theme === 'dark'
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    About
                  </a>
                  <a
                    href="#/services"
                    onClick={() => navigate('/services')}
                    className={`px-4 py-2 transition-colors ${
                      theme === 'dark'
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Services
                  </a>
                  <a
                    href="#/portfolio"
                    onClick={() => navigate('/portfolio')}
                    className={`px-4 py-2 transition-colors ${
                      theme === 'dark'
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Portfolio
                  </a>
                  <a
                    href="#/blog"
                    onClick={() => navigate('/blog')}
                    className={`px-4 py-2 transition-colors ${
                      theme === 'dark'
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Blog
                  </a>
                  <a
                    href="#/resources"
                    onClick={() => navigate('/resources')}
                    className={`px-4 py-2 transition-colors ${
                      theme === 'dark'
                        ? 'text-slate-300 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Resources
                  </a>
                  <a
                    href="mailto:contact@bytechsol.com"
                    className={`px-4 py-2.5 text-center transition-colors mt-2 ${
                      theme === 'dark'
                        ? 'bg-slate-800 text-white hover:bg-slate-700'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                    style={{ borderRadius: '0.5rem' }}
                  >
                    contact@bytechsol.com
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </>
  );
}
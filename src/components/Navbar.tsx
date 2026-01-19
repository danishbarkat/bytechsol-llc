import React, { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useRouter } from './Router';

const servicesMenu = [
  { title: 'Odoo Services', route: '/services/odoo-services' },
  { title: 'Custom Web Solution', route: '/services/custom-web-solution' },
  { title: 'Mobile App Development', route: '/services/web-app-software-development' },
  { title: 'Ecommerce Solutions', route: '/services/ecommerce-solutions' },
  { title: 'Brand Building', route: '/services/brand-building' },
  { title: 'SEO Services', route: '/services/seo-services' },
  { title: 'AI/ML Services', route: '/services/ai-ml-services' },
  { title: 'ERP Services', route: '/services/erp-services' },
  { title: 'Website Design & Development', route: '/services/website-design-development' },
];
const servicesSplitIndex = Math.ceil(servicesMenu.length / 2);
const servicesColumns = [
  servicesMenu.slice(0, servicesSplitIndex),
  servicesMenu.slice(servicesSplitIndex)
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { navigate } = useRouter();

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
        className={`hidden lg:block fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-6'
          }`}
        style={{ width: 'auto', maxWidth: '90vw' }}
      >
        <div
          className="flex items-center gap-2 px-3 py-2.5 transition-all duration-300 secondary-bg border border-white/10 backdrop-blur-xl"
          style={{
            borderRadius: '3rem',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Logo */}
          <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="flex items-center">
            <img
              src="/assets/logo/logo.png"
              alt="BytechSol logo"
              className="h-11 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
              style={{ filter: 'brightness(0) invert(1)', width: 'auto', maxWidth: '140px' }}
            />
          </a>

          {/* Divider */}
          <div
            className="w-px h-7 mx-3 bg-white/30"
          />

          {/* Navigation Links */}
          <div className="flex items-center gap-2 px-3">
            {/* Home Link */}
            <a
              href="/"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
              className="px-6 py-2.5 transition-all duration-200 text-white hover:text-white hover:bg-white/15"
              style={{ borderRadius: '1.5rem' }}
            >
              Home
            </a>
            {/* Services Dropdown Wrapper */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsServicesOpen(!isServicesOpen);
                }}
                aria-haspopup="menu"
                aria-expanded={isServicesOpen}
                aria-controls="services-menu"
                className="inline-flex items-center gap-1 px-6 py-2.5 transition-all duration-200 text-white hover:text-white hover:bg-white/15"
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
                    id="services-menu"
                    role="menu"
                    className="absolute left-0 top-full mt-2 rounded-2xl border-2 overflow-hidden z-50 secondary-bg border-white/10"
                    style={{
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
                      width: 'min(52rem, 95vw)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-2">
                      <a
                        href="/services"
                        onClick={(e) => {
                          e.preventDefault();
                          navigate('/services');
                          setIsServicesOpen(false);
                        }}
                        role="menuitem"
                        className="block px-4 py-3 rounded-xl transition-all duration-200 text-white hover:text-white hover:bg-white/15"
                        style={{ fontWeight: 600 }}
                      >
                        All Services
                      </a>

                      <div className="h-px my-2 bg-white/30" />

                      <div className="grid w-full grid-cols-2 gap-6">
                        {servicesColumns.map((column, columnIndex) => (
                          <div
                            key={`services-col-${columnIndex}`}
                            className="flex flex-col gap-2"
                          >
                            {column.map((service, index) => {
                              const itemIndex = columnIndex === 0
                                ? index
                                : index + servicesSplitIndex;

                              return (
                                <motion.a
                                  key={service.route}
                                  href={service.route}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    navigate(service.route as any);
                                    setIsServicesOpen(false);
                                  }}
                                  role="menuitem"
                                  className="block px-4 py-3 rounded-xl transition-all duration-200 text-white hover:text-white hover:bg-white/15 whitespace-normal leading-snug"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: itemIndex * 0.03 }}
                                  whileHover={{ x: 4 }}
                                >
                                  {service.title}
                                </motion.a>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/portfolio"
              onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}
              className="px-6 py-2.5 transition-all duration-200 text-white hover:text-white hover:bg-white/15"
              style={{ borderRadius: '1.5rem' }}
            >
              Portfolio
            </a>

            {/* About Link */}
            <a
              href="/about"
              onClick={(e) => { e.preventDefault(); navigate('/about'); }}
              className="px-6 py-2.5 transition-all duration-200 text-white hover:text-white hover:bg-white/15"
              style={{ borderRadius: '1.5rem' }}
            >
              About
            </a>

            <a
              href="/blog"
              onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
              className="px-6 py-2.5 transition-all duration-200 text-white hover:text-white hover:bg-white/15"
              style={{ borderRadius: '1.5rem' }}
            >
              Blog
            </a>
          </div>

          {/* Divider */}
          <div
            className="w-px h-7 mx-3 bg-white/30"
          />

          {/* Contact Email Pill */}
          <a
            href="mailto:contact@bytechsol.com"
            className="px-7 py-2.5 transition-all duration-200 brand-bg text-white shadow-lg hover:opacity-90"
            style={{ borderRadius: '1.5rem' }}
          >
            contact@bytechsol.com
          </a>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Top Bar */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 secondary-bg ${isScrolled ? 'shadow-lg' : ''
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="flex items-center gap-3">
              <img
                src="/assets/logo/logo.png"
                alt="BytechSol logo"
                className="h-10 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
                style={{ filter: 'brightness(0) invert(1)', width: 'auto', maxWidth: '120px' }}
              />
            </a>

            <div className="flex items-center gap-3">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white"
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
                className="mt-4 pt-4 border-t border-white/10"
              >
                <div className="flex flex-col gap-3">
                  <a
                    href="/"
                    onClick={(e) => { e.preventDefault(); navigate('/'); }}
                    className="px-4 py-2 transition-colors text-white hover:text-white"
                  >
                    Home
                  </a>
                  <a
                    href="/services"
                    onClick={(e) => { e.preventDefault(); navigate('/services'); }}
                    className="px-4 py-2 transition-colors text-white hover:text-white"
                  >
                    Services
                  </a>
                  {servicesMenu.map((service) => (
                    <a
                      key={service.route}
                      href={service.route}
                      onClick={(e) => { e.preventDefault(); navigate(service.route as any); }}
                      className="px-6 py-1.5 text-sm transition-colors text-white/80 hover:text-white"
                    >
                      {service.title}
                    </a>
                  ))}
                  <a
                    href="/portfolio"
                    onClick={(e) => { e.preventDefault(); navigate('/portfolio'); }}
                    className="px-4 py-2 transition-colors text-white hover:text-white"
                  >
                    Portfolio
                  </a>
                  <a
                    href="/about"
                    onClick={(e) => { e.preventDefault(); navigate('/about'); }}
                    className="px-4 py-2 transition-colors text-white hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="/blog"
                    onClick={(e) => { e.preventDefault(); navigate('/blog'); }}
                    className="px-4 py-2 transition-colors text-white hover:text-white"
                  >
                    Blog
                  </a>
                  <a
                    href="mailto:contact@bytechsol.com"
                    className="px-4 py-2.5 text-center transition-colors mt-2 brand-bg text-white shadow-lg hover:opacity-90"
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

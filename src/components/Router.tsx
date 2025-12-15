import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Route = 
  | '/' 
  | '/services' 
  | '/portfolio'
  | '/about'
  | '/blog'
  | '/admin'
  | '/resources'
  | '/team'
  | '/careers'
  | '/press-kit'
  | '/contact'
  | '/privacy-policy'
  | '/terms-of-service'
  | '/cookie-policy'
  | '/gdpr-compliance'
  | '/services/odoo-services'
  | '/services/custom-web-solution'
  | '/services/web-app-software-development'
  | '/services/ecommerce-solutions'
  | '/services/brand-building'
  | '/services/seo-services'
  | '/services/ai-ml-services'
  | '/services/erp-services'
  | '/services/website-design-development';

interface RouterContextType {
  currentRoute: Route;
  navigate: (route: Route) => void;
}

const RouterContext = createContext<RouterContextType | null>(null);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentRoute, setCurrentRoute] = useState<Route>('/');

  useEffect(() => {
    // Handle initial route from hash
    const hash = window.location.hash.slice(1) as Route;
    if (hash) {
      setCurrentRoute(hash);
    }

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) as Route;
      setCurrentRoute(newHash || '/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (route: Route) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
}
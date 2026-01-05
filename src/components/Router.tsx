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
    // Handle initial route from path
    const path = window.location.pathname as Route;
    if (path && path !== '/') {
      setCurrentRoute(path);
    }

    // Listen for back/forward buttons
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname as Route || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (route: Route) => {
    setCurrentRoute(route);
    window.history.pushState(null, '', route);
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

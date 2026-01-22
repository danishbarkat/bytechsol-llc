import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgencyMission } from './components/AgencyMission';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ServicesPage } from './components/ServicesPage';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { PortfolioPage } from './components/PortfolioPage';
import { AboutPage } from './components/AboutPage';
import { ResourcesPage } from './components/ResourcesPage';
import { TeamPage } from './components/TeamPage';
import { CareersPage } from './components/CareersPage';
import { PressKitPage } from './components/PressKitPage';
import { ContactPage } from './components/ContactPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { CookiePolicyPage } from './components/CookiePolicyPage';
import { GdprCompliancePage } from './components/GdprCompliancePage';
import { HelpCenterPage } from './components/HelpCenterPage';
import { TechStackPage } from './components/TechStackPage';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { AdminPage } from './components/AdminPage';
import { BlogPage } from './components/BlogPage';
import { TechStack } from './components/TechStack';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';
import { Background3D } from './components/Background3D';
import { NewsletterPopup } from './components/NewsletterPopup';
import { SupportBot } from './components/SupportBot';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import { RouterProvider, useRouter } from './components/Router';
import { Seo } from './components/Seo';
import type { ReactNode } from 'react';

const baseUrl = 'https://bytechsol.com';
const defaultMeta = {
  title: 'BytechSol | IT Services, AI, ERP, and Digital Transformation',
  description: 'BytechSol delivers AI, ERP, web development, ecommerce, and SEO services to help businesses modernize and grow.',
  keywords: [
    'IT services company',
    'digital transformation',
    'AI development services',
    'ERP implementation',
    'web development',
    'ecommerce solutions',
    'SEO services',
    'custom software development'
  ],
  ogImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80'
};

const blankMeta = {
  title: 'BytechSol',
  description: 'BytechSol',
  keywords: ['BytechSol'],
  ogImage: defaultMeta.ogImage
};
const routeMeta: Record<string, typeof defaultMeta> = {
  '/': defaultMeta
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'BytechSol',
  url: baseUrl,
  email: 'contact@bytechsol.com',
  description: defaultMeta.description,
  sameAs: []
};

function AppContent() {
  const { theme } = useTheme();
  const { currentRoute } = useRouter();
  const pageClassName = `relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'secondary-bg' : 'soft-bg'
    }`;
  const serviceId = currentRoute.startsWith('/services/') ? currentRoute.replace('/services/', '') : null;
  const seoData = currentRoute === '/' ? defaultMeta : routeMeta[currentRoute] ?? blankMeta;
  const canonicalUrl = `${baseUrl}${currentRoute === '/' ? '' : currentRoute}`;
  const jsonLd = currentRoute === '/' ? organizationJsonLd : undefined;

  const renderPage = (
    content: ReactNode,
    options?: { includeNewsletter?: boolean; includeNavbar?: boolean; includeFooter?: boolean; includeSupportBot?: boolean }
  ) => (
    <div className={pageClassName}>
      <Background3D />
      {options?.includeNavbar !== false && <Navbar />}
      <Seo
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
        canonical={canonicalUrl}
        jsonLd={jsonLd}
      />
      {options?.includeNewsletter && <NewsletterPopup />}
      {content}
      {options?.includeFooter !== false && <Footer />}
      {options?.includeSupportBot !== false && <SupportBot />}
    </div>
  );

  // Admin page (hidden, no navbar/footer)
  if (currentRoute === '/admin') {
    return <AdminPage />;
  }

  // Blog page
  if (currentRoute === '/blog') {
    return renderPage(<BlogPage />);
  }

  // Show portfolio page
  if (currentRoute === '/portfolio') {
    return renderPage(<PortfolioPage />);
  }

  // Show about page
  if (currentRoute === '/about') {
    return renderPage(<AboutPage />);
  }

  // Show resources page
  if (currentRoute === '/resources') {
    return renderPage(<ResourcesPage />);
  }

  // Show team page
  if (currentRoute === '/team') {
    return renderPage(<TeamPage />);
  }

  // Show careers page
  if (currentRoute === '/careers') {
    return renderPage(<CareersPage />);
  }

  // Show press kit page
  if (currentRoute === '/press-kit') {
    return renderPage(<PressKitPage />);
  }

  // Show contact page
  if (currentRoute === '/contact') {
    return renderPage(<ContactPage />);
  }

  // Show privacy policy page
  if (currentRoute === '/privacy-policy') {
    return renderPage(<PrivacyPolicyPage />);
  }

  // Show terms of service page
  if (currentRoute === '/terms-of-service') {
    return renderPage(<TermsOfServicePage />);
  }

  // Show cookie policy page
  if (currentRoute === '/cookie-policy') {
    return renderPage(<CookiePolicyPage />);
  }

  // Show GDPR compliance page
  if (currentRoute === '/gdpr-compliance') {
    return renderPage(<GdprCompliancePage />);
  }

  // Show help center page
  if (currentRoute === '/help-center') {
    return renderPage(<HelpCenterPage />);
  }

  // Show tech stack page
  if (currentRoute === '/tech-stack') {
    return renderPage(<TechStackPage />);
  }

  // Show case studies page
  if (currentRoute === '/case-studies') {
    return renderPage(<CaseStudiesPage />);
  }

  // Show service detail pages for specific services
  if (currentRoute.startsWith('/services/')) {
    return renderPage(<ServiceDetailPage serviceId={serviceId ?? ''} />);
  }

  // Show services overview page
  if (currentRoute === '/services') {
    return renderPage(<ServicesPage />);
  }

  return renderPage(
    <>
      {/* Normal scroll - all sections in regular flow */}
      <Hero />
      <AgencyMission />
      <FeaturedProjects />
      <TechStack />
      <Testimonials />
      <CTASection />
    </>,
    { includeNewsletter: true }
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider>
        <AppContent />
      </RouterProvider>
    </ThemeProvider>
  );
}

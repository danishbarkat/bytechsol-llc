import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgencyMission } from './components/AgencyMission';
import { StorytellingJourney } from './components/StorytellingJourney';
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

function AppContent() {
  const { theme } = useTheme();
  const { currentRoute } = useRouter();

  // Admin page (hidden, no navbar/footer)
  if (currentRoute === '/admin') {
    return <AdminPage />;
  }

  // Blog page
  if (currentRoute === '/blog') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <BlogPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show portfolio page
  if (currentRoute === '/portfolio') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <PortfolioPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show about page
  if (currentRoute === '/about') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <AboutPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show resources page
  if (currentRoute === '/resources') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <ResourcesPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show team page
  if (currentRoute === '/team') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <TeamPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show careers page
  if (currentRoute === '/careers') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <CareersPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show press kit page
  if (currentRoute === '/press-kit') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <PressKitPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show contact page
  if (currentRoute === '/contact') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <ContactPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show privacy policy page
  if (currentRoute === '/privacy-policy') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <PrivacyPolicyPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show terms of service page (reusing privacy policy component for now)
  if (currentRoute === '/terms-of-service') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <PrivacyPolicyPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show cookie policy page (reusing privacy policy component for now)
  if (currentRoute === '/cookie-policy') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <PrivacyPolicyPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show GDPR compliance page (reusing privacy policy component for now)
  if (currentRoute === '/gdpr-compliance') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <PrivacyPolicyPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show service detail pages for specific services
  if (currentRoute.startsWith('/services/')) {
    const serviceId = currentRoute.replace('/services/', '');
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <ServiceDetailPage serviceId={serviceId} />
        <Footer />
        <SupportBot />
      </div>
    );
  }

  // Show services overview page
  if (currentRoute === '/services') {
    return (
      <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
        <Background3D />
        <Navbar />
        <ServicesPage />
        <Footer />
        <SupportBot />
      </div>
    );
  }
  
  return (
    <div className={`relative overflow-x-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
      <Background3D />
      <Navbar />
      <NewsletterPopup />
      
      {/* Normal scroll - all sections in regular flow */}
      <Hero />
      <AgencyMission />
      <FeaturedProjects />
      <TechStack />
      <Testimonials />
      <CTASection />
      <Footer />
      <SupportBot />
    </div>
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
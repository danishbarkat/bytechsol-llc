import { 
  Settings, 
  Code, 
  Laptop, 
  ShoppingCart, 
  Megaphone, 
  Search, 
  Brain, 
  Database,
  Globe,
  Palette,
  Smartphone,
  Zap,
  Target,
  TrendingUp,
  Users,
  Shield,
  Cloud,
  Package,
  CheckCircle2,
  BarChart,
  FileText,
  MessageSquare,
  Mail,
  Share2,
  Eye,
  Lightbulb,
  Sparkles,
  Boxes,
  Server,
  Workflow,
  ClipboardCheck,
  PieChart,
  type LucideIcon
} from 'lucide-react';

export interface SubService {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  gradient: string;
  subServices: SubService[];
}

export const servicesData: Service[] = [
  {
    id: 'odoo-services',
    icon: Settings,
    title: 'Odoo Services',
    subtitle: 'Complete Business Management Solution',
    description: 'Comprehensive Odoo ERP implementation, customization, and support services to streamline your entire business operations on a single unified platform.',
    color: '#a855f7',
    gradient: 'from-purple-600 to-violet-600',
    subServices: [
      {
        icon: Settings,
        title: 'Odoo Implementation',
        description: 'End-to-end Odoo ERP implementation tailored to your business needs with seamless migration and data transfer.',
        features: ['System Configuration', 'Data Migration', 'Module Setup', 'User Training']
      },
      {
        icon: Code,
        title: 'Odoo Customization',
        description: 'Custom module development and workflow customization to match your unique business processes.',
        features: ['Custom Module Development', 'Workflow Automation', 'Report Customization', 'API Integration']
      },
      {
        icon: Cloud,
        title: 'Odoo Integration',
        description: 'Seamless integration of Odoo with third-party applications, payment gateways, and external systems.',
        features: ['Third-party Integration', 'Payment Gateway Setup', 'API Development', 'Data Synchronization']
      },
      {
        icon: Shield,
        title: 'Odoo Support & Maintenance',
        description: 'Ongoing support, updates, and maintenance to keep your Odoo system running smoothly.',
        features: ['24/7 Support', 'Version Upgrades', 'Bug Fixes', 'Performance Optimization']
      }
    ]
  },
  {
    id: 'custom-web-solution',
    icon: Code,
    title: 'Custom Web Solution',
    subtitle: 'Tailored Web Applications',
    description: 'Bespoke web solutions designed and developed specifically for your unique business requirements with cutting-edge technologies.',
    color: '#3b82f6',
    gradient: 'from-blue-600 to-cyan-600',
    subServices: [
      {
        icon: Lightbulb,
        title: 'Requirement Analysis',
        description: 'In-depth analysis of your business needs and technical requirements to create the perfect solution.',
        features: ['Business Process Mapping', 'Technical Feasibility Study', 'Requirement Documentation', 'Solution Architecture']
      },
      {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Custom interface design that reflects your brand identity and provides exceptional user experience.',
        features: ['Wireframing', 'Mockup Design', 'Prototype Development', 'User Flow Design']
      },
      {
        icon: Code,
        title: 'Custom Development',
        description: 'Full-stack development with modern frameworks and best practices for scalable applications.',
        features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Development']
      },
      {
        icon: Zap,
        title: 'Performance Optimization',
        description: 'Speed optimization and performance tuning for lightning-fast web applications.',
        features: ['Code Optimization', 'Caching Strategy', 'CDN Integration', 'Load Time Reduction']
      }
    ]
  },
  {
    id: 'web-app-software-development',
    icon: Laptop,
    title: 'Web App & Software Development',
    subtitle: 'Enterprise-Grade Applications',
    description: 'Full-cycle software development services from concept to deployment, building robust and scalable web applications.',
    color: '#06b6d4',
    gradient: 'from-cyan-600 to-blue-600',
    subServices: [
      {
        icon: Boxes,
        title: 'Progressive Web Apps (PWA)',
        description: 'Modern web applications that work offline and provide native app-like experience.',
        features: ['Offline Functionality', 'Push Notifications', 'App Install Prompt', 'Fast Loading']
      },
      {
        icon: Cloud,
        title: 'SaaS Development',
        description: 'Multi-tenant SaaS platforms with subscription management and scalable architecture.',
        features: ['Multi-tenancy', 'Subscription Billing', 'User Management', 'Analytics Dashboard']
      },
      {
        icon: Smartphone,
        title: 'Cross-Platform Development',
        description: 'Build once, deploy everywhere with React Native and Flutter for web and mobile.',
        features: ['React Native', 'Flutter', 'Responsive Design', 'Unified Codebase']
      },
      {
        icon: Server,
        title: 'Backend Infrastructure',
        description: 'Robust backend systems with microservices architecture and cloud deployment.',
        features: ['Microservices', 'Cloud Hosting', 'Auto-scaling', 'Load Balancing']
      }
    ]
  },
  {
    id: 'ecommerce-solutions',
    icon: ShoppingCart,
    title: 'E-Commerce Solutions',
    subtitle: 'Complete Online Store Development',
    description: 'Full-featured e-commerce platforms with payment integration, inventory management, and advanced analytics.',
    color: '#10b981',
    gradient: 'from-emerald-600 to-teal-600',
    subServices: [
      {
        icon: ShoppingCart,
        title: 'Online Store Development',
        description: 'Custom e-commerce stores with intuitive shopping experiences and secure checkout.',
        features: ['Product Catalog', 'Shopping Cart', 'Checkout System', 'Order Management']
      },
      {
        icon: Package,
        title: 'Payment Gateway Integration',
        description: 'Secure payment processing with multiple payment methods and fraud protection.',
        features: ['Stripe Integration', 'PayPal Setup', 'Credit Card Processing', 'Digital Wallets']
      },
      {
        icon: BarChart,
        title: 'Inventory Management',
        description: 'Real-time inventory tracking with automated stock alerts and supplier management.',
        features: ['Stock Tracking', 'Auto Reordering', 'Supplier Management', 'Warehouse Integration']
      },
      {
        icon: TrendingUp,
        title: 'E-Commerce Analytics',
        description: 'Comprehensive analytics and reporting to track sales, customers, and business growth.',
        features: ['Sales Reports', 'Customer Insights', 'Conversion Tracking', 'ROI Analysis']
      }
    ]
  },
  {
    id: 'brand-building',
    icon: Megaphone,
    title: 'Brand Building',
    subtitle: 'Strategic Brand Development',
    description: 'Comprehensive brand strategy and identity design to create a memorable and impactful brand presence.',
    color: '#f59e0b',
    gradient: 'from-amber-600 to-orange-600',
    subServices: [
      {
        icon: Target,
        title: 'Brand Strategy',
        description: 'Strategic brand positioning and messaging that resonates with your target audience.',
        features: ['Brand Positioning', 'Competitive Analysis', 'Target Audience Research', 'Brand Voice']
      },
      {
        icon: Palette,
        title: 'Brand Identity Design',
        description: 'Complete visual identity system including logo, colors, typography, and brand guidelines.',
        features: ['Logo Design', 'Color Palette', 'Typography System', 'Brand Guidelines']
      },
      {
        icon: FileText,
        title: 'Marketing Collateral',
        description: 'Professional design of all marketing materials to maintain brand consistency.',
        features: ['Business Cards', 'Brochures', 'Presentations', 'Social Media Graphics']
      },
      {
        icon: Users,
        title: 'Brand Management',
        description: 'Ongoing brand management and evolution to keep your brand relevant and engaging.',
        features: ['Brand Monitoring', 'Reputation Management', 'Brand Evolution', 'Consistency Control']
      }
    ]
  },
  {
    id: 'seo-services',
    icon: Search,
    title: 'SEO Services',
    subtitle: 'Search Engine Optimization Excellence',
    description: 'Data-driven SEO strategies to improve your search rankings, drive organic traffic, and increase conversions.',
    color: '#ec4899',
    gradient: 'from-pink-600 to-rose-600',
    subServices: [
      {
        icon: Search,
        title: 'Technical SEO',
        description: 'Website optimization for search engine crawling, indexing, and overall technical performance.',
        features: ['Site Audit', 'Speed Optimization', 'Mobile Optimization', 'Schema Markup']
      },
      {
        icon: FileText,
        title: 'Content Optimization',
        description: 'Strategic content creation and optimization to rank for high-value keywords.',
        features: ['Keyword Research', 'Content Strategy', 'On-Page SEO', 'Content Writing']
      },
      {
        icon: Share2,
        title: 'Link Building',
        description: 'High-quality backlink acquisition to boost domain authority and search rankings.',
        features: ['Guest Posting', 'Resource Link Building', 'Broken Link Building', 'Outreach Campaigns']
      },
      {
        icon: BarChart,
        title: 'SEO Analytics & Reporting',
        description: 'Comprehensive tracking and reporting of SEO performance and ROI.',
        features: ['Rank Tracking', 'Traffic Analysis', 'Conversion Tracking', 'Monthly Reports']
      }
    ]
  },
  {
    id: 'ai-ml-services',
    icon: Brain,
    title: 'AI / ML Services',
    subtitle: 'Intelligent Automation & Analytics',
    description: 'Advanced AI and machine learning solutions to automate processes, gain insights, and create intelligent applications.',
    color: '#8b5cf6',
    gradient: 'from-violet-600 to-purple-600',
    subServices: [
      {
        icon: Brain,
        title: 'Machine Learning Models',
        description: 'Custom ML models for prediction, classification, and pattern recognition.',
        features: ['Predictive Analytics', 'Classification Models', 'Recommendation Systems', 'Anomaly Detection']
      },
      {
        icon: MessageSquare,
        title: 'Natural Language Processing',
        description: 'NLP solutions for text analysis, chatbots, and language understanding.',
        features: ['Chatbot Development', 'Sentiment Analysis', 'Text Classification', 'Language Translation']
      },
      {
        icon: Eye,
        title: 'Computer Vision',
        description: 'Image and video analysis solutions for object detection and recognition.',
        features: ['Image Recognition', 'Object Detection', 'Face Recognition', 'Video Analysis']
      },
      {
        icon: Workflow,
        title: 'AI Integration',
        description: 'Seamless integration of AI capabilities into existing business applications.',
        features: ['API Development', 'Model Deployment', 'Cloud Integration', 'Real-time Processing']
      }
    ]
  },
  {
    id: 'erp-services',
    icon: Database,
    title: 'ERP Services',
    subtitle: 'Enterprise Resource Planning',
    description: 'Comprehensive ERP solutions to integrate and streamline all business processes across your organization.',
    color: '#14b8a6',
    gradient: 'from-teal-600 to-cyan-600',
    subServices: [
      {
        icon: Database,
        title: 'ERP Implementation',
        description: 'Complete ERP system implementation with process mapping and change management.',
        features: ['System Selection', 'Process Mapping', 'Data Migration', 'Go-Live Support']
      },
      {
        icon: Workflow,
        title: 'Business Process Automation',
        description: 'Automate repetitive tasks and workflows to increase efficiency and reduce errors.',
        features: ['Workflow Automation', 'Approval Processes', 'Task Scheduling', 'Email Automation']
      },
      {
        icon: PieChart,
        title: 'ERP Analytics & BI',
        description: 'Business intelligence and analytics dashboards for data-driven decision making.',
        features: ['Custom Dashboards', 'KPI Tracking', 'Predictive Analytics', 'Report Generation']
      },
      {
        icon: ClipboardCheck,
        title: 'ERP Consulting',
        description: 'Expert consulting to optimize your ERP system and business processes.',
        features: ['Process Optimization', 'Best Practices', 'Training', 'Change Management']
      }
    ]
  },
  {
    id: 'website-design-development',
    icon: Globe,
    title: 'Website Design & Development',
    subtitle: 'Modern & Responsive Websites',
    description: 'Beautiful, fast, and SEO-friendly websites that convert visitors into customers with stunning design and performance.',
    color: '#6366f1',
    gradient: 'from-indigo-600 to-blue-600',
    subServices: [
      {
        icon: Palette,
        title: 'Responsive Design',
        description: 'Mobile-first responsive websites that look perfect on all devices and screen sizes.',
        features: ['Mobile Optimization', 'Tablet Support', 'Desktop Design', 'Cross-browser Testing']
      },
      {
        icon: Zap,
        title: 'Performance Optimization',
        description: 'Lightning-fast websites with optimized images, code, and caching strategies.',
        features: ['Image Optimization', 'Code Minification', 'Lazy Loading', 'CDN Integration']
      },
      {
        icon: Shield,
        title: 'Security & Maintenance',
        description: 'Secure websites with SSL, regular updates, and ongoing maintenance support.',
        features: ['SSL Certificate', 'Security Audits', 'Regular Backups', 'Update Management']
      },
      {
        icon: TrendingUp,
        title: 'SEO & Analytics',
        description: 'SEO-optimized websites with integrated analytics for tracking and growth.',
        features: ['On-Page SEO', 'Google Analytics', 'Search Console', 'Performance Tracking']
      }
    ]
  }
];

// Get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return servicesData.find(service => service.id === id);
};

// Get all service titles for navigation
export const getServiceTitles = (): Array<{ id: string; title: string }> => {
  return servicesData.map(service => ({
    id: service.id,
    title: service.title
  }));
};

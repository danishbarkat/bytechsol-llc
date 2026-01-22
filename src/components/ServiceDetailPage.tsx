import React, { Fragment, useState, type ComponentType } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  Clock,
  Database,
  Code2,
  Globe,
  Magnet,
  Package,
  Shield,
  ShieldCheck,
  Settings,
  ShoppingCart,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  X,
  Zap
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { useRouter } from './Router';

interface ServiceDetailPageProps {
  serviceId: string;
}

interface HeroFeature {
  icon: ComponentType<{ className?: string }>;
  label: string;
}

interface HeroModule {
  icon: ComponentType<{ className?: string }>;
  label: string;
  angle: number;
  colors: string;
  delay: number;
  solidClass?: string;
  glowClass?: string;
  solidColor?: string;
}

const heroFeatures: HeroFeature[] = [
  { icon: Zap, label: '8-12 weeks' },
  { icon: Shield, label: '95% Success' },
  { icon: CheckCircle, label: 'Standard-First' }
];

const heroModules: HeroModule[] = [
  {
    icon: ShoppingCart,
    label: 'Sales',
    angle: 0,
    colors: 'from-blue-400 to-blue-600',
    delay: 0,
    solidClass: 'bg-blue-500',
    glowClass: 'bg-blue-500/55',
    solidColor: '#3b82f6'
  },
  {
    icon: Code2,
    label: 'Custom Dev',
    angle: 45,
    colors: 'from-indigo-400 to-indigo-600',
    delay: 0.1,
    solidClass: 'bg-indigo-500',
    glowClass: 'bg-indigo-500/55',
    solidColor: '#6366f1'
  },
  {
    icon: Package,
    label: 'Inventory',
    angle: 90,
    colors: 'from-cyan-400 to-cyan-600',
    delay: 0.2,
    solidClass: 'bg-cyan-500',
    glowClass: 'bg-cyan-500/55',
    solidColor: '#06b6d4'
  },
  {
    icon: Smartphone,
    label: 'Mobile App',
    angle: 135,
    colors: 'from-teal-400 to-teal-600',
    delay: 0.3,
    solidClass: 'bg-teal-500',
    glowClass: 'bg-teal-500/55',
    solidColor: '#14b8a6'
  },
  {
    icon: Users,
    label: 'HR',
    angle: 180,
    colors: 'from-purple-400 to-purple-600',
    delay: 0.4,
    solidClass: 'bg-purple-500',
    glowClass: 'bg-purple-500/55',
    solidColor: '#a855f7'
  },
  {
    icon: BarChart3,
    label: 'Finance',
    angle: 225,
    colors: 'from-pink-400 to-pink-600',
    delay: 0.5,
    solidClass: 'bg-pink-500',
    glowClass: 'bg-pink-500/55',
    solidColor: '#ec4899'
  },
  {
    icon: Settings,
    label: 'Manufacturing',
    angle: 270,
    colors: 'from-orange-400 to-orange-600',
    delay: 0.6,
    solidClass: 'bg-orange-500',
    glowClass: 'bg-orange-500/55',
    solidColor: '#f97316'
  },
  {
    icon: Globe,
    label: 'CRM',
    angle: 315,
    colors: 'from-green-400 to-green-600',
    delay: 0.7,
    solidClass: 'bg-green-500',
    glowClass: 'bg-green-500/60',
    solidColor: '#22c55e'
  }
];

const legacyMetrics = [
  { label: 'Cost', value: '$150K - $500K' },
  { label: 'Timeline', value: '12+ months' },
  { label: 'Success rate', value: '50%' },
  { label: 'Annual maintenance', value: '$50K - $200K' }
];

const odooMetrics = [
  { label: 'Cost', value: '$40K - $80K' },
  { label: 'Timeline', value: '8-12 weeks' },
  { label: 'Success rate', value: '95%' },
  { label: 'Annual maintenance', value: '$5K - $15K' }
];

const serviceBlocks = [
  {
    eyebrow: 'GAP Analysis',
    title: '1. Odoo ERP Consultation & GAP Analysis',
    offer:
      "Our consultation service begins with a comprehensive GAP analysis that maps your business requirements to Odoo's standard features. We identify process improvements, eliminate redundant workflows, and provide a clear roadmap for implementation. This phase is 10% of your timeline but ensures the remaining 90% runs smoothly.",
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    deliverables: [
      'Business process mapping and workflow documentation',
      'GAP analysis report identifying standard vs custom requirements',
      'Cost-benefit analysis with long-term maintenance impact',
      'Implementation timeline with phased milestones',
      'Risk assessment and mitigation strategies',
      'ROI projections based on your business model',
      'Stakeholder alignment presentation with methodology commitments'
    ],
    process: [
      'Focused discovery workshops in intensive 2-3 day sessions.',
      'Map workflows and uncover legacy steps that no longer serve business goals.',
      "Align requirements with Odoo's out-of-the-box modules across the suite.",
      'Score every customization by necessity, complexity, and total cost of ownership.',
      'Deliver a phased plan with resources, budgets, and a clear go-live path.'
    ]
  },
  {
    eyebrow: 'Implementation',
    title: '2. Full-Scale Odoo ERP Implementation',
    offer:
      "We deliver end-to-end Odoo implementation from configuration and data migration to training and go-live support. Our methodology emphasizes short implementation cycles with continuous validation, reducing the risks that typically derail ERP deployments.",
    image: '/assets/services/Odoo Service/Full-Scale Odoo ERP Implementation.jpg',
    deliverables: [
      'Fully configured Odoo instance aligned to your workflows',
      'Clean data migration of master data and open transactions',
      'Automation rules using Odoo Studio when justified',
      'Integrations with payments, ecommerce, and shipping tools',
      'User documentation and role-based training materials',
      'Go-live support with a 30-day stabilization window',
      'Post-launch optimization recommendations',
      'Access to Odoo 18 industry packages and KPI dashboards'
    ],
    process: [
      'Single Odoo Project Leader manages delivery, analysis, and training.',
      '1-2 week cycles: configure, validate, and train using real workflows.',
      'Greenfield migration: master data, open transactions, current inventory.',
      'Convert skeptics early through hands-on testing and quick wins.',
      'Firm go-live date plus a 30-day stabilization period.'
    ]
  },
  {
    eyebrow: 'Optimization',
    title: '3. Odoo Optimization & Upgrade Services',
    offer:
      "Already on Odoo? We audit your setup, remove technical debt, and upgrade to Odoo 18 to unlock new capabilities. Many clients maintain custom modules that now exist as standard features. We replace those where possible and refactor the rest using Odoo best practices.",
    image: '/assets/services/Odoo Service/Odoo Optimization & Upgrade Services.jpg',
    deliverables: [
      'System audit covering customizations and bottlenecks',
      'Technical debt assessment with annual cost projections',
      'Upgrade roadmap to Odoo 18 with mitigation plan',
      'Replacement of custom modules with standard features',
      'Performance tuning delivering 200-500% speed gains',
      'New feature enablement and role-based training',
      'Updated documentation and compliance review'
    ],
    process: [
      'Review all custom modules, third-party integrations, and configurations.',
      'Evaluate each customization against the 25% annual maintenance rule.',
      'Refactor necessary code using standard extension methods.',
      'Validate upgrades in staging with real scenarios and data.',
      'Deliver productivity upgrades and retraining for Odoo 18 features.'
    ]
  }
];

const methodologyPoints = [
  {
    title: 'On-time and on-budget as primary KPIs',
    text:
      'Traditional ERP projects reward scope creep. We prioritize delivery, budget control, and long-term stability as our primary KPIs.'
  },
  {
    title: 'Single Point of Contact framework',
    text:
      'One Odoo Project Leader and one client SPoC with decision authority and 20% time commitment.'
  },
  {
    title: 'The Rule of Simplicity',
    text:
      'Can we achieve 80% of the benefit using standard features? We challenge every customization.'
  }
];

const traditionalErpPain = [
  'Six-figure implementations ($150,000-$500,000) with year-long timelines',
  'Vendor lock-in, closed source systems, and aggressive licensing costs',
  'Customization traps that break with every upgrade',
  'Complexity that overwhelms SMEs and causes 50% failure rates'
];

const odooAdvantages = [
  {
    title: 'Transparent pricing',
    text: 'Typically $24.90-$37.40 per user per month. 25-user implementations often total $40,000-$80,000.'
  },
  {
    title: 'Rapid deployment',
    text: '8-12 week timelines with standard-first delivery. Our fastest full standard implementation was 9 days.'
  },
  {
    title: 'Standard-first success',
    text: '30+ integrated modules cover 95% of SME requirements without custom code.'
  },
  {
    title: 'Open-source foundation',
    text: 'You own your data, can export anytime, and can switch partners without rebuilding.'
  },
  {
    title: 'Modular scalability',
    text: 'Start with 3 modules and scale to 30+ as your business grows.'
  },
  {
    title: 'Affordable upgrades',
    text: 'Annual releases with upgrades typically $5,000-$15,000 instead of $50,000-$200,000.'
  }
];

const industries = [
  {
    title: 'Legal Services & Law Firms',
    description:
      'Matter management with timelines, trust accounting compliance, and secure client portals.',
    image: '/assets/services/Odoo Service/Legal Services & Law Firms.jpg',
    features: [
      'Time tracking with mobile support and WIP billing',
      'Conflict checking and document management',
      'Advanced billing with write-offs and settlement tracking'
    ]
  },
  {
    title: 'Marketing Agencies & Creative Services',
    description:
      'Project management, retainer tracking, and profitability insights by client and campaign.',
    image: '/assets/services/Odoo Service/Marketing Agencies & Creative Services.jpg',
    features: [
      'Resource allocation and time tracking tied to billing',
      'Client portal for briefs and approvals',
      'Creative asset library with version control'
    ]
  },
  {
    title: 'Manufacturing & Production',
    description:
      'MRP with procurement automation, quality control, and traceability.',
    image: '/assets/services/Odoo Service/Manufacturing & Production.jpg',
    features: [
      'Work order management with shop floor tablets',
      'Batch and serial tracking for compliance',
      'Capacity planning with work center load views'
    ]
  },
  {
    title: 'E-Commerce & Retail',
    description:
      'Unified ecommerce, POS, inventory, and accounting across channels.',
    image: '/assets/services/Odoo Service/E-Commerce & Retail.jpg',
    features: [
      'Multi-channel selling with real-time inventory sync',
      'Automated dropshipping and fulfillment workflows',
      'Abandoned cart recovery and customer segmentation'
    ]
  },
  {
    title: 'Professional Services & Consulting',
    description:
      'Project-based billing, timesheets, and real-time profitability tracking.',
    image: '/assets/services/Odoo Service/Professional Services & Consulting.jpg',
    features: [
      'Flexible billing: hourly, fixed-fee, value-based',
      'Expense tracking with automatic client invoicing',
      'Capacity planning for optimal utilization'
    ]
  },
  {
    title: 'Non-Profit Organizations & NGOs',
    description:
      'Donor management, grant tracking, and program accounting.',
    image: '/assets/services/Odoo Service/Non-Profit Organizations & NGOs.jpg',
    features: [
      'Contribution tracking with acknowledgment letters',
      'Volunteer scheduling and hour tracking',
      'Compliance reporting for fund restrictions'
    ]
  },
  {
    title: 'Food & Beverage',
    description:
      'Recipe management, batch traceability, and seasonal production planning.',
    image: '/assets/services/Odoo Service/food & beverage.jpg',
    features: [
      'FIFO and FEFO inventory controls',
      'Ingredient costing and nutritional labeling',
      'Supplier quality management and recall readiness'
    ]
  }
];

const faqs = [
  {
    question: 'How long does a typical Odoo implementation take?',
    answer:
      "For SMEs, 8-12 weeks is typical from kickoff to go-live. Complex multi-company implementations may extend to 16 weeks. The biggest factor is your commitment to the Single Point of Contact framework and willingness to use standard features."
  },
  {
    question: 'Should we migrate our complete transaction history into Odoo?',
    answer:
      'Usually no. We recommend a Greenfield migration: master data, open transactions, current inventory, and opening balances. This saves 40-60% of migration cost and keeps operations clean. Historical data stays in the legacy system for reference.'
  },
  {
    question: 'What is the difference between Odoo Standard and Odoo Custom plans?',
    answer:
      'Odoo Standard includes core modules for single-company use. Odoo Custom is required for multi-company management, external API access, and Odoo Studio. Most SMEs start with Standard and upgrade only when needed.'
  },
  {
    question: 'How do you handle employee resistance to change?',
    answer:
      'We sell the benefits, involve skeptics early, use hands-on training with the Mouse and Keyboard rule, and deliver quick wins to build momentum.'
  },
  {
    question: 'What is the true cost of custom development in Odoo?',
    answer:
      'Custom development creates technical debt that costs about 25% of the initial build annually. A $10,000 customization costs $2,500 per year forever. We only customize when the long-term ROI is clear.'
  }
];

const customHeroFeatures: HeroFeature[] = [
  { icon: Zap, label: 'High-performance builds' },
  { icon: Shield, label: 'Secure by design' },
  { icon: CheckCircle, label: 'Built to scale' }
];

const webDesignHeroFeatures: HeroFeature[] = [
  { icon: Zap, label: 'AI-powered personalization' },
  { icon: Shield, label: 'Core Web Vitals performance' },
  { icon: CheckCircle, label: 'Accessible by design' }
];

const customWebServiceBlocks = [
  {
    eyebrow: 'Custom Websites',
    title: '1. Custom Website Design & Development',
    offer:
      'We create bespoke websites that reflect your brand identity while delivering exceptional user experiences and powerful backend functionality. Every element is designed around your business model and customer journey, giving you unlimited flexibility to implement exactly what you need.',
    image: '/assets/services/Custom Web Solution/Custom Website Design & Development High Res.png',
    deliverables: [
      'Fully responsive custom website designed for all devices and screen sizes',
      'Bespoke UI/UX design aligned with your brand guidelines and target audience preferences',
      'Custom content management system (CMS) or WordPress with advanced custom post types and fields',
      'SEO-optimized architecture with clean code and fast loading speeds (Core Web Vitals compliance)',
      'Advanced functionality like multi-step forms, interactive calculators, or configurators',
      'Integration with third-party services (payment gateways, marketing automation, analytics)',
      'Security hardening with SSL, regular backups, and malware protection',
      'Comprehensive documentation and content management training',
      '3-month post-launch support and optimization'
    ],
    process: [
      'Discovery and strategy to define goals, audiences, competitors, and conversion targets.',
      'Information architecture and wireframing to validate structure and user flows.',
      'Custom UI/UX design with desktop and mobile mockups plus interactive prototypes.',
      'Frontend development with accessibility and performance optimization built in.',
      'Backend development and CMS integration with roles, workflows, and editing tools.',
      'Testing and QA across devices, performance, security, and user acceptance.',
      'Launch and optimization with hosting, SSL, analytics, and post-launch monitoring.'
    ]
  },
  {
    eyebrow: 'Custom eCommerce',
    title: '2. Custom eCommerce Development',
    offer:
      'We build powerful eCommerce platforms tailored to your catalog, sales model, and customer experience requirements. From B2B portals to subscription commerce and configurators, we deliver conversion-optimized shopping experiences that reduce cart abandonment and increase average order value.',
    image: '/assets/services/Custom Web Solution/Custom eCommerce Development High Res 2.png',
    deliverables: [
      'Custom eCommerce platform built on WooCommerce, Magento, or bespoke architecture',
      'Advanced product catalog with custom attributes, variations, and filtering systems',
      'Intelligent search with autocomplete, typo tolerance, and faceted navigation',
      'Custom checkout flows optimized for your products and customer segments',
      'Multiple payment gateway integrations (cards, wallets, buy-now-pay-later)',
      'Real-time shipping calculations with custom shipping rules',
      'Inventory management with stock alerts and supplier integration options',
      'Customer portal with order history, wishlists, and subscription management',
      'Integration with accounting systems (QuickBooks, Xero, Odoo)',
      'Marketing automation connections for abandoned cart and post-purchase flows',
      'Analytics dashboard for conversion funnels, products, and lifetime value',
      'Mobile-responsive design with progressive web app (PWA) capabilities'
    ],
    process: [
      'eCommerce strategy and requirements to align products, pricing, and goals.',
      'Product catalog architecture with attributes, pricing rules, and taxonomy.',
      'UX design for homepage, category, product, cart, and checkout flows.',
      'Payment and security implementation with PCI-ready processing.',
      'Inventory and order management with automation and fulfillment rules.',
      'Integration ecosystem connecting CRM, accounting, and marketing systems.',
      'Conversion optimization with A/B testing, performance monitoring, and analytics.'
    ]
  },
  {
    eyebrow: 'Custom Web Apps',
    title: '3. Custom Web Application Development',
    offer:
      'We develop sophisticated web applications that automate workflows, manage data, and empower your team and customers. Custom apps are built around your exact processes for performance, security, and scalability.',
    image: '/assets/services/Custom Web Solution/Custom Web Application Development High Res.png',
    deliverables: [
      'Fully custom web application built with modern frameworks',
      'Responsive interface for desktop, tablet, and mobile access',
      'User authentication and authorization with role-based permissions',
      'Real-time data sync and collaborative features',
      'Advanced data visualization with dashboards and reporting',
      'API integrations with third-party services and existing systems',
      'Automated workflows and business logic tailored to your operations',
      'Progressive Web App (PWA) implementation for offline functionality',
      'Database architecture optimized for your data structure and queries',
      'Comprehensive admin panel for system management and configuration',
      'Documentation including user guides, API docs, and architecture diagrams',
      'Scalable hosting with automated backups and disaster recovery',
      'Ongoing maintenance with security updates and feature enhancements'
    ],
    process: [
      'Requirements gathering and system design with user stories and data models.',
      'Technology stack selection based on scalability and maintainability needs.',
      'Agile development sprints with demos and iterative feedback.',
      'Database and backend architecture with secure APIs and workflows.',
      'Frontend development with responsive UI and accessibility compliance.',
      'Integration and automation with CRM, accounting, and messaging systems.',
      'Security and performance optimization with testing and monitoring.',
      'Deployment and scalability setup with CI/CD and cloud infrastructure.'
    ]
  }
];

const webDesignServiceBlocks = [
  {
    eyebrow: 'Personalization',
    title: '1. AI-Powered Personalization & Intelligent UX',
    offer:
      'We build adaptive experiences that adjust messaging, recommendations, and CTAs based on visitor intent signals. Personalization stays privacy-conscious and keeps your brand voice authentic.',
    image: '/assets/services/Website & Development/AI-Powered Personalization & Intelligent UX.jpg',
    deliverables: [
      'Personalization strategy mapping segments to content variants',
      'Privacy-first behavioral tracking with consent controls',
      'Dynamic content rules and A/B testing setup',
      'User preference dashboard with clear data controls',
      'Content recommendation logic tailored to your services',
      'Monthly analytics showing conversion lift',
      'CMS integration for managing variants'
    ],
    process: [
      'Discovery and audience analysis to define segments and intent signals.',
      'Technical architecture for real-time personalization and consent handling.',
      'Content variant creation across headlines, CTAs, and value propositions.',
      'Implementation and QA across devices and scenarios.',
      'Ongoing optimization through testing and performance reviews.'
    ]
  },
  {
    eyebrow: 'Performance',
    title: '2. Performance Optimization & Technical Excellence',
    offer:
      'We engineer websites to meet Core Web Vitals targets, improve AI visibility, and deliver fast experiences across every device. Performance gains boost conversions and rankings.',
    image: '/assets/services/Website & Development/Performance Optimization & Technical Excellence.jpg',
    deliverables: [
      'Core Web Vitals optimization for LCP, INP, and CLS',
      'Optimized media assets using modern formats (WebP, AVIF)',
      'Critical CSS extraction and JavaScript bundle optimization',
      'CDN configuration for global performance',
      'Answer engine optimization with structured FAQ content',
      'Performance monitoring with monthly benchmarks',
      'Technical audit with prioritized improvements'
    ],
    process: [
      'Comprehensive performance audit and baseline benchmarking.',
      'Infrastructure tuning with caching, compression, and CDN setup.',
      'Front-end optimization for assets, scripts, and rendering.',
      'Content structure refinement for answer engines and schema.',
      'Testing across devices and ongoing monitoring post-launch.'
    ]
  },
  {
    eyebrow: 'Accessibility',
    title: '3. Accessibility Compliance & Inclusive Design',
    offer:
      'We deliver WCAG 2.2-ready experiences that expand reach, reduce legal risk, and serve every user. Accessibility is embedded into design systems and development workflows.',
    image: '/assets/services/Website & Development/Accessibility Compliance & Inclusive Design.jpg',
    deliverables: [
      'WCAG 2.2 accessibility audit with remediation roadmap',
      'Accessible design system for colors, typography, and components',
      'Semantic HTML with ARIA labels and landmarks',
      'Keyboard navigation and focus management',
      'Screen reader testing across major assistive tech',
      'Accessibility statement with issue reporting workflow',
      'Team documentation and maintenance guidance'
    ],
    process: [
      'Accessibility audit and gap analysis using tools and manual checks.',
      'Design system refinement for accessible patterns and contrast.',
      'Development remediation with semantic markup and ARIA.',
      'Assistive technology testing across real devices.',
      'Documentation, training, and ongoing compliance monitoring.'
    ]
  }
];

const customTemplateMetrics = [
  { label: 'Flexibility', value: 'Limited' },
  { label: 'Performance', value: 'Bloated' },
  { label: 'Scalability', value: 'Capped' },
  { label: 'Security', value: 'Shared risks' }
];

const customDevMetrics = [
  { label: 'Flexibility', value: 'Unlimited' },
  { label: 'Performance', value: 'Optimized' },
  { label: 'Scalability', value: 'Built to scale' },
  { label: 'Security', value: 'Hardened' }
];

const customTemplatePain = [
  'Template structures limit unique workflows and UX.',
  'Bloated code slows load times and hurts SEO.',
  'Plugin dependence creates hidden costs and conflicts.',
  'Shared vulnerabilities make templates frequent targets.'
];

const customDevAdvantages = [
  {
    title: 'Unlimited flexibility',
    text: 'Build exactly what your business needs without platform constraints.'
  },
  {
    title: 'Performance and speed',
    text: 'Only the code you need, delivering faster load times and higher conversions.'
  },
  {
    title: 'Scalability',
    text: 'Architecture designed to grow with traffic, catalog size, and complexity.'
  },
  {
    title: 'Security by design',
    text: 'Custom code reduces automated attacks and allows targeted hardening.'
  },
  {
    title: 'Integration capabilities',
    text: 'Connect CRM, accounting, and marketing systems with tailored data flows.'
  },
  {
    title: 'Long-term ROI',
    text: 'Lower maintenance overhead and better results than template stacks.'
  }
];

const webDesignLegacyMetrics = [
  { label: 'Experience', value: 'Static' },
  { label: 'Performance', value: 'Slow' },
  { label: 'Discoverability', value: 'Low' },
  { label: 'Compliance', value: 'Risky' }
];

const webDesignModernMetrics = [
  { label: 'Experience', value: 'Personalized' },
  { label: 'Performance', value: 'Core Web Vitals' },
  { label: 'Discoverability', value: 'AI-ready' },
  { label: 'Compliance', value: 'WCAG 2.2' }
];

const webDesignLegacyPain = [
  'Generic messaging that ignores visitor intent.',
  'Slow loading speeds that increase bounce rates.',
  'Accessibility gaps that risk lawsuits and lost users.',
  'Limited structure for AI search and answer engines.'
];

const webDesignModernAdvantages = [
  {
    title: 'Intent-based personalization',
    text: 'Dynamic content adapts to behavior for higher conversion rates.'
  },
  {
    title: 'Performance engineered',
    text: 'Optimized delivery and Core Web Vitals improvements keep users engaged.'
  },
  {
    title: 'Inclusive by default',
    text: 'Accessible design expands reach and reduces compliance risk.'
  },
  {
    title: 'Answer engine ready',
    text: 'Structured content improves visibility in AI-driven discovery.'
  }
];

const customWebIndustries = [
  {
    title: 'Professional Services & Consulting',
    description:
      'Client portals, project management, and workflow automation that streamline delivery.',
    image: '/assets/services/Custom Web Solution/Professional Services & Consulting.jpg',
    features: [
      'Client portals with project tracking and approvals',
      'Time tracking tied to billing and proposals',
      'Resource allocation and utilization dashboards'
    ]
  },
  {
    title: 'Healthcare & Medical',
    description:
      'Secure patient portals, scheduling, and telemedicine-ready workflows.',
    image: '/assets/services/Custom Web Solution/Healthcare & Medical.jpg',
    features: [
      'HIPAA-ready patient data handling',
      'Appointment scheduling and reminders',
      'Secure document exchange and intake'
    ]
  },
  {
    title: 'Real Estate',
    description:
      'Property listings, lead capture, and transaction management built for scale.',
    image: '/assets/services/Custom Web Solution/Real estate.jpg',
    features: [
      'IDX and property listing management',
      'Lead capture with CRM sync',
      'Document hubs for transaction tracking'
    ]
  },
  {
    title: 'Education & E-Learning',
    description:
      'Learning platforms, student portals, and assessment systems for modern delivery.',
    image: '/assets/services/Custom Web Solution/Education and e-learning.jpg',
    features: [
      'LMS and course registration flows',
      'Student portals with progress tracking',
      'Online assessments and certification'
    ]
  },
  {
    title: 'Manufacturing & Distribution',
    description:
      'Inventory, ordering, and supplier portals that reduce operational friction.',
    image: '/assets/services/Custom Web Solution/Manufacturing & Distribution.jpg',
    features: [
      'Inventory and order tracking systems',
      'Supplier and B2B customer portals',
      'Production and fulfillment scheduling'
    ]
  },
  {
    title: 'Nonprofit & NGO',
    description:
      'Donor management, volunteer coordination, and impact reporting platforms.',
    image: '/assets/services/Custom Web Solution/Nonprofit & NGO.jpg',
    features: [
      'Donor management with recurring giving',
      'Volunteer coordination and scheduling',
      'Event registration and grant tracking'
    ]
  }
];

const webDesignIndustries = [
  {
    title: 'Professional Services & Consulting',
    description:
      'Client portals, project management, and workflow automation that streamline delivery.',
    image: '/assets/services/Website & Development/Professional Services & Consulting.jpg',
    features: [
      'Client portals with project tracking and approvals',
      'Time tracking tied to billing and proposals',
      'Resource allocation and utilization dashboards'
    ]
  },
  {
    title: 'Healthcare & Medical',
    description:
      'Secure patient portals, scheduling, and telemedicine-ready workflows.',
    image: '/assets/services/Website & Development/Healthcare & Medical.jpg',
    features: [
      'HIPAA-ready patient data handling',
      'Appointment scheduling and reminders',
      'Secure document exchange and intake'
    ]
  },
  {
    title: 'Real Estate',
    description:
      'Property listings, lead capture, and transaction management built for scale.',
    image: '/assets/services/Website & Development/Real Estate.jpg',
    features: [
      'IDX and property listing management',
      'Lead capture with CRM sync',
      'Document hubs for transaction tracking'
    ]
  },
  {
    title: 'Education & E-Learning',
    description:
      'Learning platforms, student portals, and assessment systems for modern delivery.',
    image: '/assets/services/Website & Development/Education & E-Learning.jpg',
    features: [
      'LMS and course registration flows',
      'Student portals with progress tracking',
      'Online assessments and certification'
    ]
  },
  {
    title: 'Manufacturing & Distribution',
    description:
      'Inventory, ordering, and supplier portals that reduce operational friction.',
    image: '/assets/services/Website & Development/Manufacturing & Distribution.jpg',
    features: [
      'Inventory and order tracking systems',
      'Supplier and B2B customer portals',
      'Production and fulfillment scheduling'
    ]
  },
  {
    title: 'Nonprofit & NGO',
    description:
      'Donor management, volunteer coordination, and impact reporting platforms.',
    image: '/assets/services/Website & Development/Nonprofit & NGO.jpg',
    features: [
      'Donor management with recurring giving',
      'Volunteer coordination and scheduling',
      'Event registration and grant tracking'
    ]
  }
];

const customWebFaqs = [
  {
    question: 'How much does custom web development cost compared to using a template?',
    answer:
      'Custom website development typically ranges from $5,000-$15,000 for business sites, $15,000-$50,000 for custom ecommerce platforms, and $30,000-$100,000+ for complex web applications. Templates appear cheaper up front, but plugin costs, customizations, performance fixes, and security patches often exceed custom development over 2-3 years.'
  },
  {
    question: 'How long does custom web development take from start to launch?',
    answer:
      'Simple custom business websites require 6-8 weeks. Custom ecommerce platforms typically take 10-14 weeks including catalog setup, payments, and testing. Complex web applications may require 16-24 weeks. We deliver progress in 2-week sprints so you see results continuously.'
  },
  {
    question: 'Can you integrate our website with CRM and accounting systems?',
    answer:
      'Yes. We specialize in integrations with CRM platforms (Salesforce, HubSpot, Zoho), accounting software (QuickBooks, Xero, Odoo), marketing automation, payment gateways, and logistics providers. If your system has an API or database access, we can integrate it.'
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'All projects include 3 months of post-launch support for fixes and optimization. We also offer ongoing maintenance plans that cover security updates, performance monitoring, content updates, and feature enhancements as your business evolves.'
  },
  {
    question: 'How do you keep custom websites secure?',
    answer:
      'We implement input validation, secure authentication, encrypted data storage, SSL, and regular security updates. Custom code reduces automated attacks common with templates, and we provide monitoring plus rapid response if issues appear.'
  }
];

const webDesignFaqs = [
  {
    question: 'How do you personalize experiences without invasive tracking?',
    answer:
      'We rely on contextual signals like page behavior and navigation patterns, not personal data. Users can control preferences and reset recommendations at any time.'
  },
  {
    question: 'What conversion improvements should we expect?',
    answer:
      'Most clients see 15-40% improvements in key conversion metrics once personalization and performance optimizations are live.'
  },
  {
    question: 'Can you optimize performance without a redesign?',
    answer:
      'Yes. We improve performance through asset optimization, caching, and code tuning without changing your visual design.'
  },
  {
    question: 'What is Answer Engine Optimization?',
    answer:
      'AEO structures your content for AI search results using clear headings, FAQs, and schema so your brand appears in AI-driven answers.'
  },
  {
    question: 'What does accessibility compliance include?',
    answer:
      'We implement WCAG 2.2-ready patterns including contrast checks, keyboard navigation, screen reader support, and accessible forms.'
  },
  {
    question: 'How quickly can a website launch?',
    answer:
      'Most projects launch in 6-12 weeks depending on scope, content readiness, and integration complexity.'
  }
];

const mobileHeroFeatures: HeroFeature[] = [
  { icon: Smartphone, label: 'iOS + Android' },
  { icon: Zap, label: '3-5x engagement' },
  { icon: Shield, label: 'Offline-ready' }
];

const mobileAppServiceBlocks = [
  {
    eyebrow: 'Native Apps',
    title: '1. Native iOS & Android App Development',
    offer:
      "We build high-performance native apps with Swift/SwiftUI and Kotlin, delivering the smoothest UX, full device access, and platform-first experiences users expect from top apps.",
    image: '/assets/services/Mobile App Development/Native iOS & Android App Development High Res.png',
    deliverables: [
      'Native iOS app built with Swift and SwiftUI',
      'Native Android app built with Kotlin and Material Design',
      'Platform-specific UI/UX optimized for iOS and Android',
      'Device integrations: camera, GPS, biometrics, push notifications',
      'Offline support with local storage and background sync',
      'Secure authentication with Face ID / Touch ID / fingerprint',
      'App Store and Google Play submission with ASO',
      'Crash reporting, analytics, and performance monitoring'
    ],
    process: [
      'Mobile strategy and platform selection based on audience and goals.',
      'UX design aligned to iOS HIG and Android Material patterns.',
      'Swift and Kotlin development with native performance.',
      'Backend integration, APIs, and secure sessions.',
      'Offline-first data sync and background updates.',
      'Testing across devices, OS versions, and launch prep.'
    ]
  },
  {
    eyebrow: 'Cross-Platform',
    title: '2. Cross-Platform App Development (React Native & Flutter)',
    offer:
      'Launch faster with a single codebase for iOS and Android while preserving near-native performance, consistent UX, and lower total cost of ownership.',
    image: '/assets/services/Mobile App Development/Cross-Platform%20App%20Development%20(React%20Native%20&%20Flutter).jpg',
    deliverables: [
      'Single codebase running on iOS and Android',
      'Platform-adaptive UI that feels native on each OS',
      'Native modules for device-specific capabilities',
      'Offline persistence with background sync',
      'Secure API integration and authentication',
      'Automated testing for critical user flows',
      'App Store and Play Store releases',
      'Performance optimization for 60fps animations'
    ],
    process: [
      'Framework selection: React Native vs Flutter.',
      'Architecture focused on 90-95% code reuse.',
      'Cross-platform development with native bridges.',
      'Platform-adaptive UX implementation.',
      'Performance profiling and bundle optimization.',
      'CI/CD pipelines for dual-platform releases.'
    ]
  },
  {
    eyebrow: 'PWA',
    title: '3. Progressive Web App (PWA) Development',
    offer:
      'Deliver app-like experiences through the browser with instant updates, offline support, and maximum reach without app store gatekeeping.',
    image: '/assets/services/Mobile App Development/Progressive%20Web%20App%20(PWA)%20Development.jpg',
    deliverables: [
      'Mobile-first responsive web app with app-like UI',
      'Service workers for offline access and caching',
      'Push notifications and re-engagement flows',
      'Home screen installation and app manifest setup',
      'Background sync for data consistency',
      'SEO-ready architecture and analytics',
      'Lighthouse optimization (90+ targets)',
      '3-month post-launch support and monitoring'
    ],
    process: [
      'PWA strategy and feasibility assessment.',
      'Mobile-first UX design and interaction planning.',
      'Service worker and offline caching implementation.',
      'Push notification and install flow optimization.',
      'Performance tuning for slow networks.',
      'Optional app store packaging and launch.'
    ]
  }
];

const mobileCrossPlatformMetrics = [
  { label: 'Pricing', value: 'On inquiry' },
  { label: 'Timeline', value: '10-16 weeks' },
  { label: 'Codebase', value: 'Single' },
  { label: 'Best for', value: 'Business apps, fast launch' }
];

const mobileNativeMetrics = [
  { label: 'Pricing', value: 'On inquiry' },
  { label: 'Timeline', value: '16-24 weeks' },
  { label: 'Performance', value: 'Maximum' },
  { label: 'Best for', value: 'Graphics, device-first apps' }
];

const mobileCrossPlatformPain = [
  'Advanced graphics or heavy 3D can be less optimal',
  'Some platform features require native modules',
  'Minor UI differences need extra polish',
  'Performance tuning is critical for complex apps'
];

const mobileNativeAdvantages = [
  {
    title: 'Maximum performance',
    text: '30-40% faster for graphics-heavy and intensive workflows.'
  },
  {
    title: 'Platform integration',
    text: 'Full access to latest iOS and Android capabilities.'
  },
  {
    title: 'Superior UX',
    text: 'Native interactions and platform-first animations.'
  },
  {
    title: 'Better monetization',
    text: 'Historically 20-30% higher conversion rates.'
  },
  {
    title: 'Future-proof',
    text: 'Immediate support for new OS features.'
  }
];

const mobileIndustries = [
  {
    title: 'E-Commerce & Retail',
    description:
      'Mobile shopping apps with secure checkout, loyalty, and push-driven promotions.',
    image: '/assets/services/Mobile App Development/Ecommerce%20&%20Retail.jpg',
    features: [
      'Product catalogs with smart filters',
      'Apple Pay / Google Pay checkout',
      'Order tracking and loyalty programs'
    ]
  },
  {
    title: 'Healthcare & Wellness',
    description:
      'Telemedicine, scheduling, and patient engagement experiences built for trust.',
    image: '/assets/services/Mobile App Development/Healthcare%20&%20Wellness.jpg',
    features: [
      'Appointment booking and reminders',
      'HIPAA-ready messaging workflows',
      'Health tracking dashboards'
    ]
  },
  {
    title: 'Finance & Fintech',
    description:
      'Secure mobile banking, payments, and financial planning experiences.',
    image: '/assets/services/Mobile App Development/Finance%20&%20Fintech.jpg',
    features: [
      'Biometric authentication and encryption',
      'Real-time transactions and alerts',
      'Budgeting and insights dashboards'
    ]
  },
  {
    title: 'Food & Delivery',
    description:
      'Ordering, delivery tracking, and loyalty features that drive repeat usage.',
    image: '/assets/services/Mobile App Development/Food%20&%20Delivery.jpg',
    features: [
      'Live order tracking and ETA updates',
      'In-app payments and saved cards',
      'Location-based discovery'
    ]
  },
  {
    title: 'Real Estate',
    description:
      'Property search, virtual tours, and agent communications on the go.',
    image: '/assets/services/Mobile App Development/Real%20Estate.jpg',
    features: [
      'Map-based listings and alerts',
      'Virtual tours and media galleries',
      'Secure document sharing'
    ]
  },
  {
    title: 'Education & E-Learning',
    description:
      'Learning apps with course delivery, progress tracking, and engagement.',
    image: '/assets/services/Mobile App Development/Education%20&%20E-Learning.jpg',
    features: [
      'Interactive lessons and quizzes',
      'Offline content downloads',
      'Student communication tools'
    ]
  },
  {
    title: 'Transportation & Logistics',
    description:
      'Fleet tracking, route optimization, and delivery visibility in real time.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Driver apps and dispatch tools',
      'Route optimization and geofencing',
      'Real-time status updates'
    ]
  },
  {
    title: 'Entertainment & Media',
    description:
      'Streaming, content discovery, and engagement features built for retention.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Personalized content feeds',
      'Offline playback support',
      'Subscription management'
    ]
  }
];

const mobileFaqs = [
  {
    question: 'How is pricing decided for mobile app development?',
    answer:
      'Pricing is shared on inquiry after we review scope, platforms, integrations, and timelines. We provide a detailed proposal once requirements are clear.'
  },
  {
    question: 'How long does it take to develop and launch a mobile app?',
    answer:
      'PWAs take 6-10 weeks, cross-platform apps 10-16 weeks, and native apps 16-24 weeks. Timelines vary based on feature complexity, integrations, and testing requirements.'
  },
  {
    question: 'Can you build one app that feels native on iOS and Android?',
    answer:
      'Yes. React Native and Flutter deliver near-native performance with platform-adaptive UI. For most business apps, users cannot tell the difference from fully native builds.'
  },
  {
    question: 'What ongoing costs should we expect after launch?',
    answer:
      'Ongoing costs include hosting, app store fees, and maintenance. We provide maintenance options on inquiry based on your release cadence and support needs.'
  },
  {
    question: 'How do you keep mobile apps secure?',
    answer:
      'We implement encrypted data storage, secure API sessions, biometric login, role-based access, and regular security updates following OWASP mobile guidelines.'
  }
];

const ecommerceHeroFeatures: HeroFeature[] = [
  { icon: ShoppingCart, label: 'Conversion-first UX' },
  { icon: Smartphone, label: 'Mobile-first shopping' },
  { icon: ShieldCheck, label: 'Secure checkout' }
];

const ecommerceServiceBlocks = [
  {
    eyebrow: 'Shopify',
    title: '1. Shopify Store Development & Optimization',
    offer:
      'Launch fast with Shopify stores designed for conversion, mobile shopping, and effortless management. We customize themes, streamline checkout, and set up automation so you can focus on growth.',
    image: '/assets/services/Ecommerce%20Solution/Shopify%20Store%20Development%20&%20Optimization.jpg',
    deliverables: [
      'Shopify setup with custom theme and branding',
      'Mobile-optimized storefront and navigation',
      'Product catalog with SEO-ready structure',
      'Payment gateways and digital wallet setup',
      'Shipping rules, taxes, and fulfillment flows',
      'Abandoned cart recovery and email automation',
      'Analytics and conversion tracking setup',
      'Training and post-launch support'
    ],
    process: [
      'Strategy and store architecture planning.',
      'Theme selection and conversion-focused customization.',
      'Product catalog build and merchandising setup.',
      'Payments, shipping, and tax configuration.',
      'Optimization for mobile checkout and speed.',
      'Launch support and performance monitoring.'
    ]
  },
  {
    eyebrow: 'WooCommerce',
    title: '2. WooCommerce Store Development (WordPress)',
    offer:
      'Own your store with WooCommerce and get full flexibility for custom workflows, content-driven SEO, and advanced product configurations.',
    image: '/assets/services/Ecommerce%20Solution/WooCommerce%20Store%20Development%20(WordPress).jpg',
    deliverables: [
      'WordPress + WooCommerce install on optimized hosting',
      'Custom theme or premium theme customization',
      'Advanced product types and variations',
      'Payment gateways with multi-currency support',
      'Shipping rules with carrier integrations',
      'Inventory and order management setup',
      'Performance optimization and caching',
      'Security hardening and backups'
    ],
    process: [
      'Requirements discovery and platform validation.',
      'Theme development and UX alignment.',
      'Product catalog architecture and filters.',
      'Payments, shipping, and tax workflows.',
      'Custom functionality and integrations.',
      'Performance tuning and launch QA.'
    ]
  },
  {
    eyebrow: 'Custom Commerce',
    title: '3. Custom E-commerce Platform Development',
    offer:
      'Build a bespoke commerce platform when your business model demands unique flows, proprietary features, or enterprise-scale performance.',
    image: '/assets/services/Ecommerce%20Solution/Custom%20E-commerce%20Platform%20Development.jpg',
    deliverables: [
      'Custom storefront and checkout experiences',
      'API-first architecture with integrations',
      'Advanced catalog, pricing, and promotions',
      'Omnichannel inventory and fulfillment logic',
      'Personalization and recommendations',
      'Custom reporting and analytics dashboards',
      'Scalable infrastructure and monitoring',
      'Ongoing enhancements and support'
    ],
    process: [
      'Deep discovery and business model mapping.',
      'Technical architecture and UX design.',
      'Core platform development and integrations.',
      'Performance engineering and load testing.',
      'Security implementation and compliance.',
      'Launch, monitoring, and optimization.'
    ]
  }
];

const ecommercePlatformMetrics = [
  { label: 'Best for', value: 'Fast launch' },
  { label: 'Customization', value: 'Moderate' },
  { label: 'Maintenance', value: 'Platform-managed' },
  { label: 'Pricing', value: 'On inquiry' }
];

const ecommerceCustomMetrics = [
  { label: 'Best for', value: 'Unique workflows' },
  { label: 'Customization', value: 'Unlimited' },
  { label: 'Ownership', value: 'Full control' },
  { label: 'Pricing', value: 'On inquiry' }
];

const ecommercePlatformPain = [
  'Checkout and UX limits based on platform rules',
  'Dependence on apps and third-party plugins',
  'Platform updates can impact features',
  'Data portability and migration complexity'
];

const ecommerceCustomAdvantages = [
  {
    title: 'Conversion-tailored UX',
    text: 'Design unique purchase flows that match your customer journey.'
  },
  {
    title: 'Performance tuning',
    text: 'Optimize every layer for speed and higher conversion rates.'
  },
  {
    title: 'Data ownership',
    text: 'Full control of customer, order, and analytics data.'
  },
  {
    title: 'Omnichannel ready',
    text: 'Sync inventory and experiences across web, mobile, and POS.'
  },
  {
    title: 'Future-proof',
    text: 'Build features competitors cannot easily copy.'
  }
];

const ecommerceIndustries = [
  {
    title: 'Fashion & DTC',
    description: 'High-converting storefronts with personalized merchandising.',
    image: '/assets/services/Ecommerce%20Solution/Fashion%20and%20Dtc.jpg',
    features: ['Variant management', 'Lookbook merchandising', 'Fast mobile checkout']
  },
  {
    title: 'Beauty & Wellness',
    description: 'Subscription-ready commerce with loyalty and reviews.',
    image: '/assets/services/Ecommerce%20Solution/Beauty%20&%20Wellness.jpg',
    features: ['Subscriptions', 'Ratings and reviews', 'Bundled offers']
  },
  {
    title: 'Electronics & Gadgets',
    description: 'Complex catalogs with filters and compatibility guidance.',
    image: '/assets/services/Ecommerce%20Solution/Electronics%20&%20Gadgets.jpg',
    features: ['Advanced filters', 'Comparison tools', 'Warranty workflows']
  },
  {
    title: 'Food & Grocery',
    description: 'Inventory-aware checkout with delivery logistics.',
    image: '/assets/services/Ecommerce%20Solution/Food%20&%20Grocery.jpg',
    features: ['Scheduled delivery', 'Substitutions', 'Order batching']
  },
  {
    title: 'B2B & Wholesale',
    description: 'Account-based pricing, approvals, and bulk ordering.',
    image: '/assets/services/Ecommerce%20Solution/B2B%20&%20Wholesale.jpg',
    features: ['Tiered pricing', 'Quote workflows', 'ERP integration']
  },
  {
    title: 'Digital Products',
    description: 'Secure delivery for downloads, licenses, and access.',
    image: '/assets/services/Ecommerce%20Solution/Digital%20Product.jpg',
    features: ['License management', 'Instant delivery', 'Access control']
  }
];

const ecommerceFaqs = [
  {
    question: 'Which e-commerce platform is right for us?',
    answer:
      'We recommend Shopify for fast launches and ease of use, WooCommerce for deep customization and content marketing, and custom platforms for unique workflows or enterprise-scale requirements.'
  },
  {
    question: 'Do you provide pricing details for ecommerce projects?',
    answer:
      'Yes. Pricing is shared on inquiry after we review scope, catalog size, integrations, and platform needs.'
  },
  {
    question: 'Can you handle payment gateways and shipping setup?',
    answer:
      'Absolutely. We configure payment methods, shipping rules, taxes, and fulfillment flows based on your target markets.'
  },
  {
    question: 'Do you optimize for mobile conversions?',
    answer:
      'Yes. We design mobile-first storefronts and checkout flows that reduce friction and improve conversion rates.'
  },
  {
    question: 'Do you support ongoing optimization after launch?',
    answer:
      'We offer post-launch support and optimization for performance, conversions, and new features.'
  }
];

const brandHeroFeatures: HeroFeature[] = [
  { icon: Target, label: 'Clear positioning' },
  { icon: TrendingUp, label: 'Growth focused' },
  { icon: Users, label: 'Loyal communities' }
];

const brandServiceBlocks = [
  {
    eyebrow: 'Brand Strategy',
    title: '1. Brand Strategy & Identity Development',
    offer:
      'Define who you are, what you stand for, and why customers choose you. We build strategic brand foundations and visual identity systems that scale across every touchpoint.',
    image: '/assets/services/Brand Building/Brand Strategy & Identity Development.jpg',
    deliverables: [
      'Brand positioning and messaging framework',
      'Audience personas and competitive analysis',
      'Logo, color, typography, and visual system',
      'Brand voice and tone guidelines',
      'Brand style guide and usage rules',
      'Launch and rollout roadmap'
    ],
    process: [
      'Discovery and market research workshops.',
      'Positioning, differentiation, and value proposition.',
      'Messaging architecture and brand story.',
      'Visual identity design and applications.',
      'Brand guidelines and team alignment.',
      'Launch planning and measurement.'
    ]
  },
  {
    eyebrow: 'Digital Marketing',
    title: '2. Digital Marketing Strategy & Execution',
    offer:
      'Integrated SEO, paid media, content, and email campaigns that work together to drive qualified traffic, conversions, and measurable ROI.',
    image: '/assets/services/Brand Building/Digital Marketing Strategy & Execution.jpg',
    deliverables: [
      'Multi-channel marketing strategy and roadmap',
      'SEO audits, keyword strategy, and content plan',
      'Paid media campaigns across Google, Meta, LinkedIn',
      'Email automation and lead nurturing sequences',
      'Landing pages and conversion optimization',
      'Analytics dashboards and reporting'
    ],
    process: [
      'Audit current presence and set goals.',
      'Channel strategy and budget allocation.',
      'Content production and campaign setup.',
      'Launch, monitor, and optimize weekly.',
      'Monthly insights and performance reviews.',
      'Quarterly strategy refinements.'
    ]
  },
  {
    eyebrow: 'Social + Influencers',
    title: '3. Social Media Management & Influencer Marketing',
    offer:
      'Build engaged communities with consistent content, community management, and influencer partnerships that amplify brand trust.',
    image: '/assets/services/Brand Building/Social Media Management & Influencer Marketing.jpg',
    deliverables: [
      'Platform-specific social strategy and calendar',
      'Creative production for posts and short-form video',
      'Community management and engagement',
      'Influencer discovery and partnership management',
      'Paid social amplification and retargeting',
      'Monthly reporting and insights'
    ],
    process: [
      'Define content pillars and platform priorities.',
      'Create monthly content calendars.',
      'Publish, engage, and grow community.',
      'Run influencer and paid social programs.',
      'Measure engagement, traffic, and leads.',
      'Optimize content and budgets.'
    ]
  }
];

const brandVsMetrics = [
  { label: 'Focus', value: 'Short-term campaigns' },
  { label: 'Consistency', value: 'Fragmented' },
  { label: 'Impact', value: 'Lower retention' },
  { label: 'Pricing', value: 'On inquiry' }
];

const brandIntegratedMetrics = [
  { label: 'Focus', value: 'Long-term equity' },
  { label: 'Consistency', value: 'Unified' },
  { label: 'Impact', value: 'Higher loyalty' },
  { label: 'Pricing', value: 'On inquiry' }
];

const brandPain = [
  'Inconsistent messaging across channels',
  'Weak differentiation in a crowded market',
  'Lower trust and brand recall',
  'Marketing efficiency declines over time'
];

const brandAdvantages = [
  { title: 'Clear positioning', text: 'Customers understand why you are the right choice.' },
  { title: 'Consistent experience', text: 'Unified brand across every touchpoint.' },
  { title: 'Higher trust', text: 'Strong identity builds credibility and loyalty.' },
  { title: 'Better ROI', text: 'Marketing performs better on a strong foundation.' },
  { title: 'Scalable growth', text: 'Brand systems scale with new channels and markets.' }
];

const brandIndustries = [
  {
    title: 'Professional Services',
    description: 'Positioning and credibility for consultancies and agencies.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    features: ['Authority content', 'Lead funnels', 'Brand trust']
  },
  {
    title: 'Retail & E-commerce',
    description: 'Brand systems and campaigns that convert on mobile.',
    image: '/assets/services/Brand%20Building/Retail%20&%20E-commerce.jpg',
    features: ['Conversion messaging', 'Paid social', 'Retention flows']
  },
  {
    title: 'Healthcare & Wellness',
    description: 'Trust-driven identity and patient communication.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    features: ['Reputation management', 'Community growth', 'Education content']
  },
  {
    title: 'B2B & SaaS',
    description: 'Demand generation and positioning for complex sales cycles.',
    image: '/assets/services/Brand%20Building/B2B%20&%20SaaS.jpg',
    features: ['ABM campaigns', 'Thought leadership', 'Lead nurturing']
  },
  {
    title: 'Hospitality & Food',
    description: 'Local visibility, reviews, and social storytelling.',
    image: '/assets/services/Brand%20Building/Hospitality%20&%20Food.jpg',
    features: ['Local SEO', 'Social engagement', 'Influencer reach']
  },
  {
    title: 'Education & Nonprofit',
    description: 'Mission-driven branding that builds communities.',
    image: '/assets/services/Brand%20Building/Education%20&%20Nonprofit.jpg',
    features: ['Storytelling', 'Community growth', 'Campaign strategy']
  }
];

const brandFaqs = [
  {
    question: "What's the difference between branding and marketing?",
    answer:
      'Branding defines who you are, what you stand for, and how you are perceived. Marketing is the execution that promotes your brand and drives results. Strong branding makes marketing far more effective.'
  },
  {
    question: 'How do you determine a marketing strategy?',
    answer:
      'We start with a digital audit, audience research, and clear goals. Then we build a channel plan across SEO, paid, social, content, and email with measurement built in.'
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Paid campaigns can show results quickly, while SEO and content compound over time. We balance short-term wins with long-term growth.'
  },
  {
    question: 'Do you provide pricing details?',
    answer:
      'Yes. Pricing is shared on inquiry after we review scope, channels, and goals.'
  },
  {
    question: 'Can you work with internal teams?',
    answer:
      'Absolutely. We can lead execution or collaborate with in-house teams for strategy, creative, and performance.'
  }
];

const seoHeroFeatures: HeroFeature[] = [
  { icon: TrendingUp, label: 'Organic growth' },
  { icon: Target, label: 'Buyer-intent traffic' },
  { icon: ShieldCheck, label: 'Technical excellence' }
];

const seoServiceBlocks = [
  {
    eyebrow: 'Technical SEO',
    title: '1. Technical SEO & Website Optimization',
    offer:
      'We fix crawlability, speed, structure, and schema so search engines and AI systems can fully understand and rank your site.',
    image: '/assets/services/SEO%20Services/Technical%20SEO%20&%20Website%20Optimization.jpg',
    deliverables: [
      'Full technical SEO audit and prioritized fixes',
      'Core Web Vitals and speed optimization',
      'Structured data and rich snippet setup',
      'Site architecture and internal linking',
      'Indexing and crawl budget improvements',
      'SEO monitoring and issue alerts'
    ],
    process: [
      'Comprehensive audit and diagnostics.',
      'Technical fixes and speed optimization.',
      'Schema, sitemap, and indexing setup.',
      'Architecture and internal linking.',
      'QA, monitoring, and reporting.',
      'Ongoing technical maintenance.'
    ]
  },
  {
    eyebrow: 'Content Strategy',
    title: '2. Content Strategy & On-Page SEO',
    offer:
      'We build topical authority with content clusters, buyer-intent keywords, and on-page optimization that converts.',
    image: '/assets/services/SEO%20Services/Content%20Strategy%20&%20On-Page%20SEO.jpg',
    deliverables: [
      'Keyword research and topic clustering',
      'Content gap analysis and roadmap',
      'On-page optimization for key pages',
      'SEO content production and refreshes',
      'Internal linking and UX improvements',
      'Performance tracking and optimization'
    ],
    process: [
      'Intent-based keyword research.',
      'Cluster strategy and editorial plan.',
      'Content production and optimization.',
      'On-page updates and internal links.',
      'E-E-A-T improvements and updates.',
      'Iterative performance tuning.'
    ]
  },
  {
    eyebrow: 'Authority Building',
    title: '3. Authority Building & Link Acquisition',
    offer:
      'We grow domain authority through digital PR, high-quality links, and brand mentions that AI systems trust.',
    image: '/assets/services/SEO%20Services/Authority%20Building%20&%20Link%20Acquisition.jpg',
    deliverables: [
      'Backlink audit and cleanup',
      'Digital PR and editorial placements',
      'Guest content and link outreach',
      'Unlinked mention conversion',
      'Brand authority monitoring',
      'Monthly authority reports'
    ],
    process: [
      'Backlink and authority analysis.',
      'Prospecting and outreach plan.',
      'Content pitching and placements.',
      'Link monitoring and cleanup.',
      'Brand mention expansion.',
      'Ongoing reporting and iteration.'
    ]
  }
];

const seoComparisonLeft = [
  { label: 'Focus', value: 'Google-only' },
  { label: 'Visibility', value: 'Limited surfaces' },
  { label: 'Authority', value: 'Fragmented' },
  { label: 'Pricing', value: 'On inquiry' }
];

const seoComparisonRight = [
  { label: 'Focus', value: 'Search everywhere' },
  { label: 'Visibility', value: 'Google + AI' },
  { label: 'Authority', value: 'Consensus signals' },
  { label: 'Pricing', value: 'On inquiry' }
];

const seoPain = [
  'Over-reliance on blue links',
  'Weak AI and answer engine visibility',
  'Thin topical coverage',
  'Inconsistent technical foundations'
];

const seoAdvantages = [
  { title: 'Search everywhere', text: 'Visibility across Google, AI assistants, and social search.' },
  { title: 'Technical excellence', text: 'Fast, crawlable, structured sites that rank.' },
  { title: 'Topical authority', text: 'Clustered content that builds trust over time.' },
  { title: 'Brand authority', text: 'Mentions and citations AI systems rely on.' },
  { title: 'Compounding ROI', text: 'Sustainable organic growth that scales.' }
];

const seoIndustries = [
  {
    title: 'Professional Services',
    description: 'Local and national visibility for service firms.',
    image: '/assets/services/SEO%20Services/Professional%20Services.jpg',
    features: ['Local SEO', 'Lead funnels', 'Authority content']
  },
  {
    title: 'E-commerce',
    description: 'Product discoverability and category dominance.',
    image: '/assets/services/SEO%20Services/E-commerce.jpg',
    features: ['Product schema', 'Category SEO', 'Buying guides']
  },
  {
    title: 'Healthcare',
    description: 'Trust-focused content and compliant visibility.',
    image: '/assets/services/SEO%20Services/Healthcare.jpg',
    features: ['E-E-A-T signals', 'Local presence', 'Authority building']
  },
  {
    title: 'B2B & SaaS',
    description: 'Topical authority for long sales cycles.',
    image: '/assets/services/SEO%20Services/B2B%20&%20SaaS.jpg',
    features: ['Cluster strategy', 'Comparison pages', 'Demand capture']
  },
  {
    title: 'Education',
    description: 'Search visibility for programs and courses.',
    image: '/assets/services/SEO%20Services/Education.jpg',
    features: ['Program pages', 'SEO content', 'Schema']
  },
  {
    title: 'Hospitality & Food',
    description: 'Local search and review-driven growth.',
    image: '/assets/services/SEO%20Services/Hospitality%20&%20Food.jpg',
    features: ['Local pack rankings', 'Reputation SEO', 'Mobile speed']
  }
];

const seoFaqs = [
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'SEO compounds over time. Early improvements often appear within a few months, with stronger traction as authority builds through ongoing content and technical improvements.'
  },
  {
    question: 'Do you optimize for AI search and answer engines?',
    answer:
      'Yes. We build structured data, topical authority, and brand mentions that AI systems trust and cite.'
  },
  {
    question: 'What does your SEO process include?',
    answer:
      'Technical fixes, content strategy, on-page optimization, and authority building, plus continuous monitoring and reporting.'
  },
  {
    question: 'Do you provide pricing details?',
    answer:
      'Yes. Pricing is shared on inquiry after we review your site, goals, and competitive landscape.'
  },
  {
    question: 'Can you work with our dev or content team?',
    answer:
      'Absolutely. We can lead execution or collaborate with internal teams for technical fixes and content production.'
  }
];

const aiHeroFeatures: HeroFeature[] = [
  { icon: ShieldCheck, label: 'Enterprise-ready' },
  { icon: Target, label: 'Problem-first' },
  { icon: TrendingUp, label: 'ROI-driven' }
];

const aiServiceBlocks = [
  {
    eyebrow: 'AI Strategy',
    title: '1. AI Strategy & Feasibility Assessment',
    offer:
      'We identify high-impact AI opportunities, validate feasibility, and build a phased roadmap aligned to business goals and compliance needs.',
    image: '/assets/services/AIML Services/AI Strategy & Feasibility Assessment.jpg',
    deliverables: [
      'AI opportunity assessment and prioritization',
      'Feasibility analysis and technical requirements',
      'Risk and compliance considerations',
      'Phased implementation roadmap',
      'Stakeholder alignment workshop'
    ],
    process: [
      'Discovery workshops and data audit.',
      'Use case prioritization and ROI mapping.',
      'Architecture review and requirements.',
      'Strategy document and roadmap.',
      'Leadership presentation and Q&A.'
    ]
  },
  {
    eyebrow: 'ML Models',
    title: '2. Machine Learning Model Development',
    offer:
      'Custom ML models for prediction, NLP, computer vision, and recommendations—built for production, monitored, and optimized.',
    image: '/assets/services/AIML Services/Machine Learning Model Development.jpg',
    deliverables: [
      'Custom model development and documentation',
      'Training data pipelines and feature engineering',
      'API endpoints for integration',
      'Performance monitoring and versioning',
      'Model evaluation reports'
    ],
    process: [
      'Define objectives and success metrics.',
      'Data preparation and feature engineering.',
      'Model training and validation.',
      'Testing and production deployment.',
      'Monitoring and continuous improvement.'
    ]
  },
  {
    eyebrow: 'AI Agents',
    title: '3. AI Agents & Automation Systems',
    offer:
      'Autonomous AI agents that automate multi-step workflows across finance, operations, HR, and customer service.',
    image: '/assets/services/AIML Services/AI Agents & Automation Systems.jpg',
    deliverables: [
      'AI agent design and orchestration',
      'Integration with ERP/CRM/data systems',
      'Decision audit trails and dashboards',
      'User training and documentation',
      'Optimization recommendations'
    ],
    process: [
      'Process mapping and automation design.',
      'Agent architecture and integration planning.',
      'Development, training, and testing.',
      'Pilot deployment and refinement.',
      'Production rollout and monitoring.'
    ]
  }
];

const aiComparisonLeft = [
  { label: 'Approach', value: 'Ad-hoc automation' },
  { label: 'Data readiness', value: 'Unstructured' },
  { label: 'Governance', value: 'Limited' },
  { label: 'Pricing', value: 'On inquiry' }
];

const aiComparisonRight = [
  { label: 'Approach', value: 'AI-native systems' },
  { label: 'Data readiness', value: 'Production-grade' },
  { label: 'Governance', value: 'Built-in' },
  { label: 'Pricing', value: 'On inquiry' }
];

const aiPain = [
  'Unclear use cases and ROI',
  'Data quality and integration gaps',
  'Compliance and governance risks',
  'Unscalable pilot projects'
];

const aiAdvantages = [
  { title: 'Problem-first', text: 'AI focused on measurable business impact.' },
  { title: 'Enterprise-ready', text: 'Compliance, security, and monitoring built in.' },
  { title: 'Scalable architecture', text: 'Systems that grow with your data and teams.' },
  { title: 'Transparent decisions', text: 'Audit trails and explainability.' },
  { title: 'Continuous improvement', text: 'MLOps and model monitoring included.' }
];

const aiIndustries = [
  {
    title: 'Finance & Operations',
    description: 'Process automation and predictive insights.',
    image: '/assets/services/AIML Services/Finance & Operations.jpg',
    features: ['Forecasting', 'Document automation', 'Risk scoring']
  },
  {
    title: 'Healthcare',
    description: 'NLP, triage, and workflow automation.',
    image: '/assets/services/AIML Services/Healthcare.jpg',
    features: ['Clinical NLP', 'Routing automation', 'Compliance']
  },
  {
    title: 'Retail & E-commerce',
    description: 'Personalization and demand prediction.',
    image: '/assets/services/AIML Services/Retail & E-commerce.jpg',
    features: ['Recommendations', 'Churn prediction', 'Pricing AI']
  },
  {
    title: 'Customer Support',
    description: 'Conversational AI and ticket automation.',
    image: '/assets/services/AIML Services/Customer Support.jpg',
    features: ['Chatbots', 'Routing', 'Knowledge search']
  },
  {
    title: 'Manufacturing',
    description: 'Quality inspection and predictive maintenance.',
    image: '/assets/services/AIML Services/Manufacturing.jpg',
    features: ['Vision AI', 'Downtime prediction', 'Process optimization']
  },
  {
    title: 'B2B & SaaS',
    description: 'Intelligent workflows and product insights.',
    image: '/assets/services/AIML Services/B2B & SaaS.jpg',
    features: ['Usage insights', 'Automation', 'Revenue analytics']
  }
];

const aiFaqs = [
  {
    question: 'How do you choose the right AI use cases?',
    answer:
      'We start with business outcomes, map data readiness, and prioritize use cases by impact and feasibility.'
  },
  {
    question: 'Do you build custom AI or integrate existing tools?',
    answer:
      'We do both. For unique workflows we build custom models; for commodity needs we integrate best-fit platforms.'
  },
  {
    question: 'How do you handle compliance and ethics?',
    answer:
      'We implement privacy-by-design, audit trails, and bias monitoring aligned to GDPR and enterprise governance.'
  },
  {
    question: 'Do you provide pricing details?',
    answer:
      'Yes. Pricing is shared on inquiry after we review scope, data, and integration needs.'
  },
  {
    question: 'Can you train our teams?',
    answer:
      'Yes. We provide documentation, handover sessions, and AI literacy support for internal teams.'
  }
];

const erpHeroFeatures: HeroFeature[] = [
  { icon: ShieldCheck, label: 'Change-ready' },
  { icon: Target, label: 'AI-powered' },
  { icon: TrendingUp, label: 'Operational gains' }
];

const erpServiceBlocks = [
  {
    eyebrow: 'ERP Assessment',
    title: '1. Comprehensive ERP Needs Assessment',
    offer:
      'We map workflows, data readiness, integrations, and organizational change needs to define the right ERP requirements.',
    image: '/assets/services/ERP Services/Comprehensive ERP Needs Assessment.jpg',
    deliverables: [
      'Requirements and future-state process maps',
      'Integration architecture and system inventory',
      'Data quality assessment and migration plan',
      'Readiness scorecard and risk register',
      'Prioritized requirement matrix'
    ],
    process: [
      'Stakeholder workshops and discovery.',
      'Process documentation and gap analysis.',
      'Data assessment and migration complexity review.',
      'Requirements prioritization and readiness scoring.',
      'Assessment report and leadership alignment.'
    ]
  },
  {
    eyebrow: 'Vendor Selection',
    title: '2. Vendor Comparison & Selection',
    offer:
      'Objective evaluation of ERP platforms aligned to your size, industry, and growth—so you pick the right fit from day one.',
    image: '/assets/services/ERP Services/Vendor Comparison & Selection.jpg',
    deliverables: [
      'Vendor scoring matrix and shortlist',
      'TCO analysis and risk review',
      'Demo coordination and evaluation scorecards',
      'Reference checks and case studies',
      'Final recommendation report'
    ],
    process: [
      'Define evaluation criteria and weights.',
      'Shortlist vendors and run RFI/RFP.',
      'Demo sessions with scripted scenarios.',
      'Reference calls and risk analysis.',
      'Recommendation and approval.'
    ]
  },
  {
    eyebrow: 'Roadmap',
    title: '3. Implementation Roadmap & Planning',
    offer:
      'Phased rollout plans that reduce risk, align teams, and deliver on-time go-live with strong adoption.',
    image: '/assets/services/ERP Services/Implementation Roadmap & Planning.jpg',
    deliverables: [
      'Phased project plan and timeline',
      'Resource and budget allocation plan',
      'Change management strategy',
      'Data migration and QA plan',
      'Go-live readiness checklist'
    ],
    process: [
      'Scope definition and timeline planning.',
      'Resource allocation and governance setup.',
      'Risk mitigation and change strategy.',
      'Data migration and testing framework.',
      'Go-live planning and validation.'
    ]
  }
];

const erpComparisonLeft = [
  { label: 'Approach', value: 'Legacy ERP' },
  { label: 'Intelligence', value: 'Descriptive' },
  { label: 'Integrations', value: 'Fragmented' },
  { label: 'Pricing', value: 'On inquiry' }
];

const erpComparisonRight = [
  { label: 'Approach', value: 'AI-ready ERP' },
  { label: 'Intelligence', value: 'Predictive' },
  { label: 'Integrations', value: 'Unified' },
  { label: 'Pricing', value: 'On inquiry' }
];

const erpPain = [
  'Poor planning and change resistance',
  'Data quality and migration risks',
  'Integration bottlenecks',
  'Low user adoption'
];

const erpAdvantages = [
  { title: 'Unified operations', text: 'Single source of truth across functions.' },
  { title: 'AI insights', text: 'Forecasting, anomaly detection, and automation.' },
  { title: 'Faster processing', text: 'Streamlined workflows and approvals.' },
  { title: 'Higher accuracy', text: 'Reduced manual errors with validation.' },
  { title: 'Scalable foundation', text: 'Systems that grow with your business.' }
];

const erpIndustries = [
  {
    title: 'Manufacturing',
    description: 'MRP, procurement, and shop-floor visibility.',
    image: '/assets/services/ERP Services/Manufacturing.jpg',
    features: ['Production planning', 'Quality control', 'Inventory accuracy']
  },
  {
    title: 'Logistics & Distribution',
    description: 'WMS/TMS integration and real-time tracking.',
    image: '/assets/services/ERP Services/Logistics & Distribution.jpg',
    features: ['Warehouse visibility', 'Route optimization', 'Cost control']
  },
  {
    title: 'Retail & E-commerce',
    description: 'Omnichannel inventory and finance.',
    image: '/assets/services/ERP Services/Retail & E-commerce.jpg',
    features: ['POS integration', 'Demand planning', 'Margin insights']
  },
  {
    title: 'Healthcare',
    description: 'Compliance-ready operations and finance.',
    image: '/assets/services/ERP Services/Healthcare.jpg',
    features: ['Audit trails', 'Data security', 'Process control']
  },
  {
    title: 'Professional Services',
    description: 'Project accounting and resource planning.',
    image: '/assets/services/ERP Services/Professional Services.jpg',
    features: ['Time tracking', 'Budgeting', 'Utilization']
  },
  {
    title: 'Finance Teams',
    description: 'Automation for AP/AR and forecasting.',
    image: '/assets/services/ERP Services/Finance Teams.jpg',
    features: ['Cash flow forecasts', 'Close automation', 'Controls']
  }
];

const erpFaqs = [
  {
    question: 'What causes ERP implementations to fail?',
    answer:
      'Poor planning, change resistance, and data quality issues are the most common. We address these early with readiness assessments and phased rollouts.'
  },
  {
    question: 'How long does ERP implementation take?',
    answer:
      'Timelines vary by scope and platform. We provide a phased roadmap aligned to your organizational capacity.'
  },
  {
    question: 'Can you integrate ERP with existing systems?',
    answer:
      'Yes. We design integration architectures to connect CRM, WMS, TMS, ecommerce, and finance systems.'
  },
  {
    question: 'Do you provide pricing details?',
    answer:
      'Yes. Pricing is shared on inquiry after we review scope, modules, and integration complexity.'
  },
  {
    question: 'How do you handle data migration risks?',
    answer:
      'We perform data profiling, cleansing, test migrations, and reconciliation before go-live.'
  }
];

const odooContent = {
  hero: {
    badge: 'Odoo Implementation',
    title: 'Transform your operations with standard-first',
    highlight: 'Odoo',
    description:
      'Our methodology prioritizes speed, simplicity, and standard features to deliver predictable timelines and measurable ROI.',
    features: heroFeatures,
    primaryCta: 'Schedule GAP analysis',
    secondaryCta: 'Email our team'
  },
  heroInfo: {
    successLabel: 'Success Rate',
    successValue: '95%',
    timelineLabel: 'Timeline',
    timelineValue: '8-12 weeks'
  },
  services: {
    title: 'Our Odoo implementation services',
    subtitle:
      'Every engagement follows the same standard-first rule set, ensuring predictable timelines, clear scope, and measurable ROI.',
    blocks: serviceBlocks
  },
  methodology: {
    title: 'Why our methodology',
    highlight: 'wins',
    subtitle: 'Traditional implementations fail. We deliver on-time, on-budget, every time.',
    blue: {
      title: 'On-time & On-budget',
      text: methodologyPoints[0].text,
      pills: ['95% Success', '8-12 Weeks']
    },
    dark: {
      title: 'Customization Cost Reality',
      statPrefix: '$10,000',
      statSeparator: '→',
      statHighlight: '$2,500/year',
      statHighlightColor: '#ff6b7a',
      text:
        'After 4 years, maintenance exceeds the original build cost. We help you avoid this trap.'
    },
    white: {
      label: 'Single Point of Contact',
      title: 'Single Point of Contact',
      text: methodologyPoints[1].text,
      bullets: ['Clear decision making', 'Faster execution', 'No confusion']
    },
    orange: {
      title: 'Rule of Simplicity',
      text: methodologyPoints[2].text
    },
    green: {
      value: '95%',
      label: 'Success Rate'
    }
  },
  comparison: {
    titleLead: 'Legacy ERP',
    titleAccent: 'vs',
    titleTrail: 'Modern Odoo',
    titleAccentColor: '#f43f5e',
    subtitle: 'See how traditional systems compare to our agile, cost-effective approach.',
    leftBadge: 'Legacy Systems',
    rightBadge: 'Modern Solution',
    leftTitle: 'Traditional ERP',
    rightTitle: 'Odoo ERP',
    leftMetrics: legacyMetrics,
    rightMetrics: odooMetrics,
    leftPain: traditionalErpPain,
    rightAdvantages: odooAdvantages
  },
  industries: {
    eyebrow: 'Industry packages',
    title: 'Industry-specific Odoo solutions',
    subtitle:
      'Odoo 18 industry packages deliver 60-70% of requirements with zero configuration, accelerating deployment and reducing cost.',
    items: industries
  },
  cta: {
    eyebrow: 'Ready to transform',
    title: 'Make Odoo the backbone of your operations',
    description:
      'Our proven methodology helps businesses eliminate operational chaos, reduce costs, and scale with confidence. Whether you need a full implementation, a GAP analysis, or an upgrade, we deliver measurable ROI within 90 days of go-live.',
    primaryCta: 'Book a discovery call',
    secondaryCta: 'Contact us today',
    image: '/assets/services/Odoo Service/Make Odoo the backbone of your operations.jpg'
  },
  faqs
};

const customWebContent = {
  hero: {
    badge: 'Custom Web Solutions',
    title: 'Custom Web Solutions',
    highlight: 'tailored for your business success',
    description:
      'Transform your digital presence with custom web solutions designed for your goals, workflows, and competitive advantages. We build high-performance websites, web apps, and ecommerce platforms that scale with your growth.',
    features: customHeroFeatures,
    primaryCta: 'Schedule discovery call',
    secondaryCta: 'Request proposal'
  },
  heroInfo: {
    successLabel: 'Performance',
    successValue: 'Core Web Vitals',
    timelineLabel: 'Timeline',
    timelineValue: '6-14 weeks'
  },
  services: {
    title: 'Our Custom Web Development Services',
    subtitle:
      'Bespoke development across websites, ecommerce, and web applications, built around your exact requirements.',
    blocks: customWebServiceBlocks
  },
  methodology: {
    title: 'Why custom development',
    highlight: 'wins',
    subtitle: 'Templates limit growth. Custom solutions deliver control, performance, and scalability.',
    blue: {
      title: 'Control & Flexibility',
      text:
        'Templates lock you into pre-defined structures. Custom development gives unlimited flexibility to build exactly what your business needs.',
      pills: ['Unlimited flexibility', 'Built to fit workflows'],
      image: '/assets/services/Custom Web Solution/Control & Flexibility.jpg'
    },
    dark: {
      title: 'Performance & Speed',
      statPrefix: '3s',
      statSeparator: 'load time',
      statHighlight: '53% bounce over 3s',
      statHighlightColor: '#ff6b7a',
      text:
        'Custom builds remove bloated code and deliver faster page speeds that improve SEO and conversions.',
      image: '/assets/services/Custom Web Solution/Performance & Speed.jpg'
    },
    white: {
      label: 'Integration Capabilities',
      title: 'Integration Capabilities',
      text:
        'Connect your website with CRM, accounting, marketing, and operations systems through tailored data flows.',
      bullets: ['CRM and lead sync', 'Accounting automation', 'Marketing triggers'],
      image: '/assets/services/Custom Web Solution/Integration Capabilities.jpg'
    },
    orange: {
      title: 'Security by Design',
      text:
        'Custom code reduces automated attacks and allows targeted security hardening for your exact setup.',
      image: '/assets/services/Custom Web Solution/Security by Design.jpg'
    },
    green: {
      value: 'Scale',
      label: 'Ready for growth',
      image: '/assets/services/Custom Web Solution/Scale.jpg'
    }
  },
  comparison: {
    titleLead: 'Custom Development',
    titleAccent: 'vs',
    titleTrail: 'Template-Based Solutions',
    titleAccentColor: '#4A7DFF',
    subtitle: 'Understand why bespoke development outperforms templates as you grow.',
    leftBadge: 'Template Systems',
    rightBadge: 'Custom Development',
    leftTitle: 'Template-Based Websites',
    rightTitle: 'Custom Web Solutions',
    leftMetrics: customTemplateMetrics,
    rightMetrics: customDevMetrics,
    leftPain: customTemplatePain,
    rightAdvantages: customDevAdvantages
  },
  industries: {
    eyebrow: 'Industries we serve',
    title: 'Custom solutions across industries',
    subtitle:
      'We build tailored platforms for professional services, healthcare, education, manufacturing, and more.',
    items: customWebIndustries
  },
  cta: {
    eyebrow: 'Ready to build',
    title: 'Ready to Build Your Custom Web Solution?',
    description:
      'Stop compromising with templates that do not fit your business. Invest in a custom solution that delivers the exact functionality, performance, and integrations you need to grow.',
    primaryCta: 'Book a consultation',
    secondaryCta: 'Contact us today',
    image: '/assets/services/Custom Web Solution/CTA Ready To Build.png'
  },
  faqs: customWebFaqs
};

const webDesignContent = {
  hero: {
    badge: 'Website Design & Development',
    title: 'Website Design & Development',
    highlight: 'for businesses',
    description:
      "Modern websites are 24/7 sales assets. We combine intelligent UX, lightning-fast performance, and accessibility compliance to turn your site into a growth engine.",
    features: webDesignHeroFeatures,
    primaryCta: 'Book website strategy call',
    secondaryCta: 'Request proposal'
  },
  heroInfo: {
    successLabel: 'Conversion lift',
    successValue: '15-40%',
    timelineLabel: 'Timeline',
    timelineValue: '6-12 weeks'
  },
  services: {
    title: 'Website Design & Development Services',
    subtitle:
      'Personalization, performance optimization, and accessibility delivered in one modern website program.',
    blocks: webDesignServiceBlocks
  },
  methodology: {
    title: 'Why modern websites',
    highlight: 'win',
    subtitle: 'Personalization, performance, and inclusion create compounding growth.',
    blue: {
      title: 'AI-powered personalization',
      text:
        'Intent-based experiences deliver higher conversions without invasive tracking.',
      pills: ['15-40% lift', 'Privacy-first'],
      image: '/assets/services/Website & Development/AI-powered personalization.jpg'
    },
    dark: {
      title: 'Performance discipline',
      statPrefix: '3s',
      statSeparator: 'threshold',
      statHighlight: '53% abandon over 3s',
      statHighlightColor: '#ff6b7a',
      text:
        'Fast websites keep visitors engaged and improve search rankings across devices.',
      image: '/assets/services/Website & Development/Performance discipline.jpg'
    },
    white: {
      label: 'Accessibility compliance',
      title: 'Accessibility compliance',
      text:
        'WCAG 2.2-ready experiences expand reach and reduce legal and usability risk.',
      bullets: ['Keyboard navigation', 'Screen reader support', 'Clear contrast'],
      image: '/assets/services/Website & Development/Accessibility compliance.jpg'
    },
    orange: {
      title: 'Answer engine optimization',
      text:
        'Structured content and schema improve visibility in AI-driven search results.',
      image: '/assets/services/Website & Development/Answer engine optimization.jpg'
    },
    green: {
      value: '24/7',
      label: 'Sales asset',
      image: '/assets/services/Website & Development/7 Sales asset.jpg'
    }
  },
  comparison: {
    titleLead: 'Traditional websites',
    titleAccent: 'vs',
    titleTrail: 'Modern web experiences',
    titleAccentColor: '#4A7DFF',
    subtitle: 'See how AI-ready, performance-first sites outperform static builds.',
    leftBadge: 'Legacy build',
    rightBadge: 'Modern build',
    leftTitle: 'Static Websites',
    rightTitle: 'Intelligent Websites',
    leftMetrics: webDesignLegacyMetrics,
    rightMetrics: webDesignModernMetrics,
    leftPain: webDesignLegacyPain,
    rightAdvantages: webDesignModernAdvantages
  },
  industries: {
    eyebrow: 'Industries we serve',
    title: 'Web design across industries',
    subtitle:
      'We build modern websites for professional services, healthcare, education, manufacturing, and more.',
    items: webDesignIndustries
  },
  cta: {
    eyebrow: 'Ready to launch',
    title: 'Ready to build a modern website?',
    description:
      'We design and develop high-performing websites that convert, rank, and scale with your business.',
    primaryCta: 'Book a strategy call',
    secondaryCta: 'Contact us today',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
  },
  faqs: webDesignFaqs
};

const mobileAppContent = {
  hero: {
    badge: 'Mobile App Development',
    title: 'Mobile App Development Services',
    highlight: 'native & cross-platform solutions',
    description:
      'Put your services in your customers pocket with mobile apps that deliver offline access, 3-5x higher engagement, and seamless experiences across iOS and Android.',
    features: mobileHeroFeatures,
    primaryCta: 'Book mobile strategy call',
    secondaryCta: 'Request proposal'
  },
  heroInfo: {
    successLabel: 'Engagement',
    successValue: '3-5x higher',
    timelineLabel: 'Timeline',
    timelineValue: '6-24 weeks'
  },
  services: {
    title: 'Our Mobile App Development Services',
    subtitle:
      'Native, cross-platform, and PWA builds tailored to performance, budget, and time-to-market goals.',
    blocks: mobileAppServiceBlocks
  },
  methodology: {
    title: 'Why mobile-first',
    highlight: 'wins',
    subtitle: 'Mobile-first is essential. We deliver apps users love and return to daily.',
    blue: {
      title: 'Mobile-first reach',
      text:
        '60-70% of web traffic is mobile and users spend 90% of their time in apps, not browsers.',
      pills: ['60-70% traffic', '90% time in apps'],
      image: '/assets/services/Mobile App Development/Mobile-first reach.jpg'
    },
    dark: {
      title: 'Pricing on inquiry',
      statPrefix: 'Pricing',
      statSeparator: '→',
      statHighlight: 'On inquiry',
      statHighlightColor: '#ff6b7a',
      text:
        'We share pricing after understanding scope, feature complexity, and platform mix. You get a clear, tailored proposal.',
      image: '/assets/services/Mobile App Development/Pricing on inquiry.jpg'
    },
    white: {
      label: 'Platform fit',
      title: 'Platform fit',
      text:
        'We guide the decision between native, cross-platform, and PWA based on audience, features, and ROI.',
      bullets: ['Audience platform mix', 'Performance vs budget', 'Maintenance efficiency'],
      image: '/assets/services/Mobile App Development/Platform fit.jpg'
    },
    orange: {
      title: 'Engagement engine',
      text:
        'Push notifications, offline flows, and fast UX drive repeat usage and higher conversions.',
      image: '/assets/services/Mobile App Development/Engagement engine.jpg'
    },
    green: {
      value: '3-5x',
      label: 'Higher engagement',
      image: '/assets/services/Mobile App Development/Higher engagement.jpg'
    }
  },
  comparison: {
    titleLead: 'Cross-Platform',
    titleAccent: 'vs',
    titleTrail: 'Native',
    titleAccentColor: '#4A7DFF',
    subtitle: 'Choose the right build path based on performance, cost, and speed.',
    leftBadge: 'Cross-Platform',
    rightBadge: 'Native Development',
    leftTitle: 'React Native / Flutter',
    rightTitle: 'Native iOS + Android',
    leftMetrics: mobileCrossPlatformMetrics,
    rightMetrics: mobileNativeMetrics,
    leftPain: mobileCrossPlatformPain,
    rightAdvantages: mobileNativeAdvantages
  },
  industries: {
    eyebrow: 'Industries we serve',
    title: 'Mobile apps across industries',
    subtitle:
      'From commerce and fintech to healthcare and logistics, we ship mobile experiences that scale.',
    items: mobileIndustries
  },
  cta: {
    eyebrow: 'Ready to launch',
    title: 'Ready to Launch Your Mobile App?',
    description:
      'Stop leaving mobile revenue on the table. We help you choose the right approach, ship faster, and keep users engaged long term.',
    primaryCta: 'Book a mobile consult',
    secondaryCta: 'Contact us today',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
  },
  faqs: mobileFaqs
};

const ecommerceContent = {
  hero: {
    badge: 'E-commerce Development',
    title: 'E-commerce Development Services',
    highlight: 'build your online store',
    description:
      'Launch and scale your online business with conversion-optimized stores on Shopify, WooCommerce, or custom platforms. We deliver mobile-first shopping and secure checkout experiences that grow revenue.',
    features: ecommerceHeroFeatures,
    primaryCta: 'Book ecommerce consult',
    secondaryCta: 'Request proposal'
  },
  heroInfo: {
    successLabel: 'Conversion focus',
    successValue: 'High-performing stores',
    timelineLabel: 'Timeline',
    timelineValue: 'Project-based'
  },
  services: {
    title: 'Our E-commerce Development Services',
    subtitle:
      'Shopify, WooCommerce, and custom commerce builds designed for conversion, automation, and scale.',
    blocks: ecommerceServiceBlocks
  },
  methodology: {
    title: 'Why ecommerce strategy',
    highlight: 'wins',
    subtitle: 'Platform choice matters, but conversion strategy wins every time.',
    blue: {
      title: 'Conversion-first design',
      text:
        'Streamlined checkout, trust signals, and optimized product pages reduce cart abandonment.',
      pills: ['Frictionless checkout', 'Mobile-first UX'],
      image: '/assets/services/Ecommerce%20Solution/Conversion-first%20design.jpg'
    },
    dark: {
      title: 'Pricing on inquiry',
      statPrefix: 'Pricing',
      statSeparator: '→',
      statHighlight: 'On inquiry',
      statHighlightColor: '#ff6b7a',
      text:
        'We provide tailored ecommerce proposals based on platform, integrations, and scope.',
      image: '/assets/services/Ecommerce%20Solution/Pricing%20on%20inquiry.jpg'
    },
    white: {
      label: 'Payments & logistics',
      title: 'Payments & logistics',
      text:
        'We configure gateways, shipping, taxes, and fulfillment workflows that match your operations.',
      bullets: ['Multi-gateway checkout', 'Shipping automation', 'Tax-ready flows'],
      image: '/assets/services/Ecommerce%20Solution/Payments%20&%20logistics.jpg'
    },
    orange: {
      title: 'Automation & retention',
      text:
        'Abandoned cart recovery, email flows, and personalization keep customers coming back.'
    },
    green: {
      value: 'Growth',
      label: 'Revenue focused',
      image: '/assets/services/Ecommerce%20Solution/Growth.jpg'
    }
  },
  comparison: {
    titleLead: 'Platforms',
    titleAccent: 'vs',
    titleTrail: 'Custom Commerce',
    titleAccentColor: '#4A7DFF',
    subtitle: 'Choose between ready platforms and bespoke commerce experiences.',
    leftBadge: 'Platform Stores',
    rightBadge: 'Custom Commerce',
    leftTitle: 'Shopify / WooCommerce / Magento',
    rightTitle: 'Custom E-commerce',
    leftMetrics: ecommercePlatformMetrics,
    rightMetrics: ecommerceCustomMetrics,
    leftPain: ecommercePlatformPain,
    rightAdvantages: ecommerceCustomAdvantages
  },
  industries: {
    eyebrow: 'Industries we serve',
    title: 'E-commerce across industries',
    subtitle:
      'From DTC to B2B commerce, we build stores that convert and scale.',
    items: ecommerceIndustries
  },
  cta: {
    eyebrow: 'Ready to sell',
    title: 'Ready to Launch Your E-commerce Store?',
    description:
      'We help you pick the right platform, optimize conversion, and ship a store that scales with your business.',
    primaryCta: 'Book a strategy call',
    secondaryCta: 'Contact us today',
    image: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=1200&q=80'
  },
  faqs: ecommerceFaqs
};




const brandContent = {
  hero: {
    badge: 'Brand Building',
    title: 'Branding & Digital Marketing',
    highlight: 'build a powerful brand identity',
    description:
      'Strategic brand development, creative storytelling, and data-driven marketing that build trust and deliver measurable growth.',
    features: brandHeroFeatures,
    primaryCta: 'Book brand strategy call',
    secondaryCta: 'Request proposal'
  },
  heroInfo: {
    successLabel: 'Brand impact',
    successValue: 'Higher recall',
    timelineLabel: 'Timeline',
    timelineValue: 'Project-based'
  },
  services: {
    title: 'Our Branding & Digital Marketing Services',
    subtitle:
      'Strategy, identity, and performance marketing aligned to grow recognition, trust, and revenue.',
    blocks: brandServiceBlocks
  },
  methodology: {
    title: 'Why brand strategy',
    highlight: 'wins',
    subtitle: 'Strong positioning makes every marketing channel perform better.',
    blue: {
      image: '/assets/services/Brand Building/Strategic clarity.jpg',
      title: 'Prioritize clarity',
      text: 'Clear positioning and messaging reduce confusion and accelerate customer trust.',
      pills: ['Clear messaging', 'Focused audience']
    },
    dark: {
      title: 'Pricing on inquiry',
      statPrefix: 'Pricing',
      statSeparator: '→',
      statHighlight: 'On inquiry',
      statHighlightColor: '#ff6b7a',
      text: 'We share tailored proposals based on scope, channels, and goals.',
      image: '/assets/services/Brand Building/Pricing on inquiry.jpg'
    },
    white: {
      label: 'Brand systems',
      title: 'Brand systems',
      text: 'Visual identity, voice, and guidelines create consistency across every touchpoint.',
      bullets: ['Visual identity', 'Brand voice', 'Usage guidelines'],
      image: '/assets/services/Brand Building/Brand systems.jpg'
    },
    orange: {
      title: 'Performance execution',
      text: 'SEO, paid media, content, and email campaigns drive measurable growth.',
      image: '/assets/services/Brand Building/Performance execution.jpg'
    },
    green: {
      value: 'Trust',
      label: 'Built over time',
      image: '/assets/services/Brand Building/Trust Built over time.jpg'
    }
  },
  comparison: {
    titleLead: 'Brand',
    titleAccent: 'vs',
    titleTrail: 'Campaign-only',
    titleAccentColor: '#4A7DFF',
    subtitle: 'Sustainable brand growth outperforms isolated campaigns.',
    leftBadge: 'Campaign-only',
    rightBadge: 'Integrated Brand',
    leftTitle: 'Tactics without strategy',
    rightTitle: 'Strategy + execution',
    leftMetrics: brandVsMetrics,
    rightMetrics: brandIntegratedMetrics,
    leftPain: brandPain,
    rightAdvantages: brandAdvantages
  },
  industries: {
    eyebrow: 'Industries we serve',
    title: 'Brand building across industries',
    subtitle:
      'From professional services to retail and B2B, we build brands that resonate.',
    items: brandIndustries
  },
  cta: {
    eyebrow: 'Ready to grow',
    title: 'Ready to Build a Powerful Brand?',
    description:
      'We help you define your identity, amplify your message, and grow your audience with measurable impact.',
    primaryCta: 'Book a brand consult',
    secondaryCta: 'Contact us today',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
  },
  faqs: brandFaqs
};

const seoContent = {
  hero: {
    badge: 'SEO Services',
    title: 'SEO Services',
    highlight: 'dominate search results',
    description:
      'Search-everywhere optimization that improves visibility across Google, AI answer engines, and social search while driving qualified organic traffic.',
    features: seoHeroFeatures,
    primaryCta: 'Request SEO audit',
    secondaryCta: 'Talk to an SEO strategist'
  },
  heroInfo: {
    successLabel: 'Organic growth',
    successValue: 'Compounding ROI',
    timelineLabel: 'Timeline',
    timelineValue: 'Project-based'
  },
  services: {
    title: 'Our SEO Services',
    subtitle:
      'Technical SEO, content strategy, and authority building designed for the 2026 search landscape.',
    blocks: seoServiceBlocks
  },
  methodology: {
    title: 'Why search everywhere',
    highlight: 'wins',
    subtitle: 'Visibility across Google, AI, and social search drives sustainable growth.',
    blue: {
      title: 'Technical foundation',
      text:
        'Fast, crawlable, structured sites win rankings and AI visibility.',
      pills: ['Core Web Vitals', 'Schema-ready'],
      image: '/assets/services/SEO%20Services/Technical%20foundation.jpg'
    },
    dark: {
      title: 'Pricing on inquiry',
      statPrefix: 'Pricing',
      statSeparator: '→',
      statHighlight: 'On inquiry',
      statHighlightColor: '#ff6b7a',
      text:
        'We scope SEO based on technical needs, content volume, and competitive goals.',
      image: '/assets/services/SEO%20Services/Pricing%20on%20inquiry.jpg'
    },
    white: {
      label: 'Topical authority',
      title: 'Topical authority',
      text:
        'Clustered content and internal linking build trust and rankings.',
      bullets: ['Content clusters', 'Buyer intent', 'E-E-A-T signals'],
      image: '/assets/services/SEO%20Services/Topical%20authority.jpg'
    },
    orange: {
      title: 'Authority signals',
      text:
        'Digital PR and quality backlinks establish brand consensus across the web.',
      image: '/assets/services/SEO%20Services/Authority%20signals.jpg'
    },
    green: {
      value: 'Search',
      label: 'Everywhere',
      image: '/assets/services/SEO%20Services/Search%20Everywhere.jpg'
    }
  },
  comparison: {
    titleLead: 'Traditional SEO',
    titleAccent: 'vs',
    titleTrail: 'Search Everywhere',
    titleAccentColor: '#4A7DFF',
    subtitle: 'Win rankings and AI visibility with modern SEO strategy.',
    leftBadge: 'Traditional',
    rightBadge: 'Search Everywhere',
    leftTitle: 'Google-only focus',
    rightTitle: 'Google + AI + Social',
    leftMetrics: seoComparisonLeft,
    rightMetrics: seoComparisonRight,
    leftPain: seoPain,
    rightAdvantages: seoAdvantages
  },
  industries: {
    eyebrow: 'Industries we serve',
    title: 'SEO across industries',
    subtitle:
      'From local businesses to global brands, we build organic growth engines.',
    items: seoIndustries
  },
  cta: {
    eyebrow: 'Ready to rank',
    title: 'Ready to Dominate Search Results?',
    description:
      'Get a comprehensive SEO audit and a strategy tailored to your growth goals.',
    primaryCta: 'Book an SEO audit',
    secondaryCta: 'Contact us today',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
  },
  faqs: seoFaqs
};

const aiContent = {
  hero: {
    badge: 'AI/ML Services',
    title: 'AI/ML Services',
    highlight: 'for businesses',
    description:
      'Enterprise-grade AI systems that automate workflows, improve decisions, and unlock new revenue—built with compliance and governance in mind.',
    features: aiHeroFeatures,
    primaryCta: 'Book AI discovery',
    secondaryCta: 'Talk to an AI strategist'
  },
  heroInfo: {
    successLabel: 'AI readiness',
    successValue: 'Problem-first',
    timelineLabel: 'Timeline',
    timelineValue: 'Project-based'
  },
  services: {
    title: 'Custom AI Development & Implementation',
    subtitle:
      'Strategy, models, and AI agents engineered for production and measurable impact.',
    blocks: aiServiceBlocks
  },
  methodology: {
    title: 'Why AI-native',
    highlight: 'wins',
    subtitle: 'Solve real business problems with compliant, scalable AI systems.',
    blue: {
      title: 'Problem-first approach',
      text:
        'We prioritize business impact and feasibility before selecting models or tools.',
      pills: ['Use-case focus', 'Measurable ROI'],
      image: '/assets/services/AIML Services/Problem-first approach.jpg'
    },
    dark: {
      title: 'Pricing on inquiry',
      statPrefix: 'Pricing',
      statSeparator: '→',
      statHighlight: 'On inquiry',
      statHighlightColor: '#ff6b7a',
      text:
        'We scope AI based on data availability, integrations, and governance needs.',
      image: '/assets/services/AIML Services/Pricing on inquiry.jpg'
    },
    white: {
      label: 'Governance',
      title: 'Governance & compliance',
      text:
        'Privacy-by-design, audit trails, and bias monitoring are built in from day one.',
      bullets: ['GDPR-ready', 'Audit trails', 'Bias monitoring'],
      image: '/assets/services/AIML Services/Governance & compliance.jpg'
    },
    orange: {
      title: 'MLOps reliability',
      text:
        'Model monitoring, retraining, and versioning keep systems accurate over time.',
      image: '/assets/services/AIML Services/MLOps reliability.jpg'
    },
    green: {
      value: 'AI',
      label: 'Native systems',
      image: '/assets/services/AIML Services/AI Native systems.jpg'
    }
  },
  comparison: {
    titleLead: 'Ad-hoc AI',
    titleAccent: 'vs',
    titleTrail: 'AI-native',
    titleAccentColor: '#4A7DFF',
    subtitle: 'Build AI that scales with governance and measurable impact.',
    leftBadge: 'Ad-hoc',
    rightBadge: 'AI-native',
    leftTitle: 'Pilot-first',
    rightTitle: 'Production-first',
    leftMetrics: aiComparisonLeft,
    rightMetrics: aiComparisonRight,
    leftPain: aiPain,
    rightAdvantages: aiAdvantages
  },
  industries: {
    eyebrow: 'Industries we serve',
    title: 'AI across industries',
    subtitle:
      'From operations to customer support, we deploy AI where it drives impact.',
    items: aiIndustries
  },
  cta: {
    eyebrow: 'Ready for AI',
    title: 'Ready to Transform with AI?',
    description:
      'Get a tailored AI roadmap and a production-ready implementation plan.',
    primaryCta: 'Book AI workshop',
    secondaryCta: 'Contact us today',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80'
  },
  faqs: aiFaqs
};

const erpContent = {
  hero: {
    badge: 'ERP Services',
    title: 'ERP Implementation',
    highlight: 'and integration',
    description:
      'AI-powered ERP implementations that improve accuracy, reduce processing time, and unify operations across your business.',
    features: erpHeroFeatures,
    primaryCta: 'Book ERP discovery',
    secondaryCta: 'Talk to an ERP expert'
  },
  heroInfo: {
    successLabel: 'Accuracy gains',
    successValue: 'Up to 35%',
    timelineLabel: 'Timeline',
    timelineValue: 'Project-based'
  },
  services: {
    title: 'ERP System Selection & Strategic Planning',
    subtitle:
      'Assessment, vendor selection, and implementation planning to reduce risk and ensure adoption.',
    blocks: erpServiceBlocks
  },
  methodology: {
    title: 'Why ERP planning',
    highlight: 'wins',
    subtitle: 'Holistic change management + technical execution delivers success.',
    blue: {
      title: 'Change readiness',
      text:
        'We align stakeholders early to avoid resistance and drive adoption.',
      pills: ['Stakeholder buy-in', 'Role-based training'],
      image: '/assets/services/ERP Services/Change readiness.jpg'
    },
    dark: {
      title: 'Pricing on inquiry',
      statPrefix: 'Pricing',
      statSeparator: '→',
      statHighlight: 'On inquiry',
      statHighlightColor: '#ff6b7a',
      text:
        'We scope ERP based on modules, integrations, and data migration needs.',
      image: '/assets/services/ERP Services/Pricing on inquiry.jpg'
    },
    white: {
      label: 'Data quality',
      title: 'Data quality',
      text:
        'Validated, clean data ensures accurate reporting and successful go-live.',
      bullets: ['Profiling', 'Cleansing', 'Reconciliation'],
      image: '/assets/services/ERP Services/Data quality.jpg'
    },
    orange: {
      title: 'Integration-first',
      text:
        'ERP connects seamlessly with CRM, WMS, ecommerce, and finance tools.',
      image: '/assets/services/ERP Services/Integration-first.jpg'
    },
    green: {
      value: 'ERP',
      label: 'Operational backbone',
      image: '/assets/services/ERP Services/ERP Operational backbone.jpg'
    }
  },
  comparison: {
    titleLead: 'Legacy ERP',
    titleAccent: 'vs',
    titleTrail: 'AI-ready ERP',
    titleAccentColor: '#4A7DFF',
    subtitle: 'Move from reactive reporting to predictive operations.',
    leftBadge: 'Legacy',
    rightBadge: 'AI-ready',
    leftTitle: 'Traditional ERP',
    rightTitle: 'AI-powered ERP',
    leftMetrics: erpComparisonLeft,
    rightMetrics: erpComparisonRight,
    leftPain: erpPain,
    rightAdvantages: erpAdvantages
  },
  industries: {
    eyebrow: 'Industries we serve',
    title: 'ERP across industries',
    subtitle:
      'Manufacturing, logistics, retail, and more—implemented with change management in mind.',
    items: erpIndustries
  },
  cta: {
    eyebrow: 'Ready to modernize',
    title: 'Ready to Transform ERP Operations?',
    description:
      'Get a strategic ERP roadmap aligned to your operational goals and compliance needs.',
    primaryCta: 'Book ERP consult',
    secondaryCta: 'Contact us today',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80'
  },
  faqs: erpFaqs
};

export function ServiceDetailPage({ serviceId }: ServiceDetailPageProps) {
  const { theme } = useTheme();
  const { navigate } = useRouter();
  const isCustomWeb = serviceId === 'custom-web-solution';
  const isWebDesign = serviceId === 'website-design-development';
  const isMobileApp = serviceId === 'web-app-software-development';
  const isEcommerce = serviceId === 'ecommerce-solutions';
  const isBrandBuilding = serviceId === 'brand-building';
  const isSeoServices = serviceId === 'seo-services';
  const isAiMl = serviceId === 'ai-ml-services';
  const isErpServices = serviceId === 'erp-services';
  const isSupportedService =
    serviceId === 'odoo-services' ||
    isCustomWeb ||
    isWebDesign ||
    isMobileApp ||
    isEcommerce ||
    isBrandBuilding ||
    isSeoServices ||
    isAiMl ||
    isErpServices;

  if (!isSupportedService) {
    return <main className="min-h-screen" />;
  }

  const isDark = theme === 'dark';
  const pageContent = isCustomWeb
    ? customWebContent
    : isWebDesign
      ? webDesignContent
      : isMobileApp
        ? mobileAppContent
        : isEcommerce
          ? ecommerceContent
          : isBrandBuilding
            ? brandContent
            : isSeoServices
              ? seoContent
              : isAiMl
                ? aiContent
                : isErpServices
                  ? erpContent
                  : odooContent;
  const themeVars = {
    '--odoo-bg': isDark ? '#1F2937' : '#F3F4F6',
    '--odoo-surface': isDark ? '#111827' : '#FFFFFF',
    '--odoo-card': isDark ? '#1F2937' : '#FFFFFF',
    '--odoo-border': isDark ? 'rgba(148, 163, 184, 0.18)' : 'rgba(15, 23, 42, 0.12)',
    '--odoo-ink': isDark ? '#f8fafc' : '#0f172a',
    '--odoo-muted': isDark ? '#cbd5e1' : '#475569',
    '--odoo-accent': isDark ? '#fbbf24' : '#f59e0b',
    '--odoo-accent-strong': isDark ? '#f97316' : '#d97706',
    '--odoo-mint': isDark ? '#34d399' : '#059669',
    '--odoo-sky': '#4A7DFF',
    '--odoo-rose': isDark ? '#fb7185' : '#f43f5e'
  } as any;

  const heroSectionClass = `relative overflow-hidden px-4 py-20 ${isDark ? 'bg-[#1F2937]' : 'bg-[#F3F4F6]'}`;
  const heroHeadingClass = 'text-[#4A7DFF]';
  const heroBodyClass = isDark ? 'text-slate-300' : 'text-[#1F2937]/80';
  const heroFeatureClass = `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm shadow-sm ${isDark ? 'border-[#4A7DFF]/35 bg-[#111827] text-slate-100' : 'border-[#4A7DFF]/20 bg-white text-[#1F2937]'}`;
  const heroSecondaryCtaClass = `inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-bold text-[#1F2937] shadow-lg transition-all duration-300 hover:bg-[#4A7DFF] hover:text-white hover:shadow-xl hover:-translate-y-0.5 border border-slate-200`;
  const heroInfoCardClass = `rounded-xl border p-4 shadow-lg backdrop-blur ${isDark ? 'border-[#1F2937] bg-[#111827]/90' : 'border-white/60 bg-white/95'}`;
  const heroInfoLabelClass = isDark ? 'text-slate-300' : 'text-[#1F2937]/60';
  const heroInfoValueClass = isDark ? 'text-white' : 'text-[#111827]';
  const heroCodeBadgeClass = `rounded-full border px-3 py-1 text-xs font-semibold shadow-md backdrop-blur ${isDark ? 'border-[#4A7DFF]/35 bg-[#0b1220]/90 text-[#4A7DFF]' : 'border-[#4A7DFF]/35 bg-white/80 text-[#4A7DFF]'}`;
  const successPulseBg = isDark ? ['rgba(34,197,94,0.25)', 'rgba(74,125,255,0.25)', 'rgba(34,197,94,0.25)'] : ['#dcfce7', '#dbeafe', '#dcfce7'];
  const successPulseColor = isDark ? ['#86efac', '#93c5fd', '#86efac'] : ['#16a34a', '#2563eb', '#16a34a'];
  const timelinePulseBg = isDark ? ['rgba(59,130,246,0.25)', 'rgba(249,115,22,0.25)', 'rgba(59,130,246,0.25)'] : ['#dbeafe', '#ffedd5', '#dbeafe'];
  const timelinePulseColor = isDark ? ['#93c5fd', '#fdba74', '#93c5fd'] : ['#2563eb', '#ea580c', '#2563eb'];
  const heroGridLine = isDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb';
  const heroBackplateClass = isDark ? 'bg-[#4A7DFF]/25' : 'bg-[#4A7DFF]/15';
  const heroModuleRadius = 180;
  const heroModulesActive = isCustomWeb || isWebDesign
    ? heroModules.filter(module => module.label !== 'CRM')
    : isMobileApp
      ? heroModules
        .filter(module => module.label !== 'CRM' && module.label !== 'Manufacturing')
        .map(module =>
          module.label === 'Finance'
            ? {
              ...module,
              icon: Smartphone,
              label: 'App',
              colors: 'from-orange-500 to-orange-500',
              solidClass: 'bg-orange-500',
              glowClass: 'bg-orange-500/60',
              solidColor: '#f97316'
            }
            : module
        )
      : isEcommerce
        ? heroModules.map(module =>
          module.label === 'CRM'
            ? {
              ...module,
              icon: ShoppingCart,
              label: 'Commerce',
              colors: 'from-yellow-500 to-yellow-500',
              solidClass: 'bg-yellow-500',
              glowClass: 'bg-yellow-500/70',
              solidColor: '#f59e0b'
            }
            : module
        )
        : heroModules;
  const heroGlassClass = `w-full rounded-[32px] border p-6 backdrop-blur-xl md:p-10 min-h-[700px] ${isDark ? 'border-white/10 bg-white/5 shadow-[0_45px_90px_rgba(0,0,0,0.5),0_12px_24px_rgba(0,0,0,0.35)]' : 'border-white/70 bg-white/70 shadow-[0_35px_70px_rgba(15,23,42,0.18),0_12px_24px_rgba(15,23,42,0.12)]'}`;
  const serviceHeadingClass = 'text-[#4A7DFF]';
  const serviceIntroClass = isDark ? 'text-slate-300' : 'text-[#1F2937]/70';
  const serviceBadgeClass = `inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold ${isDark ? 'border-[#4A7DFF]/40 bg-[#4A7DFF]/15 text-[#4A7DFF]' : 'border-[#4A7DFF]/25 bg-[#4A7DFF]/10 text-[#4A7DFF]'}`;
  const serviceCardClass = `rounded-2xl border p-6 shadow-sm ${isDark ? 'border-white/10 bg-[#111827] text-slate-100' : 'border-slate-200 bg-white text-[#111827]'}`;
  const serviceMutedClass = isDark ? 'text-slate-300' : 'text-slate-600';
  const serviceProcessNumberClass = 'bg-[#4A7DFF] text-white';
  const serviceLabelClass = 'text-[#4A7DFF]';
  const serviceImageClass = isDark ? 'border-white/10' : 'border-slate-200';
  const industrySectionClass = isDark ? 'bg-[#1F2937]' : 'bg-[#F3F4F6]';
  const comparisonTitleClass = 'text-[#4A7DFF]';
  const comparisonSubtitleClass = isDark ? 'text-slate-300' : 'text-slate-600';
  const comparisonCardBaseClass = `rounded-3xl border p-6 shadow-lg ${isDark ? 'backdrop-blur-sm' : ''}`;
  const legacyCardClass = isDark ? 'border-slate-600/50 bg-slate-800/60 text-slate-100' : 'border-slate-200 bg-slate-50 text-slate-900';
  const odooCardClass = isDark ? 'border-[#4A7DFF]/40 bg-[#4A7DFF]/15 text-slate-100' : 'border-[#4A7DFF]/30 bg-[#4A7DFF]/10 text-slate-900';
  const legacyBadgeClass = isDark ? 'border-slate-500/40 bg-slate-700/50 text-slate-200' : 'border-slate-200 bg-slate-100 text-slate-600';
  const odooBadgeClass = isDark ? 'border-[#4A7DFF]/40 bg-[#4A7DFF]/20 text-[#cfe1ff]' : 'border-[#4A7DFF]/30 bg-[#4A7DFF]/15 text-[#2f5ae8]';
  const legacyValueClass = isDark ? 'text-slate-200' : 'text-slate-600';
  const odooValueClass = isDark ? 'text-[#cfe1ff]' : 'text-[#2f5ae8]';
  const ctaPrimaryButtonClass = `inline-flex items-center gap-2 rounded-full !bg-[#4A7DFF] px-8 py-4 text-sm font-bold !text-white transition-all duration-300 hover:!bg-[#3b66d9] hover:shadow-xl hover:-translate-y-0.5 shadow-lg shadow-blue-500/25 mb-4`;
  const ctaGhostButtonClass = `inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#1F2937] transition-all duration-300 hover:bg-[#4A7DFF] hover:text-white hover:shadow-xl hover:-translate-y-0.5 shadow-lg border border-slate-200 mb-4`;
  const eyebrowClass = isDark ? 'text-blue-300' : 'text-blue-600';
  const flipSurfaceClass = 'secondary-bg border border-white/10';
  const flipTitleClass = 'text-slate-100';
  const flipMutedClass = 'text-slate-300';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="odoo-page min-h-screen" style={themeVars}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600&family=Space+Grotesk:wght@400;500;600;700&display=swap');
        .odoo-page {
          background: var(--odoo-bg);
          color: var(--odoo-ink);
          font-family: 'Space Grotesk', sans-serif;
        }
        .odoo-title {
          font-family: 'Fraunces', serif;
          letter-spacing: -0.02em;
          color: var(--odoo-sky);
        }
        .odoo-card {
          background: var(--odoo-card);
          border: 1px solid var(--odoo-border);
          border-radius: 24px;
          box-shadow: 0 30px 60px rgba(15, 23, 42, 0.12);
        }
        .odoo-surface {
          background: var(--odoo-surface);
          border: 1px solid var(--odoo-border);
          border-radius: 28px;
        }
        .odoo-muted { color: var(--odoo-muted); }
        .odoo-chip {
          border: 1px solid color-mix(in srgb, var(--odoo-sky) 30%, transparent);
          border-radius: 999px;
          color: var(--odoo-sky);
          background: color-mix(in srgb, var(--odoo-sky) 5%, transparent);
          font-weight: 500;
        }
        .odoo-pill {
          border: 1px solid color-mix(in srgb, var(--odoo-sky) 30%, transparent);
          border-radius: 999px;
          background: color-mix(in srgb, var(--odoo-sky) 10%, transparent);
          color: var(--odoo-sky);
          font-weight: 500;
        }
        .odoo-flip {
          perspective: 1400px;
        }
        .odoo-flip-inner {
          position: relative;
          min-height: 320px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.3, 0.65, 0.2, 1);
        }
        .methodology-grid {
          display: grid;
          gap: 24px;
          grid-template-columns: 1.35fr 1fr 0.85fr;
          grid-template-rows: 260px 200px;
          align-items: stretch;
        }
        @media (max-width: 1024px) {
          .methodology-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
        }
        @media (min-width: 1024px) {
          .methodology-card-a {
            grid-column: 1 / 2;
            grid-row: 1 / 2;
            height: 260px;
          }
          .methodology-card-b {
            grid-column: 1 / 2;
            grid-row: 2 / 3;
            height: 200px;
          }
          .methodology-card-c {
            grid-column: 2 / 3;
            grid-row: 1 / 3;
            height: 460px;
          }
          .methodology-card-d {
            grid-column: 3 / 4;
            grid-row: 1 / 2;
            height: 260px;
          }
          .methodology-card-e {
            grid-column: 3 / 4;
            grid-row: 2 / 3;
            height: 200px;
          }
        }
        .odoo-flip:hover .odoo-flip-inner,
        .odoo-flip:focus-within .odoo-flip-inner {
          transform: rotateY(180deg);
        }
        .odoo-flip-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 24px;
          overflow: hidden;
        }
        .odoo-flip-back {
          transform: rotateY(180deg);
        }
        @media (prefers-reduced-motion: reduce) {
          .odoo-flip-inner {
            transition: none;
          }
        }
      `}</style>

      {/* Futuristic Hero Banner */}
      <section className={heroSectionClass}>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(to right, ${heroGridLine} 1px, transparent 1px), linear-gradient(to bottom, ${heroGridLine} 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}
        />
        <div className={`absolute -top-20 right-0 h-96 w-96 rounded-full blur-3xl ${isDark ? 'bg-[#4A7DFF]/25' : 'bg-[#4A7DFF]/20'}`} />
        <div className={`absolute bottom-0 left-8 h-80 w-80 rounded-full blur-3xl ${isDark ? 'bg-[#4A7DFF]/15' : 'bg-[#1F2937]/10'}`} />

        <div className="relative z-10 mx-auto w-full px-4">
          <div className={heroGlassClass}>
            <div className="mx-auto max-w-7xl">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#4A7DFF] px-4 py-2 text-sm font-semibold text-white shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-white/90 animate-pulse" />
                    {pageContent.hero.badge}
                  </div>

                  <h1 className={`text-4xl font-semibold leading-tight md:text-5xl ${heroHeadingClass}`}>
                    {pageContent.hero.title}{' '}
                    <span className="text-[#4A7DFF]">{pageContent.hero.highlight}</span>
                  </h1>

                  <p className={`mt-5 text-lg leading-relaxed ${heroBodyClass}`}>
                    {pageContent.hero.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    {pageContent.hero.features.map(feature => (
                      <div
                        key={feature.label}
                        className={heroFeatureClass}
                      >
                        <feature.icon className="h-4 w-4 text-[#4A7DFF]" />
                        {feature.label}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <motion.button
                      type="button"
                      onClick={() => navigate('/contact')}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ backgroundColor: '#4A7DFF', color: '#ffffff' }}
                      className="group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-bold shadow-lg transition-all duration-300 hover:bg-[#3b66d9] hover:shadow-xl hover:-translate-y-0.5"
                    >
                      {pageContent.hero.primaryCta}
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                    <motion.a
                      href="mailto:contact@bytechsol.com"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={heroSecondaryCtaClass}
                    >
                      {pageContent.hero.secondaryCta}
                    </motion.a>
                  </div>
                </motion.div>

                {/* Right Content - Animated ERP Visualization */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative h-[520px]"
                >
                  {/* Connection lines from the hub to modules */}
                  {heroModulesActive.map(module => (
                    <motion.div
                      key={`line-${module.label}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0.2, 0.6, 0.2] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: module.delay
                      }}
                      className="absolute left-1/2 top-1/2 w-0.5 bg-gradient-to-r from-[#4A7DFF]/30 via-[#4A7DFF]/60 to-[#4A7DFF]/30"
                      style={{
                        height: `${heroModuleRadius}px`,
                        transformOrigin: 'top',
                        transform: `translate(-50%, -50%) rotate(${module.angle}deg)`
                      }}
                    />
                  ))}

                  {/* Central Hub: rotation + pulse are split for smooth timing */}
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.05, 1] }}
                    transition={{
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{ backgroundColor: '#4A7DFF' }}
                    className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl shadow-2xl"
                  >
                    <Database className="h-16 w-16 text-white" />
                  </motion.div>

                  <div
                    className={`absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[36px] shadow-[0_30px_60px_rgba(15,23,42,0.12)] ${heroBackplateClass}`}
                  />

                  {heroModulesActive.map(module => {
                    const x = Math.cos((module.angle * Math.PI) / 180) * heroModuleRadius;
                    const y = Math.sin((module.angle * Math.PI) / 180) * heroModuleRadius;
                    const isCommerceModule = isEcommerce && module.label === 'Commerce';
                    const isCrmModule = module.label === 'CRM';
                    const forceSolid = (isCustomWeb || isWebDesign || isMobileApp) || isCommerceModule || isCrmModule;
                    const moduleBgClass =
                      forceSolid && module.solidClass
                        ? module.solidClass
                        : `bg-gradient-to-br ${module.colors}`;
                    const moduleGlowClass =
                      forceSolid && module.glowClass
                        ? module.glowClass
                        : `bg-gradient-to-br ${module.colors}`;
                    const moduleBgStyle = forceSolid && module.solidColor ? { backgroundColor: module.solidColor } : undefined;
                    const moduleGlowStyle = forceSolid && module.solidColor ? { backgroundColor: module.solidColor } : undefined;

                    return (
                      <motion.div
                        key={module.label}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: [0, -10, 0],
                          x: [0, 3, -3, 0],
                          rotate: [0, 2, -2, 0]
                        }}
                        transition={{
                          opacity: { delay: module.delay },
                          scale: { delay: module.delay },
                          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: module.delay },
                          x: { duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: module.delay },
                          rotate: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: module.delay }
                        }}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                      >
                        <div
                          className={`group relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl ${moduleBgClass} shadow-xl`}
                          style={moduleBgStyle}
                        >
                          <module.icon className="h-10 w-10 text-white" />

                          <motion.div
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity, delay: module.delay }}
                            className={`absolute inset-0 rounded-2xl ${moduleGlowClass}`}
                            style={moduleGlowStyle}
                          />

                          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#111827] px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                            {module.label}
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}

                  {(isCustomWeb || isWebDesign) && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: [0, -4, 0] }}
                      transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-4 top-4 z-30 rounded-full border border-[#4A7DFF]/40 bg-white/90 px-4 py-2 text-xs font-semibold text-[#4A7DFF] shadow-lg"
                    >
                      {isCustomWeb ? 'Custom Web' : 'Web Design'}
                    </motion.div>
                  )}

                  {(isCustomWeb || isWebDesign || isMobileApp) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: [0.4, 1, 0.4], y: [0, -6, 0], x: [0, 3, -3, 0], rotate: [0, 3, -3, 0] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute left-1/2 top-1/2"
                      style={{ transform: 'translate(-50%, -50%) translate(-110px, -90px)' }}
                    >
                      <span className={`${heroCodeBadgeClass} inline-flex items-center gap-2`}>
                        <Code2 className="h-3.5 w-3.5" />
                        {isCustomWeb ? 'Custom Web' : isWebDesign ? 'Web Design' : '</>'}
                      </span>
                    </motion.div>
                  )}

                  {/* Particles animate between node distance and center along the same polar paths. */}
                  {[...Array(12)].map((_, idx) => (
                    <motion.div
                      key={idx}
                      animate={{
                        x: [
                          Math.cos((idx * 30 * Math.PI) / 180) * heroModuleRadius,
                          0,
                          Math.cos((idx * 30 * Math.PI) / 180) * heroModuleRadius
                        ],
                        y: [
                          Math.sin((idx * 30 * Math.PI) / 180) * heroModuleRadius,
                          0,
                          Math.sin((idx * 30 * Math.PI) / 180) * heroModuleRadius
                        ],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: idx * 0.25,
                        ease: "easeInOut"
                      }}
                      className="absolute left-1/2 top-1/2 h-0.5 w-0.5 rounded-full bg-[#4A7DFF]"
                    />
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [0, -6, 0], x: [0, 2, -2, 0], rotate: [0, 0.8, -0.8, 0] }}
                    transition={{
                      opacity: { delay: 0.9, duration: 0.4 },
                      y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                      x: { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
                      rotate: { duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.9 }
                    }}
                    className={`absolute ${heroInfoCardClass}`}
                    style={{ right: '0px', top: '120px' }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ backgroundColor: successPulseBg, color: successPulseColor }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                      >
                        <CheckCircle className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <div className={`text-xs ${heroInfoLabelClass}`}>{pageContent.heroInfo.successLabel}</div>
                        <div className={`text-sm font-semibold ${heroInfoValueClass}`}>{pageContent.heroInfo.successValue}</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [0, -6, 0], x: [0, -2, 2, 0], rotate: [0, -0.8, 0.8, 0] }}
                    transition={{
                      opacity: { delay: 1.1, duration: 0.4 },
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
                      x: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
                      rotate: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }
                    }}
                    className={`absolute ${heroInfoCardClass}`}
                    style={{ left: '0px', bottom: '0px' }}
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ backgroundColor: timelinePulseBg, color: timelinePulseColor }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="flex h-10 w-10 items-center justify-center rounded-lg"
                      >
                        <Clock className="h-5 w-5" />
                      </motion.div>
                      <div>
                        <div className={`text-xs ${heroInfoLabelClass}`}>{pageContent.heroInfo.timelineLabel}</div>
                        <div className={`text-sm font-semibold ${heroInfoValueClass}`}>{pageContent.heroInfo.timelineValue}</div>
                      </div>
                    </div>
                  </motion.div>
                  {/* @ts-ignore */}
                  {pageContent.methodology.dark.image && (
                    <>
                      <div className="absolute inset-0 bg-[#162751]/80 z-0" />
                      <img
                        /* @ts-ignore */
                        src={pageContent.methodology.dark.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover -z-10"
                      />
                      <style>{`.methodology-card-b > *:not(img):not(.bg-\\[\\#162751\\]\\/80) { position: relative; z-index: 10; }`}</style>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-16 ${industrySectionClass}`}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2
              className={`text-3xl font-semibold ${serviceHeadingClass}`}
              style={{ color: '#4A7DFF' }}
            >
              {pageContent.services.title}
            </h2>
            <p className={`mx-auto mt-4 max-w-2xl text-base ${serviceIntroClass}`}>
              {pageContent.services.subtitle}
            </p>
          </div>

          <div className="mt-12">
            {pageContent.services.blocks.map((block, index) => {
              const isEven = index % 2 === 0;

              return (
                <Fragment key={block.title}>
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14"
                  >
                    {isEven ? (
                      <>
                        <div className="space-y-6">
                          <div className="space-y-4">
                            <span className={serviceBadgeClass}>{block.eyebrow}</span>
                            <h3
                              className={`text-2xl font-semibold ${serviceHeadingClass}`}
                              style={{ color: '#4A7DFF' }}
                            >
                              {block.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${serviceMutedClass}`}>{block.offer}</p>
                          </div>
                          <div className={serviceCardClass}>
                            <div
                              className={`text-sm font-semibold ${serviceLabelClass}`}
                              style={{ color: '#4A7DFF' }}
                            >
                              Deliverables
                            </div>
                            <ul className={`mt-4 space-y-3 text-sm ${serviceMutedClass}`}>
                              {block.deliverables.map(item => (
                                <li key={item} className="flex items-start gap-3">
                                  <CheckCircle2
                                    className="mt-0.5 h-4 w-4"
                                    style={{ color: '#4A7DFF' }}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div
                              className={`overflow-hidden rounded-3xl border ${serviceImageClass} shadow-sm`}
                              style={{ height: '210px' }}
                            >
                              <img
                                src={block.image}
                                alt={block.title}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </motion.div>
                          <div className={serviceCardClass}>
                            <div
                              className={`text-sm font-semibold ${serviceLabelClass}`}
                              style={{ color: '#4A7DFF' }}
                            >
                              Our process
                            </div>
                            <div className="mt-4 space-y-4">
                              {block.process.map((step, stepIndex) => (
                                <div key={step} className="flex items-start gap-4">
                                  <span
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold shadow ${serviceProcessNumberClass}`}
                                    style={{ backgroundColor: '#4A7DFF', color: '#fff' }}
                                  >
                                    {stepIndex + 1}
                                  </span>
                                  <p className={`text-sm leading-relaxed ${serviceMutedClass}`}>{step}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="space-y-6">
                          <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.6 }}
                          >
                            <div
                              className={`overflow-hidden rounded-3xl border ${serviceImageClass} shadow-sm`}
                              style={{ height: '210px' }}
                            >
                              <img
                                src={block.image}
                                alt={block.title}
                                className="h-full w-full object-cover"
                              />
                            </div>
                          </motion.div>
                          <div className={serviceCardClass}>
                            <div
                              className={`text-sm font-semibold ${serviceLabelClass}`}
                              style={{ color: '#4A7DFF' }}
                            >
                              Our process
                            </div>
                            <div className="mt-4 space-y-4">
                              {block.process.map((step, stepIndex) => (
                                <div key={step} className="flex items-start gap-4">
                                  <span
                                    className={`flex h-10 w-10 items-center justify-center rounded-xl text-sm font-semibold shadow ${serviceProcessNumberClass}`}
                                    style={{ backgroundColor: '#4A7DFF', color: '#fff' }}
                                  >
                                    {stepIndex + 1}
                                  </span>
                                  <p className={`text-sm leading-relaxed ${serviceMutedClass}`}>{step}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div className="space-y-4">
                            <span className={serviceBadgeClass}>{block.eyebrow}</span>
                            <h3
                              className={`text-2xl font-semibold ${serviceHeadingClass}`}
                              style={{ color: '#4A7DFF' }}
                            >
                              {block.title}
                            </h3>
                            <p className={`text-sm leading-relaxed ${serviceMutedClass}`}>{block.offer}</p>
                          </div>
                          <div className={serviceCardClass}>
                            <div
                              className={`text-sm font-semibold ${serviceLabelClass}`}
                              style={{ color: '#4A7DFF' }}
                            >
                              Deliverables
                            </div>
                            <ul className={`mt-4 space-y-3 text-sm ${serviceMutedClass}`}>
                              {block.deliverables.map(item => (
                                <li key={item} className="flex items-start gap-3">
                                  <CheckCircle2
                                    className="mt-0.5 h-4 w-4"
                                    style={{ color: '#4A7DFF' }}
                                  />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.article>
                  {index < pageContent.services.blocks.length - 1 ? (
                    <div className="h-16 md:h-20 lg:h-24" />
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-gradient-to-br from-[#0b1434] via-[#122660] to-[#1e3a8a] px-6 py-20 text-white"
        style={{ background: 'linear-gradient(135deg, #0b1434 0%, #122660 45%, #1e3a8a 100%)' }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#4A7DFF] text-white shadow-[0_18px_40px_rgba(74,125,255,0.45)]"
              style={{ backgroundColor: '#4A7DFF', boxShadow: '0 18px 40px rgba(74,125,255,0.45)' }}
            >
              <Magnet className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-3xl font-semibold">
              {pageContent.methodology.title}{' '}
              <span className="text-[#4A7DFF]">{pageContent.methodology.highlight}</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
              {pageContent.methodology.subtitle}
            </p>
          </div>

          <div className="mt-12 methodology-grid">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="methodology-card-a relative h-full rounded-[28px] bg-gradient-to-br from-[#4A7DFF] to-[#2f5ae8] p-6 shadow-[0_30px_60px_rgba(32,63,152,0.45)] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #4A7DFF 0%, #2f5ae8 100%)',
                boxShadow: '0 30px 60px rgba(32,63,152,0.45)'
              }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white"
                style={{ borderColor: 'rgba(255,255,255,0.6)' }}
              >
                <Target className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{pageContent.methodology.blue.title}</h3>
              <p className="mt-3 text-sm text-white/85">{pageContent.methodology.blue.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pageContent.methodology.blue.pills.map(pill => (
                  <span
                    key={pill}
                    className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              {/* @ts-ignore */}
              {pageContent.methodology.blue.image && (
                <>
                  <div className="absolute inset-0 bg-blue-600/60 z-0" />
                  <img
                    /* @ts-ignore */
                    src={pageContent.methodology.blue.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover -z-10"
                  />
                  {/* Re-add relative to content to keep it above overlay */}
                  <style>{`.methodology-card-a > *:not(img):not(.bg-blue-600\\/60) { position: relative; z-index: 10; }`}</style>
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="methodology-card-b relative h-full rounded-[28px] border border-white/10 bg-[#162751] p-6 shadow-[0_25px_50px_rgba(12,18,48,0.6)] overflow-hidden"
              style={{
                backgroundColor: '#162751',
                borderColor: 'rgba(255,255,255,0.08)',
                boxShadow: '0 25px 50px rgba(12,18,48,0.6)'
              }}
            >
              <div className="flex items-center gap-3 text-sm font-semibold text-white/85">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-200">
                  <TrendingUp className="h-5 w-5" />
                </div>
                {pageContent.methodology.dark.title}
              </div>
              <div className="mt-4 text-2xl font-semibold">
                {pageContent.methodology.dark.statPrefix}{' '}
                <span className="text-white/60">{pageContent.methodology.dark.statSeparator}</span>{' '}
                <span style={{ color: pageContent.methodology.dark.statHighlightColor }}>
                  {pageContent.methodology.dark.statHighlight}
                </span>
              </div>
              <p className="mt-2 text-sm text-white/70">
                {pageContent.methodology.dark.text}
              </p>
              {/* @ts-ignore */}
              {pageContent.methodology.dark.image && (
                <>
                  <div className="absolute inset-0 bg-[#162751]/80 z-0" />
                  <img
                    /* @ts-ignore */
                    src={pageContent.methodology.dark.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover -z-10"
                  />
                  <style>{`.methodology-card-b > *:not(img):not(.bg-\\[\\#162751\\]\\/80) { position: relative; z-index: 10; }`}</style>
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="methodology-card-c relative h-full rounded-[28px] bg-white p-6 text-[#111827] shadow-[0_30px_60px_rgba(15,23,42,0.2)] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f6f4ff 100%)',
                boxShadow: '0 30px 60px rgba(15,23,42,0.2)',
                color: '#111827'
              }}
            >
              <div className="flex items-center gap-3 text-[#8b5cf6]">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#8b5cf6]/15 text-[#8b5cf6]">
                  <Users className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-[0.3em] text-[#8b5cf6]">
                  {pageContent.methodology.white.label}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-semibold" style={{ color: '#111827' }}>
                {pageContent.methodology.white.title}
              </h3>
              <p className="mt-3 text-sm text-slate-700" style={{ color: '#111827' }}>
                {pageContent.methodology.white.text}
              </p>
              <ul className="mt-5 space-y-3 text-sm text-slate-700" style={{ color: '#111827' }}>
                {pageContent.methodology.white.bullets.map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#8b5cf6]" />
                    <span style={{ color: '#111827' }}>{item}</span>
                  </li>
                ))}
              </ul>
              {/* @ts-ignore */}
              {pageContent.methodology.white.image && (
                <>
                  <div className="absolute inset-0 bg-white/70 z-0" />
                  <img
                    /* @ts-ignore */
                    src={pageContent.methodology.white.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover -z-10"
                  />
                  <style>{`.methodology-card-c > *:not(img):not(.bg-white\\/70) { position: relative; z-index: 10; }`}</style>
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="methodology-card-d relative h-full rounded-[28px] bg-gradient-to-br from-[#ff7a18] to-[#ff3d54] p-6 shadow-[0_25px_50px_rgba(255,79,79,0.35)] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #ff7a18 0%, #ff3d54 100%)',
                boxShadow: '0 25px 50px rgba(255,79,79,0.35)'
              }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{pageContent.methodology.orange.title}</h3>
              <p className="mt-3 text-sm text-white/85">{pageContent.methodology.orange.text}</p>
              {/* @ts-ignore */}
              {pageContent.methodology.orange.image && (
                <>
                  <div className="absolute inset-0 bg-orange-600/60 z-0" />
                  <img
                    /* @ts-ignore */
                    src={pageContent.methodology.orange.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover -z-10"
                  />
                  <style>{`.methodology-card-d > *:not(img):not(.bg-orange-600\\/60) { position: relative; z-index: 10; }`}</style>
                </>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="methodology-card-e relative flex h-full min-h-[160px] flex-col items-center justify-center rounded-[28px] bg-gradient-to-br from-[#16a34a] to-[#22c55e] p-6 text-center shadow-[0_25px_50px_rgba(16,185,129,0.35)] overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 100%)',
                boxShadow: '0 25px 50px rgba(16,185,129,0.35)'
              }}
            >
              <div className="text-4xl font-semibold">{pageContent.methodology.green.value}</div>
              <div className="mt-1 text-sm text-white/90">{pageContent.methodology.green.label}</div>
              {/* @ts-ignore */}
              {pageContent.methodology.green.image && (
                <>
                  <div className="absolute inset-0 bg-green-600/60 z-0" />
                  <img
                    /* @ts-ignore */
                    src={pageContent.methodology.green.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover -z-10"
                  />
                  <style>{`.methodology-card-e > *:not(img):not(.bg-green-600\\/60) { position: relative; z-index: 10; }`}</style>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mt-24 px-6 pt-24 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2
              className={`text-3xl font-semibold ${comparisonTitleClass}`}
              style={{ color: '#4A7DFF' }}
            >
              {pageContent.comparison.titleLead}{' '}
              <span style={{ color: pageContent.comparison.titleAccentColor }}>
                {pageContent.comparison.titleAccent}
              </span>{' '}
              {pageContent.comparison.titleTrail}
            </h2>
            <p className={`mt-3 text-sm ${comparisonSubtitleClass}`}>
              {pageContent.comparison.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className={`${comparisonCardBaseClass} ${legacyCardClass}`}
              style={{
                backgroundColor: '#F3F4F6',
                borderColor: '#E5E7EB',
                color: '#111827'
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold ${legacyBadgeClass}`}
                  style={{ backgroundColor: '#E5E7EB', borderColor: '#D1D5DB', color: '#374151' }}
                >
                  {pageContent.comparison.leftBadge}
                </span>
                <span className="text-2xl">😓</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold">{pageContent.comparison.leftTitle}</h3>

              <div className="mt-6 space-y-3 text-sm">
                {pageContent.comparison.leftMetrics.map(metric => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between border-b pb-2"
                    style={{ borderColor: '#E5E7EB' }}
                  >
                    <span>{metric.label}</span>
                    <span className={`font-semibold ${legacyValueClass}`}>{metric.value}</span>
                  </div>
                ))}
              </div>

              <ul className="mt-6 space-y-3 text-sm">
                {pageContent.comparison.leftPain.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                      <X className="h-3 w-3" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`${comparisonCardBaseClass} ${odooCardClass}`}
              style={{
                backgroundColor: '#4A7DFF',
                borderColor: '#3b6df5',
                color: '#ffffff'
              }}
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-1 text-xs font-semibold ${odooBadgeClass}`}
                  style={{ backgroundColor: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.45)', color: '#ffffff' }}
                >
                  {pageContent.comparison.rightBadge}
                </span>
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold" style={{ color: '#ffffff' }}>
                {pageContent.comparison.rightTitle}
              </h3>

              <div className="mt-6 space-y-3 text-sm">
                {pageContent.comparison.rightMetrics.map(metric => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between border-b pb-2"
                    style={{ borderColor: 'rgba(255,255,255,0.35)' }}
                  >
                    <span style={{ color: '#ffffff' }}>{metric.label}</span>
                    <span className="font-semibold" style={{ color: '#ffffff' }}>
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                {pageContent.comparison.rightAdvantages.map(item => (
                  <div key={item.title} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="font-semibold" style={{ color: '#ffffff' }}>
                        {item.title}
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.85)' }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`px-6 py-16 ${industrySectionClass}`}>
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className={`text-xs uppercase tracking-[0.3em] ${eyebrowClass}`}>
                {pageContent.industries.eyebrow}
              </div>
              <h2 className="odoo-title mt-3 text-3xl">{pageContent.industries.title}</h2>
            </div>
            <p className="max-w-md text-sm odoo-muted">
              {pageContent.industries.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pageContent.industries.items.map(industry => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="odoo-flip focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60"
                tabIndex={0}
                role="button"
                aria-label={`Flip card for ${industry.title}`}
              >
                <div className="odoo-flip-inner">
                  <div className={`odoo-flip-face odoo-flip-front ${flipSurfaceClass} flex flex-col relative`}>
                    <img
                      src={industry.image}
                      alt={industry.title}
                      className="h-full w-full object-cover"
                    />
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                      style={{ background: 'linear-gradient(to top, rgba(23, 37, 84, 0.95) 0%, rgba(30, 58, 138, 0.8) 50%, rgba(30, 58, 138, 0.4) 100%)' }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-3">{industry.title}</h3>
                      <p className="text-sm text-white max-w-sm font-medium drop-shadow-md">{industry.description}</p>
                    </div>
                  </div>
                  <div className="odoo-flip-face odoo-flip-back" style={{ backgroundColor: '#4A7DFF' }}>
                    <div className="flex h-full flex-col p-6">
                      <div className="text-xs uppercase tracking-[0.3em] text-blue-100 font-semibold">Key outcomes</div>
                      <h3 className="mt-2 text-xl font-semibold text-white">{industry.title}</h3>
                      <p className="mt-3 text-sm text-blue-50">{industry.description}</p>
                      <ul className="mt-4 space-y-3 text-sm">
                        {industry.features.map(feature => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-white" />
                            <span className="text-white">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="odoo-card grid gap-10 p-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className={`text-xs uppercase tracking-[0.3em] ${eyebrowClass}`}>
                {pageContent.cta.eyebrow}
              </div>
              <h2 className="odoo-title mt-3 text-3xl">{pageContent.cta.title}</h2>
              <p className="mt-4 text-sm leading-relaxed odoo-muted">
                {pageContent.cta.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <button
                  type="button"
                  onClick={() => navigate('/contact')}
                  className={ctaPrimaryButtonClass}
                >
                  {pageContent.cta.primaryCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="mailto:contact@bytechsol.com"
                  className={ctaGhostButtonClass}
                >
                  {pageContent.cta.secondaryCta}
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={pageContent.cta.image}
                alt="Team planning delivery"
                className="h-full w-full rounded-3xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 pt-10 border-t border-white/5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12">
            <span className={`text-xs font-bold tracking-[0.3em] uppercase mb-4 block ${eyebrowClass}`}>
              FAQ
            </span>
            <h2 className="odoo-title mt-3 text-3xl md:text-4xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {pageContent.faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4 }}
                  className={`odoo-card p-6 transition-all duration-300 ${isOpen ? 'ring-1 ring-blue-500/30' : ''}`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-blue-500' : 'text-slate-400'}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 text-sm leading-relaxed odoo-muted">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

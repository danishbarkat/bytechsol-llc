import { motion } from 'motion/react';
import { Code, Palette, Brain, Smartphone, Database, Globe } from 'lucide-react';
import { useTheme } from './ThemeContext';

const services = [
  {
    icon: Code,
    title: 'Web Design & Development',
    description: 'High-performing marketing sites, portals, and SaaS products tailored to your story and growth goals.',
    deliverables: [
      'Custom web apps & portals',
      'Responsive marketing sites',
      'Product landing experiences',
      'Performance & SEO optimization',
    ],
  },
  {
    icon: Palette,
    title: 'Marketing & Brand Building',
    description: 'Campaigns and brand systems that attract, convert, and nurture your audience across every digital touchpoint.',
    deliverables: [
      'Brand strategy & identity',
      'Content & social marketing',
      'Paid media & funnels',
      'Conversion optimization',
    ],
  },
  {
    icon: Database,
    title: 'Odoo & Custom ERPs',
    description: 'End-to-end Odoo consulting, implementation, and custom ERP workflows that automate your operations.',
    deliverables: [
      'Implementation & migration',
      'Workflow automation',
      'Custom module development',
      'Training & documentation',
    ],
  },
  {
    icon: Brain,
    title: 'AI / ML Experiences',
    description: 'Intelligent assistants, recommendations, and automations that put modern AI/LLM tech inside your product.',
    deliverables: [
      'Chatbots & copilots',
      'Predictive analytics',
      'Model tuning & hosting',
      'Product integrations',
    ],
  },
  {
    icon: Smartphone,
    title: 'E-Commerce & Product Builds',
    description: 'Shopify, mobile, and headless commerce solutions designed to scale revenue with seamless UX.',
    deliverables: [
      'Shopify & headless builds',
      'Mobile commerce apps',
      'Subscription journeys',
      'Payment & fulfillment integrations',
    ],
  },
  {
    icon: Globe,
    title: 'Custom Web & Support',
    description: 'Long-term partners for feature updates, site maintenance, devops, and day-2 support.',
    deliverables: [
      'Ongoing product sprints',
      'Site maintenance & SLAs',
      'DevOps & cloud management',
      'Analytics & CRO reviews',
    ],
  },
];

export function Services() {
  const { theme } = useTheme();
  const sectionClassName = `relative py-24 px-6 ${theme === 'dark' ? 'secondary-bg' : 'soft-bg'}`;
  const cardClassName = theme === 'dark'
    ? 'secondary-bg border-white/10 text-white shadow-[0_20px_40px_rgba(0,0,0,0.25)]'
    : 'bg-white border-slate-200 text-slate-900 shadow-[0_20px_40px_rgba(15,23,42,0.08)]';
  const mutedTextClassName = theme === 'dark' ? 'text-slate-300' : 'text-slate-600';
  const subtleTextClassName = theme === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <section id="services" className={sectionClassName}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="brand-text text-xs tracking-[0.4em] uppercase mb-4 block">
            Services
          </span>
          <h2 className={`mb-4 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            What can we design and build for you?
          </h2>
          <p className={`text-lg ${mutedTextClassName}`}>
            End-to-end delivery across web, product, and growth with a single, aligned team.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl border p-8 transition-all duration-300 group hover:-translate-y-1 ${cardClassName}`}
            >
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs font-semibold tracking-[0.3em] ${subtleTextClassName}`}>
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div
                  className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    theme === 'dark' ? 'bg-white/10' : 'bg-slate-100'
                  }`}
                >
                  <service.icon className="w-5 h-5 brand-text" />
                </div>
              </div>
              <h3 className={`mb-3 text-xl ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>
              <p className={`mb-6 leading-relaxed ${mutedTextClassName}`}>{service.description}</p>
              
              {/* Deliverables */}
              <ul className="space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className={`flex items-start gap-2 text-sm ${subtleTextClassName}`}>
                    <span className="brand-text mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className={`${mutedTextClassName} mb-6`}>
            Need a custom solution? Let&apos;s discuss your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 brand-bg text-white transition-all duration-300 hover:opacity-90 shadow-lg"
            style={{ borderRadius: '999px' }}
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

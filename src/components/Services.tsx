import { motion } from 'motion/react';
import { Code, Palette, Brain, Smartphone, Database, Globe } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Product Strategy',
    description: 'We help you identify opportunities to integrate AI into your product ecosystem, creating intelligent experiences that adapt to user needs.',
    deliverables: [
      'AI Feasibility Studies',
      'Model Selection & Training',
      'Integration Architecture',
      'Performance Optimization',
    ],
  },
  {
    icon: Palette,
    title: 'UX/UI Design',
    description: 'Human-centered design powered by data insights. We create interfaces that are both beautiful and functionally superior.',
    deliverables: [
      'User Research & Testing',
      'Design Systems',
      'Prototyping & Animation',
      'Accessibility Audits',
    ],
  },
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end development using modern frameworks and best practices. Scalable, maintainable, and performant applications.',
    deliverables: [
      'React/Next.js Frontend',
      'Node.js/Python Backend',
      'API Design & Integration',
      'DevOps & CI/CD',
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that deliver seamless performance across iOS and Android.',
    deliverables: [
      'iOS & Android Development',
      'React Native Solutions',
      'App Store Optimization',
      'Push Notifications',
    ],
  },
  {
    icon: Database,
    title: 'Data Visualization',
    description: 'Transform complex data into intuitive visual narratives. Real-time dashboards and interactive analytics.',
    deliverables: [
      'Custom Dashboards',
      'D3.js Visualizations',
      'Real-Time Analytics',
      'Reporting Systems',
    ],
  },
  {
    icon: Globe,
    title: 'Platform Engineering',
    description: 'Build scalable platforms that grow with your business. Cloud-native architectures and microservices.',
    deliverables: [
      'Cloud Architecture (AWS/GCP)',
      'Microservices Design',
      'API Gateway Setup',
      'Infrastructure as Code',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <span className="text-purple-400 text-sm tracking-[0.3em] uppercase mb-6 block">
            Our Services
          </span>
          <h2 className="text-white mb-6 leading-tight">
            End-to-End Digital Solutions Powered by AI
          </h2>
          <p className="text-xl text-slate-400">
            From strategy to deployment, we provide comprehensive services that cover 
            every aspect of digital product development.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-800">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-950 p-10 hover:bg-slate-900 transition-colors group"
            >
              <service.icon className="w-10 h-10 text-purple-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-white mb-4 text-2xl">{service.title}</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">{service.description}</p>
              
              {/* Deliverables */}
              <ul className="space-y-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="text-purple-400 mt-1">—</span>
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
          className="mt-20 text-center"
        >
          <p className="text-slate-400 mb-6">
            Need a custom solution? Let&apos;s discuss your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 text-white hover:bg-purple-500 transition-all"
          >
            Schedule a Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}

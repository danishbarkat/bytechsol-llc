import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from './ThemeContext';
import { ArrowUpRight, Star, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  // Custom Web Solutions
  {
    title: 'Bellroy',
    category: 'Custom Web',
    image: '/assets/portfolio/custom-web-solution/bellroy.png',
    description: 'Premium carry goods e-commerce experience.',
    tags: ['Next.js', 'Headless', 'Performance']
  },
  {
    title: 'Bouqs',
    category: 'Custom Web',
    image: '/assets/portfolio/custom-web-solution/bouqs.png',
    description: 'Fresh flower delivery platform.',
    tags: ['E-commerce', 'React', 'Shopify']
  },
  {
    title: 'BrickLink',
    category: 'Custom Web',
    image: '/assets/portfolio/custom-web-solution/bricklink.png',
    description: 'LEGO marketplace and community.',
    tags: ['Marketplace', 'Community', 'Scale']
  },
  {
    title: 'Crutchfield',
    category: 'Custom Web',
    image: '/assets/portfolio/custom-web-solution/crutchfield.png',
    description: 'Electronics and audio equipment retailer.',
    tags: ['E-commerce', 'Retail', 'Audio']
  },
  {
    title: 'PetLab Co.',
    category: 'Custom Web',
    image: '/assets/portfolio/custom-web-solution/petlabco.png',
    description: 'Leading pet health and wellness brand.',
    tags: ['Health', 'E-commerce', 'Pets']
  },
  {
    title: 'Real eREstate',
    category: 'Custom Web',
    image: '/assets/portfolio/custom-web-solution/realerestate.png',
    description: 'Real estate investment platform.',
    tags: ['Real Estate', 'Investment', 'Platform']
  },
  {
    title: 'Trulia',
    category: 'Custom Web',
    image: '/assets/portfolio/custom-web-solution/trulia.png',
    description: 'Real estate search and discovery.',
    tags: ['Real Estate', 'Search', 'Discovery']
  },
  // Shopify
  {
    title: 'LuxeDH',
    category: 'Shopify',
    image: '/assets/portfolio/shopify/luxedh.png',
    description: 'Luxury designer handbags and accessories.',
    tags: ['Shopify', 'Luxury', 'Fashion']
  },
  // WordPress
  {
    title: 'Hair Cuttery',
    category: 'WordPress',
    image: '/assets/portfolio/wordpress/haircuttery.jpg',
    description: 'Full-service hair salon chain website.',
    tags: ['WordPress', 'Salon', 'Services']
  },
  {
    title: 'Ledger',
    category: 'WordPress',
    image: '/assets/portfolio/wordpress/ledger.jpg',
    description: 'Secure hardware wallet solutions for crypto.',
    tags: ['Crypto', 'Security', 'Hardware']
  },
  {
    title: 'Native Soul',
    category: 'WordPress',
    image: '/assets/portfolio/wordpress/nativesoul.jpg',
    description: 'Indigenous-inspired lifestyle brand.',
    tags: ['Lifestyle', 'Brand', 'Culture']
  },
  {
    title: 'No Agent Property',
    category: 'WordPress',
    image: '/assets/portfolio/wordpress/noagentproperty.jpg',
    description: 'Direct property sales platform.',
    tags: ['Real Estate', 'Direct Sales', 'Australia']
  },
  {
    title: 'Owner',
    category: 'WordPress',
    image: '/assets/portfolio/wordpress/owner.jpg',
    description: 'Property owner direct sales.',
    tags: ['Real Estate', 'FSBO', 'Australia']
  },
  {
    title: 'Perfect Keto',
    category: 'WordPress',
    image: '/assets/portfolio/wordpress/perfectketo.jpg',
    description: 'Ketogenic diet products and resources.',
    tags: ['Health', 'Keto', 'E-commerce']
  },
  {
    title: 'Sale By Home Owner',
    category: 'WordPress',
    image: '/assets/portfolio/wordpress/salesbyhomeowner.jpg',
    description: 'For-sale-by-owner property platform.',
    tags: ['Real Estate', 'FSBO', 'Platform']
  },
  // Squarespace
  {
    title: 'A New Project',
    category: 'Squarespace',
    image: '/assets/portfolio/squarespace/anewproject.jpg',
    description: 'Creative project showcase.',
    tags: ['Creative', 'Portfolio', 'Showcase']
  },
  {
    title: 'CORE Survival',
    category: 'Squarespace',
    image: '/assets/portfolio/squarespace/coresurvival.jpg',
    description: 'Tactical lighting systems.',
    tags: ['Tactical', 'Lighting', 'Outdoor']
  },
];

const categories = ['All', 'Custom Web', 'Shopify', 'WordPress', 'Squarespace'];

const faqItems = [
  {
    question: "How long does a typical project development take?",
    answer: "Project timelines vary based on complexity, but most enterprise builds range from 8 to 16 weeks from discovery to final deployment."
  },
  {
    question: "Do you provide ongoing post-launch support?",
    answer: "Yes, we offer flexible maintenance and growth packages to ensure your platform remains optimized, secure, and ready for new feature releases."
  },
  {
    question: "Can you help with legacy project migrations?",
    answer: "Absolutely. We specialize in modernizing outdated architectures while ensuring zero data loss and minimal business interruption during the transition."
  },
  {
    question: "How do you handle project confidentiality?",
    answer: "We sign strict NDAs before any project discussion. Your intellectual property and business strategies are treated with the highest level of security."
  },
  {
    question: "Do you offer fixed-price or flexible budget models?",
    answer: "We work with both models. Fixed-price is often best for well-defined builds, while our dedicated squad model works perfectly for long-term product development."
  }
];

export function PortfolioPage() {
  const { theme } = useTheme();
  const [filter, setFilter] = useState('All');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredProjects = projects.filter(p => filter === 'All' || p.category === filter);

  return (
    <main className={`min-h-screen pt-20 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#3b82f6,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full mb-8 bg-blue-500/10 border border-blue-500/20 text-blue-600 text-sm font-bold uppercase tracking-wider"
          >
            <Star className="w-4 h-4" />
            Impactful Deliverables
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-6xl md:text-8xl font-black mb-12 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Digital <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">Masterpieces</span>
          </motion.h1>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-2xl font-bold transition-all ${filter === cat
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20 scale-105'
                  : (theme === 'dark' ? 'bg-white/5 text-slate-400 hover:bg-white/10' : 'bg-white text-slate-600 hover:bg-slate-100 shadow-lg')
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className={`p-10 rounded-[3.5rem] border transition-all duration-500 ${theme === 'dark' ? 'bg-slate-900/50 border-white/10 hover:border-blue-500/30' : 'bg-white border-slate-200 hover:border-blue-500 shadow-2xl'
                  }`}>
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-10 border border-white/10 shadow-3xl">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      fallback="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                      className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-1.5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest shadow-xl">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className={`text-4xl font-black mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                      <p className={`text-lg mb-8 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{project.description}</p>
                      <div className="flex gap-4">
                        {project.tags.map(tag => (
                          <span key={tag} className={`text-xs font-bold uppercase tracking-widest ${theme === 'dark' ? 'text-slate-500' : 'text-slate-400'}`}>{tag}</span>
                        ))}
                      </div>
                    </div>
                    <motion.div whileHover={{ scale: 1.2, rotate: 45 }} className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-colors ${theme === 'dark' ? 'bg-white/10 hover:bg-blue-600' : 'bg-slate-900 hover:bg-blue-600'} text-white shadow-xl`}>
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Portfolio FAQ - Redesigned to match Odoo premium style */}
      <section className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase mb-4 block text-blue-500">
              FAQ
            </span>
            <h2 className={`text-4xl md:text-5xl font-medium mb-12 text-[#4A7DFF]`} style={{ fontFamily: '"Fraunces", serif', letterSpacing: '-0.02em' }}>
              Frequently asked questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-start">
            {faqItems.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-3xl transition-all duration-300 p-6 ${theme === 'dark'
                    ? 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                    : 'bg-white border border-slate-200 shadow-[0_30px_60px_rgba(15,23,42,0.12)] hover:shadow-xl'
                    } ${isOpen ? 'ring-1 ring-blue-500/30' : ''}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-start justify-between text-left gap-4"
                  >
                    <span className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 mt-1 ${isOpen ? 'rotate-180 text-blue-500' : 'text-slate-400'}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className={`mt-4 text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
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

      {/* Portfolio CTA */}
      <section className="py-24 px-6 mb-20 text-center">
        <div className="max-w-7xl mx-auto relative rounded-[5rem] overflow-hidden bg-blue-600 p-12 md:p-24 text-white shadow-3xl">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,#2563eb,transparent_50%)]" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400/20 blur-[100px] rounded-full" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight">Your project could be next.</h2>
            <p className="text-2xl text-blue-100 mb-12 font-medium">From concept to deployment, we build digital products that move the needle. Ready to start?</p>
            <div className="flex flex-wrap justify-center gap-8">
              <button className="px-12 py-6 bg-white text-blue-600 rounded-3xl font-black text-xl hover:scale-110 transition-transform shadow-2xl flex items-center gap-3">
                Hire the Squad <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-12 py-6 bg-blue-700 text-white rounded-3xl font-black text-xl hover:bg-blue-800 transition-colors border border-white/20">
                View Odoo Successes
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

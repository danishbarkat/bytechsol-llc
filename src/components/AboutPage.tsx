import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Zap,
  Shield,
  Users,
  Target,
  TrendingUp,
  Cpu,
  CheckCircle,
  ArrowUpRight,
  Quote,
  ChevronDown,
  Rocket,
  Code,
  Palette,
  Handshake,
  Lock,
  Star,
  Heart,
  Layers,
  BarChart3
} from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { ContactTeam } from './ContactTeam';

const BRAND_COLOR = '#4e91ff';

export function AboutPage() {
  const { theme } = useTheme();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen relative ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'}`}>
      {/* Background Animated Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: Math.random() * 0.5,
              scale: Math.random() * 0.5 + 0.5,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%"
            }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{ filter: 'blur(1px)' }}
          />
        ))}
      </div>
      {/* Hero Section */}
      <section className={`py-32 px-4 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl ${isDark ? 'bg-blue-600' : 'bg-blue-400'}`}></div>
          <div className={`absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl ${isDark ? 'bg-indigo-600' : 'bg-indigo-400'}`}></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-7xl mb-8 font-bold leading-tight ${isDark ? 'text-white' : 'text-slate-900'}`}
          >
            We Don't Just Build Software<br />
            <span style={{ color: BRAND_COLOR }}>We Build What Matters.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
          >
            We make digital, heartfelt, and purposeful solutions at Bytechsol. Whether in small companies or large enterprises, we make businesses successful through intelligent, expandable, and well-designed technology. Driven by creativity, backed by strategy. We're here to make your next big idea happen.
          </motion.p>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className={`py-20 px-4 border-y ${isDark ? 'bg-slate-900 border-white/5' : 'bg-white border-slate-100'} overflow-hidden`}>
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`text-center mb-12 uppercase tracking-widest text-sm font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}
          >
            Trusted by Industry Leaders
          </motion.p>

          <div className="relative">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-16 whitespace-nowrap"
            >
              {[
                'Apple', 'Netflix', 'Spotify', 'Adobe', 'Oracle', 'Salesforce', 'Microsoft', 'Google',
                'Amazon', 'Meta', 'Tesla', 'IBM', 'SAP', 'Cisco', 'Intel', 'Samsung',
                'Apple', 'Netflix', 'Spotify', 'Adobe', 'Oracle', 'Salesforce', 'Microsoft', 'Google',
                'Amazon', 'Meta', 'Tesla', 'IBM', 'SAP', 'Cisco', 'Intel', 'Samsung'
              ].map((company, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 transition-colors text-2xl font-bold ${isDark ? 'text-white/40 hover:text-white' : 'text-slate-300 hover:text-slate-900'}`}
                >
                  {company}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className={`py-32 px-4 ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className={`text-4xl md:text-6xl mb-8 font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our Mission: Building Digital Solutions<br />
              <span style={{ color: BRAND_COLOR }}>That Drive Growth</span>
            </h2>
            <p className={`text-lg md:text-xl max-w-4xl mx-auto leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              We are on a mission at Bytechsol to enable businesses by creating enhanced digital experiences on demand. All our pixels, all our lines of code, and all our strategies are designed to solve business problems in the real world and to drive growth.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                number: '01',
                title: 'Designing Impactful Digital Experiences',
                desc: "We craft user-focused websites, UI/UX designs, and CMS platforms that are not just beautiful — they're built to convert and engage.",
              },
              {
                number: '02',
                title: 'Engineering Scalable Custom Solutions',
                desc: 'Whether it is a powerful piece of software or a complex web application, we create custom web products that grow with your business, effectively and safely.',
              },
              {
                number: '03',
                title: 'Driving Brands with Strategy + Tech',
                desc: 'Our team blends brand strategy with digital tools — SEO, SMM, and eCommerce platforms like Shopify — to make your brand stand out and sell more.',
              },
              {
                number: '04',
                title: 'Leveraging AI, ERP, and Odoo to Automate Success',
                desc: 'We incorporate customization of AI/ML, ERP implementation, and Odoo systems to ensure entry-point smooth procedures, approved decision-making and productivity.',
              },
              {
                number: '05',
                title: 'Your Long-Term Tech Partner',
                desc: "We're not just vendors. We're strategic partners committed to delivering full-cycle digital transformation — from idea to execution and beyond.",
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative rounded-3xl p-8 border transition-all duration-500 overflow-hidden ${isDark
                  ? 'bg-white/[0.02] border-white/5 hover:border-blue-500/30'
                  : 'bg-white border-slate-100 hover:border-blue-500/30 hover:shadow-2xl'
                  }`}
              >
                <div className="flex items-center gap-8 md:gap-12 relative z-10">
                  <div className={`text-5xl md:text-8xl font-black transition-transform duration-700 group-hover:scale-110 flex-shrink-0`} style={{ color: BRAND_COLOR }}>
                    {item.number}
                  </div>

                  <div className="flex-1 text-left">
                    <h3 className={`text-xl md:text-3xl mb-2 font-black transition-colors ${isDark ? 'text-white' : 'text-slate-900'} group-hover:text-blue-500`}>
                      {item.title}
                    </h3>
                    <p className={`text-base md:text-xl leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="absolute top-4 right-4 md:top-8 md:right-8">
                    <ArrowUpRight className={`w-8 h-8 transition-all ${isDark ? 'text-white/20' : 'text-slate-200'} group-hover:text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1`} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision/Journey Section - FORCED Background #1f2937 */}
      <section className="py-32 px-4 relative overflow-hidden text-white" style={{ backgroundColor: '#1f2937' }}>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.1, 0.4, 0.1]
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl mb-10 font-black leading-tight">
                From one vision to becoming a <span style={{ color: BRAND_COLOR }}>global tech partner.</span>
              </h2>
              <div className="space-y-10 text-slate-300 text-xl leading-relaxed font-light">
                <p>
                  Bytechsol did not turn out to be the best software agency in one day. Where it all began is a small team with huge ambitions and a dedication to creating smarter digital solutions and not simply prettier websites.
                </p>
                <p>
                  That side hustle eventually led to a complete digital powerhouse. Whether it was working with startups to create their initial MVPs or building enterprise systems at scale, we have created custom web solutions, AI products, ERP solutions, and even executed SEO to move the needle.
                </p>
                <p className="text-white text-2xl font-medium">
                  Behind every screen is someone betting it all on an idea. <span style={{ color: BRAND_COLOR }}>We scale it together.</span>
                </p>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* FORCED IMAGE ROUNDING */}
              <div
                className="overflow-hidden shadow-2xl border-4 border-white/10"
                style={{ borderRadius: '60px' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1739184523594-564cb9b61126?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMHZpc2lvbnxlbnwxfHx8fDE3Njc4OTEyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Futuristic Technology Vision"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600/30 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`py-32 px-4 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="inline-block mb-4 px-6 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 text-xs font-bold uppercase tracking-widest">
            Why Choose Us
          </motion.div>
          <h2 className={`text-5xl md:text-7xl mb-6 font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Your Tech Dream Team<br />
            <span className="text-blue-500">in Disguise</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Not your average agency. We embed into your mission, move at your speed, and solve problems like it's our product on the line.
          </p>

          {/* Grid with robust gap and padding */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left mb-24">
            {[
              { icon: Rocket, title: 'Built for Speed & Scale', desc: 'Rapid development cycles with architecture designed to grow with your business', id: '01' },
              { icon: Code, title: 'Deep Tech Expertise, Zero Fluff', desc: 'Real engineers solving real problems with cutting-edge technology', id: '02' },
              { icon: Users, title: 'Direct Access to Specialists', desc: 'Work directly with senior developers and designers, not account managers', id: '03' },
              { icon: Palette, title: 'Smart Design, Real Results', desc: 'User-focused interfaces that drive conversions and engagement', id: '04' },
              { icon: Handshake, title: 'Flexible Partnership Models', desc: 'From fixed-price projects to dedicated teams, we adapt to your needs', id: '05' },
              { icon: Lock, title: 'Security & Reliability First', desc: 'Enterprise-grade security standards and 99.9% uptime guarantee', id: '06' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative p-12 text-white shadow-3xl transition-all duration-500 hover:translate-y-[-10px] overflow-hidden"
                style={{
                  backgroundColor: BRAND_COLOR,
                  borderRadius: '60px' // FORCING rounding with inline style
                }}
              >
                <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform duration-500">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-sm font-black">
                    {item.id}
                  </div>
                </div>
                <h3 className="text-3xl mb-6 font-black relative z-10">
                  {item.title}
                </h3>
                <p className="text-xl leading-relaxed text-white/90 font-medium relative z-10">
                  {item.desc}
                </p>
                {item.id === '05' && (
                  <div className="mt-10 flex items-center gap-2 text-sm font-black hover:underline cursor-pointer group/link relative z-10">
                    Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
                )}
                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Visual gap removed as button is deleted */}
          <div className="mb-20" />
        </div>
      </section>

      {/* Testimonials & Principles */}
      <section className={`py-32 px-4 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-blue-500 font-bold text-sm mb-16">See why our clients love us</p>

          <div className="grid lg:grid-cols-3 gap-8 mb-40">
            {[
              { quote: "We migrated to the cloud and improved our deployment pipeline with your DevOps services. Downtime is now close to zero, and we can deploy updates much faster and more safely.", name: "Lina Romero", title: "CTO, NexChain (Germany)", initials: "LR", color: "bg-indigo-500" },
              { quote: "The UI/UX work on our dashboard was flawless. Our users are finally navigating things with ease. The clean layout and user flow reflect deep thinking and solid design principles.", name: "Thomas Reed", title: "Director, OmniParts (Canada)", initials: "TR", color: "bg-emerald-500" },
              { quote: "The custom software your team developed has streamlined our internal operations like never before. It was built exactly to our specs, with performance and scalability in mind. Truly a game-changer for our workflow.", name: "Bilal Asif", title: "Senior Developer, RizaSoft (Pakistan)", initials: "BA", color: "bg-orange-500" }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                className={`p-10 rounded-3xl relative flex flex-col justify-between ${isDark ? 'bg-slate-950 border border-white/5' : 'bg-white shadow-xl'}`}
              >
                <Quote className="w-16 h-16 absolute top-6 right-6 opacity-[0.05] text-blue-500" />
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className={`text-lg mb-10 leading-relaxed font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white font-bold ${t.color}`}>{t.initials}</div>
                  <div>
                    <div className="font-bold">{t.name}</div>
                    <div className="text-xs opacity-50 font-bold uppercase tracking-wider">{t.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mb-24 mt-64 pt-32 border-t border-slate-200/50">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              The Principles <span style={{ color: BRAND_COLOR }}>Powering Our Projects</span>
            </h2>
            <p className="text-slate-500 font-medium text-xl">From first brainstorm to final build, these values guide every decision.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              { id: '01', title: 'Empathy at the Core', desc: 'We listen first before creating plans or prototyping; we listen to your story and your goals, and to users. All of our custom software solutions start with empathetic knowledge of what an actual human needs; they are not based on assumptions.', icon: Heart },
              { id: '02', title: 'Simplicity that Speaks', desc: 'Complicated does not imply superior. We are user-centered design thinkers who believe in design that is intuitive, accessible, and elegant because the best digital experiences have an effortless feel to them.', icon: Layers },
              { id: '03', title: 'Speed with Purpose', desc: 'We act swiftly—not rashly. Be it lean MVPs or web development at scale, we work with purpose, pivot when necessary, and stay focused on driving your business success.', icon: Zap },
              { id: '04', title: 'Designed to Deliver Results', desc: "We don't make design awards; we make you win customers. Our focus is impact: conversions, retention, performance, and ROI.", icon: BarChart3 }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`group relative p-12 rounded-[2rem] border-l-[6px] transition-all duration-500 ${isDark
                  ? 'bg-slate-900/40 border-slate-800 backdrop-blur-sm'
                  : 'bg-white border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.03)]'
                  }`}
                style={{ borderLeftColor: BRAND_COLOR }}
              >
                <div className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                    style={{ backgroundColor: `${BRAND_COLOR}15`, color: BRAND_COLOR }}
                  >
                    <item.icon className="w-8 h-8" />
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm font-black tracking-widest opacity-30">0{idx + 1}</span>
                    <h3 className={`text-2xl font-black ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                  </div>

                  <p className={`text-lg leading-relaxed font-medium ${isDark ? 'text-white/60' : 'text-slate-500'}`}>
                    {item.desc}
                  </p>
                </div>

                {/* Interactive Background Elements */}
                <div
                  className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, ${BRAND_COLOR}08 0%, transparent 100%)`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactTeam />

      {/* FAQ Section - Redesigned to match Odoo premium style */}
      <section className={`py-32 px-6 border-t ${isDark ? 'bg-slate-950 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
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
            {[
              {
                q: 'What makes Bytechsol different from other software development companies?',
                a: 'We combine deep technical expertise with business strategy. Our team embeds into your mission and solves problems like it\'s our own product on the line.'
              },
              {
                q: 'What industries does Bytechsol specialize in?',
                a: 'We work across 15+ industries including eCommerce, SaaS, healthcare, fintech, manufacturing, and professional services. Our expertise adapts to your domain.'
              },
              {
                q: 'What kind of digital transformation services do you provide?',
                a: 'We offer end-to-end transformation: custom web development, AI/ML integration, ERP implementation (Odoo), cloud migration, DevOps, and digital marketing.'
              },
              {
                q: 'Who will be working on my project at Bytechsol?',
                a: 'You get direct access to senior developers, designers, and strategists. No account managers in the middle - just specialists focused on delivering results.'
              },
              {
                q: 'What\'s your process for custom software development?',
                a: 'We start with discovery, move to rapid prototyping, then iterate in 2-week sprints. You\'ll see progress continuously and can adjust priorities as we build.'
              },
              {
                q: 'How do you ensure your web and app designs are user-friendly?',
                a: 'We conduct user research, create prototypes, and run usability tests. Every design decision is backed by data and user feedback, not assumptions.'
              },
              {
                q: 'Do you offer long-term support after project delivery?',
                a: 'Absolutely. We provide ongoing maintenance, feature updates, and optimization. Many clients keep us on retainer as their dedicated tech partner.'
              },
              {
                q: 'How do you incorporate AI or machine learning into your solutions?',
                a: 'We integrate AI for automation, predictive analytics, and intelligent workflows. From chatbots to recommendation engines, we make AI practical and ROI-driven.'
              },
              {
                q: 'Can I start with a small project and scale later?',
                a: 'Yes! Many of our enterprise clients started with MVPs. We build with scale in mind from day one, so growing is smooth when you\'re ready.'
              }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-3xl transition-all duration-300 p-6 ${isDark
                  ? 'bg-white/[0.03] border border-white/10 hover:border-white/20'
                  : 'bg-white border border-slate-200 shadow-[0_30px_60px_rgba(15,23,42,0.12)] hover:shadow-xl'
                  } ${openFaq === idx ? 'ring-1 ring-blue-500/30' : ''}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-start justify-between text-left gap-4"
                >
                  <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 mt-1 ${openFaq === idx ? 'rotate-180 text-blue-500' : 'text-slate-400'
                      }`}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section - Absolute Solid Blue & Power Typography */}
      <section className="relative bg-[#0a52ff] text-white text-center">
        <div className="max-w-7xl mx-auto px-6 py-72 md:py-80 flex flex-col items-center">

          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-[120px] font-black mb-12 leading-[0.9] tracking-tighter"
          >
            Let's Build Your<br />Digital Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl text-blue-50/90 mb-20 max-w-4xl mx-auto font-black leading-relaxed"
          >
            Ready to accelerate your business with intelligent digital solutions that drive results? At Bytechsol, we turn complex ideas into user-focused platforms built to scale and succeed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8 mb-24 w-full"
          >
            <button className="min-w-[320px] px-12 py-7 rounded-[2rem] bg-white text-[#0a52ff] font-black text-2xl flex items-center justify-center gap-4 shadow-[0_40px_80px_rgba(0,0,0,0.3)] transition-all hover:scale-110 active:scale-95 group">
              Start Your Transformation <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-2" />
            </button>
            <button className="min-w-[320px] px-12 py-7 rounded-[2rem] bg-white/10 backdrop-blur-3xl border-4 border-white/20 text-white font-black text-2xl transition-all hover:bg-white/20 active:scale-95">
              Get in Touch
            </button>
          </motion.div>

          {/* Awards Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col lg:flex-row items-center justify-center gap-12"
          >
            <span className="text-lg font-black uppercase tracking-[0.4em] opacity-80">Awards & Recognition:</span>
            <div className="flex flex-wrap justify-center gap-6">
              {['Clutch', 'Upwork', 'Top Rated'].map(a => (
                <div key={a} className="px-10 py-4 rounded-2xl bg-white/10 border-2 border-white/10 text-sm font-black uppercase tracking-[0.2em]">
                  {a}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Header - Background #1f2937, Text to White */}
      <section className={`py-32 px-4 text-white`} id="contact" style={{ backgroundColor: '#1f2937' }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-[0.3em] uppercase mb-4">
            TALK <span style={{ color: BRAND_COLOR }}>TO US</span>
          </h2>
          <div className="w-16 h-1.5 mx-auto rounded-full mb-16" style={{ backgroundColor: BRAND_COLOR }} />

          <form className="space-y-8" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Name</label>
                <input type="text" placeholder="Enter full name" className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium placeholder:text-slate-600" />
              </div>
              <div className="text-left space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Email</label>
                <input type="email" placeholder="Enter email" className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium placeholder:text-slate-600" />
              </div>
            </div>
            <div className="text-left space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Subject</label>
              <select className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-bold appearance-none cursor-pointer">
                <option className="bg-slate-900 border-none">Select One</option>
                <option className="bg-slate-900 border-none">Web Development</option>
                <option className="bg-slate-900 border-none">AI Solutions</option>
                <option className="bg-slate-900 border-none">App Development</option>
              </select>
            </div>
            <div className="text-left space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-2">Message</label>
              <textarea placeholder="Tell us about your project..." rows={6} className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 font-medium resize-none placeholder:text-slate-600" />
            </div>
            <button className="w-full py-5 rounded-xl text-white font-bold text-xl shadow-2xl transition-all hover:brightness-110 active:scale-[0.98]" style={{ backgroundColor: BRAND_COLOR }}>
              Submit Enquiry
            </button>
            <p className="mt-8 text-slate-500 text-sm">
              Prefer email? <a href="mailto:info@bytechsol.com" className="hover:underline" style={{ color: BRAND_COLOR }}>info@bytechsol.com</a>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

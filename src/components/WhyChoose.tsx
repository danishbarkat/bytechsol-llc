import { motion } from 'motion/react';
import { Clock, Code2, Rocket, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: "You won't need to chase us for updates.",
    description: "At Bytechsol, clear timelines and open communication are our foundation. We treat your project like it's our own — staying flexible when you need to pivot and focused when it's time to ship. Fast, reliable, and stress-free delivery — just how it should be.",
    label: 'We Deliver What We Promise',
    features: ['Daily updates', 'Clear milestones', 'On-time delivery', 'Transparent process'],
    color: 'bg-purple-600',
  },
  {
    icon: Code2,
    title: "Tech is easy — understanding your business is where the magic happens.",
    description: "We dive deep into your goals to craft solutions that make sense for you, not just the market. From strategy to design to launch, we're with you at every step — like a tech partner who listens (and delivers).",
    label: 'We Think Beyond Just Code',
    features: ['Business analysis', 'Strategic planning', 'User research', 'Market insights'],
    color: 'bg-blue-600',
  },
  {
    icon: Rocket,
    title: "No shortcuts. No quick fixes. Just solid, scalable solutions.",
    description: "We don't believe in one-size-fits-all. Whatever your needs: AI, web applications, or custom software — we develop tools that can scale with you. Smart, scalable, and built to last — so you don't have to rebuild six months later.",
    label: 'We Build for the Long Run',
    features: ['Scalable architecture', 'Clean code', 'Future-proof', 'Long-term support'],
    color: 'bg-indigo-600',
  },
];

export function WhyChoose() {
  return (
    <section className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-purple-600 text-white mb-6 shadow-lg shadow-purple-600/30">
            Why Choose BytechSol
          </span>
          <h2 className="mb-6 text-white">
            Built by Humans. Backed by Tech. Driven by Purpose.
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed">
            We&apos;re not just here to code — we&apos;re here to understand your vision, solve real problems, 
            and grow with you. At Bytechsol, your goals become our mission.
          </p>
        </motion.div>

        <div className="space-y-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.label}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-10 rounded-3xl bg-slate-800/50 border border-slate-700 shadow-2xl hover:shadow-purple-600/20 hover:bg-slate-800 transition-all duration-700 overflow-hidden hover:-translate-y-1">
                <motion.div
                  className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8 }}
                    className={`flex-shrink-0 w-20 h-20 rounded-3xl ${reason.color} flex items-center justify-center shadow-2xl`}
                  >
                    <reason.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-700 text-slate-300 mb-5 shadow-lg">
                      <CheckCircle2 className="w-4 h-4 text-green-400" />
                      <span>{reason.label}</span>
                    </div>
                    <h3 className="mb-4 text-white leading-tight">{reason.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed mb-6">{reason.description}</p>
                    
                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-3">
                      {reason.features.map((feature, i) => (
                        <motion.span
                          key={feature}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="px-4 py-2 rounded-xl bg-slate-700 border border-slate-600 text-slate-300 text-sm shadow-md hover:shadow-lg hover:scale-105 hover:bg-slate-600 transition-all duration-300"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

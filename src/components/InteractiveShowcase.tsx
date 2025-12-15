import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Zap, Shield, Rocket } from 'lucide-react';

const features = [
  {
    id: 'scalable',
    icon: Layers,
    title: 'Scalable Architecture',
    description: 'Built to grow with your business, our solutions handle increasing complexity effortlessly.',
    color: 'bg-purple-600',
  },
  {
    id: 'fast',
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance ensures your users get the best experience possible.',
    color: 'bg-blue-600',
  },
  {
    id: 'secure',
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Industry-leading security practices protect your data and your users.',
    color: 'bg-cyan-600',
  },
  {
    id: 'innovative',
    icon: Rocket,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technologies to keep you ahead of the competition.',
    color: 'bg-indigo-600',
  },
];

export function InteractiveShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  const active = features.find(f => f.id === activeFeature) || features[0];

  return (
    <section className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-white">
            Why Choose Our Technology Stack
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cutting-edge technology meets proven expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive buttons */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.button
                key={feature.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full p-6 rounded-2xl text-left transition-all duration-500 ${
                  activeFeature === feature.id
                    ? `${feature.color} text-white shadow-2xl scale-105`
                    : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600 shadow-lg hover:shadow-xl text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      activeFeature === feature.id
                        ? 'bg-white/20'
                        : 'bg-slate-700'
                    }`}
                  >
                    <feature.icon
                      className={`w-6 h-6 ${
                        activeFeature === feature.id ? 'text-white' : 'text-slate-300'
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={activeFeature === feature.id ? 'text-white' : 'text-white'}>
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Animated content display */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative p-12 rounded-3xl bg-slate-800 border border-slate-700 shadow-2xl overflow-hidden"
              >
                {/* Animated circles */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-20 -right-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: 'spring' }}
                    className={`inline-block p-6 rounded-3xl ${active.color} shadow-2xl mb-6`}
                  >
                    <active.icon className="w-12 h-12 text-white" />
                  </motion.div>

                  <h3 className="mb-4 text-white">{active.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed">
                    {active.description}
                  </p>

                  {/* Stats or metrics */}
                  <div className="mt-8 grid grid-cols-3 gap-4">
                    {[
                      { label: 'Performance', value: '99.9%' },
                      { label: 'Uptime', value: '100%' },
                      { label: 'Satisfied', value: '500+' },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-700"
                      >
                        <div className="text-2xl text-purple-400 mb-1">
                          {stat.value}
                        </div>
                        <div className="text-slate-500 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

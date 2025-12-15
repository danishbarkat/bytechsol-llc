import { motion } from 'motion/react';
import { Target, Users, Award, ArrowUpRight } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Focused on What Matters',
    description: 'We are not a company that just creates websites, but creates solutions to help your business flourish and attract customers to achieve real results.',
    stats: '250+ Projects',
    color: 'bg-purple-600',
  },
  {
    icon: Users,
    title: 'A Team by Your Side',
    description: 'Our engineers, designers, and strategists collaborate closely with you. We take care and commitment to everything and do it in-house (we never outsource anything).',
    stats: '50+ Experts',
    color: 'bg-blue-600',
  },
  {
    icon: Award,
    title: 'Quality You Can Rely On',
    description: 'We put our heart into every project, making sure your website is secure, fast, and built to support your success long-term.',
    stats: '99.9% Uptime',
    color: 'bg-green-600',
  },
];

export function Growth() {
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
          <div className="inline-block relative mb-8">
            <h2 className="relative text-white">
              Your Growth, Our Priority
            </h2>
          </div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We&apos;re committed to your success at every stage of your journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-slate-800/50 border border-slate-700 shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-500 overflow-hidden">
                <div className="relative z-10">
                  {/* Icon with 3D effect */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 mx-auto rounded-3xl ${feature.color} flex items-center justify-center shadow-2xl`}
                    >
                      <feature.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    {/* Floating stat badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute -top-2 -right-2 px-3 py-1 rounded-full bg-orange-600 text-white text-sm shadow-lg"
                    >
                      {feature.stats}
                    </motion.div>
                  </div>

                  <h3 className="mb-4 text-white text-center">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-center leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <div className="flex items-center justify-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span>Learn more</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-600/10 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

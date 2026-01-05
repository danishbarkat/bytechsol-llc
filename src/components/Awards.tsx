import { motion } from 'motion/react';
import { Award, Star, Trophy, Target } from 'lucide-react';

const awards = [
  {
    icon: Star,
    platform: 'Behance',
    achievement: '2x Interaction Design awards',
    color: 'bg-blue-600',
  },
  {
    icon: Trophy,
    platform: 'Trust Pilot',
    achievement: 'Trusted by global clients, BytechSol delivers award-winning digital solutions.',
    color: 'bg-purple-600',
  },
  {
    icon: Award,
    platform: 'Clutch',
    achievement: 'Top B2B Service Provider and UX Design Agency',
    color: 'bg-blue-600',
  },
  {
    icon: Target,
    platform: 'Upwork',
    achievement: 'Top Rated Design Agency',
    color: 'bg-orange-600',
  },
];

export function Awards() {
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
          <h2 className="mb-4 text-white">
            Our Awards & Achievements
          </h2>
          <p className="text-slate-400 text-lg">
            Recognized globally for excellence in digital innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.platform}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
              style={{ perspective: 1000 }}
            >
              <div className="h-full p-8 rounded-3xl bg-slate-800/50 border border-slate-700 shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-500 overflow-hidden relative">
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 rounded-2xl ${award.color} flex items-center justify-center mb-6 shadow-lg mx-auto`}
                  >
                    <award.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="mb-3 text-white text-center">{award.platform}</h3>
                  <p className="text-slate-400 text-center leading-relaxed">{award.achievement}</p>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

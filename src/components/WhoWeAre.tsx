import { motion } from 'motion/react';
import { Target, Users, Zap, Award, Globe, Code } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const highlights = [
  {
    icon: Target,
    value: '250+',
    label: 'Projects Completed',
    color: 'bg-purple-600',
  },
  {
    icon: Users,
    value: '50+',
    label: 'Team Members',
    color: 'bg-blue-600',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Countries',
    color: 'bg-cyan-600',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Success Rate',
    color: 'bg-green-600',
  },
];

const expertise = [
  { icon: Code, text: 'Full-Stack Development', color: 'bg-purple-600' },
  { icon: Zap, text: 'AI/ML Integration', color: 'bg-blue-600' },
  { icon: Globe, text: 'Cloud Architecture', color: 'bg-cyan-600' },
  { icon: Users, text: 'Agile Methodology', color: 'bg-indigo-600' },
];

export function WhoWeAre() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="px-6 py-2 rounded-full bg-purple-600 text-white shadow-lg shadow-purple-600/30">
              WHO WE ARE
            </span>
          </motion.div>
          <h2 className="mb-6 text-white">
            Built for Modern Businesses
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed">
            We&apos;re a team of passionate innovators, designers, and developers dedicated to transforming 
            ideas into powerful digital solutions that drive real business growth.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-700">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVhbXxlbnwxfHx8fDE3NjUwMzg3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="BytechSol Team"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-slate-950/50" />
              
              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-slate-800 border border-slate-700 shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-3xl text-purple-400 mb-1">
                      15+ Years
                    </div>
                    <div className="text-slate-400">Combined Experience</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-purple-600">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-white">
              Innovation Meets Expertise
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Bytechsol is a software agency built for modern businesses. We specialize in web development, 
              mobile apps, and custom software, designed to help companies thrive in a fast-paced digital world. 
              At Bytechsol, we blend innovation with simplicity to deliver reliable, performance-driven products.
            </p>

            {/* Expertise tags */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 shadow-lg hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                >
                  <div className={`p-2 rounded-lg ${item.color}`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-300">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-purple-600 text-white shadow-xl shadow-purple-600/30 hover:bg-purple-500 transition-all duration-300"
            >
              <span>Explore Our Services</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="relative group"
            >
              <div className="p-8 rounded-3xl bg-slate-800/50 border border-slate-700 shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all duration-500 text-center overflow-hidden">
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${highlight.color} flex items-center justify-center shadow-lg`}
                  >
                    <highlight.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <div className="text-4xl text-white mb-2">
                    {highlight.value}
                  </div>
                  <div className="text-slate-400">{highlight.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

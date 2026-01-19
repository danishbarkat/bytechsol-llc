import { motion } from 'motion/react';
import { Quote, Star, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { useTheme } from './ThemeContext';

const testimonials = [
  {
    id: 1,
    quote: "The custom software your team developed has streamlined our internal operations like never before. It was built exactly to our specs, with performance and scalability in mind. Truly a game-changer for our workflow.",
    author: "Bilal Asif",
    role: "Senior Developer, RizaSoft (Pakistan)",
    image: "https://bytechsol.com/assets/Bilal%20Asif.jpg",
    gradient: "from-purple-600 to-blue-600",
  },
  {
    id: 2,
    quote: "Bytechsol felt like an in-house team. They kept timelines transparent, iterated with our founders, and shipped a beautiful product that immediately impressed customers.",
    author: "Karla Smith",
    role: "Product Manager, Flowmatic (USA)",
    image: "https://bytechsol.com/assets/karla.jpg",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: 3,
    quote: "We needed a partner that understood both creative direction and engineering. Bytechsol shipped a scalable platform fast without compromising on quality.",
    author: "Jennifer Blake",
    role: "Founder, Blakestone Creative (USA)",
    image: "https://bytechsol.com/assets/Jennifer.jpg",
    gradient: "from-cyan-600 to-emerald-600",
  },
];

const stats = [
  { 
    icon: Star, 
    value: "★★★★★", 
    label: "Clutch rating (11 reviews)",
    gradient: "from-purple-600 to-blue-600",
  },
  { 
    icon: TrendingUp, 
    value: "250+", 
    label: "Projects shipped",
    gradient: "from-blue-600 to-cyan-600",
  },
  { 
    icon: Users, 
    value: "50+", 
    label: "Engineers & designers",
    gradient: "from-cyan-600 to-emerald-600",
  },
  { 
    icon: Award, 
    value: "24/7", 
    label: "Support coverage",
    gradient: "from-emerald-600 to-teal-600",
  },
];

export function Testimonials() {
  const { theme } = useTheme();

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 text-center max-w-7xl mx-auto"
        >
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className={`text-sm tracking-wider uppercase ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
              Client Results
            </span>
          </motion.div>

          <h2 className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            Trusted for{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ERP, AI &amp; Digital Growth
            </span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Gradient Border Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
              
              <div className={`relative h-full p-8 rounded-2xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800 group-hover:bg-slate-900'
                  : 'bg-white/90 backdrop-blur-xl border-slate-200 group-hover:bg-white'
              }`}>
                {/* Quote Icon with Gradient */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonial.gradient} opacity-20 blur-xl rounded-full`} />
                  <Quote className={`relative w-10 h-10 bg-gradient-to-r ${testimonial.gradient} bg-clip-text text-transparent`} />
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote Text */}
                <p className={`leading-relaxed mb-8 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  "{testimonial.quote}"
                </p>

                {/* Author Section */}
                <div className="flex items-center gap-4 mt-auto">
                  {/* Avatar with Gradient Ring */}
                  <div className="relative">
                    <div className={`absolute -inset-1 bg-gradient-to-r ${testimonial.gradient} rounded-full opacity-75 blur-sm`} />
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {testimonial.author}
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background Card */}
          <div className={`rounded-3xl border overflow-hidden ${
            theme === 'dark'
              ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
              : 'bg-white/50 backdrop-blur-xl border-slate-200'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group"
                >
                  {/* Icon with Gradient Background */}
                  <div className="relative inline-flex mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-20 blur-xl rounded-full`} />
                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Value */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                    className={`text-5xl mb-3 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </motion.div>

                  {/* Label */}
                  <div className={`text-sm uppercase tracking-wider ${
                    theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

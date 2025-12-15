import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Zap,
  Globe,
  TrendingUp,
  Shield,
  Sparkles,
  ArrowRight,
  Briefcase,
  Code,
  Lightbulb
} from 'lucide-react';

export function AboutPage() {
  const { theme } = useTheme();

  const stats = [
    { label: 'Years of Excellence', value: '8+', icon: Award },
    { label: 'Projects Delivered', value: '150+', icon: Briefcase },
    { label: 'Happy Clients', value: '100+', icon: Users },
    { label: 'Team Members', value: '25+', icon: Users },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'We put our clients at the heart of everything we do, ensuring their success is our success.',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Constantly pushing boundaries with cutting-edge technologies and creative solutions.',
      gradient: 'from-purple-600 to-violet-600',
    },
    {
      icon: Shield,
      title: 'Quality Driven',
      description: 'Uncompromising commitment to delivering excellence in every project we undertake.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: Zap,
      title: 'Agile & Fast',
      description: 'Rapid development cycles with agile methodologies to bring your vision to life quickly.',
      gradient: 'from-emerald-600 to-teal-600',
    },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      name: 'David Kumar',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      gradient: 'from-emerald-600 to-teal-600',
    },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className={`text-sm tracking-wider uppercase ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
              About BytechSol
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Building the future of{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              digital experiences
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
          >
            Through AI and human creativity, we craft transformative digital solutions that empower businesses to thrive in the modern era.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                      : 'bg-white/50 backdrop-blur-xl border-slate-200'
                  }`}
                >
                  <StatIcon className="w-10 h-10 mb-4 text-purple-600" />
                  <div className="text-4xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-10 rounded-3xl border ${
                theme === 'dark'
                  ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                  : 'bg-white/50 backdrop-blur-xl border-slate-200'
              }`}
            >
              <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-20 blur-xl rounded-full" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                  <Target className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Our Mission
              </h2>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                To empower businesses with transformative digital solutions that combine cutting-edge technology with human-centered design, driving innovation and growth in the digital age.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`p-10 rounded-3xl border ${
                theme === 'dark'
                  ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                  : 'bg-white/50 backdrop-blur-xl border-slate-200'
              }`}
            >
              <div className="relative inline-flex mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-20 blur-xl rounded-full" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white" />
                </div>
              </div>
              <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Our Vision
              </h2>
              <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                To be the world's most trusted partner in digital transformation, recognized for our innovation, excellence, and commitment to creating meaningful impact for our clients and their customers.
              </p>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Our Core Values
              </h2>
              <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const ValueIcon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${value.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
                    />
                    <div
                      className={`relative h-full p-8 rounded-2xl border ${
                        theme === 'dark'
                          ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                          : 'bg-white/90 backdrop-blur-xl border-slate-200'
                      }`}
                    >
                      <div className="relative inline-flex mb-4">
                        <div className={`absolute inset-0 bg-gradient-to-r ${value.gradient} opacity-20 blur-xl rounded-xl`} />
                        <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center`}>
                          <ValueIcon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                        {value.title}
                      </h3>
                      <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Meet Our{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Leadership Team
              </span>
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              The brilliant minds driving BytechSol forward
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
                />
                <div
                  className={`relative rounded-2xl border overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                      : 'bg-white/90 backdrop-blur-xl border-slate-200'
                  }`}
                >
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-20`} />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {member.name}
                    </h3>
                    <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`relative overflow-hidden rounded-3xl p-12 text-center ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 border border-slate-800'
                : 'bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-cyan-100/50 border border-slate-200'
            }`}
          >
            <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Join Us on This Journey
            </h2>
            <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              Let's create something extraordinary together
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:contact@bytechsol.com"
                className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#/services"
                className={`inline-flex items-center gap-2 px-10 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  theme === 'dark'
                    ? 'border-slate-700 text-white hover:bg-slate-800'
                    : 'border-slate-300 text-slate-900 hover:bg-slate-100'
                }`}
              >
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  Zap,
  Heart,
  TrendingUp,
  Coffee,
  Sparkles,
  ArrowRight,
  Code,
  Palette,
  BarChart
} from 'lucide-react';

export function CareersPage() {
  const { theme } = useTheme();

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Hybrid',
      type: 'Full-time',
      salary: '$80K - $120K',
      icon: Code,
      gradient: 'from-purple-600 to-violet-600',
      requirements: ['5+ years experience', 'React & Node.js', 'TypeScript', 'Cloud platforms'],
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      salary: '$70K - $100K',
      icon: Palette,
      gradient: 'from-pink-600 to-rose-600',
      requirements: ['3+ years experience', 'Figma expert', 'Portfolio required', 'User research'],
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'On-site',
      type: 'Full-time',
      salary: '$100K - $150K',
      icon: Zap,
      gradient: 'from-blue-600 to-cyan-600',
      requirements: ['ML frameworks', 'Python expert', 'Deep learning', 'Research background'],
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Hybrid',
      type: 'Full-time',
      salary: '$90K - $130K',
      icon: BarChart,
      gradient: 'from-emerald-600 to-teal-600',
      requirements: ['5+ years PM experience', 'Agile methodology', 'Technical background', 'Leadership'],
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      salary: '$85K - $125K',
      icon: Code,
      gradient: 'from-orange-600 to-red-600',
      requirements: ['AWS/Azure expert', 'CI/CD pipelines', 'Kubernetes', 'Infrastructure as Code'],
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Hybrid',
      type: 'Full-time',
      salary: '$75K - $110K',
      icon: TrendingUp,
      gradient: 'from-violet-600 to-purple-600',
      requirements: ['Digital marketing', 'SEO/SEM', 'Content strategy', 'Analytics'],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.',
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Work-life balance with flexible hours and remote work options.',
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Continuous learning, training budgets, and clear career progression paths.',
      gradient: 'from-purple-600 to-violet-600',
    },
    {
      icon: Coffee,
      title: 'Great Perks',
      description: 'Free snacks, team events, latest tech equipment, and more.',
      gradient: 'from-emerald-600 to-teal-600',
    },
  ];

  const values = [
    { label: 'Innovation First', value: '💡' },
    { label: 'Team Collaboration', value: '🤝' },
    { label: 'Work-Life Balance', value: '⚖️' },
    { label: 'Continuous Learning', value: '📚' },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-600/20 border border-purple-500/30"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className={`text-sm tracking-wider uppercase ${theme === 'dark' ? 'text-purple-300' : 'text-purple-700'}`}>
              Join Our Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Build the Future{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              With Us
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
          >
            Join a team of innovators, creators, and problem-solvers building cutting-edge digital solutions.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-6 rounded-2xl text-center border ${
                  theme === 'dark'
                    ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                    : 'bg-white/50 backdrop-blur-xl border-slate-200'
                }`}
              >
                <div className="text-4xl mb-3">{value.value}</div>
                <div className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                  {value.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Join BytechSol?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
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
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${benefit.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                  <div className={`relative h-full p-8 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                      : 'bg-white/90 backdrop-blur-xl border-slate-200'
                  }`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-4`}>
                      <BenefitIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {benefit.title}
                    </h3>
                    <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Find your perfect role
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {openPositions.map((job, index) => {
              const JobIcon = job.icon;
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
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${job.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                  <div className={`relative p-8 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                      : 'bg-white/90 backdrop-blur-xl border-slate-200'
                  }`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-1">
                        <div className={`inline-block px-3 py-1 rounded-full text-xs mb-3 bg-gradient-to-r ${job.gradient} text-white`}>
                          {job.department}
                        </div>
                        <h3 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          {job.title}
                        </h3>
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${job.gradient} flex items-center justify-center flex-shrink-0`}>
                        <JobIcon className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-4 mb-6 text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>

                    <div className="mb-6">
                      <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        Requirements:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.map((req, i) => (
                          <span
                            key={i}
                            className={`px-3 py-1 rounded-full text-xs ${
                              theme === 'dark'
                                ? 'bg-slate-800 text-slate-400'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${job.gradient} text-white transition-all duration-300 hover:shadow-lg`}>
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Don't See Your Role?
            </h2>
            <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              Send us your resume and we'll keep you in mind for future opportunities
            </p>
            <a
              href="mailto:careers@bytechsol.com"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Send Resume
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

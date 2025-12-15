import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Sparkles, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';

export function TeamPage() {
  const { theme } = useTheme();

  // CEO
  const ceo = {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in tech. Former VP at Fortune 500 companies.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    gradient: 'from-purple-600 to-pink-600',
    social: { linkedin: '#', twitter: '#', email: 'sarah@bytechsol.com' }
  };

  // C-Level executives reporting to CEO
  const executives = [
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Tech innovator with expertise in AI/ML and cloud architecture. MIT graduate.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      gradient: 'from-blue-600 to-cyan-600',
      social: { linkedin: '#', twitter: '#', email: 'michael@bytechsol.com' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      bio: 'Award-winning designer passionate about creating exceptional user experiences.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      gradient: 'from-pink-600 to-rose-600',
      social: { linkedin: '#', twitter: '#', email: 'emily@bytechsol.com' }
    },
    {
      name: 'David Kumar',
      role: 'VP of Engineering',
      bio: 'Full-stack expert leading our engineering teams to build scalable solutions.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      gradient: 'from-emerald-600 to-teal-600',
      social: { linkedin: '#', twitter: '#', email: 'david@bytechsol.com' }
    },
  ];

  // Department heads and managers
  const managers = [
    {
      name: 'Alex Martinez',
      role: 'Engineering Manager',
      department: 'Engineering',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400',
      gradient: 'from-violet-600 to-purple-600',
      reportsTo: 'David Kumar'
    },
    {
      name: 'Jessica Lee',
      role: 'Product Manager',
      department: 'Product',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
      gradient: 'from-orange-600 to-red-600',
      reportsTo: 'Sarah Johnson'
    },
    {
      name: 'Sophia Anderson',
      role: 'UX Lead',
      department: 'Design',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      gradient: 'from-pink-600 to-purple-600',
      reportsTo: 'Emily Rodriguez'
    },
  ];

  const team = [
    {
      name: 'Ryan Wilson',
      role: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      gradient: 'from-cyan-600 to-blue-600',
    },
    {
      name: 'James Taylor',
      role: 'Backend Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      name: 'Olivia Brown',
      role: 'Marketing Lead',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      gradient: 'from-rose-600 to-pink-600',
    },
    {
      name: 'Daniel Kim',
      role: 'AI Engineer',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400',
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      name: 'Mia Robinson',
      role: 'Content Strategist',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400',
      gradient: 'from-teal-600 to-cyan-600',
    },
  ];

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero */}
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
              Our Team
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Meet The{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Brilliant Minds
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
          >
            A diverse team of innovators, creators, and problem-solvers working together to build the future.
          </motion.p>
        </div>
      </section>

      {/* Organizational Hierarchy Chart */}
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
              Organization Structure
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Our team hierarchy and reporting structure
            </p>
          </motion.div>

          <div className="flex flex-col items-center gap-8">
            {/* CEO Level */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${ceo.gradient} rounded-2xl opacity-50 blur-xl`} />
              <div className={`relative p-6 rounded-2xl border w-80 text-center ${
                theme === 'dark'
                  ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                  : 'bg-white/90 backdrop-blur-xl border-slate-200'
              }`}>
                <div className="flex items-center gap-4">
                  <img
                    src={ceo.image}
                    alt={ceo.name}
                    className="w-16 h-16 rounded-xl object-cover"
                  />
                  <div className="text-left">
                    <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {ceo.name}
                    </h3>
                    <p className={`bg-gradient-to-r ${ceo.gradient} bg-clip-text text-transparent`}>
                      {ceo.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Arrow Down */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ArrowDown className={`w-8 h-8 ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`} />
            </motion.div>

            {/* Executive Level */}
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connecting Lines */}
              <div className="absolute -top-8 left-0 right-0 h-8 hidden md:block">
                <div className={`h-full w-full flex items-start justify-center ${
                  theme === 'dark' ? 'text-slate-700' : 'text-slate-300'
                }`}>
                  <div className="w-full h-px bg-current" style={{ marginTop: '0px' }} />
                </div>
              </div>

              {executives.map((exec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Vertical connecting line */}
                  <div className={`absolute -top-8 left-1/2 w-px h-8 hidden md:block ${
                    theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'
                  }`} />
                  
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${exec.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500`} />
                  <div className={`relative p-6 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                      : 'bg-white/90 backdrop-blur-xl border-slate-200'
                  }`}>
                    <div className="flex flex-col items-center text-center gap-3">
                      <img
                        src={exec.image}
                        alt={exec.name}
                        className="w-16 h-16 rounded-xl object-cover"
                      />
                      <div>
                        <h3 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          {exec.name}
                        </h3>
                        <p className={`bg-gradient-to-r ${exec.gradient} bg-clip-text text-transparent`}>
                          {exec.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Arrow Down to Managers */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <ArrowDown className={`w-8 h-8 ${theme === 'dark' ? 'text-purple-500' : 'text-purple-600'}`} />
            </motion.div>

            {/* Managers Level */}
            <div className="grid md:grid-cols-3 gap-8">
              {managers.map((manager, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${manager.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition duration-500`} />
                  <div className={`relative p-6 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                      : 'bg-white/90 backdrop-blur-xl border-slate-200'
                  }`}>
                    <div className="flex flex-col items-center text-center gap-3">
                      <img
                        src={manager.image}
                        alt={manager.name}
                        className="w-14 h-14 rounded-xl object-cover"
                      />
                      <div>
                        <h4 className={`${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                          {manager.name}
                        </h4>
                        <p className={`text-sm bg-gradient-to-r ${manager.gradient} bg-clip-text text-transparent`}>
                          {manager.role}
                        </p>
                        <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                          Reports to: {manager.reportsTo}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Leadership Team
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              key={0}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${ceo.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
              <div className={`relative rounded-2xl border overflow-hidden ${
                theme === 'dark'
                  ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                  : 'bg-white/90 backdrop-blur-xl border-slate-200'
              }`}>
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${ceo.gradient} opacity-20`} />
                  <img
                    src={ceo.image}
                    alt={ceo.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {ceo.name}
                  </h3>
                  <p className={`mb-3 bg-gradient-to-r ${ceo.gradient} bg-clip-text text-transparent`}>
                    {ceo.role}
                  </p>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {ceo.bio}
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={ceo.social.linkedin}
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                        theme === 'dark'
                          ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                          : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                      }`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={ceo.social.twitter}
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                        theme === 'dark'
                          ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                          : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                      }`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${ceo.social.email}`}
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                        theme === 'dark'
                          ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                          : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                      }`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {executives.map((member, index) => (
              <motion.div
                key={index + 1}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                <div className={`relative rounded-2xl border overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                    : 'bg-white/90 backdrop-blur-xl border-slate-200'
                }`}>
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
                    <p className={`mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {member.bio}
                    </p>
                    <div className="flex items-center gap-3">
                      <a
                        href={member.social.linkedin}
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                          theme === 'dark'
                            ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                            : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                        }`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                          theme === 'dark'
                            ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                            : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                        }`}
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors ${
                          theme === 'dark'
                            ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                            : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                        }`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
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
              Our Talented Team
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {managers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                <div className={`relative rounded-2xl border overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                    : 'bg-white/90 backdrop-blur-xl border-slate-200'
                }`}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-20`} />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {member.name}
                    </h3>
                    <p className={`bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}>
                      {member.role}
                    </p>
                    <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {member.department}
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      Reports to: {member.reportsTo}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {team.map((member, index) => (
              <motion.div
                key={index + managers.length}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                <div className={`relative rounded-2xl border overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                    : 'bg-white/90 backdrop-blur-xl border-slate-200'
                }`}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${member.gradient} opacity-20`} />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-56 object-cover"
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
    </div>
  );
}
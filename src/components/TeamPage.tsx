import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const team = [
  {
    name: 'Danish (Dan)',
    role: 'Founder & CEO',
    bio: 'Visionary leader with a passion for AI-driven transformation and enterprise solutions.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sarah Chen',
    role: 'Head of AI Research',
    bio: 'Leading our efforts in LLM integration and intelligent automation workflows.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Alex Rivera',
    role: 'Lead ERP Architect',
    bio: 'Expert in Odoo implementations and complex business process automation.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
];

export function TeamPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen">
      {/* Team Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-8xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
          >
            Meet the <br />
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Innovators
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            A global team of engineers, designers, and strategists dedicated to your success.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative aspect-square rounded-3xl overflow-hidden mb-6 border border-slate-700/50">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <div className="flex gap-4">
                      <Linkedin className="w-6 h-6 text-white cursor-pointer hover:text-blue-400" />
                      <Twitter className="w-6 h-6 text-white cursor-pointer hover:text-blue-400" />
                      <Globe className="w-6 h-6 text-white cursor-pointer hover:text-blue-400" />
                    </div>
                  </div>
                </div>
                <h3 className={`text-2xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  {member.name}
                </h3>
                <p className="text-blue-500 font-medium mb-4">{member.role}</p>
                <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

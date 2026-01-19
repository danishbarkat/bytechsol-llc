import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: 'Senior AI Engineer',
    location: 'Remote / London',
    type: 'Full-time',
    category: 'Engineering',
  },
  {
    title: 'ERP Implementation Specialist',
    location: 'Remote',
    type: 'Full-time',
    category: 'Consulting',
  },
  {
    title: 'Product Designer',
    location: 'Remote / Dubai',
    type: 'Contract',
    category: 'Design',
  },
];

export function CareersPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen">
      {/* Careers Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-8xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
          >
            Shape the <br />
            <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
              Future with Us
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            Join a team of visionaries dedicated to building high-impact digital solutions.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-8 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${theme === 'dark'
                    ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900 shadow-xl'
                    : 'bg-white border-slate-200 hover:border-blue-500 shadow-lg'
                  }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <span className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-2 block">
                      {job.category}
                    </span>
                    <h3 className={`text-2xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-6 text-slate-500 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold transition-all group-hover:bg-blue-500">
                    Apply Now
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { 
  Download, 
  Image, 
  FileText, 
  Palette,
  Sparkles,
  ExternalLink
} from 'lucide-react';

export function PressKitPage() {
  const { theme } = useTheme();

  const downloads = [
    {
      icon: Image,
      title: 'Logo Pack',
      description: 'High-resolution logos in PNG, SVG, and AI formats',
      size: '5.2 MB',
      gradient: 'from-purple-600 to-violet-600',
      files: ['PNG', 'SVG', 'AI', 'EPS']
    },
    {
      icon: Palette,
      title: 'Brand Guidelines',
      description: 'Complete brand identity and usage guidelines',
      size: '12 MB',
      gradient: 'from-blue-600 to-cyan-600',
      files: ['PDF']
    },
    {
      icon: Image,
      title: 'Product Screenshots',
      description: 'High-quality screenshots of our platforms',
      size: '18 MB',
      gradient: 'from-pink-600 to-rose-600',
      files: ['ZIP']
    },
    {
      icon: FileText,
      title: 'Company Facts',
      description: 'Key statistics and company information',
      size: '2 MB',
      gradient: 'from-emerald-600 to-teal-600',
      files: ['PDF', 'DOCX']
    },
  ];

  const brandColors = [
    { name: 'Purple', hex: '#9333EA', rgb: 'RGB(147, 51, 234)' },
    { name: 'Blue', hex: '#2563EB', rgb: 'RGB(37, 99, 235)' },
    { name: 'Cyan', hex: '#06B6D4', rgb: 'RGB(6, 182, 212)' },
    { name: 'Slate', hex: '#0F172A', rgb: 'RGB(15, 23, 42)' },
  ];

  const mediaContact = {
    name: 'Sarah Johnson',
    role: 'Head of Communications',
    email: 'press@bytechsol.com',
    phone: '+1 (555) 123-4567'
  };

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
              Press Kit
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Media &{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Brand Assets
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
          >
            Download our logos, brand guidelines, and media assets for editorial use.
          </motion.p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {downloads.map((item, index) => {
              const ItemIcon = item.icon;
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
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                  <div className={`relative p-8 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                      : 'bg-white/90 backdrop-blur-xl border-slate-200'
                  }`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.gradient} flex items-center justify-center`}>
                        <ItemIcon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex gap-2">
                        {item.files.map((format, i) => (
                          <span
                            key={i}
                            className={`px-2 py-1 rounded text-xs ${
                              theme === 'dark'
                                ? 'bg-slate-800 text-slate-400'
                                : 'bg-slate-100 text-slate-600'
                            }`}
                          >
                            {format}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`mb-4 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                        {item.size}
                      </span>
                      <button className={`flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r ${item.gradient} text-white transition-all hover:shadow-lg`}>
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Brand Colors */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-10 rounded-3xl border mb-12 ${
              theme === 'dark'
                ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                : 'bg-white/50 backdrop-blur-xl border-slate-200'
            }`}
          >
            <h2 className={`mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Brand Colors
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandColors.map((color, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-full h-32 rounded-2xl mb-4"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {color.name}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {color.hex}
                  </div>
                  <div className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                    {color.rgb}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Media Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`p-10 rounded-3xl border ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 border-slate-800'
                : 'bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-cyan-100/50 border-slate-200'
            }`}
          >
            <h2 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Media Contact
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className={`text-sm mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  Name
                </div>
                <div className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                  {mediaContact.name}
                </div>
              </div>
              <div>
                <div className={`text-sm mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  Role
                </div>
                <div className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                  {mediaContact.role}
                </div>
              </div>
              <div>
                <div className={`text-sm mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  Email
                </div>
                <a
                  href={`mailto:${mediaContact.email}`}
                  className="text-purple-600 hover:text-purple-500"
                >
                  {mediaContact.email}
                </a>
              </div>
              <div>
                <div className={`text-sm mb-1 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  Phone
                </div>
                <a
                  href={`tel:${mediaContact.phone}`}
                  className="text-purple-600 hover:text-purple-500"
                >
                  {mediaContact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

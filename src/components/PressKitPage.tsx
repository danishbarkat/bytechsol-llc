import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { Download, Share2, Printer, Image } from 'lucide-react';

export function PressKitPage() {
  const { theme } = useTheme();

  return (
    <main className="min-h-screen">
      {/* Press Kit Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`text-6xl md:text-8xl font-bold mb-8 ${theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}
          >
            Media & <br />
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Press Kit
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-xl md:text-2xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
              }`}
          >
            Everything you need to tell the BytechSol story.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={`p-10 rounded-3xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
                }`}
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                <Image className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className={`text-2xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Brand Assets
              </h3>
              <p className={`mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                Download our logo in various formats, brand guidelines, and official photography.
              </p>
              <button className="flex items-center gap-2 text-blue-500 font-bold hover:gap-3 transition-all">
                Download Assets (45MB)
                <Download className="w-5 h-5" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`p-10 rounded-3xl border ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-xl'
                }`}
            >
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                <Share2 className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className={`text-2xl mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Company Bio
              </h3>
              <p className={`mb-8 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                Official company descriptions for press releases and media coverage.
              </p>
              <button className="flex items-center gap-2 text-purple-500 font-bold hover:gap-3 transition-all">
                View Company Bio
                <Printer className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

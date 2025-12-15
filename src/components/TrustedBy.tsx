import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function TrustedBy() {
  return (
    <section className="relative py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 shadow-xl">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-white">Clutch</span>
            <span className="text-slate-400">11 Reviews</span>
          </div>
        </motion.div>

        {/* Scrolling logos animation */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-48 h-32 rounded-2xl bg-slate-800/50 border border-slate-700/50 shadow-lg flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <div className="text-slate-500">Logo {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
}

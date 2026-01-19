import { motion } from 'motion/react';
import { Mail, ArrowRight, Star } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-white">
              Let&apos;s Build Your Digital Future
            </h2>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              Ready to accelerate your business with intelligent digital solutions that drive results?
              At Bytechsol, we turn complex ideas into user-focused platforms built to scale and succeed.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-8 py-4 rounded-xl bg-purple-600 text-white shadow-2xl shadow-purple-600/30 hover:bg-purple-500 transition-all duration-300 hover:scale-105 flex items-center gap-2">
                Start Your Transformation
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="mailto:info@bytechsol.com"
                className="px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-white shadow-lg hover:shadow-xl hover:bg-slate-700 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                info@bytechsol.com
              </a>
            </div>

            {/* Awards badges */}
            <div className="flex flex-wrap gap-4">
              {[
                { label: 'Clutch Top Rated', color: '#ff4b2b' },
                { label: 'Upwork Expert', color: '#37a000' },
                { label: '5.0 Google Rating', color: '#fbbc05' }
              ].map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800/80 border border-slate-700 shadow-xl backdrop-blur-md"
                >
                  <Star className="w-5 h-5 fill-current" style={{ color: award.color }} />
                  <span className="text-white font-bold">{award.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-3xl bg-slate-800 border border-slate-700 shadow-2xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 shadow-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 shadow-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white shadow-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all">
                    <option>Select One</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>AI/ML Services</option>
                    <option>ERP Solutions</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 shadow-sm focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-xl bg-purple-600 text-white shadow-xl shadow-purple-600/30 hover:bg-purple-500 transition-all duration-300 hover:scale-105"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

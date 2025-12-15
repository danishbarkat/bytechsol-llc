import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Sparkles,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@bytechsol.com', 'support@bytechsol.com'],
      gradient: 'from-purple-600 to-violet-600',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      gradient: 'from-blue-600 to-cyan-600',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Innovation Street', 'San Francisco, CA 94105'],
      gradient: 'from-pink-600 to-rose-600',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Weekend: Closed'],
      gradient: 'from-emerald-600 to-teal-600',
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Let's Start a{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Conversation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
          >
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => {
              const InfoIcon = info.icon;
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
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`} />
                  <div className={`relative p-8 rounded-2xl border ${
                    theme === 'dark'
                      ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800'
                      : 'bg-white/90 backdrop-blur-xl border-slate-200'
                  }`}>
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${info.gradient} flex items-center justify-center mb-4`}>
                      <InfoIcon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {info.title}
                    </h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
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
              <h2 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block mb-2 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-purple-500'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-purple-500'
                    } focus:outline-none`}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className={`block mb-2 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-purple-500'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-purple-500'
                    } focus:outline-none`}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label className={`block mb-2 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-purple-500'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-purple-500'
                    } focus:outline-none`}
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div>
                  <label className={`block mb-2 text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
                      theme === 'dark'
                        ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-purple-500'
                        : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-purple-500'
                    } focus:outline-none`}
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>

            {/* Map & Social */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map */}
              <div className={`p-10 rounded-3xl border overflow-hidden ${
                theme === 'dark'
                  ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                  : 'bg-white/50 backdrop-blur-xl border-slate-200'
              }`}>
                <h3 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Our Location
                </h3>
                <div className={`w-full h-64 rounded-2xl ${
                  theme === 'dark' ? 'bg-slate-800' : 'bg-slate-200'
                } flex items-center justify-center`}>
                  <MapPin className={`w-12 h-12 ${
                    theme === 'dark' ? 'text-slate-600' : 'text-slate-400'
                  }`} />
                </div>
              </div>

              {/* Social */}
              <div className={`p-10 rounded-3xl border ${
                theme === 'dark'
                  ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                  : 'bg-white/50 backdrop-blur-xl border-slate-200'
              }`}>
                <h3 className={`mb-6 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all hover:scale-110 ${
                      theme === 'dark'
                        ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                        : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                    }`}
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all hover:scale-110 ${
                      theme === 'dark'
                        ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                        : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                    }`}
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className={`w-14 h-14 rounded-xl border flex items-center justify-center transition-all hover:scale-110 ${
                      theme === 'dark'
                        ? 'border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'
                        : 'border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                    }`}
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import { servicesData } from './servicesData';
import { useRouter } from './Router';

export function ServicesPage() {
  const { theme } = useTheme();
  const { navigate } = useRouter();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.03, 0.05, 0.03],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
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
              Our Services
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
          >
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`text-xl max-w-3xl mx-auto mb-12 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
          >
            From AI-powered solutions to comprehensive ERP systems, we deliver cutting-edge services that transform your business and drive growth.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {[
              { label: 'Services', value: '9+' },
              { label: 'Projects', value: '150+' },
              { label: 'Happy Clients', value: '100+' },
              { label: 'Success Rate', value: '98%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const ServiceIcon = service.icon;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8 }}
                  className="group relative cursor-pointer"
                  onClick={() => navigate(`/services/${service.id}` as any)}
                >
                  {/* Gradient Border Effect */}
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500`}
                  />
                  
                  <div
                    className={`relative h-full p-8 rounded-2xl border transition-all duration-300 ${
                      theme === 'dark'
                        ? 'bg-slate-900/90 backdrop-blur-xl border-slate-800 group-hover:bg-slate-900'
                        : 'bg-white/90 backdrop-blur-xl border-slate-200 group-hover:bg-white'
                    }`}
                  >
                    {/* Icon */}
                    <div className="relative mb-6 inline-flex">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20 blur-xl rounded-full`}
                      />
                      <div
                        className={`relative w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}
                      >
                        <ServiceIcon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`mb-3 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {service.title}
                    </h3>

                    {/* Subtitle */}
                    <p
                      className={`text-sm mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      {service.subtitle}
                    </p>

                    {/* Description */}
                    <p className={`mb-6 leading-relaxed ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {service.description}
                    </p>

                    {/* Sub-services Count */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                      <div className={`text-sm ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
                        {service.subServices.length} Sub-services
                      </div>
                      <ArrowRight
                        className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`rounded-3xl border p-12 ${
              theme === 'dark'
                ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                : 'bg-white/50 backdrop-blur-xl border-slate-200'
            }`}
          >
            <div className="text-center mb-12">
              <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                Why Choose BytechSol?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Expert Team',
                  description: 'Seasoned professionals with deep expertise across all technologies',
                  gradient: 'from-purple-600 to-pink-600',
                },
                {
                  title: 'Proven Results',
                  description: '150+ successful projects delivered with 98% client satisfaction',
                  gradient: 'from-blue-600 to-cyan-600',
                },
                {
                  title: '24/7 Support',
                  description: 'Round-the-clock support to ensure your business never stops',
                  gradient: 'from-cyan-600 to-emerald-600',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="relative inline-flex mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} opacity-20 blur-xl rounded-full`} />
                    <div className={`relative w-12 h-12 rounded-full bg-gradient-to-r ${benefit.gradient} flex items-center justify-center`}>
                      <Star className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                    {benefit.title}
                  </h3>
                  <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
              Ready to Transform Your Business?
            </h2>
            <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
              Let's discuss how our services can help you achieve your goals
            </p>
            <a
              href="mailto:contact@bytechsol.com"
              className="group inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
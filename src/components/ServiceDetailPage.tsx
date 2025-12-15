import { motion } from 'motion/react';
import { useTheme } from './ThemeContext';
import { ArrowRight, CheckCircle2, Sparkles, ChevronRight } from 'lucide-react';
import { getServiceById, type Service } from './servicesData';
import { useRouter } from './Router';

interface ServiceDetailPageProps {
  serviceId: string;
}

export function ServiceDetailPage({ serviceId }: ServiceDetailPageProps) {
  const { theme } = useTheme();
  const { navigate } = useRouter();
  const service = getServiceById(serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
          Service not found
        </div>
      </div>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl`}
            style={{ backgroundColor: service.color }}
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className={`absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl`}
            style={{ backgroundColor: service.color }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-8"
          >
            <button
              onClick={() => navigate('/')}
              className={`transition-colors ${
                theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Home
            </button>
            <ChevronRight className="w-4 h-4 text-slate-500" />
            <button
              onClick={() => navigate('/services')}
              className={`transition-colors ${
                theme === 'dark' ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Services
            </button>
            <ChevronRight className="w-4 h-4 text-slate-500" />
            <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
              {service.title}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Content */}
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 border"
                style={{
                  background: `linear-gradient(to right, ${service.color}20, ${service.color}10)`,
                  borderColor: `${service.color}30`,
                }}
              >
                <Sparkles className="w-4 h-4" style={{ color: service.color }} />
                <span
                  className={`text-sm tracking-wider uppercase`}
                  style={{ color: service.color }}
                >
                  {service.subtitle}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}
              >
                {service.title}
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
              >
                {service.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <a
                  href="mailto:contact@bytechsol.com"
                  className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ background: `linear-gradient(to right, ${service.color}, ${service.color}dd)` }}
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button
                  onClick={() => navigate('/services')}
                  className={`inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                    theme === 'dark'
                      ? 'border-slate-700 text-white hover:bg-slate-800'
                      : 'border-slate-300 text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  View All Services
                </button>
              </motion.div>
            </div>

            {/* Right Column - Icon/Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative">
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
                  style={{ background: `linear-gradient(135deg, ${service.color}, transparent)` }}
                />
                
                {/* Icon Container */}
                <div
                  className={`relative rounded-3xl border-2 p-16 flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                      : 'bg-white/50 backdrop-blur-xl border-slate-200'
                  }`}
                >
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <ServiceIcon
                      className="w-48 h-48"
                      style={{ color: service.color }}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sub-Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
              Our{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(to right, ${service.color}, ${service.color}aa)` }}
              >
                {service.title}
              </span>{' '}
              Offerings
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>

          {/* Sub-Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {service.subServices.map((subService, index) => {
              const SubServiceIcon = subService.icon;
              
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
                  {/* Gradient Border Effect */}
                  <div
                    className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500"
                    style={{ background: `linear-gradient(to right, ${service.color}, ${service.color}aa)` }}
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
                        className="absolute inset-0 rounded-xl blur-xl opacity-20"
                        style={{ backgroundColor: service.color }}
                      />
                      <div
                        className="relative w-16 h-16 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <SubServiceIcon className="w-8 h-8" style={{ color: service.color }} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {subService.title}
                    </h3>

                    {/* Description */}
                    <p className={`mb-6 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                      {subService.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3">
                      {subService.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2
                            className="w-5 h-5 flex-shrink-0"
                            style={{ color: service.color }}
                          />
                          <span className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Background Gradient */}
            <div
              className="absolute inset-0 opacity-10"
              style={{ background: `linear-gradient(135deg, ${service.color}, transparent)` }}
            />
            
            <div
              className={`relative p-12 border-2 ${
                theme === 'dark'
                  ? 'bg-slate-900/50 backdrop-blur-xl border-slate-800'
                  : 'bg-white/50 backdrop-blur-xl border-slate-200'
              }`}
            >
              <div className="text-center">
                <h2 className={`mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Ready to Get Started?
                </h2>
                <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                  Let's discuss how we can help transform your business with our {service.title.toLowerCase()} expertise.
                </p>
                <a
                  href="mailto:contact@bytechsol.com"
                  className="group inline-flex items-center gap-2 px-10 py-4 rounded-full text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  style={{ background: `linear-gradient(to right, ${service.color}, ${service.color}dd)` }}
                >
                  Contact Us Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

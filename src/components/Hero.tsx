import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useTheme } from './ThemeContext';

// Technology services as planets orbiting around BytechSol (sun)
const orbitingTechnologies = [
  // Inner orbit
  { 
    name: 'React', 
    orbit: 1, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    color: '#61DAFB'
  },
  { 
    name: 'Node.js', 
    orbit: 1, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    color: '#339933'
  },
  { 
    name: 'Python', 
    orbit: 1, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    color: '#3776AB'
  },
  { 
    name: 'Odoo', 
    orbit: 1, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/odoo/odoo-original.svg',
    color: '#875A7B'
  },
  
  // Middle orbit
  { 
    name: 'AWS', 
    orbit: 2, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    color: '#FF9900'
  },
  { 
    name: 'GCP', 
    orbit: 2, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg',
    color: '#4285F4'
  },
  { 
    name: 'Azure', 
    orbit: 2, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
    color: '#0078D4'
  },
  { 
    name: 'Docker', 
    orbit: 2, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    color: '#2496ED'
  },
  
  // Outer orbit
  { 
    name: 'TensorFlow', 
    orbit: 3, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    color: '#FF6F00'
  },
  { 
    name: 'PyTorch', 
    orbit: 3, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    color: '#EE4C2C'
  },
  { 
    name: 'MongoDB', 
    orbit: 3, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    color: '#47A248'
  },
  { 
    name: 'PostgreSQL', 
    orbit: 3, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    color: '#4169E1'
  },
  { 
    name: 'GraphQL', 
    orbit: 3, 
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
    color: '#E10098'
  },
];

// Single speed for all orbits (in seconds)
const ORBIT_SPEED = 30;

// Orbit sizes in pixels
const orbitSizes = {
  1: 220,
  2: 340,
  3: 460,
};

export function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative overflow-hidden w-full" style={{ height: '920px' }}>
      {/* Abstract Wave Background - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[50%] overflow-hidden">
        {/* Wave 1 - Purple */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-full"
          style={{
            background: theme === 'dark' 
              ? 'radial-gradient(ellipse 120% 100% at 50% 100%, rgba(78, 145, 255, 0.3) 0%, rgba(78, 145, 255, 0.12) 40%, transparent 70%)'
              : 'radial-gradient(ellipse 120% 100% at 50% 100%, rgba(78, 145, 255, 0.25) 0%, rgba(78, 145, 255, 0.1) 40%, transparent 70%)',
          }}
        />
        
        {/* Wave 2 - Blue */}
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
          className="absolute bottom-0 left-0 right-0 h-full"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(ellipse 100% 80% at 30% 100%, rgba(78, 145, 255, 0.25) 0%, rgba(78, 145, 255, 0.1) 45%, transparent 75%)'
              : 'radial-gradient(ellipse 100% 80% at 30% 100%, rgba(78, 145, 255, 0.2) 0%, rgba(78, 145, 255, 0.08) 45%, transparent 75%)',
          }}
        />

        {/* Wave 3 - Cyan */}
        <motion.div
          initial={{ opacity: 0, y: 140 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.4, ease: 'easeOut' }}
          className="absolute bottom-0 right-0 w-[80%] h-full"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(ellipse 90% 70% at 70% 100%, rgba(78, 145, 255, 0.2) 0%, rgba(78, 145, 255, 0.08) 50%, transparent 80%)'
              : 'radial-gradient(ellipse 90% 70% at 70% 100%, rgba(78, 145, 255, 0.16) 0%, rgba(78, 145, 255, 0.06) 50%, transparent 80%)',
          }}
        />
      </div>

      {/* Full Screen Glassmorphic Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className={`absolute inset-0 backdrop-blur-2xl border-0 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-white/5'
            : 'bg-white/40'
        }`}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 pointer-events-none" />

        {/* Main Content Container - Split Layout */}
        <div className="relative z-10 h-full flex items-center px-6">
          <div className="w-full flex items-center justify-between gap-12">
            
            {/* Left Side - Text Content */}
            <div className="max-w-2xl">
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-12 leading-tight text-left"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
              >
                <span className={`block transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  Global Software Agency
                </span>
                <span className={`block transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                  &amp; Digital Partner for
                </span>
                <span className={`block transition-colors ${
                  theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                }`}>
                  Bold Innovators.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65 }}
                className={`text-lg md:text-xl mb-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}
              >
                We craft scalable, user-focused digital solutions for startups and enterprises. From concept to code,
                we deliver results that fuel growth.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#contact"
                  className={`group inline-flex items-center justify-center gap-3 px-8 py-4 text-white transition-all ${
                    theme === 'dark'
                      ? 'bg-slate-900 hover:bg-slate-800 shadow-lg'
                      : 'bg-black hover:bg-slate-900 shadow-lg'
                  }`}
                  style={{ borderRadius: '3rem' }}
                >
                  <span>Book a strategy call</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className={`inline-flex items-center justify-center px-8 py-4 backdrop-blur-xl transition-all ${
                    theme === 'dark'
                      ? 'bg-white/10 border-2 border-white/30 text-white hover:bg-white/20'
                      : 'bg-white/50 border-2 border-slate-900/30 text-slate-900 hover:bg-white/70'
                  }`}
                  style={{ borderRadius: '3rem' }}
                >
                  Get a custom quote
                </a>
              </motion.div>
            </div>

            {/* Right Side - Solar System */}
            <div className="flex-shrink-0" style={{ marginLeft: '-10px' }}>
              <div className="relative" style={{ width: '600px', height: '600px' }}>
                
                {/* Visible Orbit Rings - Glassy Style */}
                {[1, 2, 3].map((orbit) => (
                  <motion.div
                    key={`orbit-${orbit}`}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                      theme === 'dark' 
                        ? 'border-2 border-white/20' 
                        : 'border-2 border-slate-300/40'
                    }`}
                    style={{
                      width: `${(orbitSizes[orbit] * 2) * 0.6}px`,
                      height: `${(orbitSizes[orbit] * 2) * 0.6}px`,
                      background: 'transparent',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 + orbit * 0.1 }}
                  />
                ))}

                {/* BytechSol - The Sun (Center Logo) */}
                <motion.div
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-xl border-4 shadow-2xl flex items-center justify-center ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-purple-400/30'
                      : 'bg-gradient-to-br from-purple-100/80 to-blue-100/80 border-purple-400/50'
                  }`}
                  style={{
                    width: '120px',
                    height: '120px',
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  {/* Logo Text - Will be replaced with actual logo */}
                  <div className="text-center">
                    <div className={`text-2xl tracking-tight ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      <span className="block">Bytech</span>
                      <span className="block text-purple-500">Sol</span>
                    </div>
                  </div>
                  
                  {/* Sun glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </motion.div>

                {/* Orbiting Technologies (Planets) */}
                {orbitingTechnologies.map((tech, index) => {
                  const radius = orbitSizes[tech.orbit] * 0.6;
                  const totalInOrbit = orbitingTechnologies.filter(t => t.orbit === tech.orbit).length;
                  const indexInOrbit = orbitingTechnologies.filter(t => t.orbit === tech.orbit).indexOf(tech);
                  const startAngle = (indexInOrbit / totalInOrbit) * 360;
                  
                  return (
                    <motion.div
                      key={`${tech.name}-${index}`}
                      className="absolute top-1/2 left-1/2"
                      style={{
                        width: '0px',
                        height: '0px',
                      }}
                      animate={{
                        rotate: [startAngle, startAngle + 360],
                      }}
                      transition={{
                        duration: ORBIT_SPEED,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                    >
                      {/* Planet Container - No Card, Just Logo + Name */}
                      <motion.div
                        style={{
                          position: 'absolute',
                          left: `${radius}px`,
                          top: '0px',
                          transform: 'translate(-50%, -50%)',
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      >
                        {/* Logo + Name - Counter-rotate to keep upright */}
                        <motion.div
                          animate={{
                            rotate: [-startAngle, -startAngle - 360],
                          }}
                          transition={{
                            duration: ORBIT_SPEED,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="flex flex-col items-center gap-2"
                        >
                          {/* Logo */}
                          <motion.div
                            whileHover={{ scale: 1.3 }}
                            className="cursor-pointer transition-all"
                          >
                            <img 
                              src={tech.logo} 
                              alt={tech.name} 
                              className="w-10 h-10" 
                              style={{ 
                                filter: `drop-shadow(0 0 8px ${tech.color})`,
                              }} 
                            />
                          </motion.div>
                          
                          {/* Name */}
                          <span 
                            className={`text-xs whitespace-nowrap transition-colors backdrop-blur-sm px-2 py-1 rounded ${
                              theme === 'dark' ? 'text-white bg-black/20' : 'text-slate-900 bg-white/30'
                            }`}
                            style={{
                              textShadow: theme === 'dark' ? '0 2px 10px rgba(0,0,0,0.5)' : '0 2px 10px rgba(255,255,255,0.5)',
                            }}
                          >
                            {tech.name}
                          </span>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`w-6 h-10 border flex items-start justify-center p-2 backdrop-blur-xl ${
            theme === 'dark' ? 'border-slate-700 bg-white/5' : 'border-slate-300 bg-white/30'
          }`}
          style={{ borderRadius: '1rem' }}
        >
          <div className={`w-1 h-2 ${theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600'}`} />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              theme === 'dark' ? 'bg-purple-400/30' : 'bg-purple-500/20'
            }`}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * -200 - 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
}

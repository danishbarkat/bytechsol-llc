import { motion } from 'motion/react';

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating gradient orbs with continuous movement */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl"
          style={{
            width: Math.random() * 500 + 250,
            height: Math.random() * 500 + 250,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: 'radial-gradient(circle, rgba(78, 145, 255, 0.12), transparent)',
          }}
          animate={{
            x: [
              0,
              Math.random() * 200 - 100,
              Math.random() * 300 - 150,
              Math.random() * 200 - 100,
              0,
            ],
            y: [
              0,
              Math.random() * 200 - 100,
              Math.random() * 300 - 150,
              Math.random() * 200 - 100,
              0,
            ],
            scale: [1, 1.3, 0.9, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Geometric shapes with continuous rotation and movement */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 360],
            x: [
              0,
              Math.random() * 100 - 50,
              Math.random() * 150 - 75,
              Math.random() * 100 - 50,
              0,
            ],
            y: [
              0,
              Math.random() * 100 - 50,
              Math.random() * 150 - 75,
              Math.random() * 100 - 50,
              0,
            ],
          }}
          transition={{
            rotate: {
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: 'linear',
            },
            x: {
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: 'easeInOut',
            },
            y: {
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
        >
          <div
            className="border-2"
            style={{
              width: Math.random() * 80 + 40,
              height: Math.random() * 80 + 40,
              borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '15px' : '0',
              transform: i % 2 === 0 ? 'rotate(45deg)' : 'rotate(0deg)',
              borderColor: 'rgba(78, 145, 255, 0.25)',
            }}
          />
        </motion.div>
      ))}

      {/* Additional small particles for depth */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full brand-bg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [
              0,
              Math.random() * 400 - 200,
              Math.random() * 600 - 300,
              Math.random() * 400 - 200,
              0,
            ],
            y: [
              0,
              Math.random() * 400 - 200,
              Math.random() * 600 - 300,
              Math.random() * 400 - 200,
              0,
            ],
            opacity: [0.3, 0.7, 0.3, 0.8, 0.3],
            scale: [1, 1.5, 0.5, 1.8, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

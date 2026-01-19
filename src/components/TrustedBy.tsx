import { motion } from 'motion/react';

const partners = [
  { name: 'Microsoft', logo: 'https://cdn.simpleicons.org/microsoft/slate-400' },
  { name: 'eBay', logo: 'https://cdn.simpleicons.org/ebay/slate-400' },
  { name: 'Amazon', logo: 'https://cdn.simpleicons.org/amazon/slate-400' },
  { name: 'Google', logo: 'https://cdn.simpleicons.org/google/slate-400' },
  { name: 'Meta', logo: 'https://cdn.simpleicons.org/meta/slate-400' },
  { name: 'Netflix', logo: 'https://cdn.simpleicons.org/netflix/slate-400' },
  { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/slate-400' },
  { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/slate-400' },
  { name: 'Airbnb', logo: 'https://cdn.simpleicons.org/airbnb/slate-400' },
  { name: 'Spotify', logo: 'https://cdn.simpleicons.org/spotify/slate-400' },
  { name: 'Uber', logo: 'https://cdn.simpleicons.org/uber/slate-400' },
  { name: 'Zoom', logo: 'https://cdn.simpleicons.org/zoom/slate-400' },
  { name: 'Adobe', logo: 'https://cdn.simpleicons.org/adobe/slate-400' },
  { name: 'Tesla', logo: 'https://cdn.simpleicons.org/tesla/slate-400' },
  { name: 'Starbucks', logo: 'https://cdn.simpleicons.org/starbucks/slate-400' },
  { name: 'IBM', logo: 'https://cdn.simpleicons.org/ibm/slate-400' },
];

export function TrustedBy() {
  return (
    <section className="py-24 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-sm font-bold text-slate-500 tracking-[0.4em] uppercase mb-12">
            Trusted by global leaders & partners
          </h3>
        </motion.div>

        <div className="relative">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

          {/* Marquee Container */}
          <div className="flex gap-20 items-center overflow-hidden">
            {/* We use a duplicated list and animate from -50% to 0 for Left-to-Right */}
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex gap-20 items-center whitespace-nowrap"
            >
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={`${partner.name}-${i}`}
                  className="flex flex-col items-center gap-4 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer group/logo"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-10 w-auto object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.05)] transition-all group-hover/logo:scale-110 group-hover/logo:brightness-125"
                    style={{
                      // Force simpleicons to show hovered color if needed, but we'll stick to slate and grayscale toggle
                    }}
                  />
                  <span className="text-[10px] font-black tracking-[0.2em] text-slate-600 group-hover/logo:text-blue-400 transition-colors uppercase">
                    {partner.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

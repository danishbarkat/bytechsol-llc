import { useTheme } from './ThemeContext';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  overlayColor: string;
  detail: string;
  skills: string[];
};

const teamMembers: TeamMember[] = [
  {
    name: 'Yasir Khan',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(220, 38, 38, 0.85)',
    detail: 'Sets the business direction, opens strategic partnerships, and keeps the vision grounded in client outcomes.',
    skills: ['Executive strategy', 'Enterprise partnerships', 'Vision & culture'],
  },
  {
    name: 'Bilal Shah',
    role: 'Chief Strategy Officer',
    image: 'https://images.unsplash.com/photo-1544723795-432537c0f5c4?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(14, 165, 233, 0.9)',
    detail: 'Builds the transformation playbooks, ensures every engagement ties back to measurable KPIs, and shapes new service lines.',
    skills: ['Market strategy', 'Product positioning', 'Partnership enablement'],
  },
  {
    name: 'Danish Raza',
    role: 'AI / ML Engineer',
    image: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(79, 70, 229, 0.82)',
    detail: 'Orchestrates model experiments, LLM guardrails, and intelligent agents that keep every workflow adaptive.',
    skills: ['Machine learning', 'LLM integration', 'AI safety'],
  },
  {
    name: 'Salik Husnaq',
    role: 'Full Stack Web Developer',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnQbSnfZ8GFrEGHt3DF9mIhfRW5UuhtZ1WaA&s',
    overlayColor: 'rgba(236, 72, 153, 0.82)',
    detail: 'Ships responsive frontend and scalable backend services that bridge immersive design with rock-solid infrastructure.',
    skills: ['Next.js / Vite', 'API architecture', 'Performance tuning'],
  },
  {
    name: 'Talha Khan',
    role: 'Sales Lead',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(16, 185, 129, 0.8)',
    detail: 'Listens to buyers, scopes their problems in plain language, and keeps the funnel honest with real-world promises.',
    skills: ['Pipeline building', 'Solution consulting', 'Negotiation'],
  },
  {
    name: 'Hassan Rafi',
    role: 'Business Development',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(251, 191, 36, 0.9)',
    detail: 'Keeps our global network humming, tracks opportunities across regions, and co-creates compelling proposals.',
    skills: ['Corporate outreach', 'Strategic alliances', 'Proposal leadership'],
  },
  {
    name: 'Najeeb Khan',
    role: 'Graphic Storyteller',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(249, 115, 22, 0.85)',
    detail: 'Remixes brand signals into motion stills, digital assets, and storytelling grids that stand out in crowded markets.',
    skills: ['Visual identity', 'Motion graphics', 'Art direction'],
  },
  {
    name: 'Shazeeb Malik',
    role: 'Lead Graphic Designer',
    image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(6, 182, 212, 0.85)',
    detail: 'Pairs bold color with clean typography so every interface feels premium and timeless.',
    skills: ['Visual systems', 'UI assets', 'Creative validation'],
  },
  {
    name: 'Amina Yusuf',
    role: 'Operations & Finance',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(168, 85, 247, 0.82)',
    detail: 'Keeps budgets, schedules, and governance on track so creative work moves at startup speed with enterprise rigor.',
    skills: ['Financial planning', 'Program ops', 'Resource strategy'],
  },
  {
    name: 'Rohit Jain',
    role: 'Solutions Architect',
    image: 'https://images.unsplash.com/photo-1528216278980-6f0caa14c568?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(244, 114, 182, 0.8)',
    detail: 'Designs the technical spine that connects ERP, AI, analytics, and customer touchpoints.',
    skills: ['Systems design', 'Integration patterns', 'Architecture reviews'],
  },
  {
    name: 'Lina Farooq',
    role: 'Product Marketing',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(59, 130, 246, 0.85)',
    detail: 'Captures insights, customer use cases, and product differentiators that help every release land.',
    skills: ['Launch strategy', 'Content storytelling', 'Sales enablement'],
  },
  {
    name: 'Maya Iqbal',
    role: 'QA & Reliability Lead',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=480&h=640&q=80',
    overlayColor: 'rgba(132, 204, 22, 0.85)',
    detail: 'Builds regression grids, performance suites, and observability to keep mission-critical apps stable.',
    skills: ['Test automation', 'Release guardrails', 'System reliability'],
  },
];

const teamRows = [
  teamMembers.slice(0, 3),
  teamMembers.slice(3, 7),
  teamMembers.slice(7, 10),
  teamMembers.slice(10, 12),
];

const rowLayouts = [
  { offsetX: '0rem', offsetY: '0rem', gap: '1.6rem' },
  { offsetX: '0rem', offsetY: '-3.2rem', gap: '1.4rem' },
  { offsetX: '0rem', offsetY: '-3.1rem', gap: '1.5rem' },
  { offsetX: '0rem', offsetY: '-3rem', gap: '1.7rem' },
];

const toSolidColor = (color: string) => {
  if (color.startsWith('rgba')) {
    return color.replace('rgba', 'rgb').replace(/,\s*[^,]+\)$/, ')');
  }
  return color;
};

export function ContactTeam() {
  const { theme } = useTheme();

  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className={`text-xs uppercase tracking-[0.5em] mb-3 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
            Team Spotlight
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
            People who prototype your next chapter
          </h2>
          <p className={`text-base md:text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-500'}`}>We build cross-disciplinary squads that take AI, ERP, and digital products from napkin sketch to measurable launch.</p>
        </div>
        <div className="space-y-8">
          {teamRows.map((row, rowIndex) => (
            <div
              key={`team-row-${rowIndex}`}
              className="flex justify-center w-full relative"
              style={{
                marginTop: rowLayouts[rowIndex]?.offsetY ?? 0,
                transform: `translateX(${rowLayouts[rowIndex]?.offsetX ?? '0rem'})`,
                gap: rowLayouts[rowIndex]?.gap ?? '1.5rem',
                zIndex: 20 + rowIndex,
              }}
            >
              {row.map((member, idx) => {
                const solidOverlay = toSolidColor(member.overlayColor);

                return (
                  <div
                    key={member.name}
                    className="team-card-wrapper"
                    style={{ zIndex: 30 - idx }}
                  >
                    <div className="team-card-inner w-[220px] sm:w-[240px] md:w-[260px] h-[360px]">
                      <div className="team-card-face front">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0"
                          style={{ background: `linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, ${member.overlayColor} 90%)` }}
                        />
                        <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 pt-2">
                          <p className="text-[0.65rem] uppercase tracking-[0.45em] text-white/70">{member.role}</p>
                          <p className="text-2xl leading-tight font-semibold text-white">{member.name}</p>
                        </div>
                      </div>

                      <div
                        className="team-card-face back px-5 py-6 flex flex-col justify-center"
                        style={{ backgroundColor: solidOverlay }}
                      >
                        <p className="text-[0.65rem] uppercase tracking-[0.45em] text-white/70 mb-2">{member.role}</p>
                        <h3 className="text-2xl font-semibold text-white leading-tight mb-3">{member.name}</h3>
                        <p className="text-sm leading-relaxed text-white/85">{member.detail}</p>
                        <ul className="mt-4 space-y-2">
                          {member.skills.map((skill) => (
                            <li key={skill} className="flex items-center gap-2 text-sm text-white/90">
                              <span
                                className="h-2.5 w-2.5 rounded-full"
                                style={{ backgroundColor: 'rgba(255, 255, 255, 0.85)' }}
                              />
                              {skill}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

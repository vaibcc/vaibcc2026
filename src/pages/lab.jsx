import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Cloud,
  Globe,
  Container,
  Home,
  Bot,
  Rocket,
  BarChart3,
  ArrowLeft,
  Shield,
  KeyRound,
  Fingerprint,
  Lock,
  Gauge,
  Settings,
  Network,
  GitBranch,
  Server,
  Box,
  ArrowRight,
  Workflow,
  Layers,
  Cpu,
  Terminal,
  Activity,
  Zap,
  Brain,
  Sparkles,
  ExternalLink,
  CheckCircle2,
} from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedCounter from '@/components/AnimatedCounter';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

interface TechItem {
  icon: typeof Cloud;
  label: string;
}

const ms365Items: TechItem[] = [
  { icon: KeyRound, label: 'Microsoft Entra ID' },
  { icon: Shield, label: 'SC-300 Identity & Access' },
  { icon: Globe, label: 'MS-900 Fundamentals' },
  { icon: Fingerprint, label: 'MFA' },
  { icon: Lock, label: 'Conditional Access' },
  { icon: Gauge, label: 'Secure Score' },
  { icon: Settings, label: 'Administration M365' },
];

const cloudflareItems: TechItem[] = [
  { icon: Globe, label: 'Cloudflare Pages' },
  { icon: Network, label: 'DNS' },
  { icon: Lock, label: 'SSL/TLS' },
  { icon: GitBranch, label: 'GitHub' },
  { icon: Rocket, label: 'Déploiements auto' },
  { icon: Globe, label: 'Domaines personnalisés' },
];

const dockerItems: TechItem[] = [
  { icon: Server, label: 'Ubuntu Server' },
  { icon: Box, label: 'Docker' },
  { icon: Network, label: 'Reverse Proxy' },
  { icon: Globe, label: 'WordPress' },
  { icon: Home, label: 'Hébergement auto-géré' },
  { icon: Activity, label: 'Monitoring' },
];

const homeLabSkills = [
  'Serveurs personnels',
  'Machines virtuelles',
  'Réseau de test',
  'Services auto-hébergés',
  'Docker',
  'Cloudflare',
  'Automatisation',
  'Monitoring',
];

const aiItems: TechItem[] = [
  { icon: Bot, label: 'IA auto-hébergée' },
  { icon: Brain, label: 'Prompt Engineering' },
  { icon: Workflow, label: 'Workflows IA' },
  { icon: Zap, label: 'Productivité' },
  { icon: Cpu, label: 'Automatisation' },
  { icon: Sparkles, label: 'Tests de modèles' },
];

const sites = [
  {
    name: 'vaib.cc',
    description: 'Portfolio professionnel personnel.',
    buttonText: 'Voir le site',
    link: 'https://www.vaib.cc',
    icon: Globe,
  },
  {
    name: 'guerande5.com',
    description: "Site officiel de l'équipe Guérande 5.",
    buttonText: 'Visiter le site',
    link: 'https://guerande5.com',
    icon: Rocket,
  },
  {
    name: 'tashka.fr',
    description: 'Jeu interactif développé pour enfants avec avatars personnalisés.',
    buttonText: 'Visiter le site',
    link: 'https://tashka.fr',
    icon: Sparkles,
  },
];

const stats = [
  { value: 20, suffix: '+', label: 'Projets réalisés' },
  { value: 50, suffix: '+', label: 'Certifications' },
  { value: 3, suffix: '', label: 'Sites en production' },
  { value: 1, suffix: '', label: 'Home Lab complet' },
  { value: 1, suffix: '', label: 'Plateforme IA auto-hébergée' },
];

function SectionHeader({ icon: Icon, title }: { icon: typeof Cloud; title: string }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center gap-4 mb-12"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[#0078d4] blur-2xl opacity-30 rounded-full" />
        <div className="relative w-14 h-14 rounded-2xl glass flex items-center justify-center border border-[#0078d4]/30">
          <Icon className="w-7 h-7 text-[#2b9dff]" />
        </div>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">{title}</h2>
    </motion.div>
  );
}

function TechCard({ icon: Icon, label }: { icon: typeof Cloud; label: string }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="glass glass-hover rounded-2xl p-5 flex flex-col items-center text-center gap-3 cursor-default group"
    >
      <div className="relative w-12 h-12 rounded-xl bg-[#0078d4]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[#0078d4]/20 group-hover:shadow-[0_0_20px_-5px_rgba(0,120,212,0.6)]">
        <Icon className="w-6 h-6 text-[#2b9dff] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
      </div>
      <span className="text-sm text-slate-300 font-medium leading-tight">{label}</span>
    </motion.div>
  );
}

function HomeLabIllustration() {
  return (
    <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden glass border border-[#0078d4]/20">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex gap-4 md:gap-8">
          {[Server, Box, Network, Activity].map((Icon, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
              className="w-16 h-16 md:w-20 md:h-20 rounded-2xl glass border border-[#0078d4]/30 flex items-center justify-center"
            >
              <Icon className="w-7 h-7 md:w-9 md:h-9 text-[#2b9dff]" />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0078d4] to-transparent opacity-50" />
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-0 left-0 h-1 w-24 bg-gradient-to-r from-transparent to-[#2b9dff] blur-sm"
      />
    </div>
  );
}

function AIIllustration() {
  return (
    <div className="relative w-full h-64 md:h-72 rounded-2xl overflow-hidden glass border border-[#0078d4]/20">
      <div className="absolute inset-0 grid-bg radial-fade opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-[#0078d4] blur-3xl"
          />
          <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full glass border-2 border-[#0078d4]/40 flex items-center justify-center">
            <Brain className="w-12 h-12 md:w-14 md:h-14 text-[#2b9dff]" />
          </div>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = (i / 6) * Math.PI * 2;
            const radius = 70;
            return (
              <motion.div
                key={i}
                animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                className="absolute w-3 h-3 rounded-full bg-[#2b9dff] shadow-[0_0_10px_rgba(0,120,212,0.8)]"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0078d4] to-transparent opacity-50" />
    </div>
  );
}

export default function LabPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative min-h-screen bg-[#0a0e17] text-slate-200 overflow-x-hidden">
      <ParticleBackground />

      {/* Fixed grid background */}
      <div className="fixed inset-0 grid-bg radial-fade pointer-events-none" style={{ zIndex: 0 }} />

      {/* Scan line effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0078d4]/30 to-transparent animate-scan" />
      </div>

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 px-6" style={{ zIndex: 2 }}>
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#0078d4] blur-2xl opacity-40 rounded-full" />
              <div className="relative w-20 h-20 rounded-3xl glass border border-[#0078d4]/40 flex items-center justify-center">
                <Terminal className="w-10 h-10 text-[#2b9dff]" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 text-glow"
          >
            🧪 Mon Laboratoire Technique
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Je conçois, teste et déploie des solutions autour du Cloud, Microsoft 365, de la cybersécurité, des infrastructures, de l'intelligence artificielle et de l'automatisation.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-[#0078d4] to-transparent mx-auto mt-10"
          />
        </motion.div>
      </section>

      {/* Section 1: Microsoft 365 & Cloud */}
      <section className="relative py-20 px-6" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Cloud} title="☁️ Microsoft 365 & Cloud" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4"
          >
            {ms365Items.map((item) => (
              <TechCard key={item.label} icon={item.icon} label={item.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Cloudflare & Web */}
      <section className="relative py-20 px-6" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Globe} title="🌐 Cloudflare & Web" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {cloudflareItems.map((item) => (
              <TechCard key={item.label} icon={item.icon} label={item.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 3: Docker & Infrastructure */}
      <section className="relative py-20 px-6" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Container} title="🐳 Docker & Infrastructure" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {dockerItems.map((item) => (
              <TechCard key={item.label} icon={item.icon} label={item.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 4: Home Lab */}
      <section className="relative py-20 px-6" style={{ zIndex: 2 }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader icon={Home} title="🏠 Home Lab" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="glass glass-hover rounded-3xl p-8 md:p-10 gradient-border"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Laboratoire personnel complet</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Infrastructure personnelle utilisée pour tester des technologies professionnelles dans un environnement réel.
                </p>
                <div className="flex flex-wrap gap-2">
                  {homeLabSkills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-[#0078d4]/20 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#2b9dff]" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              <HomeLabIllustration />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: AI */}
      <section className="relative py-20 px-6" style={{ zIndex: 2 }}>
        <div className="max-w-5xl mx-auto">
          <SectionHeader icon={Bot} title="🤖 Intelligence Artificielle" />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="glass glass-hover rounded-3xl p-8 md:p-10 gradient-border"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Plateforme IA auto-hébergée</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Déploiement et expérimentation d'environnements IA privés.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {aiItems.map((item) => (
                    <motion.div
                      key={item.label}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl glass border border-[#0078d4]/20"
                    >
                      <item.icon className="w-5 h-5 text-[#2b9dff] flex-shrink-0" />
                      <span className="text-sm text-slate-300">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <AIIllustration />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Sites in Production */}
      <section className="relative py-20 px-6" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Rocket} title="🚀 Sites en Production" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {sites.map((site) => (
              <motion.a
                key={site.name}
                variants={fadeUp}
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass glass-hover rounded-2xl p-8 gradient-border group cursor-pointer flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#0078d4]/10 flex items-center justify-center group-hover:bg-[#0078d4]/20 transition-colors duration-300">
                    <site.icon className="w-6 h-6 text-[#2b9dff] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-[#2b9dff] transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{site.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{site.description}</p>
                <div className="inline-flex items-center gap-2 text-[#2b9dff] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                  {site.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 7: Statistics */}
      <section className="relative py-20 px-6" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={BarChart3} title="📊 Statistiques" />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="glass glass-hover rounded-2xl p-8 text-center gradient-border"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-slate-400 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final Section */}
      <section className="relative py-24 px-6" style={{ zIndex: 2 }}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-10 md:p-14 gradient-border relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0078d4]/5 animate-pulse-glow" />
            <div className="relative">
              <Sparkles className="w-10 h-10 text-[#2b9dff] mx-auto mb-6" />
              <blockquote className="text-xl md:text-2xl text-slate-200 leading-relaxed font-medium italic">
                "J'aime apprendre, construire et expérimenter. Mon laboratoire technique me permet de transformer des idées en projets concrets et de tester les technologies que j'utilise au quotidien."
              </blockquote>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-12"
          >
            <motion.a
              href="https://www.vaib.cc"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl glass border border-[#0078d4]/40 text-white font-medium text-lg hover:border-[#0078d4] hover:shadow-[0_0_40px_-10px_rgba(0,120,212,0.6)] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 text-[#2b9dff]" />
              ⬅ Retour au Portfolio
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Bottom glow */}
      <div className="fixed bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0078d4]/5 to-transparent pointer-events-none" style={{ zIndex: 1 }} />
    </div>
  );
}

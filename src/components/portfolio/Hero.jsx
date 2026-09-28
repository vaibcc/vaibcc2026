const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Linkedin } from "lucide-react";
import { Image } from "@/components/ui/image";
import { PROFILE } from "@/lib/portfolioData";
import Typewriter from "./Typewriter";
import ProfileCard from "./ProfileCard";

const fade = (d) => ({ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] } });

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      <div className="absolute inset-0">
        <Image src="/666667.png" alt="Baie de serveurs illuminée de LED bleues" className="h-full w-full opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/80 to-[#050505]" />
        <div className="grid-bg absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#0078D4]/20 blur-[140px]" />
      </div>
      <span className="absolute left-6 top-28 hidden font-mono text-[10px] text-zinc-600 lg:block">SYS://PORTFOLIO v2026.1</span>
      <span className="absolute bottom-8 right-6 hidden font-mono text-[10px] text-zinc-600 lg:block">LAT 47.28 · LON -1.80</span>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.div {...fade(0.1)} className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3.5 py-1.5 font-mono text-[11px] text-emerald-400">
            <span className="ping-dot h-1.5 w-1.5 rounded-full bg-emerald-400 text-emerald-400" />
            Disponible pour de nouveaux projets
          </motion.div>
          <h1 className="min-h-[1.1em] text-5xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-7xl">
            <Typewriter text={PROFILE.name} />
          </h1>
          <motion.p {...fade(0.3)} className="mt-6 font-mono text-xs leading-relaxed text-[#6cb8f6] sm:text-sm">{PROFILE.subtitle}</motion.p>
          <motion.p {...fade(0.45)} className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">{PROFILE.pitch}</motion.p>
          <motion.div {...fade(0.6)} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#0078D4] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#1a8ae0]">
              <Linkedin className="h-4 w-4" /> Voir mon LinkedIn
            </a>
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-white/25 hover:bg-white/[0.06]">
              Me contacter <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
          <motion.p {...fade(0.75)} className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
            <MapPin className="h-4 w-4" /> {PROFILE.location}
          </motion.p>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }}>
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  );
}

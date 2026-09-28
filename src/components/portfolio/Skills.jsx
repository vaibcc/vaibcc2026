import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SKILLS } from "@/lib/portfolioData";
import SectionHeader from "./SectionHeader";
import SkillCard from "./SkillCard";

export default function Skills() {
  const [filter, setFilter] = useState("Tout");
  const tabs = ["Tout", ...SKILLS.map((s) => s.category)];
  const shown = filter === "Tout" ? SKILLS : SKILLS.filter((s) => s.category === filter);

  return (
    <section id="competences" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader index="02" eyebrow="Compétences" title="Une matrice technique complète." text="De l'identité cloud au pare-feu périmétrique : chaque couche de l'infrastructure, maîtrisée." />
      <div className="mb-10 flex flex-wrap gap-2 rounded-2xl border border-white/[0.06] bg-black/40 p-2 font-mono text-xs">
        {tabs.map((t) => (
          <button key={t} onClick={() => setFilter(t)} className={`relative rounded-lg px-4 py-2 transition-colors ${filter === t ? "text-white" : "text-zinc-500 hover:text-zinc-300"}`}>
            {filter === t && <motion.span layoutId="skill-tab" className="absolute inset-0 rounded-lg bg-[#0078D4]/15 ring-1 ring-[#0078D4]/50" />}
            <span className="relative">{filter === t ? "> " : ""}{t}</span>
          </button>
        ))}
      </div>
      <motion.div layout className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((s) => (
            <motion.div key={s.category} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
              <SkillCard group={s} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { EXPERIENCE } from "@/lib/portfolioData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader index="05" eyebrow="Log d'expérience" title={EXPERIENCE.title} text="Les missions déployées au quotidien, comme une série de mises en production." />
      <div ref={ref} className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-white/[0.08] md:left-1/2" />
        <motion.div style={{ height }} className="absolute left-4 top-0 w-px bg-gradient-to-b from-[#0078D4] to-[#6cb8f6] shadow-[0_0_12px_#0078D4] md:left-1/2" />
        <div className="space-y-10">
          {EXPERIENCE.missions.map((m, i) => {
            const left = i % 2 === 0;
            return (
              <Reveal key={m.title} className={`relative pl-12 md:w-1/2 md:pl-0 ${left ? "md:pr-14 md:text-right" : "md:ml-auto md:pl-14"}`}>
                <span className={`absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#0078D4] bg-[#050505] ${left ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0"}`} />
                <div className="glass glass-hover rounded-2xl p-6">
                  <p className="font-mono text-[11px] text-[#6cb8f6]">[DEPLOY_{String(i + 1).padStart(2, "0")}] <span className="text-emerald-400">OK</span></p>
                  <h3 className="mt-2 text-lg font-medium text-white">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">{m.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
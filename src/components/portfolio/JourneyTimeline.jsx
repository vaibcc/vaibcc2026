import React from "react";
import { JOURNEY } from "@/lib/portfolioData";
import Reveal from "./Reveal";

export default function JourneyTimeline() {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-[#0078D4]/60 to-[#0078D4]" />
      {JOURNEY.map((j, i) => (
        <Reveal key={j.tag} delay={i * 0.1} className="relative pb-9 last:pb-0">
          <span className={`absolute -left-8 top-1 grid h-[15px] w-[15px] place-items-center rounded-full border ${j.current ? "border-[#0078D4] bg-[#0078D4]/20" : "border-white/20 bg-[#050505]"}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${j.current ? "ping-dot bg-[#0078D4] text-[#0078D4]" : "bg-zinc-500"}`} />
          </span>
          <p className="font-mono text-[11px] text-zinc-500">ÉTAPE {j.tag}{j.current && <span className="ml-2 text-[#6cb8f6]">· ACTUEL</span>}</p>
          <h3 className="mt-1 text-lg font-medium text-white">{j.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{j.text}</p>
        </Reveal>
      ))}
    </div>
  );
}
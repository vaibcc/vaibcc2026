import React from "react";
import { ShieldCheck, CloudUpload, Code2, Network, Globe } from "lucide-react";
import { PROJECTS } from "@/lib/portfolioData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const ICONS = { ShieldCheck, CloudUpload, Code2, Network, Globe };

export default function Projects() {
  return (
    <section id="projets" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader index="04" eyebrow="Projets" title="Des déploiements concrets." />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
        {PROJECTS.map((p, i) => {
          const Icon = ICONS[p.icon];
          const span = i < 2 ? "lg:col-span-3" : "lg:col-span-2";
          return (
            <Reveal key={p.title} delay={i * 0.08} className={span}>
              <article className="glass glass-hover group flex h-full flex-col rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-[#0078D4]/30 bg-[#0078D4]/10 transition-colors group-hover:bg-[#0078D4]/25">
                    <Icon className="h-5 w-5 text-[#6cb8f6]" />
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600">PRJ-0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-medium text-white">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{p.text}</p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-zinc-400">{t}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
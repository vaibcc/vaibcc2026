import React from "react";
import Reveal from "./Reveal";

export default function SectionHeader({ index, eyebrow, title, text }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <div className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#6cb8f6]">
        <span className="text-zinc-600">{index}</span>
        <span className="h-px w-8 bg-[#0078D4]" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-relaxed text-zinc-400">{text}</p>}
    </Reveal>
  );
}
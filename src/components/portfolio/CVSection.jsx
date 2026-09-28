import React from "react";
import { FileText } from "lucide-react";
import Reveal from "./Reveal";
import CVButton from "./CVButton";

export default function CVSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-[#0078D4]/25 bg-gradient-to-br from-[#0078D4]/15 via-[#0a0a0a] to-[#0a0a0a] p-8 sm:p-14">
          <div className="grid-bg absolute inset-0 opacity-50 [mask-image:linear-gradient(90deg,transparent,black)]" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex items-start gap-5">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#0078D4]/20 ring-1 ring-[#0078D4]/40">
                <FileText className="h-6 w-6 text-[#6cb8f6]" />
              </span>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Mon CV en un clic</h2>
                <p className="mt-2 max-w-md text-zinc-400">Parcours, certifications Microsoft, compétences et projets réunis dans un PDF prêt à partager.</p>
                <p className="mt-3 font-mono text-[11px] text-zinc-500">CV-Vaibhav-Kamra.pdf · A4</p>
              </div>
            </div>
            <CVButton />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
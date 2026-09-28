import React from "react";
import { MapPin, Briefcase } from "lucide-react";
import { PROFILE, EXPERTISE } from "@/lib/portfolioData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import JourneyTimeline from "./JourneyTimeline";

export default function About() {
  return (
    <section id="apropos" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader index="01" eyebrow="À propos" title="L'IT, la sécurité et le bâtiment connectés." />
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <div className="glass rounded-3xl p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Info icon={MapPin} label="Localisation" value={PROFILE.location} />
              <Info icon={Briefcase} label="Poste" value={PROFILE.role} />
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">Expérience en</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {EXPERTISE.map((e) => (
                <span key={e} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-[#0078D4]/50 hover:text-white">{e}</span>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-zinc-400">Au-delà de mes activités professionnelles dans l'informatique et la cybersécurité, je m'investis également dans la vie associative et citoyenne à travers le billard sportif de compétition et la Réserve Communale de Sécurité Civile de Guérande.</p>
          </div>
        </Reveal>
        <JourneyTimeline />
      </div>
    </section>
  );
}

function Info({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-black/30 p-4">
      <Icon className="h-4 w-4 text-[#0078D4]" />
      <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">{label}</p>
      <p className="mt-1 text-sm text-white">{value}</p>
    </div>
  );
}
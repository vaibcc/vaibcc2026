import React from "react";
import { Linkedin, Github, Mail, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/portfolioData";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const LINKS = [
  { icon: Linkedin, label: "LinkedIn", value: "Vaibhav Kamra", href: PROFILE.linkedin },
  { icon: Github, label: "GitHub", value: "Projets & code", href: PROFILE.github },
  { icon: Mail, label: "Email professionnel", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader index="07" eyebrow="Contact" title="Parlons de votre infrastructure." text="Sécurisation Microsoft 365, gestion des identités, réseau ou GTB : choisissez le canal qui vous convient." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {LINKS.map(({ icon: Icon, label, value, href }, i) => (
          <Reveal key={label} delay={i * 0.08}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="glass glass-hover group flex h-full flex-col items-start gap-4 rounded-3xl p-7">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#0078D4]/10 ring-1 ring-[#0078D4]/30"><Icon className="h-6 w-6 text-[#6cb8f6]" /></span>
              <div className="flex-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">{label}</p>
                <p className="mt-1 text-base font-medium text-white">{value}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-zinc-500 transition-colors group-hover:text-white">
                Ouvrir <ArrowUpRight className="h-3.5 w-3.5 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
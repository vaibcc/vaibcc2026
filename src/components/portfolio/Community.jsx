import React from "react";
import { Disc3, LifeBuoy } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const CARDS = [
  {
    icon: Disc3,
    title: "Capitaine de l'équipe Guérande 5",
    text: "Je suis capitaine de l'équipe Guérande 5 au sein du Club de Billard de la Presqu'île Guérandaise. J'encadre l'équipe lors des compétitions, participe à l'organisation sportive et contribue à promouvoir l'esprit d'équipe, la stratégie et le développement du billard dans la région.",
  },
  {
    icon: LifeBuoy,
    title: "Réserve Communale de Sécurité Civile de Guérande",
    text: "Je suis membre de la Réserve Communale de Sécurité Civile de la Ville de Guérande. Sous l'autorité de Monsieur le Maire de Guérande, je participe aux actions de soutien à la population, à la prévention des risques et à la gestion des situations exceptionnelles au service de la collectivité.",
  },
];

export default function Community() {
  return (
    <section id="engagement" className="relative mx-auto max-w-6xl px-6 py-28">
      <SectionHeader index="06" eyebrow="Engagement" title="Engagement Associatif & Citoyen." text="Au-delà de l'IT, deux engagements qui comptent au quotidien : le sport et le service de la collectivité." />
      <div className="grid gap-6 md:grid-cols-2">
        {CARDS.map(({ icon: Icon, title, text }, i) => (
          <Reveal key={title} delay={i * 0.1}>
            <div className="glass glass-hover group h-full rounded-3xl p-8">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0078D4]/10 ring-1 ring-[#0078D4]/30 transition-colors group-hover:bg-[#0078D4]/20">
                <Icon className="h-6 w-6 text-[#6cb8f6]" />
              </span>
              <h3 className="mt-6 text-xl font-medium leading-snug text-white">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">{text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
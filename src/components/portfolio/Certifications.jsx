import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ChevronDown } from "lucide-react";
import { CERTS, CERT_CATEGORIES } from "@/lib/portfolioData";
import SectionHeader from "./SectionHeader";
import CertCard from "./CertCard";
import CertBadge from "./CertBadge";
import CertModal from "./CertModal";

export default function Certifications() {
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const featured = CERTS.filter((c) => c.featured);
  const loop = [...featured, ...featured];

  return (
    <section id="certifications" className="relative py-28">
      <div className="absolute inset-x-0 top-1/2 h-72 -translate-y-1/2 bg-[#0078D4]/[0.07] blur-[120px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeader index="03" eyebrow="Credential Vault" title="Plus de 50 certifications professionnelles." text="Microsoft, CompTIA, ISC2, Cisco, Fortinet, IBM, Google, Red Hat, Datadog et Linux Foundation — un parcours certifié à chaque couche de l'IT." />
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <div className="glass flex items-center gap-3 rounded-2xl px-5 py-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#0078D4]/15 ring-1 ring-[#0078D4]/40">
              <Award className="h-5 w-5 text-[#6cb8f6]" />
            </span>
            <div>
              <p className="font-mono text-2xl font-semibold text-white">50<span className="text-[#6cb8f6]">+</span></p>
              <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Certifications professionnelles</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {CERT_CATEGORIES.map((c) => (
              <span key={c.id} className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-zinc-400">
                {c.label} · {CERTS.filter((x) => x.category === c.id).length}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-5 px-6 py-4">
          {loop.map((c, i) => <CertCard key={c.code + i} cert={c} onOpen={setOpen} />)}
        </div>
      </div>

      <div className="relative mx-auto mt-6 max-w-6xl px-6">
        <button
          onClick={() => setShowAll((s) => !s)}
          className="group mx-auto flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition-all hover:border-[#0078D4]/50 hover:bg-[#0078D4]/10"
        >
          {showAll ? "Masquer la liste" : "Voir toutes les certifications"}
          <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
        </button>

        <AnimatePresence>
          {showAll && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-12 space-y-12">
                {CERT_CATEGORIES.map((cat) => (
                  <div key={cat.id}>
                    <div className="mb-5 flex items-center gap-3">
                      <span className="font-mono text-sm text-[#6cb8f6]">{cat.label}</span>
                      <span className="h-px flex-1 bg-white/[0.08]" />
                      <span className="font-mono text-xs text-zinc-600">{CERTS.filter((x) => x.category === cat.id).length}</span>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {CERTS.filter((c) => c.category === cat.id).map((c) => (
                        <button
                          key={c.code + c.title}
                          onClick={() => setOpen(c)}
                          className="glass glass-hover group flex items-center gap-4 rounded-2xl p-4 text-left"
                        >
                          <CertBadge code={c.code} issuer={c.issuer} level={c.level} size={52} />
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium text-white">{c.title}</p>
                            <p className="mt-0.5 font-mono text-[10px] text-zinc-500">{c.issuer} · {c.level}</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <CertModal cert={open} onClose={() => setOpen(null)} />
    </section>
  );
}
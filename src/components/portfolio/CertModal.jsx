import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle2, ExternalLink } from "lucide-react";
import CertBadge from "./CertBadge";

export default function CertModal({ cert, onClose }) {
  return (
    <Dialog open={!!cert} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-md rounded-3xl border-white/10 bg-[#0d0d0d] text-white">
        {cert && (
          <>
            <div className="flex items-center gap-5">
              <CertBadge code={cert.code} issuer={cert.issuer} level={cert.level} size={88} />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#6cb8f6]">Preuve de compétence</p>
                <DialogTitle className="mt-1 text-lg font-semibold leading-snug">{cert.title}</DialogTitle>
                <DialogDescription className="mt-1 font-mono text-xs text-zinc-500">{cert.issuer} · Niveau {cert.level}</DialogDescription>
              </div>
            </div>
            {cert.domains && cert.domains.length > 0 && (
              <div className="mt-2 rounded-2xl border border-white/[0.06] bg-black/40 p-5">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-zinc-500">Domaines clés vérifiés</p>
                <ul className="space-y-2.5">
                  {cert.domains.map((d) => (
                    <li key={d} className="flex gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0078D4]" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <a href={cert.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0078D4] px-5 py-3 text-sm font-medium hover:bg-[#1a8ae0]">
              Voir sur le site officiel <ExternalLink className="h-4 w-4" />
            </a>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
import React, { useEffect, useState } from "react";
import { PROFILE } from "@/lib/portfolioData";

export default function Footer() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("fr-FR", { timeZone: "Europe/Paris" }));
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="border-t border-white/[0.06] px-6 pt-14 pb-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-lg font-semibold text-white">{PROFILE.name}</p>
            <p className="mt-1 text-sm text-zinc-500">Technicien Informatique | Microsoft 365 | Cybersécurité</p>
          </div>
          <div className="grid grid-cols-3 gap-6 font-mono text-[11px]">
            <div><p className="text-zinc-600">HEURE LOCALE</p><p className="mt-1 text-zinc-300">{time}</p></div>
            <div><p className="text-zinc-600">LOCALISATION</p><p className="mt-1 text-zinc-300">St-Étienne-de-Montluc</p></div>
            <div>
              <p className="text-zinc-600">STATUT</p>
              <p className="mt-1 flex items-center gap-1.5 text-emerald-400"><span className="ping-dot h-1.5 w-1.5 rounded-full bg-emerald-400 text-emerald-400" />Ready</p>
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs text-zinc-600">© 2026 Tous droits réservés</p>
      </div>
    </footer>
  );
}
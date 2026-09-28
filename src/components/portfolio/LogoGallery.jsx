import React from "react";

const LOGOS = [
  { name: "Microsoft", color: "#0078D4" },
  { name: "Azure", color: "#0078D4" },
  { name: "Entra ID", color: "#0078D4" },
  { name: "Intune", color: "#0078D4" },
  { name: "Defender", color: "#0078D4" },
  { name: "Cisco", color: "#1BA0D7" },
  { name: "Fortinet", color: "#EE3124" },
  { name: "Stormshield", color: "#3DB2E4" },
  { name: "Cloudflare", color: "#F38020" },
  { name: "GitHub", color: "#ffffff" },
  { name: "Docker", color: "#2496ED" },
  { name: "Linux", color: "#FCC624" },
  { name: "VMware", color: "#607078" },
  { name: "Windows Server", color: "#0078D4" },
];

function Chip({ name, color }) {
  return (
    <div className="group flex shrink-0 items-center gap-3 rounded-2xl border border-white/[0.05] px-6 py-4 grayscale transition-all duration-500 hover:border-white/15 hover:bg-white/[0.02] hover:grayscale-0">
      <span className="h-3 w-3 rounded-sm" style={{ backgroundColor: color }} />
      <span className="whitespace-nowrap text-sm font-medium text-zinc-500 transition-colors group-hover:text-white">{name}</span>
    </div>
  );
}

export default function LogoGallery() {
  const row = [...LOGOS, ...LOGOS];
  return (
    <section className="mx-auto max-w-6xl px-6 py-12" aria-label="Écosystème technologique">
      <p className="mb-8 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-600">Écosystème technologique</p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="animate-marquee flex w-max gap-3">
          {row.map((l, i) => <Chip key={l.name + i} {...l} />)}
        </div>
      </div>
    </section>
  );
}
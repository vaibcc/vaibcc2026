import React, { useRef } from "react";
import CertBadge from "./CertBadge";

export default function CertCard({ cert, onOpen }) {
  const ref = useRef(null);

  const onMove = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    ref.current.style.setProperty("--mx", `${x * 100}%`);
    ref.current.style.setProperty("--my", `${y * 100}%`);
    ref.current.style.transform = `perspective(800px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = ""; };

  return (
    <button
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={() => onOpen(cert)}
      className="glass glass-hover group relative w-72 shrink-0 overflow-hidden rounded-3xl p-6 text-left transition-transform duration-200"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(108,184,246,0.18), transparent 55%)" }} />
      <div className="relative flex items-start justify-between">
        <CertBadge code={cert.code} issuer={cert.issuer} level={cert.level} size={84} />
        <span className="font-mono text-[10px] text-zinc-500">{cert.issuer}</span>
      </div>
      <p className="relative mt-6 font-mono text-[11px] text-[#6cb8f6]">Certifié · {cert.level}</p>
      <h3 className="relative mt-1 text-base font-medium leading-snug text-white">{cert.title}</h3>
      <p className="relative mt-4 text-xs text-zinc-500 transition-colors group-hover:text-zinc-300">Voir la preuve de compétence →</p>
    </button>
  );
}
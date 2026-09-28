import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { STATS } from "@/lib/portfolioData";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => { ref.current.textContent = Math.round(v) + suffix; } });
    return () => c.stop();
  }, [inView, value, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-2 overflow-hidden rounded-3xl border border-white/[0.07] lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={s.label} className={`bg-[#0a0a0a] p-8 sm:p-10 ${i % 2 === 0 ? "border-r" : "lg:border-r"} ${i < 2 ? "border-b lg:border-b-0" : ""} ${i === 3 ? "lg:border-r-0" : ""} border-white/[0.07]`}>
            <p className="font-mono text-4xl font-medium text-white sm:text-5xl"><Counter value={s.value} suffix={s.suffix} /></p>
            <p className="mt-3 text-sm text-zinc-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import React from "react";
import { motion } from "framer-motion";

export default function SkillCard({ group }) {
  const avg = Math.round(group.items.reduce((a, [, v]) => a + v, 0) / group.items.length);
  return (
    <div className="glass glass-hover h-full rounded-3xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-medium text-white">{group.category}</h3>
        <span className="flex items-center gap-2 font-mono text-[10px] text-emerald-400">
          <span className="ping-dot h-1.5 w-1.5 rounded-full bg-emerald-400 text-emerald-400" />
          {avg}%
        </span>
      </div>
      <ul className="space-y-4">
        {group.items.map(([name, level], i) => (
          <li key={name + i} className="group">
            <div className="mb-1.5 flex justify-between text-sm">
              <span className="text-zinc-300 transition-colors group-hover:text-white">{name}</span>
              <span className="font-mono text-xs text-zinc-500">{level}</span>
            </div>
            <div className="h-1 overflow-hidden rounded-full bg-white/[0.06]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#0078D4] to-[#6cb8f6]"
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
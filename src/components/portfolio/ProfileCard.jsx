const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import React from "react";
import { BadgeCheck } from "lucide-react";
import { Image } from "@/components/ui/image";
import { PROFILE } from "@/lib/portfolioData";

export default function ProfileCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-[#0078D4]/60 via-transparent to-[#0078D4]/20" />
      <div className="relative overflow-hidden rounded-[28px] bg-[#0b0b0b]">
        <div className="group relative aspect-[4/5] overflow-hidden">
          <Image src="https://media.db.com/images/public/6aba16066f284f533f294cd1/7b0182119_666667.png" alt="Photo de profil de Vaibhav Kamra" className="h-full w-full object-cover transition-all duration-[1.5s] group-hover:scale-105 group-hover:saturate-150" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b] via-transparent to-transparent" />
          <div className="absolute left-4 top-4 font-mono text-[10px] text-zinc-400">ID://VK-001</div>
        </div>
        <div className="glass absolute inset-x-4 bottom-4 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">{PROFILE.name}</p>
              <p className="text-xs text-zinc-400">{PROFILE.role}</p>
            </div>
            <BadgeCheck className="h-6 w-6 text-[#0078D4]" />
          </div>
          <div className="mt-3 flex gap-1.5">
            {["SC-300", "AZ-900", "MS-900"].map((c) => (
              <span key={c} className="rounded-md border border-[#0078D4]/30 bg-[#0078D4]/10 px-2 py-0.5 font-mono text-[10px] text-[#6cb8f6]">{c}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
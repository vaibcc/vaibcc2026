import React, { useState } from "react";
import { Download, Loader2, Check } from "lucide-react";
import { generateCV } from "@/lib/generateCV";

export default function CVButton({ className = "" }) {
  const [state, setState] = useState("idle");

  const handle = async () => {
    setState("loading");
    await generateCV();
    setState("done");
    setTimeout(() => setState("idle"), 2200);
  };

  const Icon = state === "loading" ? Loader2 : state === "done" ? Check : Download;
  return (
    <button
      onClick={handle}
      disabled={state === "loading"}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0078D4] px-6 py-3.5 text-sm font-medium text-white shadow-[0_10px_40px_-10px_rgba(0,120,212,0.7)] transition-all hover:bg-[#1a8ae0] hover:shadow-[0_10px_50px_-8px_rgba(0,120,212,0.9)] disabled:opacity-80 ${className}`}
    >
      <Icon className={`h-4 w-4 ${state === "loading" ? "animate-spin" : "transition-transform group-hover:translate-y-0.5"}`} />
      {state === "done" ? "CV téléchargé" : "Télécharger mon CV"}
    </button>
  );
}
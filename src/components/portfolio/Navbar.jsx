import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const current = NAV.filter((n) => {
        const el = document.getElementById(n.id);
        return el && el.getBoundingClientRect().top < 160;
      }).pop();

      setActive(current ? current.id : "");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`glass flex w-full items-center justify-between rounded-2xl px-4 transition-all duration-500 ${
          scrolled
            ? "max-w-4xl py-2.5"
            : "max-w-6xl py-4 bg-transparent border-transparent"
        }`}
      >
        <a
          href="#top"
          className="flex items-center rounded-lg bg-[#0078D4] text-xs font-bold">
            VK
          </span>
          <span className="hidden font-mono text-xs tracking-wider text-zinc-400 sm:block">
            vaib.cc
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.id} className="relative">
              {active === n.id && (
                <motion.span
                  layoutId="nav-focus"
                  className="absolute inset-0 rounded-lg border border-[#0078D4]/50 bg-[#0078D4]/10"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                />
              )}

              <a
                href={`#${n.id}`}
                className={`relative block px-3.5 py-1.5 text-sm transition-colors ${
                  active === n.id
              ="relative block px-3.5 py-1.5 text-sm text-zinc-400 hover:text-white"
text-zinc-300"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass absolute inset-x-4 top-20 rounded-2xl p-3 md:hidden"
          >
            {NAV.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-zinc-300 hover:bg       {n.label}
                </a>
              </li>
            ))}

            <li>
              <a
                href="/labs"
                onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3          >
                Labs
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}

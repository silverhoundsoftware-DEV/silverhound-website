"use client";

import { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-[9999] w-full px-4 py-4 sm:px-6 lg:px-10">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/5 bg-transparent px-5 py-3 text-white backdrop-blur-md">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/silverhound_logo_updated2.png"
            alt="Silverhound Logo"
            className="h-10 w-auto object-contain sm:h-11"
          />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/60 transition duration-300 hover:text-yellow-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="relative z-[10000] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/30 transition duration-300 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-white transition duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-white transition duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-white transition duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        className={`mx-auto mt-3 max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-black/85 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${
          open
            ? "max-h-96 translate-y-0 opacity-100"
            : "max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 p-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 text-xs font-medium uppercase tracking-[0.25em] text-white/70 transition duration-300 hover:bg-white/10 hover:text-yellow-200"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
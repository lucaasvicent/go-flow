"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/#destinos", label: "Destinos" },
  { href: "/#sobre", label: "Sobre" },
  { href: "/#faq", label: "FAQ" },
  { href: "#contact", label: "Contatos" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 px-6 py-3 transition-colors duration-300
          ${scrolled ? "bg-blue-900/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"}
        `}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" aria-label="Go Flow — página inicial" className="flex items-center gap-4">
            <Image
              src="/logoTransFontBranca.png"
              alt="Go Flow"
              width={100}
              height={100}
              priority
              className="rounded-full w-16 h-16 md:w-20 md:h-20"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-white hover:text-blue-300 transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-menu"
            >
              <Menu size={28} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        aria-hidden={!drawerOpen}
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900/90 backdrop-blur-md z-[70] transform transition-transform duration-300
        ${drawerOpen ? "translate-x-0" : "translate-x-full invisible"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setDrawerOpen(false)} aria-label="Fechar menu">
            <X size={28} className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-6 px-6 mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setDrawerOpen(false)}
              className="text-white hover:text-blue-300 text-lg"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[60]"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </>
  );
}

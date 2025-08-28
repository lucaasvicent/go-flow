"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Menu } from "lucide-react";

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`
           top-0 left-0 w-full z-50 px-6 py-3 transition-colors duration-300
          ${scrolled ? "bg-blue-900/80 backdrop-blur-md" : "bg-blue-500/ backdrop-blur-sm"}
          border-b border-gray-900/10
        `}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div onClick={() => router.push("/")} className="flex items-center gap-4 cursor-pointer">
            <Image
              src="/logoTransFontBranca.png"
              alt="Go Flow"
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/places" className="text-white hover:text-blue-400 transition-colors">Locais</Link>
            <Link href="#contact" className="text-white hover:text-blue-400 transition-colors">Contatos</Link>
            <Link href="/login" className="text-white hover:text-blue-400 transition-colors">Criar conta</Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setDrawerOpen(true)}>
              <Menu size={28} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-900/90 backdrop-blur-md z-99 transform transition-transform duration-300
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setDrawerOpen(false)}>
            <X size={28} className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-6 px-6 mt-10">
          <Link href="/places" onClick={() => setDrawerOpen(false)} className="text-white hover:text-blue-400 text-lg">
            Locais
          </Link>
          <Link href="#contact" onClick={() => setDrawerOpen(false)} className="text-white hover:text-blue-400 text-lg">
            Contatos
          </Link>
          <Link href="/login" onClick={() => setDrawerOpen(false)} className="text-white hover:text-blue-400 text-lg">
            Criar conta
          </Link>
        </nav>
      </div>

      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </>
  );
}

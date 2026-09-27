"use client";

import { useEffect, useState, useTransition } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { X, Menu } from "lucide-react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";

const sections = [
  { hash: "destinations", key: "destinations" },
  { hash: "about", key: "about" },
  { hash: "faq", key: "faq" },
  { hash: "contact", key: "contact" },
] as const;

function LanguageSwitcher({ className = "" }: { className?: string }) {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (nextLocale: Locale) => {
    startTransition(() => {
      // pathname e params sempre correspondem à rota atual, então a combinação é válida.
      // @ts-expect-error -- o TypeScript não consegue relacionar pathname e params dinamicamente
      router.replace({ pathname, params }, { locale: nextLocale });
    });
  };

  return (
    <div role="group" aria-label={t("language")} className={`flex items-center gap-1 text-sm ${className}`}>
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          disabled={isPending}
          aria-pressed={l === locale}
          onClick={() => changeLocale(l)}
          className={`px-2 py-1 rounded-md uppercase transition-colors ${
            l === locale ? "bg-white/20 text-white font-semibold" : "text-white/70 hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}

export default function Header() {
  const t = useTranslations("Header");
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
          <Link href="/" aria-label={t("homeLabel")} className="flex items-center gap-4">
            <Image
              src="/logoTransFontBranca.png"
              alt="Go Flow"
              width={100}
              height={100}
              priority
              className="rounded-full w-16 h-16 md:w-20 md:h-20"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {sections.map((section) => (
                <Link
                  key={section.hash}
                  href={{ pathname: "/", hash: section.hash }}
                  className="text-white hover:text-blue-300 transition-colors"
                >
                  {t(section.key)}
                </Link>
              ))}
            </nav>
            <LanguageSwitcher />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label={t("openMenu")}
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
          <button onClick={() => setDrawerOpen(false)} aria-label={t("closeMenu")}>
            <X size={28} className="text-white" />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-6 px-6 mt-10">
          {sections.map((section) => (
            <Link
              key={section.hash}
              href={{ pathname: "/", hash: section.hash }}
              onClick={() => setDrawerOpen(false)}
              className="text-white hover:text-blue-300 text-lg"
            >
              {t(section.key)}
            </Link>
          ))}
        </nav>

        <LanguageSwitcher className="px-5 mt-10" />
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

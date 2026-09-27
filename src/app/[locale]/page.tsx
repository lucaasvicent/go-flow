import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/routing";
import About from "../components/sections/About";
import FAQ from "../components/sections/FAQ";
import Hero from "../components/sections/Hero";
import Solutions from "../components/sections/Solutions";

export default function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Solutions />
      <About />
      <FAQ />
    </>
  );
}

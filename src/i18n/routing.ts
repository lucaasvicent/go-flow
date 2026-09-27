import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  // Português fica sem prefixo (/), inglês em /en.
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/destinos/[slug]": {
      pt: "/destinos/[slug]",
      en: "/destinations/[slug]",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

// Valor do atributo lang do <html> e do og:locale para cada idioma.
export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en" };
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US" };

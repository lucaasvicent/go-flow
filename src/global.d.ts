import type { routing } from "@/i18n/routing";
import type messages from "../messages/pt.json";

// Tipagem das chaves de tradução: o português é a fonte da verdade.
declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}

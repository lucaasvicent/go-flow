"use client";

// Tela de carregamento reutilizável. Use num loading.tsx de rotas dinâmicas (ex.: destinos/[slug]),
// não no nível de [locale]: ali ela faria páginas inexistentes responderem 200 em vez de 404.

import { Plane } from "lucide-react";
import { useTranslations } from "next-intl";

export default function LoadingScreen() {
  const t = useTranslations("Loading");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white px-6 text-center">

      <Plane className="text-blue-300 w-16 h-16 animate-bounce" />

      <h1 className="mt-6 text-3xl font-bold">{t("title")}</h1>
      <p className="mt-2 text-blue-200 max-w-lg">{t("text")}</p>

      <div className="mt-8 flex space-x-2">
        <span className="w-4 h-4 bg-blue-300 rounded-full animate-pulse-dot [animation-delay:0.1s]"></span>
        <span className="w-4 h-4 bg-blue-300 rounded-full animate-pulse-dot [animation-delay:0.2s]"></span>
        <span className="w-4 h-4 bg-blue-300 rounded-full animate-pulse-dot [animation-delay:0.3s]"></span>
      </div>
    </div>
  );
}

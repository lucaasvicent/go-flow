import { notFound } from "next/navigation";

// Qualquer rota desconhecida dentro de um idioma cai no [locale]/not-found.tsx traduzido.
export default function CatchAllPage() {
  notFound();
}

import { Plane } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 text-white px-6 text-center relative overflow-hidden">

      <Plane className="absolute top-24 animate-sway text-white opacity-70" size={50} />

      <div className="absolute top-32 left-10 w-24 h-12 bg-white/30 rounded-full animate-drift"></div>
      <div className="absolute top-52 right-20 w-32 h-16 bg-white/25 rounded-full animate-drift-slow"></div>

      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">{t("title")}</h1>
      <p className="max-w-xl text-lg text-blue-100 mb-8">{t("text")}</p>

      <Link
        href="/"
        className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:bg-blue-50 transition-all flex items-center gap-2"
      >
        {t("back")}
      </Link>

      <div className="mt-12 opacity-70 text-sm">
        {t.rich("tagline", {
          flow: (chunks) => <span className="text-blue-100 font-semibold">{chunks}</span>,
        })}
      </div>
    </div>
  );
}

import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative flex h-svh w-full items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster="/sky-background-poster.jpg"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover bg-slate-900"
      >
        <source src="/sky-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Go Flow
        </h1>
        <p className="mt-4 text-2xl md:text-3xl text-gray-200 drop-shadow-md">
          {t.rich("tagline", {
            flow: (chunks) => <span className="text-blue-400 font-semibold">{chunks}</span>,
          })}
        </p>
      </div>
    </section>
  );
}

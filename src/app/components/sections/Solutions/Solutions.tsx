import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Slugs neutros de idioma: nome em ASCII + código do país (ISO 3166-1), como no GeoNames.
const destinations = [
  { slug: "rio-de-janeiro-br", image: "/carousel/RJ.webp" },
  { slug: "london-gb", image: "/carousel/london.webp" },
  { slug: "new-york-us", image: "/carousel/newYork.webp" },
  { slug: "monaco-mc", image: "/carousel/monaco.webp" },
  { slug: "machu-picchu-pe", image: "/carousel/machu-picchu.webp" },
  { slug: "rome-it", image: "/carousel/coliseum.webp" },
] as const;

export default function Solutions() {
  const t = useTranslations("Destinations");

  // A lista é duplicada para o loop: a animação desloca -50% e recomeça sem salto.
  const loop = [...destinations, ...destinations];

  return (
    <section id="destinations" className="bg-white py-12 scroll-mt-24">
      <div className="text-center mb-8 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500">{t("title")}</h2>
        <p className="text-gray-500 mt-2">{t("subtitle")}</p>
      </div>

      <div className="group overflow-hidden">
        <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          {loop.map((destination, index) => {
            const isClone = index >= destinations.length;
            const name = t(`items.${destination.slug}.name`);
            const country = t(`items.${destination.slug}.country`);

            return (
              <li
                key={`${destination.slug}-${index}`}
                aria-hidden={isClone}
                className="w-64 sm:w-72 lg:w-96 shrink-0 px-2"
              >
                <Link
                  href={{ pathname: "/destinos/[slug]", params: { slug: destination.slug } }}
                  tabIndex={isClone ? -1 : undefined}
                  className="block h-56 rounded-xl overflow-hidden shadow-lg relative"
                >
                  <Image
                    src={destination.image}
                    alt={`${name}, ${country}`}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 288px, 256px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-2">
                    <span className="font-semibold">{name}</span>
                    <span className="block text-xs text-gray-200">{country}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

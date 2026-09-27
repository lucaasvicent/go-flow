import Image from "next/image";
import Link from "next/link";

const destinations = [
  { slug: "rio-de-janeiro-brasil", image: "/carousel/RJ.webp", name: "Rio de Janeiro", country: "Brasil" },
  { slug: "londres-reino-unido", image: "/carousel/london.webp", name: "Londres", country: "Reino Unido" },
  { slug: "nova-york-estados-unidos", image: "/carousel/newYork.webp", name: "Nova York", country: "Estados Unidos" },
  { slug: "monaco-monaco", image: "/carousel/monaco.webp", name: "Mônaco", country: "Mônaco" },
  { slug: "machu-picchu-peru", image: "/carousel/machu-picchu.webp", name: "Machu Picchu", country: "Peru" },
  { slug: "roma-italia", image: "/carousel/coliseum.webp", name: "Roma", country: "Itália" },
];

export default function Solutions() {
  // A lista é duplicada para o loop: a animação desloca -50% e recomeça sem salto.
  const loop = [...destinations, ...destinations];

  return (
    <section id="destinos" className="bg-white py-12 scroll-mt-24">
      <div className="text-center mb-8 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Destinos em destaque</h2>
        <p className="text-gray-500 mt-2">Cultura, curiosidades e lugares imperdíveis ao redor do mundo</p>
      </div>

      <div className="group overflow-hidden">
        <ul className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]">
          {loop.map((destination, index) => {
            const isClone = index >= destinations.length;

            return (
              <li
                key={`${destination.slug}-${index}`}
                aria-hidden={isClone}
                className="w-64 sm:w-72 lg:w-96 shrink-0 px-2"
              >
                <Link
                  href={`/destinos/${destination.slug}`}
                  tabIndex={isClone ? -1 : undefined}
                  className="block h-56 rounded-xl overflow-hidden shadow-lg relative"
                >
                  <Image
                    src={destination.image}
                    alt={`${destination.name}, ${destination.country}`}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 288px, 256px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white text-center py-2">
                    <span className="font-semibold">{destination.name}</span>
                    <span className="block text-xs text-gray-200">{destination.country}</span>
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

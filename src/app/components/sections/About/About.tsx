import { useTranslations } from "next-intl";
import ImageToText from "./components/ImageToText";

const blocks = [
  { key: "who", image: "/beach-chair.webp", reverse: false },
  { key: "mission", image: "/carousel/coliseum.webp", reverse: true },
  { key: "values", image: "/values.webp", reverse: false },
] as const;

export default function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="flex flex-col items-center justify-center py-12 text-center bg-white scroll-mt-24">
      {blocks.map(({ key, image, reverse }) => (
        <ImageToText
          key={key}
          image={image}
          title={t(`${key}.title`)}
          paragraphs={t.raw(`${key}.paragraphs`) as string[]}
          alt={t(`${key}.alt`)}
          reverse={reverse}
        />
      ))}
    </section>
  );
}

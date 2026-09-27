import ImageToText from "./components/ImageToText";

export default function About() {
  return (
    <section id="sobre" className="flex flex-col items-center justify-center py-12 text-center bg-white scroll-mt-24">
      <ImageToText
        image="/beach-chair.webp"
        title="Quem somos?"
        paragraphs={[
          "Somos uma plataforma para quem quer conhecer um destino de verdade antes mesmo de chegar lá. Reunimos a cultura, as curiosidades e os lugares imperdíveis de cada cidade em um só lugar.",
        ]}
        alt="Uma cadeira de praia em um lago"
      />

      <ImageToText
        image="/carousel/coliseum.webp"
        title="Nossa missão"
        paragraphs={[
          "Viajar é mais do que visitar pontos turísticos — é entender os costumes, provar a comida típica e se conectar com as pessoas do lugar.",
          "Nossa missão é ajudar você a chegar preparado: sabendo como agir, o que experimentar e o que torna cada destino único.",
        ]}
        alt="Coliseu, em Roma"
        reverse
      />

      <ImageToText
        image="/values.webp"
        title="Nossos valores"
        paragraphs={[
          "Autenticidade, curiosidade e respeito. Valorizamos informações com fonte, dicas de quem já esteve lá e viagens que respeitam as culturas e o meio ambiente de cada destino.",
        ]}
        alt="Cidade iluminada à noite"
      />
    </section>
  );
}

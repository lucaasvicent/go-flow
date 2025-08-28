import ImageToText from "./components/ImageToText";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center bg-white">
      <ImageToText
        image="/beach-chair.jpg"
        title="Quem somos?"
        text="Somos uma plataforma pensada para quem busca explorar o mundo com autenticidade, fluidez e confiança. Trabalhamos para que cada etapa da sua viagem seja tranquila: desde a inspiração e o planejamento até os momentos inesquecíveis que você vai viver no destino."
        alt="Uma cadeira de praia em um lago"
      />

      <ImageToText
        image="/carousel/coliseum.jpg"
        title="Nossa missão"
        text="Na Go Flow, nossa missão é transformar cada viagem em uma experiência única e inesquecível. Queremos que explorar o mundo seja simples, inspirador e cheio de significado, conectando pessoas a culturas, histórias e lugares de forma autêntica.

        Acreditamos que viajar é mais do que visitar pontos turísticos — é viver momentos, aprender com novas culturas e criar memórias que ficam para sempre. Por isso, trabalhamos para oferecer uma plataforma intuitiva, confiável e completa, que ajude nossos usuários a planejar, descobrir e aproveitar cada viagem ao máximo.

        Nossa missão é clara: tornar o mundo mais acessível, fluido e emocionante para todos que desejam explorar, aprender e se conectar."
        alt="Coliseu"
        reverse
      />

      <ImageToText
        image="/values.jpg"
        title="Nossos valores"
        text="Na Go Flow, valorizamos experiências autênticas, permitindo que cada viagem seja uma verdadeira imersão em novas culturas. Buscamos fluidez e simplicidade, tornando o planejamento e a vivência de cada destino intuitivos e prazerosos. Inspiramos a descoberta, incentivando nossos usuários a explorar, aprender e criar memórias inesquecíveis. Tudo isso com confiança, transparência e respeito ao meio ambiente, promovendo viagens conscientes e acessíveis a todos."
        alt="Cidade iluminada à noite"
      />
    </div>
  );
}

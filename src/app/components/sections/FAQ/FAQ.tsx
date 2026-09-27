import { CircleDollarSign, CircleUser, Globe, Hotel, Landmark, Lightbulb, MessageCircleQuestionMark, Users } from "lucide-react";

const faqs = [
  {
    question: "O que é a Go Flow?",
    answer: "Uma plataforma para conhecer destinos pelo que eles têm de mais especial: cultura, costumes, curiosidades, comida típica e os lugares que valem a visita.",
    icon: MessageCircleQuestionMark,
  },
  {
    question: "Como a Go Flow me ajuda a planejar minha viagem?",
    answer: "Em cada destino você encontra dicas de etiqueta local, frases úteis, a melhor época para ir, atrações, restaurantes e hospedagens — tudo reunido em uma página.",
    icon: Lightbulb,
  },
  {
    question: "De onde vêm as informações?",
    answer: "De fontes abertas e confiáveis, como Wikipedia, Wikivoyage e OpenStreetMap, sempre com a fonte indicada, somadas às dicas da nossa comunidade de viajantes.",
    icon: Landmark,
  },
  {
    question: "Preciso pagar para usar a Go Flow?",
    answer: "Não. Explorar os destinos é gratuito.",
    icon: CircleDollarSign,
  },
  {
    question: "Quais destinos estão disponíveis?",
    answer: "A ideia é cobrir cidades do mundo todo. Começamos pelos destinos mais procurados e ampliamos a lista continuamente.",
    icon: Globe,
  },
  {
    question: "Posso reservar hotéis e passeios pela plataforma?",
    answer: "Nós recomendamos, e a reserva é feita diretamente no site de parceiros conhecidos, com as condições e a segurança de cada um.",
    icon: Hotel,
  },
  {
    question: "Preciso criar uma conta?",
    answer: "Não para explorar. Com uma conta você poderá salvar destinos favoritos, montar roteiros e contribuir com avaliações e dicas.",
    icon: CircleUser,
  },
  {
    question: "Posso contribuir com dicas?",
    answer: "Sim! Viajantes poderão compartilhar dicas e curiosidades sobre os lugares que conhecem, e a comunidade vota nas mais úteis.",
    icon: Users,
  },
];

const half = Math.ceil(faqs.length / 2);
const columns = [faqs.slice(0, half), faqs.slice(half)];

export default function FAQ() {
  return (
    <section id="faq" className="w-full max-w-6xl mx-auto py-16 px-6 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500">Perguntas frequentes</h2>
        <p className="text-gray-500 mt-2">
          Aqui estão algumas das dúvidas mais comuns sobre a Go Flow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-10 border-l-2 border-gray-200 pl-8 ml-5">
            {column.map(({ question, answer, icon: Icon }) => (
              <div key={question} className="relative">
                <div className="absolute -left-[3.3rem] top-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-500">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

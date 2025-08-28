"use client";
import { CircleDollarSign, CircleUser, HandHelping, HeartHandshake, Hotel, Lightbulb, LightbulbIcon, MapPinned, MessageCircleQuestionMark, ShieldCheck } from "lucide-react";

const faqs = [
  {
    question: "O que é a Go Flow?", answer: "O Go Flow é uma plataforma pensada para simplificar sua jornada de viagem, conectando você a experiências autênticas, opções de hospedagem e atividades personalizadas.", icon: <MessageCircleQuestionMark size={20} />
  },
  {
    question: "Como a Go Flow me ajuda a planejar minha viagem?", answer: "Você encontra inspirações, sugestões de roteiros e ferramentas para organizar sua viagem de forma prática e fluida — tudo em um só lugar.", icon: <Lightbulb size={20} />
  },
  {
    question: "Preciso pagar para usar a Go Flow?", answer: "A navegação básica é gratuita. Algumas funcionalidades premium, como recomendações exclusivas e pacotes personalizados, podem ter custo adicional.", icon: <CircleDollarSign size={20} />
  },
  {
    question: "Posso reservar hospedagem e passeios direto pela plataforma?", answer: "Sim! A Go Flow conecta você a parceiros de confiança, permitindo reservar hospedagens, passeios e experiências sem sair da plataforma.", icon: <Hotel size={20} />
  },
  {
    question: "A Go Flow funciona apenas no Brasil?", answer: "Não. Embora tenhamos forte presença no Brasil, a Go Flow oferece experiências em diversos destinos internacionais.", icon: <MapPinned size={20} />
  },
  {
    question: "É seguro usar a Go Flow para reservar minha viagem?", answer: "Sim. Trabalhamos apenas com parceiros certificados e utilizamos meios de pagamento seguros para proteger suas informações.", icon: <ShieldCheck size={20} />
  },
  {
    question: "A Go Flow pode me ajudar a encontrar experiências locais autênticas?", answer: "Com certeza! Nosso foco é conectar você a atividades culturais, gastronômicas e imersivas que tornam cada viagem única.", icon: <LightbulbIcon size={20} />
  },
  {
    question: "Preciso criar uma conta para usar?", answer: "Não para explorar os destinos. Mas, ao criar uma conta, você terá acesso a funcionalidades exclusivas como salvar roteiros, personalizar sua experiência e receber recomendações personalizadas.", icon: <CircleUser size={20} />
  },
  {
    question: "A Go Flow oferece suporte em caso de problemas durante a viagem?", answer: "Sim. Nossa equipe de suporte está disponível para auxiliar com dúvidas ou imprevistos, em parceria com os prestadores locais.", icon: <HandHelping size={20} />
  },
  {
    question: "O que diferencia a Go Flow de outras plataformas de viagem?", answer: "A fluidez: reunimos inspiração, planejamento e reservas em uma experiência única, com foco em autenticidade e confiança.", icon: <HeartHandshake size={20} />
  },
];

export default function FAQ() {
  const firstHalf = faqs.slice(0, 5);
  const secondHalf = faqs.slice(5);

  return (
    <section className="w-full max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500">FAQ - Go Flow</h2>
        <p className="text-gray-500 mt-2">
          Aqui estão algumas das perguntas mais frequentes sobre a Go Flow
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        <div className="space-y-10 relative border-l-2 border-gray-200 pl-6">
          {firstHalf.map((faq, index) => (
            <div key={index}>
              <div className="absolute -left-5 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-500">
                {faq.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="space-y-10 relative border-l-2 border-gray-200 pl-6">
          {secondHalf.map((faq, index) => (
            <div key={index}>
              <div className="absolute -left-5 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-500">
                {faq.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

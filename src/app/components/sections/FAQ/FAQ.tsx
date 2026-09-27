import { CircleDollarSign, CircleUser, Globe, Hotel, Landmark, Lightbulb, MessageCircleQuestionMark, Users } from "lucide-react";
import { useTranslations } from "next-intl";

// A ordem aqui define a ordem na página; os textos ficam em messages/*.json (FAQ.items).
const faqs = [
  { key: "what", icon: MessageCircleQuestionMark },
  { key: "planning", icon: Lightbulb },
  { key: "sources", icon: Landmark },
  { key: "price", icon: CircleDollarSign },
  { key: "coverage", icon: Globe },
  { key: "booking", icon: Hotel },
  { key: "account", icon: CircleUser },
  { key: "contribute", icon: Users },
] as const;

const half = Math.ceil(faqs.length / 2);
const columns = [faqs.slice(0, half), faqs.slice(half)];

export default function FAQ() {
  const t = useTranslations("FAQ");

  return (
    <section id="faq" className="w-full max-w-6xl mx-auto py-16 px-6 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-500">{t("title")}</h2>
        <p className="text-gray-500 mt-2">{t("subtitle")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-10 border-l-2 border-gray-200 pl-8 ml-5">
            {column.map(({ key, icon: Icon }) => (
              <div key={key} className="relative">
                <div className="absolute -left-[3.3rem] top-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 text-blue-500">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`items.${key}.question`)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t(`items.${key}.answer`)}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

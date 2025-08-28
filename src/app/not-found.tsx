'use client';
import { Plane } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-700 via-blue-500 to-blue-400 text-white px-6 text-center relative overflow-hidden">

      <Plane className="absolute top-10 animate-bounce-left text-white opacity-70" size={50} />

      <div className="absolute top-20 left-10 w-24 h-12 bg-white/30 rounded-full animate-cloud"></div>
      <div className="absolute top-40 right-20 w-32 h-16 bg-white/25 rounded-full animate-cloud-slow"></div>

      <h1 className="text-6xl font-extrabold mb-4">Em Construção</h1>
      <p className="max-w-xl text-lg text-blue-100 mb-8">
        Essa parte do Go Flow ainda está sendo preparada para você explorar.
        Em breve, novas aventuras estarão disponíveis!
      </p>

      <Link
        href="/"
        className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:bg-blue-50 transition-all flex items-center gap-2"
      >
        Voltar ao Início
      </Link>

      <div className="mt-12 opacity-70 text-sm">
        Go Flow — Conheça culturas, viva o
        <span className="text-blue-100 font-semibold"> Flow!</span>
      </div>

      <style jsx>{`
        @keyframes cloud {
          0% { transform: translateX(-100px); }
          100% { transform: translateX(100vw); }
        }
        .animate-cloud {
          animation: cloud 25s linear infinite;
        }
        @keyframes cloud-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(100vw); }
        }
        .animate-cloud-slow {
          animation: cloud-slow 40s linear infinite;
        }
        @keyframes bounce-left {
          0%, 100% { transform: translateX(-20px); }
          50% { transform: translateX(20px); }
        }
        .animate-bounce-left {
          animation: bounce-left 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

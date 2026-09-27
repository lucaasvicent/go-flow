import { Plane } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-600 text-white px-6 text-center">

      <Plane className="text-blue-300 w-16 h-16 animate-bounce" />

      <h1 className="mt-6 text-3xl font-bold">Carregando sua próxima aventura...</h1>
      <p className="mt-2 text-blue-200 max-w-lg">
        Prepare-se para explorar experiências incríveis com o Go Flow.
      </p>

      <div className="mt-8 flex space-x-2">
        <span className="w-4 h-4 bg-blue-300 rounded-full animate-pulse-dot [animation-delay:0.1s]"></span>
        <span className="w-4 h-4 bg-blue-300 rounded-full animate-pulse-dot [animation-delay:0.2s]"></span>
        <span className="w-4 h-4 bg-blue-300 rounded-full animate-pulse-dot [animation-delay:0.3s]"></span>
      </div>
    </div>
  );
}

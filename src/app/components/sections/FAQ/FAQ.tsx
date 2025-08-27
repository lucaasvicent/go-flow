export default function FAQ() {
  return (
    <div className="flex flex-col items-center justify-center bg-red-50">
      <div>
        {/* container das questões */}
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Aqui você encontrará respostas para as perguntas mais frequentes sobre o projeto.
          </p>
        </div>
      </div>
    </div>
  )
};
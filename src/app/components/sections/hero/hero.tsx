import Header from "../../layout/header/Header";

export default function Hero() {
  return (
    <div className="relative flex h-svh w-full items-center justify-center overflow-hidden">
      <div className="absolute top-0 w-full h-full z-10">
        <Header />
      </div>
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/sky-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg">
          Go Flow
        </h1>
        <p
          className="mt-4 text-2xl md:text-3xl text-gray-200 drop-shadow-md">
          Conheça culturas, viva o{" "}
          <span
            className="text-blue-400 font-semibold">
            Flow!
          </span>
        </p>
      </div>
    </div>
  )
}

import Image from "next/image";

interface ImageToTextProps {
  image: string;
  title: string;
  text: string;
  alt: string;
  reverse?: boolean; 
}

export default function ImageToText({ image, text, title, alt, reverse = false }: ImageToTextProps) {
  return (
    <div
      className={`
        flex flex-col sm:flex-row items-center justify-center py-12 sm:px-60 px-4 bg-white
        ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}
      `}
    >
      {/* imagem */}
      <div className="sm:w-1/2 flex justify-center mb-6 sm:mb-0">
        <Image
          alt={alt}
          src={image}
          width={400}
          height={300}
          className="rounded-full shadow-xl"
        />
      </div>

      {/* texto */}
      <div className="sm:w-1/2 text-center sm:text-left">
        <h1 className="text-4xl font-bold text-blue-400">{title}</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-4xl">{text}</p>
      </div>
    </div>
  );
}

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
        flex flex-col sm:flex-row items-center justify-center py-12 px-4 sm:px-12 lg:px-24
        gap-8 sm:gap-12
        ${reverse ? 'sm:flex-row-reverse' : ''}
      `}
    >

      <div className="sm:w-1/2 flex justify-center">
        <Image
          alt={alt}
          src={image}
          width={500}
          height={400}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg rounded-xl shadow-xl object-cover"
        />
      </div>

      <div className="sm:w-1/2 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-500 max-w-full sm:max-w-xl">
          {text}
        </p>
      </div>
    </div>
  );
}

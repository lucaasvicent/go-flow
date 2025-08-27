'use client';
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Solutions() {
  const slides = [
    { id: 1, image: "/carousel/RJ.jpg", title: 'Rio de Janeiro', url: 'https://maps.app.goo.gl/PW7pi7yf7pNJhnCy8' },
    { id: 2, image: "/carousel/london.jpg", title: 'Londres', url: 'https://maps.app.goo.gl/9LZBNEK1fgjLYKj78' },
    { id: 3, image: "/carousel/newYork.jpg", title: 'Nova York', url: 'https://maps.app.goo.gl/ZKpxrXa8wSbHAEi5A' },
    { id: 4, image: "/carousel/monaco.jpg", title: 'Mônaco', url: 'https://maps.app.goo.gl/9rDpvwPciAmmN3rN9' },
    { id: 5, image: "/carousel/machu-picchu.jpg", title: 'Machu Pichu', url: 'https://maps.app.goo.gl/oKKadNV3QQe2DTSSA' },
    { id: 6, image: "/carousel/coliseum.jpg", title: 'Roma', url: 'https://maps.app.goo.gl/Qfq4wmjJER4ZV2Tv7' },
  ];

  const loopSlides = [...slides, ...slides];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1)
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide >= slides.length) {
      setTimeout(() => {
        setCurrentSlide(0);
      }, 5000);
    }
  }, [currentSlide, slides.length]);

  return (
    <div className="bg-white relative w-full max-auto mx-auto overflow-hidden p-2">
      <div
        className="flex transition-transform duration-700 ease-in-out bg-white"
        style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
      >
        {loopSlides.map((slide) => (
          <div
            key={slide.id + Math.random()}
            className="w-1/3 flex-shrink-0 px-2"
          >
            <div className="h-56 rounded-xl overflow-hidden shadow-lg relative">
              <Link
                target="_blank"
                href={slide.url}>
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white text-center py-1 text-sm">
                {slide.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
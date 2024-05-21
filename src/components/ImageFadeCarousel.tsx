import { useEffect, useState } from "react";

const ImageFadeCarousel = ({
  images,
  speed,
  position = "-translate-y-full",
}: {
  images: string[];
  speed: number;
  position: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, speed);

    return () => clearInterval(interval);
  }, [images.length, speed]);

  return (
    <div className={"relative overflow-hidden w-full h-full " + position}>
      {images.map((image, index) => (
        <img
          key={index}
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          src={image}
          alt={`Carousel Image ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ImageFadeCarousel;

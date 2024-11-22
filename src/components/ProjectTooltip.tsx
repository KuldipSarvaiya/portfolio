import { ReactElement, useState } from "react";
import ImageFadeCarousel from "./ImageFadeCarousel";

function ProjectTooltip({
  children,
  images,
}: {
  children: ReactElement;
  images: string[];
}) {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setTimeout(() => {
          setShow(true);
        }, 2000);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setShow(false);
        }, 2000);
      }}
    >
      {children}
      {show && <ImageFadeCarousel position="-translate-y-full" images={images} speed={2000} />}
    </div>
  );
}

export default ProjectTooltip;

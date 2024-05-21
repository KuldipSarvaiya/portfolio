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
        }, 1000);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setShow(false);
        }, 1000);
      }}
    >
      {children}
      {show && <ImageFadeCarousel images={images} speed={2000} />}
    </div>
  );
}

export default ProjectTooltip;

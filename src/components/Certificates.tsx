import ImageFadeCarousel from "./ImageFadeCarousel";

function Certificates() {
  return (
    <section
      id="Certificates"
      className="w-screen h-screen snap-start flex flex-col justify-center items-center md:pt-16 pt-14 pb-10"
    >
      <strong className="w-full text-center text-4xl animate-bounce">
        <span className="sec-title italic">My Certificates</span>
      </strong>

      <div className="w-full h-full p-5 relative overflow-hidden">
        <div className="h-full w-full">
          <ImageFadeCarousel
            images={[
              "/certificates/certificate1.jpg",
              "/certificates/certificate2.jpg",
              "/certificates/certificate3.jpg", 
              "/certificates/JavaScript_certificate.jpg",
              "/certificates/NodeJS_certificate.jpg",
              "/certificates/ReactJS_Certificate.jpg",
              "/certificates/web-dev-basics_certificate.jpg",
            ]}
            speed={3000}
            position={""}
          />
        </div>
      </div>
    </section>
  );
}

export default Certificates;

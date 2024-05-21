import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Testimonial() {
  const testimonials: testimonialsT[] = [
    {
      image: " ",
      name: " ",
      ref: " ",
      feedback: " ",
    },
  ];

  type testimonialsT = {
    image: string;
    name: string;
    ref: string;
    feedback: string;
  };

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section
      id="Testimonial"
      className="w-screen min-h-screen snap-start flex flex-col justify-center items-center pt-14 pb-10"
    >
      <strong className="w-full text-center text-4xl animate-bounce">
        <span className="sec-title italic text-balance">What Clients Say</span>
      </strong>

      {/* testimonials */}
      <div className="w-screen h-full">
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          arrows={false}
          containerClass="w-full h-full sm:pb-1 md:pb-3 lg:pb-5 lg:px-20"
        >
          {testimonials.map((item, i) => (
            <div
              key={i + item.name}
              className="m-2 md:m-5 p-3 rounded-lg blur-bg border-2 mb-10 max-md:min-h-[400px] max-w-full flex flex-col justify-between gap-1"
            >
              <div className="text-xl p-2 italic text-balance">
                <p className="text-white font-black text-[48px] tracking-widest">
                  "
                </p>
                {item.feedback}
                <p className="text-white font-black text-[48px] tracking-widest mt-5 text-end">
                  "
                </p>
              </div>
              <p className="flex flex-row-reverse flex-nowrap gap-3 justify-between items-center align-bottom">
                <img
                  src={item.image}
                  width={"50px"}
                  height={"50px"}
                  className="object-cover aspect-square rounded-full"
                />
                <span className="ml-2">
                  <span className="text-2xl text-white/95 font-bold capitalize">
                    {item.name}
                  </span>
                  <br />
                  <span className="text-white/50 capitalize">{item.ref}</span>
                </span>
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonial;

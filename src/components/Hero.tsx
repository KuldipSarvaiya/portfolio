import Typewriter from "typewriter-effect";
import NavBar from "./NavBar";
import myPhoto from "../assets/hero.png";

function Hero() {
  return (
    <section className="w-screen h-screen snap-start relative overflow-hidden">
      <NavBar />
      <div className="h-screen pl-4 sm:pl-8 md:pl-16 lg:pl-28">
        {/* Main Container with responsive layout */}
        <div className="overflow-visible w-full h-full flex flex-col md:flex-row items-center md:items-center justify-center relative">
          {/* Text Content */}
          <div className="flex flex-col w-full md:w-1/2 z-10 mt-8 md:mt-16 min-h-fit">
            <div className="overflow-visible whitespace-normal">
              <span className="flex text-2xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
                Hi{" "}
                <sup>
                  <img
                    src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                    className="h-6 md:h-8 lg:h-10"
                  />
                </sup>
                , I'm
              </span>
              <div className="my-name w-fit text-nowrap overflow-visible font-extrabold text-4xl md:text-6xl lg:text-7xl block">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("KULDIP SARVAIYA")
                      .pauseFor(1000)
                      .deleteAll()
                      .typeString("Software Engineer")
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
              <p className="text-base md:text-lg lg:text-xl font-medium mt-4 max-w-3xl text-pretty">
                I'm a skilled and passionate{" "}
                <span className="my-name inline-block">
                  full-stack software engineer
                </span>
                🧑‍💻 enthusiast. I develop Attractive {" "}
                <u className="inline-block">Web Applications</u> and Blazingly FAST{" "}
                <u className="inline-block">Backend Servers</u>{" "}
                using cutting-edge technologies like Node.js, React.js, and more.
                <br />
                Check My{" "}
                <a href={import.meta.env.VITE_APP_RESUME_LINK} target="_blank">
                  Resume 📃
                </a>
              </p>
            </div>
          </div>

          {/* Image Container */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end h-full max-md:h-[50%]">
            <img
              src={myPhoto}
              className="w-full md:w-[90%] max-md:h-[50%] max-sm:h-[100%] aspect-auto object-cover max-md:object-contain grayscale shadow-[inset_0_-20px_30px_-15px_rgba(0,0,0,0.3)]"
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

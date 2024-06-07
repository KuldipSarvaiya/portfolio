import Typewriter from "typewriter-effect";
import NavBar from "./NavBar";
import myPhoto from "../assets/photo.jpg";

function Hero() {
  return (
    <section className="w-screen h-screen snap-start">
      <NavBar />
      <div className="flex flex-row w-full h-full gap-3 items-center px-28 justify-center max-xl:flex-col-reverse max-md:px-3 max-md:gap-5">
        <div className="flex flex-col text-5xl font-bold max-md:w-full">
          <span className="flex max-md:text-2xl">
            Hi{" "}
            <sup>
              <img
                src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif"
                height={30}
                className="max-md:h-9"
              />
            </sup>
            , I'm
          </span>
          <span className="my-name font-extrabold text-7xl text-nowrap max-md:text-4xl">
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
                  .typeString("Software Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
          <p className="text-xl font-medium mt-4 text-[17px] max-w-3xl text-balance">
            I'm a skilled and passionate{" "}
            <span className="my-name text-nowrap">
              full-stack software developer
            </span>
            🧑‍💻 enthusiast. I develop ATTRACTIVE and Blazingly FAST{" "}
            <u className="text-nowrap">Web Applications</u> 
            {/* as well as{" "}
            <u className="text-nowrap">Cross-Platform Mobile Apps</u> */}
            . I'm a quick learner and collaborate closely with clients to create
            efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to
            life!
            <br />
            Download My{" "}
            <a href="Resume.pdf" download={"Kuldip_sarvaiya_resume.pdf"}>
              Resume 📃
            </a>
          </p>
        </div>

        <div>
          <img
            src={myPhoto}
            className="w-96 aspect-video object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

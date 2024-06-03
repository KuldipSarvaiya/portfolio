import menu from "../assets/menu.svg";
import cancel from "../assets/cancel.svg";
import { useState } from "react";

const Menus = (prop: { isVerticle: Boolean }) => {
  return (
    <span
      className={`flex gap-3  ${
        prop.isVerticle ? "flex-col" : "flex-row max-md:hidden"
      } text-lg`}
    >
      <a href="#Skills" className="nav-link">
        Skills
      </a>
      <a href="#Experience" className="nav-link">
        Experience
      </a>
      <a href="#Projects" className="nav-link">
        Projects
      </a>
      {/* <a href="#Testimonial" className="nav-link">
        Testimonial
      </a> */}
      <a href="#Education" className="nav-link">
        Education
      </a>
      <a href="#Certificates" className="nav-link">
      Certificates
      </a>
      <a href="#Contact" className="nav-link">
        Contact
      </a>
      <a
        href="Resume.pdf"
        className="text-nowrap"
        download={"Kuldip_sarvaiya_resume.pdf"}
      >
        Resume📃
      </a>
    </span>
  );
};

function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-screen lg:px-48 lg:pt-3 p-1 blur-bg flex flex-row justify-between fixed top-0 left-0 z-50">
      <a
        href="/"
        className="my-name text-4xl font-extrabold max-md:flex-1 max-md:flex justify-center"
      >
        Kuldip&nbsp;Sarvaiya
      </a>
      {!open ? (
        <img
          onClick={() => {
            setOpen(true);
          }}
          src={menu}
          height={"20px"}
          width={"20px"}
          className="md:hidden cursor-pointer"
        />
      ) : (
        <>
          <img
            onClick={() => {
              setOpen(false);
            }}
            src={cancel}
            height={"20px"}
            width={"20px"}
            className="md:hidden cursor-pointer"
          />
          <div
            className="absolute top-12 right-6 max-w-fit max-h-fit bg-black/50 border-white border-1 backdrop-blur-sm rounded-lg p-5"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Menus isVerticle={true} />
          </div>
        </>
      )}

      <sub>
        <Menus isVerticle={false} />
      </sub>
    </nav>
  );
}

export default NavBar;

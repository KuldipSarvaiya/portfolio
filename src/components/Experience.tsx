import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import azziptech from "../assets/azziptech.jpg";
import tpots from "../assets/tpots.png";
import thecobuilders from "../assets/thecobuilders.png";
import facematchstudio from "../assets/facematchstudio.png";

// list of my experience
const experiences: experienceT[] = [
  {
    title: "Solopreneur",
    company_name: <span>Sarvaiya Labs | <a href="https://facematchstudio.in" target="_blank">FaceMatchStudio.in</a></span>,
    icon: facematchstudio,
    iconBg: "#ffffff",
    date: "May 2026 - Present",
    website: "https://facematchstudio.in",
    points: [
      "Building FaceMatch Studio as a Solopreneur, It's a IA based realtime image sharing platfom. As soon as image is captured on photogrraphe's camera it's uploaded and shared with the guests within seconds.",
      "Guest takes selfie to quickly find their image using face recognition. It automatically applies logo, Preset (LUTs) and Compression.",
    ],
  },
  {
    title: "Agentic AI Software Engineer",
    company_name: "The CoBuilders",
    icon: thecobuilders,
    iconBg: "#111111",
    date: "December 2025 - Present",
    website: "https://thecobuilders.com/",
    points: [
      "At The CoBuilders, I engineer reliable, scalable full-stack solutions for millions of users, integrating government contracts and driving growth through vital SEO and process optimizations.",
      "I am developing a multi-AI agent platform tailored for blue-collar professionals, automating workflows such as lead generation, quoting, job analysis, scheduling, follow-ups, and material shopping.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Technical Pots",
    icon: tpots,
    iconBg: "#ffffff",
    date: "June 2024 - November 2025",
    website: "https://tpots.co/",
    points: [
      "At Technical Pots, I engineer full-stack solutions as a Software Engineer, building products that scale to millions of users across nationwide platforms.",
      "I work across the entire stack — from React and Next.js frontends to Node.js, NestJS, FastAPI backends and AI Agents — owning features end-to-end with a focus on performance and reliability.",],
  },
  {
    title: "Software Developer Intern",
    company_name: "Azziptech",
    icon: azziptech,
    iconBg: "#ffffff",
    date: "January 2024 - April 2024",
    website: "https://www.azziptech.com/",
    points: [
      "During this three months internship i worked with web development projects and learnt many new concepts as well.",
      "I gained hands-on experience with web development technologies like React.js, Node.js and MySql etc.",
      "While working on projects i faced problems and solved it while collabrating with office colleagues.",
    ],
  },
];

type experienceT = {
  title: string;
  company_name: React.ReactNode;
  icon: string;
  iconBg: string;
  date: string;
  website: string;
  points: string[];
};

const ExperienceCard = ({ experience }: { experience: experienceT }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <a href={experience.website} target="_blank">
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experience.icon}
              alt={typeof experience.company_name === "string" ? experience.company_name : experience.title}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </a>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[18px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider text-balance"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

function Experience() {
  return (
    <section
      id="Experience"
      className="w-screen min-h-screen snap-start flex flex-col justify-center items-center pt-14 pb-10"
    >
      <strong className="w-full text-center text-4xl animate-bounce my-5">
        <span className="sec-title italic">My Experiences</span>
      </strong>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Experience;

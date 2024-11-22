import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import azziptech from "../assets/azziptech.jpg";
import tpots from "../assets/tpots.png";

// list of my experience
const experiences: experienceT[] = [
  {
    title: "Fullstack SWE",
    company_name: "Technical Pots",
    icon: tpots,
    iconBg: "#ffffff",
    date: "June 2024 - Present",
    website: "https://tpots.co/",
    points: [
      "Here at Technical Pots, as Fullstack software developer I work with motivated team to creat meaningful products.",
      "Everyday I work with Technologies like Python, Nodejs and Reactjs with JS/TS to develop highly scalable and fast web servers and user interfaces.",
    ],
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
  company_name: string;
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
              alt={experience.company_name}
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

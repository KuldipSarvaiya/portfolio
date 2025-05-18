import github from "../assets/github.svg";
import ProjectTooltip from "./ProjectTooltip";

const myProjects: myProjectsT[] = [
  // ease-erp-solutions
  {
    images: [
      "/projects/easeerpsolutions/1.png",
      "/projects/easeerpsolutions/2.png",
      "/projects/easeerpsolutions/3.png",
      "/projects/easeerpsolutions/4.png",
      "/projects/easeerpsolutions/5.png",
      "/projects/easeerpsolutions/6.png",
      "/projects/easeerpsolutions/7.png",
      "/projects/easeerpsolutions/8.png",
    ],
    name: "Ease ERP Solutions",
    github: "https://github.com/KuldipSarvaiya/ease-erp-solutions",
    // livelink: "https://ease-erp-solutions.vercel.app",
    livelink: "",
    tech: [
      { name: "Nextjs", bgColor: "bg-black/50", link: "https://nextjs.org/" },
      {
        name: "MongoDB",
        bgColor: "bg-[#10b981]/50",
        link: "https://www.mongodb.com/",
      },
      {
        name: "TailwindCSS",
        bgColor: "bg-[#38bdf8]/50",
        link: "https://tailwindcss.com/",
      },
      {
        name: "JavaScript",
        bgColor: "bg-[#eab308]/50",
        link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
      },
      {
        name: "uploadthing",
        bgColor: "bg-[#f9a8d4]/50",
        link: "https://uploadthing.com/",
      },
      {
        name: "RazorpayX",
        bgColor: "bg-[#172554]/50",
        link: "https://razorpay.com/",
      },
      {
        name: "Docker",
        bgColor: "bg-[#3b82f6]/50",
        link: "https://hub.docker.com/",
      },
    ],
    description:
      "This is Enterprise Resource Planning software. It utilizes the power of Nextjs14 using route.js file while maintaning fast performance and accessibility. This web app is highly scalable as it is Dockerized. This includes modules such as attendance, payroll, inventory, Ecommerce, CRM, etc. It includes dashboards for employees, administrators, human resources, finance, inventory, and general departments. Customers are verified via Google with next-auth.",
  },
  {
    name: 'Real Estate App',
    images: [
      "/projects/realestate/1.png",
      "/projects/realestate/2.png",
      "/projects/realestate/3.png",
      "/projects/realestate/4.png"
    ],
    github: "https://github.com/KuldipSarvaiya/real-estate",
    livelink: "",
    tech: [
      {
        name: "ReactNative",
        bgColor: "bg-[#3b82f6]/50",
        link: "https://reactnative.dev/",
      },
      {
        name: "Expo",
        bgColor: "bg-black/50",
        link: "https://expo.dev/"
      },
      {
        name: "Appwrite",
        bgColor: "bg-[#f02e65]/50",
        link: "https://appwrite.io/",
      },
      {
        name: "TypeScript",
        bgColor: "bg-[#3178c6]/50",
        link: "https://www.typescriptlang.org/",
      },
      {
        name: "TailwindCSS",
        bgColor: "bg-[#38bdf8]/50",
        link: "https://tailwindcss.com/",
      },
    ],
    description: "A sophisticated mobile application built with React Native and Expo framework, offering a seamless real estate property browsing experience. The app features secure Google Authentication, allowing users to explore detailed property listings, perform advanced searches with filtering options, and manage their profiles. Users can read see property reviews, making informed decisions about their investments. Built with TypeScript for enhanced code reliability and styled with TailwindCSS for a modern, responsive interface. The backend is powered by Appwrite, ensuring robust data management and real-time updates.",
  },
  // dineflow
  {
    images: [
      "/projects/dineflowrms/1.png",
      "/projects/dineflowrms/2.png",
      "/projects/dineflowrms/3.png",
      "/projects/dineflowrms/4.png",
      "/projects/dineflowrms/5.png",
      "/projects/dineflowrms/6.png",
      "/projects/dineflowrms/7.png",
      "/projects/dineflowrms/8.png",
      "/projects/dineflowrms/9.png",
    ],
    name: "DineFlow RMS",
    github:
      "https://github.com/search?q=owner%3AKuldipSarvaiya+dineflowrms&type=repositories",
    livelink: "",
    tech: [
      {
        name: "Reactjs",
        bgColor: "bg-blue-500/40",
        link: "https://react.dev/",
      },
      {
        name: "NodeJS",
        bgColor: "bg-[#16a34a]/50",
        link: "https://nodejs.org/",
      },
      {
        name: "MySql",
        bgColor: "bg-[#f97316]/50",
        link: "https://www.mysql.com/",
      },
      {
        name: "JavaScript",
        bgColor: "bg-[#eab308]/50",
        link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
      },
      {
        name: "FirebaseAuth",
        bgColor: "bg-[#ca8a04]/50",
        link: "https://firebase.google.com/",
      },
      {
        name: "Bootstrap",
        bgColor: "bg-[#6528E0]/50",
        link: "https://getbootstrap.com/",
      },
    ],
    description:
      "This Restaurant Management System makes restaurant’s processes digital. Customers can reserve tables and even order food when they arrive at the restaurant. It also has manager, chef, waiter, and admin roles for employees. It creates invoices, collects feedback, manages records, and manages customers, menus, and table reservations.",
  },
  // ecart
  {
    images: [
      "/projects/ecartecommerce/1.png",
      "/projects/ecartecommerce/2.png",
      "/projects/ecartecommerce/3.png",
      "/projects/ecartecommerce/4.png",
      "/projects/ecartecommerce/5.png",
      "/projects/ecartecommerce/6.png",
      "/projects/ecartecommerce/7.png",
      "/projects/ecartecommerce/8.png",
      "/projects/ecartecommerce/9.png",
    ],
    name: "E-Cart E-Commerce",
    github:
      "https://github.com/search?q=owner%3AKuldipSarvaiya+E-Cart_&type=repositories",
    livelink: "",
    tech: [
      {
        name: "Reactjs",
        bgColor: "bg-blue-500/40",
        link: "https://react.dev/",
      },
      {
        name: "NodeJS",
        bgColor: "bg-[#16a34a]/50",
        link: "https://nodejs.org/",
      },
      {
        name: "MongoDB",
        bgColor: "bg-[#10b981]/50",
        link: "https://www.mongodb.com/",
      },
      {
        name: "JavaScript",
        bgColor: "bg-[#eab308]/50",
        link: "https://developer.mozilla.org/en-US/docs/Web/javascript",
      },
      {
        name: "AWS S3",
        bgColor: "bg-[#d97706]/50",
        link: "https://aws.amazon.com/s3/",
      },
      {
        name: "MaterialUI",
        bgColor: "bg-[#0ea5e9]/50",
        link: "https://mui.com/material-ui/",
      },
      {
        name: "Stripe",
        bgColor: "bg-[#675DFF]/50",
        link: "https://docs.stripe.com/payments/checkout",
      },
    ],
    description:
      "This E-Commerce website that has both Customer and Seller Users. This also provides seperate Seller dashboard to manage their products, they can add new product, update details, stop selling any product and manager orders. Customer can browse products by category, add to favourite and do search. Customer will be charged with stripe checkout and it also checks availability of products in cart. It also keep track of recently visited products. **AWS-S3 and Stripe Account is Depricated ⚠️**",
  },
];

type myProjectsT = {
  images: string[];
  name: string;
  github: string;
  livelink: string;
  tech: {
    name: string;
    bgColor: string;
    link: string;
  }[];
  description: string;
};

function Projects() {
  return (
    <section
      id="Projects"
      className="w-screen min-h-screen snap-start flex flex-col justify-center items-center pt-20 pb-16"
    >
      <strong className="w-full text-center text-4xl animate-bounce mb-5">
        <span className="sec-title italic">My Projects</span>
      </strong>
      <div className="max-w-screen-2xl px-2 flex flex-row flex-wrap gap-5 justify-evenly">
        {(myProjects as myProjectsT[]).map((project, index) => (
          <div
            className="flex flex-row flex-wrap gap-2 blur-bg border-2 rounded-lg p-2"
            key={index}
          >
            <ProjectTooltip
              images={project.images}
              children={
                <div className="min-w-[350px] max-w-lg h-full">
                  <p className="my-name flex flex-row flex-nowrap justify-end gap-2 text-lg font-bold items-center">
                    <span className="flex-1">{project.name}</span>
                    {project.livelink && (
                      <a
                        href={project.livelink}
                        className="text-emerald-500 underline"
                      >
                        Live↗️
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      className="bg-white p-1 rounded-full"
                      title="Project Github Link"
                    >
                      <img src={github} height={"20px"} width={"20px"} />
                    </a>
                  </p>
                  <hr className="my-1" />
                  <div className="flex flex-row flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <a
                        key={i}
                        href={tech.link}
                        className={`p-[2px] rounded-md text-white ${tech.bgColor}`}
                      >
                        #{tech.name}
                      </a>
                    ))}
                  </div>
                  <p className="text-balance text-sm mt-3">
                    {project.description}
                  </p>
                </div>
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

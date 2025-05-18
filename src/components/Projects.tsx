import github from "../assets/github.svg";
import { useState, useEffect } from 'react';

const myProjects: myProjectsT[] = [
    {
    images: [
      "/projects/chatinger/1.png",
      "/projects/chatinger/2.jpeg",
      "/projects/chatinger/3.jpeg",
      "/projects/chatinger/4.jpeg",
      "/projects/chatinger/5.png",
      "/projects/chatinger/6.jpeg",
      "/projects/chatinger/7.png",
      "/projects/chatinger/8.jpeg",
    ],
    name: "Chatinger",
    github: "https://github.com/search?q=owner%3AKuldipSarvaiya+chatinger&type=repositories",
    livelink: "",
    tech: [
      {
        name: "NodeJS",
        bgColor: "bg-[#16a34a]/50",
        link: "https://nodejs.org/",
      },
      {
        name: "Reactjs",
        bgColor: "bg-blue-500/40",
        link: "https://react.dev/",
      },
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
    ],
    description:
      "Chatinger, a secure chat and video calling platform prioritizing user privacy by not requiring personal data even not email. Real-time communication powered by Socket.IO through group and single chats, along with 'Ghost Mode' for ephemeral chating. Experience crystal-clear one-on-one and group video calls powered by WebRTC, and even connect with new people via random video chats with the option to add them as friends. Built with Reactjs and Nodejs, utilizing MongoDB, Chatinger is architected with privacy in mind, and end-to-end encryption is underway to further enhance security.",
  },
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
  const [currentImageIndexes, setCurrentImageIndexes] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Initialize image indexes
    const indexes = myProjects.reduce((acc, project) => {
      acc[project.name] = 0;
      return acc;
    }, {} as { [key: string]: number });
    setCurrentImageIndexes(indexes);

    // Set up image rotation intervals
    const intervals = myProjects.map(project => 
      setInterval(() => {
        setCurrentImageIndexes(prev => ({
          ...prev,
          [project.name]: (prev[project.name] + 1) % project.images.length
        }));
      }, 3000) // Change image every 3 seconds
    );

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <section
      id="Projects"
      className="w-screen min-h-screen snap-start flex flex-col justify-center items-center pt-20 pb-16"
    >
      <strong className="w-full text-center text-4xl animate-bounce mb-5">
        <span className="sec-title italic">My Projects</span>
      </strong>
      <div className="max-w-screen-2xl px-2 flex flex-col gap-5">
        {(myProjects as myProjectsT[]).map((project, index) => (
          <div
            className="flex flex-col md:flex-row blur-bg border-2 rounded-lg p-4 gap-4 min-h-[245px]"
            key={index}
          >
            {/* Text Content */}
            <div className="flex-1 min-w-[350px] max-w-2xl">
              <p className="my-name flex flex-row flex-nowrap justify-end gap-2 text-lg font-bold items-center">
                <span className="flex-1">{project.name}</span>
                {project.livelink && (
                  <a href={project.livelink} className="text-emerald-500 underline">
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

            {/* Image Preview */}
            <div className="w-full md:w-[400px] rounded-lg overflow-hidden">
              <img 
                src={project.images[currentImageIndexes[project.name] || 0]} 
                alt={`${project.name} preview ${currentImageIndexes[project.name] + 1}`}
                className="w-full object-contain hover:scale-105 transition-transform duration-500"
              />
              {/* <div className="flex justify-center gap-1 mt-2">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      imgIndex === currentImageIndexes[project.name] 
                        ? 'bg-white' 
                        : 'bg-gray-500'
                    }`}
                    onClick={() => setCurrentImageIndexes(prev => ({
                      ...prev,
                      [project.name]: imgIndex
                    }))}
                  />
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

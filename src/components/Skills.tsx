import { Tilt } from "react-tilt";

function Skills() {
  const option = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section
      id="Skills"
      className="w-screen min-h-screen snap-start flex justify-center items-center pt-14 pb-10"
    >
      <div className="flex flex-row gap-10 max-w-screen-xl justify-evenly flex-wrap">
        <strong className="w-full text-center text-4xl animate-bounce">
          <span className="sec-title italic">My Skills</span>
        </strong>
        <Tilt
          options={option}
          style={{
            height: 220,
            width: 350,
            border: "2px solid white",
            borderRadius: "15px",
          }}
        >
          <div className="blur-bg rounded-2xl h-full w-full p-2">
            <h3 className="uppercase text-lg font-bold my-name">back End</h3>
            <hr />
            <div className="flex flex-row flex-wrap gap-y-3 gap-x-2 mt-5 justify-between">
              <img
                src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
                alt="PYTHON"
              />
              <img
                src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
                alt="NODEJS"
              />
              <img
                src="https://img.shields.io/badge/Bun-%23000000.svg?style=for-the-badge&logo=bun&logoColor=white"
                alt="BUN"
              />
              <img
                src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white"
                alt="NESTJS"
              />
              <img
                src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi"
                alt="FASTAPI"
              />
              <img
                src="https://img.shields.io/badge/django-%23092e20.svg?style=for-the-badge&logo=django&logoColor=white"
                alt="DJANGO"
              />
              <img
                src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
                alt="EXPRESSJS"
              />
              <img
                src="https://img.shields.io/badge/REST-005571?style=for-the-badge&logo=google-cloud&logoColor=white"
                alt="RESTAPI"
              />
              <img
                src="https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white"
                alt="GRAPHQL"
              />
              <img
                src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101"
                alt="SOCKETIO"
              />
              <img
                src="https://img.shields.io/badge/gRPC-4285F4?style=for-the-badge&logo=google&logoColor=white"
                alt="GRPC"
              />
              <img
                src="https://img.shields.io/badge/tRPC-%232596BE.svg?style=for-the-badge&logo=trpc&logoColor=white"
                alt="TRPC"
              />
            </div>
          </div>
        </Tilt>
        <Tilt
          options={option}
          style={{
            height: 220,
            width: 350,
            border: "2px solid white",
            borderRadius: "15px",
          }}
        >
          <div className="blur-bg rounded-2xl h-full w-full p-2">
            <h3 className="uppercase text-lg font-bold my-name">Agentic AI</h3>
            <hr />
            <div className="flex flex-row flex-wrap gap-y-3 gap-x-2 mt-5 justify-between">
              <img
                src="https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white&color=darkgreen"
                alt="LANGCHAIN"
              />
              <img
                src="https://img.shields.io/badge/LangGraph-2C3E50?style=for-the-badge&logo=langgraph&logoColor=white&color=darkgreen"
                alt="LANGGRAPH"
              />
              <img
                src="https://img.shields.io/badge/LangSmith-011627?style=for-the-badge&logo=langsmith&logoColor=white"
                alt="LANGSMITH"
              />
              <img
                src="https://img.shields.io/badge/Langfuse-000000?style=for-the-badge&logo=lightning&logoColor=white"
                alt="LANGFUSE"
              />
              <img
                src="https://img.shields.io/badge/n8n-EA4B71?style=for-the-badge&logo=n8n&logoColor=white"
                alt="N8N"
              />
            </div>
          </div>
        </Tilt>
        <Tilt
          options={option}
          style={{
            height: 220,
            width: 350,
            border: "2px solid white",
            borderRadius: "15px",
          }}
        >
          <div className="blur-bg rounded-2xl h-full w-full p-2 ">
            <h3 className="uppercase text-lg font-bold my-name">Front End</h3>
            <hr />
            <div className="flex flex-row flex-wrap gap-y-3 gap-x-2 mt-5 justify-between">
              <img
                src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
                alt="HTML5"
              />
              <img
                src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
                alt="CSS3"
              />
              <img
                src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
                alt="JAVASCRIPT"
              />
              <img
                src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
                alt="TYPESCRIPT"
              />
              <img
                src="https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white"
                alt="JQUERY"
              />
              <img
                src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white"
                alt="MUI"
              />
              <img
                src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
                alt="TAILWINDCSS"
              />
              <img
                src="https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white"
                alt="CHARTJS"
              />
            </div>
          </div>
        </Tilt>
        <Tilt
          options={option}
          style={{
            height: 220,
            width: 350,
            border: "2px solid white",
            borderRadius: "15px",
          }}
        >
          <div className="blur-bg rounded-2xl h-full w-full p-2">
            <h3 className="uppercase text-lg font-bold my-name">frameworks</h3>
            <hr />
            <div className="flex flex-row flex-wrap gap-y-3 gap-x-2 mt-5 justify-between">
              <img
                src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                alt="REACTJS"
              />
              <img
                src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
                alt="NEXTJS"
              />
              <img
                src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white"
                alt="VITE"
              />
              <img
                src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"
                alt="REACTQUERY"
              />
              <img
                src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"
                alt="REACTROUTER"
              />
              <img
                src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white"
                alt="REACTHOOKFORM"
              />
              <img
                src="https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white"
                alt="REDUX"
              />
            </div>
          </div>
        </Tilt>
        <Tilt
          options={option}
          style={{
            height: 220,
            width: 350,
            border: "2px solid white",
            borderRadius: "15px",
          }}
        >
          <div className="blur-bg rounded-2xl h-full w-full p-2">
            <h3 className="uppercase text-lg font-bold my-name">database</h3>
            <hr />
            <div className="flex flex-row flex-wrap gap-y-3 gap-x-2 mt-5 justify-between">
              <img
                src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
                alt="MONGODB"
              />
              <img
                src="https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white"
                alt="MYSQL"
              />
              <img
                src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
                alt="POSTGRESQL"
              />
              <img
                src="https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white"
                alt="REDIS"
              />
            </div>
          </div>
        </Tilt>
        <Tilt
          options={option}
          style={{
            height: 220,
            width: 350,
            border: "2px solid white",
            borderRadius: "15px",
          }}
        >
          <div className="blur-bg rounded-2xl h-full w-full p-2">
            <h3 className="uppercase text-lg font-bold my-name">tools & Cloud</h3>
            <hr />
            <div className="flex flex-row flex-wrap gap-y-3 gap-x-2 mt-5 justify-between">
              <img
                src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
                alt="DOCKER"
              />
              <img
                src="https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens"
                alt="JWT"
              />
              <img
                src="https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase"
                alt="FIREBASE"
              />
              <img
                src="https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white"
                alt="AWS"
              />
              <img
                src="https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white"
                alt="GOOGLE CLOUD"
              />
              <img
                src="https://img.shields.io/badge/GIT-%23E34F26.svg?style=for-the-badge&logo=git&logoColor=white"
                alt="GIT"
              />
              <img
                src="https://img.shields.io/badge/linux-%FCC624.svg?style=for-the-badge&logo=linux&logoColor=black&color=FCC624"
                alt="LINUX"
              />
              <img
                src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white"
                alt="SUPABASE"
              />
              <img
                src="https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white"
                alt="NGINX"
              />
            </div>
          </div>
        </Tilt>
      </div>
    </section>
  );
}

export default Skills;

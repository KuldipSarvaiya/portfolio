function Education() {
  return (
    <section
      id="Education"
      className="w-screen h-screen  snap-start flex flex-col gap-5 justify-center items-center  p-2"
    >
      <strong className="w-full text-center text-4xl animate-bounce">
        <span className="sec-title italic">My Education</span>
      </strong>

      <div className="min-w-96 lg:min-w-[500px] blur-bg p-2 py-4 border-white rounded-lg border-2 flex flex-col gap-2">
        <p className="my-name text-xl font-extrabold text-balance max-md:text-[17px]">
          Masters of Computer Applications (AI/ML)
        </p>
        <p className="text-slate-400/50 font-bold  max-md:text-[16px]">
          AUGUST 2025 &nbsp;-&nbsp; Persuing
        </p>
        <p className="max-md:text-[15px]">
          <a href="https://www.onlinemanipal.com" target="_blank" className="text-white">Manipal University, Jaipur</a>
        </p>
        {/* <p className="">Obtained Grade : First Class ✨</p> */}
        <p className=" flex flex-row flex-wrap gap-1">
          <span className="p-1 bg-red-500/50 rounded-lg">
            #AI-ML
          </span>
          <span className="p-1 bg-purple-500/50 rounded-lg">
            #AI Agents
          </span>
          <span className="p-1 bg-pink-500/50 rounded-lg">
            #GenerativeAI
          </span>
        </p>
      </div>

      <div className="min-w-96 lg:min-w-[500px] blur-bg p-2 py-4 border-white rounded-lg border-2 flex flex-col gap-2">
        <p className="my-name text-xl font-extrabold text-balance max-md:text-[17px]">
          Bachelor of Science in Information Technology
        </p>
        <p className="text-slate-400/50 font-bold  max-md:text-[16px]">
          AUGUST 2021 &nbsp;-&nbsp; MAY 2024
        </p>
        <p className="max-md:text-[15px]">
          <a href="https://www.mkbhavuni.edu.in/mkbhavuniweb/" target="_blank" className="text-white">Maharaja Krishnakumarsinhji Bhavnagar University, Bhavnagar</a>
        </p>
        <p className="">Obtained Grade : First Class ✨</p>
        <p className=" flex flex-row flex-wrap gap-1">
          <span className="p-1 bg-emerald-500/50 rounded-lg">
            #Fundamentals
          </span>
          <span className="p-1 bg-yellow-500/50 rounded-lg">
            #Programming Practice
          </span>
          <span className="p-1 bg-blue-500/50 rounded-lg">#IT Principles</span>
        </p>
      </div>
    </section>
  );
}

export default Education;

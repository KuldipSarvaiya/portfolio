function Education() {
  return (
    <section
      id="Education"
      className="w-screen h-screen  snap-start flex flex-col gap-5 justify-center items-center  p-2"
    >
      <strong className="w-full text-center text-4xl animate-bounce">
        <span className="sec-title italic">My Education</span>
      </strong>

      <div className="blur-bg p-2 py-4 border-white rounded-lg border-2 flex flex-col gap-2">
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

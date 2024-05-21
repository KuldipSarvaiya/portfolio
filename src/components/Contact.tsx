import React, { useState } from "react";
import github from "../assets/github.svg";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Kuldip Sarvaiya",
          from_email: form.email,
          to_email: "kuldipsarvaiya94@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("⚠️ Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section
      id="Contact"
      className="w-screen min-h-screen snap-start flex flex-col justify-center items-center pt-[70px] pb-10"
    >
      <strong className="w-full text-center text-4xl animate-bounce">
        <span className="sec-title italic">Let's Connect</span>
      </strong>

      {/* main part */}
      <div
        className={`xl:mt-2 flex xl:flex-row-reverse flex-col gap-5 justify-between overflow-hidden h-full w-fit min-w-[400px] md:w-2/4`}
      >
        {/* socila links */}
        <div className="flex flex-col max-xl:flex-row gap-x-10 gap-y-12 max-md:gap-y-5 self-center my-2 flex-wrap justify-center">
          <a
            href="https://www.linkedin.com/in/kuldip-sarvaiya-2592a425b/"
            target="_blank"
            className="text-white flex items-center gap-2 text-lg"
          >
            <img
              src="/icons/linkedin.svg"
              width={30}
              height={30}
              className="bg-white rounded-md p-1"
            />
            Kuldip Sarvaiya
          </a>
          <a
            href="https://github.com/KuldipSarvaiya"
            target="_blank"
            className="text-white flex items-center gap-2 text-lg"
          >
            <img
              src={github}
              width={30}
              height={30}
              className="bg-white rounded-md p-1"
            />
            KuldipSarvaiya
          </a>
          <a
            href="https://x.com/kd_sarvaiya_"
            target="_blank"
            className="text-white flex items-center gap-2 text-lg"
          >
            <img
              src="/icons/x.svg"
              width={30}
              height={30}
              className="bg-white rounded-md p-1"
            />
            kd_sarvaiya_
          </a>
          <a
            href="https://www.instagram.com/kd_sarvaiya_/"
            target="_blank"
            className="text-white flex items-center gap-2 text-lg"
          >
            <img
              src="/icons/instagram.svg"
              width={30}
              height={30}
              className="bg-white rounded-md p-1"
            />
            kd_sarvaiya_
          </a>
        </div>

        {/* contact form */}
        <div className="flex-[0.75] bg-black-100 p-5 rounded-2xl blur-bg h-fit">
          <form
            onSubmit={handleSubmit}
            className="mt-2 flex flex-col gap-5 min-h-fit"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-1">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-[#1A1A1A] dark:text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-1">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your mail address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-[#1A1A1A] dark:text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-1">Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-[#1A1A1A] dark:text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary border-2 border-slate-600 p-3 px-8 rounded-xl outline-none w-fit text-[#1A1A1A] dark:text-white font-bold shadow-md shadow-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

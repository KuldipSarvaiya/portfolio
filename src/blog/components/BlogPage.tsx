import { Link, useNavigate } from "react-router-dom";
import photo from "../../assets/photo.jpg";
import { Context } from "./BlogProvider";
import { useContext } from "react";
import {
  Code,
  Image,
  List,
  Paragraph,
  Quote,
  Title1,
  Title2,
  Title3,
  Video,
} from "./ContentBlocks";
import { replaceAll } from "../utils/replaceAll";
import Share from "./Share";

type BlogType = {
  _id: string;
  title: string;
  hashtag: string[];
  head: string[];
  body: [string | string[]];
  publish_date: string;
};

function BlogPage({ title }: { title: string }) {
  const navigate = useNavigate();
  const { data }: { data: BlogType[] } = useContext(Context);
  const blog: BlogType = data.filter(
    (blog) => replaceAll(blog.title, " ", "-") === title
  )[0];

  if (!blog) {
    if (data.length !== 0)
      setTimeout(() => {
        navigate("/not_found");
      }, 5000);

    return (
      <span className="w-10 h-10 border-2 absolute top-1/2 left-1/2 -translate-x-1/2 rounded-full border-t-0 border-l-0 spin"></span>
    );
  }

  return (
    <main className="bg-[#10151D] text-[#B2BECD] w-screen h-fit min-h-screen text-balance">
      <div className="scroll_indicator"></div>
      <div className="z-0 animate-pulse duration-1000 shadow-[300px_1px_500px_70px_#64748b] absolute rounded-full  w-60 h-0"></div>
      <div className="z-0 animate-pulse duration-1000 shadow-[10px_100px_300px_90px_#64748b] absolute -bottom-[50px] right-20 rounded-full  w-0 h-0"></div>
      <section className=" snap-mandatory snap-start w-fit m-auto py-10 md:py-16 lg:py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            {/* title */}
            <div className="space-y-2 text-balance md:mb-2 max-md:mb-0 w-full max-w-6xl">
              <p className="flex flex-row flex-nowrap justify-between items-center gap-5 mb-5 max-w-[800px] m-auto max-sm:text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed w-full">
                <Link to={"/blog"} className="underline">
                  <span className="text-xl">&lArr;</span>Back
                </Link>
                <span>
                  Published On: {new Date(blog.publish_date).toDateString()}
                </span>
              </p>
              <h1 className="text-3xl capitalize font-bold tracking-tighter max-md:text-2xl lg:text-5xl">
                {replaceAll(title, "-", " ")}
              </h1>
            </div>

            {/* blog content */}
            <div className="w-full text-left indent-10">
              {blog.body.map((text, i) => {
                const block = blog.head[i];

                if (block.startsWith("code-") && typeof text === "string")
                  return (
                    <Code key={i} language={block.split("-")[1]} text={text} />
                  );

                switch (block) {
                  case "title1":
                    return (
                      typeof text === "string" && <Title1 key={i} text={text} />
                    );
                  case "title2":
                    return (
                      typeof text === "string" && <Title2 key={i} text={text} />
                    );
                  case "title3":
                    return (
                      typeof text === "string" && <Title3 key={i} text={text} />
                    );
                  case "paragraph":
                    return (
                      typeof text === "string" && (
                        <Paragraph key={i} text={text} />
                      )
                    );
                  case "list":
                    return (
                      typeof text !== "string" && <List key={i} texts={text} />
                    );
                  case "quote":
                    return (
                      typeof text === "string" && <Quote key={i} text={text} />
                    );
                  case "image":
                    return (
                      typeof text === "string" && <Image key={i} url={text} />
                    );
                  case "video":
                    return (
                      typeof text === "string" && <Video key={i} url={text} />
                    );
                  default:
                    return (
                      typeof text === "string" && (
                        <p className="mt-1" key={i}>
                          {text}
                        </p>
                      )
                    );
                }
              })}
            </div>

            {/* address bar */}
            <hr className="w-full mt-10" />
            <div className="flex flex-row-reverse flex-wrap justify-between items-center gap-5 w-full">
              <span className="flex flex-row flex-nowrap items-center">
                <img src={photo} width={30} className="rounded-full" /> &nbsp;
                DEV. Kuldip Sarvaiya
              </span>
              <span>
                <Link to={"/blog"} className="text-nowrap">
                  🏠Blogs
                </Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={"/"} className="text-nowrap">
                  🏠Portfolio
                </Link>
              </span>
              <Share />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BlogPage;

import { Link, useParams } from "react-router-dom";
import ExploreBlogs from "./components/ExploreBlogs";
import photo from "../assets/photo.jpg";
import BlogProvider from "./components/BlogProvider";
import BlogPage from "./components/BlogPage";

function Blog() {
  document.title = "Blogs: Kuldip Sarvaiya";

  const { title } = useParams();

  if (title)
    return (
      <BlogProvider>
        <BlogPage title={title} />
      </BlogProvider>
    );

  return (
    <main className="bg-[#10151D] text-[#B2BECD] w-screen h-fit min-h-screen">
      <div className="scroll_indicator"></div>
      <div className="z-0 animate-pulse duration-1000 shadow-[300px_1px_500px_70px_#64748b] absolute rounded-full  w-60 h-0"></div>
      <div className="z-0 animate-pulse duration-1000 shadow-[10px_100px_300px_90px_#64748b] absolute -bottom-[50px] right-20 rounded-full  w-0 h-0"></div>
      <section className=" snap-mandatory snap-start w-fit m-auto py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <div className="space-y-2 text-balance md:mb-16 max-md:mb-10">
              <h1 className="text-4xl font-bold tracking-tighter max-md:text-3xl lg:text-5xl">
                Welcome to{" "}
                <span className="my-name"> KuldipSarvaiya Blogs</span>,
              </h1>
              <p className="max-w-[800px] m-auto max-sm:text-sm md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                These blogs dig into the realm of software development,
                leveraging the power of practical knowledge. Here, I hope to
                create a dynamic learning environment where readers can connect
                with practical applications and cutting-edge concepts by offered
                knowledge in the form of a blog post.
              </p>
            </div>
            <div className="w-full h-fit min-h-52">
              <BlogProvider>
                <ExploreBlogs />
              </BlogProvider>
            </div>
            <hr className="w-full mt-16 " />
            <div className="flex flex-row flex-nowrap justify-between items-center w-full">
              <span className="flex flex-row flex-nowrap items-center">
                <img src={photo} width={30} className="rounded-full" /> &nbsp;
                DEV. Kuldip Sarvaiya
              </span>
              <span>
                <Link to={"/blog"}>🏠Blogs</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to={"/"}>🏠Portfolio</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Blog;

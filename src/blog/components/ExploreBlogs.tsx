import React, { useContext, useState } from "react";
import BlogCard from "./BlogCard";
import { Context } from "./BlogProvider";

type BlogType = {
  _id: string;
  title: string;
  hashtag: string[];
  head: string[];
  body: [string | string[]];
  publish_date: string;
};

const ExploreBlogs: React.FC = () => {
  const { data }: { data: BlogType[] } = useContext(Context);

  const pageSize = 5;
  const [page, setPage] = useState(1);

  return (
    <div className="w-full">
      {/* title */}
      <div className="flex flex-row flex-wrap justify-between w-full items-center">
        <h1 className="max-md:text-3xl lg:text-5xl text-4xl">Explore Blogs</h1>
        <div>
          <button
            disabled={page === 1}
            className="rounded-full border-[1px] border-white blur-bg max-md:p-1 max-md:px-2 mx-1 orange outline-none disabled:border-white/25 disabled:text-white/25"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          >
            <p className="scale-[2]">&larr;</p>
          </button>
          <button
            disabled={page * pageSize >= data.length}
            className="rounded-full border-[1px] border-white blur-bg max-md:p-1 max-md:px-2 mx-1 orange outline-none disabled:border-white/25 disabled:text-white/25"
            onClick={() => setPage((prev) => prev + 1)}
          >
            <p className="scale-[2]">&rarr;</p>
          </button>
        </div>
      </div>

      {/* blogs list */}
      {data.length === 0 ? (
        <center className="p-10 m-10 text-xl">
          Ahh... Wait✋, let me COOK 🍽️
        </center>
      ) : (
        <div className="grid grid-cols-1 gap-5 mt-5">
          {data?.map((item, i) => {
            const end = page * pageSize;
            const start = end - pageSize;

            if (i >= start && i < end)
              return <BlogCard blog={item} key={item._id} />;
            return null;
          })}
        </div>
      )}
    </div>
  );
};

export default ExploreBlogs;

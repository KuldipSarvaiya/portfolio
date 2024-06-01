import { Link } from "react-router-dom";
import { replaceAll } from "../utils/replaceAll";

type BlogType = {
  _id: string;
  title: string;
  hashtag: string[];
  head: string[];
  body: [string | string[]];
  publish_date: string;
};

function BlogCard({ blog }: { blog: BlogType }) {
  return (
    <Link
      className="text-inherit hover:text-inherit"
      to={"/blog/" + replaceAll(blog.title," ","-")}
    >
      <div className="group hover:border-orange-500 cursor-pointer flex flex-col flex-nowrap gap-1 justify-start items-start blur-bg border-2 rounded-lg p-2">
        <p className="flex flex-row flex-nowrap justify-between items-center w-full">
          <span>{new Date(blog.publish_date).toDateString()}</span>
          <span className="group-hover:text-orange-500">Read ↗</span>
        </p>
        <p className="text-xl text-start capitalize">{blog.title}</p>
        <p className="flex flex-row flex-wrap gap-2">
          {blog.hashtag.map((tag) => (
            <span key={tag} className="p-1 rounded-lg blur-bg">
              #{tag}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
}

export default BlogCard;

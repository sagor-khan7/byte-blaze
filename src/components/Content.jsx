import { useLoaderData } from "react-router-dom";
import placeholderImg from "../assets/404.jpg";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = () => {
  const blog = useLoaderData();
  const { cover_image, title, body_html, tags } = blog;
  return (
    <div className="mx-auto group focus:no-underline  hidden sm:block border border-primary p-2">
      <img
        className="object-cover w-full rounded h-44 "
        src={cover_image || placeholderImg}
      />
      <div>
        <div className="flex flex-wrap py-6 gap-2">
          {tags.map((tag, i) => (
            <a key={i} className="px-3 py-1 rounded-sm hover:underline">
              #{tag}
            </a>
          ))}
        </div>
      </div>
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
      </div>
    </div>
  );
};

export default Content;

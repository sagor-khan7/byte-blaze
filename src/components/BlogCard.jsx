import { Link } from "react-router-dom";
import placeholderImg from "../assets/404.jpg";

export default function BlogCard({ blog }) {
  const { cover_image, title, description, published_at, id } = blog;
  return (
    <Link
      to={`/blog/${id}`}
      className="max-w-sm mx-auto transition border-2 hover:scale-105 border-primary hover:border-secondary group hover:no-underline focus:no-underline  hidden sm:block"
    >
      <img
        role="presentation"
        className="object-cover w-full rounded h-44 "
        src={cover_image || placeholderImg}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400">
          {new Date(published_at).toLocaleDateString()}
        </span>
        <p>{description}</p>
      </div>
    </Link>
  );
}

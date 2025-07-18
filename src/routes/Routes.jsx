import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import BlogDetails from "../pages/BlogDetails";
import Bookmarks from "../pages/Bookmarks";
import Author from "../components/Author";
import Content from "../components/Content";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: "author",
            element: <Author />,
            loader: ({ params }) =>
              fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ],
      },

      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import { GlobalLayout } from "@/layouts";
import { Board, Home, Post, boardLoader } from "@/pages";
import { postLoader } from "./pages/post/loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/board/:boardSlug?",
        loader: boardLoader,
        element: <Board />,
      },
      {
        path: "/post/:postId",
        loader: postLoader,
        element: <Post />,
      },
      {
        path: "*",
        element: <main>Default Page</main>,
      },
    ],
  },
]);

export default router;

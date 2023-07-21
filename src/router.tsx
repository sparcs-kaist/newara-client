import { createBrowserRouter } from "react-router-dom";
import { GlobalLayout } from "@/layouts";
import { Board, Home, boardLoader } from "@/pages";

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
        path: "*",
        element: <main>Default Page</main>,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import { GlobalLayout } from "@/layouts";
import { Home } from "@/pages";

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
        path: "*",
        element: <main>Default Page</main>,
      },
    ],
  },
]);

export default router;

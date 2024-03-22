import { createBrowserRouter } from "react-router-dom";

import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import GameDetailesPage from "./pages/GameDetailesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "games/:slug",
        element: <GameDetailesPage />,
      },
    ],
  },
]);

export default router;

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./Components/Pages/Home";
import Ranking from "./Components/Pages/Ranking";
import Random from "./Components/Pages/Random";
import FAQ from "./Components/Pages/FAQ"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ranking",
    element: <Ranking />,
  },
  {
    path: "/random",
    element: <Random />,
  }
  {
    path: "/faq",
    element: <FAQ />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
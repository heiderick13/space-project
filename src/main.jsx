import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home";
import Crew from "./pages/Crew/Crew";
import Destinations from "./pages/Destinations/Destinations";
import Technologies from "./pages/Technologies/Technologies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/destinations",
        element: <Destinations />,
      },
      {
        path: "/technologies",
        element: <Technologies />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

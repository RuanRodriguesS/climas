import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import WeatherDetailsPage from "./pages/WeatherDetailsPage";
import CitiesPage from "./pages/CitiesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cities",
    element: <CitiesPage />,
  },
  {
    path: "/city/:id",
    element: <WeatherDetailsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

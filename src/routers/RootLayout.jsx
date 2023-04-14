import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ErrorPage from "../components/ErrorPage";
import SoilPage from "../pages/SoilPage";
import CropPage from "../pages/CropPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/suelo",
    element: <SoilPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cultivo",
    element: <CropPage />,
    errorElement: <ErrorPage />,
  }, // Añadir más rutas...
]);

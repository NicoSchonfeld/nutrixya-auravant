import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ErrorPage from "../components/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  }, // Añadir más rutas...
]);

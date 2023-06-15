import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/HomePage";
import ErrorPage from "../components/ErrorPage";
import SoilPage from "../pages/SoilPage";
import CropPage from "../pages/CropPage";
import ResultsPage from "../pages/ResultsPage";
import EditsResults from "../pages/EditsResults";
import Fertilizer from "../pages/Fertilizer";
import Arrancadores from "../pages/Arrancadores";
import AbonoOrganico from "../pages/AbonoOrganico";
import FertilizerEdits from "../pages/FertilizerEdits";

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
  },
  {
    path: "/rendimiento",
    element: <ResultsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "editables",
    element: <EditsResults />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fertilizantes",
    element: <Fertilizer />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/arrancadores",
    element: <Arrancadores />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/abono-organico",
    element: <AbonoOrganico />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/fertilizante",
    element: <FertilizerEdits />,
    errorElement: <ErrorPage />,
  }, // Añadir más rutas...
]);

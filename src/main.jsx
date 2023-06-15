import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routers/RootLayout";

import { ChakraProvider } from "@chakra-ui/react";
import Theme from "./theme/Theme";

if (avt?.platform === "web") {
  window.addEventListener("readySDK", loadExt);
} else {
  loadExt();
}

function loadExt() {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ChakraProvider theme={Theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>
  );
}

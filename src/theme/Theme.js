import { extendTheme, theme } from "@chakra-ui/react";

// Configuración de themas para Chakra UI, colors, styles, etc...

export default extendTheme({
  /* config: {
    initialColorMode: "dark",
  }, */
  colors: {
    primary: theme.colors.whatsapp,
  },
  styles: {
    global: {
      "html, body, #root": {
        height: "100%",
      },
    },
  },
});

import { extendTheme } from "@chakra-ui/react";
import { buttons } from "./buttons";
import { colors } from "./colors";


export const mycoTheme = extendTheme({
  buttons,
  colors,
  styles: {
    global: () => ({
      html: {
      },
      body: {
        background: "gray.100",
        minHeight: "100vh",
      },
    }),
  },
})
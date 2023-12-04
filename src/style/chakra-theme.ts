import { extendTheme } from "@chakra-ui/react";

export const PRIMARY_COLOR = "#bd3a6a";
export const SECONDARY_COLOR = "#3b071a";
export const HOVER_COLOR = "#E3A171";
export const PRIMARY_FONT = `'Poppins', sans-serif`;

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: SECONDARY_COLOR,
        fontFamily: PRIMARY_FONT,
      },
    },
    Heading: {
      baseStyle: {
        color: PRIMARY_COLOR,
        fontFamily: PRIMARY_FONT,
      },
    },
    FormErrorMessage: {
      baseStyle: {
        color: "red",
      },
    },
    FormLabel: {
      baseStyle: {
        color: SECONDARY_COLOR,
      },
    },
  },
  fonts: {
    body: `'Roboto', sans-serif`,
  },
});

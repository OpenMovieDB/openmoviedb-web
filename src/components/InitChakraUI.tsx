"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const breakpoints = {
  sm: "2em",
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

const sizes = {
  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "360px",
      md: "768px",
      lg: "1024px",
      xl: "1600px",
    },
  },
};

const fonts = {
  heading: `'Montserrat', sans-serif`,
  body: `'Montserrat', sans-serif`,
};

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#0F0D18", "#0F0D18")(props),
    },
  }),
};

const theme = extendTheme({ sizes, fonts, config, breakpoints, styles });

interface Props {
  children: React.ReactNode;
}

const InitChakraUI = ({ children }: Props) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default InitChakraUI;

"use client";

import { Global } from "@emotion/react";

import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";

const GlobalStyles = () => (
    <Global
        styles={`
      @font-face {
        font-family: 'Neue Machina';
        src: url('../../public/fonts/NeueMachina-Regular.ttf') format('ttf');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }

      @font-face {
        font-family: 'Neue Machina bold';
        src: url('/public/fonts/NeueMachina-Bold.ttf');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
    `}
    />
);

const fonts = {
    heading: "Neue Machina",
    body: `'Montserrat', sans-serif`,
};

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
    return (
        <>
            <GlobalStyles />
            <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </>
    );
};

export default InitChakraUI;

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
  font-family: "Neue Machina";
  src: url("../../public/fonts/NeueMachina-Ultralight.eot");
  src: local("Neue Machina Ultralight"), local("NeueMachina-Ultralight"),
    url("../../public/fonts/NeueMachina-Ultralight.eot?#iefix")
      format("embedded-opentype"),
    url("../../public/fonts/NeueMachina-Ultralight.woff2") format("woff2"),
    url("../../public/fonts/NeueMachina-Ultralight.woff") format("woff"),
    url("../../public/fonts/NeueMachina-Ultralight.ttf") format("truetype");
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: "Neue Machina";
  src: url("../../public/fonts/NeueMachina-Light.eot");
  src: local("Neue Machina Light"), local("NeueMachina-Light"),
    url("../../public/fonts/NeueMachina-Light.eot?#iefix")
      format("embedded-opentype"),
    url("../../public/fonts/NeueMachina-Light.woff2") format("woff2"),
    url("../../public/fonts/NeueMachina-Light.woff") format("woff"),
    url("../../public/fonts/NeueMachina-Light.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Neue Machina";
  src: url("../../public/fonts/NeueMachina-Black.eot");
  src: local("Neue Machina Black"), local("NeueMachina-Black"),
    url("../../public/fonts/NeueMachina-Black.eot?#iefix")
      format("embedded-opentype"),
    url("../../public/fonts/NeueMachina-Black.woff2") format("woff2"),
    url("../../public/fonts/NeueMachina-Black.woff") format("woff"),
    url("../../public/fonts/NeueMachina-Black.ttf") format("truetype");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "Neue Machina";
  src: url("../../public/fonts/NeueMachina-Regular.eot");
  src: local("Neue Machina Regular"), local("NeueMachina-Regular"),
    url("../../public/fonts/NeueMachina-Regular.eot?#iefix")
      format("embedded-opentype"),
    url("../../public/fonts/NeueMachina-Regular.woff2") format("woff2"),
    url("../../public/fonts/NeueMachina-Regular.woff") format("woff"),
    url("../../public/fonts/NeueMachina-Regular.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Neue Machina";
  src: url("../../public/fonts/NeueMachina-Bold.eot");
  src: local("Neue Machina Bold"), local("NeueMachina-Bold"),
    url("../../public/fonts/NeueMachina-Bold.eot?#iefix")
      format("embedded-opentype"),
    url("../../public/fonts/NeueMachina-Bold.woff2") format("woff2"),
    url("../../public/fonts/NeueMachina-Bold.woff") format("woff"),
    url("../../public/fonts/NeueMachina-Bold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: "Neue Machina";
  src: url("../../public/fonts/NeueMachina-Medium.eot");
  src: local("Neue Machina Medium"), local("NeueMachina-Medium"),
    url("../../public/fonts/NeueMachina-Medium.eot?#iefix")
      format("embedded-opentype"),
    url("../../public/fonts/NeueMachina-Medium.woff2") format("woff2"),
    url("../../public/fonts/NeueMachina-Medium.woff") format("woff"),
    url("../../public/fonts/NeueMachina-Medium.ttf") format("truetype");
  font-weight: 500;
  font-style: normal;
}

/* @font-face { */
/*   font-family: "Neue Machina"; */
/*   src: url("../../public/fonts/NeueMachina-Ultrabold.eot"); */
/*   src: local("Neue Machina Ultrabold"), local("NeueMachina-Ultrabold"), */
/*     url("../../public/fonts/NeueMachina-Ultrabold.eot?#iefix") */
/*       format("embedded-opentype"), */
/*     url("../../public/fonts/NeueMachina-Ultrabold.woff2") format("woff2"), */
/*     url("../../public/fonts/NeueMachina-Ultrabold.woff") format("woff"), */
/*     url("../../public/fonts/NeueMachina-Ultrabold.ttf") format("truetype"); */
/*   font-weight: 800; */
/*   font-style: normal; */
/* } */
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

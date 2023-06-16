"use client";

import { Global } from "@emotion/react";

// components
import InitChakraUI from "@/components/InitChakraUI";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";

// styles
import "@/styles/globals.css";
import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

const GlobalStyles = () => (
    <Global
        styles={`
      @font-face {
        font-family: 'Neue Machina';
        src: url('../../public/fonts/NeueMachina-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: 'Neue Machina bold';
        src: url('/public/fonts/NeueMachina-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
      }
    `}
    />
);

const RootLayout = ({ children }: Props) => (
    <html lang="ru">
        <body>
            <GlobalStyles />
            <InitChakraUI>
                <Header />
                <Box>{children}</Box>
                <Footer />
            </InitChakraUI>
        </body>
    </html>
);

export default RootLayout;

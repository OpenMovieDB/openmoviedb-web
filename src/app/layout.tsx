"use client";

// components
import InitChakraUI from "@/components/InitChakraUI";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";

import localFont from "next/font/local";

// styles
import "@/styles/globals.css";
import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

const NeueMachina = localFont({
    src: [
        {
            path: "../assets/fonts/NeueMachina-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../assets/fonts/NeueMachina-Light.woff2",
            weight: "400",
            style: "italic",
        },
        {
            path: "../assets/fonts/NeueMachina-Bold.woff2",
            weight: "700",
            style: "normal",
        },
        /* {
         *     path: "../assets/fonts/NeueMachina-UltraBold.woff2",
         *     weight: "700",
         *     style: "italic",
         * }, */
    ],
});

const RootLayout = ({ children }: Props) => (
    <html lang="ru">
        <body className={NeueMachina.className}>
            <InitChakraUI>
                <Header />
                <Box>{children}</Box>
                <Footer />
            </InitChakraUI>
        </body>
    </html>
);

export default RootLayout;

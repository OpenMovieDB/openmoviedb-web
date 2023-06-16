"use client";

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

const RootLayout = ({ children }: Props) => (
    <html lang="ru">
        <body>
            <InitChakraUI>
                <Header />
                <Box>{children}</Box>
                <Footer />
            </InitChakraUI>
        </body>
    </html>
);

export default RootLayout;

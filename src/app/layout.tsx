// components
import InitChakraUI from "@/components/InitChakraUI";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";

// styles
import "@/styles/globals.css";

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => (
  <html lang="ru">
    <body>
      <InitChakraUI>
        <Header placement="static" />
        <main>{children}</main>
        <Footer />
      </InitChakraUI>
    </body>
  </html>
);

export default RootLayout;

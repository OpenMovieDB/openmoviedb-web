import * as React from "react";
import Header from "@/components/Layout/components/Header/Header";
import Footer from "@/components/Layout/components/Footer/Footer";

export const Layout = ({ children }: any): JSX.Element => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

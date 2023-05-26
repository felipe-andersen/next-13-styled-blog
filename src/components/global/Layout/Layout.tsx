import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { StyledLayout } from "./Layout.styled";

const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <StyledLayout>
      <Navbar />
      {children}
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

"use client";
import React from "react";
import { FooterText, StyledFooter } from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        &copy; {new Date().getFullYear()}, Mini Blog - Evo Tech
      </FooterText>
    </StyledFooter>
  );
};

export default Footer;

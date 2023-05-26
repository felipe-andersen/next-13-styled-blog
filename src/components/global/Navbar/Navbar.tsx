import Link from "next/link";
import React from "react";
import { Logo, StyledNavbar } from "./Navbar.styled";

const Navbar = () => {
  return (
    <StyledNavbar>
      <div className="main-nav">
        <Link href="/" passHref>
          <Logo>Mini Blog</Logo>
        </Link>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;

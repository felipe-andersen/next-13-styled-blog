"use client";

import styled from "styled-components";

export const StyledNavbar = styled.nav`
  padding: 1rem 0;
  border-bottom: 1px solid rgb(238, 238, 238);
  background-color: ${(props) => props.theme.colors.white};
  position: sticky;
  z-index: 10;
  top: 0;
  & .main-nav {
    max-width: ${({ theme }) => theme.breakpoints.xl}px;
    margin: 0 auto;
    padding: 0 1rem;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
      padding: 0 2rem;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
      padding: 0 3rem;
    }
  }
`;

export const Logo = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
  font-size: 1.5rem;
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    font-size: 1.8rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    font-size: 2rem;
  }
`;

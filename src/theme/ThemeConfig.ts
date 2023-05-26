"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  body {
    font-family: 'DM Sans', sans-serif;
    color: #222222;
  }
  a{
    text-decoration:none;
  }
`;
export default GlobalStyle;

import styled from "styled-components";

export const Parser = styled.div`
  a {
    color: ${(props) => props.theme.colors.primary};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: "140%";
  }
  pre {
    padding: 1rem;
    background: #222222;
    color: ${(props) => props.theme.colors.primary};
    margin-block: 0.75rem;
    width: 100%;
    overflow: auto;
  }
  p {
    margin-block: 1.25rem;
    font-size: 1.1rem;
    line-height: 160%;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
      font-size: 1.3rem;
    }
  }
  img {
    width: 100% !important;
    height: auto !important;
    margin-block: 2.5rem;
    object-fit: "contain";
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
      font-size: 3rem;
    }
    @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
      font-size: 4rem;
    }
  }
  ul {
    padding-left: 1.5rem;
  }
  ol {
    padding-left: 1.5rem;
  }
  li {
    font-size: 1.1rem;
    line-height: 160%;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
      font-size: 1.3rem;
    }
  }
`;

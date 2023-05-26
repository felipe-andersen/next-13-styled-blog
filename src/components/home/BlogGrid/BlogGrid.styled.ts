"use client";

import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 1.5rem;
  column-gap: 2.5rem;
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    row-gap: 2rem;
    column-gap: 3rem;
  }
`;

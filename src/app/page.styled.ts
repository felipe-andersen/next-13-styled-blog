"use client";
import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};
  margin-bottom: 1.5rem;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    font-size: 2.5rem;
  }
`;

export const Section = styled.section`
  max-width: ${({ theme }) => theme.breakpoints.xl}px;
  margin: 2rem auto;
  padding: 0 1rem;
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 0 2rem;
    margin: 2.5rem auto;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    padding: 0 3rem;
    margin: 3rem auto;
  }
`;

export const TabContainer = styled.div``;

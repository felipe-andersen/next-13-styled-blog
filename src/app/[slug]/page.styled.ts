"use client";

import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
`;

export const Title = styled.h1`
  margin: 1rem 0;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.dark};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: 140%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    font-size: 2rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    font-size: 2.75rem;
  }
`;

export const AuthorContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    margin-top: 1.5rem;
  }
`;

export const ThumbnailWrapper = styled.div`
  aspect-ratio: 16 / 6;
  margin: 1.5rem 0;
  & .image-container {
    height: 100%;
    position: relative;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    margin: 2rem 0;
  }
`;

export const ContentWrapper = styled.div`
  max-width: ${(props) => props.theme.breakpoints.lg}px;
  margin: 0 auto;
`;

export const ErrorTitle = styled.h2`
  margin: 1rem 0;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.dark};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: 140%;
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.dark};
  margin: 1.5rem 0;
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    font-size: 1.8rem;
    margin: 2rem 0;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    font-size: 2rem;
  }
`;

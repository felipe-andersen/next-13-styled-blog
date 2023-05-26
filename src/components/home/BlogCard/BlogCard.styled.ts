"use client";

import styled from "styled-components";

export const StyledBlogCard = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  height: 100%;
`;

export const ThumbnailWrapper = styled.div`
  aspect-ratio: 16 / 7;
  & .image-container {
    height: 100%;
    position: relative;
    width: 100%;
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    transition: all 200ms;
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const Chip = styled.div`
  color: ${(props) => props.theme.colors.primary};
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};
  text-transform: uppercase;
`;

export const ContentWrapper = styled.div`
  padding: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0;
  color: ${(props) => props.theme.colors.dark};
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.div`
  font-size: 0.9rem;
  margin-top: 1rem;
  font-weight: ${(props) => props.theme.fontWeight.regular};
  color: #22222280;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 150%;
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    font-size: 1rem;
  }
`;

export const DateTime = styled(Description)`
  margin-top: 0;
`;

"use client";
import styled from "styled-components";

export const StyledAuthorBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  & .avatar {
    height: 2.8rem;
    width: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
    min-width: 2.8rem;
    position: relative;
    border: 0.5px solid #8f8f8f55;
  }
  & .name {
    font-size: 1rem;
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: #4f4f4f;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
      font-size: 1.125rem;
    }
  }
  & .date {
    margin-top: 0.25rem;
    color: #828282;
    font-size: 0.9rem;
    @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
      font-size: 1rem;
    }
  }
`;

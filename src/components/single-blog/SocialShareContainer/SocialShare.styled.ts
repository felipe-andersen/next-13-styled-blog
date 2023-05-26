"use client";

import styled from "styled-components";

export const SocialShareContainer = styled.div`
  border-width: 2px;
  border-color: #eeeeee;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.white};
  height: 2.5rem;
  display: flex;
  align-items: center;
`;

export const ShareButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  color: #4f4f4f;
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;

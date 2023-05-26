import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: auto;
  background-color: ${(props) => props.theme.colors.white};
  border-top: 1px solid rgb(238, 238, 238);
  padding: 1.125rem 3rem;
  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    padding: 1.5rem 2rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    padding: 2rem 3rem;
  }
`;

export const FooterText = styled.p`
  font-size: 1rem;
  color: #4f4f4f;
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeight.regular};
`;

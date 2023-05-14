import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  text-decoration: none;
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.fs100};
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.regular};
    font-family: ${theme.fontFamily.inter};

    &:hover {
      color: ${theme.colors.gray200};
      transform: scale(1.1);
    }
  `}
`;

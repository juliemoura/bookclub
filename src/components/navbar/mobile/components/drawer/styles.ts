import styled, { css } from "styled-components";
import { Drawer } from "antd";
import { Link as LinkReact } from "react-router-dom";

export const Container = styled.div``;

export const ButtonDrawer = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const DrawerContainer = styled(Drawer)``;

export const DrawerContent = styled.div`
  display: flex;

  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
  flex-direction: column;
`;

export const LinkContent = styled(LinkReact)`
  display: flex;
  gap: 10px;
  text-decoration: none;
`;

export const Typography = styled.p`
  text-decoration: none;
  
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
import { Col, Row } from "antd";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 90px 0;

  @media (max-width: 768px) {
    height: 100%;
    padding: 30px 0;
  }
`;

export const Content = styled(Row)`
  display: flex;
  justify-content: center;
  padding: 0 30px;

  @media (max-width: 991px) {
    padding: 20px 20px;
  }
`;

export const LeftContainer = styled(Col)`
  display: flex;
  align-items: center;

  @media (max-width: 991px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }

  @media (max-width: 786px) {
    margin-bottom: 0;
  }
`;

export const RightContainer = styled(Col)`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 991px) {
    display: flex;
    margin-top: 30px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Button = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 2px;
  text-decoration: none;
  width: max-content;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
`;

export const ButtonContent = styled.div`
  padding-left: 15px;

  ${({ theme }) => css`
    font-size: ${theme.fontSize.fs100};
    color: ${theme.colors.black};
    font-weight: ${theme.fontWeight.regular};
    font-family: ${theme.fontFamily.inter};
  `}
`;

export const LinkContainer = styled(Link)`
  border-radius: 0 2px 2px 0;
  text-decoration: none;
  padding: 10px 20px;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => css`
    background: ${theme.colors.black};
    color: ${theme.colors.green100};

    &:hover {
      background-color: ${theme.colors.gray200};
      color: ${theme.colors.green100};
    }
  `}
`;

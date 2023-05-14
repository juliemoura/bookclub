import styled from "styled-components";
import { Typography as TypographyMUI } from "@mui/material";

export const Container = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  padding: 60px 0;

  @media (max-width: 768px) {
    height: 100%;
    padding: 0;
    gap: 20px;
  }
`;

export const Typography = styled(TypographyMUI)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.green400};
`;

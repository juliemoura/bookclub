import styled from "styled-components";

export const Container = styled.div``;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 20px;

  @media (max-width: 300px) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;

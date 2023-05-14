import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  width: max-content;
  padding: 20px;

  @media (max-width: 300px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    border: 1px solid blue;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

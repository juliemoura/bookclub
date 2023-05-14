import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 53px 0 53px;
  padding-bottom: 20px;  
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  > :nth-child(4) {
    margin-right: 30px;
  }
`;

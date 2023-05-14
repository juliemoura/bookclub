import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 200px;
  height: 500px;
`;

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Button = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.green200};
  border-radius: 99px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover{
    background-color: ${({ theme }) => theme.colors.green300};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
  }
`;

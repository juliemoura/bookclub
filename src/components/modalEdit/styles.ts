import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0;
`;

export const AddButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.green300};
  background: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.green100};
  }
`;

export const CancelButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.red};
  background: none;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.red200};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

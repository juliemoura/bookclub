import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.label``;

export const StyledInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.green300};
  padding: 10px 20px;
  font-family: ${({ theme }) => theme.fontFamily.inter};
  border-radius: 5px;

  &:focus{
    outline: none;
  }
`;

import styled from "styled-components";

export const Container = styled.section``;

export const SuperiorContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;


export const Input = styled.input`
  border: none;
  padding-left: 10px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
  }

  &:focus{
    outline: none;
  }
`;

export const InputExternal = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.green300};
  border-radius: 5px;
  display: flex;
`;

export const SearchButton = styled.button`
  background: ${({ theme }) => theme.colors.green300};
  border: none;
  padding: 5px;
  border-radius: 0 5px 5px 0;
  transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out;

  &:hover{
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.green100};
  }
`;

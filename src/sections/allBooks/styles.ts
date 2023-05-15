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

export const ButtonsDownloadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 40px;
  gap: 20px;
`;

export const DownloadButton = styled.button`
  font-family: ${({ theme }) => theme.fontFamily.inter};
  border: 1px solid ${({ theme }) => theme.colors.green200};
  padding: 10px 20px;
  background: none;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.green300};
    cursor: pointer;
  }
`;

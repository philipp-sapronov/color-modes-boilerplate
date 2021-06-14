import styled from "styled-components";

export const Button = styled.button`
  position: fixed;
  right: 20px;
  top: 20px;
  background-color: ${({ theme }) => theme.palette.white};
  border: none;
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
`;

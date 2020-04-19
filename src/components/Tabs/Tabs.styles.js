import styled from "styled-components";

export const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  width: 50%;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #29bdba;
    opacity: 1;
  `}
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

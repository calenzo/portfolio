import styled from "styled-components";

export const Items = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 40px;
  gap: 30px;
`;

export const Item = styled.p<{ isActive: boolean }>`
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.text};
  cursor: pointer;
`;

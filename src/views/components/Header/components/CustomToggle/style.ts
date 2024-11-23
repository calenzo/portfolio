import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.text};
`;

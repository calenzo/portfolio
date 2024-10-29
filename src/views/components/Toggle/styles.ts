import styled, { css } from "styled-components";

import { IContainer } from "./@types";

export const Container = styled.div<IContainer>`
  background-color: ${({ theme }) => theme.colors.text};
  width: 40px;
  height: 20px;
  display: flex;
  animation-duration: 0.05s;

  @keyframes turnon {
    0% {
      justify-content: flex-start;
    }
    50% {
      justify-content: center;
    }
    100% {
      justify-content: flex-end;
    }
  }

  @keyframes turnoff {
    0% {
      justify-content: flex-end;
    }
    50% {
      justify-content: center;
    }
    100% {
      justify-content: flex-start;
    }
  }

  ${({ isToggled }) =>
    isToggled
      ? css`
          animation-name: turnon;
          justify-content: flex-end;
        `
      : css`
          animation-name: turnoff;
          justify-content: flex-start;
        `}
`;

export const Toggle = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 3px solid ${({ theme }) => theme.colors.text};
`;

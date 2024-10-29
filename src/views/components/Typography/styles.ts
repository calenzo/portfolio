import styled, { css } from "styled-components";

import { IText, TypographyVariants } from "./@types";

const variantsText = {
  [TypographyVariants.normal]: css`
    font-size: 14px;
    font-weight: 400;

    @media (max-width: ${({ theme }) => theme.media.mobile_landscape}) {
      font-size: 16px;
    }
  `,
  [TypographyVariants.subTitle]: css`
    font-size: 18px;
    font-weight: 500;

    @media (max-width: ${({ theme }) => theme.media.mobile_landscape}) {
      font-size: 20px;
    }
  `,
  [TypographyVariants.title]: css`
    font-size: 24px;
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.media.mobile_landscape}) {
      font-size: 26px;
    }
  `,
};

export const Text = styled.p<IText>`
  ${({ variant }) => variantsText[variant as TypographyVariants]}

  ${({ isPrimary }) =>
    isPrimary
      ? css`
          color: ${({ theme }) => theme.colors.primary};
        `
      : css`
          color: ${({ theme }) => theme.colors.text};
        `}
`;

import { ITypography, TypographyVariants } from "./@types";

import * as Styled from "./styles";

export const Typography = ({
  variant = TypographyVariants.normal,
  children,
  isPrimary = false,
}: ITypography) => <Styled.Text variant={variant} isPrimary={isPrimary}>{children}</Styled.Text>;

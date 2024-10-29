export enum TypographyVariants {
  title = "title",
  subTitle = "subTitle",
  normal = "normal",
}

export interface ITypography {
  variant?: TypographyVariants;
  children: string;
  isPrimary?: boolean;
}

export interface IText extends ITypography {
  variant: TypographyVariants;
}

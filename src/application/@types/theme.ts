interface IMedia {
  mobile_portrait: string;
  mobile_default: string;
  mobile_landscape: string;
  tablet_portrait: string;
  tablet: string;
  tablet_landscape: string;
  laptops_landscape: string;
  desktop_hd: string;
  desktop_fullhd: string;
}

export enum ITypeTheme {
  dark = "dark",
  white = "white",
}

export interface ITheme {
  [ITypeTheme.dark]: {
    media: IMedia;
    colors: {
      primary: string;
      secondary: string;
      text: string;
    };
  };
  [ITypeTheme.white]: {
    media: IMedia;
    colors: {
      primary: string;
      secondary: string;
      text: string;
    };
  };
}

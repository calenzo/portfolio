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

export interface ITheme {
  dark: {
    media: IMedia;
    colors: {
      primary: string;
      secondary: string;
      text: string;
    };
  };
  white: {
    media: IMedia;
    colors: {
      primary: string;
      secondary: string;
      text: string;
    };
  };
}

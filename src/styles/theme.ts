import { ITheme } from "../application/@types";

export const media = {
  mobile_portrait: "320px",
  mobile_default: "360px",
  mobile_landscape: "480px",
  tablet_portrait: "600px",
  tablet: "768px",
  tablet_landscape: "801px",
  laptops_landscape: "1024px",
  desktop_hd: "1280px",
  desktop_fullhd: "1600px",
};

export const theme: ITheme = {
  dark: {
    media,
    colors: {
      primary: "#7CDF51",
      secondary: "#272727",
      text: "#FFFFFF",
    },
  },
  white: {
    media,
    colors: {
      primary: "#1E6200",
      secondary: "#FFFFFF",
      text: "#272727",
    },
  },
};

import { ITypeTheme } from "../../@types/theme";

const state = {
  theme: ITypeTheme.dark,
};

export const initialValues = {
  state,
  context: {
    state,
    setState: () => {},
  },
};

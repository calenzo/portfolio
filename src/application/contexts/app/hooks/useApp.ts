import { useContext } from "react";
import { AppContext } from "../useContext";
import { ITypeTheme } from "../../../@types/theme";

export const useApp = () => {
  const { state, setState } = useContext(AppContext);

  const toggleTheme = () => {
    setState({
      ...state,
      theme:
        state.theme === ITypeTheme.dark ? ITypeTheme.white : ITypeTheme.dark,
    });
  };

  return {
    state,
    setState,
    toggleTheme,
  };
};

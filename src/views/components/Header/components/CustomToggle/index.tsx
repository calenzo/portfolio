import { ITypeTheme } from "../../../../../application/@types/theme";
import { useApp } from "../../../../../application/contexts/app/hooks/useApp";
import { Toggle } from "../../../Toggle";

import * as Styled from "./style";

export const CustomToggle = () => {
  const { state, toggleTheme } = useApp();

  const toggleFunction = () => {
    toggleTheme();
  };

  const currentThemeName = state.theme === ITypeTheme.dark ? "Escuro" : "White";

  return (
    <Styled.Container>
      <Styled.Text>{currentThemeName}</Styled.Text>
      <Toggle
        isToggled={state.theme === ITypeTheme.dark}
        toggleFunction={toggleFunction}
      />
    </Styled.Container>
  );
};

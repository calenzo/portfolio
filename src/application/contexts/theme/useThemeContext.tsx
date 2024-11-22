import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useApp } from "../app/hooks/useApp";
import { theme } from "../../../styles";

export const ThemeProvider: React.FC<{ children: React.ReactElement[] }> = ({
  children,
}) => {
  const { state } = useApp();

  return (
    <StyledThemeProvider theme={theme[state.theme]}>
      {children}
    </StyledThemeProvider>
  );
};

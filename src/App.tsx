import { AppProvider } from "./application/contexts/app";
import { ThemeProvider } from "./application/contexts/theme";

import { Routes } from "./routes";
import { GlobalStyles } from "./styles";

const App = () => (
  <AppProvider>
    <ThemeProvider>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </AppProvider>
);

export default App;

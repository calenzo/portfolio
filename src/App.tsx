import { Layout } from "./views/components";

import { AppProvider } from "./application/contexts/app";
import { ThemeProvider } from "./application/contexts/theme";

import { Routes } from "./routes";
import { GlobalStyles } from "./styles";

const App = () => (
  <AppProvider>
    <ThemeProvider>
      <GlobalStyles />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  </AppProvider>
);

export default App;

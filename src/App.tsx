import { useState } from "react";
import { ThemeProvider } from "styled-components";

import { Layout } from "./views/components";

import { Routes } from "./routes";
import { GlobalStyles, theme } from "./styles";

function App() {
  const [currentTheme] = useState<"dark" | "white">("dark");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyles />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;

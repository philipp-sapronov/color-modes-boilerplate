import React from "react";
import { ThemeProvider as Provider } from "styled-components";
import { GlobalStyle } from "./global-styles";
import { theme } from "./theme";
import { useColorMode } from "./color-mode/useColorMode";

export const ThemeProvider: React.FC = ({ children }) => {
  const [mode] = useColorMode();

  return (
    <Provider theme={{ mode: mode, ...theme }}>
      <GlobalStyle />
      {children}
    </Provider>
  );
};

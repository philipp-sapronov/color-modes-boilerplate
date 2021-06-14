import React from "react";
import { ThemeProvider as Provider } from "./theme-provider";
import { ColorModeProvider } from "./color-mode/provider";

export const AppTheme: React.FC = ({ children }) => {
  return (
    <ColorModeProvider>
      <Provider>{children}</Provider>
    </ColorModeProvider>
  );
};

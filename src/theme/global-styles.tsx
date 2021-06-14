import { createGlobalStyle } from "styled-components";
import { cssVariableNames as names, colors } from "./palette/palette";

export const GlobalStyle = createGlobalStyle`
  :root[mode="light"] {
      ${names.white}: ${colors.white};
      ${names.black}: ${colors.black};
      ${names.primary}: ${colors.primary};
  }

  :root[mode="dark"] {
      ${names.white}: ${colors.black};
      ${names.black}: ${colors.white};
      ${names.primary}: ${colors.primary};
  }
`;

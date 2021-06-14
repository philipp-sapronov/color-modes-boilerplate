import { getCssPalette } from "./palette/get-css-palette";
import { colors, cssVariableNames } from "./palette/palette";

export const theme = {
  palette: getCssPalette(cssVariableNames, colors),
  colors: colors,
};

export const cssVariableNames = {
  white: "--white",
  black: "--black",
  primary: "--primary",
} as const;

export const colors: Record<keyof typeof cssVariableNames, string> = {
  white: "#fff",
  black: "#282c34",
  primary: "#61dafb",
};

export type ColorModeVariant = "light" | "dark";

const isCorrectVariant = (v: unknown): v is ColorModeVariant => {
  return ColorMode.variant[v as ColorModeVariant] === v;
};

export const ColorMode = {
  variant: {
    light: "light" as const,
    dark: "dark" as const,
  },
  root: {
    get(): ColorModeVariant | null {
      const variant = document.documentElement.getAttribute("mode");
      if (!isCorrectVariant(variant)) return null;
      return variant;
    },
    set(value: ColorModeVariant) {
      document.documentElement.setAttribute("mode", value);
    },
  },
  localStorage: {
    get(): ColorModeVariant | null {
      const variant = localStorage.getItem("mode");
      if (!isCorrectVariant(variant)) return null;
      return variant;
    },
    set(value: ColorModeVariant) {
      localStorage.setItem("mode", value);
    },
  },
  cookie: {}, //
};

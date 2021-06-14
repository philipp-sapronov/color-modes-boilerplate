import React, { useCallback, useState } from "react";
import { ColorMode, ColorModeVariant } from "./color-mode";

interface ColorModeCtx {
  mode: ColorModeVariant;
  setMode: (newMode: ColorModeVariant) => void;
}

export const ColorModeCtx = React.createContext({} as ColorModeCtx);

export const ColorModeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<ColorModeVariant>(() => {
    const initialMode =
      ColorMode.root.get() ||
      ColorMode.localStorage.get() ||
      ColorMode.variant.light;

    ColorMode.root.set(initialMode);
    ColorMode.localStorage.set(initialMode);

    return initialMode;
  });

  const setColorMode = useCallback((newMode: ColorModeVariant) => {
    setMode(newMode);
    ColorMode.root.set(newMode);
    ColorMode.localStorage.set(newMode);
  }, []);

  return (
    <ColorModeCtx.Provider value={{ mode: mode, setMode: setColorMode }}>
      {children}
    </ColorModeCtx.Provider>
  );
};

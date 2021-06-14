import { useContext } from "react";
import { ColorModeCtx } from "./provider";

export const useColorMode = () => {
  const { mode, setMode } = useContext(ColorModeCtx);

  return [mode, setMode] as const;
};

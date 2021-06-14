import { useColorMode } from "./theme/color-mode/useColorMode";
import { Button } from "./ToggleModeButton.styles";

export const ToggleButton = () => {
  const [mode, setMode] = useColorMode();

  const handleClick = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <Button onClick={handleClick}>{mode === "light" ? "🌝" : "🌙"}</Button>
  );
};

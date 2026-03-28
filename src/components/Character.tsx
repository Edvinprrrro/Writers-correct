import { Surface } from "./themeFoundation/surface/Surface";
import { ThemeText } from "./themeFoundation/ThemeText";

export function Character() {
  return (
    <Surface tone="surface">
      <ThemeText variant="primary">Character</ThemeText>
      <ThemeText variant="secondary">This is a character component.</ThemeText>
    </Surface>
  );
}

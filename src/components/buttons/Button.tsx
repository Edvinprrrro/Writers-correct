import { StyleSheet, PressableProps } from "react-native";
import { ThemeText } from "../themeFoundation/ThemeText";
import { ThemePressable } from "../themeFoundation/ThemePressable";

type ButtonProps = PressableProps & {
  variant: "primary" | "secondary";
  title: string;
};

export function Button({ title, variant, style, ...props }: ButtonProps) {
  return (
    <ThemePressable
      {...props}
      variant={variant}
      style={(state) => [
        baseStyle.container,
        typeof style === "function" ? style(state) : style,
      ]}
    >
      <ThemeText variant="primary">{title}</ThemeText>
    </ThemePressable>
  );
}

const baseStyle = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});

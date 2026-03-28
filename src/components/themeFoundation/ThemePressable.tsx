import { Pressable, PressableProps } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AppTheme } from "@/src/types/AppTheme";

type ThemePressableProps = PressableProps & {
  variant: "primary" | "secondary" | "card";
};

export function ThemePressable({
  children,
  variant,
  style,
  ...props
}: ThemePressableProps) {
  const { colors } = useTheme() as AppTheme;

  return (
    <Pressable
      {...props}
      style={(state) => [
        { backgroundColor: colors[variant] },
        typeof style === "function" ? style(state) : style,
      ]}
    >
      {typeof children === "function" ? children : children}
    </Pressable>
  );
}

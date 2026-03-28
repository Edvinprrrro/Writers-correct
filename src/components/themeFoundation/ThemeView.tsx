import { AppTheme } from "@/src/types/AppTheme";
import { useTheme } from "@react-navigation/native";

import { View, ViewProps } from "react-native";

type ThemeViewProps = ViewProps & {
  variant: "card" | "primary" | "secondary";
};

export function ThemeView({
  children,
  variant,
  style,
  ...rest
}: ThemeViewProps) {
  const { colors } = useTheme() as AppTheme;
  const backgroundColor = colors[variant];

  return (
    <View {...rest} style={[{ backgroundColor }, style]}>
      {children}
    </View>
  );
}

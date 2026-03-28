import { TextProps, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { AppTheme } from "../../types/AppTheme";

type ThemeTextTone = "primary" | "secondary";

type ThemeTextProps = TextProps & {
  variant: ThemeTextTone;
};

export function ThemeText({ variant, style, ...rest }: ThemeTextProps) {
  const { colors } = useTheme() as AppTheme;
  const color = variant === "primary" ? colors.text : colors.secondaryText;

  return <Text style={[{ color }, style]} {...rest} />;
}

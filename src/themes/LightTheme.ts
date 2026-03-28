import { AppTheme } from "../types/AppTheme";
import { DefaultTheme } from "@react-navigation/native";

export const LightTheme: AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    secondary: "rgb(115, 160, 210)",
    secondaryText: "color: rgba(28, 28, 30, 0.6)",
  },
};

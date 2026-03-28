import { DarkTheme as NatDarkTheme } from "@react-navigation/native";
import { AppTheme } from "../types/AppTheme";

export const DarkTheme: AppTheme = {
  ...NatDarkTheme,
  colors: {
    ...NatDarkTheme.colors,
    secondary: "rgb(120, 160, 200)",
    secondaryText: "rgb(150, 150, 160)",
  },
};

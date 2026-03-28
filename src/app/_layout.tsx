import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@react-navigation/native";
import { LightTheme } from "../themes/LightTheme";
import { DarkTheme } from "../themes/DarkTheme";
import { useEffect, useState } from "react";
import { initializeDbOnce } from "../db/initializeDb";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [dbReady, setDbReady] = useState(false);

  useEffect(() => {
    initializeDbOnce()
      .then(() => setDbReady(true))
      .catch((err) => console.error("DB init failed:", err));
  }, []);

  if (!dbReady) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "light" ? LightTheme : DarkTheme}>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

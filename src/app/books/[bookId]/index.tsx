import { useTheme } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { bookId } = useLocalSearchParams();
  const { colors } = useTheme();

  return (
    <SafeAreaView>
      <Text style={{ color: colors.text }}>{bookId}</Text>
    </SafeAreaView>
  );
}

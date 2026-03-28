import BottomSheet, {
  BottomSheetProps,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { style } from "./appBottomSheetStyle";
import { ThemeText } from "../themeFoundation/ThemeText";
import { View } from "react-native";

type AppBottomSheetProps = BottomSheetProps & {
  header: string;
  ref: React.RefObject<BottomSheetMethods | null>;
};

export function AppBottomSheet({
  header,
  ref,
  children,
  ...rest
}: AppBottomSheetProps) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <BottomSheet
      {...rest}
      ref={ref}
      index={-1}
      backgroundStyle={{ backgroundColor: colors.card }}
      snapPoints={["40%"]}
      enablePanDownToClose
    >
      <BottomSheetView
        style={[{ paddingBottom: insets.bottom + 5 }, style.bottomView]}
      >
        <ThemeText variant="primary">{header}</ThemeText>
        <View>{children}</View>
      </BottomSheetView>
    </BottomSheet>
  );
}

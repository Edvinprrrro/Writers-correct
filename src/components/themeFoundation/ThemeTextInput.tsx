import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "@react-navigation/native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

type ThemeTextInputProps = {
  bottomSheet?: boolean;
} & TextInputProps;

export function ThemeTextInput(props: ThemeTextInputProps) {
  const { style, bottomSheet, ...rest } = props;
  const { colors } = useTheme();

  if ("bottomSheet" in props && props.bottomSheet) {
    return (
      <BottomSheetTextInput
        style={[{ borderColor: colors.text, color: colors.text }, style]}
        {...rest}
      />
    );
  }

  return (
    <TextInput
      style={[{ borderColor: colors.text, color: colors.text }, style]}
      {...rest}
    />
  );
}

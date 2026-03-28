import { StyleSheet, TextInputProps, View } from "react-native";
import { ThemeTextInput } from "../themeFoundation/ThemeTextInput";
import { ThemeText } from "../themeFoundation/ThemeText";

type FormTextBoxProps = TextInputProps & {
  field: string;
};

export function FormTextBox({ field, value, ...rest }: FormTextBoxProps) {
  return (
    <View style={style.container}>
      <ThemeText variant="primary">{field}</ThemeText>
      <ThemeTextInput
        {...rest}
        bottomSheet
        textAlignVertical="top"
        numberOfLines={9}
        style={style.inputText}
      />
    </View>
  );
}

const style = StyleSheet.create({
  inputText: {
    borderRadius: 10,
    borderWidth: 2,
    height: 140,
  },
  container: {
    gap: 10,
  },
});

import { StyleSheet, TextInputProps, View } from "react-native";
import { ThemeText } from "../themeFoundation/ThemeText";
import { ThemeTextInput } from "../themeFoundation/ThemeTextInput";

type FormLabelProps = TextInputProps & {
  field: string;
  bottomSheet?: boolean;
};

export function FormLabel({ field, bottomSheet, ...rest }: FormLabelProps) {
  return (
    <View style={style.container}>
      <ThemeText variant="primary">{field}</ThemeText>
      <ThemeTextInput
        {...rest}
        bottomSheet={bottomSheet}
        style={style.inputText}
      />
    </View>
  );
}

const style = StyleSheet.create({
  inputText: {
    borderRadius: 10,
    borderWidth: 2,
  },
  container: {
    gap: 10,
  },
});

import { EnrichedTextInput } from "react-native-enriched";
import type {
  EnrichedTextInputInstance,
  OnChangeStateEvent,
} from "react-native-enriched";
import { useState, useRef } from "react";
import { View, Button, StyleSheet } from "react-native";

export default function Editor() {
  const ref = useRef<EnrichedTextInputInstance>(null);

  const [stylesState, setStylesState] = useState<OnChangeStateEvent | null>();

  return (
    <View style={styles.container}>
      <EnrichedTextInput
        ref={ref}
        onChangeState={(e) => setStylesState(e.nativeEvent)}
        style={styles.input}
      />
      <Button
        title={stylesState?.bold.isActive ? "Unbold" : "Bold"}
        color={stylesState?.bold.isActive ? "green" : "gray"}
        onPress={() => ref.current?.toggleBold()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    fontSize: 20,
    padding: 10,
    maxHeight: 200,
    backgroundColor: "lightgray",
  },
});

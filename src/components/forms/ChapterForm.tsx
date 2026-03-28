import { FormLabel } from "./FormLabel";
import { useState } from "react";
import { Button } from "../buttons/Button";
import { View, StyleSheet } from "react-native";
import { BottomSheetView } from "@gorhom/bottom-sheet";

interface ChapterFormProps {
  onPressCancel: () => void;
  onPressSave: (title: string, chapterOrder: number) => Promise<void>;
  bottomSHeet?: boolean;
}

export function ChapterForm({
  onPressCancel,
  onPressSave,
  bottomSHeet,
}: ChapterFormProps) {
  const [title, setTitle] = useState<string>("");
  const [order, setOrder] = useState<number>(1);

  function handleTitleChange(newTitle: string) {
    setTitle(newTitle);
  }

  function handleOrderChange(newOrder: string) {
    setOrder(Number(newOrder));
  }

  function handlePressCancel() {
    setTitle("");
    setOrder(0);
    onPressCancel();
  }

  function handlePressSave() {
    setTitle("");
    setOrder(0);
    onPressSave(title, order);
  }

  if (bottomSHeet) {
    return (
      <BottomSheetView>
        <FormLabel
          bottomSheet
          onChangeText={handleTitleChange}
          value={title}
          field="Title"
        />
        <FormLabel
          bottomSheet
          keyboardType="numeric"
          maxLength={2}
          onChangeText={handleOrderChange}
          value={order.toString()}
          field="Order"
        />
        <BottomSheetView style={style.buttonView}>
          <Button
            onPress={handlePressCancel}
            variant="secondary"
            title="Cancel"
            style={style.button}
          />
          <Button
            onPress={handlePressSave}
            variant="primary"
            title="Save "
            style={style.button}
          />
        </BottomSheetView>
      </BottomSheetView>
    );
  }

  return (
    <View>
      <FormLabel
        bottomSheet
        onChangeText={handleTitleChange}
        value={title}
        field="Title"
      />
      <FormLabel
        bottomSheet
        keyboardType="numeric"
        onChangeText={handleOrderChange}
        value={order.toString()}
        field="Order"
      />
      <View style={style.buttonView}>
        <Button
          onPress={handlePressCancel}
          variant="secondary"
          title="Cancel"
          style={style.button}
        />
        <Button
          onPress={handlePressSave}
          variant="primary"
          title="Save "
          style={style.button}
        />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    gap: 20,
  },
  button: {
    height: 30,
    width: 100,
  },
  buttonView: {
    marginTop: 20,
    flexDirection: "row",
    gap: 10,
    alignSelf: "flex-end",
  },
});

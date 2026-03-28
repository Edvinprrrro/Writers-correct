import { StyleSheet, View } from "react-native";
import { FormLabel } from "./FormLabel";
import { FormTextBox } from "./FormTextBox";
import { useState } from "react";
import { addBook } from "@/src/db/addBook";
import { Button } from "../buttons/Button";

interface BookFormProps {
  onPressCancel: () => void;
  onPressSave: () => void;
  onAddBook: (newBook: {
    id: number;
    title: string;
    description: string | undefined;
  }) => void;
}

export function BookForm({
  onPressCancel,
  onPressSave,
  onAddBook,
}: BookFormProps) {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleTitleChange(newTitle: string) {
    setTitle(newTitle);
  }

  function handleDescriptionChange(newDescription: string) {
    setDescription(newDescription);
  }

  function handlePressCancel() {
    setTitle("");
    setDescription("");
    onPressCancel();
  }

  async function handlePressSave() {
    const addedBook = await addBook({ title, description });
    onAddBook(addedBook);
    setTitle("");
    setDescription("");
    onPressSave();
  }

  return (
    <View style={style.container}>
      <FormLabel
        bottomSheet
        value={title}
        onChangeText={handleTitleChange}
        field="Title"
      />
      <FormTextBox
        value={description}
        onChangeText={handleDescriptionChange}
        field="Description (optional)"
      />
      <View style={style.buttonView}>
        <Button
          variant="secondary"
          title="Cancel"
          onPress={handlePressCancel}
          style={style.button}
        />

        <Button
          variant="primary"
          onPress={handlePressSave}
          style={style.button}
          title="Save"
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

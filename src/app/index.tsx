import { ScrollView, Dimensions, Keyboard } from "react-native";
import { useCallback, useEffect, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BookCard } from "../features/bookCard/BookCard";
import BottomSheet from "@gorhom/bottom-sheet";
import { getBooks } from "../db/getBooks";
import { AppBottomSheet } from "../components/appBottomSheet/AppBottomSheet";
import { BookForm } from "../components/forms/BookForm";
import { Button } from "../components/buttons/Button";

export default function Index() {
  const sheetRef = useRef<BottomSheet>(null);
  const [books, setBooks] = useState<any[]>([]);
  const { width } = Dimensions.get("window");

  // Get books
  useEffect(() => {
    (async () => {
      const data = await getBooks();
      setBooks(data);
    })();
  }, []);

  function handleCancelPress() {
    sheetRef.current?.close();
    Keyboard.dismiss();
  }

  function handleSavePress() {
    sheetRef.current?.close();
    Keyboard.dismiss();
  }

  const handleAddBook = useCallback((book: any) => {
    setBooks((books) => [...books, book]);
  }, []);

  return (
    <SafeAreaView style={{ height: "100%", width: "100%" }}>
      <ScrollView
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
          padding: width * 0.036,
        }}
      >
        {books.map((book) => (
          <BookCard bookId={book.id} key={book.id} title={book.title} />
        ))}
      </ScrollView>
      <Button
        variant="primary"
        title="ADD BOOK"
        style={{ position: "absolute", bottom: 100, right: 20 }}
        onPress={() => sheetRef.current?.expand()}
      />
      <AppBottomSheet header="ADD BOOK" ref={sheetRef}>
        <BookForm
          onPressCancel={handleCancelPress}
          onPressSave={handleSavePress}
          onAddBook={handleAddBook}
        />
      </AppBottomSheet>
    </SafeAreaView>
  );
}

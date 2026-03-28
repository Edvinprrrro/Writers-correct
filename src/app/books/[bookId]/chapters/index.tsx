import { router, useGlobalSearchParams, useFocusEffect } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard } from "react-native";
import { Preview } from "@/src/features/preview/Preview";
import { getChaptersByBookId } from "@/src/db/chapters/getChapters";
import { useEffect, useRef, useState, useCallback } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { AppBottomSheet } from "@/src/components/appBottomSheet/AppBottomSheet";
import { ChapterForm } from "@/src/components/forms/ChapterForm";
import { Chapter } from "@/src/types/chapter";
import DraggableFlatList, {
  DragEndParams,
  RenderItemParams,
} from "react-native-draggable-flatlist";
import { updateDisplayOrder } from "@/src/db/chapters/updateDisplayOrder";
import { Button } from "@/src/components/buttons/Button";
import { addChapter } from "@/src/db/chapters/addChapter";

export default function Index() {
  const { bookId } = useGlobalSearchParams<{ bookId?: string | string[] }>();
  const normalizedBookId = Array.isArray(bookId) ? bookId[0] : bookId;

  const [chapters, setChapters] = useState<Chapter[]>([]);
  const sheetRef = useRef<BottomSheet>(null);

  // Redirect if no bookId
  useEffect(() => {
    if (!normalizedBookId) {
      router.replace("../index");
    }
  }, [normalizedBookId]);

  // Get chapters
  useEffect(() => {
    (async () => {
      if (!normalizedBookId) return;

      const data = await getChaptersByBookId(normalizedBookId);
      setChapters(data);
    })();
  }, [normalizedBookId]);

  function handleCancelPress() {
    sheetRef.current?.close();
    Keyboard.dismiss();
  }

  async function handleSavePress(title: string, order: number) {
    const chapter = await addChapter({
      title,
      chapterOrder: order,
      bookId: Number(normalizedBookId),
    });
    setChapters((chapters) => [...chapters, chapter]);

    sheetRef.current?.close();
    Keyboard.dismiss();
  }

  // Make the draggable flat list
  const renderItem = ({ item, drag, isActive }: RenderItemParams<Chapter>) => {
    return (
      <Preview
        title={item.title}
        content="Example content for the chapter preview. This should ideally be a truncated version of the chapter's actual content."
        chapterId={item.id}
        onLongPress={drag}
        chapterNumber={item.chapterOrder}
      />
    );
  };

  function handleDragEnd({ data }: DragEndParams<Chapter>) {
    setChapters(data);
  }

  // Update database when leaving the screen
  useFocusEffect(
    useCallback(() => {
      return () => {
        // Set the display of the state chapters to the indexes
        setChapters((prev) => {
          const updated = prev.map((chapter, index) => ({
            ...chapter,
            displayOrder: index,
          }));

          updateDisplayOrder(updated);
          return updated;
        });
      };
    }, []),
  );

  return (
    <SafeAreaView style={{ height: "100%", width: "100%" }}>
      <DraggableFlatList
        data={chapters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onDragEnd={handleDragEnd}
      />
      <Button
        title="ADD CHAPTER"
        variant="primary"
        style={{ position: "absolute", bottom: 100, right: 20 }}
        onPress={() => sheetRef.current?.expand()}
      />
      <AppBottomSheet header="ADD CHAPTER" ref={sheetRef}>
        <ChapterForm
          onPressCancel={handleCancelPress}
          onPressSave={handleSavePress}
        />
      </AppBottomSheet>
    </SafeAreaView>
  );
}

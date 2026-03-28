import { useCallback } from "react";
import { useGlobalSearchParams } from "expo-router";
import { redirectToChapterTextEditor } from "./previewUtils";
import { style } from "./previewStyle";
import { ThemeText } from "@/src/components/themeFoundation/ThemeText";
import { ThemePressable } from "@/src/components/themeFoundation/ThemePressable";
import { PressableProps, View } from "react-native";
import { VerticalEllipsis } from "@/src/components/VerticalEllipsis";

type PreviewProps = PressableProps & {
  title: string;
  chapterNumber: number;
  content: string;
  chapterId: number;
};

export function Preview({
  title,
  chapterNumber,
  content,
  chapterId,
  ...rest
}: PreviewProps) {
  const { bookId } = useGlobalSearchParams();
  const normalizedBookId = Array.isArray(bookId) ? bookId[0] : bookId;

  const handlePress = useCallback(
    () => redirectToChapterTextEditor(normalizedBookId, chapterId),
    [normalizedBookId, chapterId],
  );

  return (
    <ThemePressable
      {...rest}
      variant="card"
      onPress={handlePress}
      style={style.container}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <ThemeText variant="secondary">Chapter: {chapterNumber}</ThemeText>
        <ThemeText variant="primary">{title}</ThemeText>
        <VerticalEllipsis style={style.verticalEllipsis} />
      </View>

      <ThemeText variant="secondary" numberOfLines={4}>
        {content}
      </ThemeText>
    </ThemePressable>
  );
}

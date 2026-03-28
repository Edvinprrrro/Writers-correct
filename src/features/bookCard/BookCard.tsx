import { useCallback } from "react";
import { style } from "./bookCardStyle";
import { VerticalEllipsis } from "../../components/VerticalEllipsis";
import { redirectToBookDetails } from "./bookCardUtils";
import { ThemeText } from "../../components/themeFoundation/ThemeText";
import { ThemeView } from "../../components/themeFoundation/ThemeView";
import { ThemePressable } from "@/src/components/themeFoundation/ThemePressable";

interface BookCardProps {
  title: string;
  bookId: string;
}

export function BookCard({ title, bookId }: BookCardProps) {
  const handlePress = useCallback(() => {
    redirectToBookDetails(bookId);
  }, [bookId]);

  return (
    <ThemePressable
      variant="card"
      style={style.container}
      onPress={handlePress}
    >
      <VerticalEllipsis style={style.verticalEllipsis} />
      <ThemeView variant="secondary" style={style.lowerStrip}>
        <ThemeText variant="primary">{title}</ThemeText>
      </ThemeView>
    </ThemePressable>
  );
}

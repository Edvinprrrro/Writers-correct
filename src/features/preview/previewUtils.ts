import { router } from "expo-router";

export function redirectToChapterTextEditor(bookId: string, chapterId: number) {
  router.push({
    pathname: "/books/[bookId]/chapters/[chapterId]",
    params: { bookId, chapterId },
  });
}

import { router } from "expo-router";

export function redirectToBookDetails(bookId: string) {
  router.push({ pathname: "/books/[bookId]", params: { bookId } });
}

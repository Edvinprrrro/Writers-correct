export type Chapter = {
  id: number;
  title: string;
  bookId: number;
  chapterOrder: number;
  displayOrder: number;
  createdAt: string;
};

export type AddChapterData = Omit<Chapter, "id" | "createdAt" | "displayOrder">;

export type DbChapterRow = {
  id: number;
  title: string;
  book_id: number;
  chapter_order: number;
  display_order: number;
  created_at: string;
};

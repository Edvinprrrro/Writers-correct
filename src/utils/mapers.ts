import { DbBookRow } from "../types/book";
import { DbChapterRow } from "../types/chapter";

export function mapDbChapterRow(row: DbChapterRow) {
  return {
    id: row.id,
    title: row.title,
    bookId: row.book_id,
    chapterOrder: row.chapter_order,
    displayOrder: row.display_order,
    createdAt: row.created_at,
  };
}

export function mapDbBookRow(row: DbBookRow) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    createdAt: row.created_at,
  };
}

import { mapDbChapterRow } from "@/src/utils/mapers";
import { AddChapterData, DbChapterRow } from "@/src/types/chapter";
import { getDb } from "../database";

export async function addChapter({
  title,
  chapterOrder,
  bookId,
}: AddChapterData) {
  const db = await getDb();
  const displayOrderRow = await db.getFirstAsync<{ displayOrder: number }>(
    "SELECT MAX(display_order) as displayOrder FROM chapters WHERE book_id = ?",
    bookId,
  );
  const displayOrder = (displayOrderRow?.displayOrder ?? -1) + 1;

  const result = await db.runAsync(
    `INSERT INTO chapters (title, chapter_order, book_id, display_order) VALUES (?, ?, ?, ?)`,
    [title, chapterOrder, bookId, displayOrder],
  );
  const row = await db.getFirstAsync<DbChapterRow>(
    `SELECT * FROM chapters WHERE id = ?`,
    result.lastInsertRowId,
  );

  const chapter = mapDbChapterRow(row!);

  return chapter;
}

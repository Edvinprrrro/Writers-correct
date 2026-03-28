import { mapDbChapterRow } from "@/src/utils/mapers";
import { Chapter, DbChapterRow } from "@/src/types/chapter";
import { getDb } from "../database";

export async function getChaptersByBookId(bookId: string): Promise<Chapter[]> {
  const db = await getDb();
  const rows: DbChapterRow[] = await db.getAllAsync(
    `SELECT * FROM chapters WHERE book_id = ? ORDER BY display_order ASC`,
    [bookId],
  );
  const chapters = rows.map(mapDbChapterRow);

  return chapters;
}

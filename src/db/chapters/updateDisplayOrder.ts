import { getDb } from "../database";
import { Chapter } from "../../types/chapter";

export async function updateDisplayOrder(chapters: Chapter[]) {
  const db = await getDb();
  await db.withTransactionAsync(async () => {
    for (const chapter of chapters) {
      await db.runAsync(
        "UPDATE chapters SET display_order = ? WHERE id = ?",
        chapter.displayOrder,
        chapter.id,
      );
    }
  });
}

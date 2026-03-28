import { mapDbBookRow } from "../utils/mapers";
import { Book, DbBookRow } from "../types/book";
import { getDb } from "./database";

export async function getBooks(): Promise<Book[]> {
  const db = await getDb();
  const rows: DbBookRow[] = await db.getAllAsync("SELECT * FROM books;");
  const books = rows.map(mapDbBookRow);

  return books;
}

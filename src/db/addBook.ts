import { AddBookData } from "../types/book";
import { getDb } from "./database";

export async function addBook({ title, description }: AddBookData) {
  const db = await getDb();

  const normalizedDescription = description?.trim() === "" ? null : description;

  const result = await db.runAsync(
    `INSERT INTO books (title, description) VALUES ($title, $description)`,
    { $title: title, $description: normalizedDescription ?? null },
  );

  const insertedBook = {
    id: result.lastInsertRowId,
    title: title,
    description: description,
  };

  return insertedBook;
}

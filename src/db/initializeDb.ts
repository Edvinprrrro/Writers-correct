import { getDb } from "./database";

// one-time init promise
let initPromise: Promise<void> | null = null;

export function initializeDbOnce() {
  if (!initPromise) {
    initPromise = (async () => {
      const db = await getDb();
      await db.execAsync(`
        PRAGMA foreign_keys = ON;

        CREATE TABLE IF NOT EXISTS books (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          description TEXT,
          created_at TEXT NOT NULL DEFAULT (datetime('now'))
        );

        CREATE TABLE IF NOT EXISTS chapters (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          title TEXT NOT NULL,
          book_id INTEGER NOT NULL,
          chapter_order INTEGER NOT NULL,
          display_order INTEGER NOT NULL,
          created_at TEXT NOT NULL DEFAULT (datetime('now')),
          FOREIGN KEY (book_id) REFERENCES books(id) ON DELETE CASCADE
        );
      `);
    })();
  }
  return initPromise;
}

import * as SQLite from "expo-sqlite";

let _db: SQLite.SQLiteDatabase | null = null;

export async function getDb() {
  if (!_db) {
    _db = await SQLite.openDatabaseAsync("app.db");
  }
  return _db;
}

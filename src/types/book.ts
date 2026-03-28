export type DbBookRow = {
  id: number;
  title: string;
  description: string;
  created_at: string;
};

export type Book = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
};

export type AddBookData = Omit<Book, "id" | "createdAt">;

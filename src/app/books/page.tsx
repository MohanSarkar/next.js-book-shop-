import BookCard from "@/components/homepage/BookCard";
import { Book } from "@/components/types/books.type";
import fs from "fs/promises";
import path from "path";

async function getBooks(): Promise<Book[]> {
  const filePath = path.join(process.cwd(), "public", "booksData.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}

export default async function AllBooksPage() {
  const books = await getBooks();

  return (
    <div className="container mx-auto px-4 md:px-12 my-10">
      <h1 className="text-3xl font-bold text-center text-[#131313] mb-8">
        All Books
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}
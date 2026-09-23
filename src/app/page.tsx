import React from 'react';
import fs from 'fs';
import path from 'path';
import { Book } from '../components/types/books.type';
import BookCard from '../components/homepage/BookCard'; // 

// Fetch books from public/booksData.json
const getBooks = (): Book[] => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'booksData.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('Failed to read books JSON:', error);
    return [];
  }
};

const HomePage = () => {
  const allBooks = getBooks();
  // Slice to get only the first 6 books for Home page
  const homeBooks = allBooks.slice(0, 6);

  return (
    <section className="container mx-auto my-[70px] px-4 md:px-12">
      <h2 className="text-4xl font-extrabold text-center text-[#131313] mb-9">
        Books
      </h2>

      {/* Grid displaying 6 books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {homeBooks.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default HomePage;
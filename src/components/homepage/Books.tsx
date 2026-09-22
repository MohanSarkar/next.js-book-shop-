import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

// TypeScript Interface
interface Book {
  bookId: number;
  bookName: string;
  author: string;
  image: string;
  review: string;
  totalPages: number;
  rating: number;
  category: string;
  tags: string[];
  publisher: string;
  yearOfPublishing: number;
}

// public ফোল্ডার থেকে সরাসরি JSON ফাইল রিড করার ফাংশন
const getBooks = (): Book[] => {
  try {
    const filePath = path.join(process.cwd(), 'public', 'booksData.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('JSON ফাইল পড়তে সমস্যা হয়েছে:', error);
    return [];
  }
};

const Books = () => {
  const booksData = getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4 md:px-12">
      {/* Title Section */}
      <h2 className="text-4xl font-extrabold text-center text-[#131313] mb-9">
        Books
      </h2>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.map((book) => (
          <Link
            key={book.bookId}
            href={`/books/${book.bookId}`}
            className="card border border-slate-200 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Image Container */}
              <div className="bg-[#F3F3F3] rounded-2xl py-8 flex justify-center items-center mb-6 h-[230px]">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={130}
                  height={170}
                  className="h-[160px] w-auto object-contain shadow-md rounded"
                  unoptimized
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-4">
                {book.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#23BE0A]/10 text-[#23BE0A] text-sm font-medium px-4 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Book Title & Author */}
              <h3 className="text-2xl font-bold text-[#131313] mb-2 line-clamp-1">
                {book.bookName}
              </h3>
              <p className="text-gray-600 font-medium mb-5">
                By : {book.author}
              </p>
            </div>

            {/* Dashed Separator & Footer */}
            <div>
              <div className="border-t border-dashed border-gray-300 my-4"></div>
              <div className="flex justify-between items-center text-gray-600 font-medium">
                <span>{book.category}</span>
                <div className="flex items-center gap-2">
                  <span>{book.rating.toFixed(2)}</span>
                  {/* Star Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Books;
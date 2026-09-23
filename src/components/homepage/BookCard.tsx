'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Book } from '../types/books.type';

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, tags } = book;
  const [imgSrc, setImgSrc] = useState(image || '/book.ico'); // Default fallback image

  return (
    <Link href={`/books/${bookId}`} className="block h-full">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col justify-between h-full hover:shadow-lg transition-all duration-300">
        <div>
          {/* Image Container */}
          <div className="bg-[#F3F3F3] rounded-2xl p-6 flex items-center justify-center h-60 w-full mb-6">
            <div className="relative w-32 h-44 flex items-center justify-center">
              <Image
                src={imgSrc}
                alt={bookName}
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-contain drop-shadow-md"
                onError={() => setImgSrc('/book.ico')} // ছবি না পেলে ব্রোকেন হবে না, বইয়ের আইকন দেখাবে
              />
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags?.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[#23BE0A]/10 text-[#23BE0A] font-medium px-3 py-1 rounded-full text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Author */}
          <h2 className="text-xl font-bold text-[#131313] line-clamp-1 mb-2" title={bookName}>
            {bookName}
          </h2>
          <p className="text-gray-600 font-medium text-sm mb-4">
            By : {author}
          </p>
        </div>

        {/* Footer Info: Category & Rating */}
        <div className="border-t border-dashed border-gray-200 pt-4 flex items-center justify-between mt-2 text-sm text-gray-600">
          <span className="font-medium text-gray-500">{category}</span>
          <div className="flex items-center gap-1 font-semibold text-[#131313]">
            <span>{rating}</span>
            <svg
              className="w-4 h-4 text-amber-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
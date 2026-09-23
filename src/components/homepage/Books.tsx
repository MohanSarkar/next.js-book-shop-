import React from 'react';
import { Book } from '../../components/types/books.type';

// Define props interface for BookCard
interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  // Guard clause: Prevent crashing if book data is undefined
  if (!book) return null;

  return (
    <div className="border border-gray-200 p-6 rounded-2xl">
      {/* Book Image Section */}
      <div className="bg-[#F3F3F3] p-4 rounded-2xl flex justify-center items-center h-[230px]">
        <img
          src={book?.image}
          alt={book?.bookName || 'Book Cover'}
          className="h-full object-contain"
        />
      </div>

      {/* Tags Section */}
      <div className="flex gap-2 my-4 flex-wrap">
        {book?.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-[#23BE0A0D] text-[#23BE0A] px-3 py-1 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Book Title and Author */}
      <h3 className="text-2xl font-bold text-[#131313] mb-2">
        {book?.bookName}
      </h3>
      <p className="text-base font-medium text-[#131313CC]">
        By : {book?.author}
      </p>
    </div>
  );
};

export default BookCard;
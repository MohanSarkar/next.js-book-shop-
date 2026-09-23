'use client';

import React from 'react';
import toast from 'react-hot-toast';
import { Book } from '@/components/types/books.type';
import { getReadBooks, saveReadBook, getWishlistBooks, saveWishlistBook } from '@/utlis/localStorage';

interface BookActionsProps {
  book: Book;
}

const BookActions: React.FC<BookActionsProps> = ({ book }) => {
  const handleRead = () => {
    const readBooks = getReadBooks();
    const exists = readBooks.some((b) => b.bookId === book.bookId);

    if (exists) {
      toast.error('You have already read this book!');
    } else {
      saveReadBook(book);
      toast.success('Book added to Read list!');
    }
  };

  const handleWishlist = () => {
    const readBooks = getReadBooks();
    const wishlistBooks = getWishlistBooks();

    const isRead = readBooks.some((b) => b.bookId === book.bookId);
    const isWishlisted = wishlistBooks.some((b) => b.bookId === book.bookId);

    if (isRead) {
      toast.error('You have already read this book!');
    } else if (isWishlisted) {
      toast.error('Book is already in your Wishlist!');
    } else {
      saveWishlistBook(book);
      toast.success('Book added to Wishlist!');
    }
  };

  return (
    <div className="flex gap-4 mt-6">
      <button
        onClick={handleRead}
        className="btn border border-gray-300 bg-white text-black hover:bg-gray-100 font-semibold px-7 rounded-xl"
      >
        Read
      </button>
      <button
        onClick={handleWishlist}
        className="btn bg-[#59C6D2] hover:bg-[#43aeb9] text-white font-semibold px-7 border-none rounded-xl"
      >
        Wishlist
      </button>
    </div>
  );
};

export default BookActions;
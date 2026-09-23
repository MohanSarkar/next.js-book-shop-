'use client';

import React, { useState, useEffect } from 'react';
import BookCard from '@/components/homepage/BookCard';
import { Book } from '@/components/types/books.type';
import { getReadBooks, getWishlistBooks } from '@/utlis/localStorage';

export default function ListedBooksPage() {
  const [activeTab, setActiveTab] = useState<'read' | 'wishlist'>('read');
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [wishlistBooks, setWishlistBooks] = useState<Book[]>([]);
  const [sortOption, setSortOption] = useState<string>('');

  // Fixed: Defers state updates to prevent synchronous cascading re-renders warning
  useEffect(() => {
    queueMicrotask(() => {
      setReadBooks(getReadBooks());
      setWishlistBooks(getWishlistBooks());
    });
  }, []);

  const handleSort = (option: string) => {
    setSortOption(option);

    const sortFn = (a: Book, b: Book) => {
      if (option === 'rating') return (b.rating || 0) - (a.rating || 0);
      if (option === 'pages') return (b.totalPages || 0) - (a.totalPages || 0);
      if (option === 'year') return (b.yearOfPublishing || 0) - (a.yearOfPublishing || 0);
      return 0;
    };

    setReadBooks((prev) => [...prev].sort(sortFn));
    setWishlistBooks((prev) => [...prev].sort(sortFn));
  };

  const displayedBooks = activeTab === 'read' ? readBooks : wishlistBooks;

  return (
    <div className="container mx-auto px-4 md:px-12 my-8">
      {/* Page Title Header */}
      <div className="bg-[#1313130D] rounded-2xl py-8 text-center mb-8">
        <h1 className="text-3xl font-extrabold text-[#131313]">Books</h1>
      </div>

      {/* Sort By Dropdown */}
      <div className="flex justify-center mb-8">
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="bg-[#23BE0A] text-white font-semibold px-6 py-3 rounded-xl cursor-pointer outline-none hover:bg-[#1fa909] transition"
        >
          <option value="" disabled hidden>
            Sort By
          </option>
          <option value="rating" className="bg-white text-black">
            Rating
          </option>
          <option value="pages" className="bg-white text-black">
            Number of pages
          </option>
          <option value="year" className="bg-white text-black">
            Publisher year
          </option>
        </select>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab('read')}
          className={`px-6 py-3 font-semibold text-lg border-b-2 transition ${
            activeTab === 'read'
              ? 'border-[#23BE0A] text-[#23BE0A]'
              : 'border-transparent text-gray-500 hover:text-black'
          }`}
        >
          Read Books ({readBooks.length})
        </button>
        <button
          onClick={() => setActiveTab('wishlist')}
          className={`px-6 py-3 font-semibold text-lg border-b-2 transition ${
            activeTab === 'wishlist'
              ? 'border-[#23BE0A] text-[#23BE0A]'
              : 'border-transparent text-gray-500 hover:text-black'
          }`}
        >
          Wishlist Books ({wishlistBooks.length})
        </button>
      </div>

      {/* Book List */}
      <div className="flex flex-col gap-6">
        {displayedBooks.length > 0 ? (
          displayedBooks.map((book, index) => (
            <BookCard key={book.bookId || index} book={book} />
          ))
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            <p className="text-xl text-gray-500 font-medium">
              No books added in {activeTab === 'read' ? 'Read Books' : 'Wishlist'} list yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
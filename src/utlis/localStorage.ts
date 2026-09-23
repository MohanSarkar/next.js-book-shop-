import { Book } from '@/components/types/books.type';

// Read Books Get & Save
export const getReadBooks = (): Book[] => {
  if (typeof window === 'undefined') return [];
  const stored = sessionStorage.getItem('read-books');
  return stored ? JSON.parse(stored) : [];
};

export const saveReadBook = (book: Book) => {
  const readBooks = getReadBooks();
  const exists = readBooks.some((item) => item.bookId === book.bookId);
  if (!exists) {
    readBooks.push(book);
    sessionStorage.setItem('read-books', JSON.stringify(readBooks));
  }
};

// Wishlist Books Get & Save
export const getWishlistBooks = (): Book[] => {
  if (typeof window === 'undefined') return [];
  const stored = sessionStorage.getItem('wishlist-books');
  return stored ? JSON.parse(stored) : [];
};

export const saveWishlistBook = (book: Book) => {
  const wishlistBooks = getWishlistBooks();
  const exists = wishlistBooks.some((item) => item.bookId === book.bookId);
  if (!exists) {
    wishlistBooks.push(book);
    sessionStorage.setItem('wishlist-books', JSON.stringify(wishlistBooks));
  }
};
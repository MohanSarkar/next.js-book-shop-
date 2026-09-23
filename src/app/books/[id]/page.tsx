import fs from 'fs';
import path from 'path';
import { Book } from '@/components/types/books.type';
import BookActions from '@/components/homepage/BookActions';

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

const BookDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const resolvedParams = await params;
  const bookId = resolvedParams.id;

  const booksData = getBooks();
  const singleBook = booksData.find((b) => String(b.bookId) === bookId);

  if (!singleBook) {
    return (
      <div className="container mx-auto my-[100px] text-center">
        <h2 className="text-3xl font-bold text-red-500">Book Not Found!</h2>
      </div>
    );
  }

  return (
    <section className="container mx-auto my-[50px] px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-[#F3F3F3] p-12 rounded-3xl flex justify-center items-center min-h-[550px]">
          <img 
            src={singleBook.image} 
            alt={singleBook.bookName} 
            className="max-h-[420px] object-contain shadow-md rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold text-[#131313] mb-3">
              {singleBook.bookName}
            </h1>
            <p className="text-lg font-semibold text-[#131313CC] mb-4">
              By : {singleBook.author}
            </p>

            <hr className="my-4 border-gray-200" />
            <p className="text-lg font-semibold text-[#131313CC] mb-4">
              {singleBook.category || 'Fiction'}
            </p>

            <hr className="my-4 border-gray-200" />
            <p className="text-[#131313B3] leading-relaxed mb-6">
              <span className="font-bold text-[#131313]">Review : </span>
              {singleBook.review || 'No review available for this book.'}
            </p>

            <div className="flex gap-3 items-center mb-6 flex-wrap">
              <span className="font-bold text-[#131313]">Tag</span>
              {singleBook.tags?.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-[#23BE0A0D] text-[#23BE0A] px-4 py-1.5 rounded-full text-sm font-semibold"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="grid grid-cols-2 gap-y-3 max-w-md mb-8 text-sm md:text-base">
              <span className="text-[#131313B3]">Number of Pages:</span>
              <span className="font-bold text-[#131313]">{singleBook.totalPages || 281}</span>

              <span className="text-[#131313B3]">Publisher:</span>
              <span className="font-bold text-[#131313]">{singleBook.publisher || 'J.B Lippincott & Co.'}</span>

              <span className="text-[#131313B3]">Year of Publishing:</span>
              <span className="font-bold text-[#131313]">{singleBook.yearOfPublishing || 1960}</span>

              <span className="text-[#131313B3]">Rating:</span>
              <span className="font-bold text-[#131313]">{singleBook.rating || 4.8}</span>
            </div>
          </div>

          <BookActions book={singleBook} />
        </div>
      </div>
    </section>
  );
};

export default BookDetailsPage;
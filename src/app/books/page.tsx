import books from "@/data/books.json";
import Link from "next/link";

const BooksPage = () => {
  return (
    <div className="bg-blue-950 h-full p-10">
      <div className="flex items-center justify-center">
        <h2 className="text-blue-950 text-5xl font-bold backdrop-blur-sm bg-blue-300/40 rounded-full px-10 py-4 mt-10 mb-20">
          Book Catalog
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center text-blue-950 text-2xl backdrop-blur-sm bg-blue-300/40 rounded-full p-15"
          >
            <img
              src={book.cover}
              alt={book.title}
              className="h-100 w-full object-contain rounded mt-4"
            />
            <h2 className="text-3xl font-bold mt-4 text-center">{book.title}</h2>
            <h3 className="text-2xl font-bold mt-2 mb-2 text-center">{book.author}</h3>
            <p className="text-2xl  mt-2 mb-2 text-center">{book.shortDescription}</p>
            <div className="flex items-center justify-center mt-4">
            <Link
              href={`/books/{book.id}`}
              className=" text-blue-300 text-2xl font-bold backdrop-blur-sm bg-blue-950 px-7 py-4 mt-8"
            >
              Read more...
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;

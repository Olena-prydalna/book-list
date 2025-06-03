import books from "@/data/books.json";
import { notFound } from "next/navigation";

// имитация медленного интернет-соединения
// const SimulateSlowNetwork = () =>
//   new Promise((resolve) => setTimeout(resolve, 2000)); // 2 секунд

// const BooksDetailPage = async ({ params }: { params: { booksId: string } }) => {

//   await SimulateSlowNetwork();

const BooksDetailPage = ({ params }: { params: { booksId: string } }) => {
  const book = books.find((book) => book.id === params.booksId);
  if (!book) return notFound();

  return (
    <div className="bg-blue-950 min-h-screen p-10">
      <div className="flex flex-col items-center text-blue-950 backdrop-blur-sm bg-blue-300/40 rounded-full p-4 mb-10">
        <h2 className="text-4xl font-bold text-center mb-4">{book.title}</h2>
        <h3 className=" text-blue-950 text-3xl font-bold text-center">
          {book.author}
        </h3>
      </div>

      <img
        src={book.cover}
        alt={book.title}
        className="h-120 w-full object-contain rounded mb-10"
      />
      <div className="flex flex-col items-center ">
        <p className="w-1/2 text-blue-300 text-2xl text-center">
          {book.fullDescription}
        </p>
      </div>
    </div>
  );
};

export default BooksDetailPage;

import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-blue-950 flex items-center justify-center flex-col p-15 relative ">
      <h1 className="text-blue-950 text-5xl font-bold backdrop-blur-sm bg-blue-300/40 rounded-full px-10 py-4 absolute top-5">
        Booklist
      </h1>
      <img
        src="/main.jpg"
        alt="main"
        className="h-full w-150 object-cover rounded"
      />
    </div>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen bg-[url('/main-bg.jpg')] bg-cover bg-center flex items-center justify-center">
      <h1 className="text-blue-950 text-5xl font-bold backdrop-blur-sm bg-blue-300/40 rounded-full px-10 py-4 mt-15 ml-5">
        Booklist
      </h1>
    </div>
  );
}

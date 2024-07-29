import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-white">
      <div className="flex flex-col items-center justify-around text-center h-1/2">
        <h1 className="flex flex-col text-6xl font-black leading-none uppercase font-bebas-neue sm:text-8xl title">
          ¡Welcome to my store!
        </h1>
        <p className="text-sm sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut.
        </p>
        <Link
          href={"/products"}
          className="px-4 py-2 bg-pink-500 border-2 border-transparent rounded-lg font-bolduppercase text-md hover:bg-pink-400"
        >
          EXPLORE
        </Link>
      </div>
    </main>
  );
}

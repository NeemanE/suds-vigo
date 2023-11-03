import Link from 'next/link';

export default function Choice() {
  return (
    <div className="flex flex-col w-full lg:flex-row">
      <Link href="/suds&duds" className="grid flex-grow h-screen card bg-blue-500 rounded-box place-items-center cursor-pointer">
        Suds & Duds
      </Link>

      <Link href="/vi-go-tire" className="grid flex-grow h-screen card bg-green-300 rounded-box place-items-center cursor-pointer">
        V.I. Go Tire Shop
      </Link>
    </div>
  );
}

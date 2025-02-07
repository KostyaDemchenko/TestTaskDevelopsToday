import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <Link className="text-3xl font-bold" href="/">
          Car Dealer
        </Link>
      </div>
    </header>
  );
}

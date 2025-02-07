export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center py-4">
      <p className="text-sm text-gray-700">
        &copy; {new Date().getFullYear()} Car Dealer. All rights reserved.
      </p>
    </footer>
  );
}

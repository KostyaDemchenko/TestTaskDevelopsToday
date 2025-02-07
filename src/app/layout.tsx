import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';

import './globals.css';

export const metadata = {
  title: 'Car Dealer App',
  description: 'Car Dealer Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

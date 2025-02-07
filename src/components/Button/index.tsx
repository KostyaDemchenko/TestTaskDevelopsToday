import Link from 'next/link';

interface NextButtonProps {
  isEnabled: boolean;
  href: string;
  children: React.ReactNode;
}

export default function NextButton({
  isEnabled,
  href,
  children,
}: NextButtonProps) {
  if (isEnabled) {
    return (
      <Link href={href}>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button
        disabled
        className="px-6 py-3 bg-gray-400 text-white rounded-lg cursor-not-allowed"
      >
        {children}
      </button>
    );
  }
}

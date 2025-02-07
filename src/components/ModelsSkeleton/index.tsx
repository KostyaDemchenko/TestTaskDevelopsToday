export default function ModelsSkeleton() {
  return (
    <ul className="divide-y divide-gray-200">
      {Array.from({ length: 3 }).map((_, index) => (
        <li key={index} className="py-4">
          <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse"></div>
        </li>
      ))}
    </ul>
  );
}

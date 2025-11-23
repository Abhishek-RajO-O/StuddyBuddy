export default function ResourceCard({ title, description, author }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>

      <p className="text-xs text-gray-400 mt-4">
        Posted by <span className="font-medium text-gray-500">{author}</span>
      </p>
    </div>
  );
}

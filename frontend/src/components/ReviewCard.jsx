export default function ReviewCard({ user, stars, review }) {
  return (
    <div className="p-4 bg-gray-800/60 border border-gray-700 rounded-xl hover:border-gray-600 transition">

      {/* User row */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300">
          {user[0]}
        </div>

        <div>
          <p className="font-semibold">{user}</p>
          <p className="text-sm text-gray-400">Student</p>
        </div>
      </div>

      {/* Stars */}
      <div className="mt-3 text-yellow-400 text-sm">
        {"⭐".repeat(stars)}
      </div>

      {/* Review text */}
      <p className="mt-3 text-gray-300">
        {review}
      </p>

    </div>
  );
}

export default function LeaderboardRow({ rank, name, points }) {
  return (
    <div className="grid grid-cols-3 p-3 border-b border-gray-700 last:border-none text-sm">
      <span className="font-semibold">{rank}</span>
      <span>{name}</span>
      <span className="text-right font-medium">{points}</span>
    </div>
  );
}

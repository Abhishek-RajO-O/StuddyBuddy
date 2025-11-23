import LeaderboardRow from "../components/LeaderboardRow";

export default function Leaderboard() {
  const dummyLeaders = [
    { id: 1, name: "Alice", points: 120 },
    { id: 2, name: "John", points: 95 },
    { id: 3, name: "Sarah", points: 80 },
    { id: 4, name: "Michael", points: 60 },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <h1 className="text-2xl font-semibold">Leaderboard</h1>

      <div className="bg-gray-800/60 border border-gray-700 rounded-xl">
        <div className="grid grid-cols-3 p-3 bg-gray-900/40 border-b border-gray-700 font-semibold text-sm">
          <span>Rank</span>
          <span>Name</span>
          <span className="text-right">Points</span>
        </div>

        {dummyLeaders.map((leader, index) => (
          <LeaderboardRow
            key={leader.id}
            rank={index + 1}
            name={leader.name}
            points={leader.points}
          />
        ))}
      </div>
    </div>
  );
}

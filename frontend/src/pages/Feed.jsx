export default function Feed() {
  const dummyResources = [
    { id: 1, title: "React Hooks Guide", author: "Alice", rating: 4.5 },
    { id: 2, title: "Java Roadmap", author: "John", rating: 4.2 },
    { id: 3, title: "Spring Boot Notes", author: "Emma", rating: 4.8 },
  ];
  return (
    <div className="space-y-4">
      {" "}
      <h1 className="text-2xl font-semibold">Feed</h1>{" "}
      <div className="grid gap-4">
        {" "}
        {dummyResources.map((res) => (
          <div
            key={res.id}
            className="p-4 bg-gray-800/60 border border-gray-700 rounded-xl hover:border-gray-600 transition"
          >
            {" "}
            <h2 className="text-lg font-semibold">{res.title}</h2>{" "}
            <p className="text-gray-400 text-sm">by {res.author}</p>{" "}
            <div className="mt-2 text-yellow-400 text-sm">
              {" "}
              ⭐ {res.rating}{" "}
            </div>{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
}

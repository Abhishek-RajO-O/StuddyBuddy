import ReviewCard from "../components/ReviewCard";

export default function Reviews() {
  const dummyReviews = [
    { id: 1, user: "Alice", stars: 5, review: "Amazing resource! Very helpful." },
    { id: 2, user: "Bob", stars: 4, review: "Good content, well explained." },
    { id: 3, user: "John", stars: 4, review: "Solid material, recommended." },
    { id: 4, user: "Sophie", stars: 5, review: "Great structure and super clean!" },
  ];

  return (
    <div className="p-2 sm:p-4 space-y-4">

      <h1 className="text-2xl font-semibold">Reviews</h1>

      {/* Responsive grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {dummyReviews.map((rev) => (
          <ReviewCard 
            key={rev.id} 
            user={rev.user} 
            stars={rev.stars} 
            review={rev.review} 
          />
        ))}
      </div>

    </div>
  );
}
